// ── SUPABASE.JS ───────────────────────────────────────────────────────────
// Initializes the Supabase client. Loaded before auth.js and sync.js.

const SUPABASE_URL  = 'https://fdwasoxkutocozvkhrqt.supabase.co';
const SUPABASE_KEY  = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZkd2Fzb3hrdXRvY296dmtocnF0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzY4NDQ5MTEsImV4cCI6MjA5MjQyMDkxMX0.THkDU4aASMT6navGXRQInqj7b0IF8rQNkZiiD_xJyLc';

// Load Supabase via CDN (added to index.html before this script)
const _supa = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
  }
});

window.DB = _supa;