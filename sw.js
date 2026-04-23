// ── SERVICE WORKER ────────────────────────────────────────────────────────
// Caches all app files so JEEMap works 100% offline after first load.

const CACHE = 'jeemap-v2';

const FILES = [
  './index.html',
  './manifest.json',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './style/base.css',
  './style/tags.css',
  './style/header.css',
  './style/chapters.css',
  './style/stats.css',
  './style/auth.css',
  './script/tags.js',
  './script/storage.js',
  './script/main.js',
  './script/subjects/physics.js',
  './script/subjects/chemistry.js',
  './script/subjects/maths.js',
];

// Install: cache everything
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE).then(cache => cache.addAll(FILES))
  );   k
  self.skipWaiting();
});

// Activate: clear old caches
self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

// Fetch: serve from cache, fall back to network
self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(cached => cached || fetch(e.request))
  );
});