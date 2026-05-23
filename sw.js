// Minimal service worker - just enables PWA installation
// No caching or fetch interception to avoid breaking the app

self.addEventListener('install', function(event) {
  self.skipWaiting();
});

self.addEventListener('activate', function(event) {
  self.clients.claim();
});
