// ── SYNC.JS ───────────────────────────────────────────────────────────────
// Syncs progress to Supabase when logged in.
// Falls back to localStorage when offline or not logged in.
//
// Strategy:
//   - On login: pull all rows from Supabase → merge into localStorage
//   - On status change: write to localStorage immediately + upsert to Supabase
//   - Reads always come from localStorage (fast, no latency)

const Sync = (() => {

  // ── Pull from Supabase → localStorage ───────────────────────────────────
  async function pull() {
    if (!Auth.isLoggedIn()) return;

    const { data, error } = await window.DB
      .from('progress')
      .select('subject, chapter_idx, topic_idx, status');

    if (error) {
      console.warn('[Sync] pull failed:', error.message);
      return;
    }

    // Write each row into localStorage via Storage
    data.forEach(row => {
      Storage.setProgress(row.subject, row.chapter_idx, row.topic_idx, row.status);
    });

    console.log(`[Sync] pulled ${data.length} rows from Supabase`);
  }

  // ── Push one progress entry to Supabase ─────────────────────────────────
  async function push(subject, chIdx, topicIdx, status) {
    if (!Auth.isLoggedIn()) return;

    const user_id = Auth.getUser().id;

    if (status === null) {
      // Delete the row
      const { error } = await window.DB
        .from('progress')
        .delete()
        .match({ user_id, subject, chapter_idx: chIdx, topic_idx: topicIdx });

      if (error) console.warn('[Sync] delete failed:', error.message);
    } else {
      // Upsert
      const { error } = await window.DB
        .from('progress')
        .upsert({
          user_id,
          subject,
          chapter_idx: chIdx,
          topic_idx: topicIdx,
          status,
          updated_at: new Date().toISOString(),
        }, {
          onConflict: 'user_id,subject,chapter_idx,topic_idx'
        });

      if (error) console.warn('[Sync] upsert failed:', error.message);
    }
  }

  // ── Cycle progress (localStorage + Supabase) ────────────────────────────
  function cycleAndSync(subject, chIdx, topicIdx) {
    // Write to localStorage immediately (instant UI)
    const newStatus = Storage.cycleProgress(subject, chIdx, topicIdx);
    // Fire-and-forget push to Supabase
    push(subject, chIdx, topicIdx, newStatus);
    return newStatus;
  }

  return { pull, push, cycleAndSync };
})();