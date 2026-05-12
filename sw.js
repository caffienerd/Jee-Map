// ── SERVICE WORKER ────────────────────────────────────────────────────────
// Caches all app files so JEEMap works 100% offline after first load.

const CACHE = "jeemap-v6.0";

const FILES = [
  "./index.html",
  "./manifest.json",
  "./icons/icon-192.png",
  "./icons/icon-512.png",
  "./favicon.png",
  "./style/base.css",
  "./style/tags.css",
  "./style/header.css",
  "./style/chapters.css",
  "./style/stats.css",
  "./style/auth.css",
  "./style/loading.css",
  "./style/notes.css",
  "./script/tags.js",
  "./script/storage.js",
  "./script/main.js",
  "./script/notes.js",
  // JEE subjects
  "./script/subjects/JEE/physics.js",
  "./script/subjects/JEE/chemistry.js",
  "./script/subjects/JEE/maths.js",
  // NEET subjects
  "./script/subjects/NEET/physics.js",
  "./script/subjects/NEET/chemistry.js",
  "./script/subjects/NEET/biology.js",
];

// Install: cache everything
self.addEventListener("install", (e) => {
  e.waitUntil(
    caches
      .open(CACHE)
      .then((cache) => Promise.allSettled(FILES.map((f) => cache.add(f)))),
  );
  self.skipWaiting();
});

// Activate: clear old caches
self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches
      .keys()
      .then((keys) =>
        Promise.all(
          keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)),
        ),
      ),
  );
  self.clients.claim();
});

// Fetch: serve from cache, fall back to network
self.addEventListener("fetch", (e) => {
  e.respondWith(
    caches.match(e.request).then((cached) => cached || fetch(e.request)),
  );
});
