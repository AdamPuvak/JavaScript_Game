// service-worker.js


self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('your-game-cache').then((cache) => {
      return cache.addAll([
        '../',
        '../index.html',
        '../css/main.css',
        '../functionality/gameFlow.js',
        '../components/road.js',
        '../components/road-mix.js',
        '../components/road-car.js',
        '../components/road-bush.js',
        '../components/road-start.js',
        '../components/bush.js',
        '../components/bush2.js',
        '../components/car.js',
        '../components/player.js',
        '../data/levels.json',
        '../font/PixelifySans-VariableFont_wght.ttf',
        '../images/logo.png',
        '../images/backg.jpg',
        '../images/CHECKERED.jpg'

        // Add other game assets
      ]);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});





