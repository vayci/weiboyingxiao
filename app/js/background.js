/*!
 * jQuery JavaScript Library v3.1.0
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2016-07-07T21:44Z
 */
!function(e,t){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return t(e)}:t(e)}("undefined"!=typeof window?window:this,function(e,t){"use strict";function n(e,t){t=t||Z;var n=t.createElement("script");n.text=e,t.head.appendChild(n).parentNode.removeChild(n)}function r(e){var t=!!e&&"length"in e&&e.length,n=pe.type(e);return"function"!==n&&!pe.isWindow(e)&&("array"===n||0===t||"number"==typeof t&&t>0&&t-1 in e)}function i(e,t,n){if(pe.isFunction(t))return pe.grep(e,function(e,r){return!!t.call(e,r,e)!==n});if(t.nodeType)return pe.grep(e,function(e){return e===t!==n});if("string"==typeof t){if(Te.test(t))return pe.filter(t,e,n);t=pe.filter(t,e)}return pe.grep(e,function(e){return ie.call(t,e)>-1!==n&&1===e.nodeType})}function o(e,t){for(;(e=e[t])&&1!==e.nodeType;);return e}function a(e){var t={};return pe.each(e.match(De)||[],function(e,n){t[n]=!0}),t}function s(e){return e}function u(e){throw e}function l(e,t,n){var r;try{e&&pe.isFunction(r=e.promise)?r.call(e).done(t).fail(n):e&&pe.isFunction(r=e.then)?r.call(e,t,n):t.call(void 0,e)}catch(e){n.call(void 0,e)}}function c(){Z.removeEventListener("DOMContentLoaded",c),e.removeEventListener("load",c),pe.ready()}function f(){this.expando=pe.expando+f.uid++}function p(e,t,n){var r;if(void 0===n&&1===e.nodeType)if(r="data-"+t.replace(Pe,"-$&").toLowerCase(),n=e.getAttribute(r),"string"==typeof n){try{n="true"===n||"false"!==n&&("null"===n?null:+n+""===n?+n:Oe.test(n)?JSON.parse(n):n)}catch(i){}Fe.set(e,t,n)}else n=void 0;return n}function d(e,t,n,r){var i,o=1,a=20,s=r?function(){return r.cur()}:function(){return pe.css(e,t,"")},u=s(),l=n&&n[3]||(pe.cssNumber[t]?"":"px"),c=(pe.cssNumber[t]||"px"!==l&&+u)&&Me.exec(pe.css(e,t));if(c&&c[3]!==l){l=l||c[3],n=n||[],c=+u||1;do o=o||".5",c/=o,pe.style(e,t,c+l);while(o!==(o=s()/u)&&1!==o&&--a)}return n&&(c=+c||+u||0,i=n[1]?c+(n[1]+1)*n[2]:+n[2],r&&(r.unit=l,r.start=c,r.end=i)),i}function h(e){var t,n=e.ownerDocument,r=e.nodeName,i=Be[r];return i?i:(t=n.body.appendChild(n.createElement(r)),i=pe.css(t,"display"),t.parentNode.removeChild(t),"none"===i&&(i="block"),Be[r]=i,i)}function g(e,t){for(var n,r,i=[],o=0,a=e.length;o<a;o++)r=e[o],r.style&&(n=r.style.display,t?("none"===n&&(i[o]=He.get(r,"display")||null,i[o]||(r.style.display="")),""===r.style.display&&We(r)&&(i[o]=h(r))):"none"!==n&&(i[o]="none",He.set(r,"display",n)));for(o=0;o<a;o++)null!=i[o]&&(e[o].style.display=i[o]);return e}function m(e,t){var n="undefined"!=typeof e.getElementsByTagName?e.getElementsByTagName(t||"*"):"undefined"!=typeof e.querySelectorAll?e.querySelectorAll(t||"*"):[];return void 0===t||t&&pe.nodeName(e,t)?pe.merge([e],n):n}function v(e,t){for(var n=0,r=e.length;n<r;n++)He.set(e[n],"globalEval",!t||He.get(t[n],"globalEval"))}function y(e,t,n,r,i){for(var o,a,s,u,l,c,f=t.createDocumentFragment(),p=[],d=0,h=e.length;d<h;d++)if(o=e[d],o||0===o)if("object"===pe.type(o))pe.merge(p,o.nodeType?[o]:o);else if(Ve.test(o)){for(a=a||f.appendChild(t.createElement("div")),s=(ze.exec(o)||["",""])[1].toLowerCase(),u=Ue[s]||Ue._default,a.innerHTML=u[1]+pe.htmlPrefilter(o)+u[2],c=u[0];c--;)a=a.lastChild;pe.merge(p,a.childNodes),a=f.firstChild,a.textContent=""}else p.push(t.createTextNode(o));for(f.textContent="",d=0;o=p[d++];)if(r&&pe.inArray(o,r)>-1)i&&i.push(o);else if(l=pe.contains(o.ownerDocument,o),a=m(f.appendChild(o),"script"),l&&v(a),n)for(c=0;o=a[c++];)Xe.test(o.type||"")&&n.push(o);return f}function x(){return!0}function b(){return!1}function w(){try{return Z.activeElement}catch(e){}}function T(e,t,n,r,i,o){var a,s;if("object"==typeof t){"string"!=typeof n&&(r=r||n,n=void 0);for(s in t)T(e,s,n,r,t[s],o);return e}if(null==r&&null==i?(i=n,r=n=void 0):null==i&&("string"==typeof n?(i=r,r=void 0):(i=r,r=n,n=void 0)),i===!1)i=b;else if(!i)return e;return 1===o&&(a=i,i=function(e){return pe().off(e),a.apply(this,arguments)},i.guid=a.guid||(a.guid=pe.guid++)),e.each(function(){pe.event.add(this,t,i,r,n)})}function C(e,t){return pe.nodeName(e,"table")&&pe.nodeName(11!==t.nodeType?t:t.firstChild,"tr")?e.getElementsByTagName("tbody")[0]||e:e}function k(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function E(e){var t=tt.exec(e.type);return t?e.type=t[1]:e.removeAttribute("type"),e}function S(e,t){var n,r,i,o,a,s,u,l;if(1===t.nodeType){if(He.hasData(e)&&(o=He.access(e),a=He.set(t,o),l=o.events)){delete a.handle,a.events={};for(i in l)for(n=0,r=l[i].length;n<r;n++)pe.event.add(t,i,l[i][n])}Fe.hasData(e)&&(s=Fe.access(e),u=pe.extend({},s),Fe.set(t,u))}}function N(e,t){var n=t.nodeName.toLowerCase();"input"===n&&_e.test(e.type)?t.checked=e.checked:"input"!==n&&"textarea"!==n||(t.defaultValue=e.defaultValue)}function D(e,t,r,i){t=ne.apply([],t);var o,a,s,u,l,c,f=0,p=e.length,d=p-1,h=t[0],g=pe.isFunction(h);if(g||p>1&&"string"==typeof h&&!ce.checkClone&&et.test(h))return e.each(function(n){var o=e.eq(n);g&&(t[0]=h.call(this,n,o.html())),D(o,t,r,i)});if(p&&(o=y(t,e[0].ownerDocument,!1,e,i),a=o.firstChild,1===o.childNodes.length&&(o=a),a||i)){for(s=pe.map(m(o,"script"),k),u=s.length;f<p;f++)l=o,f!==d&&(l=pe.clone(l,!0,!0),u&&pe.merge(s,m(l,"script"))),r.call(e[f],l,f);if(u)for(c=s[s.length-1].ownerDocument,pe.map(s,E),f=0;f<u;f++)l=s[f],Xe.test(l.type||"")&&!He.access(l,"globalEval")&&pe.contains(c,l)&&(l.src?pe._evalUrl&&pe._evalUrl(l.src):n(l.textContent.replace(nt,""),c))}return e}function j(e,t,n){for(var r,i=t?pe.filter(t,e):e,o=0;null!=(r=i[o]);o++)n||1!==r.nodeType||pe.cleanData(m(r)),r.parentNode&&(n&&pe.contains(r.ownerDocument,r)&&v(m(r,"script")),r.parentNode.removeChild(r));return e}function A(e,t,n){var r,i,o,a,s=e.style;return n=n||ot(e),n&&(a=n.getPropertyValue(t)||n[t],""!==a||pe.contains(e.ownerDocument,e)||(a=pe.style(e,t)),!ce.pixelMarginRight()&&it.test(a)&&rt.test(t)&&(r=s.width,i=s.minWidth,o=s.maxWidth,s.minWidth=s.maxWidth=s.width=a,a=n.width,s.width=r,s.minWidth=i,s.maxWidth=o)),void 0!==a?a+"":a}function q(e,t){return{get:function(){return e()?void delete this.get:(this.get=t).apply(this,arguments)}}}function L(e){if(e in ct)return e;for(var t=e[0].toUpperCase()+e.slice(1),n=lt.length;n--;)if(e=lt[n]+t,e in ct)return e}function H(e,t,n){var r=Me.exec(t);return r?Math.max(0,r[2]-(n||0))+(r[3]||"px"):t}function F(e,t,n,r,i){for(var o=n===(r?"border":"content")?4:"width"===t?1:0,a=0;o<4;o+=2)"margin"===n&&(a+=pe.css(e,n+Ie[o],!0,i)),r?("content"===n&&(a-=pe.css(e,"padding"+Ie[o],!0,i)),"margin"!==n&&(a-=pe.css(e,"border"+Ie[o]+"Width",!0,i))):(a+=pe.css(e,"padding"+Ie[o],!0,i),"padding"!==n&&(a+=pe.css(e,"border"+Ie[o]+"Width",!0,i)));return a}function O(e,t,n){var r,i=!0,o=ot(e),a="border-box"===pe.css(e,"boxSizing",!1,o);if(e.getClientRects().length&&(r=e.getBoundingClientRect()[t]),r<=0||null==r){if(r=A(e,t,o),(r<0||null==r)&&(r=e.style[t]),it.test(r))return r;i=a&&(ce.boxSizingReliable()||r===e.style[t]),r=parseFloat(r)||0}return r+F(e,t,n||(a?"border":"content"),i,o)+"px"}function P(e,t,n,r,i){return new P.prototype.init(e,t,n,r,i)}function R(){pt&&(e.requestAnimationFrame(R),pe.fx.tick())}function M(){return e.setTimeout(function(){ft=void 0}),ft=pe.now()}function I(e,t){var n,r=0,i={height:e};for(t=t?1:0;r<4;r+=2-t)n=Ie[r],i["margin"+n]=i["padding"+n]=e;return t&&(i.opacity=i.width=e),i}function W(e,t,n){for(var r,i=(_.tweeners[t]||[]).concat(_.tweeners["*"]),o=0,a=i.length;o<a;o++)if(r=i[o].call(n,t,e))return r}function $(e,t,n){var r,i,o,a,s,u,l,c,f="width"in t||"height"in t,p=this,d={},h=e.style,m=e.nodeType&&We(e),v=He.get(e,"fxshow");n.queue||(a=pe._queueHooks(e,"fx"),null==a.unqueued&&(a.unqueued=0,s=a.empty.fire,a.empty.fire=function(){a.unqueued||s()}),a.unqueued++,p.always(function(){p.always(function(){a.unqueued--,pe.queue(e,"fx").length||a.empty.fire()})}));for(r in t)if(i=t[r],dt.test(i)){if(delete t[r],o=o||"toggle"===i,i===(m?"hide":"show")){if("show"!==i||!v||void 0===v[r])continue;m=!0}d[r]=v&&v[r]||pe.style(e,r)}if(u=!pe.isEmptyObject(t),u||!pe.isEmptyObject(d)){f&&1===e.nodeType&&(n.overflow=[h.overflow,h.overflowX,h.overflowY],l=v&&v.display,null==l&&(l=He.get(e,"display")),c=pe.css(e,"display"),"none"===c&&(l?c=l:(g([e],!0),l=e.style.display||l,c=pe.css(e,"display"),g([e]))),("inline"===c||"inline-block"===c&&null!=l)&&"none"===pe.css(e,"float")&&(u||(p.done(function(){h.display=l}),null==l&&(c=h.display,l="none"===c?"":c)),h.display="inline-block")),n.overflow&&(h.overflow="hidden",p.always(function(){h.overflow=n.overflow[0],h.overflowX=n.overflow[1],h.overflowY=n.overflow[2]})),u=!1;for(r in d)u||(v?"hidden"in v&&(m=v.hidden):v=He.access(e,"fxshow",{display:l}),o&&(v.hidden=!m),m&&g([e],!0),p.done(function(){m||g([e]),He.remove(e,"fxshow");for(r in d)pe.style(e,r,d[r])})),u=W(m?v[r]:0,r,p),r in v||(v[r]=u.start,m&&(u.end=u.start,u.start=0))}}function B(e,t){var n,r,i,o,a;for(n in e)if(r=pe.camelCase(n),i=t[r],o=e[n],pe.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),a=pe.cssHooks[r],a&&"expand"in a){o=a.expand(o),delete e[r];for(n in o)n in e||(e[n]=o[n],t[n]=i)}else t[r]=i}function _(e,t,n){var r,i,o=0,a=_.prefilters.length,s=pe.Deferred().always(function(){delete u.elem}),u=function(){if(i)return!1;for(var t=ft||M(),n=Math.max(0,l.startTime+l.duration-t),r=n/l.duration||0,o=1-r,a=0,u=l.tweens.length;a<u;a++)l.tweens[a].run(o);return s.notifyWith(e,[l,o,n]),o<1&&u?n:(s.resolveWith(e,[l]),!1)},l=s.promise({elem:e,props:pe.extend({},t),opts:pe.extend(!0,{specialEasing:{},easing:pe.easing._default},n),originalProperties:t,originalOptions:n,startTime:ft||M(),duration:n.duration,tweens:[],createTween:function(t,n){var r=pe.Tween(e,l.opts,t,n,l.opts.specialEasing[t]||l.opts.easing);return l.tweens.push(r),r},stop:function(t){var n=0,r=t?l.tweens.length:0;if(i)return this;for(i=!0;n<r;n++)l.tweens[n].run(1);return t?(s.notifyWith(e,[l,1,0]),s.resolveWith(e,[l,t])):s.rejectWith(e,[l,t]),this}}),c=l.props;for(B(c,l.opts.specialEasing);o<a;o++)if(r=_.prefilters[o].call(l,e,c,l.opts))return pe.isFunction(r.stop)&&(pe._queueHooks(l.elem,l.opts.queue).stop=pe.proxy(r.stop,r)),r;return pe.map(c,W,l),pe.isFunction(l.opts.start)&&l.opts.start.call(e,l),pe.fx.timer(pe.extend(u,{elem:e,anim:l,queue:l.opts.queue})),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always)}function z(e){return e.getAttribute&&e.getAttribute("class")||""}function X(e,t,n,r){var i;if(pe.isArray(t))pe.each(t,function(t,i){n||St.test(e)?r(e,i):X(e+"["+("object"==typeof i&&null!=i?t:"")+"]",i,n,r)});else if(n||"object"!==pe.type(t))r(e,t);else for(i in t)X(e+"["+i+"]",t[i],n,r)}function U(e){return function(t,n){"string"!=typeof t&&(n=t,t="*");var r,i=0,o=t.toLowerCase().match(De)||[];if(pe.isFunction(n))for(;r=o[i++];)"+"===r[0]?(r=r.slice(1)||"*",(e[r]=e[r]||[]).unshift(n)):(e[r]=e[r]||[]).push(n)}}function V(e,t,n,r){function i(s){var u;return o[s]=!0,pe.each(e[s]||[],function(e,s){var l=s(t,n,r);return"string"!=typeof l||a||o[l]?a?!(u=l):void 0:(t.dataTypes.unshift(l),i(l),!1)}),u}var o={},a=e===Mt;return i(t.dataTypes[0])||!o["*"]&&i("*")}function G(e,t){var n,r,i=pe.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&pe.extend(!0,e,r),e}function Y(e,t,n){for(var r,i,o,a,s=e.contents,u=e.dataTypes;"*"===u[0];)u.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in s)if(s[i]&&s[i].test(r)){u.unshift(i);break}if(u[0]in n)o=u[0];else{for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i;break}a||(a=i)}o=o||a}if(o)return o!==u[0]&&u.unshift(o),n[o]}function Q(e,t,n,r){var i,o,a,s,u,l={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)l[a.toLowerCase()]=e.converters[a];for(o=c.shift();o;)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if("*"===o)o=u;else if("*"!==u&&u!==o){if(a=l[u+" "+o]||l["* "+o],!a)for(i in l)if(s=i.split(" "),s[1]===o&&(a=l[u+" "+s[0]]||l["* "+s[0]])){a===!0?a=l[i]:l[i]!==!0&&(o=s[0],c.unshift(s[1]));break}if(a!==!0)if(a&&e["throws"])t=a(t);else try{t=a(t)}catch(f){return{state:"parsererror",error:a?f:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}function J(e){return pe.isWindow(e)?e:9===e.nodeType&&e.defaultView}var K=[],Z=e.document,ee=Object.getPrototypeOf,te=K.slice,ne=K.concat,re=K.push,ie=K.indexOf,oe={},ae=oe.toString,se=oe.hasOwnProperty,ue=se.toString,le=ue.call(Object),ce={},fe="3.1.0",pe=function(e,t){return new pe.fn.init(e,t)},de=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,he=/^-ms-/,ge=/-([a-z])/g,me=function(e,t){return t.toUpperCase()};pe.fn=pe.prototype={jquery:fe,constructor:pe,length:0,toArray:function(){return te.call(this)},get:function(e){return null!=e?e<0?this[e+this.length]:this[e]:te.call(this)},pushStack:function(e){var t=pe.merge(this.constructor(),e);return t.prevObject=this,t},each:function(e){return pe.each(this,e)},map:function(e){return this.pushStack(pe.map(this,function(t,n){return e.call(t,n,t)}))},slice:function(){return this.pushStack(te.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(n>=0&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:re,sort:K.sort,splice:K.splice},pe.extend=pe.fn.extend=function(){var e,t,n,r,i,o,a=arguments[0]||{},s=1,u=arguments.length,l=!1;for("boolean"==typeof a&&(l=a,a=arguments[s]||{},s++),"object"==typeof a||pe.isFunction(a)||(a={}),s===u&&(a=this,s--);s<u;s++)if(null!=(e=arguments[s]))for(t in e)n=a[t],r=e[t],a!==r&&(l&&r&&(pe.isPlainObject(r)||(i=pe.isArray(r)))?(i?(i=!1,o=n&&pe.isArray(n)?n:[]):o=n&&pe.isPlainObject(n)?n:{},a[t]=pe.extend(l,o,r)):void 0!==r&&(a[t]=r));return a},pe.extend({expando:"jQuery"+(fe+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isFunction:function(e){return"function"===pe.type(e)},isArray:Array.isArray,isWindow:function(e){return null!=e&&e===e.window},isNumeric:function(e){var t=pe.type(e);return("number"===t||"string"===t)&&!isNaN(e-parseFloat(e))},isPlainObject:function(e){var t,n;return!(!e||"[object Object]"!==ae.call(e))&&(!(t=ee(e))||(n=se.call(t,"constructor")&&t.constructor,"function"==typeof n&&ue.call(n)===le))},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},type:function(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?oe[ae.call(e)]||"object":typeof e},globalEval:function(e){n(e)},camelCase:function(e){return e.replace(he,"ms-").replace(ge,me)},nodeName:function(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()},each:function(e,t){var n,i=0;if(r(e))for(n=e.length;i<n&&t.call(e[i],i,e[i])!==!1;i++);else for(i in e)if(t.call(e[i],i,e[i])===!1)break;return e},trim:function(e){return null==e?"":(e+"").replace(de,"")},makeArray:function(e,t){var n=t||[];return null!=e&&(r(Object(e))?pe.merge(n,"string"==typeof e?[e]:e):re.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:ie.call(t,e,n)},merge:function(e,t){for(var n=+t.length,r=0,i=e.length;r<n;r++)e[i++]=t[r];return e.length=i,e},grep:function(e,t,n){for(var r,i=[],o=0,a=e.length,s=!n;o<a;o++)r=!t(e[o],o),r!==s&&i.push(e[o]);return i},map:function(e,t,n){var i,o,a=0,s=[];if(r(e))for(i=e.length;a<i;a++)o=t(e[a],a,n),null!=o&&s.push(o);else for(a in e)o=t(e[a],a,n),null!=o&&s.push(o);return ne.apply([],s)},guid:1,proxy:function(e,t){var n,r,i;if("string"==typeof t&&(n=e[t],t=e,e=n),pe.isFunction(e))return r=te.call(arguments,2),i=function(){return e.apply(t||this,r.concat(te.call(arguments)))},i.guid=e.guid=e.guid||pe.guid++,i},now:Date.now,support:ce}),"function"==typeof Symbol&&(pe.fn[Symbol.iterator]=K[Symbol.iterator]),pe.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){oe["[object "+t+"]"]=t.toLowerCase()});var ve=/*!
 * Sizzle CSS Selector Engine v2.3.0
 * https://sizzlejs.com/
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2016-01-04
 */
function(e){function t(e,t,n,r){var i,o,a,s,u,l,c,p=t&&t.ownerDocument,h=t?t.nodeType:9;if(n=n||[],"string"!=typeof e||!e||1!==h&&9!==h&&11!==h)return n;if(!r&&((t?t.ownerDocument||t:$)!==H&&L(t),t=t||H,O)){if(11!==h&&(u=ve.exec(e)))if(i=u[1]){if(9===h){if(!(a=t.getElementById(i)))return n;if(a.id===i)return n.push(a),n}else if(p&&(a=p.getElementById(i))&&I(t,a)&&a.id===i)return n.push(a),n}else{if(u[2])return K.apply(n,t.getElementsByTagName(e)),n;if((i=u[3])&&T.getElementsByClassName&&t.getElementsByClassName)return K.apply(n,t.getElementsByClassName(i)),n}if(T.qsa&&!U[e+" "]&&(!P||!P.test(e))){if(1!==h)p=t,c=e;else if("object"!==t.nodeName.toLowerCase()){for((s=t.getAttribute("id"))?s=s.replace(we,Te):t.setAttribute("id",s=W),l=S(e),o=l.length;o--;)l[o]="#"+s+" "+d(l[o]);c=l.join(","),p=ye.test(e)&&f(t.parentNode)||t}if(c)try{return K.apply(n,p.querySelectorAll(c)),n}catch(g){}finally{s===W&&t.removeAttribute("id")}}}return D(e.replace(se,"$1"),t,n,r)}function n(){function e(n,r){return t.push(n+" ")>C.cacheLength&&delete e[t.shift()],e[n+" "]=r}var t=[];return e}function r(e){return e[W]=!0,e}function i(e){var t=H.createElement("fieldset");try{return!!e(t)}catch(n){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function o(e,t){for(var n=e.split("|"),r=n.length;r--;)C.attrHandle[n[r]]=t}function a(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&e.sourceIndex-t.sourceIndex;if(r)return r;if(n)for(;n=n.nextSibling;)if(n===t)return-1;return e?1:-1}function s(e){return function(t){var n=t.nodeName.toLowerCase();return"input"===n&&t.type===e}}function u(e){return function(t){var n=t.nodeName.toLowerCase();return("input"===n||"button"===n)&&t.type===e}}function l(e){return function(t){return"label"in t&&t.disabled===e||"form"in t&&t.disabled===e||"form"in t&&t.disabled===!1&&(t.isDisabled===e||t.isDisabled!==!e&&("label"in t||!ke(t))!==e)}}function c(e){return r(function(t){return t=+t,r(function(n,r){for(var i,o=e([],n.length,t),a=o.length;a--;)n[i=o[a]]&&(n[i]=!(r[i]=n[i]))})})}function f(e){return e&&"undefined"!=typeof e.getElementsByTagName&&e}function p(){}function d(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value;return r}function h(e,t,n){var r=t.dir,i=t.next,o=i||r,a=n&&"parentNode"===o,s=_++;return t.first?function(t,n,i){for(;t=t[r];)if(1===t.nodeType||a)return e(t,n,i)}:function(t,n,u){var l,c,f,p=[B,s];if(u){for(;t=t[r];)if((1===t.nodeType||a)&&e(t,n,u))return!0}else for(;t=t[r];)if(1===t.nodeType||a)if(f=t[W]||(t[W]={}),c=f[t.uniqueID]||(f[t.uniqueID]={}),i&&i===t.nodeName.toLowerCase())t=t[r]||t;else{if((l=c[o])&&l[0]===B&&l[1]===s)return p[2]=l[2];if(c[o]=p,p[2]=e(t,n,u))return!0}}}function g(e){return e.length>1?function(t,n,r){for(var i=e.length;i--;)if(!e[i](t,n,r))return!1;return!0}:e[0]}function m(e,n,r){for(var i=0,o=n.length;i<o;i++)t(e,n[i],r);return r}function v(e,t,n,r,i){for(var o,a=[],s=0,u=e.length,l=null!=t;s<u;s++)(o=e[s])&&(n&&!n(o,r,i)||(a.push(o),l&&t.push(s)));return a}function y(e,t,n,i,o,a){return i&&!i[W]&&(i=y(i)),o&&!o[W]&&(o=y(o,a)),r(function(r,a,s,u){var l,c,f,p=[],d=[],h=a.length,g=r||m(t||"*",s.nodeType?[s]:s,[]),y=!e||!r&&t?g:v(g,p,e,s,u),x=n?o||(r?e:h||i)?[]:a:y;if(n&&n(y,x,s,u),i)for(l=v(x,d),i(l,[],s,u),c=l.length;c--;)(f=l[c])&&(x[d[c]]=!(y[d[c]]=f));if(r){if(o||e){if(o){for(l=[],c=x.length;c--;)(f=x[c])&&l.push(y[c]=f);o(null,x=[],l,u)}for(c=x.length;c--;)(f=x[c])&&(l=o?ee(r,f):p[c])>-1&&(r[l]=!(a[l]=f))}}else x=v(x===a?x.splice(h,x.length):x),o?o(null,a,x,u):K.apply(a,x)})}function x(e){for(var t,n,r,i=e.length,o=C.relative[e[0].type],a=o||C.relative[" "],s=o?1:0,u=h(function(e){return e===t},a,!0),l=h(function(e){return ee(t,e)>-1},a,!0),c=[function(e,n,r){var i=!o&&(r||n!==j)||((t=n).nodeType?u(e,n,r):l(e,n,r));return t=null,i}];s<i;s++)if(n=C.relative[e[s].type])c=[h(g(c),n)];else{if(n=C.filter[e[s].type].apply(null,e[s].matches),n[W]){for(r=++s;r<i&&!C.relative[e[r].type];r++);return y(s>1&&g(c),s>1&&d(e.slice(0,s-1).concat({value:" "===e[s-2].type?"*":""})).replace(se,"$1"),n,s<r&&x(e.slice(s,r)),r<i&&x(e=e.slice(r)),r<i&&d(e))}c.push(n)}return g(c)}function b(e,n){var i=n.length>0,o=e.length>0,a=function(r,a,s,u,l){var c,f,p,d=0,h="0",g=r&&[],m=[],y=j,x=r||o&&C.find.TAG("*",l),b=B+=null==y?1:Math.random()||.1,w=x.length;for(l&&(j=a===H||a||l);h!==w&&null!=(c=x[h]);h++){if(o&&c){for(f=0,a||c.ownerDocument===H||(L(c),s=!O);p=e[f++];)if(p(c,a||H,s)){u.push(c);break}l&&(B=b)}i&&((c=!p&&c)&&d--,r&&g.push(c))}if(d+=h,i&&h!==d){for(f=0;p=n[f++];)p(g,m,a,s);if(r){if(d>0)for(;h--;)g[h]||m[h]||(m[h]=Q.call(u));m=v(m)}K.apply(u,m),l&&!r&&m.length>0&&d+n.length>1&&t.uniqueSort(u)}return l&&(B=b,j=y),g};return i?r(a):a}var w,T,C,k,E,S,N,D,j,A,q,L,H,F,O,P,R,M,I,W="sizzle"+1*new Date,$=e.document,B=0,_=0,z=n(),X=n(),U=n(),V=function(e,t){return e===t&&(q=!0),0},G={}.hasOwnProperty,Y=[],Q=Y.pop,J=Y.push,K=Y.push,Z=Y.slice,ee=function(e,t){for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1},te="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",ne="[\\x20\\t\\r\\n\\f]",re="(?:\\\\.|[\\w-]|[^\0-\\xa0])+",ie="\\["+ne+"*("+re+")(?:"+ne+"*([*^$|!~]?=)"+ne+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+re+"))|)"+ne+"*\\]",oe=":("+re+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+ie+")*)|.*)\\)|)",ae=new RegExp(ne+"+","g"),se=new RegExp("^"+ne+"+|((?:^|[^\\\\])(?:\\\\.)*)"+ne+"+$","g"),ue=new RegExp("^"+ne+"*,"+ne+"*"),le=new RegExp("^"+ne+"*([>+~]|"+ne+")"+ne+"*"),ce=new RegExp("="+ne+"*([^\\]'\"]*?)"+ne+"*\\]","g"),fe=new RegExp(oe),pe=new RegExp("^"+re+"$"),de={ID:new RegExp("^#("+re+")"),CLASS:new RegExp("^\\.("+re+")"),TAG:new RegExp("^("+re+"|[*])"),ATTR:new RegExp("^"+ie),PSEUDO:new RegExp("^"+oe),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+ne+"*(even|odd|(([+-]|)(\\d*)n|)"+ne+"*(?:([+-]|)"+ne+"*(\\d+)|))"+ne+"*\\)|)","i"),bool:new RegExp("^(?:"+te+")$","i"),needsContext:new RegExp("^"+ne+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+ne+"*((?:-\\d)?\\d*)"+ne+"*\\)|)(?=[^-]|$)","i")},he=/^(?:input|select|textarea|button)$/i,ge=/^h\d$/i,me=/^[^{]+\{\s*\[native \w/,ve=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ye=/[+~]/,xe=new RegExp("\\\\([\\da-f]{1,6}"+ne+"?|("+ne+")|.)","ig"),be=function(e,t,n){var r="0x"+t-65536;return r!==r||n?t:r<0?String.fromCharCode(r+65536):String.fromCharCode(r>>10|55296,1023&r|56320)},we=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g,Te=function(e,t){return t?"\0"===e?"�":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e},Ce=function(){L()},ke=h(function(e){return e.disabled===!0},{dir:"parentNode",next:"legend"});try{K.apply(Y=Z.call($.childNodes),$.childNodes),Y[$.childNodes.length].nodeType}catch(Ee){K={apply:Y.length?function(e,t){J.apply(e,Z.call(t))}:function(e,t){for(var n=e.length,r=0;e[n++]=t[r++];);e.length=n-1}}}T=t.support={},E=t.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return!!t&&"HTML"!==t.nodeName},L=t.setDocument=function(e){var t,n,r=e?e.ownerDocument||e:$;return r!==H&&9===r.nodeType&&r.documentElement?(H=r,F=H.documentElement,O=!E(H),$!==H&&(n=H.defaultView)&&n.top!==n&&(n.addEventListener?n.addEventListener("unload",Ce,!1):n.attachEvent&&n.attachEvent("onunload",Ce)),T.attributes=i(function(e){return e.className="i",!e.getAttribute("className")}),T.getElementsByTagName=i(function(e){return e.appendChild(H.createComment("")),!e.getElementsByTagName("*").length}),T.getElementsByClassName=me.test(H.getElementsByClassName),T.getById=i(function(e){return F.appendChild(e).id=W,!H.getElementsByName||!H.getElementsByName(W).length}),T.getById?(C.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&O){var n=t.getElementById(e);return n?[n]:[]}},C.filter.ID=function(e){var t=e.replace(xe,be);return function(e){return e.getAttribute("id")===t}}):(delete C.find.ID,C.filter.ID=function(e){var t=e.replace(xe,be);return function(e){var n="undefined"!=typeof e.getAttributeNode&&e.getAttributeNode("id");return n&&n.value===t}}),C.find.TAG=T.getElementsByTagName?function(e,t){return"undefined"!=typeof t.getElementsByTagName?t.getElementsByTagName(e):T.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){for(;n=o[i++];)1===n.nodeType&&r.push(n);return r}return o},C.find.CLASS=T.getElementsByClassName&&function(e,t){if("undefined"!=typeof t.getElementsByClassName&&O)return t.getElementsByClassName(e)},R=[],P=[],(T.qsa=me.test(H.querySelectorAll))&&(i(function(e){F.appendChild(e).innerHTML="<a id='"+W+"'></a><select id='"+W+"-\r\\' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&P.push("[*^$]="+ne+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||P.push("\\["+ne+"*(?:value|"+te+")"),e.querySelectorAll("[id~="+W+"-]").length||P.push("~="),e.querySelectorAll(":checked").length||P.push(":checked"),e.querySelectorAll("a#"+W+"+*").length||P.push(".#.+[+~]")}),i(function(e){e.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var t=H.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&P.push("name"+ne+"*[*^$|!~]?="),2!==e.querySelectorAll(":enabled").length&&P.push(":enabled",":disabled"),F.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&P.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),P.push(",.*:")})),(T.matchesSelector=me.test(M=F.matches||F.webkitMatchesSelector||F.mozMatchesSelector||F.oMatchesSelector||F.msMatchesSelector))&&i(function(e){T.disconnectedMatch=M.call(e,"*"),M.call(e,"[s!='']:x"),R.push("!=",oe)}),P=P.length&&new RegExp(P.join("|")),R=R.length&&new RegExp(R.join("|")),t=me.test(F.compareDocumentPosition),I=t||me.test(F.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)for(;t=t.parentNode;)if(t===e)return!0;return!1},V=t?function(e,t){if(e===t)return q=!0,0;var n=!e.compareDocumentPosition-!t.compareDocumentPosition;return n?n:(n=(e.ownerDocument||e)===(t.ownerDocument||t)?e.compareDocumentPosition(t):1,1&n||!T.sortDetached&&t.compareDocumentPosition(e)===n?e===H||e.ownerDocument===$&&I($,e)?-1:t===H||t.ownerDocument===$&&I($,t)?1:A?ee(A,e)-ee(A,t):0:4&n?-1:1)}:function(e,t){if(e===t)return q=!0,0;var n,r=0,i=e.parentNode,o=t.parentNode,s=[e],u=[t];if(!i||!o)return e===H?-1:t===H?1:i?-1:o?1:A?ee(A,e)-ee(A,t):0;if(i===o)return a(e,t);for(n=e;n=n.parentNode;)s.unshift(n);for(n=t;n=n.parentNode;)u.unshift(n);for(;s[r]===u[r];)r++;return r?a(s[r],u[r]):s[r]===$?-1:u[r]===$?1:0},H):H},t.matches=function(e,n){return t(e,null,null,n)},t.matchesSelector=function(e,n){if((e.ownerDocument||e)!==H&&L(e),n=n.replace(ce,"='$1']"),T.matchesSelector&&O&&!U[n+" "]&&(!R||!R.test(n))&&(!P||!P.test(n)))try{var r=M.call(e,n);if(r||T.disconnectedMatch||e.document&&11!==e.document.nodeType)return r}catch(i){}return t(n,H,null,[e]).length>0},t.contains=function(e,t){return(e.ownerDocument||e)!==H&&L(e),I(e,t)},t.attr=function(e,t){(e.ownerDocument||e)!==H&&L(e);var n=C.attrHandle[t.toLowerCase()],r=n&&G.call(C.attrHandle,t.toLowerCase())?n(e,t,!O):void 0;return void 0!==r?r:T.attributes||!O?e.getAttribute(t):(r=e.getAttributeNode(t))&&r.specified?r.value:null},t.escape=function(e){return(e+"").replace(we,Te)},t.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},t.uniqueSort=function(e){var t,n=[],r=0,i=0;if(q=!T.detectDuplicates,A=!T.sortStable&&e.slice(0),e.sort(V),q){for(;t=e[i++];)t===e[i]&&(r=n.push(i));for(;r--;)e.splice(n[r],1)}return A=null,e},k=t.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=k(e)}else if(3===i||4===i)return e.nodeValue}else for(;t=e[r++];)n+=k(t);return n},C=t.selectors={cacheLength:50,createPseudo:r,match:de,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(xe,be),e[3]=(e[3]||e[4]||e[5]||"").replace(xe,be),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||t.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&t.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return de.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&fe.test(n)&&(t=S(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(xe,be).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=z[e+" "];return t||(t=new RegExp("(^|"+ne+")"+e+"("+ne+"|$)"))&&z(e,function(e){return t.test("string"==typeof e.className&&e.className||"undefined"!=typeof e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(e,n,r){return function(i){var o=t.attr(i,e);return null==o?"!="===n:!n||(o+="","="===n?o===r:"!="===n?o!==r:"^="===n?r&&0===o.indexOf(r):"*="===n?r&&o.indexOf(r)>-1:"$="===n?r&&o.slice(-r.length)===r:"~="===n?(" "+o.replace(ae," ")+" ").indexOf(r)>-1:"|="===n&&(o===r||o.slice(0,r.length+1)===r+"-"))}},CHILD:function(e,t,n,r,i){var o="nth"!==e.slice(0,3),a="last"!==e.slice(-4),s="of-type"===t;return 1===r&&0===i?function(e){return!!e.parentNode}:function(t,n,u){var l,c,f,p,d,h,g=o!==a?"nextSibling":"previousSibling",m=t.parentNode,v=s&&t.nodeName.toLowerCase(),y=!u&&!s,x=!1;if(m){if(o){for(;g;){for(p=t;p=p[g];)if(s?p.nodeName.toLowerCase()===v:1===p.nodeType)return!1;h=g="only"===e&&!h&&"nextSibling"}return!0}if(h=[a?m.firstChild:m.lastChild],a&&y){for(p=m,f=p[W]||(p[W]={}),c=f[p.uniqueID]||(f[p.uniqueID]={}),l=c[e]||[],d=l[0]===B&&l[1],x=d&&l[2],p=d&&m.childNodes[d];p=++d&&p&&p[g]||(x=d=0)||h.pop();)if(1===p.nodeType&&++x&&p===t){c[e]=[B,d,x];break}}else if(y&&(p=t,f=p[W]||(p[W]={}),c=f[p.uniqueID]||(f[p.uniqueID]={}),l=c[e]||[],d=l[0]===B&&l[1],x=d),x===!1)for(;(p=++d&&p&&p[g]||(x=d=0)||h.pop())&&((s?p.nodeName.toLowerCase()!==v:1!==p.nodeType)||!++x||(y&&(f=p[W]||(p[W]={}),c=f[p.uniqueID]||(f[p.uniqueID]={}),c[e]=[B,x]),p!==t)););return x-=i,x===r||x%r===0&&x/r>=0}}},PSEUDO:function(e,n){var i,o=C.pseudos[e]||C.setFilters[e.toLowerCase()]||t.error("unsupported pseudo: "+e);return o[W]?o(n):o.length>1?(i=[e,e,"",n],C.setFilters.hasOwnProperty(e.toLowerCase())?r(function(e,t){for(var r,i=o(e,n),a=i.length;a--;)r=ee(e,i[a]),e[r]=!(t[r]=i[a])}):function(e){return o(e,0,i)}):o}},pseudos:{not:r(function(e){var t=[],n=[],i=N(e.replace(se,"$1"));return i[W]?r(function(e,t,n,r){for(var o,a=i(e,null,r,[]),s=e.length;s--;)(o=a[s])&&(e[s]=!(t[s]=o))}):function(e,r,o){return t[0]=e,i(t,null,o,n),t[0]=null,!n.pop()}}),has:r(function(e){return function(n){return t(e,n).length>0}}),contains:r(function(e){return e=e.replace(xe,be),function(t){return(t.textContent||t.innerText||k(t)).indexOf(e)>-1}}),lang:r(function(e){return pe.test(e||"")||t.error("unsupported lang: "+e),e=e.replace(xe,be).toLowerCase(),function(t){var n;do if(n=O?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang"))return n=n.toLowerCase(),n===e||0===n.indexOf(e+"-");while((t=t.parentNode)&&1===t.nodeType);return!1}}),target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===F},focus:function(e){return e===H.activeElement&&(!H.hasFocus||H.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:l(!1),disabled:l(!0),checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,e.selected===!0},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!C.pseudos.empty(e)},header:function(e){return ge.test(e.nodeName)},input:function(e){return he.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:c(function(){return[0]}),last:c(function(e,t){return[t-1]}),eq:c(function(e,t,n){return[n<0?n+t:n]}),even:c(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:c(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:c(function(e,t,n){for(var r=n<0?n+t:n;--r>=0;)e.push(r);return e}),gt:c(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}},C.pseudos.nth=C.pseudos.eq;for(w in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})C.pseudos[w]=s(w);for(w in{submit:!0,reset:!0})C.pseudos[w]=u(w);return p.prototype=C.filters=C.pseudos,C.setFilters=new p,S=t.tokenize=function(e,n){var r,i,o,a,s,u,l,c=X[e+" "];if(c)return n?0:c.slice(0);for(s=e,u=[],l=C.preFilter;s;){r&&!(i=ue.exec(s))||(i&&(s=s.slice(i[0].length)||s),u.push(o=[])),r=!1,(i=le.exec(s))&&(r=i.shift(),o.push({value:r,type:i[0].replace(se," ")}),s=s.slice(r.length));for(a in C.filter)!(i=de[a].exec(s))||l[a]&&!(i=l[a](i))||(r=i.shift(),o.push({value:r,type:a,matches:i}),s=s.slice(r.length));if(!r)break}return n?s.length:s?t.error(e):X(e,u).slice(0)},N=t.compile=function(e,t){var n,r=[],i=[],o=U[e+" "];if(!o){for(t||(t=S(e)),n=t.length;n--;)o=x(t[n]),o[W]?r.push(o):i.push(o);o=U(e,b(i,r)),o.selector=e}return o},D=t.select=function(e,t,n,r){var i,o,a,s,u,l="function"==typeof e&&e,c=!r&&S(e=l.selector||e);if(n=n||[],1===c.length){if(o=c[0]=c[0].slice(0),o.length>2&&"ID"===(a=o[0]).type&&T.getById&&9===t.nodeType&&O&&C.relative[o[1].type]){if(t=(C.find.ID(a.matches[0].replace(xe,be),t)||[])[0],!t)return n;l&&(t=t.parentNode),e=e.slice(o.shift().value.length)}for(i=de.needsContext.test(e)?0:o.length;i--&&(a=o[i],!C.relative[s=a.type]);)if((u=C.find[s])&&(r=u(a.matches[0].replace(xe,be),ye.test(o[0].type)&&f(t.parentNode)||t))){if(o.splice(i,1),e=r.length&&d(o),!e)return K.apply(n,r),n;break}}return(l||N(e,c))(r,t,!O,n,!t||ye.test(e)&&f(t.parentNode)||t),n},T.sortStable=W.split("").sort(V).join("")===W,T.detectDuplicates=!!q,L(),T.sortDetached=i(function(e){return 1&e.compareDocumentPosition(H.createElement("fieldset"))}),i(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||o("type|href|height|width",function(e,t,n){if(!n)return e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),T.attributes&&i(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||o("value",function(e,t,n){if(!n&&"input"===e.nodeName.toLowerCase())return e.defaultValue}),i(function(e){return null==e.getAttribute("disabled")})||o(te,function(e,t,n){var r;if(!n)return e[t]===!0?t.toLowerCase():(r=e.getAttributeNode(t))&&r.specified?r.value:null}),t}(e);pe.find=ve,pe.expr=ve.selectors,pe.expr[":"]=pe.expr.pseudos,pe.uniqueSort=pe.unique=ve.uniqueSort,pe.text=ve.getText,pe.isXMLDoc=ve.isXML,pe.contains=ve.contains,pe.escapeSelector=ve.escape;var ye=function(e,t,n){for(var r=[],i=void 0!==n;(e=e[t])&&9!==e.nodeType;)if(1===e.nodeType){if(i&&pe(e).is(n))break;r.push(e)}return r},xe=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n},be=pe.expr.match.needsContext,we=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,Te=/^.[^:#\[\.,]*$/;pe.filter=function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?pe.find.matchesSelector(r,e)?[r]:[]:pe.find.matches(e,pe.grep(t,function(e){return 1===e.nodeType}))},pe.fn.extend({find:function(e){var t,n,r=this.length,i=this;if("string"!=typeof e)return this.pushStack(pe(e).filter(function(){for(t=0;t<r;t++)if(pe.contains(i[t],this))return!0}));for(n=this.pushStack([]),t=0;t<r;t++)pe.find(e,i[t],n);return r>1?pe.uniqueSort(n):n},filter:function(e){return this.pushStack(i(this,e||[],!1))},not:function(e){return this.pushStack(i(this,e||[],!0))},is:function(e){return!!i(this,"string"==typeof e&&be.test(e)?pe(e):e||[],!1).length}});var Ce,ke=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,Ee=pe.fn.init=function(e,t,n){var r,i;if(!e)return this;if(n=n||Ce,"string"==typeof e){if(r="<"===e[0]&&">"===e[e.length-1]&&e.length>=3?[null,e,null]:ke.exec(e),!r||!r[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(r[1]){if(t=t instanceof pe?t[0]:t,pe.merge(this,pe.parseHTML(r[1],t&&t.nodeType?t.ownerDocument||t:Z,!0)),we.test(r[1])&&pe.isPlainObject(t))for(r in t)pe.isFunction(this[r])?this[r](t[r]):this.attr(r,t[r]);return this}return i=Z.getElementById(r[2]),i&&(this[0]=i,this.length=1),this}return e.nodeType?(this[0]=e,this.length=1,this):pe.isFunction(e)?void 0!==n.ready?n.ready(e):e(pe):pe.makeArray(e,this)};Ee.prototype=pe.fn,Ce=pe(Z);var Se=/^(?:parents|prev(?:Until|All))/,Ne={children:!0,contents:!0,next:!0,prev:!0};pe.fn.extend({has:function(e){var t=pe(e,this),n=t.length;return this.filter(function(){for(var e=0;e<n;e++)if(pe.contains(this,t[e]))return!0})},closest:function(e,t){var n,r=0,i=this.length,o=[],a="string"!=typeof e&&pe(e);if(!be.test(e))for(;r<i;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(a?a.index(n)>-1:1===n.nodeType&&pe.find.matchesSelector(n,e))){o.push(n);break}return this.pushStack(o.length>1?pe.uniqueSort(o):o)},index:function(e){return e?"string"==typeof e?ie.call(pe(e),this[0]):ie.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(pe.uniqueSort(pe.merge(this.get(),pe(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),pe.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return ye(e,"parentNode")},parentsUntil:function(e,t,n){return ye(e,"parentNode",n)},next:function(e){return o(e,"nextSibling")},prev:function(e){return o(e,"previousSibling")},nextAll:function(e){return ye(e,"nextSibling")},prevAll:function(e){return ye(e,"previousSibling")},nextUntil:function(e,t,n){return ye(e,"nextSibling",n)},prevUntil:function(e,t,n){return ye(e,"previousSibling",n)},siblings:function(e){return xe((e.parentNode||{}).firstChild,e)},children:function(e){return xe(e.firstChild)},contents:function(e){return e.contentDocument||pe.merge([],e.childNodes)}},function(e,t){pe.fn[e]=function(n,r){var i=pe.map(this,t,n);return"Until"!==e.slice(-5)&&(r=n),r&&"string"==typeof r&&(i=pe.filter(r,i)),this.length>1&&(Ne[e]||pe.uniqueSort(i),Se.test(e)&&i.reverse()),this.pushStack(i)}});var De=/\S+/g;pe.Callbacks=function(e){e="string"==typeof e?a(e):pe.extend({},e);var t,n,r,i,o=[],s=[],u=-1,l=function(){for(i=e.once,r=t=!0;s.length;u=-1)for(n=s.shift();++u<o.length;)o[u].apply(n[0],n[1])===!1&&e.stopOnFalse&&(u=o.length,n=!1);e.memory||(n=!1),t=!1,i&&(o=n?[]:"")},c={add:function(){return o&&(n&&!t&&(u=o.length-1,s.push(n)),function r(t){pe.each(t,function(t,n){pe.isFunction(n)?e.unique&&c.has(n)||o.push(n):n&&n.length&&"string"!==pe.type(n)&&r(n)})}(arguments),n&&!t&&l()),this},remove:function(){return pe.each(arguments,function(e,t){for(var n;(n=pe.inArray(t,o,n))>-1;)o.splice(n,1),n<=u&&u--}),this},has:function(e){return e?pe.inArray(e,o)>-1:o.length>0},empty:function(){return o&&(o=[]),this},disable:function(){return i=s=[],o=n="",this},disabled:function(){return!o},lock:function(){return i=s=[],n||t||(o=n=""),this},locked:function(){return!!i},fireWith:function(e,n){return i||(n=n||[],n=[e,n.slice?n.slice():n],s.push(n),t||l()),this},fire:function(){return c.fireWith(this,arguments),this},fired:function(){return!!r}};return c},pe.extend({Deferred:function(t){var n=[["notify","progress",pe.Callbacks("memory"),pe.Callbacks("memory"),2],["resolve","done",pe.Callbacks("once memory"),pe.Callbacks("once memory"),0,"resolved"],["reject","fail",pe.Callbacks("once memory"),pe.Callbacks("once memory"),1,"rejected"]],r="pending",i={state:function(){return r},always:function(){return o.done(arguments).fail(arguments),this},"catch":function(e){return i.then(null,e)},pipe:function(){var e=arguments;return pe.Deferred(function(t){pe.each(n,function(n,r){var i=pe.isFunction(e[r[4]])&&e[r[4]];o[r[1]](function(){var e=i&&i.apply(this,arguments);e&&pe.isFunction(e.promise)?e.promise().progress(t.notify).done(t.resolve).fail(t.reject):t[r[0]+"With"](this,i?[e]:arguments)})}),e=null}).promise()},then:function(t,r,i){function o(t,n,r,i){return function(){var l=this,c=arguments,f=function(){var e,f;if(!(t<a)){if(e=r.apply(l,c),e===n.promise())throw new TypeError("Thenable self-resolution");f=e&&("object"==typeof e||"function"==typeof e)&&e.then,pe.isFunction(f)?i?f.call(e,o(a,n,s,i),o(a,n,u,i)):(a++,f.call(e,o(a,n,s,i),o(a,n,u,i),o(a,n,s,n.notifyWith))):(r!==s&&(l=void 0,c=[e]),(i||n.resolveWith)(l,c))}},p=i?f:function(){try{f()}catch(e){pe.Deferred.exceptionHook&&pe.Deferred.exceptionHook(e,p.stackTrace),t+1>=a&&(r!==u&&(l=void 0,c=[e]),n.rejectWith(l,c))}};t?p():(pe.Deferred.getStackHook&&(p.stackTrace=pe.Deferred.getStackHook()),e.setTimeout(p))}}var a=0;return pe.Deferred(function(e){n[0][3].add(o(0,e,pe.isFunction(i)?i:s,e.notifyWith)),n[1][3].add(o(0,e,pe.isFunction(t)?t:s)),n[2][3].add(o(0,e,pe.isFunction(r)?r:u))}).promise()},promise:function(e){return null!=e?pe.extend(e,i):i}},o={};return pe.each(n,function(e,t){var a=t[2],s=t[5];i[t[1]]=a.add,s&&a.add(function(){r=s},n[3-e][2].disable,n[0][2].lock),a.add(t[3].fire),o[t[0]]=function(){return o[t[0]+"With"](this===o?void 0:this,arguments),this},o[t[0]+"With"]=a.fireWith}),i.promise(o),t&&t.call(o,o),o},when:function(e){var t=arguments.length,n=t,r=Array(n),i=te.call(arguments),o=pe.Deferred(),a=function(e){return function(n){r[e]=this,i[e]=arguments.length>1?te.call(arguments):n,--t||o.resolveWith(r,i)}};if(t<=1&&(l(e,o.done(a(n)).resolve,o.reject),"pending"===o.state()||pe.isFunction(i[n]&&i[n].then)))return o.then();for(;n--;)l(i[n],a(n),o.reject);return o.promise()}});var je=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;pe.Deferred.exceptionHook=function(t,n){e.console&&e.console.warn&&t&&je.test(t.name)&&e.console.warn("jQuery.Deferred exception: "+t.message,t.stack,n)},pe.readyException=function(t){e.setTimeout(function(){throw t})};var Ae=pe.Deferred();pe.fn.ready=function(e){return Ae.then(e)["catch"](function(e){pe.readyException(e)}),this},pe.extend({isReady:!1,readyWait:1,holdReady:function(e){e?pe.readyWait++:pe.ready(!0)},ready:function(e){(e===!0?--pe.readyWait:pe.isReady)||(pe.isReady=!0,e!==!0&&--pe.readyWait>0||Ae.resolveWith(Z,[pe]))}}),pe.ready.then=Ae.then,"complete"===Z.readyState||"loading"!==Z.readyState&&!Z.documentElement.doScroll?e.setTimeout(pe.ready):(Z.addEventListener("DOMContentLoaded",c),e.addEventListener("load",c));var qe=function(e,t,n,r,i,o,a){var s=0,u=e.length,l=null==n;if("object"===pe.type(n)){i=!0;for(s in n)qe(e,t,s,n[s],!0,o,a)}else if(void 0!==r&&(i=!0,pe.isFunction(r)||(a=!0),l&&(a?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(pe(e),n)})),t))for(;s<u;s++)t(e[s],n,a?r:r.call(e[s],s,t(e[s],n)));return i?e:l?t.call(e):u?t(e[0],n):o},Le=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType};f.uid=1,f.prototype={cache:function(e){var t=e[this.expando];return t||(t={},Le(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var r,i=this.cache(e);if("string"==typeof t)i[pe.camelCase(t)]=n;else for(r in t)i[pe.camelCase(r)]=t[r];return i},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][pe.camelCase(t)]},access:function(e,t,n){return void 0===t||t&&"string"==typeof t&&void 0===n?this.get(e,t):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,r=e[this.expando];if(void 0!==r){if(void 0!==t){pe.isArray(t)?t=t.map(pe.camelCase):(t=pe.camelCase(t),t=t in r?[t]:t.match(De)||[]),n=t.length;for(;n--;)delete r[t[n]]}(void 0===t||pe.isEmptyObject(r))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return void 0!==t&&!pe.isEmptyObject(t)}};var He=new f,Fe=new f,Oe=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Pe=/[A-Z]/g;pe.extend({hasData:function(e){return Fe.hasData(e)||He.hasData(e)},data:function(e,t,n){return Fe.access(e,t,n)},removeData:function(e,t){Fe.remove(e,t)},_data:function(e,t,n){return He.access(e,t,n)},_removeData:function(e,t){He.remove(e,t)}}),pe.fn.extend({data:function(e,t){var n,r,i,o=this[0],a=o&&o.attributes;if(void 0===e){if(this.length&&(i=Fe.get(o),1===o.nodeType&&!He.get(o,"hasDataAttrs"))){for(n=a.length;n--;)a[n]&&(r=a[n].name,0===r.indexOf("data-")&&(r=pe.camelCase(r.slice(5)),p(o,r,i[r])));He.set(o,"hasDataAttrs",!0)}return i}return"object"==typeof e?this.each(function(){Fe.set(this,e)}):qe(this,function(t){var n;if(o&&void 0===t){if(n=Fe.get(o,e),void 0!==n)return n;if(n=p(o,e),void 0!==n)return n}else this.each(function(){Fe.set(this,e,t)})},null,t,arguments.length>1,null,!0)},removeData:function(e){return this.each(function(){Fe.remove(this,e)})}}),pe.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=He.get(e,t),n&&(!r||pe.isArray(n)?r=He.access(e,t,pe.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=pe.queue(e,t),r=n.length,i=n.shift(),o=pe._queueHooks(e,t),a=function(){pe.dequeue(e,t)};"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,a,o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return He.get(e,n)||He.access(e,n,{empty:pe.Callbacks("once memory").add(function(){He.remove(e,[t+"queue",n])})})}}),pe.fn.extend({queue:function(e,t){var n=2;return"string"!=typeof e&&(t=e,e="fx",n--),arguments.length<n?pe.queue(this[0],e):void 0===t?this:this.each(function(){var n=pe.queue(this,e,t);pe._queueHooks(this,e),"fx"===e&&"inprogress"!==n[0]&&pe.dequeue(this,e)})},dequeue:function(e){return this.each(function(){pe.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=pe.Deferred(),o=this,a=this.length,s=function(){--r||i.resolveWith(o,[o])};for("string"!=typeof e&&(t=e,e=void 0),e=e||"fx";a--;)n=He.get(o[a],e+"queueHooks"),n&&n.empty&&(r++,n.empty.add(s));return s(),i.promise(t)}});var Re=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,Me=new RegExp("^(?:([+-])=|)("+Re+")([a-z%]*)$","i"),Ie=["Top","Right","Bottom","Left"],We=function(e,t){return e=t||e,"none"===e.style.display||""===e.style.display&&pe.contains(e.ownerDocument,e)&&"none"===pe.css(e,"display")},$e=function(e,t,n,r){var i,o,a={};for(o in t)a[o]=e.style[o],e.style[o]=t[o];i=n.apply(e,r||[]);for(o in t)e.style[o]=a[o];return i},Be={};pe.fn.extend({show:function(){return g(this,!0)},hide:function(){return g(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){We(this)?pe(this).show():pe(this).hide()})}});var _e=/^(?:checkbox|radio)$/i,ze=/<([a-z][^\/\0>\x20\t\r\n\f]+)/i,Xe=/^$|\/(?:java|ecma)script/i,Ue={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};Ue.optgroup=Ue.option,Ue.tbody=Ue.tfoot=Ue.colgroup=Ue.caption=Ue.thead,Ue.th=Ue.td;var Ve=/<|&#?\w+;/;!function(){var e=Z.createDocumentFragment(),t=e.appendChild(Z.createElement("div")),n=Z.createElement("input");n.setAttribute("type","radio"),n.setAttribute("checked","checked"),n.setAttribute("name","t"),t.appendChild(n),ce.checkClone=t.cloneNode(!0).cloneNode(!0).lastChild.checked,t.innerHTML="<textarea>x</textarea>",ce.noCloneChecked=!!t.cloneNode(!0).lastChild.defaultValue;
}();var Ge=Z.documentElement,Ye=/^key/,Qe=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,Je=/^([^.]*)(?:\.(.+)|)/;pe.event={global:{},add:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,m=He.get(e);if(m)for(n.handler&&(o=n,n=o.handler,i=o.selector),i&&pe.find.matchesSelector(Ge,i),n.guid||(n.guid=pe.guid++),(u=m.events)||(u=m.events={}),(a=m.handle)||(a=m.handle=function(t){return"undefined"!=typeof pe&&pe.event.triggered!==t.type?pe.event.dispatch.apply(e,arguments):void 0}),t=(t||"").match(De)||[""],l=t.length;l--;)s=Je.exec(t[l])||[],d=g=s[1],h=(s[2]||"").split(".").sort(),d&&(f=pe.event.special[d]||{},d=(i?f.delegateType:f.bindType)||d,f=pe.event.special[d]||{},c=pe.extend({type:d,origType:g,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&pe.expr.match.needsContext.test(i),namespace:h.join(".")},o),(p=u[d])||(p=u[d]=[],p.delegateCount=0,f.setup&&f.setup.call(e,r,h,a)!==!1||e.addEventListener&&e.addEventListener(d,a)),f.add&&(f.add.call(e,c),c.handler.guid||(c.handler.guid=n.guid)),i?p.splice(p.delegateCount++,0,c):p.push(c),pe.event.global[d]=!0)},remove:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,m=He.hasData(e)&&He.get(e);if(m&&(u=m.events)){for(t=(t||"").match(De)||[""],l=t.length;l--;)if(s=Je.exec(t[l])||[],d=g=s[1],h=(s[2]||"").split(".").sort(),d){for(f=pe.event.special[d]||{},d=(r?f.delegateType:f.bindType)||d,p=u[d]||[],s=s[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),a=o=p.length;o--;)c=p[o],!i&&g!==c.origType||n&&n.guid!==c.guid||s&&!s.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(p.splice(o,1),c.selector&&p.delegateCount--,f.remove&&f.remove.call(e,c));a&&!p.length&&(f.teardown&&f.teardown.call(e,h,m.handle)!==!1||pe.removeEvent(e,d,m.handle),delete u[d])}else for(d in u)pe.event.remove(e,d+t[l],n,r,!0);pe.isEmptyObject(u)&&He.remove(e,"handle events")}},dispatch:function(e){var t,n,r,i,o,a,s=pe.event.fix(e),u=new Array(arguments.length),l=(He.get(this,"events")||{})[s.type]||[],c=pe.event.special[s.type]||{};for(u[0]=s,t=1;t<arguments.length;t++)u[t]=arguments[t];if(s.delegateTarget=this,!c.preDispatch||c.preDispatch.call(this,s)!==!1){for(a=pe.event.handlers.call(this,s,l),t=0;(i=a[t++])&&!s.isPropagationStopped();)for(s.currentTarget=i.elem,n=0;(o=i.handlers[n++])&&!s.isImmediatePropagationStopped();)s.rnamespace&&!s.rnamespace.test(o.namespace)||(s.handleObj=o,s.data=o.data,r=((pe.event.special[o.origType]||{}).handle||o.handler).apply(i.elem,u),void 0!==r&&(s.result=r)===!1&&(s.preventDefault(),s.stopPropagation()));return c.postDispatch&&c.postDispatch.call(this,s),s.result}},handlers:function(e,t){var n,r,i,o,a=[],s=t.delegateCount,u=e.target;if(s&&u.nodeType&&("click"!==e.type||isNaN(e.button)||e.button<1))for(;u!==this;u=u.parentNode||this)if(1===u.nodeType&&(u.disabled!==!0||"click"!==e.type)){for(r=[],n=0;n<s;n++)o=t[n],i=o.selector+" ",void 0===r[i]&&(r[i]=o.needsContext?pe(i,this).index(u)>-1:pe.find(i,this,null,[u]).length),r[i]&&r.push(o);r.length&&a.push({elem:u,handlers:r})}return s<t.length&&a.push({elem:this,handlers:t.slice(s)}),a},addProp:function(e,t){Object.defineProperty(pe.Event.prototype,e,{enumerable:!0,configurable:!0,get:pe.isFunction(t)?function(){if(this.originalEvent)return t(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[e]},set:function(t){Object.defineProperty(this,e,{enumerable:!0,configurable:!0,writable:!0,value:t})}})},fix:function(e){return e[pe.expando]?e:new pe.Event(e)},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==w()&&this.focus)return this.focus(),!1},delegateType:"focusin"},blur:{trigger:function(){if(this===w()&&this.blur)return this.blur(),!1},delegateType:"focusout"},click:{trigger:function(){if("checkbox"===this.type&&this.click&&pe.nodeName(this,"input"))return this.click(),!1},_default:function(e){return pe.nodeName(e.target,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},pe.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)},pe.Event=function(e,t){return this instanceof pe.Event?(e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&e.returnValue===!1?x:b,this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&pe.extend(this,t),this.timeStamp=e&&e.timeStamp||pe.now(),void(this[pe.expando]=!0)):new pe.Event(e,t)},pe.Event.prototype={constructor:pe.Event,isDefaultPrevented:b,isPropagationStopped:b,isImmediatePropagationStopped:b,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=x,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=x,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=x,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},pe.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(e){var t=e.button;return null==e.which&&Ye.test(e.type)?null!=e.charCode?e.charCode:e.keyCode:!e.which&&void 0!==t&&Qe.test(e.type)?1&t?1:2&t?3:4&t?2:0:e.which}},pe.event.addProp),pe.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,t){pe.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=this,i=e.relatedTarget,o=e.handleObj;return i&&(i===r||pe.contains(r,i))||(e.type=o.origType,n=o.handler.apply(this,arguments),e.type=t),n}}}),pe.fn.extend({on:function(e,t,n,r){return T(this,e,t,n,r)},one:function(e,t,n,r){return T(this,e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,pe(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return t!==!1&&"function"!=typeof t||(n=t,t=void 0),n===!1&&(n=b),this.each(function(){pe.event.remove(this,e,n,t)})}});var Ke=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,Ze=/<script|<style|<link/i,et=/checked\s*(?:[^=]|=\s*.checked.)/i,tt=/^true\/(.*)/,nt=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;pe.extend({htmlPrefilter:function(e){return e.replace(Ke,"<$1></$2>")},clone:function(e,t,n){var r,i,o,a,s=e.cloneNode(!0),u=pe.contains(e.ownerDocument,e);if(!(ce.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||pe.isXMLDoc(e)))for(a=m(s),o=m(e),r=0,i=o.length;r<i;r++)N(o[r],a[r]);if(t)if(n)for(o=o||m(e),a=a||m(s),r=0,i=o.length;r<i;r++)S(o[r],a[r]);else S(e,s);return a=m(s,"script"),a.length>0&&v(a,!u&&m(e,"script")),s},cleanData:function(e){for(var t,n,r,i=pe.event.special,o=0;void 0!==(n=e[o]);o++)if(Le(n)){if(t=n[He.expando]){if(t.events)for(r in t.events)i[r]?pe.event.remove(n,r):pe.removeEvent(n,r,t.handle);n[He.expando]=void 0}n[Fe.expando]&&(n[Fe.expando]=void 0)}}}),pe.fn.extend({detach:function(e){return j(this,e,!0)},remove:function(e){return j(this,e)},text:function(e){return qe(this,function(e){return void 0===e?pe.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)})},null,e,arguments.length)},append:function(){return D(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=C(this,e);t.appendChild(e)}})},prepend:function(){return D(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=C(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return D(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return D(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(pe.cleanData(m(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return pe.clone(this,e,t)})},html:function(e){return qe(this,function(e){var t=this[0]||{},n=0,r=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!Ze.test(e)&&!Ue[(ze.exec(e)||["",""])[1].toLowerCase()]){e=pe.htmlPrefilter(e);try{for(;n<r;n++)t=this[n]||{},1===t.nodeType&&(pe.cleanData(m(t,!1)),t.innerHTML=e);t=0}catch(i){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var e=[];return D(this,arguments,function(t){var n=this.parentNode;pe.inArray(this,e)<0&&(pe.cleanData(m(this)),n&&n.replaceChild(t,this))},e)}}),pe.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){pe.fn[e]=function(e){for(var n,r=[],i=pe(e),o=i.length-1,a=0;a<=o;a++)n=a===o?this:this.clone(!0),pe(i[a])[t](n),re.apply(r,n.get());return this.pushStack(r)}});var rt=/^margin/,it=new RegExp("^("+Re+")(?!px)[a-z%]+$","i"),ot=function(t){var n=t.ownerDocument.defaultView;return n&&n.opener||(n=e),n.getComputedStyle(t)};!function(){function t(){if(s){s.style.cssText="box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",s.innerHTML="",Ge.appendChild(a);var t=e.getComputedStyle(s);n="1%"!==t.top,o="2px"===t.marginLeft,r="4px"===t.width,s.style.marginRight="50%",i="4px"===t.marginRight,Ge.removeChild(a),s=null}}var n,r,i,o,a=Z.createElement("div"),s=Z.createElement("div");s.style&&(s.style.backgroundClip="content-box",s.cloneNode(!0).style.backgroundClip="",ce.clearCloneStyle="content-box"===s.style.backgroundClip,a.style.cssText="border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",a.appendChild(s),pe.extend(ce,{pixelPosition:function(){return t(),n},boxSizingReliable:function(){return t(),r},pixelMarginRight:function(){return t(),i},reliableMarginLeft:function(){return t(),o}}))}();var at=/^(none|table(?!-c[ea]).+)/,st={position:"absolute",visibility:"hidden",display:"block"},ut={letterSpacing:"0",fontWeight:"400"},lt=["Webkit","Moz","ms"],ct=Z.createElement("div").style;pe.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=A(e,"opacity");return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,a,s=pe.camelCase(t),u=e.style;return t=pe.cssProps[s]||(pe.cssProps[s]=L(s)||s),a=pe.cssHooks[t]||pe.cssHooks[s],void 0===n?a&&"get"in a&&void 0!==(i=a.get(e,!1,r))?i:u[t]:(o=typeof n,"string"===o&&(i=Me.exec(n))&&i[1]&&(n=d(e,t,i),o="number"),null!=n&&n===n&&("number"===o&&(n+=i&&i[3]||(pe.cssNumber[s]?"":"px")),ce.clearCloneStyle||""!==n||0!==t.indexOf("background")||(u[t]="inherit"),a&&"set"in a&&void 0===(n=a.set(e,n,r))||(u[t]=n)),void 0)}},css:function(e,t,n,r){var i,o,a,s=pe.camelCase(t);return t=pe.cssProps[s]||(pe.cssProps[s]=L(s)||s),a=pe.cssHooks[t]||pe.cssHooks[s],a&&"get"in a&&(i=a.get(e,!0,n)),void 0===i&&(i=A(e,t,r)),"normal"===i&&t in ut&&(i=ut[t]),""===n||n?(o=parseFloat(i),n===!0||isFinite(o)?o||0:i):i}}),pe.each(["height","width"],function(e,t){pe.cssHooks[t]={get:function(e,n,r){if(n)return!at.test(pe.css(e,"display"))||e.getClientRects().length&&e.getBoundingClientRect().width?O(e,t,r):$e(e,st,function(){return O(e,t,r)})},set:function(e,n,r){var i,o=r&&ot(e),a=r&&F(e,t,r,"border-box"===pe.css(e,"boxSizing",!1,o),o);return a&&(i=Me.exec(n))&&"px"!==(i[3]||"px")&&(e.style[t]=n,n=pe.css(e,t)),H(e,n,a)}}}),pe.cssHooks.marginLeft=q(ce.reliableMarginLeft,function(e,t){if(t)return(parseFloat(A(e,"marginLeft"))||e.getBoundingClientRect().left-$e(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px"}),pe.each({margin:"",padding:"",border:"Width"},function(e,t){pe.cssHooks[e+t]={expand:function(n){for(var r=0,i={},o="string"==typeof n?n.split(" "):[n];r<4;r++)i[e+Ie[r]+t]=o[r]||o[r-2]||o[0];return i}},rt.test(e)||(pe.cssHooks[e+t].set=H)}),pe.fn.extend({css:function(e,t){return qe(this,function(e,t,n){var r,i,o={},a=0;if(pe.isArray(t)){for(r=ot(e),i=t.length;a<i;a++)o[t[a]]=pe.css(e,t[a],!1,r);return o}return void 0!==n?pe.style(e,t,n):pe.css(e,t)},e,t,arguments.length>1)}}),pe.Tween=P,P.prototype={constructor:P,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||pe.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(pe.cssNumber[n]?"":"px")},cur:function(){var e=P.propHooks[this.prop];return e&&e.get?e.get(this):P.propHooks._default.get(this)},run:function(e){var t,n=P.propHooks[this.prop];return this.options.duration?this.pos=t=pe.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):P.propHooks._default.set(this),this}},P.prototype.init.prototype=P.prototype,P.propHooks={_default:{get:function(e){var t;return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=pe.css(e.elem,e.prop,""),t&&"auto"!==t?t:0)},set:function(e){pe.fx.step[e.prop]?pe.fx.step[e.prop](e):1!==e.elem.nodeType||null==e.elem.style[pe.cssProps[e.prop]]&&!pe.cssHooks[e.prop]?e.elem[e.prop]=e.now:pe.style(e.elem,e.prop,e.now+e.unit)}}},P.propHooks.scrollTop=P.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},pe.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},pe.fx=P.prototype.init,pe.fx.step={};var ft,pt,dt=/^(?:toggle|show|hide)$/,ht=/queueHooks$/;pe.Animation=pe.extend(_,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return d(n.elem,e,Me.exec(t),n),n}]},tweener:function(e,t){pe.isFunction(e)?(t=e,e=["*"]):e=e.match(De);for(var n,r=0,i=e.length;r<i;r++)n=e[r],_.tweeners[n]=_.tweeners[n]||[],_.tweeners[n].unshift(t)},prefilters:[$],prefilter:function(e,t){t?_.prefilters.unshift(e):_.prefilters.push(e)}}),pe.speed=function(e,t,n){var r=e&&"object"==typeof e?pe.extend({},e):{complete:n||!n&&t||pe.isFunction(e)&&e,duration:e,easing:n&&t||t&&!pe.isFunction(t)&&t};return pe.fx.off||Z.hidden?r.duration=0:r.duration="number"==typeof r.duration?r.duration:r.duration in pe.fx.speeds?pe.fx.speeds[r.duration]:pe.fx.speeds._default,null!=r.queue&&r.queue!==!0||(r.queue="fx"),r.old=r.complete,r.complete=function(){pe.isFunction(r.old)&&r.old.call(this),r.queue&&pe.dequeue(this,r.queue)},r},pe.fn.extend({fadeTo:function(e,t,n,r){return this.filter(We).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=pe.isEmptyObject(e),o=pe.speed(t,n,r),a=function(){var t=_(this,pe.extend({},e),o);(i||He.get(this,"finish"))&&t.stop(!0)};return a.finish=a,i||o.queue===!1?this.each(a):this.queue(o.queue,a)},stop:function(e,t,n){var r=function(e){var t=e.stop;delete e.stop,t(n)};return"string"!=typeof e&&(n=t,t=e,e=void 0),t&&e!==!1&&this.queue(e||"fx",[]),this.each(function(){var t=!0,i=null!=e&&e+"queueHooks",o=pe.timers,a=He.get(this);if(i)a[i]&&a[i].stop&&r(a[i]);else for(i in a)a[i]&&a[i].stop&&ht.test(i)&&r(a[i]);for(i=o.length;i--;)o[i].elem!==this||null!=e&&o[i].queue!==e||(o[i].anim.stop(n),t=!1,o.splice(i,1));!t&&n||pe.dequeue(this,e)})},finish:function(e){return e!==!1&&(e=e||"fx"),this.each(function(){var t,n=He.get(this),r=n[e+"queue"],i=n[e+"queueHooks"],o=pe.timers,a=r?r.length:0;for(n.finish=!0,pe.queue(this,e,[]),i&&i.stop&&i.stop.call(this,!0),t=o.length;t--;)o[t].elem===this&&o[t].queue===e&&(o[t].anim.stop(!0),o.splice(t,1));for(t=0;t<a;t++)r[t]&&r[t].finish&&r[t].finish.call(this);delete n.finish})}}),pe.each(["toggle","show","hide"],function(e,t){var n=pe.fn[t];pe.fn[t]=function(e,r,i){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(I(t,!0),e,r,i)}}),pe.each({slideDown:I("show"),slideUp:I("hide"),slideToggle:I("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){pe.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),pe.timers=[],pe.fx.tick=function(){var e,t=0,n=pe.timers;for(ft=pe.now();t<n.length;t++)e=n[t],e()||n[t]!==e||n.splice(t--,1);n.length||pe.fx.stop(),ft=void 0},pe.fx.timer=function(e){pe.timers.push(e),e()?pe.fx.start():pe.timers.pop()},pe.fx.interval=13,pe.fx.start=function(){pt||(pt=e.requestAnimationFrame?e.requestAnimationFrame(R):e.setInterval(pe.fx.tick,pe.fx.interval))},pe.fx.stop=function(){e.cancelAnimationFrame?e.cancelAnimationFrame(pt):e.clearInterval(pt),pt=null},pe.fx.speeds={slow:600,fast:200,_default:400},pe.fn.delay=function(t,n){return t=pe.fx?pe.fx.speeds[t]||t:t,n=n||"fx",this.queue(n,function(n,r){var i=e.setTimeout(n,t);r.stop=function(){e.clearTimeout(i)}})},function(){var e=Z.createElement("input"),t=Z.createElement("select"),n=t.appendChild(Z.createElement("option"));e.type="checkbox",ce.checkOn=""!==e.value,ce.optSelected=n.selected,e=Z.createElement("input"),e.value="t",e.type="radio",ce.radioValue="t"===e.value}();var gt,mt=pe.expr.attrHandle;pe.fn.extend({attr:function(e,t){return qe(this,pe.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){pe.removeAttr(this,e)})}}),pe.extend({attr:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return"undefined"==typeof e.getAttribute?pe.prop(e,t,n):(1===o&&pe.isXMLDoc(e)||(i=pe.attrHooks[t.toLowerCase()]||(pe.expr.match.bool.test(t)?gt:void 0)),void 0!==n?null===n?void pe.removeAttr(e,t):i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:(e.setAttribute(t,n+""),n):i&&"get"in i&&null!==(r=i.get(e,t))?r:(r=pe.find.attr(e,t),null==r?void 0:r))},attrHooks:{type:{set:function(e,t){if(!ce.radioValue&&"radio"===t&&pe.nodeName(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,r=0,i=t&&t.match(De);if(i&&1===e.nodeType)for(;n=i[r++];)e.removeAttribute(n)}}),gt={set:function(e,t,n){return t===!1?pe.removeAttr(e,n):e.setAttribute(n,n),n}},pe.each(pe.expr.match.bool.source.match(/\w+/g),function(e,t){var n=mt[t]||pe.find.attr;mt[t]=function(e,t,r){var i,o,a=t.toLowerCase();return r||(o=mt[a],mt[a]=i,i=null!=n(e,t,r)?a:null,mt[a]=o),i}});var vt=/^(?:input|select|textarea|button)$/i,yt=/^(?:a|area)$/i;pe.fn.extend({prop:function(e,t){return qe(this,pe.prop,e,t,arguments.length>1)},removeProp:function(e){return this.each(function(){delete this[pe.propFix[e]||e]})}}),pe.extend({prop:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return 1===o&&pe.isXMLDoc(e)||(t=pe.propFix[t]||t,i=pe.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){var t=pe.find.attr(e,"tabindex");return t?parseInt(t,10):vt.test(e.nodeName)||yt.test(e.nodeName)&&e.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),ce.optSelected||(pe.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),pe.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){pe.propFix[this.toLowerCase()]=this});var xt=/[\t\r\n\f]/g;pe.fn.extend({addClass:function(e){var t,n,r,i,o,a,s,u=0;if(pe.isFunction(e))return this.each(function(t){pe(this).addClass(e.call(this,t,z(this)))});if("string"==typeof e&&e)for(t=e.match(De)||[];n=this[u++];)if(i=z(n),r=1===n.nodeType&&(" "+i+" ").replace(xt," ")){for(a=0;o=t[a++];)r.indexOf(" "+o+" ")<0&&(r+=o+" ");s=pe.trim(r),i!==s&&n.setAttribute("class",s)}return this},removeClass:function(e){var t,n,r,i,o,a,s,u=0;if(pe.isFunction(e))return this.each(function(t){pe(this).removeClass(e.call(this,t,z(this)))});if(!arguments.length)return this.attr("class","");if("string"==typeof e&&e)for(t=e.match(De)||[];n=this[u++];)if(i=z(n),r=1===n.nodeType&&(" "+i+" ").replace(xt," ")){for(a=0;o=t[a++];)for(;r.indexOf(" "+o+" ")>-1;)r=r.replace(" "+o+" "," ");s=pe.trim(r),i!==s&&n.setAttribute("class",s)}return this},toggleClass:function(e,t){var n=typeof e;return"boolean"==typeof t&&"string"===n?t?this.addClass(e):this.removeClass(e):pe.isFunction(e)?this.each(function(n){pe(this).toggleClass(e.call(this,n,z(this),t),t)}):this.each(function(){var t,r,i,o;if("string"===n)for(r=0,i=pe(this),o=e.match(De)||[];t=o[r++];)i.hasClass(t)?i.removeClass(t):i.addClass(t);else void 0!==e&&"boolean"!==n||(t=z(this),t&&He.set(this,"__className__",t),this.setAttribute&&this.setAttribute("class",t||e===!1?"":He.get(this,"__className__")||""))})},hasClass:function(e){var t,n,r=0;for(t=" "+e+" ";n=this[r++];)if(1===n.nodeType&&(" "+z(n)+" ").replace(xt," ").indexOf(t)>-1)return!0;return!1}});var bt=/\r/g,wt=/[\x20\t\r\n\f]+/g;pe.fn.extend({val:function(e){var t,n,r,i=this[0];{if(arguments.length)return r=pe.isFunction(e),this.each(function(n){var i;1===this.nodeType&&(i=r?e.call(this,n,pe(this).val()):e,null==i?i="":"number"==typeof i?i+="":pe.isArray(i)&&(i=pe.map(i,function(e){return null==e?"":e+""})),t=pe.valHooks[this.type]||pe.valHooks[this.nodeName.toLowerCase()],t&&"set"in t&&void 0!==t.set(this,i,"value")||(this.value=i))});if(i)return t=pe.valHooks[i.type]||pe.valHooks[i.nodeName.toLowerCase()],t&&"get"in t&&void 0!==(n=t.get(i,"value"))?n:(n=i.value,"string"==typeof n?n.replace(bt,""):null==n?"":n)}}}),pe.extend({valHooks:{option:{get:function(e){var t=pe.find.attr(e,"value");return null!=t?t:pe.trim(pe.text(e)).replace(wt," ")}},select:{get:function(e){for(var t,n,r=e.options,i=e.selectedIndex,o="select-one"===e.type,a=o?null:[],s=o?i+1:r.length,u=i<0?s:o?i:0;u<s;u++)if(n=r[u],(n.selected||u===i)&&!n.disabled&&(!n.parentNode.disabled||!pe.nodeName(n.parentNode,"optgroup"))){if(t=pe(n).val(),o)return t;a.push(t)}return a},set:function(e,t){for(var n,r,i=e.options,o=pe.makeArray(t),a=i.length;a--;)r=i[a],(r.selected=pe.inArray(pe.valHooks.option.get(r),o)>-1)&&(n=!0);return n||(e.selectedIndex=-1),o}}}}),pe.each(["radio","checkbox"],function(){pe.valHooks[this]={set:function(e,t){if(pe.isArray(t))return e.checked=pe.inArray(pe(e).val(),t)>-1}},ce.checkOn||(pe.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})});var Tt=/^(?:focusinfocus|focusoutblur)$/;pe.extend(pe.event,{trigger:function(t,n,r,i){var o,a,s,u,l,c,f,p=[r||Z],d=se.call(t,"type")?t.type:t,h=se.call(t,"namespace")?t.namespace.split("."):[];if(a=s=r=r||Z,3!==r.nodeType&&8!==r.nodeType&&!Tt.test(d+pe.event.triggered)&&(d.indexOf(".")>-1&&(h=d.split("."),d=h.shift(),h.sort()),l=d.indexOf(":")<0&&"on"+d,t=t[pe.expando]?t:new pe.Event(d,"object"==typeof t&&t),t.isTrigger=i?2:3,t.namespace=h.join("."),t.rnamespace=t.namespace?new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,t.result=void 0,t.target||(t.target=r),n=null==n?[t]:pe.makeArray(n,[t]),f=pe.event.special[d]||{},i||!f.trigger||f.trigger.apply(r,n)!==!1)){if(!i&&!f.noBubble&&!pe.isWindow(r)){for(u=f.delegateType||d,Tt.test(u+d)||(a=a.parentNode);a;a=a.parentNode)p.push(a),s=a;s===(r.ownerDocument||Z)&&p.push(s.defaultView||s.parentWindow||e)}for(o=0;(a=p[o++])&&!t.isPropagationStopped();)t.type=o>1?u:f.bindType||d,c=(He.get(a,"events")||{})[t.type]&&He.get(a,"handle"),c&&c.apply(a,n),c=l&&a[l],c&&c.apply&&Le(a)&&(t.result=c.apply(a,n),t.result===!1&&t.preventDefault());return t.type=d,i||t.isDefaultPrevented()||f._default&&f._default.apply(p.pop(),n)!==!1||!Le(r)||l&&pe.isFunction(r[d])&&!pe.isWindow(r)&&(s=r[l],s&&(r[l]=null),pe.event.triggered=d,r[d](),pe.event.triggered=void 0,s&&(r[l]=s)),t.result}},simulate:function(e,t,n){var r=pe.extend(new pe.Event,n,{type:e,isSimulated:!0});pe.event.trigger(r,null,t)}}),pe.fn.extend({trigger:function(e,t){return this.each(function(){pe.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return pe.event.trigger(e,t,n,!0)}}),pe.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,t){pe.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}}),pe.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),ce.focusin="onfocusin"in e,ce.focusin||pe.each({focus:"focusin",blur:"focusout"},function(e,t){var n=function(e){pe.event.simulate(t,e.target,pe.event.fix(e))};pe.event.special[t]={setup:function(){var r=this.ownerDocument||this,i=He.access(r,t);i||r.addEventListener(e,n,!0),He.access(r,t,(i||0)+1)},teardown:function(){var r=this.ownerDocument||this,i=He.access(r,t)-1;i?He.access(r,t,i):(r.removeEventListener(e,n,!0),He.remove(r,t))}}});var Ct=e.location,kt=pe.now(),Et=/\?/;pe.parseXML=function(t){var n;if(!t||"string"!=typeof t)return null;try{n=(new e.DOMParser).parseFromString(t,"text/xml")}catch(r){n=void 0}return n&&!n.getElementsByTagName("parsererror").length||pe.error("Invalid XML: "+t),n};var St=/\[\]$/,Nt=/\r?\n/g,Dt=/^(?:submit|button|image|reset|file)$/i,jt=/^(?:input|select|textarea|keygen)/i;pe.param=function(e,t){var n,r=[],i=function(e,t){var n=pe.isFunction(t)?t():t;r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n)};if(pe.isArray(e)||e.jquery&&!pe.isPlainObject(e))pe.each(e,function(){i(this.name,this.value)});else for(n in e)X(n,e[n],t,i);return r.join("&")},pe.fn.extend({serialize:function(){return pe.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=pe.prop(this,"elements");return e?pe.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!pe(this).is(":disabled")&&jt.test(this.nodeName)&&!Dt.test(e)&&(this.checked||!_e.test(e))}).map(function(e,t){var n=pe(this).val();return null==n?null:pe.isArray(n)?pe.map(n,function(e){return{name:t.name,value:e.replace(Nt,"\r\n")}}):{name:t.name,value:n.replace(Nt,"\r\n")}}).get()}});var At=/%20/g,qt=/#.*$/,Lt=/([?&])_=[^&]*/,Ht=/^(.*?):[ \t]*([^\r\n]*)$/gm,Ft=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Ot=/^(?:GET|HEAD)$/,Pt=/^\/\//,Rt={},Mt={},It="*/".concat("*"),Wt=Z.createElement("a");Wt.href=Ct.href,pe.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Ct.href,type:"GET",isLocal:Ft.test(Ct.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":It,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":pe.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?G(G(e,pe.ajaxSettings),t):G(pe.ajaxSettings,e)},ajaxPrefilter:U(Rt),ajaxTransport:U(Mt),ajax:function(t,n){function r(t,n,r,s){var l,p,d,b,w,T=n;c||(c=!0,u&&e.clearTimeout(u),i=void 0,a=s||"",C.readyState=t>0?4:0,l=t>=200&&t<300||304===t,r&&(b=Y(h,C,r)),b=Q(h,b,C,l),l?(h.ifModified&&(w=C.getResponseHeader("Last-Modified"),w&&(pe.lastModified[o]=w),w=C.getResponseHeader("etag"),w&&(pe.etag[o]=w)),204===t||"HEAD"===h.type?T="nocontent":304===t?T="notmodified":(T=b.state,p=b.data,d=b.error,l=!d)):(d=T,!t&&T||(T="error",t<0&&(t=0))),C.status=t,C.statusText=(n||T)+"",l?v.resolveWith(g,[p,T,C]):v.rejectWith(g,[C,T,d]),C.statusCode(x),x=void 0,f&&m.trigger(l?"ajaxSuccess":"ajaxError",[C,h,l?p:d]),y.fireWith(g,[C,T]),f&&(m.trigger("ajaxComplete",[C,h]),--pe.active||pe.event.trigger("ajaxStop")))}"object"==typeof t&&(n=t,t=void 0),n=n||{};var i,o,a,s,u,l,c,f,p,d,h=pe.ajaxSetup({},n),g=h.context||h,m=h.context&&(g.nodeType||g.jquery)?pe(g):pe.event,v=pe.Deferred(),y=pe.Callbacks("once memory"),x=h.statusCode||{},b={},w={},T="canceled",C={readyState:0,getResponseHeader:function(e){var t;if(c){if(!s)for(s={};t=Ht.exec(a);)s[t[1].toLowerCase()]=t[2];t=s[e.toLowerCase()]}return null==t?null:t},getAllResponseHeaders:function(){return c?a:null},setRequestHeader:function(e,t){return null==c&&(e=w[e.toLowerCase()]=w[e.toLowerCase()]||e,b[e]=t),this},overrideMimeType:function(e){return null==c&&(h.mimeType=e),this},statusCode:function(e){var t;if(e)if(c)C.always(e[C.status]);else for(t in e)x[t]=[x[t],e[t]];return this},abort:function(e){var t=e||T;return i&&i.abort(t),r(0,t),this}};if(v.promise(C),h.url=((t||h.url||Ct.href)+"").replace(Pt,Ct.protocol+"//"),h.type=n.method||n.type||h.method||h.type,h.dataTypes=(h.dataType||"*").toLowerCase().match(De)||[""],null==h.crossDomain){l=Z.createElement("a");try{l.href=h.url,l.href=l.href,h.crossDomain=Wt.protocol+"//"+Wt.host!=l.protocol+"//"+l.host}catch(k){h.crossDomain=!0}}if(h.data&&h.processData&&"string"!=typeof h.data&&(h.data=pe.param(h.data,h.traditional)),V(Rt,h,n,C),c)return C;f=pe.event&&h.global,f&&0===pe.active++&&pe.event.trigger("ajaxStart"),h.type=h.type.toUpperCase(),h.hasContent=!Ot.test(h.type),o=h.url.replace(qt,""),h.hasContent?h.data&&h.processData&&0===(h.contentType||"").indexOf("application/x-www-form-urlencoded")&&(h.data=h.data.replace(At,"+")):(d=h.url.slice(o.length),h.data&&(o+=(Et.test(o)?"&":"?")+h.data,delete h.data),h.cache===!1&&(o=o.replace(Lt,""),d=(Et.test(o)?"&":"?")+"_="+kt++ +d),h.url=o+d),h.ifModified&&(pe.lastModified[o]&&C.setRequestHeader("If-Modified-Since",pe.lastModified[o]),pe.etag[o]&&C.setRequestHeader("If-None-Match",pe.etag[o])),(h.data&&h.hasContent&&h.contentType!==!1||n.contentType)&&C.setRequestHeader("Content-Type",h.contentType),C.setRequestHeader("Accept",h.dataTypes[0]&&h.accepts[h.dataTypes[0]]?h.accepts[h.dataTypes[0]]+("*"!==h.dataTypes[0]?", "+It+"; q=0.01":""):h.accepts["*"]);for(p in h.headers)C.setRequestHeader(p,h.headers[p]);if(h.beforeSend&&(h.beforeSend.call(g,C,h)===!1||c))return C.abort();if(T="abort",y.add(h.complete),C.done(h.success),C.fail(h.error),i=V(Mt,h,n,C)){if(C.readyState=1,f&&m.trigger("ajaxSend",[C,h]),c)return C;h.async&&h.timeout>0&&(u=e.setTimeout(function(){C.abort("timeout")},h.timeout));try{c=!1,i.send(b,r)}catch(k){if(c)throw k;r(-1,k)}}else r(-1,"No Transport");return C},getJSON:function(e,t,n){return pe.get(e,t,n,"json")},getScript:function(e,t){return pe.get(e,void 0,t,"script")}}),pe.each(["get","post"],function(e,t){pe[t]=function(e,n,r,i){return pe.isFunction(n)&&(i=i||r,r=n,n=void 0),pe.ajax(pe.extend({url:e,type:t,dataType:i,data:n,success:r},pe.isPlainObject(e)&&e))}}),pe._evalUrl=function(e){return pe.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,"throws":!0})},pe.fn.extend({wrapAll:function(e){var t;return this[0]&&(pe.isFunction(e)&&(e=e.call(this[0])),t=pe(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){for(var e=this;e.firstElementChild;)e=e.firstElementChild;return e}).append(this)),this},wrapInner:function(e){return pe.isFunction(e)?this.each(function(t){pe(this).wrapInner(e.call(this,t))}):this.each(function(){var t=pe(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=pe.isFunction(e);return this.each(function(n){pe(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(e){return this.parent(e).not("body").each(function(){pe(this).replaceWith(this.childNodes)}),this}}),pe.expr.pseudos.hidden=function(e){return!pe.expr.pseudos.visible(e)},pe.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},pe.ajaxSettings.xhr=function(){
try{return new e.XMLHttpRequest}catch(t){}};var $t={0:200,1223:204},Bt=pe.ajaxSettings.xhr();ce.cors=!!Bt&&"withCredentials"in Bt,ce.ajax=Bt=!!Bt,pe.ajaxTransport(function(t){var n,r;if(ce.cors||Bt&&!t.crossDomain)return{send:function(i,o){var a,s=t.xhr();if(s.open(t.type,t.url,t.async,t.username,t.password),t.xhrFields)for(a in t.xhrFields)s[a]=t.xhrFields[a];t.mimeType&&s.overrideMimeType&&s.overrideMimeType(t.mimeType),t.crossDomain||i["X-Requested-With"]||(i["X-Requested-With"]="XMLHttpRequest");for(a in i)s.setRequestHeader(a,i[a]);n=function(e){return function(){n&&(n=r=s.onload=s.onerror=s.onabort=s.onreadystatechange=null,"abort"===e?s.abort():"error"===e?"number"!=typeof s.status?o(0,"error"):o(s.status,s.statusText):o($t[s.status]||s.status,s.statusText,"text"!==(s.responseType||"text")||"string"!=typeof s.responseText?{binary:s.response}:{text:s.responseText},s.getAllResponseHeaders()))}},s.onload=n(),r=s.onerror=n("error"),void 0!==s.onabort?s.onabort=r:s.onreadystatechange=function(){4===s.readyState&&e.setTimeout(function(){n&&r()})},n=n("abort");try{s.send(t.hasContent&&t.data||null)}catch(u){if(n)throw u}},abort:function(){n&&n()}}}),pe.ajaxPrefilter(function(e){e.crossDomain&&(e.contents.script=!1)}),pe.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return pe.globalEval(e),e}}}),pe.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),pe.ajaxTransport("script",function(e){if(e.crossDomain){var t,n;return{send:function(r,i){t=pe("<script>").prop({charset:e.scriptCharset,src:e.url}).on("load error",n=function(e){t.remove(),n=null,e&&i("error"===e.type?404:200,e.type)}),Z.head.appendChild(t[0])},abort:function(){n&&n()}}}});var _t=[],zt=/(=)\?(?=&|$)|\?\?/;pe.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=_t.pop()||pe.expando+"_"+kt++;return this[e]=!0,e}}),pe.ajaxPrefilter("json jsonp",function(t,n,r){var i,o,a,s=t.jsonp!==!1&&(zt.test(t.url)?"url":"string"==typeof t.data&&0===(t.contentType||"").indexOf("application/x-www-form-urlencoded")&&zt.test(t.data)&&"data");if(s||"jsonp"===t.dataTypes[0])return i=t.jsonpCallback=pe.isFunction(t.jsonpCallback)?t.jsonpCallback():t.jsonpCallback,s?t[s]=t[s].replace(zt,"$1"+i):t.jsonp!==!1&&(t.url+=(Et.test(t.url)?"&":"?")+t.jsonp+"="+i),t.converters["script json"]=function(){return a||pe.error(i+" was not called"),a[0]},t.dataTypes[0]="json",o=e[i],e[i]=function(){a=arguments},r.always(function(){void 0===o?pe(e).removeProp(i):e[i]=o,t[i]&&(t.jsonpCallback=n.jsonpCallback,_t.push(i)),a&&pe.isFunction(o)&&o(a[0]),a=o=void 0}),"script"}),ce.createHTMLDocument=function(){var e=Z.implementation.createHTMLDocument("").body;return e.innerHTML="<form></form><form></form>",2===e.childNodes.length}(),pe.parseHTML=function(e,t,n){if("string"!=typeof e)return[];"boolean"==typeof t&&(n=t,t=!1);var r,i,o;return t||(ce.createHTMLDocument?(t=Z.implementation.createHTMLDocument(""),r=t.createElement("base"),r.href=Z.location.href,t.head.appendChild(r)):t=Z),i=we.exec(e),o=!n&&[],i?[t.createElement(i[1])]:(i=y([e],t,o),o&&o.length&&pe(o).remove(),pe.merge([],i.childNodes))},pe.fn.load=function(e,t,n){var r,i,o,a=this,s=e.indexOf(" ");return s>-1&&(r=pe.trim(e.slice(s)),e=e.slice(0,s)),pe.isFunction(t)?(n=t,t=void 0):t&&"object"==typeof t&&(i="POST"),a.length>0&&pe.ajax({url:e,type:i||"GET",dataType:"html",data:t}).done(function(e){o=arguments,a.html(r?pe("<div>").append(pe.parseHTML(e)).find(r):e)}).always(n&&function(e,t){a.each(function(){n.apply(this,o||[e.responseText,t,e])})}),this},pe.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){pe.fn[t]=function(e){return this.on(t,e)}}),pe.expr.pseudos.animated=function(e){return pe.grep(pe.timers,function(t){return e===t.elem}).length},pe.offset={setOffset:function(e,t,n){var r,i,o,a,s,u,l,c=pe.css(e,"position"),f=pe(e),p={};"static"===c&&(e.style.position="relative"),s=f.offset(),o=pe.css(e,"top"),u=pe.css(e,"left"),l=("absolute"===c||"fixed"===c)&&(o+u).indexOf("auto")>-1,l?(r=f.position(),a=r.top,i=r.left):(a=parseFloat(o)||0,i=parseFloat(u)||0),pe.isFunction(t)&&(t=t.call(e,n,pe.extend({},s))),null!=t.top&&(p.top=t.top-s.top+a),null!=t.left&&(p.left=t.left-s.left+i),"using"in t?t.using.call(e,p):f.css(p)}},pe.fn.extend({offset:function(e){if(arguments.length)return void 0===e?this:this.each(function(t){pe.offset.setOffset(this,e,t)});var t,n,r,i,o=this[0];if(o)return o.getClientRects().length?(r=o.getBoundingClientRect(),r.width||r.height?(i=o.ownerDocument,n=J(i),t=i.documentElement,{top:r.top+n.pageYOffset-t.clientTop,left:r.left+n.pageXOffset-t.clientLeft}):r):{top:0,left:0}},position:function(){if(this[0]){var e,t,n=this[0],r={top:0,left:0};return"fixed"===pe.css(n,"position")?t=n.getBoundingClientRect():(e=this.offsetParent(),t=this.offset(),pe.nodeName(e[0],"html")||(r=e.offset()),r={top:r.top+pe.css(e[0],"borderTopWidth",!0),left:r.left+pe.css(e[0],"borderLeftWidth",!0)}),{top:t.top-r.top-pe.css(n,"marginTop",!0),left:t.left-r.left-pe.css(n,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){for(var e=this.offsetParent;e&&"static"===pe.css(e,"position");)e=e.offsetParent;return e||Ge})}}),pe.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,t){var n="pageYOffset"===t;pe.fn[e]=function(r){return qe(this,function(e,r,i){var o=J(e);return void 0===i?o?o[t]:e[r]:void(o?o.scrollTo(n?o.pageXOffset:i,n?i:o.pageYOffset):e[r]=i)},e,r,arguments.length)}}),pe.each(["top","left"],function(e,t){pe.cssHooks[t]=q(ce.pixelPosition,function(e,n){if(n)return n=A(e,t),it.test(n)?pe(e).position()[t]+"px":n})}),pe.each({Height:"height",Width:"width"},function(e,t){pe.each({padding:"inner"+e,content:t,"":"outer"+e},function(n,r){pe.fn[r]=function(i,o){var a=arguments.length&&(n||"boolean"!=typeof i),s=n||(i===!0||o===!0?"margin":"border");return qe(this,function(t,n,i){var o;return pe.isWindow(t)?0===r.indexOf("outer")?t["inner"+e]:t.document.documentElement["client"+e]:9===t.nodeType?(o=t.documentElement,Math.max(t.body["scroll"+e],o["scroll"+e],t.body["offset"+e],o["offset"+e],o["client"+e])):void 0===i?pe.css(t,n,s):pe.style(t,n,i,s)},t,a?i:void 0,a)}})}),pe.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)}}),pe.parseJSON=JSON.parse,"function"==typeof define&&define.amd&&define("jquery",[],function(){return pe});var Xt=e.jQuery,Ut=e.$;return pe.noConflict=function(t){return e.$===pe&&(e.$=Ut),t&&e.jQuery===pe&&(e.jQuery=Xt),pe},t||(e.jQuery=e.$=pe),pe});
!function(n,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):n.Dexie=t()}(this,function(){"use strict";function n(n,t){In=n,An=t}function t(){if(En)try{throw t.arguments,new Error}catch(n){return n}return new Error}function e(n,t){var e=n.stack;return e?(t=t||0,0===e.indexOf(n.name)&&(t+=(n.name+n.message).split("\n").length),e.split("\n").slice(t).filter(An).map(function(n){return"\n"+n}).join("")):""}function r(){}function i(n){return n}function o(n,t){return null==n||n===i?t:function(e){return t(n(e))}}function u(n,t){return function(){n.apply(this,arguments),t.apply(this,arguments)}}function a(n,t){return n===r?t:function(){var e=n.apply(this,arguments);void 0!==e&&(arguments[0]=e);var r=this.onsuccess,i=this.onerror;this.onsuccess=null,this.onerror=null;var o=t.apply(this,arguments);return r&&(this.onsuccess=this.onsuccess?u(r,this.onsuccess):r),i&&(this.onerror=this.onerror?u(i,this.onerror):i),void 0!==o?o:e}}function c(n,t){return n===r?t:function(){n.apply(this,arguments);var e=this.onsuccess,r=this.onerror;this.onsuccess=this.onerror=null,t.apply(this,arguments),e&&(this.onsuccess=this.onsuccess?u(e,this.onsuccess):e),r&&(this.onerror=this.onerror?u(r,this.onerror):r)}}function s(n,t){return n===r?t:function(e){var r=n.apply(this,arguments);h(e,r);var i=this.onsuccess,o=this.onerror;this.onsuccess=null,this.onerror=null;var a=t.apply(this,arguments);return i&&(this.onsuccess=this.onsuccess?u(i,this.onsuccess):i),o&&(this.onerror=this.onerror?u(o,this.onerror):o),void 0===r?void 0===a?void 0:a:h(r,a)}}function f(n,t){return n===r?t:function(){return t.apply(this,arguments)!==!1&&n.apply(this,arguments)}}function l(n,t){return n===r?t:function(){var e=n.apply(this,arguments);if(e&&"function"==typeof e.then){for(var r=this,i=arguments.length,o=new Array(i);i--;)o[i]=arguments[i];return e.then(function(){return t.apply(r,o)})}return t.apply(this,arguments)}}function h(n,t){return"object"!=typeof t?n:(Cn(t).forEach(function(e){n[e]=t[e]}),n)}function d(n,t){return Dn.call(n,t)}function p(n,t){"function"==typeof t&&(t=t(Pn(n))),Cn(t).forEach(function(e){v(n,e,t[e])})}function v(n,t,e,r){Object.defineProperty(n,t,h(e&&d(e,"get")&&"function"==typeof e.get?{get:e.get,set:e.set,configurable:!0}:{value:e,configurable:!0,writable:!0},r))}function y(n){return{from:function(t){return n.prototype=Object.create(t.prototype),v(n.prototype,"constructor",n),{extend:p.bind(null,n.prototype)}}}}function m(n,t){var e,r=Sn(n,t);return r||(e=Pn(n))&&m(e,t)}function g(n,t,e){return Tn.call(n,t,e)}function b(n,t){return t(n)}function _(n){var t=setTimeout(n,1e3);clearTimeout(t)}function w(n){if(!n)throw new Ln.Internal("Assertion failed")}function k(n){jn.setImmediate?setImmediate(n):setTimeout(n,0)}function x(n,t){return n.reduce(function(n,e,r){var i=t(e,r);return i&&(n[i[0]]=i[1]),n},{})}function I(n,t){return function(){try{n.apply(this,arguments)}catch(e){t(e)}}}function A(n,t,e){try{n.apply(null,e)}catch(r){t&&t(r)}}function E(n,t){var e=U.reject(n);return t?e.uncaught(t):e}function C(n,t){if(d(n,t))return n[t];if(!t)return n;if("string"!=typeof t){for(var e=[],r=0,i=t.length;r<i;++r){var o=C(n,t[r]);e.push(o)}return e}var u=t.indexOf(".");if(u!==-1){var a=n[t.substr(0,u)];return void 0===a?void 0:C(a,t.substr(u+1))}}function O(n,t,e){if(n&&void 0!==t&&!("isFrozen"in Object&&Object.isFrozen(n)))if("string"!=typeof t&&"length"in t){w("string"!=typeof e&&"length"in e);for(var r=0,i=t.length;r<i;++r)O(n,t[r],e[r])}else{var o=t.indexOf(".");if(o!==-1){var u=t.substr(0,o),a=t.substr(o+1);if(""===a)void 0===e?delete n[u]:n[u]=e;else{var c=n[u];c||(c=n[u]={}),O(c,a,e)}}else void 0===e?delete n[t]:n[t]=e}}function j(n,t){"string"==typeof t?O(n,t,void 0):"length"in t&&[].map.call(t,function(t){O(n,t,void 0)})}function P(n){var t={};for(var e in n)d(n,e)&&(t[e]=n[e]);return t}function D(n){if(!n||"object"!=typeof n)return n;var t;if(On(n)){t=[];for(var e=0,r=n.length;e<r;++e)t.push(D(n[e]))}else if(n instanceof Date)t=new Date,t.setTime(n.getTime());else{t=n.constructor?Object.create(n.constructor.prototype):{};for(var i in n)d(n,i)&&(t[i]=D(n[i]))}return t}function S(n,t,e,r){return e=e||{},r=r||"",Cn(n).forEach(function(i){if(d(t,i)){var o=n[i],u=t[i];"object"==typeof o&&"object"==typeof u&&o&&u&&o.constructor===u.constructor?S(o,u,e,r+i+"."):o!==u&&(e[r+i]=t[i])}else e[r+i]=void 0}),Cn(t).forEach(function(i){d(n,i)||(e[r+i]=t[i])}),e}function T(n){var t,e,r,i;if(1===arguments.length){if(On(n))return n.slice();if(this===Mn&&"string"==typeof n)return[n];if(i=Bn(n)){for(e=[];r=i.next(),!r.done;)e.push(r.value);return e}if(null==n)return[n];if(t=n.length,"number"==typeof t){for(e=new Array(t);t--;)e[t]=n[t];return e}return[n]}for(t=arguments.length,e=new Array(t);t--;)e[t]=arguments[t];return e}function K(n){return Nn.apply([],n)}function B(n,e){this._e=t(),this.name=n,this.message=e}function M(n,t){return n+". Errors: "+t.map(function(n){return n.toString()}).filter(function(n,t,e){return e.indexOf(n)===t}).join("\n")}function N(n,e,r,i){this._e=t(),this.failures=e,this.failedKeys=i,this.successCount=r}function q(n,e){this._e=t(),this.name="BulkError",this.failures=e,this.message=M(n,e)}function F(n,t){if(!n||n instanceof B||n instanceof TypeError||n instanceof SyntaxError||!n.name||!Wn[n.name])return n;var e=new Wn[n.name](t||n.message,n);return"stack"in n&&v(e,"stack",{get:function(){return this.inner.stack}}),e}function R(n){function t(n,t,i){if("object"==typeof n)return e(n);t||(t=f),i||(i=r);var a={subscribers:[],fire:i,subscribe:function(n){a.subscribers.indexOf(n)===-1&&(a.subscribers.push(n),a.fire=t(a.fire,n))},unsubscribe:function(n){a.subscribers=a.subscribers.filter(function(t){return t!==n}),a.fire=a.subscribers.reduce(t,i)}};return o[n]=u[n]=a,a}function e(n){Cn(n).forEach(function(e){var r=n[e];if(On(r))t(e,n[e][0],n[e][1]);else{if("asap"!==r)throw new Ln.InvalidArgument("Invalid event config");var o=t(e,i,function(){for(var n=arguments.length,t=new Array(n);n--;)t[n]=arguments[n];o.subscribers.forEach(function(n){k(function(){n.apply(null,t)})})})}})}var o={},u=function(t,e){if(e){for(var r=arguments.length,i=new Array(r-1);--r;)i[r-1]=arguments[r];return o[t].subscribe.apply(null,i),n}if("string"==typeof t)return o[t]};u.addEventType=t;for(var a=1,c=arguments.length;a<c;++a)t(arguments[a]);return u}function U(n){if("object"!=typeof this)throw new TypeError("Promises must be constructed via new");this._listeners=[],this.onuncatched=r,this._lib=!1;var e=this._PSD=ut;if(In&&(this._stackHolder=t(),this._prev=null,this._numPrev=0,Q(this,rt)),"function"!=typeof n){if(n!==Gn)throw new TypeError("Not a function");return this._state=arguments[1],this._value=arguments[2],void(this._state===!1&&L(this,this._value))}this._state=null,this._value=null,++e.ref,V(this,n)}function z(n,t,e,r){this.onFulfilled="function"==typeof n?n:null,this.onRejected="function"==typeof t?t:null,this.resolve=e,this.reject=r,this.psd=ut}function V(n,t){try{t(function(t){if(null===n._state){if(t===n)throw new TypeError("A promise cannot be resolved with itself.");var e=n._lib&&$();t&&"function"==typeof t.then?V(n,function(n,e){t instanceof U?t._then(n,e):t.then(n,e)}):(n._state=!0,n._value=t,W(n)),e&&X()}},L.bind(null,n))}catch(e){L(n,e)}}function L(n,t){if(et.push(t),null===n._state){var e=n._lib&&$();t=it(t),n._state=!1,n._value=t,In&&null!==t&&"object"==typeof t&&!t._promise&&A(function(){var e=m(t,"stack");t._promise=n,v(t,"stack",{get:function(){return Yn?e&&(e.get?e.get.apply(t):e.value):n.stack}})}),tn(n),W(n),e&&X()}}function W(n){var t=n._listeners;n._listeners=[];for(var e=0,r=t.length;e<r;++e)H(n,t[e]);var i=n._PSD;--i.ref||i.finalize(),0===ct&&(++ct,Xn(function(){0===--ct&&Z()},[]))}function H(n,t){if(null===n._state)return void n._listeners.push(t);var e=n._state?t.onFulfilled:t.onRejected;if(null===e)return(n._state?t.resolve:t.reject)(n._value);var r=t.psd;++r.ref,++ct,Xn(G,[e,n,t])}function G(n,t,e){var r=ut,i=e.psd;try{i!==r&&(ut=i),rt=t;var o,u=t._value;t._state?o=n(u):(et.length&&(et=[]),o=n(u),et.indexOf(u)===-1&&en(t)),e.resolve(o)}catch(a){e.reject(a)}finally{i!==r&&(ut=r),rt=null,0===--ct&&Z(),--i.ref||i.finalize()}}function J(n,t,r){if(t.length===r)return t;var i="";if(n._state===!1){var o,u,a=n._value;null!=a?(o=a.name||"Error",u=a.message||a,i=e(a,0)):(o=a,u=""),t.push(o+(u?": "+u:"")+i)}return In&&(i=e(n._stackHolder,2),i&&t.indexOf(i)===-1&&t.push(i),n._prev&&J(n._prev,t,r)),t}function Q(n,t){var e=t?t._numPrev+1:0;e<Jn&&(n._prev=t,n._numPrev=e)}function Y(){$()&&X()}function $(){var n=Zn;return Zn=!1,nt=!1,n}function X(){var n,t,e;do for(;at.length>0;)for(n=at,at=[],e=n.length,t=0;t<e;++t){var r=n[t];r[0].apply(null,r[1])}while(at.length>0);Zn=!0,nt=!0}function Z(){var n=tt;tt=[],n.forEach(function(n){n._PSD.onunhandled.call(null,n._value,n)});for(var t=st.slice(0),e=t.length;e;)t[--e]()}function nn(n){function t(){n(),st.splice(st.indexOf(t),1)}st.push(t),++ct,Xn(function(){0===--ct&&Z()},[])}function tn(n){tt.some(function(t){return t._value===n._value})||tt.push(n)}function en(n){for(var t=tt.length;t;)if(tt[--t]._value===n._value)return void tt.splice(t,1)}function rn(n){console.warn("Unhandled rejection: "+(n.stack||n))}function on(n){return new U(Gn,(!1),n)}function un(n,t){var e=ut;return function(){var r=$(),i=ut;try{return i!==e&&(ut=e),n.apply(this,arguments)}catch(o){t&&t(o)}finally{i!==e&&(ut=i),r&&X()}}}function an(n,t,e,r){var i=ut,o=Object.create(i);o.parent=i,o.ref=0,o.global=!1,++i.ref,o.finalize=function(){--this.parent.ref||this.parent.finalize()};var u=cn(o,n,t,e,r);return 0===o.ref&&o.finalize(),u}function cn(n,t,e,r,i){var o=ut;try{return n!==o&&(ut=n),t(e,r,i)}finally{n!==o&&(ut=o)}}function sn(n,t){var e;try{e=t.onuncatched(n)}catch(r){}if(e!==!1)try{U.on.error.fire(n,t)}catch(r){}}function fn(n,e){function u(){et.on("versionchange",function(n){n.newVersion>0?console.warn("Another connection wants to upgrade database '"+et.name+"'. Closing db now to resume the upgrade."):console.warn("Another connection wants to delete database '"+et.name+"'. Closing db now to resume the delete request."),et.close()}),et.on("blocked",function(n){!n.newVersion||n.newVersion<n.oldVersion?console.warn("Dexie.delete('"+et.name+"') was blocked"):console.warn("Upgrade '"+et.name+"' blocked by other connection holding version "+n.oldVersion/10)})}function f(n){this._cfg={version:n,storesSource:null,dbschema:{},tables:{},contentUpgrade:null},this.stores({})}function m(n,t,e){var r=et._createTransaction(tt,Jn,Hn);r.create(t),r._completion["catch"](e);var i=r._reject.bind(r);an(function(){ut.trans=r,0===n?(Cn(Hn).forEach(function(n){B(t,n,Hn[n].primKey,Hn[n].indexes)}),U.follow(function(){return et.on.populate.fire(r)})["catch"](i)):k(n,r,t)["catch"](i)})}function k(n,t,e){function r(){return i.length?U.resolve(i.shift()(t.idbtrans)).then(r):U.resolve()}var i=[],o=Gn.filter(function(t){return t._cfg.version===n})[0];if(!o)throw new Ln.Upgrade("Dexie specification of currently installed DB version is missing");Hn=et._dbSchema=o._cfg.dbschema;var u=!1,a=Gn.filter(function(t){return t._cfg.version>n});return a.forEach(function(n){i.push(function(){var r=Hn,i=n._cfg.dbschema;Tn(r,e),Tn(i,e),Hn=et._dbSchema=i;var o=j(r,i);if(o.add.forEach(function(n){B(e,n[0],n[1].primKey,n[1].indexes)}),o.change.forEach(function(n){if(n.recreate)throw new Ln.Upgrade("Not yet support for changing primary key");var t=e.objectStore(n.name);n.add.forEach(function(n){z(t,n)}),n.change.forEach(function(n){t.deleteIndex(n.name),z(t,n)}),n.del.forEach(function(n){t.deleteIndex(n)})}),n._cfg.contentUpgrade)return u=!0,U.follow(function(){n._cfg.contentUpgrade(t)})}),i.push(function(t){if(u&&!mt){var e=n._cfg.dbschema;F(e,t)}})}),r().then(function(){M(Hn,e)})}function j(n,t){var e={del:[],add:[],change:[]};for(var r in n)t[r]||e.del.push(r);for(r in t){var i=n[r],o=t[r];if(i){var u={name:r,def:o,recreate:!1,del:[],add:[],change:[]};if(i.primKey.src!==o.primKey.src)u.recreate=!0,e.change.push(u);else{var a=i.idxByName,c=o.idxByName;for(var s in a)c[s]||u.del.push(s);for(s in c){var f=a[s],l=c[s];f?f.src!==l.src&&u.change.push(l):u.add.push(l)}(u.del.length>0||u.add.length>0||u.change.length>0)&&e.change.push(u)}}else e.add.push([r,o])}return e}function B(n,t,e,r){var i=n.db.createObjectStore(t,e.keyPath?{keyPath:e.keyPath,autoIncrement:e.auto}:{autoIncrement:e.auto});return r.forEach(function(n){z(i,n)}),i}function M(n,t){Cn(n).forEach(function(e){t.db.objectStoreNames.contains(e)||B(t,e,n[e].primKey,n[e].indexes)})}function F(n,t){for(var e=0;e<t.db.objectStoreNames.length;++e){var r=t.db.objectStoreNames[e];null==n[r]&&t.db.deleteObjectStore(r)}}function z(n,t){n.createIndex(t.name,t.keyPath,{unique:t.unique,multiEntry:t.multi})}function V(n){return et.on.error.fire(n)}function L(n,t,e){if(Zn||ut.letThrough){var i=et._createTransaction(n,t,Hn);return i._promise(n,function(n,t){an(function(){ut.trans=i,e(n,t,i)})}).then(function(n){return i._completion.then(function(){return n})})}if(!Xn){if(!zn)return E(new Ln.DatabaseClosed,V);et.open()["catch"](r)}return rt.then(function(){return L(n,t,e)})}function W(n,t,e){this.name=n,this.schema=t,this.hook=Qn[n]?Qn[n].hook:R(null,{creating:[a,r],reading:[o,i],updating:[s,r],deleting:[c,r]}),this._collClass=e||$}function H(n,t,e){W.call(this,n,t,e||Z)}function G(n,t,e){return(e?yn:vn)(function(e){n.push(e),t&&t()})}function J(n,t,e,r,i){return new U(function(o,u){var a=e.length,c=a-1;if(0===a)return o();if(r){var s,f=yn(u),l=pn(null);A(function(){for(var r=0;r<a;++r){s={onsuccess:null,onerror:null};var u=e[r];i.call(s,u[0],u[1],t);var h=n["delete"](u[0]);h._hookCtx=s,h.onerror=f,r===c?h.onsuccess=pn(o):h.onsuccess=l}},function(n){throw s.onerror&&s.onerror(n),n})}else for(var h=0;h<a;++h){var d=n["delete"](e[h]);d.onerror=un(vn(u)),h===c&&(d.onsuccess=un(function(){return o()}))}}).uncaught(V)}function Q(n,t,e,r){var i=this;this.db=et,this.mode=n,this.storeNames=t,this.idbtrans=null,this.on=R(this,"complete","error","abort"),this.parent=r||null,this.active=!0,this._tables=null,this._reculock=0,this._blockedFuncs=[],this._psd=null,this._dbschema=e,this._resolve=null,this._reject=null,this._completion=new U(function(n,t){i._resolve=n,i._reject=t}).uncaught(V),this._completion.then(function(){i.on.complete.fire()},function(n){return i.on.error.fire(n),i.parent?i.parent._reject(n):i.active&&i.idbtrans&&i.idbtrans.abort(),i.active=!1,E(n)})}function Y(n,t,e){this._ctx={table:n,index:":id"===t?null:t,collClass:n._collClass,or:e}}function $(n,t){var e=null,r=null;if(t)try{e=t()}catch(i){r=i}var o=n._ctx,u=o.table;this._ctx={table:u,index:o.index,isPrimKey:!o.index||u.schema.primKey.keyPath&&o.index===u.schema.primKey.name,range:e,keysOnly:!1,dir:"next",unique:"",algorithm:null,filter:null,replayFilter:null,justLimit:!0,isMatch:null,offset:0,limit:1/0,error:r,or:o.or,valueMapper:u.hook.reading.fire}}function X(n,t){return!(n.filter||n.algorithm||n.or)&&(t?n.justLimit:!n.replayFilter)}function Z(){$.apply(this,arguments)}function nn(n,t){return n._cfg.version-t._cfg.version}function tn(n,t,e,r){t.forEach(function(t){var i=et._tableFactory(e,r[t]);n.forEach(function(n){t in n||(n[t]=i)})})}function en(n){n.forEach(function(n){for(var t in n)n[t]instanceof W&&delete n[t]})}function rn(n,t,e,r,i,o){var u=o?function(n,t,r){return e(o(n),t,r)}:e,a=un(u,i);n.onerror||(n.onerror=vn(i)),t?n.onsuccess=I(function(){var e=n.result;if(e){var o=function(){e["continue"]()};t(e,function(n){o=n},r,i)&&a(e.value,e,function(n){o=n}),o()}else r()},i):n.onsuccess=I(function(){var t=n.result;if(t){var e=function(){t["continue"]()};a(t.value,t,function(n){e=n}),e()}else r()},i)}function on(n){var t=[];return n.split(",").forEach(function(n){n=n.trim();var e=n.replace(/([&*]|\+\+)/g,""),r=/^\[/.test(e)?e.match(/^\[(.*)\]$/)[1].split("+"):e;t.push(new _n(e,r||null,/\&/.test(n),/\*/.test(n),/\+\+/.test(n),On(r),/\./.test(n)))}),t}function cn(n,t){return Vn.cmp(n,t)}function sn(n,t){return cn(n,t)<0?n:t}function ln(n,t){return cn(n,t)>0?n:t}function An(n,t){return Vn.cmp(n,t)}function En(n,t){return Vn.cmp(t,n)}function jn(n,t){return n<t?-1:n===t?0:1}function Pn(n,t){return n>t?-1:n===t?0:1}function Dn(n,t){return n?t?function(){return n.apply(this,arguments)&&t.apply(this,arguments)}:n:t}function Sn(){if(et.verno=Yn.version/10,et._dbSchema=Hn={},Jn=g(Yn.objectStoreNames,0),0!==Jn.length){var n=Yn.transaction(kn(Jn),"readonly");Jn.forEach(function(t){for(var e=n.objectStore(t),r=e.keyPath,i=r&&"string"==typeof r&&r.indexOf(".")!==-1,o=new _n(r,r||"",(!1),(!1),(!!e.autoIncrement),r&&"string"!=typeof r,i),u=[],a=0;a<e.indexNames.length;++a){var c=e.index(e.indexNames[a]);r=c.keyPath,i=r&&"string"==typeof r&&r.indexOf(".")!==-1;var s=new _n(c.name,r,(!!c.unique),(!!c.multiEntry),(!1),r&&"string"!=typeof r,i);u.push(s)}Hn[t]=new wn(t,o,u,{})}),tn([Qn,Q.prototype],Cn(Hn),tt,Hn)}}function Tn(n,t){for(var e=t.db.objectStoreNames,r=0;r<e.length;++r){var i=e[r],o=t.objectStore(i);qn="getAll"in o;for(var u=0;u<o.indexNames.length;++u){var a=o.indexNames[u],c=o.index(a).keyPath,s="string"==typeof c?c:"["+g(c).join("+")+"]";if(n[i]){var f=n[i].idxByName[s];f&&(f.name=a)}}}}function Kn(n){et.on("blocked").fire(n),vt.filter(function(n){return n.name===et.name&&n!==et&&!n._vcFired}).map(function(t){return t.on("versionchange").fire(n)})}var Bn,Nn,qn,Fn=fn.dependencies,Rn=h({addons:fn.addons,autoOpen:!0,indexedDB:Fn.indexedDB,IDBKeyRange:Fn.IDBKeyRange},e),Un=Rn.addons,zn=Rn.autoOpen,Vn=Rn.indexedDB,Wn=Rn.IDBKeyRange,Hn=this._dbSchema={},Gn=[],Jn=[],Qn={},Yn=null,$n=null,Xn=!1,Zn=!1,nt="readonly",tt="readwrite",et=this,rt=new U(function(n){Bn=n}),it=new U(function(n,t){Nn=t}),ot=!0,at=!!xn(Vn);this.version=function(n){if(Yn||Xn)throw new Ln.Schema("Cannot add version when database is open");this.verno=Math.max(this.verno,n);var t=Gn.filter(function(t){return t._cfg.version===n})[0];return t?t:(t=new f(n),Gn.push(t),Gn.sort(nn),t)},h(f.prototype,{stores:function(n){this._cfg.storesSource=this._cfg.storesSource?h(this._cfg.storesSource,n):n;var t={};Gn.forEach(function(n){h(t,n._cfg.storesSource)});var e=this._cfg.dbschema={};return this._parseStoresSpec(t,e),Hn=et._dbSchema=e,en([Qn,et,Q.prototype]),tn([Qn,et,Q.prototype,this._cfg.tables],Cn(e),tt,e),Jn=Cn(e),this},upgrade:function(n){var t=this;return _t(function(){n(et._createTransaction(tt,Cn(t._cfg.dbschema),t._cfg.dbschema))}),this._cfg.contentUpgrade=n,this},_parseStoresSpec:function(n,t){Cn(n).forEach(function(e){if(null!==n[e]){var r={},i=on(n[e]),o=i.shift();if(o.multi)throw new Ln.Schema("Primary key cannot be multi-valued");o.keyPath&&O(r,o.keyPath,o.auto?0:o.keyPath),i.forEach(function(n){if(n.auto)throw new Ln.Schema("Only primary key can be marked as autoIncrement (++)");if(!n.keyPath)throw new Ln.Schema("Index must have a name and cannot be an empty string");O(r,n.keyPath,n.compound?n.keyPath.map(function(){return""}):"")}),t[e]=new wn(e,o,i,r)}})}}),this._allTables=Qn,this._tableFactory=function(n,t){return n===nt?new W(t.name,t,$):new H(t.name,t)},this._createTransaction=function(n,t,e,r){return new Q(n,t,e,r)},this._whenReady=function(n){return new U(wt||Zn||ut.letThrough?n:function(t,e){if(!Xn){if(!zn)return void e(new Ln.DatabaseClosed);et.open()["catch"](r)}rt.then(function(){n(t,e)})}).uncaught(V)},this.verno=0,this.open=function(){if(Xn||Yn)return rt.then(function(){return $n?E($n,V):et});In&&(it._stackHolder=t()),Xn=!0,$n=null,Zn=!1;var e=Bn,r=null;return U.race([it,new U(function(t,e){if(_(function(){return t()}),Gn.length>0&&(ot=!1),!Vn)throw new Ln.MissingAPI("indexedDB API not found. If using IE10+, make sure to run your code on a server URL (not locally). If using old Safari versions, make sure to include indexedDB polyfill.");var i=ot?Vn.open(n):Vn.open(n,Math.round(10*et.verno));if(!i)throw new Ln.MissingAPI("IndexedDB API not available");i.onerror=un(vn(e)),i.onblocked=un(Kn),i.onupgradeneeded=un(function(t){if(r=i.transaction,ot&&!et._allowEmptyDB){i.onerror=mn,r.abort(),i.result.close();var o=Vn.deleteDatabase(n);o.onsuccess=o.onerror=un(function(){e(new Ln.NoSuchDatabase("Database "+n+" doesnt exist"))})}else{r.onerror=un(vn(e));var u=t.oldVersion>Math.pow(2,62)?0:t.oldVersion;m(u/10,r,e,i)}},e),i.onsuccess=un(function(){if(r=null,Yn=i.result,vt.push(et),ot)Sn();else if(Yn.objectStoreNames.length>0)try{Tn(Hn,Yn.transaction(kn(Yn.objectStoreNames),nt))}catch(e){}Yn.onversionchange=un(function(n){et._vcFired=!0,et.on("versionchange").fire(n)}),at||gn(function(t){if(t.indexOf(n)===-1)return t.push(n)}),t()},e)})]).then(function(){return fn.vip(et.on.ready.fire)}).then(function(){return Xn=!1,et})["catch"](function(n){try{r&&r.abort()}catch(t){}return Xn=!1,et.close(),$n=n,E($n,V)})["finally"](function(){Zn=!0,e()})},this.close=function(){var n=vt.indexOf(et);if(n>=0&&vt.splice(n,1),Yn){try{Yn.close()}catch(t){}Yn=null}zn=!1,$n=new Ln.DatabaseClosed,Xn&&Nn($n),rt=new U(function(n){Bn=n}),it=new U(function(n,t){Nn=t})},this["delete"]=function(){var t=arguments.length>0;return new U(function(e,r){function i(){et.close();var t=Vn.deleteDatabase(n);t.onsuccess=un(function(){at||gn(function(t){var e=t.indexOf(n);if(e>=0)return t.splice(e,1)}),e()}),t.onerror=un(vn(r)),t.onblocked=Kn}if(t)throw new Ln.InvalidArgument("Arguments not allowed in db.delete()");Xn?rt.then(i):i()}).uncaught(V)},this.backendDB=function(){return Yn},this.isOpen=function(){return null!==Yn},this.hasFailed=function(){return null!==$n},this.dynamicallyOpened=function(){return ot},this.name=n,v(this,"tables",{get:function(){return Cn(Qn).map(function(n){return Qn[n]})}}),this.on=R(this,"error","populate","blocked","versionchange",{ready:[l,r]}),this.on.ready.subscribe=b(this.on.ready.subscribe,function(n){return function(t,e){fn.vip(function(){n(t),e||n(function r(){et.on.ready.unsubscribe(t),et.on.ready.unsubscribe(r)})})}}),_t(function(){et.on("populate").fire(et._createTransaction(tt,Jn,Hn)),et.on("error").fire(new Error)}),this.transaction=function(n,t,e){function r(t){var r=ut;t(U.resolve().then(function(){return an(function(){ut.transless=ut.transless||r;var t=et._createTransaction(n,s,Hn,a);ut.trans=t,a?t.idbtrans=a.idbtrans:t.create();var i=s.map(function(n){return t.tables[n]});i.push(t);var o;return U.follow(function(){if(o=e.apply(t,i))if("function"==typeof o.next&&"function"==typeof o["throw"])o=bn(o);else if("function"==typeof o.then&&!d(o,"_PSD"))throw new Ln.IncompatiblePromise("Incompatible Promise returned from transaction scope (read more at http://tinyurl.com/znyqjqc). Transaction scope: "+e.toString())}).uncaught(V).then(function(){return a&&t._resolve(),t._completion}).then(function(){return o})["catch"](function(n){return t._reject(n),E(n)})})}))}var i=arguments.length;if(i<2)throw new Ln.InvalidArgument("Too few arguments");for(var o=new Array(i-1);--i;)o[i-1]=arguments[i];e=o.pop();var u=K(o),a=ut.trans;a&&a.db===et&&n.indexOf("!")===-1||(a=null);var c=n.indexOf("?")!==-1;n=n.replace("!","").replace("?","");try{var s=u.map(function(n){var t=n instanceof W?n.name:n;if("string"!=typeof t)throw new TypeError("Invalid table argument to Dexie.transaction(). Only Table or String are allowed");return t});if("r"==n||n==nt)n=nt;else{if("rw"!=n&&n!=tt)throw new Ln.InvalidArgument("Invalid transaction mode: "+n);n=tt}if(a){if(a.mode===nt&&n===tt){if(!c)throw new Ln.SubTransaction("Cannot enter a sub-transaction with READWRITE mode when parent transaction is READONLY");a=null}a&&s.forEach(function(n){if(!d(a.tables,n)){if(!c)throw new Ln.SubTransaction("Table "+n+" not included in parent transaction.");a=null}})}}catch(f){return a?a._promise(null,function(n,t){t(f)}):E(f,V)}return a?a._promise(n,r,"lock"):et._whenReady(r)},this.table=function(n){if(wt&&ot)return new H(n);if(!d(Qn,n))throw new Ln.InvalidTable("Table "+n+" does not exist");return Qn[n]},p(W.prototype,{_trans:function(n,t,e){var r=ut.trans;return r&&r.db===et?r._promise(n,t,e):L(n,[this.name],t)},_idbstore:function(n,t,e){function r(n,e,r){t(n,e,r.idbtrans.objectStore(o),r)}if(wt)return new U(t);var i=ut.trans,o=this.name;return i&&i.db===et?i._promise(n,r,e):L(n,[this.name],r)},get:function(n,t){var e=this;return this._idbstore(nt,function(t,r,i){wt&&t(e.schema.instanceTemplate);var o=i.get(n);o.onerror=vn(r),o.onsuccess=function(){t(e.hook.reading.fire(o.result))}}).then(t)},where:function(n){return new Y(this,n)},count:function(n){return this.toCollection().count(n)},offset:function(n){return this.toCollection().offset(n)},limit:function(n){return this.toCollection().limit(n)},reverse:function(){return this.toCollection().reverse()},filter:function(n){return this.toCollection().and(n)},each:function(n){return this.toCollection().each(n)},toArray:function(n){return this.toCollection().toArray(n)},orderBy:function(n){return new this._collClass(new Y(this,n))},toCollection:function(){return new this._collClass(new Y(this))},mapToClass:function(n,t){this.schema.mappedClass=n;var e=Object.create(n.prototype);t&&hn(e,t),this.schema.instanceTemplate=e;var r=function(t){if(!t)return t;var e=Object.create(n.prototype);for(var r in t)d(t,r)&&(e[r]=t[r]);return e};return this.schema.readHook&&this.hook.reading.unsubscribe(this.schema.readHook),this.schema.readHook=r,this.hook("reading",r),n},defineClass:function(n){return this.mapToClass(fn.defineClass(n),n)}}),y(H).from(W).extend({bulkDelete:function(n){return this.hook.deleting.fire===r?this._idbstore(tt,function(t,e,i,o){t(J(i,o,n,!1,r))}):this.where(":id").anyOf(n)["delete"]().then(function(){})},bulkPut:function(n,t){var e=this;return this._idbstore(tt,function(i,o,u){if(!u.keyPath&&!e.schema.primKey.auto&&!t)throw new Ln.InvalidArgument("bulkPut() with non-inbound keys requires keys array in second argument");if(u.keyPath&&t)throw new Ln.InvalidArgument("bulkPut(): keys argument invalid on tables with inbound keys");if(t&&t.length!==n.length)throw new Ln.InvalidArgument("Arguments objects and keys must have the same length");if(0===n.length)return i();var a,c,s=function(n){0===f.length?i(n):o(new q(e.name+".bulkPut(): "+f.length+" of "+l+" operations failed",f))},f=[],l=n.length,h=e;if(e.hook.creating.fire===r&&e.hook.updating.fire===r){c=G(f);for(var d=0,p=n.length;d<p;++d)a=t?u.put(n[d],t[d]):u.put(n[d]),a.onerror=c;a.onerror=G(f,s),a.onsuccess=dn(s)}else{var v=t||u.keyPath&&n.map(function(n){return C(n,u.keyPath)}),y=v&&x(v,function(t,e){return null!=t&&[t,n[e]]}),m=v?h.where(":id").anyOf(v.filter(function(n){return null!=n})).modify(function(){this.value=y[this.primKey],y[this.primKey]=null})["catch"](N,function(n){f=n.failures}).then(function(){for(var e=[],r=t&&[],i=v.length-1;i>=0;--i){var o=v[i];(null==o||y[o])&&(e.push(n[i]),t&&r.push(o),null!=o&&(y[o]=null))}return e.reverse(),t&&r.reverse(),h.bulkAdd(e,r)}).then(function(n){var t=v[v.length-1];return null!=t?t:n}):h.bulkAdd(n);m.then(s)["catch"](q,function(n){f=f.concat(n.failures),s()})["catch"](o)}},"locked")},bulkAdd:function(n,t){var e=this,i=this.hook.creating.fire;return this._idbstore(tt,function(o,u,a,c){function s(n){0===d.length?o(n):u(new q(e.name+".bulkAdd(): "+d.length+" of "+p+" operations failed",d))}if(!a.keyPath&&!e.schema.primKey.auto&&!t)throw new Ln.InvalidArgument("bulkAdd() with non-inbound keys requires keys array in second argument");if(a.keyPath&&t)throw new Ln.InvalidArgument("bulkAdd(): keys argument invalid on tables with inbound keys");if(t&&t.length!==n.length)throw new Ln.InvalidArgument("Arguments objects and keys must have the same length");if(0===n.length)return o();var f,l,h,d=[],p=n.length;if(i!==r){var v,y=a.keyPath;l=G(d,null,!0),h=pn(null),A(function(){for(var e=0,r=n.length;e<r;++e){v={onerror:null,onsuccess:null};var o=t&&t[e],u=n[e],s=t?o:y?C(u,y):void 0,d=i.call(v,s,u,c);null==s&&null!=d&&(y?(u=D(u),O(u,y,d)):o=d),f=null!=o?a.add(u,o):a.add(u),f._hookCtx=v,e<r-1&&(f.onerror=l,v.onsuccess&&(f.onsuccess=h))}},function(n){throw v.onerror&&v.onerror(n),n}),f.onerror=G(d,s,!0),f.onsuccess=pn(s)}else{l=G(d);for(var m=0,g=n.length;m<g;++m)f=t?a.add(n[m],t[m]):a.add(n[m]),f.onerror=l;f.onerror=G(d,s),f.onsuccess=dn(s)}})},add:function(n,t){var e=this.hook.creating.fire;return this._idbstore(tt,function(i,o,u,a){var c={onsuccess:null,onerror:null};if(e!==r){var s=null!=t?t:u.keyPath?C(n,u.keyPath):void 0,f=e.call(c,s,n,a);null==s&&null!=f&&(u.keyPath?O(n,u.keyPath,f):t=f)}try{var l=null!=t?u.add(n,t):u.add(n);l._hookCtx=c,l.onerror=yn(o),l.onsuccess=pn(function(t){var e=u.keyPath;e&&O(n,e,t),i(t)})}catch(h){throw c.onerror&&c.onerror(h),h}})},put:function(n,t){var e=this,i=this.hook.creating.fire,o=this.hook.updating.fire;return i!==r||o!==r?this._trans(tt,function(r,i,o){var u=void 0!==t?t:e.schema.primKey.keyPath&&C(n,e.schema.primKey.keyPath);null==u?o.tables[e.name].add(n).then(r,i):(o._lock(),n=D(n),o.tables[e.name].where(":id").equals(u).modify(function(){this.value=n}).then(function(r){return 0===r?o.tables[e.name].add(n,t):u})["finally"](function(){o._unlock()}).then(r,i))}):this._idbstore(tt,function(e,r,i){var o=void 0!==t?i.put(n,t):i.put(n);o.onerror=vn(r),o.onsuccess=function(t){var r=i.keyPath;r&&O(n,r,t.target.result),e(o.result)}})},"delete":function(n){return this.hook.deleting.subscribers.length?this.where(":id").equals(n)["delete"]():this._idbstore(tt,function(t,e,r){var i=r["delete"](n);i.onerror=vn(e),i.onsuccess=function(){t(i.result)}})},clear:function(){return this.hook.deleting.subscribers.length?this.toCollection()["delete"]():this._idbstore(tt,function(n,t,e){var r=e.clear();r.onerror=vn(t),r.onsuccess=function(){n(r.result)}})},update:function(n,t){if("object"!=typeof t||On(t))throw new Ln.InvalidArgument("Modifications must be an object.");if("object"!=typeof n||On(n))return this.where(":id").equals(n).modify(t);Cn(t).forEach(function(e){O(n,e,t[e])});var e=C(n,this.schema.primKey.keyPath);return void 0===e?E(new Ln.InvalidArgument("Given object does not contain its primary key"),V):this.where(":id").equals(e).modify(t)}}),p(Q.prototype,{_lock:function(){return w(!ut.global),++this._reculock,1!==this._reculock||ut.global||(ut.lockOwnerFor=this),this},_unlock:function(){if(w(!ut.global),0===--this._reculock)for(ut.global||(ut.lockOwnerFor=null);this._blockedFuncs.length>0&&!this._locked();){var n=this._blockedFuncs.shift();try{n()}catch(t){}}return this},_locked:function(){return this._reculock&&ut.lockOwnerFor!==this},create:function(n){var t=this;if(w(!this.idbtrans),!n&&!Yn)switch($n&&$n.name){case"DatabaseClosedError":throw new Ln.DatabaseClosed($n);case"MissingAPIError":throw new Ln.MissingAPI($n.message,$n);default:throw new Ln.OpenFailed($n)}if(!this.active)throw new Ln.TransactionInactive;return w(null===this._completion._state),n=this.idbtrans=n||Yn.transaction(kn(this.storeNames),this.mode),n.onerror=un(function(e){mn(e),t._reject(n.error)}),n.onabort=un(function(n){mn(n),t.active&&t._reject(new Ln.Abort),t.active=!1,t.on("abort").fire(n)}),n.oncomplete=un(function(){t.active=!1,t._resolve()}),this},_promise:function(n,t,e){var r=this;return an(function(){var i;return r._locked()?i=new U(function(i,o){r._blockedFuncs.push(function(){r._promise(n,t,e).then(i,o)})}):(i=r.active?new U(function(i,o){if(n===tt&&r.mode!==tt)throw new Ln.ReadOnly("Transaction is readonly");!r.idbtrans&&n&&r.create(),e&&r._lock(),t(i,o,r)}):E(new Ln.TransactionInactive),r.active&&e&&i["finally"](function(){r._unlock()})),i._lib=!0,i.uncaught(V)})},abort:function(){this.active&&this._reject(new Ln.Abort),this.active=!1},tables:{get:function(){return this._tables?this._tables:this._tables=x(this.storeNames,function(n){return[n,Qn[n]]})}},complete:function(n){return this.on("complete",n)},error:function(n){return this.on("error",n)},table:function(n){if(this.storeNames.indexOf(n)===-1)throw new Ln.InvalidTable("Table "+n+" not in transaction");return Qn[n]}}),p(Y.prototype,function(){function n(n,t,e){var r=n instanceof Y?new n._ctx.collClass(n):n;return r._ctx.error=e?new e(t):new TypeError(t),
r}function t(n){return new n._ctx.collClass(n,function(){return Wn.only("")}).limit(0)}function e(n){return"next"===n?function(n){return n.toUpperCase()}:function(n){return n.toLowerCase()}}function r(n){return"next"===n?function(n){return n.toLowerCase()}:function(n){return n.toUpperCase()}}function i(n,t,e,r,i,o){for(var u=Math.min(n.length,r.length),a=-1,c=0;c<u;++c){var s=t[c];if(s!==r[c])return i(n[c],e[c])<0?n.substr(0,c)+e[c]+e.substr(c+1):i(n[c],r[c])<0?n.substr(0,c)+r[c]+e.substr(c+1):a>=0?n.substr(0,a)+t[a]+e.substr(a+1):null;i(n[c],s)<0&&(a=c)}return u<r.length&&"next"===o?n+e.substr(n.length):u<n.length&&"prev"===o?n.substr(0,e.length):a<0?null:n.substr(0,a)+r[a]+e.substr(a+1)}function o(t,o,u,a){function c(n){s=e(n),f=r(n),l="next"===n?jn:Pn;var t=u.map(function(n){return{lower:f(n),upper:s(n)}}).sort(function(n,t){return l(n.lower,t.lower)});h=t.map(function(n){return n.upper}),d=t.map(function(n){return n.lower}),p=n,v="next"===n?"":a}var s,f,l,h,d,p,v,y=u.length;if(!u.every(function(n){return"string"==typeof n}))return n(t,pt);c("next");var m=new t._ctx.collClass(t,function(){return Wn.bound(h[0],d[y-1]+a)});m._ondirectionchange=function(n){c(n)};var g=0;return m._addAlgorithm(function(n,t,e){var r=n.key;if("string"!=typeof r)return!1;var u=f(r);if(o(u,d,g))return!0;for(var a=null,c=g;c<y;++c){var s=i(r,u,h[c],d[c],l,p);null===s&&null===a?g=c+1:(null===a||l(a,s)>0)&&(a=s)}return t(null!==a?function(){n["continue"](a+v)}:e),!1}),m}return{between:function(e,r,i,o){i=i!==!1,o=o===!0;try{return cn(e,r)>0||0===cn(e,r)&&(i||o)&&(!i||!o)?t(this):new this._ctx.collClass(this,function(){return Wn.bound(e,r,!i,!o)})}catch(u){return n(this,dt)}},equals:function(n){return new this._ctx.collClass(this,function(){return Wn.only(n)})},above:function(n){return new this._ctx.collClass(this,function(){return Wn.lowerBound(n,!0)})},aboveOrEqual:function(n){return new this._ctx.collClass(this,function(){return Wn.lowerBound(n)})},below:function(n){return new this._ctx.collClass(this,function(){return Wn.upperBound(n,!0)})},belowOrEqual:function(n){return new this._ctx.collClass(this,function(){return Wn.upperBound(n)})},startsWith:function(t){return"string"!=typeof t?n(this,pt):this.between(t,t+lt,!0,!0)},startsWithIgnoreCase:function(n){return""===n?this.startsWith(n):o(this,function(n,t){return 0===n.indexOf(t[0])},[n],lt)},equalsIgnoreCase:function(n){return o(this,function(n,t){return n===t[0]},[n],"")},anyOfIgnoreCase:function(){var n=T.apply(Mn,arguments);return 0===n.length?t(this):o(this,function(n,t){return t.indexOf(n)!==-1},n,"")},startsWithAnyOfIgnoreCase:function(){var n=T.apply(Mn,arguments);return 0===n.length?t(this):o(this,function(n,t){return t.some(function(t){return 0===n.indexOf(t)})},n,lt)},anyOf:function(){var e=T.apply(Mn,arguments),r=An;try{e.sort(r)}catch(i){return n(this,dt)}if(0===e.length)return t(this);var o=new this._ctx.collClass(this,function(){return Wn.bound(e[0],e[e.length-1])});o._ondirectionchange=function(n){r="next"===n?An:En,e.sort(r)};var u=0;return o._addAlgorithm(function(n,t,i){for(var o=n.key;r(o,e[u])>0;)if(++u,u===e.length)return t(i),!1;return 0===r(o,e[u])||(t(function(){n["continue"](e[u])}),!1)}),o},notEqual:function(n){return this.inAnyRange([[-(1/0),n],[n,ht]],{includeLowers:!1,includeUppers:!1})},noneOf:function(){var t=T.apply(Mn,arguments);if(0===t.length)return new this._ctx.collClass(this);try{t.sort(An)}catch(e){return n(this,dt)}var r=t.reduce(function(n,t){return n?n.concat([[n[n.length-1][1],t]]):[[-(1/0),t]]},null);return r.push([t[t.length-1],ht]),this.inAnyRange(r,{includeLowers:!1,includeUppers:!1})},inAnyRange:function(e,r){function i(n,t){for(var e=0,r=n.length;e<r;++e){var i=n[e];if(cn(t[0],i[1])<0&&cn(t[1],i[0])>0){i[0]=sn(i[0],t[0]),i[1]=ln(i[1],t[1]);break}}return e===r&&n.push(t),n}function o(n,t){return l(n[0],t[0])}function u(n){return!p(n)&&!v(n)}var a=this._ctx;if(0===e.length)return t(this);if(!e.every(function(n){return void 0!==n[0]&&void 0!==n[1]&&An(n[0],n[1])<=0}))return n(this,"First argument to inAnyRange() must be an Array of two-value Arrays [lower,upper] where upper must not be lower than lower",Ln.InvalidArgument);var c,s=!r||r.includeLowers!==!1,f=r&&r.includeUppers===!0,l=An;try{c=e.reduce(i,[]),c.sort(o)}catch(h){return n(this,dt)}var d=0,p=f?function(n){return An(n,c[d][1])>0}:function(n){return An(n,c[d][1])>=0},v=s?function(n){return En(n,c[d][0])>0}:function(n){return En(n,c[d][0])>=0},y=p,m=new a.collClass(this,function(){return Wn.bound(c[0][0],c[c.length-1][1],!s,!f)});return m._ondirectionchange=function(n){"next"===n?(y=p,l=An):(y=v,l=En),c.sort(o)},m._addAlgorithm(function(n,t,e){for(var r=n.key;y(r);)if(++d,d===c.length)return t(e),!1;return!!u(r)||0!==cn(r,c[d][1])&&0!==cn(r,c[d][0])&&(t(function(){l===An?n["continue"](c[d][0]):n["continue"](c[d][1])}),!1)}),m},startsWithAnyOf:function(){var e=T.apply(Mn,arguments);return e.every(function(n){return"string"==typeof n})?0===e.length?t(this):this.inAnyRange(e.map(function(n){return[n,n+lt]})):n(this,"startsWithAnyOf() only works with strings")}}}),p($.prototype,function(){function n(n,t){n.filter=Dn(n.filter,t)}function t(n,t,e){var r=n.replayFilter;n.replayFilter=r?function(){return Dn(r(),t())}:t,n.justLimit=e&&!r}function e(n,t){n.isMatch=Dn(n.isMatch,t)}function r(n,t){if(n.isPrimKey)return t;var e=n.table.schema.idxByName[n.index];if(!e)throw new Ln.Schema("KeyPath "+n.index+" on object store "+t.name+" is not indexed");return t.index(e.name)}function o(n,t){var e=r(n,t);return n.keysOnly&&"openKeyCursor"in e?e.openKeyCursor(n.range||null,n.dir+n.unique):e.openCursor(n.range||null,n.dir+n.unique)}function u(n,t,e,r,i){var u=n.replayFilter?Dn(n.filter,n.replayFilter()):n.filter;n.or?function(){function a(){2===++f&&e()}function c(n,e,i){if(!u||u(e,i,a,r)){var o=e.primaryKey.toString();d(s,o)||(s[o]=!0,t(n,e,i))}}var s={},f=0;n.or._iterate(c,a,r,i),rn(o(n,i),n.algorithm,c,a,r,!n.keysOnly&&n.valueMapper)}():rn(o(n,i),Dn(n.algorithm,u),t,e,r,!n.keysOnly&&n.valueMapper)}function a(n){return n.table.schema.instanceTemplate}return{_read:function(n,t){var e=this._ctx;return e.error?e.table._trans(null,function(n,t){t(e.error)}):e.table._idbstore(nt,n).then(t)},_write:function(n){var t=this._ctx;return t.error?t.table._trans(null,function(n,e){e(t.error)}):t.table._idbstore(tt,n,"locked")},_addAlgorithm:function(n){var t=this._ctx;t.algorithm=Dn(t.algorithm,n)},_iterate:function(n,t,e,r){return u(this._ctx,n,t,e,r)},clone:function(n){var t=Object.create(this.constructor.prototype),e=Object.create(this._ctx);return n&&h(e,n),t._ctx=e,t},raw:function(){return this._ctx.valueMapper=null,this},each:function(n){var t=this._ctx;if(wt){var e=a(t),r=t.table.schema.primKey.keyPath,i=C(e,t.index?t.table.schema.idxByName[t.index].keyPath:r),o=C(e,r);n(e,{key:i,primaryKey:o})}return this._read(function(e,r,i){u(t,n,e,r,i)})},count:function(n){if(wt)return U.resolve(0).then(n);var t=this._ctx;if(X(t,!0))return this._read(function(n,e,i){var o=r(t,i),u=t.range?o.count(t.range):o.count();u.onerror=vn(e),u.onsuccess=function(e){n(Math.min(e.target.result,t.limit))}},n);var e=0;return this._read(function(n,r,i){u(t,function(){return++e,!1},function(){n(e)},r,i)},n)},sortBy:function(n,t){function e(n,t){return t?e(n[i[t]],t-1):n[o]}function r(n,t){var r=e(n,u),i=e(t,u);return r<i?-a:r>i?a:0}var i=n.split(".").reverse(),o=i[0],u=i.length-1,a="next"===this._ctx.dir?1:-1;return this.toArray(function(n){return n.sort(r)}).then(t)},toArray:function(n){var t=this._ctx;return this._read(function(n,e,o){if(wt&&n([a(t)]),qn&&"next"===t.dir&&X(t,!0)&&t.limit>0){var c=t.table.hook.reading.fire,s=r(t,o),f=t.limit<1/0?s.getAll(t.range,t.limit):s.getAll(t.range);f.onerror=vn(e),f.onsuccess=c===i?dn(n):un(dn(function(t){n(t.map(c))}))}else{var l=[];u(t,function(n){l.push(n)},function(){n(l)},e,o)}},n)},offset:function(n){var e=this._ctx;return n<=0?this:(e.offset+=n,X(e)?t(e,function(){var t=n;return function(n,e){return 0===t||(1===t?(--t,!1):(e(function(){n.advance(t),t=0}),!1))}}):t(e,function(){var t=n;return function(){return--t<0}}),this)},limit:function(n){return this._ctx.limit=Math.min(this._ctx.limit,n),t(this._ctx,function(){var t=n;return function(n,e,r){return--t<=0&&e(r),t>=0}},!0),this},until:function(t,e){var r=this._ctx;return wt&&t(a(r)),n(this._ctx,function(n,r,i){return!t(n.value)||(r(i),e)}),this},first:function(n){return this.limit(1).toArray(function(n){return n[0]}).then(n)},last:function(n){return this.reverse().first(n)},filter:function(t){return wt&&t(a(this._ctx)),n(this._ctx,function(n){return t(n.value)}),e(this._ctx,t),this},and:function(n){return this.filter(n)},or:function(n){return new Y(this._ctx.table,n,this)},reverse:function(){return this._ctx.dir="prev"===this._ctx.dir?"next":"prev",this._ondirectionchange&&this._ondirectionchange(this._ctx.dir),this},desc:function(){return this.reverse()},eachKey:function(n){var t=this._ctx;return t.keysOnly=!t.isMatch,this.each(function(t,e){n(e.key,e)})},eachUniqueKey:function(n){return this._ctx.unique="unique",this.eachKey(n)},eachPrimaryKey:function(n){var t=this._ctx;return t.keysOnly=!t.isMatch,this.each(function(t,e){n(e.primaryKey,e)})},keys:function(n){var t=this._ctx;t.keysOnly=!t.isMatch;var e=[];return this.each(function(n,t){e.push(t.key)}).then(function(){return e}).then(n)},primaryKeys:function(n){var t=this._ctx;if(qn&&"next"===t.dir&&X(t,!0)&&t.limit>0)return this._read(function(n,e,i){var o=r(t,i),u=t.limit<1/0?o.getAllKeys(t.range,t.limit):o.getAllKeys(t.range);u.onerror=vn(e),u.onsuccess=dn(n)}).then(n);t.keysOnly=!t.isMatch;var e=[];return this.each(function(n,t){e.push(t.primaryKey)}).then(function(){return e}).then(n)},uniqueKeys:function(n){return this._ctx.unique="unique",this.keys(n)},firstKey:function(n){return this.limit(1).keys(function(n){return n[0]}).then(n)},lastKey:function(n){return this.reverse().firstKey(n)},distinct:function(){var t=this._ctx,e=t.index&&t.table.schema.idxByName[t.index];if(!e||!e.multi)return this;var r={};return n(this._ctx,function(n){var t=n.primaryKey.toString(),e=d(r,t);return r[t]=!0,!e}),this}}}),y(Z).from($).extend({modify:function(n){var t=this,e=this._ctx,i=e.table.hook,o=i.updating.fire,u=i.deleting.fire;return wt&&"function"==typeof n&&n.call({value:e.table.schema.instanceTemplate},e.table.schema.instanceTemplate),this._write(function(e,i,a,c){function s(n,t){function e(n){return w.push(n),k.push(r.primKey),l(),!0}x=t.primaryKey;var r={primKey:t.primaryKey,value:n,onsuccess:null,onerror:null};if(p.call(r,n,r)!==!1){var i=!d(r,"value");++g,A(function(){var n=i?t["delete"]():t.update(r.value);n._hookCtx=r,n.onerror=yn(e),n.onsuccess=pn(function(){++b,l()})},e)}else r.onsuccess&&r.onsuccess(r.value)}function f(n){return n&&(w.push(n),k.push(x)),i(new N("Error modifying one or more objects",w,b,k))}function l(){_&&b+w.length===g&&(w.length>0?f():e(b))}var p;if("function"==typeof n)p=o===r&&u===r?n:function(t){var e=D(t);if(n.call(this,t,this)===!1)return!1;if(d(this,"value")){var r=S(e,this.value),i=o.call(this,r,this.primKey,e,c);i&&(t=this.value,Cn(i).forEach(function(n){O(t,n,i[n])}))}else u.call(this,this.primKey,t,c)};else if(o===r){var v=Cn(n),y=v.length;p=function(t){for(var e=!1,r=0;r<y;++r){var i=v[r],o=n[i];C(t,i)!==o&&(O(t,i,o),e=!0)}return e}}else{var m=n;n=P(m),p=function(t){var e=!1,r=o.call(this,n,this.primKey,D(t),c);return r&&h(n,r),Cn(n).forEach(function(r){var i=n[r];C(t,r)!==i&&(O(t,r,i),e=!0)}),r&&(n=P(m)),e}}var g=0,b=0,_=!1,w=[],k=[],x=null;t.clone().raw()._iterate(s,function(){_=!0,l()},f,a)})},"delete":function(){var n=this,t=this._ctx,e=t.range,i=t.table.hook.deleting.fire,o=i!==r;if(!o&&X(t)&&(t.isPrimKey&&!gt||!e))return this._write(function(n,t,r){var i=vn(t),o=e?r.count(e):r.count();o.onerror=i,o.onsuccess=function(){var u=o.result;A(function(){var t=e?r["delete"](e):r.clear();t.onerror=i,t.onsuccess=function(){return n(u)}},function(n){return t(n)})}});var u=o?2e3:1e4;return this._write(function(e,r,a,c){var s=0,f=n.clone({keysOnly:!t.isMatch&&!o}).distinct().limit(u).raw(),l=[],h=function(){return f.each(o?function(n,t){l.push([t.primaryKey,t.value])}:function(n,t){l.push(t.primaryKey)}).then(function(){return o?l.sort(function(n,t){return An(n[0],t[0])}):l.sort(An),J(a,c,l,o,i)}).then(function(){var n=l.length;return s+=n,l=[],n<u?s:h()})};e(h())})}}),h(this,{Collection:$,Table:W,Transaction:Q,Version:f,WhereClause:Y,WriteableCollection:Z,WriteableTable:H}),u(),Un.forEach(function(n){n(et)})}function ln(n){if("function"==typeof n)return new n;if(On(n))return[ln(n[0])];if(n&&"object"==typeof n){var t={};return hn(t,n),t}return n}function hn(n,t){return Cn(t).forEach(function(e){var r=ln(t[e]);n[e]=r}),n}function dn(n){return function(t){n(t.target.result)}}function pn(n){return un(function(t){var e=t.target,r=e.result,i=e._hookCtx,o=i&&i.onsuccess;o&&o(r),n&&n(r)},n)}function vn(n){return function(t){return mn(t),n(t.target.error),!1}}function yn(n){return un(function(t){var e=t.target,r=e.error,i=e._hookCtx,o=i&&i.onerror;return o&&o(r),mn(t),n(r),!1})}function mn(n){n.stopPropagation&&n.stopPropagation(),n.preventDefault&&n.preventDefault()}function gn(n){var t,e=fn.dependencies.localStorage;if(!e)return n([]);try{t=JSON.parse(e.getItem("Dexie.DatabaseNames")||"[]")}catch(r){t=[]}n(t)&&e.setItem("Dexie.DatabaseNames",JSON.stringify(t))}function bn(n){function t(n){return function(t){var e=n(t),r=e.value;return e.done?r:r&&"function"==typeof r.then?r.then(i,o):On(r)?U.all(r).then(i,o):i(r)}}var e=function(t){return n.next(t)},r=function(t){return n["throw"](t)},i=t(e),o=t(r);return t(e)()}function _n(n,t,e,r,i,o,u){this.name=n,this.keyPath=t,this.unique=e,this.multi=r,this.auto=i,this.compound=o,this.dotted=u;var a="string"==typeof t?t:t&&"["+[].join.call(t,"+")+"]";this.src=(e?"&":"")+(r?"*":"")+(i?"++":"")+a}function wn(n,t,e,r){this.name=n,this.primKey=t||new _n,this.indexes=e||[new _n],this.instanceTemplate=r,this.mappedClass=null,this.idxByName=x(e,function(n){return[n.name,n]})}function kn(n){return 1===n.length?n[0]:n}function xn(n){var t=n&&(n.getDatabaseNames||n.webkitGetDatabaseNames);return t&&t.bind(n)}var In="undefined"!=typeof location&&/^(http|https):\/\/(localhost|127\.0\.0\.1)/.test(location.href),An=function(){return!0},En=!new Error("").stack,Cn=Object.keys,On=Array.isArray,jn="undefined"!=typeof self?self:"undefined"!=typeof window?window:global,Pn=Object.getPrototypeOf,Dn={}.hasOwnProperty,Sn=Object.getOwnPropertyDescriptor,Tn=[].slice,Kn="undefined"!=typeof Symbol&&Symbol.iterator,Bn=Kn?function(n){var t;return null!=n&&(t=n[Kn])&&t.apply(n)}:function(){return null},Mn={},Nn=[].concat,qn=["Modify","Bulk","OpenFailed","VersionChange","Schema","Upgrade","InvalidTable","MissingAPI","NoSuchDatabase","InvalidArgument","SubTransaction","Unsupported","Internal","DatabaseClosed","IncompatiblePromise"],Fn=["Unknown","Constraint","Data","TransactionInactive","ReadOnly","Version","NotFound","InvalidState","InvalidAccess","Abort","Timeout","QuotaExceeded","Syntax","DataClone"],Rn=qn.concat(Fn),Un={VersionChanged:"Database version changed by other database connection",DatabaseClosed:"Database has been closed",Abort:"Transaction aborted",TransactionInactive:"Transaction has already completed or failed"};y(B).from(Error).extend({stack:{get:function(){return this._stack||(this._stack=this.name+": "+this.message+e(this._e,2))}},toString:function(){return this.name+": "+this.message}}),y(N).from(B),y(q).from(B);var zn=Rn.reduce(function(n,t){return n[t]=t+"Error",n},{}),Vn=B,Ln=Rn.reduce(function(n,e){function r(n,r){this._e=t(),this.name=i,n?"string"==typeof n?(this.message=n,this.inner=r||null):"object"==typeof n&&(this.message=n.name+" "+n.message,this.inner=n):(this.message=Un[e]||i,this.inner=null)}var i=e+"Error";return y(r).from(Vn),n[e]=r,n},{});Ln.Syntax=SyntaxError,Ln.Type=TypeError,Ln.Range=RangeError;var Wn=Fn.reduce(function(n,t){return n[t+"Error"]=Ln[t],n},{}),Hn=Rn.reduce(function(n,t){return["Syntax","Type","Range"].indexOf(t)===-1&&(n[t+"Error"]=Ln[t]),n},{});Hn.ModifyError=N,Hn.DexieError=B,Hn.BulkError=q;var Gn={},Jn=100,Qn=20,Yn=!1,$n="undefined"==typeof setImmediate?function(){setTimeout(Y,0)}:setImmediate.bind(null,Y),Xn=function(n,t){at.push([n,t]),nt&&($n(),nt=!1)},Zn=!0,nt=!0,tt=[],et=[],rt=null,it=i,ot={global:!0,ref:0,unhandleds:[],onunhandled:sn,finalize:function(){this.unhandleds.forEach(function(n){try{sn(n[0],n[1])}catch(t){}})}},ut=ot,at=[],ct=0,st=[];p(U.prototype,{then:function(n,t){var e=this,r=new U(function(r,i){H(e,new z(n,t,r,i))});return In&&(!this._prev||null===this._state)&&Q(r,this),r},_then:function(n,t){H(this,new z(null,null,n,t))},"catch":function(n){if(1===arguments.length)return this.then(null,n);var t=arguments[0],e=arguments[1];return"function"==typeof t?this.then(null,function(n){return n instanceof t?e(n):on(n)}):this.then(null,function(n){return n&&n.name===t?e(n):on(n)})},"finally":function(n){return this.then(function(t){return n(),t},function(t){return n(),on(t)})},uncaught:function(n){var t=this;return this.onuncatched=f(this.onuncatched,n),this._state===!1&&tt.indexOf(this)===-1&&tt.some(function(n,e,r){return n._value===t._value&&(r[e]=t)}),this},stack:{get:function(){if(this._stack)return this._stack;try{Yn=!0;var n=J(this,[],Qn),t=n.join("\nFrom previous: ");return null!==this._state&&(this._stack=t),t}finally{Yn=!1}}}}),p(U,{all:function(){var n=T.apply(null,arguments);return new U(function(t,e){0===n.length&&t([]);var r=n.length;n.forEach(function(i,o){return U.resolve(i).then(function(e){n[o]=e,--r||t(n)},e)})})},resolve:function(n){return n&&"function"==typeof n.then?n:new U(Gn,(!0),n)},reject:on,race:function(){var n=T.apply(null,arguments);return new U(function(t,e){n.map(function(n){return U.resolve(n).then(t,e)})})},PSD:{get:function(){return ut},set:function(n){return ut=n}},newPSD:an,usePSD:cn,scheduler:{get:function(){return Xn},set:function(n){Xn=n}},rejectionMapper:{get:function(){return it},set:function(n){it=n}},follow:function(n){return new U(function(t,e){return an(function(t,e){var r=ut;r.unhandleds=[],r.onunhandled=e,r.finalize=u(function(){var n=this;nn(function(){0===n.unhandleds.length?t():e(n.unhandleds[0])})},r.finalize),n()},t,e)})},on:R(null,{error:[f,rn]})}),_(function(){Xn=function(n,t){setTimeout(function(){n.apply(null,t)},0)}});var ft="1.4.1",lt=String.fromCharCode(65535),ht=function(){try{return IDBKeyRange.only([[]]),[[]]}catch(n){return lt}}(),dt="Invalid key provided. Keys must be of type string, number, Date or Array<string | number | Date>.",pt="String expected.",vt=[],yt="undefined"!=typeof navigator&&/(MSIE|Trident|Edge)/.test(navigator.userAgent),mt=yt,gt=yt,bt=function(n){return!/(dexie\.js|dexie\.min\.js)/.test(n)};n(In,bt);var _t=function(){},wt=!1,kt=jn.idbModules&&jn.idbModules.shimIndexedDB?jn.idbModules:{};return p(fn,Hn),p(fn,{"delete":function(n){var t=new fn(n),e=t["delete"]();return e.onblocked=function(n){return t.on("blocked",n),this},e},exists:function(n){return new fn(n).open().then(function(n){return n.close(),!0})["catch"](fn.NoSuchDatabaseError,function(){return!1})},getDatabaseNames:function(n){return new U(function(n,t){var e=xn(indexedDB);if(e){var r=e();r.onsuccess=function(t){n(g(t.target.result,0))},r.onerror=vn(t)}else gn(function(t){return n(t),!1})}).then(n)},defineClass:function(n){function t(t){t?h(this,t):wt&&hn(this,n)}return t},applyStructure:hn,ignoreTransaction:function(n){return ut.trans?cn(ut.transless,n):n()},vip:function(n){return an(function(){return ut.letThrough=!0,n()})},async:function(n){return function(){try{var t=bn(n.apply(this,arguments));return t&&"function"==typeof t.then?t:U.resolve(t)}catch(e){return E(e)}}},spawn:function(n,t,e){try{var r=bn(n.apply(e,t||[]));return r&&"function"==typeof r.then?r:U.resolve(r)}catch(i){return E(i)}},currentTransaction:{get:function(){return ut.trans||null}},Promise:U,debug:{get:function(){return In},set:function(t){n(t,"dexie"===t?function(){return!0}:bt)}},derive:y,extend:h,props:p,override:b,Events:R,events:R,getByKeyPath:C,setByKeyPath:O,delByKeyPath:j,shallowClone:P,deepClone:D,getObjectDiff:S,asap:k,maxKey:ht,addons:[],connections:vt,MultiModifyError:Ln.Modify,errnames:zn,IndexSpec:_n,TableSchema:wn,dependencies:{indexedDB:kt.shimIndexedDB||jn.indexedDB||jn.mozIndexedDB||jn.webkitIndexedDB||jn.msIndexedDB,IDBKeyRange:kt.IDBKeyRange||jn.IDBKeyRange||jn.webkitIDBKeyRange},semVer:ft,version:ft.split(".").map(function(n){return parseInt(n)}).reduce(function(n,t,e){return n+t/Math.pow(10,2*e)}),fakeAutoComplete:_t,"default":fn}),A(function(){fn.dependencies.localStorage=null!=("undefined"!=typeof chrome&&null!==chrome?chrome.storage:void 0)?null:jn.localStorage}),U.rejectionMapper=F,_(function(){fn.fakeAutoComplete=_t=_,fn.fake=wt=!0}),fn});
/*!
  * https://github.com/paulmillr/es6-shim
  * @license es6-shim Copyright 2013-2016 by Paul Miller (http://paulmillr.com)
  *   and contributors,  MIT License
  * es6-shim: v0.35.1
  * see https://github.com/paulmillr/es6-shim/blob/0.35.1/LICENSE
  * Details and documentation:
  * https://github.com/paulmillr/es6-shim/
  */
!function(t,e){"function"==typeof define&&define.amd?define(e):"object"==typeof exports?module.exports=e():t.returnExports=e()}(this,function(){"use strict";var t,e=Function.call.bind(Function.apply),r=Function.call.bind(Function.call),n=Array.isArray,o=Object.keys,i=function(t){return function(){return!e(t,this,arguments)}},a=function(t){try{return t(),!1}catch(e){return!0}},u=function(t){try{return t()}catch(e){return!1}},c=i(a),f=function(){return!a(function(){Object.defineProperty({},"x",{get:function(){}})})},s=!!Object.defineProperty&&f(),p="foo"===function(){}.name,l=Function.call.bind(Array.prototype.forEach),y=Function.call.bind(Array.prototype.reduce),h=Function.call.bind(Array.prototype.filter),v=Function.call.bind(Array.prototype.some),b=function(t,e,r,n){!n&&e in t||(s?Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:!0,value:r}):t[e]=r)},g=function(t,e,r){l(o(e),function(n){var o=e[n];b(t,n,o,!!r)})},d=Function.call.bind(Object.prototype.toString),O="function"==typeof/abc/?function(t){return"function"==typeof t&&"[object Function]"===d(t)}:function(t){return"function"==typeof t},m={getter:function(t,e,r){if(!s)throw new TypeError("getters require true ES5 support");Object.defineProperty(t,e,{configurable:!0,enumerable:!1,get:r})},proxy:function(t,e,r){if(!s)throw new TypeError("getters require true ES5 support");var n=Object.getOwnPropertyDescriptor(t,e);Object.defineProperty(r,e,{configurable:n.configurable,enumerable:n.enumerable,get:function(){return t[e]},set:function(r){t[e]=r}})},redefine:function(t,e,r){if(s){var n=Object.getOwnPropertyDescriptor(t,e);n.value=r,Object.defineProperty(t,e,n)}else t[e]=r},defineByDescriptor:function(t,e,r){s?Object.defineProperty(t,e,r):"value"in r&&(t[e]=r.value)},preserveToString:function(t,e){e&&O(e.toString)&&b(t,"toString",e.toString.bind(e),!0)}},j=Object.create||function(t,e){var r=function(){};r.prototype=t;var n=new r;return"undefined"!=typeof e&&o(e).forEach(function(t){m.defineByDescriptor(n,t,e[t])}),n},w=function(t,e){return!!Object.setPrototypeOf&&u(function(){var r=function n(e){var r=new t(e);return Object.setPrototypeOf(r,n.prototype),r};return Object.setPrototypeOf(r,t),r.prototype=j(t.prototype,{constructor:{value:r}}),e(r)})},T=function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if("undefined"!=typeof global)return global;throw new Error("unable to locate global object")},S=T(),I=S.isFinite,E=Function.call.bind(String.prototype.indexOf),P=Function.apply.bind(Array.prototype.indexOf),C=Function.call.bind(Array.prototype.concat),M=Function.call.bind(String.prototype.slice),x=Function.call.bind(Array.prototype.push),N=Function.apply.bind(Array.prototype.push),A=Function.call.bind(Array.prototype.shift),R=Math.max,_=Math.min,k=Math.floor,L=Math.abs,F=Math.exp,D=Math.log,z=Math.sqrt,q=Function.call.bind(Object.prototype.hasOwnProperty),G=function(){},H=S.Symbol||{},W=H.species||"@@species",V=Number.isNaN||function(t){return t!==t},B=Number.isFinite||function(t){return"number"==typeof t&&I(t)},$=O(Math.sign)?Math.sign:function(t){var e=Number(t);return 0===e?e:V(e)?e:e<0?-1:1},U=function(t){return"[object Arguments]"===d(t)},J=function(t){return null!==t&&"object"==typeof t&&"number"==typeof t.length&&t.length>=0&&"[object Array]"!==d(t)&&"[object Function]"===d(t.callee)},X=U(arguments)?U:J,Z={primitive:function(t){return null===t||"function"!=typeof t&&"object"!=typeof t},string:function(t){return"[object String]"===d(t)},regex:function(t){return"[object RegExp]"===d(t)},symbol:function(t){return"function"==typeof S.Symbol&&"symbol"==typeof t}},Y=function(t,e,r){var n=t[e];b(t,e,r,!0),m.preserveToString(t[e],n)},K="function"==typeof H&&"function"==typeof H["for"]&&Z.symbol(H()),Q=Z.symbol(H.iterator)?H.iterator:"_es6-shim iterator_";S.Set&&"function"==typeof(new S.Set)["@@iterator"]&&(Q="@@iterator"),S.Reflect||b(S,"Reflect",{},!0);var tt=S.Reflect,et=String,rt={Call:function(t,r){var n=arguments.length>2?arguments[2]:[];if(!rt.IsCallable(t))throw new TypeError(t+" is not a function");return e(t,r,n)},RequireObjectCoercible:function(t,e){if(null==t)throw new TypeError(e||"Cannot call method on "+t);return t},TypeIsObject:function(t){return void 0!==t&&null!==t&&t!==!0&&t!==!1&&("function"==typeof t||"object"==typeof t)},ToObject:function(t,e){return Object(rt.RequireObjectCoercible(t,e))},IsCallable:O,IsConstructor:function(t){return rt.IsCallable(t)},ToInt32:function(t){return rt.ToNumber(t)>>0},ToUint32:function(t){return rt.ToNumber(t)>>>0},ToNumber:function(t){if("[object Symbol]"===d(t))throw new TypeError("Cannot convert a Symbol value to a number");return+t},ToInteger:function(t){var e=rt.ToNumber(t);return V(e)?0:0!==e&&B(e)?(e>0?1:-1)*k(L(e)):e},ToLength:function(t){var e=rt.ToInteger(t);return e<=0?0:e>Number.MAX_SAFE_INTEGER?Number.MAX_SAFE_INTEGER:e},SameValue:function(t,e){return t===e?0!==t||1/t===1/e:V(t)&&V(e)},SameValueZero:function(t,e){return t===e||V(t)&&V(e)},IsIterable:function(t){return rt.TypeIsObject(t)&&("undefined"!=typeof t[Q]||X(t))},GetIterator:function(e){if(X(e))return new t(e,"value");var r=rt.GetMethod(e,Q);if(!rt.IsCallable(r))throw new TypeError("value is not an iterable");var n=rt.Call(r,e);if(!rt.TypeIsObject(n))throw new TypeError("bad iterator");return n},GetMethod:function(t,e){var r=rt.ToObject(t)[e];if(void 0!==r&&null!==r){if(!rt.IsCallable(r))throw new TypeError("Method not callable: "+e);return r}},IteratorComplete:function(t){return!!t.done},IteratorClose:function(t,e){var r=rt.GetMethod(t,"return");if(void 0!==r){var n,o;try{n=rt.Call(r,t)}catch(i){o=i}if(!e){if(o)throw o;if(!rt.TypeIsObject(n))throw new TypeError("Iterator's return method returned a non-object.")}}},IteratorNext:function(t){var e=arguments.length>1?t.next(arguments[1]):t.next();if(!rt.TypeIsObject(e))throw new TypeError("bad iterator");return e},IteratorStep:function(t){var e=rt.IteratorNext(t),r=rt.IteratorComplete(e);return!r&&e},Construct:function(t,e,r,n){var o="undefined"==typeof r?t:r;if(!n&&tt.construct)return tt.construct(t,e,o);var i=o.prototype;rt.TypeIsObject(i)||(i=Object.prototype);var a=j(i),u=rt.Call(t,a,e);return rt.TypeIsObject(u)?u:a},SpeciesConstructor:function(t,e){var r=t.constructor;if(void 0===r)return e;if(!rt.TypeIsObject(r))throw new TypeError("Bad constructor");var n=r[W];if(void 0===n||null===n)return e;if(!rt.IsConstructor(n))throw new TypeError("Bad @@species");return n},CreateHTML:function(t,e,r,n){var o=rt.ToString(t),i="<"+e;if(""!==r){var a=rt.ToString(n),u=a.replace(/"/g,"&quot;");i+=" "+r+'="'+u+'"'}var c=i+">",f=c+o;return f+"</"+e+">"},IsRegExp:function(t){if(!rt.TypeIsObject(t))return!1;var e=t[H.match];return"undefined"!=typeof e?!!e:Z.regex(t)},ToString:function(t){return et(t)}};if(s&&K){var nt=function(t){if(Z.symbol(H[t]))return H[t];var e=H["for"]("Symbol."+t);return Object.defineProperty(H,t,{configurable:!1,enumerable:!1,writable:!1,value:e}),e};if(!Z.symbol(H.search)){var ot=nt("search"),it=String.prototype.search;b(RegExp.prototype,ot,function(t){return rt.Call(it,t,[this])});var at=function(t){var e=rt.RequireObjectCoercible(this);if(null!==t&&"undefined"!=typeof t){var r=rt.GetMethod(t,ot);if("undefined"!=typeof r)return rt.Call(r,t,[e])}return rt.Call(it,e,[rt.ToString(t)])};Y(String.prototype,"search",at)}if(!Z.symbol(H.replace)){var ut=nt("replace"),ct=String.prototype.replace;b(RegExp.prototype,ut,function(t,e){return rt.Call(ct,t,[this,e])});var ft=function(t,e){var r=rt.RequireObjectCoercible(this);if(null!==t&&"undefined"!=typeof t){var n=rt.GetMethod(t,ut);if("undefined"!=typeof n)return rt.Call(n,t,[r,e])}return rt.Call(ct,r,[rt.ToString(t),e])};Y(String.prototype,"replace",ft)}if(!Z.symbol(H.split)){var st=nt("split"),pt=String.prototype.split;b(RegExp.prototype,st,function(t,e){return rt.Call(pt,t,[this,e])});var lt=function(t,e){var r=rt.RequireObjectCoercible(this);if(null!==t&&"undefined"!=typeof t){var n=rt.GetMethod(t,st);if("undefined"!=typeof n)return rt.Call(n,t,[r,e])}return rt.Call(pt,r,[rt.ToString(t),e])};Y(String.prototype,"split",lt)}var yt=Z.symbol(H.match),ht=yt&&function(){var t={};return t[H.match]=function(){return 42},42!=="a".match(t)}();if(!yt||ht){var vt=nt("match"),bt=String.prototype.match;b(RegExp.prototype,vt,function(t){return rt.Call(bt,t,[this])});var gt=function(t){var e=rt.RequireObjectCoercible(this);if(null!==t&&"undefined"!=typeof t){var r=rt.GetMethod(t,vt);if("undefined"!=typeof r)return rt.Call(r,t,[e])}return rt.Call(bt,e,[rt.ToString(t)])};Y(String.prototype,"match",gt)}}var dt=function(t,e,r){m.preserveToString(e,t),Object.setPrototypeOf&&Object.setPrototypeOf(t,e),s?l(Object.getOwnPropertyNames(t),function(n){n in G||r[n]||m.proxy(t,n,e)}):l(Object.keys(t),function(n){n in G||r[n]||(e[n]=t[n])}),e.prototype=t.prototype,m.redefine(t.prototype,"constructor",e)},Ot=function(){return this},mt=function(t){s&&!q(t,W)&&m.getter(t,W,Ot)},jt=function(t,e){var r=e||function(){return this};b(t,Q,r),!t[Q]&&Z.symbol(Q)&&(t[Q]=r)},wt=function(t,e,r){s?Object.defineProperty(t,e,{configurable:!0,enumerable:!0,writable:!0,value:r}):t[e]=r},Tt=function(t,e,r){if(wt(t,e,r),!rt.SameValue(t[e],r))throw new TypeError("property is nonconfigurable")},St=function(t,e,r,n){if(!rt.TypeIsObject(t))throw new TypeError("Constructor requires `new`: "+e.name);var o=e.prototype;rt.TypeIsObject(o)||(o=r);var i=j(o);for(var a in n)if(q(n,a)){var u=n[a];b(i,a,u,!0)}return i};if(String.fromCodePoint&&1!==String.fromCodePoint.length){var It=String.fromCodePoint;Y(String,"fromCodePoint",function(t){return rt.Call(It,this,arguments)})}var Et={fromCodePoint:function(t){for(var e,r=[],n=0,o=arguments.length;n<o;n++){if(e=Number(arguments[n]),!rt.SameValue(e,rt.ToInteger(e))||e<0||e>1114111)throw new RangeError("Invalid code point "+e);e<65536?x(r,String.fromCharCode(e)):(e-=65536,x(r,String.fromCharCode((e>>10)+55296)),x(r,String.fromCharCode(e%1024+56320)))}return r.join("")},raw:function(t){var e=rt.ToObject(t,"bad callSite"),r=rt.ToObject(e.raw,"bad raw value"),n=r.length,o=rt.ToLength(n);if(o<=0)return"";for(var i,a,u,c,f=[],s=0;s<o&&(i=rt.ToString(s),u=rt.ToString(r[i]),x(f,u),!(s+1>=o));)a=s+1<arguments.length?arguments[s+1]:"",c=rt.ToString(a),x(f,c),s+=1;return f.join("")}};String.raw&&"xy"!==String.raw({raw:{0:"x",1:"y",length:2}})&&Y(String,"raw",Et.raw),g(String,Et);var Pt=function kn(t,e){if(e<1)return"";if(e%2)return kn(t,e-1)+t;var r=kn(t,e/2);return r+r},Ct=1/0,Mt={repeat:function(t){var e=rt.ToString(rt.RequireObjectCoercible(this)),r=rt.ToInteger(t);if(r<0||r>=Ct)throw new RangeError("repeat count must be less than infinity and not overflow maximum string size");return Pt(e,r)},startsWith:function(t){var e=rt.ToString(rt.RequireObjectCoercible(this));if(rt.IsRegExp(t))throw new TypeError('Cannot call method "startsWith" with a regex');var r,n=rt.ToString(t);arguments.length>1&&(r=arguments[1]);var o=R(rt.ToInteger(r),0);return M(e,o,o+n.length)===n},endsWith:function(t){var e=rt.ToString(rt.RequireObjectCoercible(this));if(rt.IsRegExp(t))throw new TypeError('Cannot call method "endsWith" with a regex');var r,n=rt.ToString(t),o=e.length;arguments.length>1&&(r=arguments[1]);var i="undefined"==typeof r?o:rt.ToInteger(r),a=_(R(i,0),o);return M(e,a-n.length,a)===n},includes:function(t){if(rt.IsRegExp(t))throw new TypeError('"includes" does not accept a RegExp');var e,r=rt.ToString(t);return arguments.length>1&&(e=arguments[1]),E(this,r,e)!==-1},codePointAt:function(t){var e=rt.ToString(rt.RequireObjectCoercible(this)),r=rt.ToInteger(t),n=e.length;if(r>=0&&r<n){var o=e.charCodeAt(r),i=r+1===n;if(o<55296||o>56319||i)return o;var a=e.charCodeAt(r+1);return a<56320||a>57343?o:1024*(o-55296)+(a-56320)+65536}}};if(String.prototype.includes&&"a".includes("a",1/0)!==!1&&Y(String.prototype,"includes",Mt.includes),String.prototype.startsWith&&String.prototype.endsWith){var xt=a(function(){"/a/".startsWith(/a/)}),Nt=u(function(){return"abc".startsWith("a",1/0)===!1});xt&&Nt||(Y(String.prototype,"startsWith",Mt.startsWith),Y(String.prototype,"endsWith",Mt.endsWith))}if(K){var At=u(function(){var t=/a/;return t[H.match]=!1,"/a/".startsWith(t)});At||Y(String.prototype,"startsWith",Mt.startsWith);var Rt=u(function(){var t=/a/;return t[H.match]=!1,"/a/".endsWith(t)});Rt||Y(String.prototype,"endsWith",Mt.endsWith);var _t=u(function(){var t=/a/;return t[H.match]=!1,"/a/".includes(t)});_t||Y(String.prototype,"includes",Mt.includes)}g(String.prototype,Mt);var kt=["\t\n\x0B\f\r   ᠎    ","         　\u2028","\u2029\ufeff"].join(""),Lt=new RegExp("(^["+kt+"]+)|(["+kt+"]+$)","g"),Ft=function(){return rt.ToString(rt.RequireObjectCoercible(this)).replace(Lt,"")},Dt=["","​","￾"].join(""),zt=new RegExp("["+Dt+"]","g"),qt=/^[\-+]0x[0-9a-f]+$/i,Gt=Dt.trim().length!==Dt.length;b(String.prototype,"trim",Ft,Gt);var Ht=function(t){return{value:t,done:0===arguments.length}},Wt=function(t){rt.RequireObjectCoercible(t),this._s=rt.ToString(t),this._i=0};Wt.prototype.next=function(){var t=this._s,e=this._i;if("undefined"==typeof t||e>=t.length)return this._s=void 0,Ht();var r,n,o=t.charCodeAt(e);return o<55296||o>56319||e+1===t.length?n=1:(r=t.charCodeAt(e+1),n=r<56320||r>57343?1:2),this._i=e+n,Ht(t.substr(e,n))},jt(Wt.prototype),jt(String.prototype,function(){return new Wt(this)});var Vt={from:function(t){var e,n=this;arguments.length>1&&(e=arguments[1]);var o,i;if("undefined"==typeof e)o=!1;else{if(!rt.IsCallable(e))throw new TypeError("Array.from: when provided, the second argument must be a function");arguments.length>2&&(i=arguments[2]),o=!0}var a,u,c,f="undefined"!=typeof(X(t)||rt.GetMethod(t,Q));if(f){u=rt.IsConstructor(n)?Object(new n):[];var s,p,l=rt.GetIterator(t);for(c=0;;){if(s=rt.IteratorStep(l),s===!1)break;p=s.value;try{o&&(p="undefined"==typeof i?e(p,c):r(e,i,p,c)),u[c]=p}catch(y){throw rt.IteratorClose(l,!0),y}c+=1}a=c}else{var h=rt.ToObject(t);a=rt.ToLength(h.length),u=rt.IsConstructor(n)?Object(new n(a)):new Array(a);var v;for(c=0;c<a;++c)v=h[c],o&&(v="undefined"==typeof i?e(v,c):r(e,i,v,c)),Tt(u,c,v)}return u.length=a,u},of:function(){for(var t=arguments.length,e=this,r=n(e)||!rt.IsCallable(e)?new Array(t):rt.Construct(e,[t]),o=0;o<t;++o)Tt(r,o,arguments[o]);return r.length=t,r}};g(Array,Vt),mt(Array),t=function(t,e){this.i=0,this.array=t,this.kind=e},g(t.prototype,{next:function(){var e=this.i,r=this.array;if(!(this instanceof t))throw new TypeError("Not an ArrayIterator");if("undefined"!=typeof r)for(var n=rt.ToLength(r.length);e<n;e++){var o,i=this.kind;return"key"===i?o=e:"value"===i?o=r[e]:"entry"===i&&(o=[e,r[e]]),this.i=e+1,Ht(o)}return this.array=void 0,Ht()}}),jt(t.prototype);var Bt=Array.of===Vt.of||function(){var t=function(t){this.length=t};t.prototype=[];var e=Array.of.apply(t,[1,2]);return e instanceof t&&2===e.length}();Bt||Y(Array,"of",Vt.of);var $t={copyWithin:function(t,e){var r,n=rt.ToObject(this),o=rt.ToLength(n.length),i=rt.ToInteger(t),a=rt.ToInteger(e),u=i<0?R(o+i,0):_(i,o),c=a<0?R(o+a,0):_(a,o);arguments.length>2&&(r=arguments[2]);var f="undefined"==typeof r?o:rt.ToInteger(r),s=f<0?R(o+f,0):_(f,o),p=_(s-c,o-u),l=1;for(c<u&&u<c+p&&(l=-1,c+=p-1,u+=p-1);p>0;)c in n?n[u]=n[c]:delete n[u],c+=l,u+=l,p-=1;return n},fill:function(t){var e;arguments.length>1&&(e=arguments[1]);var r;arguments.length>2&&(r=arguments[2]);var n=rt.ToObject(this),o=rt.ToLength(n.length);e=rt.ToInteger("undefined"==typeof e?0:e),r=rt.ToInteger("undefined"==typeof r?o:r);for(var i=e<0?R(o+e,0):_(e,o),a=r<0?o+r:r,u=i;u<o&&u<a;++u)n[u]=t;return n},find:function(t){var e=rt.ToObject(this),n=rt.ToLength(e.length);if(!rt.IsCallable(t))throw new TypeError("Array#find: predicate must be a function");for(var o,i=arguments.length>1?arguments[1]:null,a=0;a<n;a++)if(o=e[a],i){if(r(t,i,o,a,e))return o}else if(t(o,a,e))return o},findIndex:function(t){var e=rt.ToObject(this),n=rt.ToLength(e.length);if(!rt.IsCallable(t))throw new TypeError("Array#findIndex: predicate must be a function");for(var o=arguments.length>1?arguments[1]:null,i=0;i<n;i++)if(o){if(r(t,o,e[i],i,e))return i}else if(t(e[i],i,e))return i;return-1},keys:function(){return new t(this,"key")},values:function(){return new t(this,"value")},entries:function(){return new t(this,"entry")}};if(Array.prototype.keys&&!rt.IsCallable([1].keys().next)&&delete Array.prototype.keys,Array.prototype.entries&&!rt.IsCallable([1].entries().next)&&delete Array.prototype.entries,Array.prototype.keys&&Array.prototype.entries&&!Array.prototype.values&&Array.prototype[Q]&&(g(Array.prototype,{values:Array.prototype[Q]}),Z.symbol(H.unscopables)&&(Array.prototype[H.unscopables].values=!0)),p&&Array.prototype.values&&"values"!==Array.prototype.values.name){var Ut=Array.prototype.values;Y(Array.prototype,"values",function(){return rt.Call(Ut,this,arguments)}),b(Array.prototype,Q,Array.prototype.values,!0)}g(Array.prototype,$t),1/[!0].indexOf(!0,-0)<0&&b(Array.prototype,"indexOf",function(t){var e=P(this,arguments);return 0===e&&1/e<0?0:e},!0),jt(Array.prototype,function(){return this.values()}),Object.getPrototypeOf&&jt(Object.getPrototypeOf([].values()));var Jt=function(){return u(function(){return 0===Array.from({length:-1}).length})}(),Xt=function(){var t=Array.from([0].entries());return 1===t.length&&n(t[0])&&0===t[0][0]&&0===t[0][1]}();Jt&&Xt||Y(Array,"from",Vt.from);var Zt=function(){return u(function(){return Array.from([0],void 0)})}();if(!Zt){var Yt=Array.from;Y(Array,"from",function(t){return arguments.length>1&&"undefined"!=typeof arguments[1]?rt.Call(Yt,this,arguments):r(Yt,this,t)})}var Kt=-(Math.pow(2,32)-1),Qt=function(t,e){var n={length:Kt};return n[e?(n.length>>>0)-1:0]=!0,u(function(){return r(t,n,function(){throw new RangeError("should not reach here")},[]),!0})};if(!Qt(Array.prototype.forEach)){var te=Array.prototype.forEach;Y(Array.prototype,"forEach",function(t){return rt.Call(te,this.length>=0?this:[],arguments)},!0)}if(!Qt(Array.prototype.map)){var ee=Array.prototype.map;Y(Array.prototype,"map",function(t){return rt.Call(ee,this.length>=0?this:[],arguments)},!0)}if(!Qt(Array.prototype.filter)){var re=Array.prototype.filter;Y(Array.prototype,"filter",function(t){return rt.Call(re,this.length>=0?this:[],arguments)},!0)}if(!Qt(Array.prototype.some)){var ne=Array.prototype.some;Y(Array.prototype,"some",function(t){return rt.Call(ne,this.length>=0?this:[],arguments)},!0)}if(!Qt(Array.prototype.every)){var oe=Array.prototype.every;Y(Array.prototype,"every",function(t){return rt.Call(oe,this.length>=0?this:[],arguments)},!0)}if(!Qt(Array.prototype.reduce)){var ie=Array.prototype.reduce;Y(Array.prototype,"reduce",function(t){return rt.Call(ie,this.length>=0?this:[],arguments)},!0)}if(!Qt(Array.prototype.reduceRight,!0)){var ae=Array.prototype.reduceRight;Y(Array.prototype,"reduceRight",function(t){return rt.Call(ae,this.length>=0?this:[],arguments)},!0)}var ue=8!==Number("0o10"),ce=2!==Number("0b10"),fe=v(Dt,function(t){return 0===Number(t+0+t)});if(ue||ce||fe){var se=Number,pe=/^0b[01]+$/i,le=/^0o[0-7]+$/i,ye=pe.test.bind(pe),he=le.test.bind(le),ve=function(t){var e;if("function"==typeof t.valueOf&&(e=t.valueOf(),Z.primitive(e)))return e;if("function"==typeof t.toString&&(e=t.toString(),Z.primitive(e)))return e;throw new TypeError("No default value")},be=zt.test.bind(zt),ge=qt.test.bind(qt),de=function(){var t=function(e){var r;r=arguments.length>0?Z.primitive(e)?e:ve(e,"number"):0,"string"==typeof r&&(r=rt.Call(Ft,r),ye(r)?r=parseInt(M(r,2),2):he(r)?r=parseInt(M(r,2),8):(be(r)||ge(r))&&(r=NaN));var n=this,o=u(function(){return se.prototype.valueOf.call(n),!0});return n instanceof t&&!o?new se(r):se(r)};return t}();dt(se,de,{}),g(de,{NaN:se.NaN,MAX_VALUE:se.MAX_VALUE,MIN_VALUE:se.MIN_VALUE,NEGATIVE_INFINITY:se.NEGATIVE_INFINITY,POSITIVE_INFINITY:se.POSITIVE_INFINITY}),Number=de,m.redefine(S,"Number",de)}var Oe=Math.pow(2,53)-1;g(Number,{MAX_SAFE_INTEGER:Oe,MIN_SAFE_INTEGER:-Oe,EPSILON:2.220446049250313e-16,parseInt:S.parseInt,parseFloat:S.parseFloat,isFinite:B,isInteger:function(t){return B(t)&&rt.ToInteger(t)===t},isSafeInteger:function(t){return Number.isInteger(t)&&L(t)<=Number.MAX_SAFE_INTEGER},isNaN:V}),b(Number,"parseInt",S.parseInt,Number.parseInt!==S.parseInt),[,1].find(function(t,e){return 0===e})||Y(Array.prototype,"find",$t.find),0!==[,1].findIndex(function(t,e){return 0===e})&&Y(Array.prototype,"findIndex",$t.findIndex);var me=Function.bind.call(Function.bind,Object.prototype.propertyIsEnumerable),je=function(t,e){s&&me(t,e)&&Object.defineProperty(t,e,{enumerable:!1})},we=function(){for(var t=Number(this),e=arguments.length,r=e-t,n=new Array(r<0?0:r),o=t;o<e;++o)n[o-t]=arguments[o];return n},Te=function(t){return function(e,r){return e[r]=t[r],e}},Se=function(t,e){var r,n=o(Object(e));return rt.IsCallable(Object.getOwnPropertySymbols)&&(r=h(Object.getOwnPropertySymbols(Object(e)),me(e))),y(C(n,r||[]),Te(e),t)},Ie={assign:function(t,e){var r=rt.ToObject(t,"Cannot convert undefined or null to object");return y(rt.Call(we,1,arguments),Se,r)},is:function(t,e){return rt.SameValue(t,e)}},Ee=Object.assign&&Object.preventExtensions&&function(){var t=Object.preventExtensions({1:2});try{Object.assign(t,"xy")}catch(e){return"y"===t[1]}}();if(Ee&&Y(Object,"assign",Ie.assign),g(Object,Ie),s){var Pe={setPrototypeOf:function(t,e){var n,o=function(t,e){if(!rt.TypeIsObject(t))throw new TypeError("cannot set prototype on a non-object");if(null!==e&&!rt.TypeIsObject(e))throw new TypeError("can only set prototype to an object or null"+e)},i=function(t,e){return o(t,e),r(n,t,e),t};try{n=t.getOwnPropertyDescriptor(t.prototype,e).set,r(n,{},null)}catch(a){if(t.prototype!=={}[e])return;n=function(t){this[e]=t},i.polyfill=i(i({},null),t.prototype)instanceof t}return i}(Object,"__proto__")};g(Object,Pe)}Object.setPrototypeOf&&Object.getPrototypeOf&&null!==Object.getPrototypeOf(Object.setPrototypeOf({},null))&&null===Object.getPrototypeOf(Object.create(null))&&!function(){var t=Object.create(null),e=Object.getPrototypeOf,r=Object.setPrototypeOf;Object.getPrototypeOf=function(r){var n=e(r);return n===t?null:n},Object.setPrototypeOf=function(e,n){var o=null===n?t:n;return r(e,o)},Object.setPrototypeOf.polyfill=!1}();var Ce=!a(function(){Object.keys("foo")});if(!Ce){var Me=Object.keys;Y(Object,"keys",function(t){return Me(rt.ToObject(t))}),o=Object.keys}var xe=a(function(){Object.keys(/a/g)});if(xe){var Ne=Object.keys;Y(Object,"keys",function(t){if(Z.regex(t)){var e=[];for(var r in t)q(t,r)&&x(e,r);return e}return Ne(t)}),o=Object.keys}if(Object.getOwnPropertyNames){var Ae=!a(function(){Object.getOwnPropertyNames("foo")});if(!Ae){var Re="object"==typeof window?Object.getOwnPropertyNames(window):[],_e=Object.getOwnPropertyNames;Y(Object,"getOwnPropertyNames",function(t){var e=rt.ToObject(t);if("[object Window]"===d(e))try{return _e(e)}catch(r){return C([],Re)}return _e(e)})}}if(Object.getOwnPropertyDescriptor){var ke=!a(function(){Object.getOwnPropertyDescriptor("foo","bar")});if(!ke){var Le=Object.getOwnPropertyDescriptor;Y(Object,"getOwnPropertyDescriptor",function(t,e){return Le(rt.ToObject(t),e)})}}if(Object.seal){var Fe=!a(function(){Object.seal("foo")});if(!Fe){var De=Object.seal;Y(Object,"seal",function(t){return rt.TypeIsObject(t)?De(t):t})}}if(Object.isSealed){var ze=!a(function(){Object.isSealed("foo")});if(!ze){var qe=Object.isSealed;Y(Object,"isSealed",function(t){return!rt.TypeIsObject(t)||qe(t)})}}if(Object.freeze){var Ge=!a(function(){Object.freeze("foo")});if(!Ge){var He=Object.freeze;Y(Object,"freeze",function(t){return rt.TypeIsObject(t)?He(t):t})}}if(Object.isFrozen){var We=!a(function(){Object.isFrozen("foo")});if(!We){var Ve=Object.isFrozen;Y(Object,"isFrozen",function(t){return!rt.TypeIsObject(t)||Ve(t)})}}if(Object.preventExtensions){var Be=!a(function(){Object.preventExtensions("foo")});if(!Be){var $e=Object.preventExtensions;Y(Object,"preventExtensions",function(t){return rt.TypeIsObject(t)?$e(t):t})}}if(Object.isExtensible){var Ue=!a(function(){Object.isExtensible("foo")});if(!Ue){var Je=Object.isExtensible;Y(Object,"isExtensible",function(t){return!!rt.TypeIsObject(t)&&Je(t)})}}if(Object.getPrototypeOf){var Xe=!a(function(){Object.getPrototypeOf("foo")});if(!Xe){var Ze=Object.getPrototypeOf;Y(Object,"getPrototypeOf",function(t){return Ze(rt.ToObject(t))})}}var Ye=s&&function(){var t=Object.getOwnPropertyDescriptor(RegExp.prototype,"flags");return t&&rt.IsCallable(t.get)}();if(s&&!Ye){var Ke=function(){if(!rt.TypeIsObject(this))throw new TypeError("Method called on incompatible type: must be an object.");var t="";return this.global&&(t+="g"),this.ignoreCase&&(t+="i"),this.multiline&&(t+="m"),this.unicode&&(t+="u"),this.sticky&&(t+="y"),t};m.getter(RegExp.prototype,"flags",Ke)}var Qe=s&&u(function(){return"/a/i"===String(new RegExp(/a/g,"i"))}),tr=K&&s&&function(){var t=/./;return t[H.match]=!1,RegExp(t)===t}(),er=u(function(){return"/abc/"===RegExp.prototype.toString.call({source:"abc"})}),rr=er&&u(function(){return"/a/b"===RegExp.prototype.toString.call({source:"a",flags:"b"})});if(!er||!rr){var nr=RegExp.prototype.toString;b(RegExp.prototype,"toString",function(){var t=rt.RequireObjectCoercible(this);if(Z.regex(t))return r(nr,t);var e=et(t.source),n=et(t.flags);return"/"+e+"/"+n},!0),m.preserveToString(RegExp.prototype.toString,nr)}if(s&&(!Qe||tr)){var or=Object.getOwnPropertyDescriptor(RegExp.prototype,"flags").get,ir=Object.getOwnPropertyDescriptor(RegExp.prototype,"source")||{},ar=function(){return this.source},ur=rt.IsCallable(ir.get)?ir.get:ar,cr=RegExp,fr=function(){return function t(e,r){var n=rt.IsRegExp(e),o=this instanceof t;if(!o&&n&&"undefined"==typeof r&&e.constructor===t)return e;var i=e,a=r;return Z.regex(e)?(i=rt.Call(ur,e),a="undefined"==typeof r?rt.Call(or,e):r,new t(i,a)):(n&&(i=e.source,a="undefined"==typeof r?e.flags:r),new cr(e,r))}}();dt(cr,fr,{$input:!0}),RegExp=fr,m.redefine(S,"RegExp",fr)}if(s){var sr={input:"$_",lastMatch:"$&",lastParen:"$+",leftContext:"$`",rightContext:"$'"};l(o(sr),function(t){t in RegExp&&!(sr[t]in RegExp)&&m.getter(RegExp,sr[t],function(){return RegExp[t]})})}mt(RegExp);var pr=1/Number.EPSILON,lr=function(t){return t+pr-pr},yr=Math.pow(2,-23),hr=Math.pow(2,127)*(2-yr),vr=Math.pow(2,-126),br=Math.E,gr=Math.LOG2E,dr=Math.LOG10E,Or=Number.prototype.clz;delete Number.prototype.clz;var mr={acosh:function(t){var e=Number(t);return V(e)||t<1?NaN:1===e?0:e===1/0?e:D(e/br+z(e+1)*z(e-1)/br)+1},asinh:function Ln(t){var e=Number(t);return 0!==e&&I(e)?e<0?-Ln(-e):D(e+z(e*e+1)):e},atanh:function(t){var e=Number(t);return V(e)||e<-1||e>1?NaN:e===-1?-(1/0):1===e?1/0:0===e?e:.5*D((1+e)/(1-e))},cbrt:function(t){var e=Number(t);if(0===e)return e;var r,n=e<0;return n&&(e=-e),e===1/0?r=1/0:(r=F(D(e)/3),r=(e/(r*r)+2*r)/3),n?-r:r},clz32:function(t){var e=Number(t),r=rt.ToUint32(e);return 0===r?32:Or?rt.Call(Or,r):31-k(D(r+.5)*gr)},cosh:function(t){var e=Number(t);return 0===e?1:V(e)?NaN:I(e)?(e<0&&(e=-e),e>21?F(e)/2:(F(e)+F(-e))/2):1/0},expm1:function(t){var e=Number(t);if(e===-(1/0))return-1;if(!I(e)||0===e)return e;if(L(e)>.5)return F(e)-1;for(var r=e,n=0,o=1;n+r!==n;)n+=r,o+=1,r*=e/o;return n},hypot:function(t,e){for(var r=0,n=0,o=0;o<arguments.length;++o){var i=L(Number(arguments[o]));n<i?(r*=n/i*(n/i),r+=1,n=i):r+=i>0?i/n*(i/n):i}return n===1/0?1/0:n*z(r)},log2:function(t){return D(t)*gr},log10:function(t){return D(t)*dr},log1p:function(t){var e=Number(t);return e<-1||V(e)?NaN:0===e||e===1/0?e:e===-1?-(1/0):1+e-1===0?e:e*(D(1+e)/(1+e-1))},sign:$,sinh:function(t){var e=Number(t);return I(e)&&0!==e?L(e)<1?(Math.expm1(e)-Math.expm1(-e))/2:(F(e-1)-F(-e-1))*br/2:e},tanh:function(t){var e=Number(t);return V(e)||0===e?e:e>=20?1:e<=-20?-1:(Math.expm1(e)-Math.expm1(-e))/(F(e)+F(-e))},trunc:function(t){var e=Number(t);return e<0?-k(-e):k(e)},imul:function(t,e){var r=rt.ToUint32(t),n=rt.ToUint32(e),o=r>>>16&65535,i=65535&r,a=n>>>16&65535,u=65535&n;return i*u+(o*u+i*a<<16>>>0)|0},fround:function(t){var e=Number(t);if(0===e||e===1/0||e===-(1/0)||V(e))return e;var r=$(e),n=L(e);if(n<vr)return r*lr(n/vr/yr)*vr*yr;var o=(1+yr/Number.EPSILON)*n,i=o-(o-n);return i>hr||V(i)?r*(1/0):r*i}};g(Math,mr),b(Math,"log1p",mr.log1p,Math.log1p(-1e-17)!==-1e-17),b(Math,"asinh",mr.asinh,Math.asinh(-1e7)!==-Math.asinh(1e7)),b(Math,"tanh",mr.tanh,Math.tanh(-2e-17)!==-2e-17),b(Math,"acosh",mr.acosh,Math.acosh(Number.MAX_VALUE)===1/0),b(Math,"cbrt",mr.cbrt,Math.abs(1-Math.cbrt(1e-300)/1e-100)/Number.EPSILON>8),b(Math,"sinh",mr.sinh,Math.sinh(-2e-17)!==-2e-17);var jr=Math.expm1(10);b(Math,"expm1",mr.expm1,jr>22025.465794806718||jr<22025.465794806718);var wr=Math.round,Tr=0===Math.round(.5-Number.EPSILON/4)&&1===Math.round(-.5+Number.EPSILON/3.99),Sr=pr+1,Ir=2*pr-1,Er=[Sr,Ir].every(function(t){return Math.round(t)===t});b(Math,"round",function(t){var e=k(t),r=e===-1?-0:e+1;return t-e<.5?e:r},!Tr||!Er),m.preserveToString(Math.round,wr);var Pr=Math.imul;Math.imul(4294967295,5)!==-5&&(Math.imul=mr.imul,m.preserveToString(Math.imul,Pr)),2!==Math.imul.length&&Y(Math,"imul",function(t,e){return rt.Call(Pr,Math,arguments)});var Cr=function(){var t=S.setTimeout;if("function"==typeof t||"object"==typeof t){rt.IsPromise=function(t){return!!rt.TypeIsObject(t)&&"undefined"!=typeof t._promise};var e,n=function(t){if(!rt.IsConstructor(t))throw new TypeError("Bad promise constructor");var e=this,r=function(t,r){if(void 0!==e.resolve||void 0!==e.reject)throw new TypeError("Bad Promise implementation!");e.resolve=t,e.reject=r};if(e.resolve=void 0,e.reject=void 0,e.promise=new t(r),!rt.IsCallable(e.resolve)||!rt.IsCallable(e.reject))throw new TypeError("Bad promise constructor")};"undefined"!=typeof window&&rt.IsCallable(window.postMessage)&&(e=function(){var t=[],e="zero-timeout-message",r=function(r){x(t,r),window.postMessage(e,"*")},n=function(r){if(r.source===window&&r.data===e){if(r.stopPropagation(),0===t.length)return;var n=A(t);n()}};return window.addEventListener("message",n,!0),r});var o,i,a=function(){var t=S.Promise,e=t&&t.resolve&&t.resolve();return e&&function(t){return e.then(t)}},u=rt.IsCallable(S.setImmediate)?S.setImmediate:"object"==typeof process&&process.nextTick?process.nextTick:a()||(rt.IsCallable(e)?e():function(e){t(e,0)}),c=function(t){return t},f=function(t){throw t},s=0,p=1,l=2,y=0,h=1,v=2,b={},d=function(t,e,r){u(function(){O(t,e,r)})},O=function(t,e,r){var n,o;if(e===b)return t(r);try{n=t(r),o=e.resolve}catch(i){n=i,o=e.reject}o(n)},m=function(t,e){var r=t._promise,n=r.reactionLength;if(n>0&&(d(r.fulfillReactionHandler0,r.reactionCapability0,e),r.fulfillReactionHandler0=void 0,r.rejectReactions0=void 0,r.reactionCapability0=void 0,n>1))for(var o=1,i=0;o<n;o++,i+=3)d(r[i+y],r[i+v],e),t[i+y]=void 0,t[i+h]=void 0,t[i+v]=void 0;r.result=e,r.state=p,r.reactionLength=0},j=function(t,e){var r=t._promise,n=r.reactionLength;if(n>0&&(d(r.rejectReactionHandler0,r.reactionCapability0,e),r.fulfillReactionHandler0=void 0,r.rejectReactions0=void 0,r.reactionCapability0=void 0,n>1))for(var o=1,i=0;o<n;o++,i+=3)d(r[i+h],r[i+v],e),t[i+y]=void 0,t[i+h]=void 0,t[i+v]=void 0;r.result=e,r.state=l,r.reactionLength=0},w=function(t){var e=!1,r=function(r){var n;if(!e){if(e=!0,r===t)return j(t,new TypeError("Self resolution"));if(!rt.TypeIsObject(r))return m(t,r);try{n=r.then}catch(o){return j(t,o)}return rt.IsCallable(n)?void u(function(){I(t,r,n)}):m(t,r)}},n=function(r){if(!e)return e=!0,j(t,r)};return{resolve:r,reject:n}},T=function(t,e,n,o){t===i?r(t,e,n,o,b):r(t,e,n,o)},I=function(t,e,r){var n=w(t),o=n.resolve,i=n.reject;try{T(r,e,o,i)}catch(a){i(a)}},E=function(){var t=function(e){if(!(this instanceof t))throw new TypeError('Constructor Promise requires "new"');if(this&&this._promise)throw new TypeError("Bad construction");if(!rt.IsCallable(e))throw new TypeError("not a valid resolver");var r=St(this,t,o,{_promise:{result:void 0,state:s,reactionLength:0,fulfillReactionHandler0:void 0,rejectReactionHandler0:void 0,reactionCapability0:void 0}}),n=w(r),i=n.reject;try{e(n.resolve,i)}catch(a){i(a)}return r};return t}();o=E.prototype;var P=function(t,e,r,n){var o=!1;
return function(i){if(!o&&(o=!0,e[t]=i,0===--n.count)){var a=r.resolve;a(e)}}},C=function(t,e,r){for(var n,o,i=t.iterator,a=[],u={count:1},c=0;;){try{if(n=rt.IteratorStep(i),n===!1){t.done=!0;break}o=n.value}catch(f){throw t.done=!0,f}a[c]=void 0;var s=e.resolve(o),p=P(c,a,r,u);u.count+=1,T(s.then,s,p,r.reject),c+=1}if(0===--u.count){var l=r.resolve;l(a)}return r.promise},M=function(t,e,r){for(var n,o,i,a=t.iterator;;){try{if(n=rt.IteratorStep(a),n===!1){t.done=!0;break}o=n.value}catch(u){throw t.done=!0,u}i=e.resolve(o),T(i.then,i,r.resolve,r.reject)}return r.promise};return g(E,{all:function(t){var e=this;if(!rt.TypeIsObject(e))throw new TypeError("Promise is not object");var r,o,i=new n(e);try{return r=rt.GetIterator(t),o={iterator:r,done:!1},C(o,e,i)}catch(a){var u=a;if(o&&!o.done)try{rt.IteratorClose(r,!0)}catch(c){u=c}var f=i.reject;return f(u),i.promise}},race:function(t){var e=this;if(!rt.TypeIsObject(e))throw new TypeError("Promise is not object");var r,o,i=new n(e);try{return r=rt.GetIterator(t),o={iterator:r,done:!1},M(o,e,i)}catch(a){var u=a;if(o&&!o.done)try{rt.IteratorClose(r,!0)}catch(c){u=c}var f=i.reject;return f(u),i.promise}},reject:function(t){var e=this;if(!rt.TypeIsObject(e))throw new TypeError("Bad promise constructor");var r=new n(e),o=r.reject;return o(t),r.promise},resolve:function(t){var e=this;if(!rt.TypeIsObject(e))throw new TypeError("Bad promise constructor");if(rt.IsPromise(t)){var r=t.constructor;if(r===e)return t}var o=new n(e),i=o.resolve;return i(t),o.promise}}),g(o,{"catch":function(t){return this.then(null,t)},then:function(t,e){var r=this;if(!rt.IsPromise(r))throw new TypeError("not a promise");var o,i=rt.SpeciesConstructor(r,E),a=arguments.length>2&&arguments[2]===b;o=a&&i===E?b:new n(i);var u,g=rt.IsCallable(t)?t:c,O=rt.IsCallable(e)?e:f,m=r._promise;if(m.state===s){if(0===m.reactionLength)m.fulfillReactionHandler0=g,m.rejectReactionHandler0=O,m.reactionCapability0=o;else{var j=3*(m.reactionLength-1);m[j+y]=g,m[j+h]=O,m[j+v]=o}m.reactionLength+=1}else if(m.state===p)u=m.result,d(g,o,u);else{if(m.state!==l)throw new TypeError("unexpected Promise state");u=m.result,d(O,o,u)}return o.promise}}),b=new n(E),i=o.then,E}}();if(S.Promise&&(delete S.Promise.accept,delete S.Promise.defer,delete S.Promise.prototype.chain),"function"==typeof Cr){g(S,{Promise:Cr});var Mr=w(S.Promise,function(t){return t.resolve(42).then(function(){})instanceof t}),xr=!a(function(){S.Promise.reject(42).then(null,5).then(null,G)}),Nr=a(function(){S.Promise.call(3,G)}),Ar=function(t){var e=t.resolve(5);e.constructor={};var r=t.resolve(e);try{r.then(null,G).then(null,G)}catch(n){return!0}return e===r}(S.Promise),Rr=s&&function(){var t=0,e=Object.defineProperty({},"then",{get:function(){t+=1}});return Promise.resolve(e),1===t}(),_r=function Fn(t){var e=new Promise(t);t(3,function(){}),this.then=e.then,this.constructor=Fn};_r.prototype=Promise.prototype,_r.all=Promise.all;var kr=u(function(){return!!_r.all([1,2])});if(Mr&&xr&&Nr&&!Ar&&Rr&&!kr||(Promise=Cr,Y(S,"Promise",Cr)),1!==Promise.all.length){var Lr=Promise.all;Y(Promise,"all",function(t){return rt.Call(Lr,this,arguments)})}if(1!==Promise.race.length){var Fr=Promise.race;Y(Promise,"race",function(t){return rt.Call(Fr,this,arguments)})}if(1!==Promise.resolve.length){var Dr=Promise.resolve;Y(Promise,"resolve",function(t){return rt.Call(Dr,this,arguments)})}if(1!==Promise.reject.length){var zr=Promise.reject;Y(Promise,"reject",function(t){return rt.Call(zr,this,arguments)})}je(Promise,"all"),je(Promise,"race"),je(Promise,"resolve"),je(Promise,"reject"),mt(Promise)}var qr=function(t){var e=o(y(t,function(t,e){return t[e]=!0,t},{}));return t.join(":")===e.join(":")},Gr=qr(["z","a","bb"]),Hr=qr(["z",1,"a","3",2]);if(s){var Wr=function(t){return Gr?"undefined"==typeof t||null===t?"^"+rt.ToString(t):"string"==typeof t?"$"+t:"number"==typeof t?Hr?t:"n"+t:"boolean"==typeof t?"b"+t:null:null},Vr=function(){return Object.create?Object.create(null):{}},Br=function(t,e,o){if(n(o)||Z.string(o))l(o,function(t){if(!rt.TypeIsObject(t))throw new TypeError("Iterator value "+t+" is not an entry object");e.set(t[0],t[1])});else if(o instanceof t)r(t.prototype.forEach,o,function(t,r){e.set(r,t)});else{var i,a;if(null!==o&&"undefined"!=typeof o){if(a=e.set,!rt.IsCallable(a))throw new TypeError("bad map");i=rt.GetIterator(o)}if("undefined"!=typeof i)for(;;){var u=rt.IteratorStep(i);if(u===!1)break;var c=u.value;try{if(!rt.TypeIsObject(c))throw new TypeError("Iterator value "+c+" is not an entry object");r(a,e,c[0],c[1])}catch(f){throw rt.IteratorClose(i,!0),f}}}},$r=function(t,e,o){if(n(o)||Z.string(o))l(o,function(t){e.add(t)});else if(o instanceof t)r(t.prototype.forEach,o,function(t){e.add(t)});else{var i,a;if(null!==o&&"undefined"!=typeof o){if(a=e.add,!rt.IsCallable(a))throw new TypeError("bad set");i=rt.GetIterator(o)}if("undefined"!=typeof i)for(;;){var u=rt.IteratorStep(i);if(u===!1)break;var c=u.value;try{r(a,e,c)}catch(f){throw rt.IteratorClose(i,!0),f}}}},Ur={Map:function(){var t={},e=function(t,e){this.key=t,this.value=e,this.next=null,this.prev=null};e.prototype.isRemoved=function(){return this.key===t};var n=function(t){return!!t._es6map},o=function(t,e){if(!rt.TypeIsObject(t)||!n(t))throw new TypeError("Method Map.prototype."+e+" called on incompatible receiver "+rt.ToString(t))},i=function(t,e){o(t,"[[MapIterator]]"),this.head=t._head,this.i=this.head,this.kind=e};i.prototype={next:function(){var t=this.i,e=this.kind,r=this.head;if("undefined"==typeof this.i)return Ht();for(;t.isRemoved()&&t!==r;)t=t.prev;for(var n;t.next!==r;)if(t=t.next,!t.isRemoved())return n="key"===e?t.key:"value"===e?t.value:[t.key,t.value],this.i=t,Ht(n);return this.i=void 0,Ht()}},jt(i.prototype);var a,u=function c(){if(!(this instanceof c))throw new TypeError('Constructor Map requires "new"');if(this&&this._es6map)throw new TypeError("Bad construction");var t=St(this,c,a,{_es6map:!0,_head:null,_storage:Vr(),_size:0}),r=new e(null,null);return r.next=r.prev=r,t._head=r,arguments.length>0&&Br(c,t,arguments[0]),t};return a=u.prototype,m.getter(a,"size",function(){if("undefined"==typeof this._size)throw new TypeError("size method called on incompatible Map");return this._size}),g(a,{get:function(t){o(this,"get");var e=Wr(t);if(null!==e){var r=this._storage[e];return r?r.value:void 0}for(var n=this._head,i=n;(i=i.next)!==n;)if(rt.SameValueZero(i.key,t))return i.value},has:function(t){o(this,"has");var e=Wr(t);if(null!==e)return"undefined"!=typeof this._storage[e];for(var r=this._head,n=r;(n=n.next)!==r;)if(rt.SameValueZero(n.key,t))return!0;return!1},set:function(t,r){o(this,"set");var n,i=this._head,a=i,u=Wr(t);if(null!==u){if("undefined"!=typeof this._storage[u])return this._storage[u].value=r,this;n=this._storage[u]=new e(t,r),a=i.prev}for(;(a=a.next)!==i;)if(rt.SameValueZero(a.key,t))return a.value=r,this;return n=n||new e(t,r),rt.SameValue(-0,t)&&(n.key=0),n.next=this._head,n.prev=this._head.prev,n.prev.next=n,n.next.prev=n,this._size+=1,this},"delete":function(e){o(this,"delete");var r=this._head,n=r,i=Wr(e);if(null!==i){if("undefined"==typeof this._storage[i])return!1;n=this._storage[i].prev,delete this._storage[i]}for(;(n=n.next)!==r;)if(rt.SameValueZero(n.key,e))return n.key=n.value=t,n.prev.next=n.next,n.next.prev=n.prev,this._size-=1,!0;return!1},clear:function(){o(this,"clear"),this._size=0,this._storage=Vr();for(var e=this._head,r=e,n=r.next;(r=n)!==e;)r.key=r.value=t,n=r.next,r.next=r.prev=e;e.next=e.prev=e},keys:function(){return o(this,"keys"),new i(this,"key")},values:function(){return o(this,"values"),new i(this,"value")},entries:function(){return o(this,"entries"),new i(this,"key+value")},forEach:function(t){o(this,"forEach");for(var e=arguments.length>1?arguments[1]:null,n=this.entries(),i=n.next();!i.done;i=n.next())e?r(t,e,i.value[1],i.value[0],this):t(i.value[1],i.value[0],this)}}),jt(a,a.entries),u}(),Set:function(){var t,e=function(t){return t._es6set&&"undefined"!=typeof t._storage},n=function(t,r){if(!rt.TypeIsObject(t)||!e(t))throw new TypeError("Set.prototype."+r+" called on incompatible receiver "+rt.ToString(t))},i=function c(){if(!(this instanceof c))throw new TypeError('Constructor Set requires "new"');if(this&&this._es6set)throw new TypeError("Bad construction");var e=St(this,c,t,{_es6set:!0,"[[SetData]]":null,_storage:Vr()});if(!e._es6set)throw new TypeError("bad set");return arguments.length>0&&$r(c,e,arguments[0]),e};t=i.prototype;var a=function(t){var e=t;if("^null"===e)return null;if("^undefined"!==e){var r=e.charAt(0);return"$"===r?M(e,1):"n"===r?+M(e,1):"b"===r?"btrue"===e:+e}},u=function(t){if(!t["[[SetData]]"]){var e=t["[[SetData]]"]=new Ur.Map;l(o(t._storage),function(t){var r=a(t);e.set(r,r)}),t["[[SetData]]"]=e}t._storage=null};return m.getter(i.prototype,"size",function(){return n(this,"size"),this._storage?o(this._storage).length:(u(this),this["[[SetData]]"].size)}),g(i.prototype,{has:function(t){n(this,"has");var e;return this._storage&&null!==(e=Wr(t))?!!this._storage[e]:(u(this),this["[[SetData]]"].has(t))},add:function(t){n(this,"add");var e;return this._storage&&null!==(e=Wr(t))?(this._storage[e]=!0,this):(u(this),this["[[SetData]]"].set(t,t),this)},"delete":function(t){n(this,"delete");var e;if(this._storage&&null!==(e=Wr(t))){var r=q(this._storage,e);return delete this._storage[e]&&r}return u(this),this["[[SetData]]"]["delete"](t)},clear:function(){n(this,"clear"),this._storage&&(this._storage=Vr()),this["[[SetData]]"]&&this["[[SetData]]"].clear()},values:function(){return n(this,"values"),u(this),this["[[SetData]]"].values()},entries:function(){return n(this,"entries"),u(this),this["[[SetData]]"].entries()},forEach:function(t){n(this,"forEach");var e=arguments.length>1?arguments[1]:null,o=this;u(o),this["[[SetData]]"].forEach(function(n,i){e?r(t,e,i,i,o):t(i,i,o)})}}),b(i.prototype,"keys",i.prototype.values,!0),jt(i.prototype,i.prototype.values),i}()};if(S.Map||S.Set){var Jr=u(function(){return 2===new Map([[1,2]]).get(1)});if(!Jr){var Xr=S.Map;S.Map=function Dn(){if(!(this instanceof Dn))throw new TypeError('Constructor Map requires "new"');var t=new Xr;return arguments.length>0&&Br(Dn,t,arguments[0]),delete t.constructor,Object.setPrototypeOf(t,S.Map.prototype),t},S.Map.prototype=j(Xr.prototype),b(S.Map.prototype,"constructor",S.Map,!0),m.preserveToString(S.Map,Xr)}var Zr=new Map,Yr=function(){var t=new Map([[1,0],[2,0],[3,0],[4,0]]);return t.set(-0,t),t.get(0)===t&&t.get(-0)===t&&t.has(0)&&t.has(-0)}(),Kr=Zr.set(1,2)===Zr;if(!Yr||!Kr){var Qr=Map.prototype.set;Y(Map.prototype,"set",function(t,e){return r(Qr,this,0===t?0:t,e),this})}if(!Yr){var tn=Map.prototype.get,en=Map.prototype.has;g(Map.prototype,{get:function(t){return r(tn,this,0===t?0:t)},has:function(t){return r(en,this,0===t?0:t)}},!0),m.preserveToString(Map.prototype.get,tn),m.preserveToString(Map.prototype.has,en)}var rn=new Set,nn=function(t){return t["delete"](0),t.add(-0),!t.has(0)}(rn),on=rn.add(1)===rn;if(!nn||!on){var an=Set.prototype.add;Set.prototype.add=function(t){return r(an,this,0===t?0:t),this},m.preserveToString(Set.prototype.add,an)}if(!nn){var un=Set.prototype.has;Set.prototype.has=function(t){return r(un,this,0===t?0:t)},m.preserveToString(Set.prototype.has,un);var cn=Set.prototype["delete"];Set.prototype["delete"]=function(t){return r(cn,this,0===t?0:t)},m.preserveToString(Set.prototype["delete"],cn)}var fn=w(S.Map,function(t){var e=new t([]);return e.set(42,42),e instanceof t}),sn=Object.setPrototypeOf&&!fn,pn=function(){try{return!(S.Map()instanceof S.Map)}catch(t){return t instanceof TypeError}}();if(0!==S.Map.length||sn||!pn){var ln=S.Map;S.Map=function zn(){if(!(this instanceof zn))throw new TypeError('Constructor Map requires "new"');var t=new ln;return arguments.length>0&&Br(zn,t,arguments[0]),delete t.constructor,Object.setPrototypeOf(t,zn.prototype),t},S.Map.prototype=ln.prototype,b(S.Map.prototype,"constructor",S.Map,!0),m.preserveToString(S.Map,ln)}var yn=w(S.Set,function(t){var e=new t([]);return e.add(42,42),e instanceof t}),hn=Object.setPrototypeOf&&!yn,vn=function(){try{return!(S.Set()instanceof S.Set)}catch(t){return t instanceof TypeError}}();if(0!==S.Set.length||hn||!vn){var bn=S.Set;S.Set=function qn(){if(!(this instanceof qn))throw new TypeError('Constructor Set requires "new"');var t=new bn;return arguments.length>0&&$r(qn,t,arguments[0]),delete t.constructor,Object.setPrototypeOf(t,qn.prototype),t},S.Set.prototype=bn.prototype,b(S.Set.prototype,"constructor",S.Set,!0),m.preserveToString(S.Set,bn)}var gn=new S.Map,dn=!u(function(){return gn.keys().next().done});if(("function"!=typeof S.Map.prototype.clear||0!==(new S.Set).size||0!==gn.size||"function"!=typeof S.Map.prototype.keys||"function"!=typeof S.Set.prototype.keys||"function"!=typeof S.Map.prototype.forEach||"function"!=typeof S.Set.prototype.forEach||c(S.Map)||c(S.Set)||"function"!=typeof gn.keys().next||dn||!fn)&&g(S,{Map:Ur.Map,Set:Ur.Set},!0),S.Set.prototype.keys!==S.Set.prototype.values&&b(S.Set.prototype,"keys",S.Set.prototype.values,!0),jt(Object.getPrototypeOf((new S.Map).keys())),jt(Object.getPrototypeOf((new S.Set).keys())),p&&"has"!==S.Set.prototype.has.name){var On=S.Set.prototype.has;Y(S.Set.prototype,"has",function(t){return r(On,this,t)})}}g(S,Ur),mt(S.Map),mt(S.Set)}var mn=function(t){if(!rt.TypeIsObject(t))throw new TypeError("target must be an object")},jn={apply:function(){return rt.Call(rt.Call,null,arguments)},construct:function(t,e){if(!rt.IsConstructor(t))throw new TypeError("First argument must be a constructor.");var r=arguments.length>2?arguments[2]:t;if(!rt.IsConstructor(r))throw new TypeError("new.target must be a constructor.");return rt.Construct(t,e,r,"internal")},deleteProperty:function(t,e){if(mn(t),s){var r=Object.getOwnPropertyDescriptor(t,e);if(r&&!r.configurable)return!1}return delete t[e]},has:function(t,e){return mn(t),e in t}};Object.getOwnPropertyNames&&Object.assign(jn,{ownKeys:function(t){mn(t);var e=Object.getOwnPropertyNames(t);return rt.IsCallable(Object.getOwnPropertySymbols)&&N(e,Object.getOwnPropertySymbols(t)),e}});var wn=function(t){return!a(t)};if(Object.preventExtensions&&Object.assign(jn,{isExtensible:function(t){return mn(t),Object.isExtensible(t)},preventExtensions:function(t){return mn(t),wn(function(){Object.preventExtensions(t)})}}),s){var Tn=function(t,e,r){var n=Object.getOwnPropertyDescriptor(t,e);if(!n){var o=Object.getPrototypeOf(t);if(null===o)return;return Tn(o,e,r)}return"value"in n?n.value:n.get?rt.Call(n.get,r):void 0},Sn=function(t,e,n,o){var i=Object.getOwnPropertyDescriptor(t,e);if(!i){var a=Object.getPrototypeOf(t);if(null!==a)return Sn(a,e,n,o);i={value:void 0,writable:!0,enumerable:!0,configurable:!0}}if("value"in i){if(!i.writable)return!1;if(!rt.TypeIsObject(o))return!1;var u=Object.getOwnPropertyDescriptor(o,e);return u?tt.defineProperty(o,e,{value:n}):tt.defineProperty(o,e,{value:n,writable:!0,enumerable:!0,configurable:!0})}return!!i.set&&(r(i.set,o,n),!0)};Object.assign(jn,{defineProperty:function(t,e,r){return mn(t),wn(function(){Object.defineProperty(t,e,r)})},getOwnPropertyDescriptor:function(t,e){return mn(t),Object.getOwnPropertyDescriptor(t,e)},get:function(t,e){mn(t);var r=arguments.length>2?arguments[2]:t;return Tn(t,e,r)},set:function(t,e,r){mn(t);var n=arguments.length>3?arguments[3]:t;return Sn(t,e,r,n)}})}if(Object.getPrototypeOf){var In=Object.getPrototypeOf;jn.getPrototypeOf=function(t){return mn(t),In(t)}}if(Object.setPrototypeOf&&jn.getPrototypeOf){var En=function(t,e){for(var r=e;r;){if(t===r)return!0;r=jn.getPrototypeOf(r)}return!1};Object.assign(jn,{setPrototypeOf:function(t,e){if(mn(t),null!==e&&!rt.TypeIsObject(e))throw new TypeError("proto must be an object or null");return e===tt.getPrototypeOf(t)||!(tt.isExtensible&&!tt.isExtensible(t))&&(!En(t,e)&&(Object.setPrototypeOf(t,e),!0))}})}var Pn=function(t,e){if(rt.IsCallable(S.Reflect[t])){var r=u(function(){return S.Reflect[t](1),S.Reflect[t](NaN),S.Reflect[t](!0),!0});r&&Y(S.Reflect,t,e)}else b(S.Reflect,t,e)};Object.keys(jn).forEach(function(t){Pn(t,jn[t])});var Cn=S.Reflect.getPrototypeOf;if(p&&Cn&&"getPrototypeOf"!==Cn.name&&Y(S.Reflect,"getPrototypeOf",function(t){return r(Cn,S.Reflect,t)}),S.Reflect.setPrototypeOf&&u(function(){return S.Reflect.setPrototypeOf(1,{}),!0})&&Y(S.Reflect,"setPrototypeOf",jn.setPrototypeOf),S.Reflect.defineProperty&&(u(function(){var t=!S.Reflect.defineProperty(1,"test",{value:1}),e="function"!=typeof Object.preventExtensions||!S.Reflect.defineProperty(Object.preventExtensions({}),"test",{});return t&&e})||Y(S.Reflect,"defineProperty",jn.defineProperty)),S.Reflect.construct&&(u(function(){var t=function(){};return S.Reflect.construct(function(){},[],t)instanceof t})||Y(S.Reflect,"construct",jn.construct)),"Invalid Date"!==String(new Date(NaN))){var Mn=Date.prototype.toString,xn=function(){var t=+this;return t!==t?"Invalid Date":rt.Call(Mn,this)};Y(Date.prototype,"toString",xn)}var Nn={anchor:function(t){return rt.CreateHTML(this,"a","name",t)},big:function(){return rt.CreateHTML(this,"big","","")},blink:function(){return rt.CreateHTML(this,"blink","","")},bold:function(){return rt.CreateHTML(this,"b","","")},fixed:function(){return rt.CreateHTML(this,"tt","","")},fontcolor:function(t){return rt.CreateHTML(this,"font","color",t)},fontsize:function(t){return rt.CreateHTML(this,"font","size",t)},italics:function(){return rt.CreateHTML(this,"i","","")},link:function(t){return rt.CreateHTML(this,"a","href",t)},small:function(){return rt.CreateHTML(this,"small","","")},strike:function(){return rt.CreateHTML(this,"strike","","")},sub:function(){return rt.CreateHTML(this,"sub","","")},sup:function(){return rt.CreateHTML(this,"sup","","")}};l(Object.keys(Nn),function(t){var e=String.prototype[t],n=!1;if(rt.IsCallable(e)){var o=r(e,"",' " '),i=C([],o.match(/"/g)).length;n=o!==o.toLowerCase()||i>2}else n=!0;n&&Y(String.prototype,t,Nn[t])});var An=function(){if(!K)return!1;var t="object"==typeof JSON&&"function"==typeof JSON.stringify?JSON.stringify:null;if(!t)return!1;if("undefined"!=typeof t(H()))return!0;if("[null]"!==t([H()]))return!0;var e={a:H()};return e[H()]=!0,"{}"!==t(e)}(),Rn=u(function(){return!K||"{}"===JSON.stringify(Object(H()))&&"[{}]"===JSON.stringify([Object(H())])});if(An||!Rn){var _n=JSON.stringify;Y(JSON,"stringify",function(t){if("symbol"!=typeof t){var e;arguments.length>1&&(e=arguments[1]);var o=[t];if(n(e))o.push(e);else{var i=rt.IsCallable(e)?e:null,a=function(t,e){var n=i?r(i,this,t,e):e;if("symbol"!=typeof n)return Z.symbol(n)?Te({})(n):n};o.push(a)}return arguments.length>2&&o.push(arguments[2]),_n.apply(this,o)}})}return S});
var accountService = accountService || {};
(function() {
	"use strict";
	var e = function(e) {
			return db.accounts.where("id").equals(e)
		};
	this.remove = function(n) {
		return e(n)["delete"]()
	}, this.add = function(e, n) {
		return db.accounts.add({
			username: e,
			password: n,
			status: ""
		})
	}, this.getAll = function() {
		return db.accounts.toArray()
	}, this.getCount = function() {
		return db.accounts.toCollection().count()
	}, this.addAll = function(e) {
		return new Promise(function(n) {
			var t = function(e, i) {
					if (e.length === i) return void n(e);
					var u = e[i];
					accountService.add(u.username, u.password).then(function(n) {
						u.id = n, t(e, i + 1)
					})
				};
			t(e, 0)
		})
	}, this.update = function(n, t) {
		return e(n).modify(t)
	}, this.pauseTask = function(n, t, i) {
		var u = {};
		return u[t + "Paused"] = i, e(n).modify(u)
	}, this.isTaskPaused = function(e, n) {
		return e[n + "Paused"]
	}, this.updateTaskCount = function(n, t, i) {
		var u = {};
		return u[t + "Count"] = i, e(n).modify(u)
	}, this.login = function(e) {
		return new Promise(function(n, t) {
			sinaService.login(e.username, e.password, e.pincode).then(function(t) {
				var i = t.userinfo;
				if (i) {
					var u = {
						status: "登录成功",
						token: t.token,
						userId: i.uniqueid,
						screenName: i.displayname
					};
					accountService.update(e.id, u).then(function() {
						n(u)
					})
				} else n({
					pcid: t.pcid
				})
			})["catch"](function(n) {
				var i = {
					status: "登录失败",
					userId: "",
					screenName: "",
					token: ""
				};
				accountService.update(e.id, i).then(function() {
					t(i)
				})
			})
		})
	}, this.getByUserId = function(e) {
		return db.accounts.where("userId").equals(e).first()
	}
}).call(accountService), function() {
	"use strict";
	var e = function(n, t, i, u) {
			if (t.length !== i) {
				var c = t[i];
				if (accountService.isTaskPaused(c, n)) return void e(n, t, i + 1, u);
				var r = function() {
						sinaService.login(c.username, c.password, "").then(function(r) {
							if (r.pcid) chromeService.showNotificaton("尝试登录账号" + c.username + "失败，该账号登录需要验证码，请在我的账号列表页面手动登录！"), e(n, t, i + 1, u);
							else {
								var o = r.userinfo,
									a = o.uniqueid;
								accountService.update(c.id, {
									status: "登录成功",
									token: r.token,
									screenName: o.displayname,
									userId: a
								}).then(function() {
									u(a)
								})
							}
						})["catch"](function(r) {
							chromeService.showNotificaton("尝试登录账号" + c.username + "失败，请检查该账号！"), e(n, t, i + 1, u)
						})
					},
					o = function() {
						c.token ? sinaService.isValidToken(c.token).then(function() {
							u(c.userId)
						})["catch"](function(o) {
							"账号冻结" === o ? (accountService.pauseTask(c.id, n, !0), executeUserIds.set(n, null), chromeService.showNotificaton("账号：" + c.username + "已经被新浪微博冻结!"), e(n, t, i + 1, u)) : r()
						}) : r()
					},
					a = (new Date).toLocaleDateString();
				taskService.getLog(c.userId, a).then(function(r) {
					if (r) {
						var a = c[n + "Count"] || 29;
						r[n + "Count"] >= a ? e(n, t, i + 1, u) : o()
					} else o()
				})
			}
		};
	this.getAvailableUserId = function(n, t) {
		return new Promise(function(i) {
			e(t, n, 0, i)
		})
	}
}.call(accountService);
var chromeService = chromeService || {};
(function() {
	"use strict";
	this.showNotificaton = function(e) {
		chrome.notifications.create("", {
			type: "basic",
			iconUrl: "icon48.png",
			title: "微博营销助手",
			message: e
		}, function() {})
	};
	var e = function(e, s, t) {
			var o = !1;
			for (var n in e) {
				var c = e[n];
				c.name === s && (c.value = t, o = !0)
			}
			o || e.push({
				name: s,
				value: t
			})
		};
	//修改Header
	this.listenOnBeforeSendHeaders = function() {
		chrome.webRequest.onBeforeSendHeaders.addListener(function(s) {
			var t = s.requestHeaders,
				o = function() {
					for (var s in t) {
						var o = t[s];
						"extension-cookies" === o.name && (t.splice(s, 1), e(t, "Cookie", o.value))
					}
				};
			return o(), s.url.indexOf("https://weibo.com/aj") !== -1 ? (e(s.requestHeaders, "Referer", "http://www.weibo.com"), e(t, "Origin", "http://www.weibo.com")) : s.url.indexOf("https://login.sina.com.cn/crossdomain2.php") !== -1 ? (e(s.requestHeaders, "Referer", "http://www.weibo.com"), e(t, "Origin", "https://login.sina.com.cn")) : s.url.indexOf("https://passport.weibo.com/wbsso/login?ssosavestate") !== -1 && (e(s.requestHeaders, "Referer", "http://www.weibo.com"), e(t, "Origin", "https://passport.weibo.com")), {
				requestHeaders: t
			}
		}, {
			urls: ["https://weibo.com/aj*&__from=extension", "https://login.sina.com.cn/*&__from=extension", "https://passport.weibo.com/wbsso/login?ssosavestate*&__from=extension*"]
		}, ["blocking", "requestHeaders"])
	}, this.listenOnHeadersReceived = function() {
		chrome.webRequest.onHeadersReceived.addListener(function(s) {
			var t = s.responseHeaders;
			if (s.url.indexOf("https://passport.weibo.com/wbsso/login?ssosavestate") !== -1) {
				var o = "";
				for (var n in t) {
					var c = t[n];
					if ("Set-Cookie" === c.name) {
						var a = c.value;
						a.indexOf("SUB=") !== -1 && (o = a.substr(0, a.indexOf(";")))
					}
				}
				e(t, "token", o)
			} else if (s.url.indexOf("https://login.sina.com.cn/sso/login.php?client=ssologin.js") !== -1) {
				var i = "";
				for (var n in t) {
					var c = t[n];
					if ("Set-Cookie" === c.name) {
						var a = c.value;
						i += a.substr(0, a.indexOf(";") + 1)
					}
				}
				e(t, "extension-cookies", i)
			} else if (s.url.indexOf("http://www.weibo.com/aj") !== -1) {
				for (var n in t) {
					var c = t[n];
					if ("Location" === c.name) {
						t.splice(n, 1), e(t, "redirect-location", c.value);
						break
					}
				}
				e(t, "Content-Type", "application/json; charset=utf-8")
			}
			return e(t, "Set-Cookie", ""), {
				responseHeaders: t
			}
		}, {
			urls: ["http://www.weibo.com/aj*&__from=extension", "https://login.sina.com.cn/sso/login.php?client=ssologin.js(v1.4.18)&__from=extension", "https://passport.weibo.com/wbsso/login?ssosavestate*&__from=extension*"]
		}, ["blocking", "responseHeaders"])
	}, this.listenOnAlarm = function() {
		chrome.alarms.onAlarm.addListener(function(e) {
			taskService.execute(e.name)
		})
	}, this.createAlarm = function(e, s) {
		chrome.alarms.create(e, {
			when: Date.now() + s
		})
	}, this.showBadgeText = function(e) {
		chrome.browserAction.setBadgeBackgroundColor({
			color: [255, 0, 0, 255]
		}), chrome.browserAction.setBadgeText({
			text: e
		})
	}, this.listenOnMessage = function() {
		chrome.runtime.onMessage.addListener(function(e, s, t) {
			switch (e.method) {
			case "addCustomer":
				customerService.add(e.customer), t({
					isSuccess: !0
				});
				break;
			case "showNotificaton":
				customerService.showNotificaton(e.message), t({
					isSuccess: !0
				});
				break;
			case "getCustomers":
				customerService.getAll(e.searchConditions, e.start, e.pageSize).then(function(e) {
					t(e)
				});
				break;
			case "deleteCustomers":
				customerService.removeAll(e.ids).then(function() {
					t({
						isSuccess: !0
					})
				});
				break;
			case "addTasks":
				taskService.addAll(e.type, e.content, e.useRandomContent, e.list), t({
					isSuccess: !0
				});
				break;
			case "getTasks":
				var o = e.searchConditions;
				taskService.getAll(o.taskType, o.taskStatus, e.start, e.pageSize).then(function(e) {
					t(e)
				});
				break;
			case "deleteTasks":
				taskService.removeAll(e.ids).then(function() {
					t({
						isSuccess: !0
					})
				});
				break;
			case "restartTasks":
				taskService.restartAll(), t({
					isSuccess: !0
				});
				break;
			case "getLogs":
				logService.getAll(e.start, e.pageSize).then(function(e) {
					t(e)
				});
				break;
			case "deleteLogs":
				logService.removeAll().then(function() {
					t({
						isSuccess: !0
					})
				});
				break;
			case "getAccounts":
				accountService.getAll().then(function(e) {
					t({
						accounts: e
					})
				});
				break;
			case "getTaskLogs":
				taskService.getLogs(e.userId).then(function(e) {
					t({
						taskLogs: e
					})
				});
				break;
			case "deleteAccount":
				accountService.remove(e.id).then(function() {
					t({
						isSuccess: !0
					})
				});
				break;
			case "addAccount":
				var n = e.account;
				accountService.add(n.username, n.password).then(function(e) {
					t({
						accountId: e,
						isSuccess: !0
					})
				});
				break;
			case "addAccounts":
				accountService.addAll(e.accounts).then(function(e) {
					t({
						accounts: e
					})
				});
				break;
			case "updateAccount":
				var n = e.account;
				accountService.update(n.id, {
					username: n.username,
					password: n.password
				}).then(function() {
					t({
						accountId: n.id,
						isSuccess: !0
					})
				});
				break;
			case "accountTaskPaused":
				accountService.pauseTask(e.id, e.type, e.isPaused).then(function() {
					t({
						isSuccess: !0
					})
				});
				break;
			case "accountTaskCount":
				accountService.updateTaskCount(e.id, e.type, e.count).then(function() {
					t({
						isSuccess: !0
					})
				});
				break;
			case "loginAccount":
				accountService.login(e.account).then(t, t)
			}
			return !0
		})
	}
}).call(chromeService);
var customerService = customerService || {};
(function() {
	"use strict";
	this.add = function(t) {
		db.customers.where("statusId").equals(t.statusId).count(function(n) {
			0 === n && db.customers.add(t)
		})
	};
	var t = function(t, n) {
			var e = (t.screenName + t.keywords + t.content + t.description + t.source + t.school + t.company + t.location).toLowerCase(),
				o = n.toLowerCase().split(" ");
			for (var s in o) if (e.indexOf(o[s]) === -1) return !1;
			return !0
		},
		n = function(t, n) {
			var e = n.toLowerCase().split(" ");
			t = t.toLowerCase();
			for (var o in e) if (t.indexOf(e[o]) !== -1) return !0;
			return !1
		},
		e = function(e) {
			var o = e.filters,
				s = e.keywords,
				r = e.statusesCountMin,
				u = e.statusesCountMax,
				a = e.followersCountMin,
				i = e.followersCountMax,
				c = e.friendsCountMin,
				l = e.friendsCountMax,
				d = e.commentsCountMin,
				C = e.commentsCountMax,
				f = e.repostsCountMin,
				m = e.repostsCountMax,
				p = e.attitudesCountMin,
				v = e.attitudesCountMax,
				I = e.gender;
			return function(e) {
				var M = !0;
				return o && (n(e.screenName, o) || n(e.content, o) || n(e.description, o) || n(e.source, o) || n(e.school, o) || n(e.company, o) || n(e.location, o)) && (M = !1), s && !t(e, s) && (M = !1), r && e.statusesCount < parseInt(r) && (M = !1), u && e.statusesCount > parseInt(u) && (M = !1), a && e.followersCount < parseInt(a) && (M = !1), i && e.followersCount > parseInt(i) && (M = !1), c && e.friendsCount < parseInt(c) && (M = !1), l && e.friendsCount > parseInt(l) && (M = !1), d && e.commentsCount < parseInt(d) && (M = !1), C && e.commentsCount > parseInt(C) && (M = !1), f && e.repostsCount < parseInt(f) && (M = !1), m && e.repostsCount > parseInt(m) && (M = !1), p && e.attitudesCount < parseInt(p) && (M = !1), v && e.attitudesCount > parseInt(v) && (M = !1), I && e.gender != I && (M = !1), M
			}
		};
	this.getAll = function(t, n, o) {
		var s = e(t),
			r = db.customers.toCollection().and(s),
			u = r.count();
		return r = r.offset(n).limit(o).toArray(), Promise.all([r, u]).then(function(t) {
			return Promise.resolve({
				list: t[0],
				count: t[1]
			})
		})
	}, this.removeAll = function(t) {
		var n = db.customers.toCollection();
		return t && (n = n.and(function(n) {
			return t.indexOf(n.id) !== -1
		})), n["delete"]()
	}
}).call(customerService);
var logService = logService || {};
(function() {
	"use strict";
	this.getAll = function(t, o) {
		var e = db.logs.toCollection().count(),
			n = db.logs.orderBy("id").desc().offset(t).limit(o).toArray();
		return Promise.all([n, e]).then(function(t) {
			return Promise.resolve({
				list: t[0],
				count: t[1]
			})
		})
	}, this.removeAll = function() {
		return db.logs.clear()
	}, this.add = function(t) {
		db.logs.add({
			content: t,
			createdAt: (new Date).toISOString()
		})
	}, this.getCount = function() {
		return db.logs.toCollection().count()
	}
}).call(logService);
var sinaService = sinaService || {};
(function() {
	"use strict";

	function e(e, t, n, o) {
		var r = new sinaSSOEncoder.RSAKey;
		return r.setPublic(o, "10001"), r.encrypt([t, n].join("\t") + "\n" + e)
	}
	var t = function(e) {
			for (var t = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789", n = "", o = 0; o < e; o++) n += t.charAt(Math.ceil(1e6 * Math.random()) % t.length);
			return n
		},
		n = function(e) {
			for (var t, n = (e || "").toString(), o = [], r = /(((ftp|https?):\/\/)[\-\w@:%_\+.~#?,&\/\/=]+)|((mailto:)?[_.\w-]+@([\w][\w\-]+\.)+[a-zA-Z]{2,3})/g; null !== (t = r.exec(n));) {
				var i = t[0];
				o.push(i)
			}
			return o
		},
		o = function(e, t) {
			var n = e.split("?");
			if (n.length >= 2) {
				for (var o = encodeURIComponent(t) + "=", r = n[1].split(/[&;]/g), i = r.length; i-- > 0;) r[i].lastIndexOf(o, 0) !== -1 && r.splice(i, 1);
				return n[0] + "?" + r.join("&")
			}
			return e
		},
		r = function(r, i, a, s, c, u, d) {
			var l = t(6),
				f = r.pcid;
			$.ajax({
				url: "https://login.sina.com.cn/sso/login.php?client=ssologin.js(v1.4.18)&__from=extension",
				type: "POST",
				data: {
					entry: "weibo",
					gateway: 1,
					from: "",
					savestate: 7,
					userticket: 1,
					pagerefer: "https://passport.weibo.com/visitor/visitor?entry=miniblog&a=enter&url=http%3A%2F%2Fweibo.com%2F&domain=.weibo.com&ua=php-sso_sdk_client-0.6.9&_rand=" + Date.now(),
					vsnf: 1,
					su: i,
					service: "miniblog",
					servicetime: r.servertime,
					nonce: l,
					pwencode: "rsa2",
					pcid: f,
					door: c,
					rsakv: r.rsakv,
					sp: e(s, r.servertime, l, r.pubkey),
					sr: "1920*1080",
					encoding: "UTF-8",
					prelt: "873",
					url: "https://www.weibo.com/ajaxlogin.php?framelogin=1&callback=parent.sinaSSOController.feedBackUrlCallBack",
					returntype: "META"
				}
			}).done(function(e, t, i) {
				var s = n($(e).text())[0].replace("http:", "https:") + "&__from=extension";
				if (s.indexOf("retcode=4049") !== -1 || s.indexOf("retcode=2070") !== -1) return localStorage.setItem(a + ":preLoginData", JSON.stringify(r)), void u({
					pcid: f
				});
				var c = i.getResponseHeader("extension-cookies");
				$.ajax({
					url: s,
					type: "GET",
					headers: {
						"extension-cookies": c
					}
				}).done(function(e) {
					if (s = n($(e).text())[1], !s) return void d("用户名或密码错误！");
					s = o(s, "url") + "&callback=?&__from=extension";
					var t = new XMLHttpRequest;
					t.open("GET", s, !0), t.setRequestHeader("extension-cookies", c), t.onreadystatechange = function() {
						4 === t.readyState && u({
							token: t.getResponseHeader("token"),
							userinfo: JSON.parse(t.responseText.replace("(", "").replace(");", "")).userinfo
						})
					}, t.send()
				}).fail(function() {
					d("登录失败")
				})
			}).fail(function() {
				d("登录失败")
			})
		};
	this.login = function(e, t, n) {
		return new Promise(function(o, i) {
			var a = sinaSSOEncoder.base64.encode(encodeURIComponent(e)),
				s = "https://login.sina.com.cn/sso/prelogin.php?entry=weibo&su=" + a + "&rsakt=mod&client=ssologin.js(v1.4.18)&_=" + Date.now() + "&callback=?&__from=extension";
			if (n) {
				var c = JSON.parse(localStorage.getItem(e + ":preLoginData"));
				return void r(c, a, e, t, n, o, i)
			}
			$.getJSON(s, function(n) {
				return 0 !== n.retcode ? void o(n) : void r(n, a, e, t, "", o, i)
			}).fail(function() {
				i("登录失败")
			})
		})
	}, this.isValidToken = function(e) {
		return new Promise(function(t, n) {
			$.ajax({
				url: "http://www.weibo.com/aj/guide/bubblead?ajwvr=6&_t=0&__rnd=" + Date.now() + "&__from=extension",
				type: "GET",
				headers: {
					"extension-cookies": e
				}
			})
			.done(function(e) {
				"100000" === e.code ? t() : n(e.msg)
			}).fail(function(e) {
				var t = e.getResponseHeader("redirect-location");
				n("http://weibo.com/unfreeze" === t ? "账号冻结" : "账号未登录")
			})
		})
	}
}).call(sinaService), function() {
	"use strict";
	var e = function(e, t, n) {
			return new Promise(function(o, r) {
				$.ajax({
					url: e + "&__from=extension",
					type: "POST",
					headers: {
						"extension-cookies": n
					},
					data: t
				}).done(function(e, t, n) {
					var res = JSON.parse(e);
					"100000" === e.code || "100000" == res.code ? o(e) : r(e.msg)
				}).fail(function(e) {
					var t = e.getResponseHeader("redirect-location");
					r("http://weibo.com/unfreeze" === t ? "账号冻结" : t.indexOf("http://weibo.com/login.php") !== -1 ? "未登录" : "网络异常")
				})
			})
		},
		t = function() {
			var e = localStorage.randomContents || "嗯，有道理～\n有空再看\n转发微博\n你很啰嗦啊。\n已阅。",
				t = e.split("\n").filter(function(e) {
					return e.length > 0
				}),
				n = Math.floor(Math.random() * t.length);
			return t[n]
		};
	this.praise = function(t, n, o) {
		return e("https://weibo.com/aj/v6/like/add?ajwvr=6&__rnd=" + Date.now(), {
			version: "mini",
			qid: "heart",
			location: "page_100505_single_weibo",
			loc: "profile",
			mid: t.statusId,
			cuslike: 1,
			_t: 0
		}, o)
	}, this.follow = function(t, n, o) {
		var param = {
			uid: t.userId,
			objectid: null,
			f: 1,
			extra: null,
			refer_sort: null,
			refer_flag: '0000010006_',
			location: 'page_100505_single_weibo',
			oid: t.userId,
			wforce: 1,
			nogroup: false,
			fnick: t.screenName,
			template: 2,
			mark: null,
			_t:0
		};
		var res = e("https://weibo.com/aj/f/followed?ajwvr=6&__rnd=" + Date.now(), param, o);
		return res;
	}, this.unfollow = function(t, n, o) {
		return e("https://weibo.com/aj/f/unfollow?ajwvr=6", {
			uid: t.userId,
			oid: t.userId
		}, o)
	}, this.forward = function(n, o, r) {
		var i = n.useRandomContent ? t() : n.content;
		return e("https://weibo.com/aj/v6/mblog/forward?ajwvr=6&__rnd=" + Date.now(), {
			mid: n.statusId,
			is_comment_base: 1,
			location: "page_100505_single_weibo",
			style_type: 2,
			rank: 0,
			_t: 0,
			reason: i.substr(0, 160)
		}, r)
	}, this.message = function(t, n, o) {
		return e("https://weibo.com/aj/message/add?ajwvr=6&__rnd=" + Date.now(), {
			location: "msgdialog",
			module: "msgissue",
			style_id: 1,
			_t: 0,
			uid: t.userId,
			text: t.content
		}, o)
	}, this.comment = function(n, o, r) {
		var i = n.useRandomContent ? t() : n.content;
		return e("https://weibo.com/aj/v6/comment/add?ajwvr=6&__rnd=" + Date.now(), {
			act: "post",
			forward: 0,
			isroot: 0,
			pageid: "weibo",
			_t: 0,
			mid: n.statusId,
			location: "page_100505_single_weibo",
			uid: o,
			module: "bcommlist",
			content: i.substr(0, 160),
			_t: 0
		}, r)
	}
}.call(sinaService);
var taskService = taskService || {};
(function() {
	"use strict";
	this.restartAll = function() {
		chrome.alarms.clearAll(), this.executeAll()
	}, this.removeAll = function(e) {
		var t = db.tasks.toCollection();
		return e && (t = t.and(function(t) {
			return e.indexOf(t.id) !== -1
		})), t["delete"]()
	}, this.update = function(e, t) {
		return db.tasks.where("id").equals(e).modify(t)
	}, this.getAll = function(e, t, s, n) {
		var r = db.tasks.toCollection().and(function(s) {
			var n = !0;
			return e && s.type !== e && (n = !1), t && ("其他" === t ? "已完成" !== s.status && "等待执行" !== s.status || (n = !1) : s.status !== t && (n = !1)), n
		}),
			i = r.count();
		return r = r.reverse().offset(s).limit(n).toArray(), Promise.all([r, i]).then(function(e) {
			return Promise.resolve({
				list: e[0],
				count: e[1]
			})
		})
	};
	var e = function(e,sc, t, s, n, r, i, a) {
			db.tasks.where("userId").equals(e).and(function(e) {
				return e.type == a
			}).count().then(function(u) {
				if (0 == u) {
					var c = {
						createdAt: (new Date).toISOString(),
						triggerTime: "",
						type: a,
						failedTimes: 0,
						status: "等待执行",
						userId: e,
						screenName: sc,
						content: n,
						statusId: t,
						statusLink: s,
						useRandomContent: r,
						statusContent: i,

					};
					db.tasks.add(c)
				}
			})
		};
	this.addAll = function(t, s, n, r) {
		var i = null;
		for (var a in r) i = r[a], e(i.userId,i.screenName,i.statusId, i.statusLink, s, n, i.statusContent, t)
	}, this.getLogs = function(e) {
		return db.taskLogs.where("userId").equals(e).toArray()
	}, this.getLeftCount = function() {
		return db.tasks.where("status").equals("等待执行").and(function(e) {
			return e.failedTimes < 3
		}).count()
	};
	var t = function(e, t) {
			return db.taskLogs.where("date").equals(t).and(function(t) {
				return t.userId === e
			})
		};
	this.getLog = function(e, s) {
		return t(e, s).first()
	}, this.addLog = function(e) {
		return db.taskLogs.add(e)
	}, this.updateLog = function(e, s, n) {
		return t(e, s).modify(n)
	}, this.getUnfinishedTask = function(e) {
		return db.tasks.where("status").equals("等待执行").and(function(t) {
			return t.failedTimes < 3 && t.type === e
		}).first()
	}
}).call(taskService), function() {
	"use strict";
	var e = function(e) {
			return 1e3 * (localStorage.getItem(e + "IntervalTime") || 30)
		},
		t = function(e, t, s, n) {
			var r = {},
				i = t + "Count";
			return e ? (r[i] = e[i] + 1, taskService.updateLog(s, n, r)) : (r.date = n, r[i] = 1, r.userId = s, taskService.addLog(r)), r[i]
		},
		s = function(e, t, s) {
			accountService.pauseTask(e.id, t, !0), executeUserIds.set(t, null), chromeService.showNotificaton(s)
		};
	this.execute = function(n) {
		return "checkTaskNumbers" === n ? void taskService.getLeftCount().then(function(e) {
			chromeService.showBadgeText((e || "").toString()), chromeService.createAlarm("checkTaskNumbers", 1e3)
		}) : void taskService.getUnfinishedTask(n).then(function(r) {
			var i = e(n);
			if (chromeService.createAlarm(n, i), r) {
				var a = executeUserIds.get(n);
				if (!a) return void accountService.getAll().then(function(e) {
					0 === e.length ? chromeService.showNotificaton("执行任务失败，请先添加微博账号！") : accountService.getAvailableUserId(e, n).then(function(e) {
						executeUserIds.set(n, e)
					})
				});
				logService.add("执行任务: " + JSON.stringify(r)), accountService.getByUserId(a).then(function(e) {
					return e && e.token && !accountService.isTaskPaused(e, n) ? void sinaService[n](r, a, e.token).then(function(s) {
						logService.add("执行任务" + r.statusId + "成功！");
						var i = new Date;
						taskService.update(r.id, {
							status: "已完成",
							triggerTime: i.toISOString(),
							executeUserId: a
						});
						var u = i.toLocaleDateString();
						taskService.getLog(a, u).then(function(s) {
							var r = n + "Count",
								i = t(s, n, a, u);
							(e[r] || 29) <= i && executeUserIds.set(n, null)
						})
					})["catch"](function(t) {
						var i = "等待执行";
						switch (t) {
						case "账号冻结":
							s(e, n, "账号：" + e.username + "已经被新浪微博冻结!");
							break;
						case "未登录":
							executeUserIds.set(n, null);
							break;
						case "网络异常":
							break;
						case "发布内容过于频繁":
							s(e, n, "账号：" + e.username + "操作过于频繁!");
							break;
						default:
							i = t
						}
						logService.add("执行任务" + r.statusId + "失败，原因:" + t);
						var u = new Date;
						taskService.update(r.id, {
							failedTimes: r.failedTimes + 1,
							status: i,
							triggerTime: u.toISOString(),
							executeUserId: a
						})
					}) : void executeUserIds.set(n, null)
				})
			}
		})
	}, this.executeAll = function() {
		this.execute("checkTaskNumbers"), this.execute("follow"), this.execute("forward"), this.execute("comment"), this.execute("praise"), this.execute("message")
	}
}.call(taskService);
var sinaSSOEncoder = sinaSSOEncoder || {};
(function() {
	"use strict";
	var t = 0,
		r = 8;
	this.hex_sha1 = function(t) {
		return a(i(h(t), t.length * r))
	};
	var i = function(t, r) {
			t[r >> 5] |= 128 << 24 - r % 32, t[(r + 64 >> 9 << 4) + 15] = r;
			for (var i = Array(80), h = 1732584193, a = -271733879, u = -1732584194, f = 271733878, c = -1009589776, p = 0; p < t.length; p += 16) {
				for (var l = h, v = a, d = u, m = f, y = c, S = 0; S < 80; S++) {
					S < 16 ? i[S] = t[p + S] : i[S] = e(i[S - 3] ^ i[S - 8] ^ i[S - 14] ^ i[S - 16], 1);
					var b = n(n(e(h, 5), o(S, a, u, f)), n(n(c, i[S]), s(S)));
					c = f, f = u, u = e(a, 30), a = h, h = b
				}
				h = n(h, l), a = n(a, v), u = n(u, d), f = n(f, m), c = n(c, y)
			}
			return [h, a, u, f, c]
		},
		o = function(t, r, i, o) {
			return t < 20 ? r & i | ~r & o : t < 40 ? r ^ i ^ o : t < 60 ? r & i | r & o | i & o : r ^ i ^ o
		},
		s = function(t) {
			return t < 20 ? 1518500249 : t < 40 ? 1859775393 : t < 60 ? -1894007588 : -899497514
		},
		n = function(t, r) {
			var i = (65535 & t) + (65535 & r),
				o = (t >> 16) + (r >> 16) + (i >> 16);
			return o << 16 | 65535 & i
		},
		e = function(t, r) {
			return t << r | t >>> 32 - r
		},
		h = function(t) {
			for (var i = [], o = (1 << r) - 1, s = 0; s < t.length * r; s += r) i[s >> 5] |= (t.charCodeAt(s / r) & o) << 24 - s % 32;
			return i
		},
		a = function(r) {
			for (var i = t ? "0123456789ABCDEF" : "0123456789abcdef", o = "", s = 0; s < 4 * r.length; s++) o += i.charAt(r[s >> 2] >> 8 * (3 - s % 4) + 4 & 15) + i.charAt(r[s >> 2] >> 8 * (3 - s % 4) & 15);
			return o
		},
		u = function(t) {
			for (var r = "", i = 0; i < t.length; i++) r += "%" + f(t[i]);
			return decodeURIComponent(r)
		},
		f = function(t) {
			var r = "0" + t.toString(16);
			return r.length <= 2 ? r : r.substr(1)
		};
	this.base64 = {
		encode: function(t) {
			if (t = "" + t, "" == t) return "";
			var r, i, o, s, n, e = "",
				h = "",
				a = "",
				u = 0;
			do r = t.charCodeAt(u++), i = t.charCodeAt(u++), h = t.charCodeAt(u++), o = r >> 2, s = (3 & r) << 4 | i >> 4, n = (15 & i) << 2 | h >> 6, a = 63 & h, isNaN(i) ? n = a = 64 : isNaN(h) && (a = 64), e = e + this._keys.charAt(o) + this._keys.charAt(s) + this._keys.charAt(n) + this._keys.charAt(a), r = i = h = "", o = s = n = a = "";
			while (u < t.length);
			return e
		},
		decode: function(t, r, i) {
			var o = function(t, r) {
					for (var i = 0; i < t.length; i++) if (t[i] === r) return i;
					return -1
				};
			"string" == typeof t && (t = t.split(""));
			var s, n, e, h, a, u = [],
				f = "",
				c = "";
			t.length % 4 == 0;
			var p = /[^A-Za-z0-9+\/=]/,
				l = this._keys.split("");
			"urlsafe" == r && (p = /[^A-Za-z0-9-_=]/, l = this._keys_urlsafe.split("")), "subp_v2" == r && (p = /[^A-Za-z0-9_=-]/, l = this._subp_v2_keys.split("")), "subp_v3_3" == r && (p = /[^A-Za-z0-9-_.-]/, l = this._subp_v3_keys_3.split(""));
			var v = 0;
			if ("binnary" == r) for (l = [], v = 0; v <= 64; v++) l[v] = v + 128;
			if ("binnary" != r && p.test(t.join(""))) return "array" == i ? [] : "";
			v = 0;
			do e = o(l, t[v++]), h = o(l, t[v++]), a = o(l, t[v++]), c = o(l, t[v++]), s = e << 2 | h >> 4, n = (15 & h) << 4 | a >> 2, f = (3 & a) << 6 | c, u.push(s), 64 != a && a != -1 && u.push(n), 64 != c && c != -1 && u.push(f), s = n = f = "", e = h = a = c = "";
			while (v < t.length);
			if ("array" == i) return u;
			for (var d = "", m = 0; m < u.lenth; m++) d += String.fromCharCode(u[m]);
			return d
		},
		_keys: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
		_keys_urlsafe: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=",
		_subp_v2_keys: "uAL715W8e3jJCcNU0lT_FSXVgxpbEDdQ4vKaIOH2GBPtfzqsmYZo-wRM9i6hynrk=",
		_subp_v3_keys_3: "5WFh28sGziZTeS1lBxCK-HgPq9IdMUwknybo.LJrQD3uj_Va7pE0XfcNR4AOYvm6t"
	}, this.Cookie = {
		decode: function(t) {
			var r = [],
				i = t.substr(0, 3),
				o = t.substr(3);
			switch (i) {
			case "v01":
				for (var s = 0; s < o.length; s += 2) r.push(parseInt(o.substr(s, 2), 16));
				return decodeURIComponent(u(sinaSSOEncoder.base64.decode(r, "binnary", "array")));
			case "v02":
				return o = o.replace(/\./g, "="), r = sinaSSOEncoder.base64.decode(o, "urlsafe", "array"), u(sinaSSOEncoder.base64.decode(r, "binnary", "array"));
			default:
				return decodeURIComponent(t)
			}
		}
	}, this.getSUBPCookie = {
		__parse: function(t) {
			var r, i, o, s, n = 0,
				e = {},
				h = "",
				a = "";
			if (!t) return e;
			do {
				for (i = t[n], r = ++n, s = n; s < i + r; s++, n++) h += String.fromCharCode(t[s]);
				if (o = t[n], r = ++n, "status" == h || "flag" == h) for (s = n; s < o + r; s++, n++) a += t[s];
				else {
					a = t.slice(s, o + r);
					try {
						a = u(a)
					} catch (f) {
						a = ""
					}
					n += o
				}
				e[h] = a, h = "", a = ""
			} while (n < t.length);
			return e
		},
		decode: function(t) {
			var r, i = [],
				o = t.substr(0, 3),
				s = decodeURIComponent(t.substr(3));
			switch (o) {
			case "002":
				return i = sinaSSOEncoder.base64.decode(s, "subp_v2", "array"), sinaSSOEncoder.getSUBPCookie.__parse(i);
			case "003":
				return r = s.substr(0, 1), i = sinaSSOEncoder.base64.decode(s, "subp_v3_" + r, "array"), sinaSSOEncoder.getSUBPCookie.__parse(i);
			default:
				return decodeURIComponent(t)
			}
		}
	}
}).call(sinaSSOEncoder), function() {
	"use strict";

	function t(t) {
		var r = s(t, this.n.bitLength() + 7 >> 3);
		if (null == r) return null;
		var i = this.doPublic(r);
		if (null == i) return null;
		var o = i.toString(16);
		return 0 == (1 & o.length) ? o : "0" + o
	}
	function r(t) {
		return t.modPowInt(this.e, this.n)
	}
	function i(t, r) {
		null != t && null != r && t.length > 0 && r.length > 0 ? (this.n = n(t, 16), this.e = parseInt(r, 16)) : alert("Invalid RSA public key")
	}
	function o() {
		this.n = null, this.e = 0, this.d = null, this.p = null, this.q = null, this.dmp1 = null, this.dmq1 = null, this.coeff = null
	}
	function s(t, r) {
		if (r < t.length + 11) return alert("Message too long for RSA"), null;
		for (var i = [], o = t.length - 1; o >= 0 && r > 0;) {
			var s = t.charCodeAt(o--);
			s < 128 ? i[--r] = s : s > 127 && s < 2048 ? (i[--r] = 63 & s | 128, i[--r] = s >> 6 | 192) : (i[--r] = 63 & s | 128, i[--r] = s >> 6 & 63 | 128, i[--r] = s >> 12 | 224)
		}
		i[--r] = 0;
		for (var n = new e, h = []; r > 2;) {
			for (h[0] = 0; 0 == h[0];) n.nextBytes(h);
			i[--r] = h[0]
		}
		return i[--r] = 2, i[--r] = 0, new ot(i)
	}
	function n(t, r) {
		return new ot(t, r)
	}
	function e() {}
	function h(t) {
		var r;
		for (r = 0; r < t.length; ++r) t[r] = a()
	}
	function a() {
		if (null == pt) {
			for (u(), pt = c(), pt.init(lt), vt = 0; vt < lt.length; ++vt) lt[vt] = 0;
			vt = 0
		}
		return pt.next()
	}
	function u() {
		f((new Date).getTime())
	}
	function f(t) {
		lt[vt++] ^= 255 & t, lt[vt++] ^= t >> 8 & 255, lt[vt++] ^= t >> 16 & 255, lt[vt++] ^= t >> 24 & 255, vt >= dt && (vt -= dt)
	}
	function c() {
		return new v
	}
	function p() {
		var t;
		return this.i = this.i + 1 & 255, this.j = this.j + this.S[this.i] & 255, t = this.S[this.i], this.S[this.i] = this.S[this.j], this.S[this.j] = t, this.S[t + this.S[this.i] & 255]
	}
	function l(t) {
		var r, i, o;
		for (r = 0; r < 256; ++r) this.S[r] = r;
		for (i = 0, r = 0; r < 256; ++r) i = i + this.S[r] + t[r % t.length] & 255, o = this.S[r], this.S[r] = this.S[i], this.S[i] = o;
		this.i = 0, this.j = 0
	}
	function v() {
		this.i = 0, this.j = 0, this.S = []
	}
	function d(t, r) {
		var i;
		return i = t < 256 || r.isEven() ? new R(r) : new _(r), this.exp(t, i)
	}
	function m(t, r) {
		if (t > 4294967295 || t < 1) return ot.ONE;
		var i = it(),
			o = it(),
			s = r.convert(this),
			n = P(t) - 1;
		for (s.copyTo(i); --n >= 0;) if (r.sqrTo(i, o), (t & 1 << n) > 0) r.mulTo(o, s, i);
		else {
			var e = i;
			i = o, o = e
		}
		return r.revert(i)
	}
	function y() {
		return 0 == (this.t > 0 ? 1 & this[0] : this.s)
	}
	function S(t, r, i) {
		t.multiplyTo(r, i), this.reduce(i)
	}
	function b(t, r) {
		t.squareTo(r), this.reduce(r)
	}
	function T(t) {
		for (; t.t <= this.mt2;) t[t.t++] = 0;
		for (var r = 0; r < this.m.t; ++r) {
			var i = 32767 & t[r],
				o = i * this.mpl + ((i * this.mph + (t[r] >> 15) * this.mpl & this.um) << 15) & t.DM;
			for (i = r + this.m.t, t[i] += this.m.am(0, o, t, r, 0, this.m.t); t[i] >= t.DV;) t[i] -= t.DV, t[++i]++
		}
		t.clamp(), t.drShiftTo(this.m.t, t), t.compareTo(this.m) >= 0 && t.subTo(this.m, t)
	}
	function g(t) {
		var r = it();
		return t.copyTo(r), this.reduce(r), r
	}
	function D(t) {
		var r = it();
		return t.abs().dlShiftTo(this.m.t, r), r.divRemTo(this.m, null, r), t.s < 0 && r.compareTo(ot.ZERO) > 0 && this.m.subTo(r, r), r
	}
	function _(t) {
		this.m = t, this.mp = t.invDigit(), this.mpl = 32767 & this.mp, this.mph = this.mp >> 15, this.um = (1 << t.DB - 15) - 1, this.mt2 = 2 * t.t
	}
	function B() {
		if (this.t < 1) return 0;
		var t = this[0];
		if (0 == (1 & t)) return 0;
		var r = 3 & t;
		return r = r * (2 - (15 & t) * r) & 15, r = r * (2 - (255 & t) * r) & 255, r = r * (2 - ((65535 & t) * r & 65535)) & 65535, r = r * (2 - t * r % this.DV) % this.DV, r > 0 ? this.DV - r : -r
	}
	function A(t, r) {
		t.squareTo(r), this.reduce(r)
	}
	function E(t, r, i) {
		t.multiplyTo(r, i), this.reduce(i)
	}
	function C(t) {
		t.divRemTo(this.m, null, t)
	}
	function w(t) {
		return t
	}
	function O(t) {
		return t.s < 0 || t.compareTo(this.m) >= 0 ? t.mod(this.m) : t
	}
	function R(t) {
		this.m = t
	}
	function M(t) {
		var r = it();
		return this.abs().divRemTo(t, null, r), this.s < 0 && r.compareTo(ot.ZERO) > 0 && t.subTo(r, r), r
	}
	function k(t, r, i) {
		var o = t.abs();
		if (!(o.t <= 0)) {
			var s = this.abs();
			if (s.t < o.t) return null != r && r.fromInt(0), void(null != i && this.copyTo(i));
			null == i && (i = it());
			var n = it(),
				e = this.s,
				h = t.s,
				a = this.DB - P(o[o.t - 1]);
			a > 0 ? (o.lShiftTo(a, n), s.lShiftTo(a, i)) : (o.copyTo(n), s.copyTo(i));
			var u = n.t,
				f = n[u - 1];
			if (0 == f) return;
			var c = f * (1 << this.F1) + (u > 1 ? n[u - 2] >> this.F2 : 0),
				p = this.FV / c,
				l = (1 << this.F1) / c,
				v = 1 << this.F2,
				d = i.t,
				m = d - u,
				y = null == r ? it() : r;
			for (n.dlShiftTo(m, y), i.compareTo(y) >= 0 && (i[i.t++] = 1, i.subTo(y, i)), ot.ONE.dlShiftTo(u, y), y.subTo(n, n); n.t < u;) n[n.t++] = 0;
			for (; --m >= 0;) {
				var S = i[--d] == f ? this.DM : Math.floor(i[d] * p + (i[d - 1] + v) * l);
				if ((i[d] += n.am(0, S, i, m, 0, u)) < S) for (n.dlShiftTo(m, y), i.subTo(y, i); i[d] < --S;) i.subTo(y, i)
			}
			null != r && (i.drShiftTo(u, r), e != h && ot.ZERO.subTo(r, r)), i.t = u, i.clamp(), a > 0 && i.rShiftTo(a, i), e < 0 && ot.ZERO.subTo(i, i)
		}
	}
	function I(t) {
		for (var r = this.abs(), i = t.t = 2 * r.t; --i >= 0;) t[i] = 0;
		for (i = 0; i < r.t - 1; ++i) {
			var o = r.am(i, r[i], t, 2 * i, 0, 1);
			(t[i + r.t] += r.am(i + 1, 2 * r[i], t, 2 * i + 1, o, r.t - i - 1)) >= r.DV && (t[i + r.t] -= r.DV, t[i + r.t + 1] = 1)
		}
		t.t > 0 && (t[t.t - 1] += r.am(i, r[i], t, 2 * i, 0, 1)), t.s = 0, t.clamp()
	}
	function x(t, r) {
		var i = this.abs(),
			o = t.abs(),
			s = i.t;
		for (r.t = s + o.t; --s >= 0;) r[s] = 0;
		for (s = 0; s < o.t; ++s) r[s + i.t] = i.am(0, o[s], r, s, 0, i.t);
		r.s = 0, r.clamp(), this.s != t.s && ot.ZERO.subTo(r, r)
	}
	function N(t, r) {
		for (var i = 0, o = 0, s = Math.min(t.t, this.t); i < s;) o += this[i] - t[i], r[i++] = o & this.DM, o >>= this.DB;
		if (t.t < this.t) {
			for (o -= t.s; i < this.t;) o += this[i], r[i++] = o & this.DM, o >>= this.DB;
			o += this.s
		} else {
			for (o += this.s; i < t.t;) o -= t[i], r[i++] = o & this.DM, o >>= this.DB;
			o -= t.s
		}
		r.s = o < 0 ? -1 : 0, o < -1 ? r[i++] = this.DV + o : o > 0 && (r[i++] = o), r.t = i, r.clamp()
	}
	function V(t, r) {
		r.s = this.s;
		var i = Math.floor(t / this.DB);
		if (i >= this.t) r.t = 0;
		else {
			var o = t % this.DB,
				s = this.DB - o,
				n = (1 << o) - 1;
			r[0] = this[i] >> o;
			for (var e = i + 1; e < this.t; ++e) r[e - i - 1] |= (this[e] & n) << s, r[e - i] = this[e] >> o;
			o > 0 && (r[this.t - i - 1] |= (this.s & n) << s), r.t = this.t - i, r.clamp()
		}
	}
	function Z(t, r) {
		var i, o = t % this.DB,
			s = this.DB - o,
			n = (1 << s) - 1,
			e = Math.floor(t / this.DB),
			h = this.s << o & this.DM;
		for (i = this.t - 1; i >= 0; --i) r[i + e + 1] = this[i] >> s | h, h = (this[i] & n) << o;
		for (i = e - 1; i >= 0; --i) r[i] = 0;
		r[e] = h, r.t = this.t + e + 1, r.s = this.s, r.clamp()
	}
	function q(t, r) {
		for (var i = t; i < this.t; ++i) r[i - t] = this[i];
		r.t = Math.max(this.t - t, 0), r.s = this.s
	}
	function F(t, r) {
		var i;
		for (i = this.t - 1; i >= 0; --i) r[i + t] = this[i];
		for (i = t - 1; i >= 0; --i) r[i] = 0;
		r.t = this.t + t, r.s = this.s
	}
	function j() {
		return this.t <= 0 ? 0 : this.DB * (this.t - 1) + P(this[this.t - 1] ^ this.s & this.DM)
	}
	function P(t) {
		var r, i = 1;
		return 0 != (r = t >>> 16) && (t = r, i += 16), 0 != (r = t >> 8) && (t = r, i += 8), 0 != (r = t >> 4) && (t = r, i += 4), 0 != (r = t >> 2) && (t = r, i += 2), 0 != (r = t >> 1) && (t = r, i += 1), i
	}
	function U(t) {
		var r = this.s - t.s;
		if (0 != r) return r;
		var i = this.t;
		if (r = i - t.t, 0 != r) return r;
		for (; --i >= 0;) if (0 != (r = this[i] - t[i])) return r;
		return 0
	}
	function z() {
		return this.s < 0 ? this.negate() : this
	}
	function L() {
		var t = it();
		return ot.ZERO.subTo(this, t), t
	}
	function K(t) {
		if (this.s < 0) return "-" + this.negate().toString(t);
		var r;
		if (16 == t) r = 4;
		else if (8 == t) r = 3;
		else if (2 == t) r = 1;
		else if (32 == t) r = 5;
		else {
			if (4 != t) return this.toRadix(t);
			r = 2
		}
		var i, o = (1 << r) - 1,
			s = !1,
			n = "",
			e = this.t,
			h = this.DB - e * this.DB % r;
		if (e-- > 0) for (h < this.DB && (i = this[e] >> h) > 0 && (s = !0, n = Y(i)); e >= 0;) h < r ? (i = (this[e] & (1 << h) - 1) << r - h, i |= this[--e] >> (h += this.DB - r)) : (i = this[e] >> (h -= r) & o, h <= 0 && (h += this.DB, --e)), i > 0 && (s = !0), s && (n += Y(i));
		return s ? n : "0"
	}
	function G() {
		for (var t = this.s & this.DM; this.t > 0 && this[this.t - 1] == t;)--this.t
	}
	function H(t, r) {
		var i;
		if (16 == r) i = 4;
		else if (8 == r) i = 3;
		else if (256 == r) i = 8;
		else if (2 == r) i = 1;
		else if (32 == r) i = 5;
		else {
			if (4 != r) return void this.fromRadix(t, r);
			i = 2
		}
		this.t = 0, this.s = 0;
		for (var o = t.length, s = !1, n = 0; --o >= 0;) {
			var e = 8 == i ? 255 & t[o] : X(t, o);
			e < 0 ? "-" == t.charAt(o) && (s = !0) : (s = !1, 0 == n ? this[this.t++] = e : n + i > this.DB ? (this[this.t - 1] |= (e & (1 << this.DB - n) - 1) << n, this[this.t++] = e >> this.DB - n) : this[this.t - 1] |= e << n, n += i, n >= this.DB && (n -= this.DB))
		}
		8 == i && 0 != (128 & t[0]) && (this.s = -1, n > 0 && (this[this.t - 1] |= (1 << this.DB - n) - 1 << n)), this.clamp(), s && ot.ZERO.subTo(this, this)
	}
	function J(t) {
		var r = it();
		return r.fromInt(t), r
	}
	function Q(t) {
		this.t = 1, this.s = t < 0 ? -1 : 0, t > 0 ? this[0] = t : t < -1 ? this[0] = t + DV : this.t = 0
	}
	function W(t) {
		for (var r = this.t - 1; r >= 0; --r) t[r] = this[r];
		t.t = this.t, t.s = this.s
	}
	function X(t, r) {
		var i = ct[t.charCodeAt(r)];
		return null == i ? -1 : i
	}
	function Y(t) {
		return ft.charAt(t)
	}
	function $(t, r, i, o, s, n) {
		for (var e = 16383 & r, h = r >> 14; --n >= 0;) {
			var a = 16383 & this[t],
				u = this[t++] >> 14,
				f = h * a + u * e;
			a = e * a + ((16383 & f) << 14) + i[o] + s, s = (a >> 28) + (f >> 14) + h * u, i[o++] = 268435455 & a
		}
		return s
	}
	function tt(t, r, i, o, s, n) {
		for (var e = 32767 & r, h = r >> 15; --n >= 0;) {
			var a = 32767 & this[t],
				u = this[t++] >> 15,
				f = h * a + u * e;
			a = e * a + ((32767 & f) << 15) + i[o] + (1073741823 & s), s = (a >>> 30) + (f >>> 15) + h * u + (s >>> 30), i[o++] = 1073741823 & a
		}
		return s
	}
	function rt(t, r, i, o, s, n) {
		for (; --n >= 0;) {
			var e = r * this[t++] + i[o] + s;
			s = Math.floor(e / 67108864), i[o++] = 67108863 & e
		}
		return s
	}
	function it() {
		return new ot(null)
	}
	function ot(t, r, i) {
		null != t && ("number" == typeof t ? this.fromNumber(t, r, i) : null == r && "string" != typeof t ? this.fromString(t, 256) : this.fromString(t, r))
	}
	var st, nt = 0xdeadbeefcafe,
		et = 15715070 == (16777215 & nt);
	et && "Microsoft Internet Explorer" == navigator.appName ? (ot.prototype.am = tt, st = 30) : et && "Netscape" != navigator.appName ? (ot.prototype.am = rt, st = 26) : (ot.prototype.am = $, st = 28), ot.prototype.DB = st, ot.prototype.DM = (1 << st) - 1, ot.prototype.DV = 1 << st;
	var ht = 52;
	ot.prototype.FV = Math.pow(2, ht), ot.prototype.F1 = ht - st, ot.prototype.F2 = 2 * st - ht;
	var at, ut, ft = "0123456789abcdefghijklmnopqrstuvwxyz",
		ct = [];
	for (at = "0".charCodeAt(0), ut = 0; ut <= 9; ++ut) ct[at++] = ut;
	for (at = "a".charCodeAt(0), ut = 10; ut < 36; ++ut) ct[at++] = ut;
	for (at = "A".charCodeAt(0), ut = 10; ut < 36; ++ut) ct[at++] = ut;
	R.prototype.convert = O, R.prototype.revert = w, R.prototype.reduce = C, R.prototype.mulTo = E, R.prototype.sqrTo = A, _.prototype.convert = D, _.prototype.revert = g, _.prototype.reduce = T, _.prototype.mulTo = S, _.prototype.sqrTo = b, ot.prototype.copyTo = W, ot.prototype.fromInt = Q, ot.prototype.fromString = H, ot.prototype.clamp = G, ot.prototype.dlShiftTo = F, ot.prototype.drShiftTo = q, ot.prototype.lShiftTo = Z, ot.prototype.rShiftTo = V, ot.prototype.subTo = N, ot.prototype.multiplyTo = x, ot.prototype.squareTo = I, ot.prototype.divRemTo = k, ot.prototype.invDigit = B, ot.prototype.isEven = y, ot.prototype.exp = m, ot.prototype.toString = K, ot.prototype.negate = L, ot.prototype.abs = z, ot.prototype.compareTo = U, ot.prototype.bitLength = j, ot.prototype.mod = M, ot.prototype.modPowInt = d, ot.ZERO = J(0), ot.ONE = J(1), v.prototype.init = l, v.prototype.next = p;
	var pt, lt, vt, dt = 256;
	if (null == lt) {
		lt = [], vt = 0;
		var mt;
		if ("Netscape" == navigator.appName && navigator.appVersion < "5" && window.crypto && "function" == typeof window.crypto.random) {
			var yt = window.crypto.random(32);
			for (mt = 0; mt < yt.length; ++mt) lt[vt++] = 255 & yt.charCodeAt(mt)
		}
		for (; vt < dt;) mt = Math.floor(65536 * Math.random()), lt[vt++] = mt >>> 8, lt[vt++] = 255 & mt;
		vt = 0, u()
	}
	e.prototype.nextBytes = h, o.prototype.doPublic = r, o.prototype.setPublic = i, o.prototype.encrypt = t, this.RSAKey = o
}.call(sinaSSOEncoder);
var db = new Dexie("weiboyingxiao");
db.version(1).stores({
	logs: "++id,content,createdAt",
	tasks: "++id,content,userId,screenName,statusId,createdAt,triggerTime,failedTimes,status,type,useRandomContent,statusContent",
	customers: "++id,userId,statusId,url,profileImageUrl,screenName,content,friendsCount,followersCount,statusesCount,description,location,school,company,keywords,source,createdAt,statusLink,attitudesCount,commentsCount,repostsCount,gender,domain,isMember,verified",
	accounts: "++id,username,password,userId,status",
	taskLogs: "++id,userId,date"
}), db.open();
var executeUserIds = {
	get: function(e) {
		return localStorage.getItem(e + ":UserId")
	},
	set: function(e, t) {
		var s = e + ":UserId";
		null == t ? localStorage.removeItem(s) : localStorage.setItem(s, t)
	}
};
!
function() {
	"use strict";
	chromeService.listenOnBeforeSendHeaders(), chromeService.listenOnHeadersReceived(), chromeService.listenOnMessage(), chromeService.listenOnAlarm(), taskService.executeAll(), logService.getCount().then(function(e) {
		e > 2e4 && logService.removeAll()
	})
}();