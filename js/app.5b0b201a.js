(function(e){function t(t){for(var r,i,o=t[0],u=t[1],a=t[2],d=0,f=[];d<o.length;d++)i=o[d],Object.prototype.hasOwnProperty.call(c,i)&&c[i]&&f.push(c[i][0]),c[i]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);s&&s(t);while(f.length)f.shift()();return l.push.apply(l,a||[]),n()}function n(){for(var e,t=0;t<l.length;t++){for(var n=l[t],r=!0,o=1;o<n.length;o++){var u=n[o];0!==c[u]&&(r=!1)}r&&(l.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},c={app:0},l=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],u=o.push.bind(o);o.push=t,o=o.slice();for(var a=0;a<o.length;a++)t(o[a]);var s=u;l.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23");function c(e,t,n,c,l,i){var o=Object(r["j"])("Header"),u=Object(r["j"])("Slider");return Object(r["h"])(),Object(r["d"])(r["a"],null,[Object(r["g"])(o),Object(r["g"])(u)],64)}var l={class:"w-full text-center font-semibold text-lg py-4 bg-black text-white border-b-4 border-blue-300"},i=Object(r["f"])(" Welcome to my Carousel made with "),o=Object(r["g"])("span",{class:"text-green-300"},"Vue.js",-1),u=Object(r["f"])(" by "),a=Object(r["g"])("a",{href:"https://github.com/Edmonbelchev",class:"text-blue-300 underline"},"Edmon Belchev ",-1);function s(e,t,n,c,s,d){return Object(r["h"])(),Object(r["d"])("h1",l,[i,o,u,a])}var d={};d.render=s;var f=d,b={class:"relative slider-wrapper w-full flex flex-col"},p={class:"w-full absolute bottom-2 flex justify-center items-center z-10"};function j(e,t,n,c,l,i){return Object(r["h"])(),Object(r["d"])("div",b,[(Object(r["h"])(!0),Object(r["d"])(r["a"],null,Object(r["i"])(l.slider,(function(n,c){return Object(r["h"])(),Object(r["d"])("div",{class:"absolute w-full h-full",key:c},[Object(r["g"])(r["b"],{name:"fade"},{default:Object(r["k"])((function(){return[c===l.slideNum?(Object(r["h"])(),Object(r["d"])("img",{key:0,class:"object-cover w-full h-full",onTouchend:t[1]||(t[1]=function(t){return e.myTouchStartHandler()}),src:l.slider[l.slideNum],alt:""},null,40,["src"])):Object(r["e"])("",!0)]})),_:2},1024)])})),128)),Object(r["g"])("div",p,[(Object(r["h"])(!0),Object(r["d"])(r["a"],null,Object(r["i"])(l.slider,(function(e,t){return Object(r["h"])(),Object(r["d"])("div",{class:["w-3 h-3 mx-1 rounded-full cursor-pointer",i.paginationColor(t)],onClick:function(e){return i.changeSlide(t)},key:e},null,10,["onClick"])})),128))])])}var h={data:function(){return{slideNum:0,intervalTime:0,slider:[n("c510"),n("8d88"),n("880b")]}},mounted:function(){this.setTime()},methods:{changeSlide:function(e){return this.slideNum=e,clearInterval(this.intervalTimer),this.setTime()},paginationColor:function(e){return this.slideNum==e?"bg-black":"bg-gray-500"},setTime:function(){var e=this;this.intervalTimer=setInterval((function(){return 2==e.slideNum?e.slideNum=0:e.slideNum++}),3e3)}}};n("a57c");h.render=j;var O=h,m={name:"App",components:{Slider:O,Header:f}};m.render=c;var v=m;n("7d05");Object(r["c"])(v).mount("#app")},"7d05":function(e,t,n){},"880b":function(e,t,n){e.exports=n.p+"slider-app/img/slide3.b1d7cf09.jpg"},"8d88":function(e,t,n){e.exports=n.p+"slider-app/img/slide2.68e38f2b.jpg"},a57c:function(e,t,n){"use strict";n("c40e")},c40e:function(e,t,n){},c510:function(e,t,n){e.exports=n.p+"slider-app/img/slide1.e14231e9.jpg"}});
//# sourceMappingURL=app.5b0b201a.js.map
