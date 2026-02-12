self.addEventListener("install", function(event) {
  event.waitUntil(
    caches.open("fc26-cache").then(function(cache) {
      return cache.addAll([
        "./",
        "./index.html",
        "./style.css"
      ]);
    })
  );
});

self.addEventListener("fetch", function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );
});
