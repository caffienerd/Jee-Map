// ── STORAGE.JS ────────────────────────────────────────────────────────────
// localStorage is used ONLY as a write-through cache for speed.
// Supabase is the single source of truth.
//
// PROGRESS STATUS VALUES:
//   null        → untouched
//   'theory'    → theory read / understood
//   'practiced' → solved basic problems
//   'adv'       → solved JEE Advanced level problems

const Storage = (() => {
  const NS = 'jeemap:';

  function _set(key, value) {
    try {
      localStorage.setItem(NS + key, JSON.stringify(value));
    } catch (e) {
      console.warn('[Storage] set failed:', e);
    }
  }

  function _get(key, fallback = null) {
    try {
      const raw = localStorage.getItem(NS + key);
      return raw !== null ? JSON.parse(raw) : fallback;
    } catch (e) {
      console.warn('[Storage] get failed:', e);
      return fallback;
    }
  }

  function _remove(key) {
    try { localStorage.removeItem(NS + key); }
    catch (e) { console.warn('[Storage] remove failed:', e); }
  }

  // ── Theme ──────────────────────────────────────────────────────────────
  // Theme lives only in localStorage (no need to sync to DB).
  function getTheme()      { return _get('theme', 'dark'); }
  function setTheme(theme) { _set('theme', theme); }

  // ── Progress cache ─────────────────────────────────────────────────────
  // These are ONLY called by Sync — not by main.js directly.

  function _progressKey(subject, chIdx, topicIdx) {
    return `progress:${subject}:${chIdx}:${topicIdx}`;
  }

  // Write one entry into the local cache
  function cacheSet(subject, chIdx, topicIdx, status) {
    if (status === null) {
      _remove(_progressKey(subject, chIdx, topicIdx));
    } else {
      _set(_progressKey(subject, chIdx, topicIdx), status);
    }
  }

  // Read one entry from the local cache
  function cacheGet(subject, chIdx, topicIdx) {
    return _get(_progressKey(subject, chIdx, topicIdx), null);
  }

  // Bulk-load from Supabase rows into cache (called on init)
  function cacheLoadAll(rows) {
    // Clear old progress cache first so stale entries don't linger
    clearProgressCache();
    rows.forEach(row => {
      cacheSet(row.subject, row.chapter_idx, row.topic_idx, row.status);
    });
  }

  // Get all cached progress for a subject → { "chIdx:topicIdx": status }
  function cacheGetSubject(subject) {
    const result = {};
    const prefix = NS + `progress:${subject}:`;
    for (let i = 0; i < localStorage.length; i++) {
      const k = localStorage.key(i);
      if (k && k.startsWith(prefix)) {
        const rest = k.slice(prefix.length);
        try { result[rest] = JSON.parse(localStorage.getItem(k)); } catch {}
      }
    }
    return result;
  }

  function clearProgressCache() {
    Object.keys(localStorage)
      .filter(k => k.startsWith(NS + 'progress:'))
      .forEach(k => localStorage.removeItem(k));
  }

  // ── Theme ──────────────────────────────────────────────────────────────
  return {
    // Theme
    getTheme, setTheme,
    // Cache (used by Sync and main.js reads)
    cacheSet, cacheGet, cacheLoadAll, cacheGetSubject, clearProgressCache,
  };
})();