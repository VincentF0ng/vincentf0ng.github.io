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

var precacheConfig = [["/404.html","9afe1ecc9e8d65e1948f765fcbd6c92c"],["/about/index copy.html","fd64c65790c4c9c7ddaac9f746d37051"],["/about/index.html","cdf36f1945318a4d68a68973b6e5ceee"],["/archives/2019/03/index.html","9d0cf2d3c88f688fa67d7a48867bd1a1"],["/archives/2019/04/index.html","6f13708eaf76bfd88731800a345e7994"],["/archives/2019/07/index.html","b20713b970a0398148f83a0fe3c5819a"],["/archives/2019/08/index.html","0245dc9b339ccef337e95076ff47384f"],["/archives/2019/09/index.html","1916b485b481295f4209c3c7159d4e16"],["/archives/2019/10/index.html","52d4ece6db638cdc2255d7f80ccf9d88"],["/archives/2019/12/index.html","55f3b5d39af9fb8861cc7bc5e310d6e9"],["/archives/2019/index.html","a64695b0ee8d3135e27ca307523f6956"],["/archives/2019/page/2/index.html","146ccb55f8920b5491d37cb9bf1052d4"],["/archives/2020/01/index.html","5639ba7f3380754884ee7258162dc5fb"],["/archives/2020/02/index.html","40ec49de714d4ee281130d598fac6fbc"],["/archives/2020/05/index.html","6e0ca592b98395c79c3ed1f8b16b0888"],["/archives/2020/09/index.html","c56bc8a2fd6b5d894e7b7f9046cb90d6"],["/archives/2020/index.html","897a5206f21fd8b34924b828bd1df133"],["/archives/2021/06/index.html","c710d990566841bdf99ff397d68a3b88"],["/archives/2021/index.html","56b7b85d5978090e5c97061c9ed5e9f9"],["/archives/2022/01/index.html","e44d19e52c3dd43811fc8331e74d2e1b"],["/archives/2022/03/index.html","bb7f1211530f675ffb45391fd41153d6"],["/archives/2022/06/index.html","ca979a70c17c3b7875f43c361acb0a38"],["/archives/2022/08/index.html","5d46794a2b35499ccf5edb41f5a5c516"],["/archives/2022/10/index.html","ce7a6b2ef3db94f62dc43a04f73b8e07"],["/archives/2022/index.html","a9a553ba658f68c1985986bedf01cec1"],["/archives/2023/01/index.html","043839b19be8fe86a28670582434e6c4"],["/archives/2023/index.html","543ae3fede3826146f81b6f68bd6c715"],["/archives/index.html","cdadcf74d0dbdcde008178920b143eda"],["/archives/page/2/index.html","06c0da09948b29f754b8db59e2ae1358"],["/archives/page/3/index.html","2476f3f36d54dcff522964adc0e39e81"],["/awesome-stuffs/index.html","ba7d9e9cba87126d183d269c1fbbcb3c"],["/categories/Node/index.html","54ec8a4d6b416fc9fd0251d2090a8bb0"],["/categories/Node/插件/index.html","61e105e0680f5a5ca8a39eb11ee1aa54"],["/categories/index.html","b9248dedee259983233521b50d0d24db"],["/categories/前端/CSS/index.html","a1f3f864e17ca2bef3ac73a578c159a9"],["/categories/前端/H5/index.html","dbe34d4b2ca467b5f4915e89e2370b74"],["/categories/前端/HTTP/index.html","6359e0393fb9d17f9f9fb92cb1223d09"],["/categories/前端/JavaScript/index.html","c7c6a9017143b80ea00003b441caca0a"],["/categories/前端/TypeScript/index.html","372b651c019bbaa11a1938bd9d93f256"],["/categories/前端/UniApp/index.html","f4fadb7f0c87e7859ef55f4d7e7db239"],["/categories/前端/UniCloud/index.html","9eff27238b9b8f0d993b67c5895ecb8a"],["/categories/前端/Vue/index.html","863ca376c4e2d72450eb209c779ad6c0"],["/categories/前端/index.html","38a7368757bc11283416fc9ab783c8eb"],["/categories/前端/page/2/index.html","a9072333561c3d6101bcfccf5fbc029f"],["/categories/前端/page/3/index.html","c53bdbaafd607f758e26ab7ea1661c22"],["/categories/前端/小程序/index.html","eae92f386b1e11189a7de5cd50ded923"],["/categories/前端/技巧/index.html","78fbaa1c7b4b43fce58a683e04daac70"],["/categories/前端/插件/index.html","c8f2e076a768b48c883c32c294dd6bcb"],["/categories/工具/Git/index.html","12a1ffba5b0ccfa8fee39e3bce62290f"],["/categories/工具/RegExp/index.html","d77ed8c178604c94063f45daa58f69a5"],["/categories/工具/Terminal/index.html","276a500e83a87a6dfbac782dab8d27d6"],["/categories/工具/index.html","b4c057bb0a320f4a6b359ab5c560604f"],["/categories/工具/数据库/index.html","69364e7620d3bae518c22cb1369ea44b"],["/comments/index.html","2ec5f70534b8cfccbec9019526209e86"],["/css/index.css","d90e2bfaf04fdf2c48b5605fec80f25d"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/disclaimer/index.html","49f7cc4f27163c17e35f1a4e18f5afd6"],["/food/header.gif","f9b3b1294908a65bc784590fafe806f5"],["/food/index.css","876a732bdb7ba63b242b060c5100f7ab"],["/food/index.html","7591caba1060f04d1b09f9b2b4274cbb"],["/food/index.js","0bcc24f9e376dbf3a2a4a9ff059af34c"],["/img/404.jpg","23cf82ba04680b72d5616d74aa3f5550"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/avatar.png","78c622498ebd6cc668a712e1e9ca613e"],["/img/bg.jpg","dffb70d9b9c33f8fd578ff28749fc395"],["/img/comment_bg.png","04208f25e34b8f29f072efbb2e212c86"],["/img/ele1.png","d5168c1d55ef1a4009702e03aa922ac7"],["/img/ele2.png","7e50620b502399402151bfb6bc6d24ac"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","d0289dc0a46fc5b15b3363ffa78cf6c7"],["/img/pwa/114x114.png","294444d37d366fae0c5ea39dcdfdb80c"],["/img/pwa/128x128.png","ed6f7e30c2902eb113b99b81734a6e08"],["/img/pwa/144x144.png","d0a21802cd8575c469a8d8b9db2c402d"],["/img/pwa/152x152.png","67aa19b63e016a5c1009891a74417125"],["/img/pwa/192x192.png","bcf03ca24c531b541e3ba6d88c355b43"],["/img/pwa/384x384.png","317c679edc331ef3e75349dd1cf59298"],["/img/pwa/512x512.png","43037fd7bb5d9a973363ed38f194622e"],["/img/pwa/57x57.png","4678bbfa8eb4f67028c2e3a6a87eb320"],["/img/pwa/72x72.png","ba5a3f4f2efe3bea3133dee94f432ac4"],["/img/pwa/96x96.png","d70556ea772f2feb5e5fe64f9147ee97"],["/img/pwa/apple-touch-icon.png","4c8fb45fab623aa877c8929b070220b5"],["/img/pwa/safari-pinned-tab.svg","9ec91e482c40373b93f2c860a02bdac6"],["/index.html","132f4d91d26b33508232fdf40d9820e5"],["/js/activate-power-mode.js","2345780cb71f6e17a20d9ca2283accda"],["/js/baidupush.js","7d26211fa55bebac2e0c0abeee05a267"],["/js/main.js","4da14411c4f8361fd2b3a03a03af2f86"],["/js/nightshift.js","35c53e97df1443b175319ab98dcd26e6"],["/js/runtimeshow.js","6bc5dc7652b39605152475b840e88899"],["/js/search/algolia.js","c2c8d117a3cba3e5c9f47ad65d1d00f2"],["/js/search/local-search.js","8cc4c0c6e32a9428a367eca83ffae3ab"],["/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["/js/third-party/canvas-nest.js","876c47c6a2edc066781c264adf33aec2"],["/js/third-party/canvas-ribbon.js","6ca731e8db63562c0dd6461eabbd65d7"],["/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["/js/third-party/piao.js","d7a4ef27420717adccfca1c1287f8c44"],["/js/tw_cn.js","fbc127c110435085bde10997850bbc55"],["/js/utils.js","816e7d34d69996e6a4f0b92a81c16cca"],["/link/index.html","f97b4a057c066607ffc0ef5ae216114b"],["/mahjong/css/Chaoshan.9f6766af.css","d9865c57771c23e72acf8673d1f2d31f"],["/mahjong/css/Index.90c4c136.css","8e99ae1dc0e4ca223351aeb2bda9ad41"],["/mahjong/css/app.4b8d665e.css","e50407137373a43fde881ec7b1d9ede9"],["/mahjong/img/collapse-title2.9a3310e4.png","9a3310e44cf5f7022a39c8649b1eb6ce"],["/mahjong/img/collapse-title3.93ad23d9.png","93ad23d97ff6928d1b10857af9e16fc8"],["/mahjong/img/dasangyuan.847ebf01.png","847ebf01ce74d5f698cb8b557fa3c224"],["/mahjong/img/dasixi.2e7430c9.png","2e7430c9516bacef948fde476f4917d2"],["/mahjong/img/haohuaqixiaodui.fa45fb0e.png","fa45fb0ec0eb0b26be923ab833ba28ed"],["/mahjong/img/hunpeng.ef249618.png","ef24961890404f8c7df2caa5f5b1f9b1"],["/mahjong/img/hunyaojiu.02c853c3.png","02c853c3b39b5ddb665ef015596d45e8"],["/mahjong/img/hunyise.cd751b47.png","cd751b47eba8886644d72b1d15cf3e78"],["/mahjong/img/jihu.18f365c9.png","18f365c9c9e928bf677078db7b889343"],["/mahjong/img/logo.15027e73.png","15027e73e0139376afc79f2486be9798"],["/mahjong/img/pengpenghu.24f652dd.png","24f652dd4a13c51d92ad1da705e86157"],["/mahjong/img/pinghu.6e6bc245.png","6e6bc245322b6ff1777a3c7ce8823878"],["/mahjong/img/qingpeng.0b5fad96.png","0b5fad966e9fcb8bbb10e9ae7c43a355"],["/mahjong/img/qingyaojiu.567a8f86.png","567a8f867e81a0402453b33e765b8131"],["/mahjong/img/qingyise.64145e8b.png","64145e8b2c1e726a391a5865d613c19c"],["/mahjong/img/qixiaodui.32d19d63.png","32d19d63c7d63a59236f4ac9cb32c946"],["/mahjong/img/sanghaohuaqixiaodui.d3893d19.png","d3893d192d0d5d3408da9e23431a0aa2"],["/mahjong/img/shibaluohan.648a7577.png","648a757733009d5fa0db45b0d4f8e304"],["/mahjong/img/shisangyao.b5cb0bd2.png","b5cb0bd270fa4d40b5a2e3ffd88bc46e"],["/mahjong/img/shuanghaohuaqixiaodui.6974e55d.png","6974e55dab5cade09785ad33fd7015b7"],["/mahjong/img/win.f9fc90f1.png","f9fc90f1b57f1001956cb230742e4a0e"],["/mahjong/img/xiaosangyuan.c8df7072.png","c8df7072ceb1ecf8c26d44b40b55cd1a"],["/mahjong/img/xiaosixi.7efafb36.png","7efafb36da5a4b9621eba6f0e46a059a"],["/mahjong/img/ziyise.0952808d.png","0952808dcc87229786c422ae77788877"],["/mahjong/index.html","8a7441f44cba1d57ab41146b107cdd06"],["/mahjong/js/Chaoshan.745d3f58.js","88c9183bab147f31d46e1746c440c33d"],["/mahjong/js/Index.74601ab6.js","d3c8513faf0488e65554ffef4059bd87"],["/mahjong/js/app.94639d7a.js","f29f6305b06d46b3e668f19755646fec"],["/mahjong/js/chunk-vendors.88a4bc11.js","40a5bf5a1778075117322d05cd3a68c7"],["/page/2/index.html","427ffbd51546a25dc4442e404748afa9"],["/page/3/index.html","1fe574b22053d364f2c4b38aafc4c3e7"],["/post/ajax-fetch-axios/index.html","e41eeecf91da459fe93d207e9203fc65"],["/post/axios/index.html","70a633b2e4120858993981e2f96f5373"],["/post/before-after-slider/index.html","b83f8d886e322ab643e8fa131a635f11"],["/post/css-page-layout/index.html","7eefd0915e4b6f131949c469503fce20"],["/post/designing-websites-for-iphonex/index.html","8cde171000c124a0085e6729fb60ee71"],["/post/encapsulate-axios-with-ts/index.html","64981aa302c8fb37512a6d0a19f5c331"],["/post/es6-env/index.html","e41d7c81f30a8c52259217decba5721d"],["/post/git-commit-message-standard-and-commitizen/index.html","75c2a4b5f1f86c2aea789566ad8bad88"],["/post/git-github/index.html","e86883d91597be5c8490cf5f9a51334a"],["/post/http-finance/index.html","8bf0d9d93e4f5bdf6134810f45bd19e3"],["/post/install-mongodb-on-os-x/index.html","7d98c47717e1b1bf52e21e2012e3170b"],["/post/iterm2-for-mac-tutorial/index.html","752b6d300cc085be59f2f56ddcb9a8d7"],["/post/javascript-dom/index.html","3c120e544f58558344cad6dbc000d2f0"],["/post/javascript-sorting/index.html","9a83554fa18259028776ae583cb63e52"],["/post/js-regexp-guide/index.html","0822de39f5f76d7f6ad911910f66c797"],["/post/less-tutorial/index.html","c95d69767f60d11614bc571c1debb576"],["/post/node-email-notification-nodemailer/index.html","8adf31c66f80ea42852a66906de79c50"],["/post/pinia-usage-and-diff-from-vuex/index.html","c57dd7028720f7098edf83cbabcf3636"],["/post/uniapp-h5-page-head/index.html","306e5ceaf3c8f53b56ea25063b450869"],["/post/uniapp-yoqu/index.html","a759536fd65d8a9dc18580afb89c2157"],["/post/vue-dynamic-css-pseudo-element/index.html","55e74509b200616684b471c4a6c634e7"],["/post/vue-project-optimization/index.html","6f48be89b5021b7b0f681dc2dace2636"],["/post/vue-router/index.html","3d6ba9a501edafee83c861cf1fae6dc5"],["/post/vue-scoped-deep-css/index.html","731b2e6dd600ddcece3b825d6299df0d"],["/post/vuex/index.html","97d4b6e7a9d89332c40d0dd74b6d11c7"],["/post/web-notification/index.html","dc529011a7825bc50de984a0f0bf13be"],["/privacy/index.html","add68dd6d526a35a7d90a96fd766a7dc"],["/red-envelope/index.html","5da27fca818bc410f5f9bd7596767332"],["/tags/Ajax/index.html","715c0224b5ac6ce598e2f19a4232d363"],["/tags/Axios/index.html","480f38441b4778c0fbf8e1edfbe35d16"],["/tags/Babel/index.html","747f9d330583e9b4da2a71c3085caa95"],["/tags/Before-After/index.html","3a59d7c5944d9e887dcc0e1af23939bb"],["/tags/CDN/index.html","230c9deeb9f3b908febaafd99142e233"],["/tags/CSS/index.html","ccd7de7e0d8e451901dd60ee903766e8"],["/tags/CSS预处理器/index.html","cc114015ce4451939426b20527facf8c"],["/tags/Commit/index.html","b25ebc8606eb0c80aa8a2ae77541d7b1"],["/tags/DOM/index.html","7bee5e2ad062b4f6e7a27218ad942f51"],["/tags/ES6/index.html","7d71cf9747e35921769b162d271cf31b"],["/tags/Event/index.html","1ffbaf219250716d57bab17d167c85df"],["/tags/Fetch/index.html","4db9707a3389e2e94242efed100140ac"],["/tags/Git/index.html","7c1060f249117f5ee3c2feeab5233fed"],["/tags/GitHub/index.html","815d2819486ca2c631b30df48e2dc0fb"],["/tags/H5/index.html","8952573d036370a3e1124ff4bf371096"],["/tags/HTML/index.html","72d54d9b85e6e909c5d47c698bafdfed"],["/tags/HTTP/index.html","1a1cd6476896c30a0ff19b42e978380f"],["/tags/Homebrew/index.html","a8a169f32afe68af69e2c3d47088b8b6"],["/tags/JavaScript/index.html","47f2b326be1dedafb637b25b74b7a24c"],["/tags/Less/index.html","651d5e1d79d72f4f4bbfbae5507876e0"],["/tags/MacOS/index.html","223b1ab5417e4641fb825bd967732d45"],["/tags/MongoDB/index.html","ea97a9c35ec19fbf3d5bc5015960f312"],["/tags/Node/index.html","3aae591233b71a336e396e4f14db4c7f"],["/tags/Npm/index.html","1263351ea86729b8476602510b82eb24"],["/tags/OhMyZsh/index.html","adbabcb087e1194c17ba672888b19c6e"],["/tags/Pinia/index.html","54c74660529ba65a4c83c73fd71c3566"],["/tags/RegExp/index.html","9c08df51dc047c75a2d2719fc25361e0"],["/tags/Terminal/index.html","8bd71f54f4e908e0d6fec615a327777b"],["/tags/TypeScript/index.html","062df8a42144940935043e184317f0ce"],["/tags/UniApp/index.html","79a9d0fa5cca2f3ab6750f30dc808503"],["/tags/UniCloud/index.html","fb06208a07a0f7e6862c3300fdcdff8f"],["/tags/Vue-cli3/index.html","d6e59a27690e2e329a932f1834c942d5"],["/tags/Vue-router/index.html","4a53471ee77f6ac2582275012112f49a"],["/tags/Vue/index.html","0a6de753ed471814ad5aa130ed172ae5"],["/tags/Vue3/index.html","707f3f6cac1ebabeea76c885718d2ce0"],["/tags/Vuex/index.html","39e71a6dda2bd91ebd3df5b4aec2fd7e"],["/tags/Webpack/index.html","3961b3b5de23e0f5d3df277da2c4d9a4"],["/tags/commitizen/index.html","f3cae932f7067156a7062919ea730069"],["/tags/iPhone/index.html","071ea3116608b6e69834f39cb3f51f9f"],["/tags/iTerm2/index.html","7aea168c7854351b4ae8f1a6b30a515f"],["/tags/index.html","c868ac9cc16cb80917c49ad8cf0c860f"],["/tags/nodemailer/index.html","cb833d835693f3987c836ed74583d63e"],["/tags/云函数/index.html","a4322301b82e30202cf9a398e4028d39"],["/tags/前端/index.html","69ad0523b1650b7365cd466e721e4604"],["/tags/前端/page/2/index.html","ac2b80dd8af6f8a451f0a613686c768f"],["/tags/前端/page/3/index.html","6d43974a933d642642d0d7a2277e0eab"],["/tags/导航栏/index.html","5e2436aaada91ff24e34affdf142217a"],["/tags/封装/index.html","1b87e3a32603745b2525e57882789c87"],["/tags/小程序/index.html","44240ffac6ba038c302dc6ef07a7f6e1"],["/tags/工具/index.html","fca0ba4eb6776d23441a15e6520120fb"],["/tags/弹窗通知/index.html","6785491a684fd4ad54b6fad48c8a9321"],["/tags/排序/index.html","f79451ae92418af9e49c161d6eb01a65"],["/tags/插件/index.html","5f65b37eda2118788d1332bc80893d08"],["/tags/数据库/index.html","9a84c1684fc09a19e9a1199477c43802"],["/tags/标签闪烁/index.html","0cc5fd93f8af9b19602061051a68d2ac"],["/tags/样式/index.html","22177c4490f0aebeac8a41f79f55da48"],["/tags/样式穿透/index.html","77f86c8639f8d547ee5d65a2f997e407"],["/tags/浏览器/index.html","588711087ba6fb2bafc18dd47600c0bb"],["/tags/浏览器通知/index.html","1b5934d626a76e83b69be303da2b252b"],["/tags/算法/index.html","6f1e732f969f6739e1b18fa3931e9529"],["/tags/路由懒加载/index.html","b6d6991ba23ce8fc40ea37859a2136a1"],["/tags/适配/index.html","4d53e78cdc99ead9d7fca70619b06ed6"],["/tags/邮件通知/index.html","4ff762c5b56729042e5032e73c6d556e"],["/tags/配置分离/index.html","e364f8f756943205d07207fab7447614"],["/tags/铃声/index.html","5ecbfac877e94e2ccb4041a9ba777bf7"]];
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




