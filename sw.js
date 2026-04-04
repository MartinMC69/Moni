// Moni — Service Worker
// Strategia: cache-first dla lokalnych zasobów, network dla zewnętrznych

const CACHE_NAME = 'moni-v1';
const LOCAL_FILES = [
  './wydatki.html',
  './manifest.json',
  './icon.svg'
];

// Instalacja — cache'uj lokalne pliki
self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open(CACHE_NAME).then(function(cache) {
      return cache.addAll(LOCAL_FILES);
    })
  );
  self.skipWaiting();
});

// Aktywacja — usuń stare cache
self.addEventListener('activate', function(e) {
  e.waitUntil(
    caches.keys().then(function(keys) {
      return Promise.all(
        keys.filter(function(k) { return k !== CACHE_NAME; })
            .map(function(k) { return caches.delete(k); })
      );
    })
  );
  self.clients.claim();
});

// Fetch — cache-first dla lokalnych, network dla zewnętrznych (Google API itp.)
self.addEventListener('fetch', function(e) {
  var url = e.request.url;

  // Zewnętrzne żądania (Google Auth, API) — zawsze przez sieć
  if (url.indexOf('accounts.google.com') !== -1 ||
      url.indexOf('googleapis.com') !== -1 ||
      url.indexOf('gstatic.com') !== -1) {
    return; // domyślnie sieć
  }

  e.respondWith(
    caches.match(e.request).then(function(cached) {
      if (cached) return cached;
      return fetch(e.request).then(function(response) {
        // Cache tylko poprawne odpowiedzi dla lokalnych plików
        if (response && response.status === 200 && response.type === 'basic') {
          var cloned = response.clone();
          caches.open(CACHE_NAME).then(function(cache) {
            cache.put(e.request, cloned);
          });
        }
        return response;
      });
    })
  );
});
