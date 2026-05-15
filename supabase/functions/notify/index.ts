// supabase/functions/notify/index.ts
// Triggered by Supabase webhooks on test_scores and notes table inserts.
//
// Routing rules:
//   test_scores INSERT  → notify ALL tokens (everyone, authors included)
//   notes INSERT public → notify ALL tokens (everyone)
//   notes INSERT private→ notify ONLY the other editor (not the author, not guests)

import { createClient } from "https://esm.sh/@supabase/supabase-js@2";
import { create, getNumericDate } from "https://deno.land/x/djwt@v3.0.2/mod.ts";

const SUPABASE_URL = Deno.env.get("SUPABASE_URL")!;
const SUPABASE_SERVICE = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
const SA_JSON = Deno.env.get("FCM_SERVICE_ACCOUNT")!;

const USERS: Record<string, { name: string; examType: string }> = {
  "8728f128-be6f-47b7-bb39-e11dc622e937": { name: "Rishit", examType: "jee" },
  "63a3a690-9e02-4359-9276-1e63f69c33a7": { name: "Vedanta", examType: "jee" },
  "4a6f860a-28cc-4603-a9f5-7e7f39113ed2": { name: "Adwiti", examType: "neet" },
};

// JEE group ids — private notes only cross-notify within this group
const JEE_IDS = Object.entries(USERS)
  .filter(([, v]) => v.examType === "jee")
  .map(([id]) => id);

// ── OAuth2 access token from service account ──────────────────────────────
async function getAccessToken(sa: Record<string, string>): Promise<string> {
  const pemContents = sa.private_key
    .replace("-----BEGIN PRIVATE KEY-----", "")
    .replace("-----END PRIVATE KEY-----", "")
    .replace(/\n/g, "");

  const binaryKey = Uint8Array.from(atob(pemContents), (c) => c.charCodeAt(0));
  const cryptoKey = await crypto.subtle.importKey(
    "pkcs8",
    binaryKey,
    { name: "RSASSA-PKCS1-v1_5", hash: "SHA-256" },
    false,
    ["sign"],
  );

  const jwt = await create(
    { alg: "RS256", typ: "JWT" },
    {
      iss: sa.client_email,
      scope: "https://www.googleapis.com/auth/firebase.messaging",
      aud: "https://oauth2.googleapis.com/token",
      exp: getNumericDate(3600),
      iat: getNumericDate(0),
    },
    cryptoKey,
  );

  const res = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: `grant_type=urn:ietf:params:oauth:grant-type:jwt-bearer&assertion=${jwt}`,
  });

  const data = await res.json();
  return data.access_token;
}

// ── Send one FCM message ───────────────────────────────────────────────────
async function sendFCM(
  token: string,
  title: string,
  body: string,
  data: Record<string, string>,
  accessToken: string,
  projectId: string,
) {
  const res = await fetch(
    `https://fcm.googleapis.com/v1/projects/${projectId}/messages:send`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        message: {
          token,
          notification: { title, body },
          data,
          android: {
            priority: "high",
            notification: { sound: "default" },
          },
        },
      }),
    },
  );
  return res.json();
}

// ── Main handler ──────────────────────────────────────────────────────────
Deno.serve(async (req) => {
  try {
    const payload = await req.json();
    const record = payload.record;
    const table = payload.table;

    if (!record || !record.user_id) {
      return new Response("no record", { status: 200 });
    }

    const actorId = record.user_id;
    const actorName = USERS[actorId]?.name ?? "Someone";
    const actorExam = USERS[actorId]?.examType ?? "jee";

    // For private notes: notify everyone in the same exam group except the author
    const sameGroupIds = Object.entries(USERS)
      .filter(([id, v]) => v.examType === actorExam && id !== actorId)
      .map(([id]) => id);

    // ── Build notification content ────────────────────────────────────────
    let title = "";
    let body = "";
    let notifyAll = false; // true = all tokens, false = only otherId's tokens

    if (table === "test_scores") {
      title = `${actorName} added a test score`;
      body = `${record.score}/${record.max_score} in ${record.subject}`;
      notifyAll = true; // test scores → everyone
    } else if (table === "notes") {
      const isPublic = record.is_public === true;

      if (isPublic) {
        title = `${actorName} posted a public note`;
        body = record.title || "New note";
        notifyAll = true; // public note → everyone
      } else {
        title = `${actorName} posted a note`;
        body = record.title || "New private note";
        notifyAll = false; // private note → only the other editor
      }
    } else {
      return new Response("unknown table", { status: 200 });
    }

    // ── Fetch target tokens ───────────────────────────────────────────────
    // Must use service role key — bypasses RLS so we can read all tokens.
    const db = createClient(SUPABASE_URL, SUPABASE_SERVICE, {
      auth: { persistSession: false },
    });

    console.log(
      `[notify] fetching tokens — notifyAll=${notifyAll}, sameGroup=${sameGroupIds}`,
    );

    let query = db.from("device_tokens").select("token, user_id, is_anonymous");

    if (!notifyAll) {
      // Private note: only same-group editors (e.g. Rishit ↔ Vedanta), not guests, not cross-group
      query = query.in("user_id", sameGroupIds);
    }

    const { data: tokens, error } = await query;

    console.log(
      `[notify] token fetch result: count=${tokens?.length ?? 0}, error=${error?.message ?? "none"}`,
    );

    if (error) {
      console.error("[notify] token fetch error:", error.message);
      return new Response("db error", { status: 500 });
    }

    if (!tokens?.length) {
      console.log("[notify] no tokens in DB");
      return new Response("no tokens", { status: 200 });
    }

    // Filter out the author's own devices so they don't self-notify
    const filtered = tokens.filter((t) => t.user_id !== actorId);

    console.log(
      `[notify] after filtering author: ${filtered.length} tokens remain`,
    );

    if (!filtered.length) {
      console.log("[notify] no tokens after filtering author");
      return new Response("no tokens after filter", { status: 200 });
    }

    // ── Send FCM ──────────────────────────────────────────────────────────
    const sa = JSON.parse(SA_JSON);
    const accessToken = await getAccessToken(sa);
    const projectId = sa.project_id;
    const fcmData = { table, actor: actorName };

    const results = await Promise.all(
      filtered.map(async ({ token }) => {
        const result = await sendFCM(
          token,
          title,
          body,
          fcmData,
          accessToken,
          projectId,
        );

        // Auto-clean stale tokens — FCM returns UNREGISTERED when a device
        // has uninstalled the app or the token has been rotated.
        const errorCode = result?.error?.details?.[0]?.errorCode;
        if (errorCode === "UNREGISTERED" || errorCode === "INVALID_ARGUMENT") {
          console.log(
            `[notify] removing stale token: ${token.slice(0, 20)}...`,
          );
          await db.from("device_tokens").delete().eq("token", token);
        }

        return result;
      }),
    );

    const succeeded = results.filter((r) => r?.name).length;
    const failed = results.filter((r) => r?.error).length;
    console.log(
      `[notify] done — ${succeeded} sent, ${failed} stale tokens cleaned`,
    );
    return new Response(JSON.stringify({ ok: true, succeeded, failed }), {
      status: 200,
    });
  } catch (err) {
    console.error("[notify] error:", err);
    return new Response(String(err), { status: 500 });
  }
});
