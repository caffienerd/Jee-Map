// ── STORAGE.JS ────────────────────────────────────────────────────────────
// localStorage is used ONLY as a write-through cache for speed.
// Supabase is the single source of truth.
//
// Cache keys are namespaced by userId so Rishit and Vedanta's data
// can coexist in localStorage without colliding.
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
  function getTheme()      { return _get('theme', 'dark'); }
  function setTheme(theme) { _set('theme', theme); }

  // ── Active viewer persistence ──────────────────────────────────────────
  // Stores which userId was last being viewed, so the app restores it on reload.
  function getLastViewedUserId()         { return _get('lastViewedUserId', null); }
  function setLastViewedUserId(userId)   { _set('lastViewedUserId', userId); }

  // ── Progress cache ─────────────────────────────────────────────────────
  // Namespaced by userId so both users' caches live side-by-side.

  function _progressKey(userId, subject, chIdx, topicIdx) {
    return `progress:${userId}:${subject}:${chIdx}:${topicIdx}`;
  }

  function cacheSet(userId, subject, chIdx, topicIdx, status) {
    if (status === null) {
      _remove(_progressKey(userId, subject, chIdx, topicIdx));
    } else {
      _set(_progressKey(userId, subject, chIdx, topicIdx), status);
    }
  }

  function cacheGet(userId, subject, chIdx, topicIdx) {
    return _get(_progressKey(userId, subject, chIdx, topicIdx), null);
  }

  // Bulk-load from Supabase rows into cache for a specific user
  function cacheLoadAll(userId, rows) {
    clearProgressCache(userId);
    rows.forEach(row => {
      cacheSet(userId, row.subject, row.chapter_idx, row.topic_idx, row.status);
    });
  }

  // Get all cached progress for a user+subject → { "chIdx:topicIdx": status }
  function cacheGetSubject(userId, subject) {
    const result = {};
    const prefix = NS + `progress:${userId}:${subject}:`;
    for (let i = 0; i < localStorage.length; i++) {
      const k = localStorage.key(i);
      if (k && k.startsWith(prefix)) {
        const rest = k.slice(prefix.length);
        try { result[rest] = JSON.parse(localStorage.getItem(k)); } catch {}
      }
    }
    return result;
  }

  // Clear progress cache for a specific user (or all if userId omitted)
  function clearProgressCache(userId = null) {
    const prefix = userId
      ? NS + `progress:${userId}:`
      : NS + 'progress:';
    Object.keys(localStorage)
      .filter(k => k.startsWith(prefix))
      .forEach(k => localStorage.removeItem(k));
  }

  return {
    // Theme
    getTheme, setTheme,
    // Viewer persistence
    getLastViewedUserId, setLastViewedUserId,
    // Cache (used by Sync and main.js reads)
    cacheSet, cacheGet, cacheLoadAll, cacheGetSubject, clearProgressCache,
  };
})();