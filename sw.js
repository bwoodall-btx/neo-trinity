// Trinity Service Worker — NEO EA v1
// Network-first for HTML so updates deploy immediately.
// Cache-first only for static assets (fonts, icons).

const CACHE = 'trinity-v2';
const NETWORK_FIRST = ['/', '/index.html'];

self.addEventListener('install', e => {
  self.skipWaiting(); // activate immediately on every deploy
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', e => {
  const url = new URL(e.request.url);

  // Always skip cache for API calls
  if (url.hostname.includes('elevenlabs') ||
      url.hostname.includes('make.com') ||
      url.hostname.includes('googleapis')) {
    e.respondWith(fetch(e.request));
    return;
  }

  // Network-first for the app shell — always gets latest on deploy
  const isShell = NETWORK_FIRST.some(p => url.pathname === p || url.pathname.endsWith('index.html'));
  if (isShell) {
    e.respondWith(
      fetch(e.request)
        .then(res => {
          const clone = res.clone();
          caches.open(CACHE).then(c => c.put(e.request, clone));
          return res;
        })
        .catch(() => caches.match(e.request)) // offline fallback
    );
    return;
  }

  // Cache-first for everything else (fonts, icons)
  e.respondWith(
    caches.match(e.request).then(cached => cached || fetch(e.request))
  );
});
