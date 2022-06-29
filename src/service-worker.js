// Add any other logic here as needed.

// import { CacheableResponsePlugin } from "workbox-cacheable-response/CacheableResponsePlugin";
// import { CacheFirst } from "workbox-strategies/CacheFirst";
// import { createHandlerForURL } from "workbox-precaching/createHandlerForURL";
// import { ExpirationPlugin } from "workbox-expiration/ExpirationPlugin";
import { ExpirationPlugin } from "workbox-expiration";
import { precacheAndRoute } from "workbox-precaching";
import { CacheFirst } from "workbox-strategies";
import { registerRoute, NavigationRoute } from "workbox-routing";

NavigationRoute("/index.html");
precacheAndRoute(self.__WB_MANIFEST);
registerRoute(
  /^https?:\/\/www.imgur.com\/.*/,
  new CacheFirst({
    plugins: [
      new ExpirationPlugin({
        maxAgeSeconds: 24 * 60 * 60 * 30,
      }),
    ],
  })
);

self.addEventListener("message", (event) => {
  if (event.data && event.data.type === "SKIP_WAITING") self.skipWaiting();
});
