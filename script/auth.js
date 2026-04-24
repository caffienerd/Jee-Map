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
//
// WHY NOT https://localhost: Chrome on Android can't connect to localhost,
//   shows "Unable to connect".
// WHY NOT GitHub Pages redirect: Chrome's localStorage is separate from the
//   WebView's localStorage — session stored there is invisible to the app.
// THIS WORKS because we never rely on shared storage — we extract the token
//   from the URL and inject it directly into the WebView via setSession().

const Auth = (() => {
  const USERS = {
    rishit:  '8728f128-be6f-47b7-bb39-e11dc622e937',
    vedanta: '1e062b7d-f8d8-4552-93e8-624a22023dd5',
  };

  const USER_LIST = [
    { id: USERS.rishit,  name: 'Rishit',  key: 'rishit'  },
    { id: USERS.vedanta, name: 'Vedanta', key: 'vedanta' },
  ];

  let _session          = null;
  let _onChangeCallback = null;

  // ── Init ────────────────────────────────────────────────────────────────
  async function init() {
    const { data } = await window.DB.auth.getSession();
    _session = data.session;

    window.DB.auth.onAuthStateChange((event, session) => {
      _session = session;
      _render();
      if (_onChangeCallback) _onChangeCallback(session);
    });

    // Register the deep link listener once at init so it works even if the
    // app was backgrounded (not killed) during the OAuth flow.
    _registerDeepLinkListener();

    _render();
  }

  // ── Deep link handler ────────────────────────────────────────────────────
  // Listens for jeemap://login#access_token=...&refresh_token=...
  // This fires when Android hands the URL back to our app after the
  // Chrome Custom Tab redirects to the jeemap:// scheme.
  function _registerDeepLinkListener() {
    const App = window.Capacitor?.Plugins?.App;
    if (!App) return;

    App.addListener('appUrlOpen', async ({ url }) => {
      if (!url || !url.startsWith('jeemap://')) return;

      // The token is in the hash fragment: jeemap://login#access_token=...
      const hash = url.split('#')[1];
      if (!hash) return;

      const params        = new URLSearchParams(hash);
      const access_token  = params.get('access_token');
      const refresh_token = params.get('refresh_token');

      if (!access_token || !refresh_token) {
        console.warn('[Auth] Deep link missing tokens:', url);
        return;
      }

      // Inject the session directly into the WebView's Supabase instance.
      const { error } = await window.DB.auth.setSession({ access_token, refresh_token });
      if (error) {
        console.error('[Auth] setSession failed:', error.message);
      }
      // onAuthStateChange fires automatically after setSession → _render() called.
    });
  }

  // ── Getters ─────────────────────────────────────────────────────────────
  function getSession() { return _session; }
  function getUser()    { return _session?.user ?? null; }
  function isLoggedIn() { return !!_session; }

  function getEditorId() {
    const uid = _session?.user?.id;
    if (!uid) return null;
    if (uid === USERS.rishit)  return USERS.rishit;
    if (uid === USERS.vedanta) return USERS.vedanta;
    return null;
  }

  function isEditor() { return getEditorId() !== null; }
  function canEdit(userId) { return getEditorId() === userId; }
  function getUserList() { return USER_LIST; }

  // ── Actions ─────────────────────────────────────────────────────────────
  async function loginWithGitHub() {
    const isNative = window.Capacitor?.isNativePlatform?.();

    if (!isNative) {
      // Web: normal redirect. Supabase handles everything via detectSessionFromUrl.
      await window.DB.auth.signInWithOAuth({
        provider: 'github',
        options: { redirectTo: window.location.href },
      });
      return;
    }

    // ── Native Android flow ───────────────────────────────────────────────
    const { data, error } = await window.DB.auth.signInWithOAuth({
      provider: 'github',
      options: {
        redirectTo: 'jeemap://login',   // Android intent filter catches this
        skipBrowserRedirect: true,       // give us the URL, don't navigate yet
      },
    });

    if (error) {
      console.error('[Auth] Failed to get OAuth URL:', error.message);
      return;
    }

    if (!data?.url) {
      console.error('[Auth] Supabase returned no OAuth URL');
      return;
    }

    // Open in Chrome Custom Tab. When Supabase redirects to jeemap://login,
    // Chrome can't handle that scheme → Android takes over → fires appUrlOpen.
    await window.Capacitor.Plugins.Browser.open({ url: data.url });
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
        <div class="auth-info">
          <span class="auth-name">@${name}</span>
          <button class="auth-logout" id="logoutBtn">sign out</button>
        </div>`;
      document.getElementById('logoutBtn')?.addEventListener('click', logout);
    } else {
      el.innerHTML = `
        <button class="auth-login" id="loginBtn" title="login with github">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>
        </button>`;
      document.getElementById('loginBtn')?.addEventListener('click', loginWithGitHub);
    }
  }

  return {
    init, getSession, getUser, isLoggedIn,
    isEditor, canEdit, getEditorId, getUserList,
    loginWithGitHub, logout, onChange,
  };
})();