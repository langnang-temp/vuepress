/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "e0332ebadaa973d0ff83bf358efb7702"
  },
  {
    "url": "assets/css/0.styles.c12086d8.css",
    "revision": "001fb89f79a917603c0d58cf5db87524"
  },
  {
    "url": "assets/fonts/MathJax_AMS-Regular.07173fb7.woff",
    "revision": "07173fb77d2ee655811499d40c8388e7"
  },
  {
    "url": "assets/fonts/MathJax_Fraktur-Bold.bc421258.woff",
    "revision": "bc42125861bd5bfc8686deeb612dcbb3"
  },
  {
    "url": "assets/fonts/MathJax_Fraktur-Regular.b80e08d5.woff",
    "revision": "b80e08d5a79acbd1fafb1ca6f3515664"
  },
  {
    "url": "assets/fonts/MathJax_Main-Bold.c9423d5d.woff",
    "revision": "c9423d5dc9d82a38ca215f74e9cdd9f2"
  },
  {
    "url": "assets/fonts/MathJax_Main-Italic.7e83626b.woff",
    "revision": "7e83626ba8bf2d20dc41565f1e6d0afc"
  },
  {
    "url": "assets/fonts/MathJax_Main-Regular.9995de47.woff",
    "revision": "9995de4787f908d8237dba7007f6c3fe"
  },
  {
    "url": "assets/fonts/MathJax_Math-BoldItalic.77dbcee3.woff",
    "revision": "77dbcee3c3d9a82a0c04a4ae7992b895"
  },
  {
    "url": "assets/fonts/MathJax_Math-Italic.5589d1a8.woff",
    "revision": "5589d1a8fc62be6613020ef2fa13e410"
  },
  {
    "url": "assets/fonts/MathJax_SansSerif-Bold.07281897.woff",
    "revision": "07281897a98a61c3733e1670f82a9fd5"
  },
  {
    "url": "assets/fonts/MathJax_SansSerif-Italic.3d580bd5.woff",
    "revision": "3d580bd561716bfb1f0b4fdd7063a802"
  },
  {
    "url": "assets/fonts/MathJax_SansSerif-Regular.bc3af04f.woff",
    "revision": "bc3af04f9a671fcabd6498042c57478f"
  },
  {
    "url": "assets/fonts/MathJax_Script-Regular.4c74e33b.woff",
    "revision": "4c74e33b0feb1fdbda49403a5e7ed604"
  },
  {
    "url": "assets/fonts/MathJax_Typewriter-Regular.72815766.woff",
    "revision": "72815766b08ca24d4d29ad1f5d4ecb45"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.590c619a.js",
    "revision": "c676bf120377a465bd9fb564dbf06fca"
  },
  {
    "url": "assets/js/11.ebd3182a.js",
    "revision": "73f9215ab0c509e88d3c2a4774ae208e"
  },
  {
    "url": "assets/js/12.ebfbc614.js",
    "revision": "1a19dbfbd2a6d34417ae79a11f5d4144"
  },
  {
    "url": "assets/js/13.adc439d1.js",
    "revision": "ad9dab1f2c3a57a0de18a62f7c0013f4"
  },
  {
    "url": "assets/js/14.dbfc60b8.js",
    "revision": "6d70f704c3de9d76baf5073066253965"
  },
  {
    "url": "assets/js/15.a7c2e911.js",
    "revision": "c8d8d9157a5f4689b518a93b87efe5c7"
  },
  {
    "url": "assets/js/3.16e775e2.js",
    "revision": "5582a7448b95c0eef87d7f4fb0b6debe"
  },
  {
    "url": "assets/js/4.16355533.js",
    "revision": "198306fa062d98953d66ab784d0ef302"
  },
  {
    "url": "assets/js/5.9f1beac0.js",
    "revision": "68c3232657a5cf2f082243ebc45a652b"
  },
  {
    "url": "assets/js/6.79b3666d.js",
    "revision": "9c5d7ec122e63bd158649230d27f39e7"
  },
  {
    "url": "assets/js/7.07e79a5a.js",
    "revision": "7cb11d07eb43df9309a8005352a56a1f"
  },
  {
    "url": "assets/js/8.2d85f415.js",
    "revision": "a4c8ff504a1caeea1e9226fc1a815dac"
  },
  {
    "url": "assets/js/9.cf58451e.js",
    "revision": "9409f993385d0e957b2c52ddbf8ce5fc"
  },
  {
    "url": "assets/js/app.bd32687e.js",
    "revision": "8e24ba8d3c9991f5b96b45fc0665c7d8"
  },
  {
    "url": "assets/js/vendors~flowchart.28b7943e.js",
    "revision": "2bd94b18b69429654d58c19a6e139630"
  },
  {
    "url": "guide/index.html",
    "revision": "ca65f35dc32b2ec21bed365a391c3d8e"
  },
  {
    "url": "hero.png",
    "revision": "d1fed5cb9d0a4c4269c3bcc4d74d9e64"
  },
  {
    "url": "index.html",
    "revision": "8ae0932836e4388154161e4885f394de"
  },
  {
    "url": "logo.png",
    "revision": "d1fed5cb9d0a4c4269c3bcc4d74d9e64"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
