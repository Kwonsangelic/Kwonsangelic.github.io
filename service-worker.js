const CACHE_NAME = 'my-cache-v1';
const urlsToCache = [
  '/',
  '/about.html',
  '/portfolio.html',
  '/blog.html',
  '/contact.html',
  '/styles/main.css',
  '/script/main.js',
  '/images/about-background.jpg',
  '/images/portfolio-image-1.jpg',
  '/images/portfolio-image-2.jpg',
  '/images/portfolio-image-3.jpg',
  '/images/portfolio-image-4.jpg',
  '/images/portfolio-image-5.jpg',
  '/images/portfolio-image-6.jpg',
  '/images/blog-image-1.jpg',
  '/images/blog-image-2.jpg',
  '/images/blog-image-3.jpg',
  '/images/blog-image-4.jpg',
  '/images/contact-background.jpg',
  '/images/icons/icon-72x72.png',
  '/images/icons/icon-96x96.png',
  '/images/icons/icon-128x128.png',
  '/images/icons/icon-144x144.png',
  '/images/icons/icon-152x152.png',
  '/images/icons/icon-192x192.png',
  '/images/icons/icon-384x384.png',
  '/images/icons/icon-512x512.png'
];

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
