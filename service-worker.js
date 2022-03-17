/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["/404.html","a7c88056beca6ef3d62b262636010d4a"],["/about/index copy.html","c90b8972be4b291cf921874944335788"],["/about/index.html","9fa5293455584c696d7129b95ff634ac"],["/archives/2019/03/index.html","02de6df5b7e144db71e34fb951c331fb"],["/archives/2019/04/index.html","1234ff6c53f8577f2d1aa91000d8eb0a"],["/archives/2019/07/index.html","714a519a427a100d08f9b4e252ef719a"],["/archives/2019/08/index.html","0a7baf3c063681223bf3ee1eca7513be"],["/archives/2019/09/index.html","3afca4b8e41cd8ec7c37358d64d85916"],["/archives/2019/10/index.html","82b1c4562cf72b66bb4d3c625fd9c582"],["/archives/2019/12/index.html","23df9a4eaac8b5020f69626ca64d4971"],["/archives/2019/index.html","213a5ed4d05e7c4f04473abb2f60d2e6"],["/archives/2019/page/2/index.html","012e88692897b67cf703722f7759e210"],["/archives/2020/01/index.html","c2cc52efd53df74778e0cb2dc5d7d3de"],["/archives/2020/02/index.html","b175d354e8765bd7d1ad050fdfe25d35"],["/archives/2020/05/index.html","4b34d2e1238e354f2392850653c60f7d"],["/archives/2020/index.html","b5f213b9741cb2baeb5a891319451668"],["/archives/index.html","688253957a482c463a7970268e763a78"],["/archives/page/2/index.html","2fe68e9e45010f37108ed45fb210c6c9"],["/awesome-stuffs/index.html","9f5bd383e0826dda1e5f45890e4f3551"],["/categories/index.html","38a8928095d99b37a7d3c0fc4f3b69b0"],["/categories/前端/CSS/index.html","170c2ac2e69c1ecf157e4f5dfd811ed9"],["/categories/前端/HTTP/index.html","4829476d0f50f20fe95b56bc70197a4c"],["/categories/前端/JavaScript/index.html","aa45ee194573591b065bfecabb932ed0"],["/categories/前端/Vue/index.html","f16f2363304c8171fcc1536a28ed32bc"],["/categories/前端/index.html","30270a83bd6b8a7a68b49d45d134f7ca"],["/categories/前端/page/2/index.html","3dff232a7c2bc189d877aee191649b18"],["/categories/前端/技巧/index.html","94367bc40839081d7078919e6e445abf"],["/categories/前端/插件/index.html","a5af7b7d4e936e19d9f0114cec7c1f77"],["/categories/工具/Git/index.html","7b9c4dec5e8f3e21498df958bbb36b92"],["/categories/工具/RegExp/index.html","3a3847aab1354097fa068363e3e8ae35"],["/categories/工具/Terminal/index.html","ba828eedc64bfe1f48e526e7ffb07c70"],["/categories/工具/index.html","c7033192b48c647bb11f83169f7864b9"],["/categories/工具/数据库/index.html","eca2f57eb7fa2a9620cb39f88d7234ec"],["/comments/index.html","a4b214b2a101b9f847c8a1d8ac6eda6b"],["/css/index.css","568f0a6e43283bbbd6d2a9f810bfd180"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/disclaimer/index.html","fb34777ae4002b2803784c0af27925fb"],["/img/404.jpg","23cf82ba04680b72d5616d74aa3f5550"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/avatar.png","78c622498ebd6cc668a712e1e9ca613e"],["/img/comment_bg.png","04208f25e34b8f29f072efbb2e212c86"],["/img/ele1.png","d5168c1d55ef1a4009702e03aa922ac7"],["/img/ele2.png","7e50620b502399402151bfb6bc6d24ac"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","d0289dc0a46fc5b15b3363ffa78cf6c7"],["/img/pwa/114x114.png","294444d37d366fae0c5ea39dcdfdb80c"],["/img/pwa/128x128.png","ed6f7e30c2902eb113b99b81734a6e08"],["/img/pwa/144x144.png","d0a21802cd8575c469a8d8b9db2c402d"],["/img/pwa/152x152.png","67aa19b63e016a5c1009891a74417125"],["/img/pwa/192x192.png","bcf03ca24c531b541e3ba6d88c355b43"],["/img/pwa/384x384.png","317c679edc331ef3e75349dd1cf59298"],["/img/pwa/512x512.png","43037fd7bb5d9a973363ed38f194622e"],["/img/pwa/57x57.png","4678bbfa8eb4f67028c2e3a6a87eb320"],["/img/pwa/72x72.png","ba5a3f4f2efe3bea3133dee94f432ac4"],["/img/pwa/96x96.png","d70556ea772f2feb5e5fe64f9147ee97"],["/img/pwa/apple-touch-icon.png","4c8fb45fab623aa877c8929b070220b5"],["/img/pwa/safari-pinned-tab.svg","9ec91e482c40373b93f2c860a02bdac6"],["/index.html","af2b585e0ec96b5241652a022eff9704"],["/js/activate-power-mode.js","2345780cb71f6e17a20d9ca2283accda"],["/js/baidupush.js","7d26211fa55bebac2e0c0abeee05a267"],["/js/main.js","4da14411c4f8361fd2b3a03a03af2f86"],["/js/nightshift.js","35c53e97df1443b175319ab98dcd26e6"],["/js/runtimeshow.js","6bc5dc7652b39605152475b840e88899"],["/js/search/algolia.js","c2c8d117a3cba3e5c9f47ad65d1d00f2"],["/js/search/local-search.js","8cc4c0c6e32a9428a367eca83ffae3ab"],["/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["/js/third-party/canvas-nest.js","876c47c6a2edc066781c264adf33aec2"],["/js/third-party/canvas-ribbon.js","6ca731e8db63562c0dd6461eabbd65d7"],["/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["/js/third-party/piao.js","d7a4ef27420717adccfca1c1287f8c44"],["/js/tw_cn.js","fbc127c110435085bde10997850bbc55"],["/js/utils.js","816e7d34d69996e6a4f0b92a81c16cca"],["/link/index.html","716e7c66c669f3636612fb44e1f8fb87"],["/mahjong/css/Chaoshan.9f6766af.css","d9865c57771c23e72acf8673d1f2d31f"],["/mahjong/css/Index.90c4c136.css","8e99ae1dc0e4ca223351aeb2bda9ad41"],["/mahjong/css/app.4b8d665e.css","e50407137373a43fde881ec7b1d9ede9"],["/mahjong/img/collapse-title2.9a3310e4.png","9a3310e44cf5f7022a39c8649b1eb6ce"],["/mahjong/img/collapse-title3.93ad23d9.png","93ad23d97ff6928d1b10857af9e16fc8"],["/mahjong/img/dasangyuan.847ebf01.png","847ebf01ce74d5f698cb8b557fa3c224"],["/mahjong/img/dasixi.2e7430c9.png","2e7430c9516bacef948fde476f4917d2"],["/mahjong/img/haohuaqixiaodui.fa45fb0e.png","fa45fb0ec0eb0b26be923ab833ba28ed"],["/mahjong/img/hunpeng.ef249618.png","ef24961890404f8c7df2caa5f5b1f9b1"],["/mahjong/img/hunyaojiu.02c853c3.png","02c853c3b39b5ddb665ef015596d45e8"],["/mahjong/img/hunyise.cd751b47.png","cd751b47eba8886644d72b1d15cf3e78"],["/mahjong/img/jihu.18f365c9.png","18f365c9c9e928bf677078db7b889343"],["/mahjong/img/logo.15027e73.png","15027e73e0139376afc79f2486be9798"],["/mahjong/img/pengpenghu.24f652dd.png","24f652dd4a13c51d92ad1da705e86157"],["/mahjong/img/pinghu.6e6bc245.png","6e6bc245322b6ff1777a3c7ce8823878"],["/mahjong/img/qingpeng.0b5fad96.png","0b5fad966e9fcb8bbb10e9ae7c43a355"],["/mahjong/img/qingyaojiu.567a8f86.png","567a8f867e81a0402453b33e765b8131"],["/mahjong/img/qingyise.64145e8b.png","64145e8b2c1e726a391a5865d613c19c"],["/mahjong/img/qixiaodui.32d19d63.png","32d19d63c7d63a59236f4ac9cb32c946"],["/mahjong/img/sanghaohuaqixiaodui.d3893d19.png","d3893d192d0d5d3408da9e23431a0aa2"],["/mahjong/img/shibaluohan.648a7577.png","648a757733009d5fa0db45b0d4f8e304"],["/mahjong/img/shisangyao.b5cb0bd2.png","b5cb0bd270fa4d40b5a2e3ffd88bc46e"],["/mahjong/img/shuanghaohuaqixiaodui.6974e55d.png","6974e55dab5cade09785ad33fd7015b7"],["/mahjong/img/win.f9fc90f1.png","f9fc90f1b57f1001956cb230742e4a0e"],["/mahjong/img/xiaosangyuan.c8df7072.png","c8df7072ceb1ecf8c26d44b40b55cd1a"],["/mahjong/img/xiaosixi.7efafb36.png","7efafb36da5a4b9621eba6f0e46a059a"],["/mahjong/img/ziyise.0952808d.png","0952808dcc87229786c422ae77788877"],["/mahjong/index.html","8a7441f44cba1d57ab41146b107cdd06"],["/mahjong/js/Chaoshan.745d3f58.js","88c9183bab147f31d46e1746c440c33d"],["/mahjong/js/Index.74601ab6.js","d3c8513faf0488e65554ffef4059bd87"],["/mahjong/js/app.94639d7a.js","f29f6305b06d46b3e668f19755646fec"],["/mahjong/js/chunk-vendors.88a4bc11.js","40a5bf5a1778075117322d05cd3a68c7"],["/page/2/index.html","3438724d31c6370811d511a81e909af9"],["/post/ajax-fetch-axios/index.html","dd2983a71d0b010ad8b7f7782343c930"],["/post/axios/index.html","6e0c9320416599e45a4d1a7b54aa7d34"],["/post/before-after-slider/index.html","e80a08b89aafdfa3972d00e2fb5c8cb3"],["/post/css-page-layout/index.html","fc6c6ed2f7e95a6c8f82320502cfe8d3"],["/post/designing-websites-for-iphonex/index.html","bbb5d06ed245f3fad728bdcfb7361834"],["/post/es6-env/index.html","582c1078247df27b58d4d14b3b907a3c"],["/post/git-github/index.html","bcba04d3ebf61d898c6dcc68ab1aee68"],["/post/http-finance/index.html","d71339020b6897f594a966a708fe2fbe"],["/post/install-mongodb-on-os-x/index.html","eaf236acaece1c6c01df760c5008db79"],["/post/iterm2-for-mac-tutorial/index.html","3d19cc179ac52b135952088d4395dc77"],["/post/javascript-dom/index.html","3c0be82a97d48839a831c8be1b92ba20"],["/post/javascript-sorting/index.html","1f8a0fc8438d939d4d9077e3db5a7313"],["/post/js-regexp-guide/index.html","15f4379a01dd6e3f4d69c760b95cfa96"],["/post/less-tutorial/index.html","96a0d1d41a5cf94904897b5964c65e2e"],["/post/vue-project-optimization/index.html","28ca6cdd49fa2393c193ca92d37ab6ab"],["/post/vue-router/index.html","feeb62a60bd60c285fbe2f56072f9481"],["/post/vuex/index.html","769efb26a2321b2da68407a951607b9a"],["/post/web-notification/index.html","b86f544664bac5eb5ad385b94aeea83c"],["/privacy/index.html","a65785ce56eb5919300a6373acd4355c"],["/red-envelope/index.html","8e8b790fcee1202043dca1439f7ad8f2"],["/tags/Ajax/index.html","dfd31f55c76db8651c6650be484933e3"],["/tags/Axios/index.html","9c78e8d52d4eea4cadb56f12513e7530"],["/tags/Babel/index.html","52be1661a59ecd37842cbb01b6f48840"],["/tags/Before-After/index.html","3dc2cad8049e5c932bd900b15d63039f"],["/tags/CDN/index.html","b11862301a425128a0f91ed8d9c92e77"],["/tags/CSS/index.html","0c1e7957d30b9d58b35a9c84c68ca55a"],["/tags/CSS预处理器/index.html","70441aee988c5880155062c533de7ce8"],["/tags/DOM/index.html","b729919f509e9a40b2b3fddcc03eaaa2"],["/tags/ES6/index.html","2c7c4a8be38bc99331467233cc7c1e73"],["/tags/Event/index.html","b6300752a0cb618c95e7f09163361dd9"],["/tags/Fetch/index.html","ed91858d949557c02e939ed94acf1f62"],["/tags/Git/index.html","02edb5182de02606a32706a91ecd9223"],["/tags/GitHub/index.html","3ab48fa557a5869834a94ef0d627d676"],["/tags/HTML/index.html","8bc200b8f862cdf3f4efdbb07cbed8dc"],["/tags/HTTP/index.html","8e9b2d55e18446b969bab237e7ce49ce"],["/tags/Homebrew/index.html","c8b906ac538d9504bd98be880916e6aa"],["/tags/JavaScript/index.html","513f92e01415321a11da16d51d5412cd"],["/tags/Less/index.html","f341fcd7323ba92a51a890dba30f88d2"],["/tags/MacOS/index.html","549c46e8fcb5741df3da143b5edd99fd"],["/tags/MongoDB/index.html","93854dd07666cbebe4ee51710204cf76"],["/tags/Npm/index.html","3f83abe2868e4d01207537dcb3be4c88"],["/tags/OhMyZsh/index.html","ebd119af3393dcf8ea3aa242c63b1c7c"],["/tags/RegExp/index.html","58187754ae45ab134b786631d22c168f"],["/tags/Terminal/index.html","196bbc7f5e3aa8d80c4a19990ba16749"],["/tags/Vue-cli3/index.html","d71d13fcd0cdf2870ff47f162982cce1"],["/tags/Vue-router/index.html","b13dc38f92d32ae90c69da57a394089a"],["/tags/Vue/index.html","e08ad1fbe2573b0f32b658abfcbfbd6a"],["/tags/Vuex/index.html","fd5802d9d9da4cbef8f45d970554d1c3"],["/tags/Webpack/index.html","94610b301988a2e3c2682503097c98cd"],["/tags/iPhone/index.html","2fa71f9be2534fa52d380253bd7c65a2"],["/tags/iTerm2/index.html","df4eaa9dba6e953f3bf2712ae1ccc4cf"],["/tags/index.html","2dc3b0ce577fb63ef86ef7ded2b8240d"],["/tags/前端/index.html","02ce7ec142419eaf5b9512504784a2c2"],["/tags/前端/page/2/index.html","166ea62bbf4ea696ab975aa76a976619"],["/tags/工具/index.html","9d01952268185e4c39b52b69deb2bbbb"],["/tags/弹窗通知/index.html","73fd7b6a06a6e7cec516f7d8c1a8cdff"],["/tags/排序/index.html","b35200cef1b57475e3e3cff4ee3ec491"],["/tags/插件/index.html","7a4450ceb2eeaf23eab95608fd2fbf33"],["/tags/数据库/index.html","539be41074c323e8ff4bc8acf309d774"],["/tags/标签闪烁/index.html","38ce8b50015bd4f9105eccf64179ca35"],["/tags/浏览器通知/index.html","0bbca5acabe6b8f43a8bd9b304b0cfa6"],["/tags/算法/index.html","8e34664f9d7acb651cd2758b28b851a3"],["/tags/路由懒加载/index.html","2bf5067efacbee5f08b282366b7642ae"],["/tags/适配/index.html","fa14abdd4f854a2fb66051f1029a8057"],["/tags/配置分离/index.html","d8527884f3ce62b69bcbcb82e248d945"],["/tags/铃声/index.html","42d59c4316e5e052741f38d625b19f15"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});


// *** Start of auto-included sw-toolbox code. ***
/* 
 Copyright 2016 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var t;t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,t.toolbox=e()}}(function(){return function e(t,n,r){function o(c,s){if(!n[c]){if(!t[c]){var a="function"==typeof require&&require;if(!s&&a)return a(c,!0);if(i)return i(c,!0);var u=new Error("Cannot find module '"+c+"'");throw u.code="MODULE_NOT_FOUND",u}var f=n[c]={exports:{}};t[c][0].call(f.exports,function(e){var n=t[c][1][e];return o(n?n:e)},f,f.exports,e,t,n,r)}return n[c].exports}for(var i="function"==typeof require&&require,c=0;c<r.length;c++)o(r[c]);return o}({1:[function(e,t,n){"use strict";function r(e,t){t=t||{};var n=t.debug||m.debug;n&&console.log("[sw-toolbox] "+e)}function o(e){var t;return e&&e.cache&&(t=e.cache.name),t=t||m.cache.name,caches.open(t)}function i(e,t){t=t||{};var n=t.successResponses||m.successResponses;return fetch(e.clone()).then(function(r){return"GET"===e.method&&n.test(r.status)&&o(t).then(function(n){n.put(e,r).then(function(){var r=t.cache||m.cache;(r.maxEntries||r.maxAgeSeconds)&&r.name&&c(e,n,r)})}),r.clone()})}function c(e,t,n){var r=s.bind(null,e,t,n);d=d?d.then(r):r()}function s(e,t,n){var o=e.url,i=n.maxAgeSeconds,c=n.maxEntries,s=n.name,a=Date.now();return r("Updating LRU order for "+o+". Max entries is "+c+", max age is "+i),g.getDb(s).then(function(e){return g.setTimestampForUrl(e,o,a)}).then(function(e){return g.expireEntries(e,c,i,a)}).then(function(e){r("Successfully updated IDB.");var n=e.map(function(e){return t.delete(e)});return Promise.all(n).then(function(){r("Done with cache cleanup.")})}).catch(function(e){r(e)})}function a(e,t,n){return r("Renaming cache: ["+e+"] to ["+t+"]",n),caches.delete(t).then(function(){return Promise.all([caches.open(e),caches.open(t)]).then(function(t){var n=t[0],r=t[1];return n.keys().then(function(e){return Promise.all(e.map(function(e){return n.match(e).then(function(t){return r.put(e,t)})}))}).then(function(){return caches.delete(e)})})})}function u(e,t){return o(t).then(function(t){return t.add(e)})}function f(e,t){return o(t).then(function(t){return t.delete(e)})}function h(e){e instanceof Promise||p(e),m.preCacheItems=m.preCacheItems.concat(e)}function p(e){var t=Array.isArray(e);if(t&&e.forEach(function(e){"string"==typeof e||e instanceof Request||(t=!1)}),!t)throw new TypeError("The precache method expects either an array of strings and/or Requests or a Promise that resolves to an array of strings and/or Requests.");return e}function l(e,t,n){if(!e)return!1;if(t){var r=e.headers.get("date");if(r){var o=new Date(r);if(o.getTime()+1e3*t<n)return!1}}return!0}var d,m=e("./options"),g=e("./idb-cache-expiration");t.exports={debug:r,fetchAndCache:i,openCache:o,renameCache:a,cache:u,uncache:f,precache:h,validatePrecacheInput:p,isResponseFresh:l}},{"./idb-cache-expiration":2,"./options":4}],2:[function(e,t,n){"use strict";function r(e){return new Promise(function(t,n){var r=indexedDB.open(u+e,f);r.onupgradeneeded=function(){var e=r.result.createObjectStore(h,{keyPath:p});e.createIndex(l,l,{unique:!1})},r.onsuccess=function(){t(r.result)},r.onerror=function(){n(r.error)}})}function o(e){return e in d||(d[e]=r(e)),d[e]}function i(e,t,n){return new Promise(function(r,o){var i=e.transaction(h,"readwrite"),c=i.objectStore(h);c.put({url:t,timestamp:n}),i.oncomplete=function(){r(e)},i.onabort=function(){o(i.error)}})}function c(e,t,n){return t?new Promise(function(r,o){var i=1e3*t,c=[],s=e.transaction(h,"readwrite"),a=s.objectStore(h),u=a.index(l);u.openCursor().onsuccess=function(e){var t=e.target.result;if(t&&n-i>t.value[l]){var r=t.value[p];c.push(r),a.delete(r),t.continue()}},s.oncomplete=function(){r(c)},s.onabort=o}):Promise.resolve([])}function s(e,t){return t?new Promise(function(n,r){var o=[],i=e.transaction(h,"readwrite"),c=i.objectStore(h),s=c.index(l),a=s.count();s.count().onsuccess=function(){var e=a.result;e>t&&(s.openCursor().onsuccess=function(n){var r=n.target.result;if(r){var i=r.value[p];o.push(i),c.delete(i),e-o.length>t&&r.continue()}})},i.oncomplete=function(){n(o)},i.onabort=r}):Promise.resolve([])}function a(e,t,n,r){return c(e,n,r).then(function(n){return s(e,t).then(function(e){return n.concat(e)})})}var u="sw-toolbox-",f=1,h="store",p="url",l="timestamp",d={};t.exports={getDb:o,setTimestampForUrl:i,expireEntries:a}},{}],3:[function(e,t,n){"use strict";function r(e){var t=a.match(e.request);t?e.respondWith(t(e.request)):a.default&&"GET"===e.request.method&&0===e.request.url.indexOf("http")&&e.respondWith(a.default(e.request))}function o(e){s.debug("activate event fired");var t=u.cache.name+"$$$inactive$$$";e.waitUntil(s.renameCache(t,u.cache.name))}function i(e){return e.reduce(function(e,t){return e.concat(t)},[])}function c(e){var t=u.cache.name+"$$$inactive$$$";s.debug("install event fired"),s.debug("creating cache ["+t+"]"),e.waitUntil(s.openCache({cache:{name:t}}).then(function(e){return Promise.all(u.preCacheItems).then(i).then(s.validatePrecacheInput).then(function(t){return s.debug("preCache list: "+(t.join(", ")||"(none)")),e.addAll(t)})}))}e("serviceworker-cache-polyfill");var s=e("./helpers"),a=e("./router"),u=e("./options");t.exports={fetchListener:r,activateListener:o,installListener:c}},{"./helpers":1,"./options":4,"./router":6,"serviceworker-cache-polyfill":16}],4:[function(e,t,n){"use strict";var r;r=self.registration?self.registration.scope:self.scope||new URL("./",self.location).href,t.exports={cache:{name:"$$$toolbox-cache$$$"+r+"$$$",maxAgeSeconds:null,maxEntries:null},debug:!1,networkTimeoutSeconds:null,preCacheItems:[],successResponses:/^0|([123]\d\d)|(40[14567])|410$/}},{}],5:[function(e,t,n){"use strict";var r=new URL("./",self.location),o=r.pathname,i=e("path-to-regexp"),c=function(e,t,n,r){t instanceof RegExp?this.fullUrlRegExp=t:(0!==t.indexOf("/")&&(t=o+t),this.keys=[],this.regexp=i(t,this.keys)),this.method=e,this.options=r,this.handler=n};c.prototype.makeHandler=function(e){var t;if(this.regexp){var n=this.regexp.exec(e);t={},this.keys.forEach(function(e,r){t[e.name]=n[r+1]})}return function(e){return this.handler(e,t,this.options)}.bind(this)},t.exports=c},{"path-to-regexp":15}],6:[function(e,t,n){"use strict";function r(e){return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}var o=e("./route"),i=e("./helpers"),c=function(e,t){for(var n=e.entries(),r=n.next(),o=[];!r.done;){var i=new RegExp(r.value[0]);i.test(t)&&o.push(r.value[1]),r=n.next()}return o},s=function(){this.routes=new Map,this.routes.set(RegExp,new Map),this.default=null};["get","post","put","delete","head","any"].forEach(function(e){s.prototype[e]=function(t,n,r){return this.add(e,t,n,r)}}),s.prototype.add=function(e,t,n,c){c=c||{};var s;t instanceof RegExp?s=RegExp:(s=c.origin||self.location.origin,s=s instanceof RegExp?s.source:r(s)),e=e.toLowerCase();var a=new o(e,t,n,c);this.routes.has(s)||this.routes.set(s,new Map);var u=this.routes.get(s);u.has(e)||u.set(e,new Map);var f=u.get(e),h=a.regexp||a.fullUrlRegExp;f.has(h.source)&&i.debug('"'+t+'" resolves to same regex as existing route.'),f.set(h.source,a)},s.prototype.matchMethod=function(e,t){var n=new URL(t),r=n.origin,o=n.pathname;return this._match(e,c(this.routes,r),o)||this._match(e,[this.routes.get(RegExp)],t)},s.prototype._match=function(e,t,n){if(0===t.length)return null;for(var r=0;r<t.length;r++){var o=t[r],i=o&&o.get(e.toLowerCase());if(i){var s=c(i,n);if(s.length>0)return s[0].makeHandler(n)}}return null},s.prototype.match=function(e){return this.matchMethod(e.method,e.url)||this.matchMethod("any",e.url)},t.exports=new s},{"./helpers":1,"./route":5}],7:[function(e,t,n){"use strict";function r(e,t,n){return n=n||{},i.debug("Strategy: cache first ["+e.url+"]",n),i.openCache(n).then(function(t){return t.match(e).then(function(t){var r=n.cache||o.cache,c=Date.now();return i.isResponseFresh(t,r.maxAgeSeconds,c)?t:i.fetchAndCache(e,n)})})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],8:[function(e,t,n){"use strict";function r(e,t,n){return n=n||{},i.debug("Strategy: cache only ["+e.url+"]",n),i.openCache(n).then(function(t){return t.match(e).then(function(e){var t=n.cache||o.cache,r=Date.now();if(i.isResponseFresh(e,t.maxAgeSeconds,r))return e})})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],9:[function(e,t,n){"use strict";function r(e,t,n){return o.debug("Strategy: fastest ["+e.url+"]",n),new Promise(function(r,c){var s=!1,a=[],u=function(e){a.push(e.toString()),s?c(new Error('Both cache and network failed: "'+a.join('", "')+'"')):s=!0},f=function(e){e instanceof Response?r(e):u("No result returned")};o.fetchAndCache(e.clone(),n).then(f,u),i(e,t,n).then(f,u)})}var o=e("../helpers"),i=e("./cacheOnly");t.exports=r},{"../helpers":1,"./cacheOnly":8}],10:[function(e,t,n){t.exports={networkOnly:e("./networkOnly"),networkFirst:e("./networkFirst"),cacheOnly:e("./cacheOnly"),cacheFirst:e("./cacheFirst"),fastest:e("./fastest")}},{"./cacheFirst":7,"./cacheOnly":8,"./fastest":9,"./networkFirst":11,"./networkOnly":12}],11:[function(e,t,n){"use strict";function r(e,t,n){n=n||{};var r=n.successResponses||o.successResponses,c=n.networkTimeoutSeconds||o.networkTimeoutSeconds;return i.debug("Strategy: network first ["+e.url+"]",n),i.openCache(n).then(function(t){var s,a,u=[];if(c){var f=new Promise(function(r){s=setTimeout(function(){t.match(e).then(function(e){var t=n.cache||o.cache,c=Date.now(),s=t.maxAgeSeconds;i.isResponseFresh(e,s,c)&&r(e)})},1e3*c)});u.push(f)}var h=i.fetchAndCache(e,n).then(function(e){if(s&&clearTimeout(s),r.test(e.status))return e;throw i.debug("Response was an HTTP error: "+e.statusText,n),a=e,new Error("Bad response")}).catch(function(r){return i.debug("Network or response error, fallback to cache ["+e.url+"]",n),t.match(e).then(function(e){if(e)return e;if(a)return a;throw r})});return u.push(h),Promise.race(u)})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],12:[function(e,t,n){"use strict";function r(e,t,n){return o.debug("Strategy: network only ["+e.url+"]",n),fetch(e)}var o=e("../helpers");t.exports=r},{"../helpers":1}],13:[function(e,t,n){"use strict";var r=e("./options"),o=e("./router"),i=e("./helpers"),c=e("./strategies"),s=e("./listeners");i.debug("Service Worker Toolbox is loading"),self.addEventListener("install",s.installListener),self.addEventListener("activate",s.activateListener),self.addEventListener("fetch",s.fetchListener),t.exports={networkOnly:c.networkOnly,networkFirst:c.networkFirst,cacheOnly:c.cacheOnly,cacheFirst:c.cacheFirst,fastest:c.fastest,router:o,options:r,cache:i.cache,uncache:i.uncache,precache:i.precache}},{"./helpers":1,"./listeners":3,"./options":4,"./router":6,"./strategies":10}],14:[function(e,t,n){t.exports=Array.isArray||function(e){return"[object Array]"==Object.prototype.toString.call(e)}},{}],15:[function(e,t,n){function r(e,t){for(var n,r=[],o=0,i=0,c="",s=t&&t.delimiter||"/";null!=(n=x.exec(e));){var f=n[0],h=n[1],p=n.index;if(c+=e.slice(i,p),i=p+f.length,h)c+=h[1];else{var l=e[i],d=n[2],m=n[3],g=n[4],v=n[5],w=n[6],y=n[7];c&&(r.push(c),c="");var b=null!=d&&null!=l&&l!==d,E="+"===w||"*"===w,R="?"===w||"*"===w,k=n[2]||s,$=g||v;r.push({name:m||o++,prefix:d||"",delimiter:k,optional:R,repeat:E,partial:b,asterisk:!!y,pattern:$?u($):y?".*":"[^"+a(k)+"]+?"})}}return i<e.length&&(c+=e.substr(i)),c&&r.push(c),r}function o(e,t){return s(r(e,t))}function i(e){return encodeURI(e).replace(/[\/?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function c(e){return encodeURI(e).replace(/[?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function s(e){for(var t=new Array(e.length),n=0;n<e.length;n++)"object"==typeof e[n]&&(t[n]=new RegExp("^(?:"+e[n].pattern+")$"));return function(n,r){for(var o="",s=n||{},a=r||{},u=a.pretty?i:encodeURIComponent,f=0;f<e.length;f++){var h=e[f];if("string"!=typeof h){var p,l=s[h.name];if(null==l){if(h.optional){h.partial&&(o+=h.prefix);continue}throw new TypeError('Expected "'+h.name+'" to be defined')}if(v(l)){if(!h.repeat)throw new TypeError('Expected "'+h.name+'" to not repeat, but received `'+JSON.stringify(l)+"`");if(0===l.length){if(h.optional)continue;throw new TypeError('Expected "'+h.name+'" to not be empty')}for(var d=0;d<l.length;d++){if(p=u(l[d]),!t[f].test(p))throw new TypeError('Expected all "'+h.name+'" to match "'+h.pattern+'", but received `'+JSON.stringify(p)+"`");o+=(0===d?h.prefix:h.delimiter)+p}}else{if(p=h.asterisk?c(l):u(l),!t[f].test(p))throw new TypeError('Expected "'+h.name+'" to match "'+h.pattern+'", but received "'+p+'"');o+=h.prefix+p}}else o+=h}return o}}function a(e){return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function u(e){return e.replace(/([=!:$\/()])/g,"\\$1")}function f(e,t){return e.keys=t,e}function h(e){return e.sensitive?"":"i"}function p(e,t){var n=e.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)t.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return f(e,t)}function l(e,t,n){for(var r=[],o=0;o<e.length;o++)r.push(g(e[o],t,n).source);var i=new RegExp("(?:"+r.join("|")+")",h(n));return f(i,t)}function d(e,t,n){return m(r(e,n),t,n)}function m(e,t,n){v(t)||(n=t||n,t=[]),n=n||{};for(var r=n.strict,o=n.end!==!1,i="",c=0;c<e.length;c++){var s=e[c];if("string"==typeof s)i+=a(s);else{var u=a(s.prefix),p="(?:"+s.pattern+")";t.push(s),s.repeat&&(p+="(?:"+u+p+")*"),p=s.optional?s.partial?u+"("+p+")?":"(?:"+u+"("+p+"))?":u+"("+p+")",i+=p}}var l=a(n.delimiter||"/"),d=i.slice(-l.length)===l;return r||(i=(d?i.slice(0,-l.length):i)+"(?:"+l+"(?=$))?"),i+=o?"$":r&&d?"":"(?="+l+"|$)",f(new RegExp("^"+i,h(n)),t)}function g(e,t,n){return v(t)||(n=t||n,t=[]),n=n||{},e instanceof RegExp?p(e,t):v(e)?l(e,t,n):d(e,t,n)}var v=e("isarray");t.exports=g,t.exports.parse=r,t.exports.compile=o,t.exports.tokensToFunction=s,t.exports.tokensToRegExp=m;var x=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g")},{isarray:14}],16:[function(e,t,n){!function(){var e=Cache.prototype.addAll,t=navigator.userAgent.match(/(Firefox|Chrome)\/(\d+\.)/);if(t)var n=t[1],r=parseInt(t[2]);e&&(!t||"Firefox"===n&&r>=46||"Chrome"===n&&r>=50)||(Cache.prototype.addAll=function(e){function t(e){this.name="NetworkError",this.code=19,this.message=e}var n=this;return t.prototype=Object.create(Error.prototype),Promise.resolve().then(function(){if(arguments.length<1)throw new TypeError;return e=e.map(function(e){return e instanceof Request?e:String(e)}),Promise.all(e.map(function(e){"string"==typeof e&&(e=new Request(e));var n=new URL(e.url).protocol;if("http:"!==n&&"https:"!==n)throw new t("Invalid scheme");return fetch(e.clone())}))}).then(function(r){if(r.some(function(e){return!e.ok}))throw new t("Incorrect response status");return Promise.all(r.map(function(t,r){return n.put(e[r],t)}))}).then(function(){})},Cache.prototype.add=function(e){return this.addAll([e])})}()},{}]},{},[13])(13)});


// *** End of auto-included sw-toolbox code. ***



// Runtime cache configuration, using the sw-toolbox library.

toolbox.router.get("/*", toolbox.cacheFirst, {"origin":"vincef0ng.cn"});
toolbox.router.get("/*", toolbox.cacheFirst, {"origin":"cdn.jsdelivr.net"});




