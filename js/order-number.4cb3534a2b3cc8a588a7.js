!function(){"use strict";var e,n={2019:function(){var e=document.getElementById("button"),n=0;e.addEventListener("click",(function(){console.log("我被点击了");var e=document.querySelector("ul");console.log(e),n>=7?n=0:n++,e.className="order-number-".concat(n)}))}},t={};function r(e){var o=t[e];if(void 0!==o)return o.exports;var i=t[e]={exports:{}};return n[e].call(i.exports,i,i.exports,r),i.exports}r.m=n,r.amdO={},e=[],r.O=function(n,t,o,i){if(!t){var u=1/0;for(f=0;f<e.length;f++){t=e[f][0],o=e[f][1],i=e[f][2];for(var c=!0,l=0;l<t.length;l++)(!1&i||u>=i)&&Object.keys(r.O).every((function(e){return r.O[e](t[l])}))?t.splice(l--,1):(c=!1,i<u&&(u=i));if(c){e.splice(f--,1);var a=o();void 0!==a&&(n=a)}}return n}i=i||0;for(var f=e.length;f>0&&e[f-1][2]>i;f--)e[f]=e[f-1];e[f]=[t,o,i]},r.d=function(e,n){for(var t in n)r.o(n,t)&&!r.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.j=434,function(){var e={434:0};r.O.j=function(n){return 0===e[n]};var n=function(n,t){var o,i,u=t[0],c=t[1],l=t[2],a=0;if(u.some((function(n){return 0!==e[n]}))){for(o in c)r.o(c,o)&&(r.m[o]=c[o]);if(l)var f=l(r)}for(n&&n(t);a<u.length;a++)i=u[a],r.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return r.O(f)},t=self.webpackChunkwebpack_multipage_cli=self.webpackChunkwebpack_multipage_cli||[];t.forEach(n.bind(null,0)),t.push=n.bind(null,t.push.bind(t))}();var o=r.O(void 0,[998],(function(){return r(2019)}));o=r.O(o)}();