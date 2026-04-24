// ── SUPABASE.JS ───────────────────────────────────────────────────────────
// Initializes the Supabase client. Loaded before auth.js and sync.js.

const SUPABASE_URL  = 'https://fdwasoxkutocozvkhrqt.supabase.co';
const SUPABASE_KEY  = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZkd2Fzb3hrdXRvY296dmtocnF0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzY4NDQ5MTEsImV4cCI6MjA5MjQyMDkxMX0.THkDU4aASMT6navGXRQInqj7b0IF8rQNkZiiD_xJyLc';

// ── FIX: GitHub Pages + Supabase OAuth double-hash bug ────────────────────
// After GitHub OAuth redirect, the URL looks like:
//   https://.../Jee-Map/##access_token=...
// The double-hash means window.location.hash is empty and Supabase
// can't find the token. We fix it by detecting and rewriting the URL
// BEFORE creating the Supabase client.
(function fixOAuthHash() {
  const raw = window.location.href;
  // Find the first occurrence of #access_token (possibly after ##)
  const tokenIdx = raw.indexOf('#access_token=');
  // Also handle ##access_token
  const doubleIdx = raw.indexOf('##access_token=');

  if (doubleIdx !== -1) {
    // Rewrite ## → # so Supabase can parse it
    const fixed = raw.slice(0, doubleIdx) + raw.slice(doubleIdx + 1);
    window.history.replaceState(null, '', fixed);
  } else if (tokenIdx !== -1) {
    // Already has single hash — check if there are multiple #access_token= chunks
    // (from repeated clicks) and keep only the first
    const hashPart = raw.slice(tokenIdx + 1); // everything after first #
    const firstToken = hashPart.split('#access_token=')[0];
    const fixed = raw.slice(0, tokenIdx + 1) + 'access_token=' + firstToken.replace(/^access_token=/, '');
    window.history.replaceState(null, '', raw.slice(0, tokenIdx + 1) + hashPart.split('#')[0]);
  }
})();

const _supa = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY, {
  auth: {
    persistSession:       true,
    autoRefreshToken:     true,
    detectSessionFromUrl: true,   // explicitly enable — parses access_token from hash
  }
});

window.DB = _supa;

// ── Clean the URL after Supabase has consumed the token ───────────────────
// Removes the #access_token=... fragment so it doesn't linger in history
// or get re-processed on next load.
window.addEventListener('load', () => {
  if (window.location.hash.includes('access_token=')) {
    // Give Supabase a tick to consume it, then wipe the hash
    setTimeout(() => {
      window.history.replaceState(
        null, '',
        window.location.pathname + window.location.search
      );
    }, 500);
  }
});