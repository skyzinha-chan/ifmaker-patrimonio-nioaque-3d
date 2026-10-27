/**
 * Service Worker para suporte Offline-First (PWA).
 * Mantém ativos essenciais em cache e aplica Stale-While-Revalidate para recursos estáticos.
 */

const CACHE_NAME = "nioaque-3d-cache-v1";

const CORE_ASSETS = [
  "/",
  "/index.html",
  "/manifest.json",
  "/assets/logo IF.png",
  "/assets/logo IFMaker.png",
  "/assets/tatu.png",
  "/assets/canhão.png",
  "/assets/jacaré.png",
  "/assets/peagadas.png",
  "/assets/setas programaveis.jpg",
  "/assets/acervo-grafico-reutilizavel.svg"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then((cache) => cache.addAll(CORE_ASSETS))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((cacheNames) =>
        Promise.all(
          cacheNames
            .filter((name) => name !== CACHE_NAME)
            .map((name) => caches.delete(name))
        )
      )
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (event) => {
  const request = event.request;

  if (request.method !== "GET" || !request.url.startsWith("http")) {
    return;
  }

  // Ignora chamadas de API do Firebase para preservar o controle nativo do SDK
  if (
    request.url.includes("firestore.googleapis.com") ||
    request.url.includes("identitytoolkit.googleapis.com")
  ) {
    return;
  }

  // Navegação SPA: prioriza rede e utiliza fallback para /index.html quando offline
  if (request.mode === "navigate") {
    event.respondWith(
      fetch(request).catch(() => caches.match("/index.html") || caches.match("/"))
    );
    return;
  }

  // Ativos estáticos: estratégia Stale-While-Revalidate
  event.respondWith(
    caches.match(request).then((cachedResponse) => {
      const fetchPromise = fetch(request)
        .then((networkResponse) => {
          if (
            networkResponse &&
            networkResponse.status === 200 &&
            networkResponse.type === "basic"
          ) {
            const responseToCache = networkResponse.clone();
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(request, responseToCache);
            });
          }
          return networkResponse;
        })
        .catch(() => cachedResponse);

      return cachedResponse || fetchPromise;
    })
  );
});


