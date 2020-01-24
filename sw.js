importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/45616d7ad2b785f8891e.js",
    "revision": "6faba3a19bcf18fed37e54fcb678ad48"
  },
  {
    "url": "/_nuxt/58a6f1c681fbe1788eb2.js",
    "revision": "53133999fcee6c66df999502a2a86463"
  },
  {
    "url": "/_nuxt/8fc8f1ff4c07d7697170.js",
    "revision": "3ca4e1bb950595ee04b512d3f7a2279c"
  },
  {
    "url": "/_nuxt/93bfd4d59f12bd0afb56.js",
    "revision": "acee1f1b4f7beaf0ae4081da1981bdcb"
  },
  {
    "url": "/_nuxt/af88a985afc8f4872d47.js",
    "revision": "a998903763c2cc933dd7f826ee0a6422"
  },
  {
    "url": "/_nuxt/c8564c8967bf687e3005.js",
    "revision": "180933e5715e19c0b0d45faa00dee52e"
  },
  {
    "url": "/_nuxt/f612a7e1716f287c1bfe.js",
    "revision": "d063986b6e2060f2063a65ac45702662"
  }
], {
  "cacheId": "innart",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')
