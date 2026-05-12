// ── AUTH.JS ───────────────────────────────────────────────────────────────
// Handles GitHub OAuth.
// Rishit and Vedanta can each edit their own progress.
// Everyone else (logged in or not) is read-only.
//
// ANDROID OAUTH FLOW (final):
//   1. User taps login → Capacitor Browser opens Chrome Custom Tab with the
//      Supabase GitHub OAuth URL.
//   2. User authenticates on GitHub.
//   3. Supabase redirects to: jeemap://login#access_token=...&refresh_token=...
//   4. Android sees jeemap:// scheme → intent filter in AndroidManifest
//      matches → closes Chrome Tab → brings app to foreground.
//   5. App.addListener('appUrlOpen') fires with the full jeemap:// URL.
//   6. We parse the hash fragment and call DB.auth.setSession() directly
//      inside the WebView — session is now live in the app.

const Auth = (() => {
  const USERS = {
    rishit: "8728f128-be6f-47b7-bb39-e11dc622e937",
    vedanta: "63a3a690-9e02-4359-9276-1e63f69c33a7",
    adwiti: "4a6f860a-28cc-4603-a9f5-7e7f39113ed2", // ← replace with real UUID after creating her Supabase account
  };

  const USER_LIST = [
    { id: USERS.rishit, name: "Rishit", key: "rishit", examType: "jee" },
    { id: USERS.vedanta, name: "Vedanta", key: "vedanta", examType: "jee" },
    { id: USERS.adwiti, name: "Adwiti", key: "adwiti", examType: "neet" },
  ];

  let _session = null;
  let _onChangeCallback = null;

  // ── Init ────────────────────────────────────────────────────────────────
  async function init() {
    const { data } = await window.DB.auth.getSession();
    _session = data.session;

    window.DB.auth.onAuthStateChange((event, session) => {
      _session = session;
      _render();
      if (_onChangeCallback) _onChangeCallback(session);
      if (session) initPushNotifications();
    });

    _registerDeepLinkListener();
    _render();

    if (!_session) initPushNotificationsAnon();
  }

  // ── Deep link handler ────────────────────────────────────────────────────
  function _registerDeepLinkListener() {
    const App = window.Capacitor?.Plugins?.App;
    if (!App) return;

    App.addListener("appUrlOpen", async ({ url }) => {
      if (!url || !url.startsWith("jeemap://")) return;

      const hash = url.split("#")[1];
      if (!hash) return;

      const params = new URLSearchParams(hash);
      const access_token = params.get("access_token");
      const refresh_token = params.get("refresh_token");

      if (!access_token || !refresh_token) {
        console.warn("[Auth] Deep link missing tokens:", url);
        return;
      }

      const { error } = await window.DB.auth.setSession({
        access_token,
        refresh_token,
      });
      if (error) {
        console.error("[Auth] setSession failed:", error.message);
      }
    });
  }

  // ── Getters ─────────────────────────────────────────────────────────────
  function getSession() {
    return _session;
  }
  function getUser() {
    return _session?.user ?? null;
  }
  function isLoggedIn() {
    return !!_session;
  }

  function getEditorId() {
    const uid = _session?.user?.id;
    if (!uid) return null;
    const match = USER_LIST.find((u) => u.id === uid);
    return match ? match.id : null;
  }

  function isEditor() {
    return getEditorId() !== null;
  }
  function canEdit(userId) {
    return getEditorId() === userId;
  }
  function getUserList() {
    return USER_LIST;
  }

  // Returns 'jee' or 'neet' for a given userId, or null if unknown
  function getExamType(userId) {
    const user = USER_LIST.find((u) => u.id === userId);
    return user?.examType ?? null;
  }

  // Returns true if both userIds are in the same exam group (jee/neet)
  function sameExamGroup(userIdA, userIdB) {
    return getExamType(userIdA) === getExamType(userIdB);
  }

  // ── Actions ─────────────────────────────────────────────────────────────
  async function loginWithGitHub() {
    const isNative = window.Capacitor?.isNativePlatform?.();

    if (!isNative) {
      await window.DB.auth.signInWithOAuth({
        provider: "github",
        options: { redirectTo: window.location.href },
      });
      return;
    }

    const { data, error } = await window.DB.auth.signInWithOAuth({
      provider: "github",
      options: {
        redirectTo: "jeemap://login",
        skipBrowserRedirect: true,
      },
    });

    if (error) {
      console.error("[Auth] Failed to get OAuth URL:", error.message);
      return;
    }

    if (!data?.url) {
      console.error("[Auth] Supabase returned no OAuth URL");
      return;
    }

    await window.Capacitor.Plugins.Browser.open({ url: data.url });
  }

  async function logout() {
    const user = getUser();
    if (user) {
      await window.DB.from("device_tokens").delete().eq("user_id", user.id);
    }
    await window.DB.auth.signOut();
    initPushNotificationsAnon();
  }

  // ── Callback ────────────────────────────────────────────────────────────
  function onChange(fn) {
    _onChangeCallback = fn;
  }

  // ── UI ──────────────────────────────────────────────────────────────────
  function _render() {
    const el = document.getElementById("authBtn");
    if (!el) return;

    if (_session) {
      const avatar = _session.user?.user_metadata?.avatar_url;
      const name = _session.user?.user_metadata?.user_name || "you";
      el.innerHTML = `
        <img class="auth-avatar" src="${avatar}" alt="${name}" />
        <div class="auth-info">
          <span class="auth-name">@${name}</span>
          <button class="auth-logout" id="logoutBtn">sign out</button>
        </div>`;
      document.getElementById("logoutBtn")?.addEventListener("click", logout);
    } else {
      el.innerHTML = `
        <button class="auth-login" id="loginBtn" title="login with github">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>
        </button>`;
      document
        .getElementById("loginBtn")
        ?.addEventListener("click", loginWithGitHub);
    }
  }

  // ── PUSH NOTIFICATIONS (authenticated users) ──────────────────────────
  async function initPushNotifications() {
    if (!window.Capacitor?.isNativePlatform()) return;
    const { PushNotifications } = window.Capacitor.Plugins;
    if (!PushNotifications) return;

    const result = await PushNotifications.requestPermissions();
    if (result.receive !== "granted") return;

    await PushNotifications.register();

    PushNotifications.addListener("registration", async (token) => {
      const user = getUser();
      if (!user) return;

      await window.DB.from("device_tokens")
        .delete()
        .eq("token", token.value)
        .eq("is_anonymous", true);

      await window.DB.from("device_tokens").upsert(
        {
          user_id: user.id,
          token: token.value,
          is_anonymous: false,
          updated_at: new Date().toISOString(),
        },
        { onConflict: "token" },
      );
      console.log("[Push] token saved:", token.value);
    });

    PushNotifications.addListener("registrationError", (err) => {
      console.warn("[Push] registration error:", err);
    });
  }

  // ── PUSH NOTIFICATIONS (anonymous / logged-out users) ─────────────────
  async function initPushNotificationsAnon() {
    if (!window.Capacitor?.isNativePlatform()) return;
    const { PushNotifications } = window.Capacitor.Plugins;
    if (!PushNotifications) return;

    const result = await PushNotifications.requestPermissions();
    if (result.receive !== "granted") return;

    await PushNotifications.register();

    PushNotifications.addListener("registration", async (token) => {
      const user = getUser();
      if (user) return;

      await window.DB.from("device_tokens").upsert(
        {
          user_id: null,
          token: token.value,
          is_anonymous: true,
          updated_at: new Date().toISOString(),
        },
        { onConflict: "token" },
      );
      console.log("[Push] anon token saved:", token.value);
    });

    PushNotifications.addListener("registrationError", (err) => {
      console.warn("[Push] anon registration error:", err);
    });
  }

  return {
    init,
    getSession,
    getUser,
    isLoggedIn,
    isEditor,
    canEdit,
    getEditorId,
    getUserList,
    getExamType,
    sameExamGroup,
    loginWithGitHub,
    logout,
    onChange,
  };
})();
