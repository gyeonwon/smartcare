self.addEventListener('install', (event) => {
    console.log("[Service Worker] Installing Service Worker ...", event);
  });

self.addEventListener('activate', (event) => {
    console.log("[Service Worker] Activating Service Worker ...", event);
    self.skipWaiting();
});

self.addEventListener('fetch', (event) => {
    console.log("[Service Worker] Fetching something ...", event);
    event.respondWith(fetch(event.request));
});