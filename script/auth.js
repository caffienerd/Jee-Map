// ── AUTH.JS ───────────────────────────────────────────────────────────────
// Handles GitHub OAuth. Only one user (you) will ever log in.
// Sis and anyone else sees progress read-only with no login needed.

const Auth = (() => {
  let _session = null;
  let _onChangeCallback = null;

  // ── Init ────────────────────────────────────────────────────────────────
  async function init() {
    // Get existing session
    const { data } = await window.DB.auth.getSession();
    _session = data.session;

    // Listen for auth state changes (login, logout, token refresh)
    window.DB.auth.onAuthStateChange((event, session) => {
      _session = session;
      _render();
      if (_onChangeCallback) _onChangeCallback(session);
    });

    _render();
  }

  // ── Getters ─────────────────────────────────────────────────────────────
  function getSession()  { return _session; }
  function getUser()     { return _session?.user ?? null; }
  function isLoggedIn()  { return !!_session; }

  // ── Actions ─────────────────────────────────────────────────────────────
  async function loginWithGitHub() {
    await window.DB.auth.signInWithOAuth({
      provider: 'github',
      options: {
        redirectTo: window.location.href,
      }
    });
  }

  async function logout() {
    await window.DB.auth.signOut();
  }

  // ── Callback ────────────────────────────────────────────────────────────
  function onChange(fn) { _onChangeCallback = fn; }

  // ── UI ──────────────────────────────────────────────────────────────────
  function _render() {
    const el = document.getElementById('authBtn');
    if (!el) return;

    if (_session) {
      const avatar = _session.user?.user_metadata?.avatar_url;
      const name   = _session.user?.user_metadata?.user_name || 'you';
      el.innerHTML = `
        <img class="auth-avatar" src="${avatar}" alt="${name}" />
        <span class="auth-name">@${name}</span>
        <button class="auth-logout" id="logoutBtn">sign out</button>`;
      document.getElementById('logoutBtn')?.addEventListener('click', logout);
    } else {
      el.innerHTML = `
        <button class="auth-login" id="loginBtn">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>
          login with github
        </button>`;
      document.getElementById('loginBtn')?.addEventListener('click', loginWithGitHub);
    }
  }

  return { init, getSession, getUser, isLoggedIn, loginWithGitHub, logout, onChange };
})();