(function(e){function t(t){for(var a,r,l=t[0],u=t[1],c=t[2],s=0,d=[];s<l.length;s++)r=l[s],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&d.push(o[r][0]),o[r]=0;for(a in u)Object.prototype.hasOwnProperty.call(u,a)&&(e[a]=u[a]);h&&h(t);while(d.length)d.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],a=!0,r=1;r<n.length;r++){var l=n[r];0!==o[l]&&(a=!1)}a&&(i.splice(t--,1),e=u(u.s=n[0]))}return e}var a={},r={app:0},o={app:0},i=[];function l(e){return u.p+"js/"+({Chaoshan:"Chaoshan",Index:"Index"}[e]||e)+"."+{Chaoshan:"745d3f58",Index:"74601ab6"}[e]+".js"}function u(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n={Chaoshan:1,Index:1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=new Promise((function(t,n){for(var a="css/"+({Chaoshan:"Chaoshan",Index:"Index"}[e]||e)+"."+{Chaoshan:"9f6766af",Index:"90c4c136"}[e]+".css",o=u.p+a,i=document.getElementsByTagName("link"),l=0;l<i.length;l++){var c=i[l],s=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(s===a||s===o))return t()}var d=document.getElementsByTagName("style");for(l=0;l<d.length;l++){c=d[l],s=c.getAttribute("data-href");if(s===a||s===o)return t()}var h=document.createElement("link");h.rel="stylesheet",h.type="text/css",h.onload=t,h.onerror=function(t){var a=t&&t.target&&t.target.src||o,i=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=a,delete r[e],h.parentNode.removeChild(h),n(i)},h.href=o;var p=document.getElementsByTagName("head")[0];p.appendChild(h)})).then((function(){r[e]=0})));var a=o[e];if(0!==a)if(a)t.push(a[2]);else{var i=new Promise((function(t,n){a=o[e]=[t,n]}));t.push(a[2]=i);var c,s=document.createElement("script");s.charset="utf-8",s.timeout=120,u.nc&&s.setAttribute("nonce",u.nc),s.src=l(e);var d=new Error;c=function(t){s.onerror=s.onload=null,clearTimeout(h);var n=o[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+a+": "+r+")",d.name="ChunkLoadError",d.type=a,d.request=r,n[1](d)}o[e]=void 0}};var h=setTimeout((function(){c({type:"timeout",target:s})}),12e4);s.onerror=s.onload=c,document.head.appendChild(s)}return Promise.all(t)},u.m=e,u.c=a,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)u.d(n,a,function(t){return e[t]}.bind(null,a));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/mahjong/",u.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=t,c=c.slice();for(var d=0;d<c.length;d++)t(c[d]);var h=s;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("4cae")},"4cae":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("8bbf"),r=n.n(a),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("Nav"),n("router-view")],1)},i=[],l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"header"},[a("el-row",{attrs:{gutter:20}},[a("el-col",{staticClass:"logo-wrap",attrs:{span:6}},[a("a",{attrs:{href:"https://vincef0ng.cn"}},[a("img",{staticClass:"logo",attrs:{src:n("cf05"),alt:"logo"}})])]),a("el-col",{staticClass:"nav-wrap",attrs:{span:18}},[a("el-menu",{staticClass:"menu",attrs:{mode:"horizontal","active-text-color":"#b79854","default-active":"/introduction/chaoshan-rule",router:""}},[a("el-submenu",{attrs:{index:"/introduction"}},[a("template",{staticClass:"abc",slot:"title"},[e._v("规则介绍")]),a("el-menu-item",{attrs:{index:"/introduction/chaoshan-rule"}},[e._v("潮汕麻将")]),a("el-menu-item",{attrs:{index:"/introduction/tuidaohu-rule",disabled:""}},[e._v("推倒胡")]),a("el-menu-item",{attrs:{index:"/introduction/xueliuchenhe-rule",disabled:""}},[e._v("血流成河")])],2),a("el-submenu",{attrs:{index:"/calculation"}},[a("template",{slot:"title"},[e._v("番数计算器")]),a("el-menu-item",{attrs:{index:"/calculation/chaoshan-calc"}},[e._v("潮汕麻将")]),a("el-menu-item",{attrs:{index:"/calculation/tuidaohu-calc",disabled:""}},[e._v("推倒胡")]),a("el-menu-item",{attrs:{index:"/calculation/xueliuchenhe-calc",disabled:""}},[e._v("血流成河")])],2),a("el-menu-item",{attrs:{index:"/about",disabled:""}},[a("span",{attrs:{slot:"title"},slot:"title"},[e._v("关于")])])],1),a("div",{staticClass:"menu-btn"},[a("i",{staticClass:"el-icon-menu",on:{click:function(t){e.drawer=!0}}})]),a("el-drawer",{attrs:{title:"@VincentF0ng",visible:e.drawer,direction:"ltr",size:"50%","show-close":!1,"modal-append-to-body":!1},on:{"update:visible":function(t){e.drawer=t}}},[a("el-menu",{attrs:{"active-text-color":"#b79854","default-active":"/introduction/chaoshan-rule","unique-opened":!0,"menu-trigger":"click",router:""},on:{select:e.handleMobileMenuSelected}},[a("el-submenu",{attrs:{index:"/introduction"}},[a("template",{staticClass:"abc",slot:"title"},[e._v("规则介绍")]),a("el-menu-item",{attrs:{index:"/introduction/chaoshan-rule"}},[e._v("潮汕麻将")]),a("el-menu-item",{attrs:{index:"/introduction/tuidaohu-rule",disabled:""}},[e._v("推倒胡")]),a("el-menu-item",{attrs:{index:"/introduction/xueliuchenhe-rule",disabled:""}},[e._v("血流成河")])],2),a("el-submenu",{attrs:{index:"/calculation"}},[a("template",{slot:"title"},[e._v("番数计算器")]),a("el-menu-item",{attrs:{index:"/calculation/chaoshan-calc"}},[e._v("潮汕麻将")]),a("el-menu-item",{attrs:{index:"/calculation/tuidaohu-calc",disabled:""}},[e._v("推倒胡")]),a("el-menu-item",{attrs:{index:"/calculation/xueliuchenhe-calc",disabled:""}},[e._v("血流成河")])],2),a("el-menu-item",{attrs:{index:"/about",disabled:""}},[a("span",{attrs:{slot:"title"},slot:"title"},[e._v("关于")])])],1)],1)],1)],1)],1)])},u=[],c={name:"Nav",data:function(){return{drawer:!1}},methods:{handleMobileMenuSelected:function(){this.drawer=!1}}},s=c,d=(n("5e91"),n("2877")),h=Object(d["a"])(s,l,u,!1,null,null,null),p=h.exports,f={name:"App",components:{Nav:p}},m=f,v=(n("5c0b"),Object(d["a"])(m,o,i,!1,null,null,null)),b=v.exports,g=(n("d3b7"),n("6389")),x=n.n(g),_=function(){return n.e("Index").then(n.bind(null,"e46f"))},y=function(){return n.e("Index").then(n.bind(null,"721e"))},C=function(){return n.e("Index").then(n.bind(null,"f820"))},w=function(){return n.e("Chaoshan").then(n.bind(null,"e82a"))},j=function(){return n.e("Chaoshan").then(n.bind(null,"572d"))};r.a.use(x.a);var O=[{path:"/",redirect:"/introduction"},{path:"/introduction",name:"Introduction",component:_,children:[{path:"/",redirect:"/introduction/chaoshan-rule"},{path:"chaoshan-rule",name:"ChaoshanRule",component:w}]},{path:"/calculation",name:"Calculation",component:y,children:[{path:"/",redirect:"/calculation/chaoshan-calc"},{path:"chaoshan-calc",name:"ChaoshanCalc",component:j}]},{path:"/about",name:"About",component:C}],I=new x.a({mode:"history",base:"/mahjong/",routes:O}),E=I;n("e382");r.a.config.productionTip=!1,new r.a({router:E,render:function(e){return e(b)}}).$mount("#app")},"4fdb":function(e,t,n){},"5c0b":function(e,t,n){"use strict";var a=n("9c0c"),r=n.n(a);r.a},"5e91":function(e,t,n){"use strict";var a=n("4fdb"),r=n.n(a);r.a},6389:function(e,t){e.exports=VueRouter},"8bbf":function(e,t){e.exports=Vue},"9c0c":function(e,t,n){},cf05:function(e,t,n){e.exports=n.p+"img/logo.15027e73.png"},e382:function(e,t,n){}});
//# sourceMappingURL=app.94639d7a.js.map