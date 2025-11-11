const CACHE_NAME = "attendance-cache-v1";
const urlsToCache = [
  "index.html",
  "register.html",
  "forgot.html",
  "attendance.html",
  "admin.html",
  "style.css",
  "script.js"
];

// Install service worker
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
    })
  );
});

// Serve cached files
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
