// Minimal service worker so Android installs this as a proper app.
// It always fetches fresh from the network, so updates show up straight away.
self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", e => e.waitUntil(self.clients.claim()));
self.addEventListener("fetch", e => e.respondWith(fetch(e.request)));
