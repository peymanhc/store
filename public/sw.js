let cacheData = "appV1";
let doCache = true;
const CACHE_NAME = "site-dynamic-v3";
const STATIC_URLS = [
  "/",
  "/logo192.png",
  "/favicon.ico",
  "/sockjs-node",
  "/manifest.json",
  "/sw.js",
  "/static/js/bundle.js",
  "/static/media/PersianFont.42ba4d41.TTF",
  "/static/js/vendors~main.chunk.js",
  "/static/js/0.chunk.js",
  "/static/js/2.chunk.js",
  "/static/js/main.chunk.js.map",
  "/static/js/main.chunk.js",
];
// cache size limit function
const limitCacheSize = (name, size) => {
  caches.open(name).then((cache) => {
    cache.keys().then((keys) => {
      if (keys.length > size) {
        cache.delete(keys[0]).then(limitCacheSize(name, size));
      }
    });
  });
};

// Delete old caches that are not our current one!
self.addEventListener("activate", (event) => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then((keyList) =>
      Promise.all(
        keyList.map((key) => {
          if (!cacheWhitelist.includes(key)) {
            console.log("[Service Worker] deleting cache: " + key);
            return caches.delete(key);
          }
        })
      )
    )
  );
});

// The first time the user starts up the PWA, 'install' is triggered.
self.addEventListener("install", function (event) {
  if (doCache) {
    event.waitUntil(
      caches
        .open(CACHE_NAME)
        .then(function (cache) {
          return cache.addAll(STATIC_URLS);
        })
        .then(() => self.skipWaiting())
    );
  }
});

self.addEventListener("fetch", function (event) {
  if (!navigator.onLine) {
    if (event.request.url === "http://localhost:1400/static/js/main.chunk.js") {
      event.waitUntil(
        self.registration.showNotification("پیشگامان دامنه فناوری", {
          body: "اینترنت متصل نیست",
        })
      );
    }
  }
  if (doCache) {
    event.respondWith(
      caches.match(event.request).then(function (response) {
        return response || fetch(event.request);
      })
    );
  }
});

// Push notification handler
self.addEventListener("push", function (event) {
  const pushMessage = event.data.text();
  console.log("[Service Worker] Push Received.");
  console.log(`[Service Worker] Push had this data: "${pushMessage}"`);

  const title = "Pishgaman damane fanavari";
  const options = {
    body: pushMessage,
    icon: "public/icon-192x192.png",
    badge: "public/icon-192x192.png",
  };

  event.waitUntil(self.registration.showNotification(title, options));
});

// Push notifications click event handler
self.addEventListener("notificationclick", function (event) {
  console.log("[Service Worker] Notification click Received.");

  event.notification.close();

  event.waitUntil(clients.openWindow("https://pdf.co.ir"));
});
