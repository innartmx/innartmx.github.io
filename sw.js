importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/1891c25ec96ff3bbe21f.js",
    "revision": "a0dffdf579e98626ae6eb55e2d74b443"
  },
  {
    "url": "/_nuxt/274341b41a0bf67f0016.js",
    "revision": "53133999fcee6c66df999502a2a86463"
  },
  {
    "url": "/_nuxt/3b1cfa3652ece54d1cf7.js",
    "revision": "a998903763c2cc933dd7f826ee0a6422"
  },
  {
    "url": "/_nuxt/94b008b47e19c35819b9.js",
    "revision": "3bf72be4130143d0656a35c1d523e456"
  },
  {
    "url": "/_nuxt/cb391c6963c4e36c3535.js",
    "revision": "1b1860642d2b0bf3ab01cb0671c4bfc3"
  },
  {
    "url": "/_nuxt/cd76dd88381a1806f5c8.js",
    "revision": "d048e34afe5c3ce30eebdda3f0565adb"
  },
  {
    "url": "/_nuxt/fb78271825bdc27c1338.js",
    "revision": "b1c7409b8454659d905352cebe5e0068"
  }
], {
  "cacheId": "innart-webpage",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')
