// Service Worker - 世界杯 2026
self.addEventListener('fetch', e => {
  e.respondWith(fetch(e.request));
});
