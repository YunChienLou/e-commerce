(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-03ff45d3"],{"109e":function(e,t,n){
/*!
  * Bootstrap manipulator.js v5.1.3 (https://getbootstrap.com/)
  * Copyright 2011-2021 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
(function(t,n){e.exports=n()})(0,(function(){"use strict";function e(e){return"true"===e||"false"!==e&&(e===Number(e).toString()?Number(e):""===e||"null"===e?null:e)}function t(e){return e.replace(/[A-Z]/g,e=>"-"+e.toLowerCase())}const n={setDataAttribute(e,n,s){e.setAttribute("data-bs-"+t(n),s)},removeDataAttribute(e,n){e.removeAttribute("data-bs-"+t(n))},getDataAttributes(t){if(!t)return{};const n={};return Object.keys(t.dataset).filter(e=>e.startsWith("bs")).forEach(s=>{let o=s.replace(/^bs/,"");o=o.charAt(0).toLowerCase()+o.slice(1,o.length),n[o]=e(t.dataset[s])}),n},getDataAttribute(n,s){return e(n.getAttribute("data-bs-"+t(s)))},offset(e){const t=e.getBoundingClientRect();return{top:t.top+window.pageYOffset,left:t.left+window.pageXOffset}},position(e){return{top:e.offsetTop,left:e.offsetLeft}}};return n}))},"302d":function(e,t,n){
/*!
  * Bootstrap base-component.js v5.1.3 (https://getbootstrap.com/)
  * Copyright 2011-2021 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
(function(t,s){e.exports=s(n("6ee1"),n("6a95"))})(0,(function(e,t){"use strict";const n=e=>e&&"object"===typeof e&&"default"in e?e:{default:e},s=n(e),o=n(t),i=1e3,r="transitionend",a=e=>{if(!e)return 0;let{transitionDuration:t,transitionDelay:n}=window.getComputedStyle(e);const s=Number.parseFloat(t),o=Number.parseFloat(n);return s||o?(t=t.split(",")[0],n=n.split(",")[0],(Number.parseFloat(t)+Number.parseFloat(n))*i):0},c=e=>{e.dispatchEvent(new Event(r))},u=e=>!(!e||"object"!==typeof e)&&("undefined"!==typeof e.jquery&&(e=e[0]),"undefined"!==typeof e.nodeType),l=e=>u(e)?e.jquery?e[0]:e:"string"===typeof e&&e.length>0?document.querySelector(e):null,d=e=>{"function"===typeof e&&e()},f=(e,t,n=!0)=>{if(!n)return void d(e);const s=5,o=a(t)+s;let i=!1;const u=({target:n})=>{n===t&&(i=!0,t.removeEventListener(r,u),d(e))};t.addEventListener(r,u),setTimeout(()=>{i||c(t)},o)},h="5.1.3";class m{constructor(e){e=l(e),e&&(this._element=e,s.default.set(this._element,this.constructor.DATA_KEY,this))}dispose(){s.default.remove(this._element,this.constructor.DATA_KEY),o.default.off(this._element,this.constructor.EVENT_KEY),Object.getOwnPropertyNames(this).forEach(e=>{this[e]=null})}_queueCallback(e,t,n=!0){f(e,t,n)}static getInstance(e){return s.default.get(l(e),this.DATA_KEY)}static getOrCreateInstance(e,t={}){return this.getInstance(e)||new this(e,"object"===typeof t?t:null)}static get VERSION(){return h}static get NAME(){throw new Error('You have to implement the static method "NAME", for each component!')}static get DATA_KEY(){return"bs."+this.NAME}static get EVENT_KEY(){return"."+this.DATA_KEY}}return m}))},"6a95":function(e,t,n){
/*!
  * Bootstrap event-handler.js v5.1.3 (https://getbootstrap.com/)
  * Copyright 2011-2021 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
(function(t,n){e.exports=n()})(0,(function(){"use strict";const e=()=>{const{jQuery:e}=window;return e&&!document.body.hasAttribute("data-bs-no-jquery")?e:null},t=/[^.]*(?=\..*)\.|.*/,n=/\..*/,s=/::\d+$/,o={};let i=1;const r={mouseenter:"mouseover",mouseleave:"mouseout"},a=/^(mouseenter|mouseleave)/i,c=new Set(["click","dblclick","mouseup","mousedown","contextmenu","mousewheel","DOMMouseScroll","mouseover","mouseout","mousemove","selectstart","selectend","keydown","keypress","keyup","orientationchange","touchstart","touchmove","touchend","touchcancel","pointerdown","pointermove","pointerup","pointerleave","pointercancel","gesturestart","gesturechange","gestureend","focus","blur","change","reset","select","submit","focusin","focusout","load","unload","beforeunload","resize","move","DOMContentLoaded","readystatechange","error","abort","scroll"]);function u(e,t){return t&&`${t}::${i++}`||e.uidEvent||i++}function l(e){const t=u(e);return e.uidEvent=t,o[t]=o[t]||{},o[t]}function d(e,t){return function n(s){return s.delegateTarget=e,n.oneOff&&v.off(e,s.type,t),t.apply(e,[s])}}function f(e,t,n){return function s(o){const i=e.querySelectorAll(t);for(let{target:r}=o;r&&r!==this;r=r.parentNode)for(let a=i.length;a--;)if(i[a]===r)return o.delegateTarget=r,s.oneOff&&v.off(e,o.type,t,n),n.apply(r,[o]);return null}}function h(e,t,n=null){const s=Object.keys(e);for(let o=0,i=s.length;o<i;o++){const i=e[s[o]];if(i.originalHandler===t&&i.delegationSelector===n)return i}return null}function m(e,t,n){const s="string"===typeof t,o=s?n:t;let i=y(e);const r=c.has(i);return r||(i=e),[s,o,i]}function g(e,n,s,o,i){if("string"!==typeof n||!e)return;if(s||(s=o,o=null),a.test(n)){const e=e=>function(t){if(!t.relatedTarget||t.relatedTarget!==t.delegateTarget&&!t.delegateTarget.contains(t.relatedTarget))return e.call(this,t)};o?o=e(o):s=e(s)}const[r,c,g]=m(n,s,o),p=l(e),b=p[g]||(p[g]={}),y=h(b,c,r?s:null);if(y)return void(y.oneOff=y.oneOff&&i);const v=u(c,n.replace(t,"")),_=r?f(e,s,o):d(e,s);_.delegationSelector=r?s:null,_.originalHandler=c,_.oneOff=i,_.uidEvent=v,b[v]=_,e.addEventListener(g,_,r)}function p(e,t,n,s,o){const i=h(t[n],s,o);i&&(e.removeEventListener(n,i,Boolean(o)),delete t[n][i.uidEvent])}function b(e,t,n,s){const o=t[n]||{};Object.keys(o).forEach(i=>{if(i.includes(s)){const s=o[i];p(e,t,n,s.originalHandler,s.delegationSelector)}})}function y(e){return e=e.replace(n,""),r[e]||e}const v={on(e,t,n,s){g(e,t,n,s,!1)},one(e,t,n,s){g(e,t,n,s,!0)},off(e,t,n,o){if("string"!==typeof t||!e)return;const[i,r,a]=m(t,n,o),c=a!==t,u=l(e),d=t.startsWith(".");if("undefined"!==typeof r){if(!u||!u[a])return;return void p(e,u,a,r,i?n:null)}d&&Object.keys(u).forEach(n=>{b(e,u,n,t.slice(1))});const f=u[a]||{};Object.keys(f).forEach(n=>{const o=n.replace(s,"");if(!c||t.includes(o)){const t=f[n];p(e,u,a,t.originalHandler,t.delegationSelector)}})},trigger(t,n,s){if("string"!==typeof n||!t)return null;const o=e(),i=y(n),r=n!==i,a=c.has(i);let u,l=!0,d=!0,f=!1,h=null;return r&&o&&(u=o.Event(n,s),o(t).trigger(u),l=!u.isPropagationStopped(),d=!u.isImmediatePropagationStopped(),f=u.isDefaultPrevented()),a?(h=document.createEvent("HTMLEvents"),h.initEvent(i,l,!0)):h=new CustomEvent(n,{bubbles:l,cancelable:!0}),"undefined"!==typeof s&&Object.keys(s).forEach(e=>{Object.defineProperty(h,e,{get(){return s[e]}})}),f&&h.preventDefault(),d&&t.dispatchEvent(h),h.defaultPrevented&&"undefined"!==typeof u&&u.preventDefault(),h}};return v}))},"6ea1":function(e,t,n){
/*!
  * Bootstrap toast.js v5.1.3 (https://getbootstrap.com/)
  * Copyright 2011-2021 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
(function(t,s){e.exports=s(n("6a95"),n("109e"),n("302d"))})(0,(function(e,t,n){"use strict";const s=e=>e&&"object"===typeof e&&"default"in e?e:{default:e},o=s(e),i=s(t),r=s(n),a=e=>null===e||void 0===e?""+e:{}.toString.call(e).match(/\s([a-z]+)/i)[1].toLowerCase(),c=e=>{let t=e.getAttribute("data-bs-target");if(!t||"#"===t){let n=e.getAttribute("href");if(!n||!n.includes("#")&&!n.startsWith("."))return null;n.includes("#")&&!n.startsWith("#")&&(n="#"+n.split("#")[1]),t=n&&"#"!==n?n.trim():null}return t},u=e=>{const t=c(e);return t?document.querySelector(t):null},l=e=>!(!e||"object"!==typeof e)&&("undefined"!==typeof e.jquery&&(e=e[0]),"undefined"!==typeof e.nodeType),d=(e,t,n)=>{Object.keys(n).forEach(s=>{const o=n[s],i=t[s],r=i&&l(i)?"element":a(i);if(!new RegExp(o).test(r))throw new TypeError(`${e.toUpperCase()}: Option "${s}" provided type "${r}" but expected type "${o}".`)})},f=e=>!e||e.nodeType!==Node.ELEMENT_NODE||(!!e.classList.contains("disabled")||("undefined"!==typeof e.disabled?e.disabled:e.hasAttribute("disabled")&&"false"!==e.getAttribute("disabled"))),h=e=>{e.offsetHeight},m=()=>{const{jQuery:e}=window;return e&&!document.body.hasAttribute("data-bs-no-jquery")?e:null},g=[],p=e=>{"loading"===document.readyState?(g.length||document.addEventListener("DOMContentLoaded",()=>{g.forEach(e=>e())}),g.push(e)):e()},b=e=>{p(()=>{const t=m();if(t){const n=e.NAME,s=t.fn[n];t.fn[n]=e.jQueryInterface,t.fn[n].Constructor=e,t.fn[n].noConflict=()=>(t.fn[n]=s,e.jQueryInterface)}})},y=(e,t="hide")=>{const n="click.dismiss"+e.EVENT_KEY,s=e.NAME;o.default.on(document,n,`[data-bs-dismiss="${s}"]`,(function(n){if(["A","AREA"].includes(this.tagName)&&n.preventDefault(),f(this))return;const o=u(this)||this.closest("."+s),i=e.getOrCreateInstance(o);i[t]()}))},v="toast",_="bs.toast",w="."+_,E="mouseover"+w,j="mouseout"+w,O="focusin"+w,T="focusout"+w,A="hide"+w,L="hidden"+w,k="show"+w,I="shown"+w,D="fade",N="hide",C="show",S="showing",M={animation:"boolean",autohide:"boolean",delay:"number"},x={animation:!0,autohide:!0,delay:5e3};class $ extends r.default{constructor(e,t){super(e),this._config=this._getConfig(t),this._timeout=null,this._hasMouseInteraction=!1,this._hasKeyboardInteraction=!1,this._setListeners()}static get DefaultType(){return M}static get Default(){return x}static get NAME(){return v}show(){const e=o.default.trigger(this._element,k);if(e.defaultPrevented)return;this._clearTimeout(),this._config.animation&&this._element.classList.add(D);const t=()=>{this._element.classList.remove(S),o.default.trigger(this._element,I),this._maybeScheduleHide()};this._element.classList.remove(N),h(this._element),this._element.classList.add(C),this._element.classList.add(S),this._queueCallback(t,this._element,this._config.animation)}hide(){if(!this._element.classList.contains(C))return;const e=o.default.trigger(this._element,A);if(e.defaultPrevented)return;const t=()=>{this._element.classList.add(N),this._element.classList.remove(S),this._element.classList.remove(C),o.default.trigger(this._element,L)};this._element.classList.add(S),this._queueCallback(t,this._element,this._config.animation)}dispose(){this._clearTimeout(),this._element.classList.contains(C)&&this._element.classList.remove(C),super.dispose()}_getConfig(e){return e={...x,...i.default.getDataAttributes(this._element),..."object"===typeof e&&e?e:{}},d(v,e,this.constructor.DefaultType),e}_maybeScheduleHide(){this._config.autohide&&(this._hasMouseInteraction||this._hasKeyboardInteraction||(this._timeout=setTimeout(()=>{this.hide()},this._config.delay)))}_onInteraction(e,t){switch(e.type){case"mouseover":case"mouseout":this._hasMouseInteraction=t;break;case"focusin":case"focusout":this._hasKeyboardInteraction=t;break}if(t)return void this._clearTimeout();const n=e.relatedTarget;this._element===n||this._element.contains(n)||this._maybeScheduleHide()}_setListeners(){o.default.on(this._element,E,e=>this._onInteraction(e,!0)),o.default.on(this._element,j,e=>this._onInteraction(e,!1)),o.default.on(this._element,O,e=>this._onInteraction(e,!0)),o.default.on(this._element,T,e=>this._onInteraction(e,!1))}_clearTimeout(){clearTimeout(this._timeout),this._timeout=null}static jQueryInterface(e){return this.each((function(){const t=$.getOrCreateInstance(this,e);if("string"===typeof e){if("undefined"===typeof t[e])throw new TypeError(`No method named "${e}"`);t[e](this)}}))}}return y($),b($),$}))},"6ee1":function(e,t,n){
/*!
  * Bootstrap data.js v5.1.3 (https://getbootstrap.com/)
  * Copyright 2011-2021 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
(function(t,n){e.exports=n()})(0,(function(){"use strict";const e=new Map,t={set(t,n,s){e.has(t)||e.set(t,new Map);const o=e.get(t);o.has(n)||0===o.size?o.set(n,s):console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(o.keys())[0]}.`)},get(t,n){return e.has(t)&&e.get(t).get(n)||null},remove(t,n){if(!e.has(t))return;const s=e.get(t);s.delete(n),0===s.size&&e.delete(t)}};return t}))},"771a":function(e,t,n){e.exports=n.p+"img/car-icon.c865374f.svg"},f367:function(e,t,n){"use strict";var s=n("7a23"),o={class:"toast-container position-fixed pe-3 top-20 end-0",style:{"z-index":"3"}};function i(e,t,n,i,r,a){var c=Object(s["I"])("Toast");return Object(s["z"])(),Object(s["h"])("div",o,[(Object(s["z"])(!0),Object(s["h"])(s["a"],null,Object(s["G"])(r.messages,(function(e,t){return Object(s["z"])(),Object(s["f"])(c,{key:t,msg:e},null,8,["msg"])})),128))])}var r=n("771a"),a=n.n(r),c={class:"toast",role:"alert","aria-live":"assertive","aria-atomic":"true",ref:"toast"},u={class:"toast-header justify-content-between"},l={class:""},d=Object(s["i"])("img",{src:a.a,alt:"logo",width:"20"},null,-1),f=[d],h=Object(s["i"])("strong",null,"TESLA Taiwan",-1),m=Object(s["i"])("div",{class:""},[Object(s["i"])("button",{type:"button",class:"btn-close","data-bs-dismiss":"toast","aria-label":"Close"})],-1),g={key:0,class:"toast-body"},p={class:"toast-body"},b={class:"toast-body me-auto"},y={class:"progress mt-2",style:{height:"3px"}};function v(e,t,n,o,i,r){return Object(s["z"])(),Object(s["h"])("div",c,[Object(s["i"])("div",u,[Object(s["i"])("div",l,[Object(s["i"])("span",{class:Object(s["t"])(["bg-".concat(n.msg.style),"p-2 rounded me-2 d-inline-block"])},f,2),h]),m]),n.msg.content?(Object(s["z"])(),Object(s["h"])("div",g,Object(s["L"])(n.msg.content),1)):Object(s["g"])("",!0),Object(s["i"])("div",p,[Object(s["i"])("strong",b,Object(s["L"])(n.msg.title),1),Object(s["i"])("div",y,[Object(s["i"])("div",{class:Object(s["t"])(["progress-bar progress-bar-striped progress-bar-animated","bg-".concat(n.msg.style)]),role:"progressbar","aria-valuenow":"75","aria-valuemin":"0","aria-valuemax":"100",style:{width:"0%"},ref:"count"},null,2)])])],512)}var _=n("6ea1"),w=n.n(_),E={name:"Toast",props:["msg"],data:function(){return{minutes:6,countdown:null}},methods:{startTimer:function(){var e=this,t=this.minutes,n=this.$refs.count;n.style.width="0%",this.countdown=setInterval((function(){e.minutes--,n.style.width=100*(t-e.minutes)/t+"%",0===e.minutes&&e.stopTimer()}),1e3)},stopTimer:function(){clearInterval(this.countdown),this.minutes=10}},mounted:function(){var e=this.$refs.toast,t=new w.a(e,{delay:6e3});t.show(),this.startTimer()}},j=n("6b0d"),O=n.n(j);const T=O()(E,[["render",v]]);var A=T,L={components:{Toast:A},data:function(){return{messages:[]}},inject:["emitter"],mounted:function(){var e=this;this.emitter.on("push-message",(function(t){var n=t.style,s=void 0===n?"success":n,o=t.title,i=t.content;e.messages.push({style:s,title:o,content:i})}))}};const k=O()(L,[["render",i]]);t["a"]=k}}]);
//# sourceMappingURL=chunk-03ff45d3.6f5ed7a7.js.map