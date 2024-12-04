'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "c4bef357bcf9d54af39ef86bdfff78f1",
"assets/AssetManifest.bin.json": "62b991cdca4ed3f3ca50f47bc1d7b469",
"assets/AssetManifest.json": "254e6dfe57502f65fb6cccb5bc8ec421",
"assets/assets/font/Cafe24Supermagic/Cafe24Supermagic-Bold-v1.0.otf": "e8e546f0ac28a8d06488aeba40e2d386",
"assets/assets/images/%25EB%2586%2580%25EC%259D%25B4%25EA%25B3%25B5%25EC%259B%2590%2520%25ED%2581%25B4%25EB%25A6%25BD%25EC%2595%2584%25ED%258A%25B8.png": "7379b2bcf3076c10dc4a8d60fddfc2a3",
"assets/assets/images/%25EB%258F%2599%25EB%25AC%25BC%25EC%259B%2590%2520%25ED%2581%25B4%25EB%25A6%25BD%25EC%2595%2584%25ED%258A%25B8.png": "df06e72337564c141dcd0fb894a2f144",
"assets/assets/images/%25EC%258A%25A4%25ED%2582%25A4%25EC%259E%25A5%2520%25ED%2581%25B4%25EB%25A6%25BD%25EC%2595%2584%25ED%258A%25B8.jpg": "dd2b2360239d4865a168367a07fe12d9",
"assets/assets/images/%25EC%259B%258C%25ED%2584%25B0%25ED%258C%258C%25ED%2581%25AC%2520%25ED%2581%25B4%25EB%25A6%25BD%25EC%2595%2584%25ED%258A%25B8.jpg": "82b82335b0e3ca670107df70a2ae95bc",
"assets/assets/images/%25EC%259B%258C%25ED%2584%25B0%25ED%258C%258C%25ED%2581%25AC%2520%25ED%2581%25B4%25EB%25A6%25BD%25EC%2595%2584%25ED%258A%25B82.jpg": "7b226a71051d815b6da3c87d68480c95",
"assets/assets/images/%25EC%259E%2591%25EC%2597%258527.png": "8ba26d181cdbdb0f577510317ec89fb6",
"assets/assets/images/aquarium_background.jpg": "840b440ef225338afbc769db1c40b883",
"assets/assets/images/aquarium_background_phone.jpg": "d97f5694f65ebe221b75f823f8bb5cc8",
"assets/assets/images/dingga_logo2.png": "e43ac7cff1f950a0454e298d86f753e7",
"assets/assets/images/ski_background.jpg": "761a3320ea868c3f015f182132e537c2",
"assets/assets/images/themepark_background.jpg": "8f3f36195bc3e29cee63eb3bbd7e0a24",
"assets/assets/images/themepark_background2.jpg": "2aeedbedd0e0518963d157470c70cd59",
"assets/assets/images/themepark_background2_phone.jpg": "595a1426d1ae4945557a2722589d902d",
"assets/assets/images/zoo_background.jpg": "004b5c6f5532197fe6244cc6ff529c98",
"assets/assets/images/zoo_background_phone.jpg": "5b7ecace3b0cee1ee4e7c3579ca6dc43",
"assets/FontManifest.json": "3455b022e90ffd2c4bbb024ef7d9c068",
"assets/fonts/MaterialIcons-Regular.otf": "f1baa302ff2f2ceb5d0e9972ee2fe1db",
"assets/NOTICES": "2e21af19bac45bda8e3380dfe5007991",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "60c21565c3eed2f3a12b6f4c7976b3ac",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "c5d15d8a483eac41849715917d979130",
"/": "c5d15d8a483eac41849715917d979130",
"main.dart.js": "50a7ece0755a9e4630cf5c4ec25d7bd6",
"manifest.json": "054e53daae859a51fbe516ed7da88ac2",
"version.json": "0830ad5eebd2666925a59b79c10a9a3a"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
