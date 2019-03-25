importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/274341b41a0bf67f0016.js",
    "revision": "53133999fcee6c66df999502a2a86463"
  },
  {
    "url": "/_nuxt/3b1cfa3652ece54d1cf7.js",
    "revision": "a998903763c2cc933dd7f826ee0a6422"
  },
  {
    "url": "/_nuxt/6c49b3a7f0a6de321c16.js",
    "revision": "798f8595994c081504fc44e5b2b5e22e"
  },
  {
    "url": "/_nuxt/8f35a3a791f66eec31a9.js",
    "revision": "9de1a1a64ab08634a43c4781ce88c156"
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
