!function(){"use strict";var e,n={5236:function(e,n,t){t(9948),t(4674),t(4514);var r=document.querySelector(".deep-focus"),o=r.querySelectorAll("img");r.addEventListener("mousemove",(function(e){var n=e.clientX/window.outerWidth;console.log("percent:",n);var t=10*n;console.log("offset:",t);o.forEach((function(e,r){t*=1.3,console.log("new-offset:",t);var u=20*Math.pow(r/o.length-n,2);console.log("new-blur:",u),e.style.setProperty("--offset",t+"px"),e.style.setProperty("--blur",u+"px")}))}))}},t={};function r(e){var o=t[e];if(void 0!==o)return o.exports;var u=t[e]={exports:{}};return n[e].call(u.exports,u,u.exports,r),u.exports}r.m=n,r.amdO={},e=[],r.O=function(n,t,o,u){if(!t){var i=1/0;for(a=0;a<e.length;a++){t=e[a][0],o=e[a][1],u=e[a][2];for(var c=!0,l=0;l<t.length;l++)(!1&u||i>=u)&&Object.keys(r.O).every((function(e){return r.O[e](t[l])}))?t.splice(l--,1):(c=!1,u<i&&(i=u));if(c){e.splice(a--,1);var f=o();void 0!==f&&(n=f)}}return n}u=u||0;for(var a=e.length;a>0&&e[a-1][2]>u;a--)e[a]=e[a-1];e[a]=[t,o,u]},r.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(n,{a:n}),n},r.d=function(e,n){for(var t in n)r.o(n,t)&&!r.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.j=921,function(){var e={921:0};r.O.j=function(n){return 0===e[n]};var n=function(n,t){var o,u,i=t[0],c=t[1],l=t[2],f=0;if(i.some((function(n){return 0!==e[n]}))){for(o in c)r.o(c,o)&&(r.m[o]=c[o]);if(l)var a=l(r)}for(n&&n(t);f<i.length;f++)u=i[f],r.o(e,u)&&e[u]&&e[u][0](),e[u]=0;return r.O(a)},t=self.webpackChunkwebpack_multipage_cli=self.webpackChunkwebpack_multipage_cli||[];t.forEach(n.bind(null,0)),t.push=n.bind(null,t.push.bind(t))}();var o=r.O(void 0,[998],(function(){return r(5236)}));o=r.O(o)}();