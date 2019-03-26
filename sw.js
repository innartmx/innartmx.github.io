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
    "url": "/_nuxt/85f319bdae4ef41f8236.js",
    "revision": "64e5fd992a11ed3428292ccb4fb28571"
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
    "url": "/_nuxt/db6a54d3fae1218e9af4.js",
    "revision": "182942788169dbdae6034a77fddc289c"
  },
  {
    "url": "/_nuxt/e1306848a7d32bf39437.js",
    "revision": "c1cecb85b0748c1cdf8f6bc6f396a0ca"
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
