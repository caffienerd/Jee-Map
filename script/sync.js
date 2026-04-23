// ── SYNC.JS ───────────────────────────────────────────────────────────────
// Supabase = single source of truth.
// localStorage = write-through cache for instant UI (no latency on reads).
//
// All functions now take a userId param so they work for both Rishit and Vedanta.
// Writes are gated by Auth.canEdit(userId) — you can only write your own rows.

const Sync = (() => {

  // ── Pull one user's progress from Supabase → local cache ────────────────
  async function pull(userId) {
    const { data, error } = await window.DB
      .from('progress')
      .select('subject, chapter_idx, topic_idx, status')
      .eq('user_id', userId);

    if (error) {
      console.warn(`[Sync] pull failed for ${userId}:`, error.message);
      return;
    }

    Storage.cacheLoadAll(userId, data);
    console.log(`[Sync] pulled ${data.length} rows for ${userId}`);
  }

  // Pull all known users at once (called on init)
  async function pullAll() {
    const users = Auth.getUserList();
    await Promise.all(users.map(u => pull(u.id)));
  }

  // ── Push one progress change to Supabase ────────────────────────────────
  async function _push(userId, subject, chIdx, topicIdx, status) {
    if (!Auth.canEdit(userId)) return; // safety: can only write your own rows

    if (status === null) {
      const { error } = await window.DB
        .from('progress')
        .delete()
        .match({ user_id: userId, subject, chapter_idx: chIdx, topic_idx: topicIdx });

      if (error) console.warn('[Sync] delete failed:', error.message);
    } else {
      const { error } = await window.DB
        .from('progress')
        .upsert({
          user_id:     userId,
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
  // viewingUserId: whose progress is currently being shown
  function cycleAndSync(viewingUserId, subject, chIdx, topicIdx) {
    // Only allow edit if the logged-in user owns this profile
    if (!Auth.canEdit(viewingUserId)) {
      return Storage.cacheGet(viewingUserId, subject, chIdx, topicIdx); // no-op
    }

    const CYCLE   = [null, 'theory', 'practiced', 'adv'];
    const current = Storage.cacheGet(viewingUserId, subject, chIdx, topicIdx);
    const next    = CYCLE[(CYCLE.indexOf(current) + 1) % CYCLE.length];

    Storage.cacheSet(viewingUserId, subject, chIdx, topicIdx, next);
    _push(viewingUserId, subject, chIdx, topicIdx, next);

    return next;
  }

  // ── Test Scores ──────────────────────────────────────────────────────────

  async function saveScore(viewingUserId, subject, score, maxScore, date = null) {
    if (!Auth.canEdit(viewingUserId)) return null;

    const { data, error } = await window.DB
      .from('test_scores')
      .insert({
        user_id:   viewingUserId,
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

  async function deleteScore(viewingUserId, id) {
    if (!Auth.canEdit(viewingUserId)) return;

    const { error } = await window.DB
      .from('test_scores')
      .delete()
      .eq('id', id);

    if (error) console.warn('[Sync] deleteScore failed:', error.message);
  }

  async function fetchScores(userId, subject = null) {
    let query = window.DB
      .from('test_scores')
      .select('id, subject, score, max_score, taken_at')
      .eq('user_id', userId)
      .order('taken_at', { ascending: false });

    if (subject) query = query.eq('subject', subject);

    const { data, error } = await query;
    if (error) {
      console.warn('[Sync] fetchScores failed:', error.message);
      return [];
    }

    return data;
  }

  return { pull, pullAll, cycleAndSync, saveScore, deleteScore, fetchScores };
})();