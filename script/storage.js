// ── STORAGE.JS ────────────────────────────────────────────────────────────
// Thin wrapper around localStorage.
// All JeeMap data lives under the "jeemap:" namespace to avoid collisions.
//
// PROGRESS STATUS VALUES:
//   null        → untouched
//   'theory'    → theory read / understood
//   'practiced' → solved basic problems
//   'adv'       → solved JEE Advanced level problems

const Storage = (() => {
  const NS = 'jeemap:';

  function set(key, value) {
    try {
      localStorage.setItem(NS + key, JSON.stringify(value));
    } catch (e) {
      console.warn('[JeeMap Storage] set failed:', e);
    }
  }

  function get(key, fallback = null) {
    try {
      const raw = localStorage.getItem(NS + key);
      return raw !== null ? JSON.parse(raw) : fallback;
    } catch (e) {
      console.warn('[JeeMap Storage] get failed:', e);
      return fallback;
    }
  }

  function remove(key) {
    try { localStorage.removeItem(NS + key); }
    catch (e) { console.warn('[JeeMap Storage] remove failed:', e); }
  }

  // ── Theme ──────────────────────────────────────────────────────────────
  function getTheme()      { return get('theme', 'dark'); }
  function setTheme(theme) { set('theme', theme); }

  // ── Progress ───────────────────────────────────────────────────────────
  // Key: progress:{subject}:{chapterIdx}:{topicIdx}
  // Value: 'theory' | 'practiced' | 'adv' | null
  function progressKey(subject, chIdx, topicIdx) {
    return `progress:${subject}:${chIdx}:${topicIdx}`;
  }

  function getProgress(subject, chIdx, topicIdx) {
    return get(progressKey(subject, chIdx, topicIdx), null);
  }

  function setProgress(subject, chIdx, topicIdx, status) {
    if (status === null) {
      remove(progressKey(subject, chIdx, topicIdx));
    } else {
      set(progressKey(subject, chIdx, topicIdx), status);
    }
  }

  // Cycle: null → theory → practiced → adv → null
  const CYCLE = [null, 'theory', 'practiced', 'adv'];
  function cycleProgress(subject, chIdx, topicIdx) {
    const current = getProgress(subject, chIdx, topicIdx);
    const idx = CYCLE.indexOf(current);
    const next = CYCLE[(idx + 1) % CYCLE.length];
    setProgress(subject, chIdx, topicIdx, next);
    return next;
  }

  // Get all progress for a subject: returns { "chIdx:topicIdx": status }
  function getSubjectProgress(subject) {
    const result = {};
    const prefix = NS + `progress:${subject}:`;
    for (let i = 0; i < localStorage.length; i++) {
      const k = localStorage.key(i);
      if (k && k.startsWith(prefix)) {
        const rest = k.slice(prefix.length); // "chIdx:topicIdx"
        try {
          result[rest] = JSON.parse(localStorage.getItem(k));
        } catch {}
      }
    }
    return result;
  }

  function clearAllProgress() {
    Object.keys(localStorage)
      .filter(k => k.startsWith(NS + 'progress:'))
      .forEach(k => localStorage.removeItem(k));
  }

  return {
    getTheme, setTheme,
    getProgress, setProgress, cycleProgress,
    getSubjectProgress,
    clearAllProgress,
  };
})();