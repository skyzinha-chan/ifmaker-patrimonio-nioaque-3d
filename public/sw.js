// public/sw.js - Service Worker para suporte Offline-First (PWA)
// Garante que o professor consiga acessar planos e materiais mesmo sem sinal de internet na escola

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

// Instalação: Pré-cache dos ativos estruturais
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then((cache) => cache.addAll(CORE_ASSETS))
      .then(() => self.skipWaiting())
  );
});

// Ativação: Limpeza de caches obsoletos de versões anteriores
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

// Interceptação de requisições
self.addEventListener("fetch", (event) => {
  const request = event.request;

  // Ignorar requisições não-GET ou extensões do navegador
  if (request.method !== "GET" || !request.url.startsWith("http")) {
    return;
  }

  // Requisições do Firebase Firestore / Auth: prioridade de rede sem bloquear offline
  if (request.url.includes("firestore.googleapis.com") || request.url.includes("identitytoolkit.googleapis.com")) {
    return;
  }

  // 1. Navegação de páginas (HTML / Rotas do React Router):
  // Tenta a rede; se falhar (offline), entrega o index.html em cache para o SPA carregar
  if (request.mode === "navigate") {
    event.respondWith(
      fetch(request).catch(() => caches.match("/index.html") || caches.match("/"))
    );
    return;
  }

  // 2. Recursos Estáticos (JS, CSS, Imagens, Fontes):
  // Estratégia Stale-While-Revalidate: responde rápido do cache e atualiza em segundo plano
  event.respondWith(
    caches.match(request).then((cachedResponse) => {
      const fetchPromise = fetch(request)
        .then((networkResponse) => {
          if (networkResponse && networkResponse.status === 200 && networkResponse.type === "basic") {
            const responseToCache = networkResponse.clone();
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(request, responseToCache);
            });
          }
          return networkResponse;
        })
        .catch(() => cachedResponse); // Se offline, mantém o que tem em cache

      return cachedResponse || fetchPromise;
    })
  );
});

