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

var precacheConfig = [["/404.html","a7c88056beca6ef3d62b262636010d4a"],["/about/index copy.html","fbe5066900e0b45661348a0383cc8e39"],["/about/index.html","2942b2be95bb6e28cf8829647ed38714"],["/archives/2019/03/index.html","bf8e48355e5bce520abc082e96b99eef"],["/archives/2019/04/index.html","d4bf8af1bc464ec62edaf42009583fd9"],["/archives/2019/07/index.html","6f116d66873a098cf7a57116860f1e34"],["/archives/2019/08/index.html","f7a07a87e066a3080e64eb068076054f"],["/archives/2019/09/index.html","72a9f08246b4f714d328d646523e5de4"],["/archives/2019/10/index.html","ca07292708b6c248a75d096bde033ad4"],["/archives/2019/12/index.html","1c317113fd46cd9815d5d435c129fad5"],["/archives/2019/index.html","815414b7d83abab836bfe030e790fd84"],["/archives/2019/page/2/index.html","2f653b238dc56b26bb905e47a5680e3e"],["/archives/2020/01/index.html","621a39db8cd45b79feba83f7ba398424"],["/archives/2020/02/index.html","eb57396ebdab44b69a2589845166f684"],["/archives/2020/05/index.html","234cfb1506221651226b43fcf5cd3c24"],["/archives/2020/09/index.html","e652a48195e2a07dfffaa926830fa4c0"],["/archives/2020/index.html","9fa93e4a8e9562fd50fe53a2fa26bf16"],["/archives/2021/06/index.html","c1b029ed9e15c310c2232aa4b9c0ca8e"],["/archives/2021/index.html","3f47f8a7e7a62945e1387d40dd62d0ab"],["/archives/2022/01/index.html","f0af1d4bc2d6125593b443094880da8a"],["/archives/2022/index.html","c396773df58b13d63958d954a1795328"],["/archives/index.html","53e42133a2fe3e182e236c32c7f8554c"],["/archives/page/2/index.html","ed07bca61c0a9d5b2eda36a9f8244790"],["/archives/page/3/index.html","fa84ae75d204f90d7f16f36059aec377"],["/awesome-stuffs/index.html","d9abf902d6078a0cc80df3dfc2363e5a"],["/categories/index.html","6c8fe5486c1fa6291a54c5062dca2782"],["/categories/前端/CSS/index.html","363860157641134ae807c23293cffcf2"],["/categories/前端/HTTP/index.html","c666390d5c78c4aab5657eca5eedf1bb"],["/categories/前端/JavaScript/index.html","a863b61a380be5c28f494c63ab77856c"],["/categories/前端/TypeScript/index.html","fbba3173395731138993df2a80237d6f"],["/categories/前端/Vue/index.html","da40a44dfd48cefcd83ba4c4519a232a"],["/categories/前端/index.html","cb54f9979b669b89c0a388b52af9d491"],["/categories/前端/page/2/index.html","d3c39f4cfef3f0215a1a0b1d32e9a1a9"],["/categories/前端/技巧/index.html","1fe67fb4238ee4d56c63eb2e2154aa15"],["/categories/前端/插件/index.html","415d306ff3dce478263fb96f1643b989"],["/categories/工具/Git/index.html","c3c9e9dbcced1cb4d287065cbf8357da"],["/categories/工具/RegExp/index.html","84f7ce04ed80e4a7176d70c5bf045499"],["/categories/工具/Terminal/index.html","0ce7c87d25d4d08c25ce4e451a3853be"],["/categories/工具/index.html","b4cad03db66a00d0e2391a6e0f7ad15c"],["/categories/工具/数据库/index.html","1e2a4862036f36c3232e9d686a3eb1da"],["/comments/index.html","e257203049d4a26952e39e159c8effbe"],["/css/index.css","4235da557b60f442095f594d7c2ae274"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/disclaimer/index.html","1bb1ccc1cf387e95fd516ca22095aefd"],["/food/header.gif","f9b3b1294908a65bc784590fafe806f5"],["/food/index.css","876a732bdb7ba63b242b060c5100f7ab"],["/food/index.html","7591caba1060f04d1b09f9b2b4274cbb"],["/food/index.js","0bcc24f9e376dbf3a2a4a9ff059af34c"],["/img/404.jpg","23cf82ba04680b72d5616d74aa3f5550"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/avatar.png","78c622498ebd6cc668a712e1e9ca613e"],["/img/comment_bg.png","04208f25e34b8f29f072efbb2e212c86"],["/img/ele1.png","d5168c1d55ef1a4009702e03aa922ac7"],["/img/ele2.png","7e50620b502399402151bfb6bc6d24ac"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","d0289dc0a46fc5b15b3363ffa78cf6c7"],["/img/pwa/114x114.png","294444d37d366fae0c5ea39dcdfdb80c"],["/img/pwa/128x128.png","ed6f7e30c2902eb113b99b81734a6e08"],["/img/pwa/144x144.png","d0a21802cd8575c469a8d8b9db2c402d"],["/img/pwa/152x152.png","67aa19b63e016a5c1009891a74417125"],["/img/pwa/192x192.png","bcf03ca24c531b541e3ba6d88c355b43"],["/img/pwa/384x384.png","317c679edc331ef3e75349dd1cf59298"],["/img/pwa/512x512.png","43037fd7bb5d9a973363ed38f194622e"],["/img/pwa/57x57.png","4678bbfa8eb4f67028c2e3a6a87eb320"],["/img/pwa/72x72.png","ba5a3f4f2efe3bea3133dee94f432ac4"],["/img/pwa/96x96.png","d70556ea772f2feb5e5fe64f9147ee97"],["/img/pwa/apple-touch-icon.png","4c8fb45fab623aa877c8929b070220b5"],["/img/pwa/safari-pinned-tab.svg","9ec91e482c40373b93f2c860a02bdac6"],["/index.html","bc190eaf1c3603d30ad965b0a4233b88"],["/js/activate-power-mode.js","2345780cb71f6e17a20d9ca2283accda"],["/js/baidupush.js","7d26211fa55bebac2e0c0abeee05a267"],["/js/main.js","4da14411c4f8361fd2b3a03a03af2f86"],["/js/nightshift.js","35c53e97df1443b175319ab98dcd26e6"],["/js/runtimeshow.js","6bc5dc7652b39605152475b840e88899"],["/js/search/algolia.js","c2c8d117a3cba3e5c9f47ad65d1d00f2"],["/js/search/local-search.js","8cc4c0c6e32a9428a367eca83ffae3ab"],["/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["/js/third-party/canvas-nest.js","876c47c6a2edc066781c264adf33aec2"],["/js/third-party/canvas-ribbon.js","6ca731e8db63562c0dd6461eabbd65d7"],["/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["/js/third-party/piao.js","d7a4ef27420717adccfca1c1287f8c44"],["/js/tw_cn.js","fbc127c110435085bde10997850bbc55"],["/js/utils.js","816e7d34d69996e6a4f0b92a81c16cca"],["/link/index.html","746535efc4d97304f8e6aae1c7f51260"],["/mahjong/css/Chaoshan.9f6766af.css","d9865c57771c23e72acf8673d1f2d31f"],["/mahjong/css/Index.90c4c136.css","8e99ae1dc0e4ca223351aeb2bda9ad41"],["/mahjong/css/app.4b8d665e.css","e50407137373a43fde881ec7b1d9ede9"],["/mahjong/img/collapse-title2.9a3310e4.png","9a3310e44cf5f7022a39c8649b1eb6ce"],["/mahjong/img/collapse-title3.93ad23d9.png","93ad23d97ff6928d1b10857af9e16fc8"],["/mahjong/img/dasangyuan.847ebf01.png","847ebf01ce74d5f698cb8b557fa3c224"],["/mahjong/img/dasixi.2e7430c9.png","2e7430c9516bacef948fde476f4917d2"],["/mahjong/img/haohuaqixiaodui.fa45fb0e.png","fa45fb0ec0eb0b26be923ab833ba28ed"],["/mahjong/img/hunpeng.ef249618.png","ef24961890404f8c7df2caa5f5b1f9b1"],["/mahjong/img/hunyaojiu.02c853c3.png","02c853c3b39b5ddb665ef015596d45e8"],["/mahjong/img/hunyise.cd751b47.png","cd751b47eba8886644d72b1d15cf3e78"],["/mahjong/img/jihu.18f365c9.png","18f365c9c9e928bf677078db7b889343"],["/mahjong/img/logo.15027e73.png","15027e73e0139376afc79f2486be9798"],["/mahjong/img/pengpenghu.24f652dd.png","24f652dd4a13c51d92ad1da705e86157"],["/mahjong/img/pinghu.6e6bc245.png","6e6bc245322b6ff1777a3c7ce8823878"],["/mahjong/img/qingpeng.0b5fad96.png","0b5fad966e9fcb8bbb10e9ae7c43a355"],["/mahjong/img/qingyaojiu.567a8f86.png","567a8f867e81a0402453b33e765b8131"],["/mahjong/img/qingyise.64145e8b.png","64145e8b2c1e726a391a5865d613c19c"],["/mahjong/img/qixiaodui.32d19d63.png","32d19d63c7d63a59236f4ac9cb32c946"],["/mahjong/img/sanghaohuaqixiaodui.d3893d19.png","d3893d192d0d5d3408da9e23431a0aa2"],["/mahjong/img/shibaluohan.648a7577.png","648a757733009d5fa0db45b0d4f8e304"],["/mahjong/img/shisangyao.b5cb0bd2.png","b5cb0bd270fa4d40b5a2e3ffd88bc46e"],["/mahjong/img/shuanghaohuaqixiaodui.6974e55d.png","6974e55dab5cade09785ad33fd7015b7"],["/mahjong/img/win.f9fc90f1.png","f9fc90f1b57f1001956cb230742e4a0e"],["/mahjong/img/xiaosangyuan.c8df7072.png","c8df7072ceb1ecf8c26d44b40b55cd1a"],["/mahjong/img/xiaosixi.7efafb36.png","7efafb36da5a4b9621eba6f0e46a059a"],["/mahjong/img/ziyise.0952808d.png","0952808dcc87229786c422ae77788877"],["/mahjong/index.html","8a7441f44cba1d57ab41146b107cdd06"],["/mahjong/js/Chaoshan.745d3f58.js","88c9183bab147f31d46e1746c440c33d"],["/mahjong/js/Index.74601ab6.js","d3c8513faf0488e65554ffef4059bd87"],["/mahjong/js/app.94639d7a.js","f29f6305b06d46b3e668f19755646fec"],["/mahjong/js/chunk-vendors.88a4bc11.js","40a5bf5a1778075117322d05cd3a68c7"],["/page/2/index.html","198b3d2dafad60c76d6fadeb81a3c3c6"],["/page/3/index.html","bca40a6512a7e58b4d595554f24a83a6"],["/post/ajax-fetch-axios/index.html","28fb61100ce80a59a7c48e4414d3ec6d"],["/post/axios/index.html","deabd99373f860360c029d37e1c174a7"],["/post/before-after-slider/index.html","aa831db800ec9dbe1f26651a25fa1c11"],["/post/css-page-layout/index.html","7845acc9fe0760cc1f7b1de20e2b41bb"],["/post/designing-websites-for-iphonex/index.html","1a3c337f465f29f6763f65b66917dc24"],["/post/encapsulate-axios-with-ts/index.html","d21339ee24095a1408311f486711c954"],["/post/es6-env/index.html","060670618a987be8fafc578940c76ffa"],["/post/git-github/index.html","4d6adcc9676d3c73817d89794444e72f"],["/post/http-finance/index.html","9893ffbf4e19a4d153314fb90ae71e31"],["/post/install-mongodb-on-os-x/index.html","396d2d61d42647545d911a0eca35f9c5"],["/post/iterm2-for-mac-tutorial/index.html","578634475b92e5f8d3fbc35f0c836d4e"],["/post/javascript-dom/index.html","46208561e620b18a20df353bcb98727c"],["/post/javascript-sorting/index.html","889fe8b8a91de923b4066abd66aad7fc"],["/post/js-regexp-guide/index.html","8e418697adf82ab4fa23ba1f6123823b"],["/post/less-tutorial/index.html","60ed3ec787e959b493520251a14f4fca"],["/post/vue-dynamic-css-pseudo-element/index.html","a66c0355bb0bf64261e8925f4d4a0438"],["/post/vue-project-optimization/index.html","c0e5f2bb76c036d257995c379953c0d9"],["/post/vue-router/index.html","7a3c550824013e04e4e1b485fe4edc7d"],["/post/vue-scoped-deep-css/index.html","595426780888536b03e5c432a8a8db2d"],["/post/vuex/index.html","42180f9164633c9a44a6a7fd6076d83b"],["/post/web-notification/index.html","606ca0148a9bf1e109677238e0d30ae8"],["/privacy/index.html","e991fbc00b726135b6bece6e48279154"],["/red-envelope/index.html","1768fa71e296a634fc5fa594f958f722"],["/tags/Ajax/index.html","b338da5041073fd1c9b381a1118bb188"],["/tags/Axios/index.html","03db10cb9e28e477f7644d2c0f112e7c"],["/tags/Babel/index.html","460e185d8de0d4163e371f70f3c8837e"],["/tags/Before-After/index.html","5fa681843225028b7134d7bb527b094b"],["/tags/CDN/index.html","f6df16580bb3ba787bd890b748b6e327"],["/tags/CSS/index.html","32a601157b2efcedc5a2fdd061daea3b"],["/tags/CSS预处理器/index.html","e2a71c3f2d3d5735e96b4a014e7788db"],["/tags/DOM/index.html","bd39a914619e210255315fa89840f6e5"],["/tags/ES6/index.html","766f43d65a40f48b2bf3330d328b7cc0"],["/tags/Event/index.html","ca2a3f1cb5f9f74d7bd4397ddbc3167f"],["/tags/Fetch/index.html","815fc3384c8cf86aee4e17bbec68d373"],["/tags/Git/index.html","869f7892079bb00e29fbc577d18ce7fb"],["/tags/GitHub/index.html","3d451ec5e69ca80014b00ed54e9ab0be"],["/tags/HTML/index.html","dbe5974bd3581a55fdd396218ad25ebf"],["/tags/HTTP/index.html","47b7d0cd833fe46d5a34de1f3ffa1420"],["/tags/Homebrew/index.html","749c1e97140feb63970f382e603d7460"],["/tags/JavaScript/index.html","3e0e93f926561685624ab268a1248562"],["/tags/Less/index.html","b83ff4ef68cae48b6d583078d245297f"],["/tags/MacOS/index.html","952d3515b6be2620d0b058b9f6db7432"],["/tags/MongoDB/index.html","c997fb5c418c5af0799ec58cf2683d9c"],["/tags/Npm/index.html","1558256f5391e66a3f7ec62db9dc4889"],["/tags/OhMyZsh/index.html","94672d369a40f2e4927be67807c7c652"],["/tags/RegExp/index.html","3513f44a77178be64ad1acbb9312c2d5"],["/tags/Terminal/index.html","121c6e009efd85e53d0eee3079f5b71c"],["/tags/TypeScript/index.html","cd96e800d797aaceccc4e4b32a08036d"],["/tags/Vue-cli3/index.html","cf63e250cfae88a9f3dbbd6740ed58d9"],["/tags/Vue-router/index.html","cc40744a11ae35d8aa1e75e068f651c6"],["/tags/Vue/index.html","2582c9872db65f4d5a67edeecc3bd349"],["/tags/Vue3/index.html","46960cce15f1efeb26f378b0fa8b9891"],["/tags/Vuex/index.html","e4f06c4ee4230acec39590bb5af73965"],["/tags/Webpack/index.html","74472ca91f1cc979774d7177e6b3eb67"],["/tags/iPhone/index.html","6e83c0766bb3a3a197f172808c5d2a89"],["/tags/iTerm2/index.html","998c5225cf2a21457e1ecfc4cec7af96"],["/tags/index.html","293de9e9415bfe6db9ee531d6b130119"],["/tags/前端/index.html","7c498a0978e54ea7299d8d0dd515d8fb"],["/tags/前端/page/2/index.html","8ec8d59503e2642e6c4c55028033f1a0"],["/tags/封装/index.html","22a09f4332eb9937d2dd286b9d6d0aec"],["/tags/工具/index.html","a83e2e0f4c9b05ff5360c54335e90a7b"],["/tags/弹窗通知/index.html","5b6fdbdcc44f344695c0aa6511783d8a"],["/tags/排序/index.html","30567a7e2b65e31c10cd321d3ad45981"],["/tags/插件/index.html","708e4121436de8acd664ccab0d3723c6"],["/tags/数据库/index.html","048e979d9c688744ad5c7ff77ced9670"],["/tags/标签闪烁/index.html","1e6c9c97d3acaa5885a288ac1d5c7878"],["/tags/样式/index.html","ff58a9ad7b4ded2b54d0cb50b286de8a"],["/tags/样式穿透/index.html","cef770a1b87c1ebe170b47a258db8803"],["/tags/浏览器通知/index.html","a6741571401d1d2ba90809c112b2bf56"],["/tags/算法/index.html","9aaefc0a9c7fc5ccf5fb3df66ad9a66b"],["/tags/路由懒加载/index.html","901ad63615eebe0335647264403c1d9d"],["/tags/适配/index.html","7752ce7581fea4047dcd5305809e6205"],["/tags/配置分离/index.html","8fdc1f54eca3e068b99ad732ff6385b5"],["/tags/铃声/index.html","08a45113c5b23284ef623439883bf438"]];
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




