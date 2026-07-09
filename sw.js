// v2
self.addEventListener('fetch', e => {
  e.respondWith(fetch(e.request));
});
