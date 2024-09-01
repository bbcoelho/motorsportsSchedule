/// <reference lib="webworker" />
import { cleanupOutdatedCaches, createHandlerBoundToURL, precacheAndRoute } from 'workbox-precaching'
import { NavigationRoute, registerRoute } from 'workbox-routing'

declare let self: ServiceWorkerGlobalScope

self.addEventListener('message', (event) => {
	if (event.data && event.data.type === 'SKIP_WAITING')
		self.skipWaiting()
})

// cache backend response on service worker install
const urlsToCache = ["https://motorsportsschedule.onrender.com/"];
self.addEventListener("install", event => {
	event.waitUntil(
		caches.open('pwa-urls')
			.then(cache => {
				return cache.addAll(urlsToCache);
			})
	);
});

self.addEventListener('fetch', event => {
	event.respondWith(
		caches.match(event.request).then(cachedResponse => {
			const networkFetch = fetch(event.request).then(response => {
				// update the cache with a clone of the network response
				const responseClone = response.clone()
				caches.open('pwa-urls').then(cache => {
					cache.put(event.request, responseClone)
				})
				return response
			}).catch(function (reason) {
				console.error('ServiceWorker fetch failed: ', reason)
			})
			// prioritize cached response over network
			return cachedResponse || networkFetch
		}
		)
	)
})

// self.__WB_MANIFEST is the default injection point
precacheAndRoute(self.__WB_MANIFEST)

// clean old assets
cleanupOutdatedCaches()

/** @type {RegExp[] | undefined} */
let allowlist
// in dev mode, we disable precaching to avoid caching issues
if (import.meta.env.DEV)
	allowlist = [/^\/$/]

// to allow work offline
registerRoute(new NavigationRoute(
	createHandlerBoundToURL('index.html'),
	{ allowlist },
))
