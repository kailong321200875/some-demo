!function(){"use strict";var o,n={5486:function(){function o(o){var n=o.el,t=o.position,e=void 0===t?"scrollLeft":t,r=o.to,i=o.duration,c=void 0===i?500:i,l=o.callback,a=!1,u=n[e],f=r-u,s=20,d=0;function m(){if(a){var o,t,r,i=(o=d+=s,t=u,r=f,(o/=c/2)<1?r/2*o*o+t:-r/2*(--o*(o-2)-1)+t);!function(o,n,t){o[n]=t}(n,e,i),d<c&&a?requestAnimationFrame(m):l&&l()}}return{start:function(){a=!0,m()},stop:function(){a=!1}}}window.onload=function(){for(var o="",n=0;n<1e3;n++)o+='<div class="box">'.concat(n,"</div>");document.querySelector(".scroll-animation1").innerHTML=o,document.querySelector(".scroll-animation2").innerHTML=o},document.getElementById("random-scroll1").onclick=function(){var n=Math.floor(2021*Math.random())+0;document.querySelector(".scroll-animation1").scrollTo({left:n}),(0,o({el:document.querySelector(".scroll-animation2"),to:n,duration:500}).start)(),console.log("【left】：",n)},document.getElementById("random-scroll2").onclick=function(){var n=Math.floor(70001*Math.random())+0;document.querySelector(".scroll-animation1").scrollTo({top:n}),(0,o({el:document.querySelector(".scroll-animation2"),position:"scrollTop",to:n,duration:500}).start)(),console.log("【top】：",n)}}},t={};function e(o){var r=t[o];if(void 0!==r)return r.exports;var i=t[o]={exports:{}};return n[o].call(i.exports,i,i.exports,e),i.exports}e.m=n,e.amdO={},o=[],e.O=function(n,t,r,i){if(!t){var c=1/0;for(f=0;f<o.length;f++){t=o[f][0],r=o[f][1],i=o[f][2];for(var l=!0,a=0;a<t.length;a++)(!1&i||c>=i)&&Object.keys(e.O).every((function(o){return e.O[o](t[a])}))?t.splice(a--,1):(l=!1,i<c&&(c=i));if(l){o.splice(f--,1);var u=r();void 0!==u&&(n=u)}}return n}i=i||0;for(var f=o.length;f>0&&o[f-1][2]>i;f--)o[f]=o[f-1];o[f]=[t,r,i]},e.d=function(o,n){for(var t in n)e.o(n,t)&&!e.o(o,t)&&Object.defineProperty(o,t,{enumerable:!0,get:n[t]})},e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(o){if("object"==typeof window)return window}}(),e.o=function(o,n){return Object.prototype.hasOwnProperty.call(o,n)},e.r=function(o){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(o,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(o,"__esModule",{value:!0})},e.j=820,function(){var o={820:0};e.O.j=function(n){return 0===o[n]};var n=function(n,t){var r,i,c=t[0],l=t[1],a=t[2],u=0;if(c.some((function(n){return 0!==o[n]}))){for(r in l)e.o(l,r)&&(e.m[r]=l[r]);if(a)var f=a(e)}for(n&&n(t);u<c.length;u++)i=c[u],e.o(o,i)&&o[i]&&o[i][0](),o[i]=0;return e.O(f)},t=self.webpackChunkwebpack_multipage_cli=self.webpackChunkwebpack_multipage_cli||[];t.forEach(n.bind(null,0)),t.push=n.bind(null,t.push.bind(t))}();var r=e.O(void 0,[998],(function(){return e(5486)}));r=e.O(r)}();