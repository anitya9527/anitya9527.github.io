const workboxVersion="6.1.2";importScripts("https://storage.googleapis.com/workbox-cdn/releases/6.1.2/workbox-sw.js"),workbox.core.setCacheNameDetails({prefix:"Anitya's Blog"}),workbox.core.skipWaiting(),workbox.core.clientsClaim(),workbox.precaching.precacheAndRoute([{revision:"47310a5519f9ef9843f0e40d6ba8333a",url:"./2020/08/17/自杀迷思/index.html"},{revision:"ff9f201d872c8487f6af48dd03a4829f",url:"./2021/04/08/hello-world/index.html"},{revision:"0547509f17ddea43ff6c82c572887497",url:"./2021/04/09/《我的姐姐》影评/index.html"},{revision:"202c149ebeba22705f3907993835deb7",url:"./2021/04/09/穷人家的孩子该不该听父母的话？/index.html"},{revision:"e1f615301502979d93dee07f82791ad2",url:"./404.html"},{revision:"80bf2f1cc1bc9b792f03882d9cefc125",url:"./about/index.html"},{revision:"1bee2659b8ab7938e717b333071f8303",url:"./archives/2020/08/index.html"},{revision:"fb16c4e5a09ebe4a18dbc9e9870e3727",url:"./archives/2020/index.html"},{revision:"45ee8f637288ba055b8f8468eee775d5",url:"./archives/2021/04/index.html"},{revision:"3e8575e69a7c78840830a00ad71d03e0",url:"./archives/2021/index.html"},{revision:"90a92efa185be87b6de629c461bff997",url:"./archives/index.html"},{revision:"a1fbcf3ff33df71554678bd5c0dc2b15",url:"./artitalk/index.html"},{revision:"8e39ae31dea2ddc38f4a6948605370fa",url:"./assets/algolia/algoliasearch.js"},{revision:"9c5e51e57e2b1d888950bf4cb5708c49",url:"./assets/algolia/algoliasearch.min.js"},{revision:"6b4991f7703cc7f03163d654bad2a39d",url:"./assets/algolia/algoliasearchLite.js"},{revision:"c2d71f042c879659dbc97f8853b62f21",url:"./assets/algolia/algoliasearchLite.min.js"},{revision:"faa8311490abe4fd0a3e66d6b60a2ad4",url:"./books/index.html"},{revision:"aecbbbf70ae9ccc497c416c1a115953f",url:"./categories/index.html"},{revision:"10d4ed7dc236fd0831eb7c147a1e717e",url:"./css/index.css"},{revision:"d41d8cd98f00b204e9800998ecf8427e",url:"./css/var.css"},{revision:"25d82b1670882945acbf7946439e3621",url:"./games/index.html"},{revision:"ea2d6183dae1c4f99842b6efb39cfdee",url:"./index.html"},{revision:"a80ce0bae4995c5b4d57e72e8c710bc9",url:"./js/main.js"},{revision:"d4ca891c702c547a356f6edbbfdc1e0f",url:"./js/search/algolia.js"},{revision:"de25bf0fd67bcc6c161201f99c8f7f29",url:"./js/search/local-search.js"},{revision:"4b84207e490168db8faf5b25d98027e9",url:"./js/tw_cn.js"},{revision:"5d617e1a33f31aa82474eb7f4b07717d",url:"./js/utils.js"},{revision:"4469efe77564183882742b424064b7dd",url:"./link/index.html"},{revision:"c8d4840b35cc1346c2eef8ea91a8e6c9",url:"./music/index.html"},{revision:"a30971cf3ac95e0248a6a50f55d9687a",url:"./pwa/manifest.json"},{revision:"2f0ac20edf8c1609b14733467866324e",url:"./tags/随笔/index.html"},{revision:"b813205b73570a22106ecf595d5bfda3",url:"./tags/影评/index.html"},{revision:"b3537ff8a41993e70bc35d47bb7e51ec",url:"./tags/index.html"}],{directoryIndex:null}),workbox.precaching.cleanupOutdatedCaches(),workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|gif|bmp|webp|svg|ico)$/,new workbox.strategies.CacheFirst({cacheName:"images",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/\.(?:eot|ttf|woff|woff2)$/,new workbox.strategies.CacheFirst({cacheName:"fonts",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/fonts\.googleapis\.com/,new workbox.strategies.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets"})),workbox.routing.registerRoute(/^https:\/\/fonts\.gstatic\.com/,new workbox.strategies.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/cdn\.jsdelivr\.net/,new workbox.strategies.CacheFirst({cacheName:"static-libs",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.googleAnalytics.initialize();