const CACHE_NAME = "rationright-cache-v1";
const urlsToCache = [
  "/RationRight/",
  "/RationRight/index.html",
  "/RationRight/styles.css",
  "/RationRight/app.js",
  "/RationRight/manifest.json",
  "/RationRight/assets/fingerprint.png",
  "/RationRight/assets/eye.png",
  "/RationRight/assets/grains1.jpg",
  "/RationRight/assets/icon-192.png",
  "/RationRight/assets/icon-512.png"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});
