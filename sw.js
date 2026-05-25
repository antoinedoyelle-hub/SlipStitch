const CACHE = 'slipstitch-v1';
const FILES = [
  '/SlipStitch/',
  '/SlipStitch/index.html',
  '/SlipStitch/manifest.json',
  '/SlipStitch/icon-192.png',
  '/SlipStitch/icon-512.png'
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES)));
});

self.addEventListener('fetch', e => {
  e.respondWith(caches.match(e.request).then(r => r || fetch(e.request)));
});
