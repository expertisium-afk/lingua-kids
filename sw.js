const CACHE = 'lingua-kids-v2';
const ASSETS = ['./', './index.html', './app.js', './manifest.webmanifest', './icon.svg'];

self.addEventListener('install', (event) => {
  event.waitUntil(caches.open(CACHE).then((cache) => cache.addAll(
    ASSETS.map((asset) => new Request(asset, {cache: 'reload'}))
  )).then(() => self.skipWaiting()));
});

self.addEventListener('activate', (event) => {
  event.waitUntil(caches.keys().then((keys) => Promise.all(
    keys.filter((key) => key.startsWith('lingua-kids-') && key !== CACHE)
      .map((key) => caches.delete(key))
  )).then(() => self.clients.claim()));
});

self.addEventListener('fetch', (event) => {
  const request = event.request;
  if (request.method !== 'GET' || new URL(request.url).origin !== self.location.origin) return;
  event.respondWith(caches.open(CACHE).then(async (cache) => {
    try {
      const response = await fetch(request);
      if (response.ok && ASSETS.some((asset) => new URL(asset, self.registration.scope).href === request.url)) {
        await cache.put(request, response.clone());
      }
      return response;
    } catch {
      const cached = await cache.match(request);
      if (cached) return cached;
      if (request.mode === 'navigate') {
        const home = await cache.match(new URL('./', self.registration.scope).href);
        if (home) return home;
      }
      return Response.error();
    }
  }));
});
