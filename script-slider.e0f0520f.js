parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"J0bv":[function(require,module,exports) {
(()=>{var e,t=1,a=document.querySelector(".customers__dots"),s=a.querySelectorAll(".customers__dots-item"),c=[...s].findIndex(e=>e.getAttribute("data-active"))+1;function n(e){i(t=e)}function i(e){var a,s=document.getElementsByClassName("customers__item"),c=document.getElementsByClassName("customers__dots-item");for(e>s.length&&(t=1),e<1&&(t=s.length),a=0;a<s.length;a++)s[a].style.display="none";for(s[t-1].style.display="block",a=0;a<c.length;a++)c[a].className=c[a].className.replace("active","");c[t-1].className+=" active"}function l(){e&&clearInterval(e),c=[...s].findIndex(e=>[...e.classList].includes("active"))+1,e=setInterval(()=>{3!==c?c++:c=1,n(c)},5e3)}s[t-1].dataset.active,a.addEventListener("click",function(e){var t=e.currentTarget.children;[...t].forEach(e=>e.removeAttribute("data-active")),e.target.dataset.active="",n([...t].findIndex(e=>""===e.getAttribute("data-active"))+1),l()}),i(t),e||l()})();
},{}]},{},["J0bv"], null)
//# sourceMappingURL=/IceCream/script-slider.e0f0520f.js.map