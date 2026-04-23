// ── SYNC.JS ───────────────────────────────────────────────────────────────
// Supabase = single source of truth.
// localStorage = write-through cache for instant UI (no latency on reads).
//
// Strategy:
//   - On app init (logged in OR visitor): pull ALL progress from Supabase
//     → write into localStorage cache → main.js reads from cache (fast)
//   - On owner write: update cache immediately + async upsert to Supabase
//   - Visitors: cache is populated from Supabase on load, no writes ever
//
// YOUR UUID (only account that can write):
const OWNER_ID = '8728f128-be6f-47b7-bb39-e11dc622e937';

const Sync = (() => {

  // ── Pull all progress from Supabase → local cache ───────────────────────
  // Called once on app init. Works for visitors too (public read policy).
  async function pull() {
    const { data, error } = await window.DB
      .from('progress')
      .select('subject, chapter_idx, topic_idx, status')
      .eq('user_id', OWNER_ID); // always fetch YOUR progress specifically

    if (error) {
      console.warn('[Sync] pull failed:', error.message);
      return;
    }

    Storage.cacheLoadAll(data);
    console.log(`[Sync] pulled ${data.length} rows`);
  }

  // ── Push one progress change to Supabase (owner only) ───────────────────
  async function _push(subject, chIdx, topicIdx, status) {
    if (!Auth.isLoggedIn()) return;
    if (Auth.getUser()?.id !== OWNER_ID) return; // extra safety

    if (status === null) {
      const { error } = await window.DB
        .from('progress')
        .delete()
        .match({ user_id: OWNER_ID, subject, chapter_idx: chIdx, topic_idx: topicIdx });

      if (error) console.warn('[Sync] delete failed:', error.message);
    } else {
      const { error } = await window.DB
        .from('progress')
        .upsert({
          user_id:     OWNER_ID,
          subject,
          chapter_idx: chIdx,
          topic_idx:   topicIdx,
          status,
          updated_at:  new Date().toISOString(),
        }, {
          onConflict: 'user_id,subject,chapter_idx,topic_idx'
        });

      if (error) console.warn('[Sync] upsert failed:', error.message);
    }
  }

  // ── Cycle progress (cache immediately + async push) ──────────────────────
  // Called by main.js on topic click. Only works if you're the owner.
  function cycleAndSync(subject, chIdx, topicIdx) {
    if (!Auth.isOwner()) return Storage.cacheGet(subject, chIdx, topicIdx); // no-op for visitors

    const CYCLE = [null, 'theory', 'practiced', 'adv'];
    const current = Storage.cacheGet(subject, chIdx, topicIdx);
    const next    = CYCLE[(CYCLE.indexOf(current) + 1) % CYCLE.length];

    // Update cache instantly (UI feels snappy)
    Storage.cacheSet(subject, chIdx, topicIdx, next);
    // Push to Supabase in background
    _push(subject, chIdx, topicIdx, next);

    return next;
  }

  // ── Test Scores ──────────────────────────────────────────────────────────

  // Save a test score (owner only)
  async function saveScore(subject, score, maxScore, date = null) {
    if (!Auth.isOwner()) return null;

    const { data, error } = await window.DB
      .from('test_scores')
      .insert({
        user_id:   OWNER_ID,
        subject,
        score,
        max_score: maxScore,
        taken_at:  date ? new Date(date).toISOString() : new Date().toISOString(),
      })
      .select()
      .single();

    if (error) {
      console.warn('[Sync] saveScore failed:', error.message);
      return null;
    }

    return data;
  }

  // Delete a test score by its Supabase row id (owner only)
  async function deleteScore(id) {
    if (!Auth.isOwner()) return;

    const { error } = await window.DB
      .from('test_scores')
      .delete()
      .eq('id', id);

    if (error) console.warn('[Sync] deleteScore failed:', error.message);
  }

  // Fetch all test scores (anyone can call this)
  async function fetchScores(subject = null) {
    let query = window.DB
      .from('test_scores')
      .select('id, subject, score, max_score, taken_at')
      .eq('user_id', OWNER_ID)
      .order('taken_at', { ascending: false });

    if (subject) query = query.eq('subject', subject);

    const { data, error } = await query;
    if (error) {
      console.warn('[Sync] fetchScores failed:', error.message);
      return [];
    }

    return data;
  }

  return { pull, cycleAndSync, saveScore, deleteScore, fetchScores };
})();