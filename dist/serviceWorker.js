const assets = [
  "/",
  "/index.html",
  "/output.css",
  "/main.js",
  "/anime.png",
  "/bin.svg",
  "/check-circle.svg",
  "/fav-icon.svg",
  "/circle-outline.svg",
];

self.addEventListener("install", (installEvent) => {
  installEvent.waitUntil(
    caches.open("static").then((cache) => {
      cache.addAll(assets);
    })
  );
});

self.addEventListener("fetch", (fetchEvent) => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then((res) => {
      return res || fetch(fetchEvent.request);
    })
  );
});
