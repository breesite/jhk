(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a45ca4fe"],{"01b9":function(e,t,n){},"0a3e":function(e,t,n){"use strict";n("bf54")},"13aa":function(e,t,n){},5989:function(e,t,n){"use strict";n("01b9")},"5ba6":function(e,t,n){},6899:function(e,t,n){},"6dbf":function(e,t,n){"use strict";n("aaae")},"79ed":function(e,t,n){"use strict";n("5ba6")},"94ca0":function(e,t,n){"use strict";n("13aa")},aaae:function(e,t,n){},b311:function(e,t,n){
/*!
 * clipboard.js v2.0.8
 * https://clipboardjs.com/
 *
 * Licensed MIT © Zeno Rocha
 */
(function(t,n){e.exports=n()})(0,(function(){return function(){var e={134:function(e,t,n){"use strict";n.d(t,{default:function(){return C}});var o=n(279),i=n.n(o),c=n(370),r=n.n(c),l=n(817),a=n.n(l);function s(e){return s="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s(e)}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function d(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function v(e,t,n){return t&&d(e.prototype,t),n&&d(e,n),e}var b=function(){function e(t){u(this,e),this.resolveOptions(t),this.initSelection()}return v(e,[{key:"resolveOptions",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.action=e.action,this.container=e.container,this.emitter=e.emitter,this.target=e.target,this.text=e.text,this.trigger=e.trigger,this.selectedText=""}},{key:"initSelection",value:function(){this.text?this.selectFake():this.target&&this.selectTarget()}},{key:"createFakeElement",value:function(){var e="rtl"===document.documentElement.getAttribute("dir");this.fakeElem=document.createElement("textarea"),this.fakeElem.style.fontSize="12pt",this.fakeElem.style.border="0",this.fakeElem.style.padding="0",this.fakeElem.style.margin="0",this.fakeElem.style.position="absolute",this.fakeElem.style[e?"right":"left"]="-9999px";var t=window.pageYOffset||document.documentElement.scrollTop;return this.fakeElem.style.top="".concat(t,"px"),this.fakeElem.setAttribute("readonly",""),this.fakeElem.value=this.text,this.fakeElem}},{key:"selectFake",value:function(){var e=this,t=this.createFakeElement();this.fakeHandlerCallback=function(){return e.removeFake()},this.fakeHandler=this.container.addEventListener("click",this.fakeHandlerCallback)||!0,this.container.appendChild(t),this.selectedText=a()(t),this.copyText(),this.removeFake()}},{key:"removeFake",value:function(){this.fakeHandler&&(this.container.removeEventListener("click",this.fakeHandlerCallback),this.fakeHandler=null,this.fakeHandlerCallback=null),this.fakeElem&&(this.container.removeChild(this.fakeElem),this.fakeElem=null)}},{key:"selectTarget",value:function(){this.selectedText=a()(this.target),this.copyText()}},{key:"copyText",value:function(){var e;try{e=document.execCommand(this.action)}catch(t){e=!1}this.handleResult(e)}},{key:"handleResult",value:function(e){this.emitter.emit(e?"success":"error",{action:this.action,text:this.selectedText,trigger:this.trigger,clearSelection:this.clearSelection.bind(this)})}},{key:"clearSelection",value:function(){this.trigger&&this.trigger.focus(),document.activeElement.blur(),window.getSelection().removeAllRanges()}},{key:"destroy",value:function(){this.removeFake()}},{key:"action",set:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"copy";if(this._action=e,"copy"!==this._action&&"cut"!==this._action)throw new Error('Invalid "action" value, use either "copy" or "cut"')},get:function(){return this._action}},{key:"target",set:function(e){if(void 0!==e){if(!e||"object"!==s(e)||1!==e.nodeType)throw new Error('Invalid "target" value, use a valid Element');if("copy"===this.action&&e.hasAttribute("disabled"))throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');if("cut"===this.action&&(e.hasAttribute("readonly")||e.hasAttribute("disabled")))throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');this._target=e}},get:function(){return this._target}}]),e}(),f=b;function p(e){return p="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},p(e)}function O(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function h(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function j(e,t,n){return t&&h(e.prototype,t),n&&h(e,n),e}function m(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&y(e,t)}function y(e,t){return y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},y(e,t)}function g(e){var t=x();return function(){var n,o=M(e);if(t){var i=M(this).constructor;n=Reflect.construct(o,arguments,i)}else n=o.apply(this,arguments);return k(this,n)}}function k(e,t){return!t||"object"!==p(t)&&"function"!==typeof t?w(e):t}function w(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function x(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function M(e){return M=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},M(e)}function E(e,t){var n="data-clipboard-".concat(e);if(t.hasAttribute(n))return t.getAttribute(n)}var S=function(e){m(n,e);var t=g(n);function n(e,o){var i;return O(this,n),i=t.call(this),i.resolveOptions(o),i.listenClick(e),i}return j(n,[{key:"resolveOptions",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.action="function"===typeof e.action?e.action:this.defaultAction,this.target="function"===typeof e.target?e.target:this.defaultTarget,this.text="function"===typeof e.text?e.text:this.defaultText,this.container="object"===p(e.container)?e.container:document.body}},{key:"listenClick",value:function(e){var t=this;this.listener=r()(e,"click",(function(e){return t.onClick(e)}))}},{key:"onClick",value:function(e){var t=e.delegateTarget||e.currentTarget;this.clipboardAction&&(this.clipboardAction=null),this.clipboardAction=new f({action:this.action(t),target:this.target(t),text:this.text(t),container:this.container,trigger:t,emitter:this})}},{key:"defaultAction",value:function(e){return E("action",e)}},{key:"defaultTarget",value:function(e){var t=E("target",e);if(t)return document.querySelector(t)}},{key:"defaultText",value:function(e){return E("text",e)}},{key:"destroy",value:function(){this.listener.destroy(),this.clipboardAction&&(this.clipboardAction.destroy(),this.clipboardAction=null)}}],[{key:"isSupported",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:["copy","cut"],t="string"===typeof e?[e]:e,n=!!document.queryCommandSupported;return t.forEach((function(e){n=n&&!!document.queryCommandSupported(e)})),n}}]),n}(i()),C=S},828:function(e){var t=9;if("undefined"!==typeof Element&&!Element.prototype.matches){var n=Element.prototype;n.matches=n.matchesSelector||n.mozMatchesSelector||n.msMatchesSelector||n.oMatchesSelector||n.webkitMatchesSelector}function o(e,n){while(e&&e.nodeType!==t){if("function"===typeof e.matches&&e.matches(n))return e;e=e.parentNode}}e.exports=o},438:function(e,t,n){var o=n(828);function i(e,t,n,o,i){var c=r.apply(this,arguments);return e.addEventListener(n,c,i),{destroy:function(){e.removeEventListener(n,c,i)}}}function c(e,t,n,o,c){return"function"===typeof e.addEventListener?i.apply(null,arguments):"function"===typeof n?i.bind(null,document).apply(null,arguments):("string"===typeof e&&(e=document.querySelectorAll(e)),Array.prototype.map.call(e,(function(e){return i(e,t,n,o,c)})))}function r(e,t,n,i){return function(n){n.delegateTarget=o(n.target,t),n.delegateTarget&&i.call(e,n)}}e.exports=c},879:function(e,t){t.node=function(e){return void 0!==e&&e instanceof HTMLElement&&1===e.nodeType},t.nodeList=function(e){var n=Object.prototype.toString.call(e);return void 0!==e&&("[object NodeList]"===n||"[object HTMLCollection]"===n)&&"length"in e&&(0===e.length||t.node(e[0]))},t.string=function(e){return"string"===typeof e||e instanceof String},t.fn=function(e){var t=Object.prototype.toString.call(e);return"[object Function]"===t}},370:function(e,t,n){var o=n(879),i=n(438);function c(e,t,n){if(!e&&!t&&!n)throw new Error("Missing required arguments");if(!o.string(t))throw new TypeError("Second argument must be a String");if(!o.fn(n))throw new TypeError("Third argument must be a Function");if(o.node(e))return r(e,t,n);if(o.nodeList(e))return l(e,t,n);if(o.string(e))return a(e,t,n);throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")}function r(e,t,n){return e.addEventListener(t,n),{destroy:function(){e.removeEventListener(t,n)}}}function l(e,t,n){return Array.prototype.forEach.call(e,(function(e){e.addEventListener(t,n)})),{destroy:function(){Array.prototype.forEach.call(e,(function(e){e.removeEventListener(t,n)}))}}}function a(e,t,n){return i(document.body,e,t,n)}e.exports=c},817:function(e){function t(e){var t;if("SELECT"===e.nodeName)e.focus(),t=e.value;else if("INPUT"===e.nodeName||"TEXTAREA"===e.nodeName){var n=e.hasAttribute("readonly");n||e.setAttribute("readonly",""),e.select(),e.setSelectionRange(0,e.value.length),n||e.removeAttribute("readonly"),t=e.value}else{e.hasAttribute("contenteditable")&&e.focus();var o=window.getSelection(),i=document.createRange();i.selectNodeContents(e),o.removeAllRanges(),o.addRange(i),t=o.toString()}return t}e.exports=t},279:function(e){function t(){}t.prototype={on:function(e,t,n){var o=this.e||(this.e={});return(o[e]||(o[e]=[])).push({fn:t,ctx:n}),this},once:function(e,t,n){var o=this;function i(){o.off(e,i),t.apply(n,arguments)}return i._=t,this.on(e,i,n)},emit:function(e){var t=[].slice.call(arguments,1),n=((this.e||(this.e={}))[e]||[]).slice(),o=0,i=n.length;for(o;o<i;o++)n[o].fn.apply(n[o].ctx,t);return this},off:function(e,t){var n=this.e||(this.e={}),o=n[e],i=[];if(o&&t)for(var c=0,r=o.length;c<r;c++)o[c].fn!==t&&o[c].fn._!==t&&i.push(o[c]);return i.length?n[e]=i:delete n[e],this}},e.exports=t,e.exports.TinyEmitter=t}},t={};function n(o){if(t[o])return t[o].exports;var i=t[o]={exports:{}};return e[o](i,i.exports,n),i.exports}return function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),n(134)}().default}))},b96c:function(e,t,n){"use strict";n.r(t);n("a4d3"),n("e01a"),n("b0c0");var o=n("7a23");Object(o["P"])("data-v-4ca9afac");var i={class:"video-play"},c={class:"play-detail"},r={class:"mod-main"},l={class:"player-wrap"},a={class:"embed-responsive"},s={class:"player-container"},u={class:"media-wrap"},d={class:"intro-text"},v=Object(o["p"])("收起 "),b=Object(o["n"])("i",{class:"el-icon-arrow-up"},null,-1),f=[v,b],p=Object(o["p"])("展开 "),O=Object(o["n"])("i",{class:"el-icon-arrow-down"},null,-1),h=[p,O],j={class:"mod-wrap show-lg"},m=Object(o["n"])("div",{class:"mod-title"},[Object(o["n"])("h3",null," 推荐视频 ")],-1),y={class:"list-items"},g={class:"mod-side"},k={class:"mod-wrap"},w=Object(o["n"])("div",{class:"divider"},null,-1),x={key:0,class:"mod-wrap"},M={class:"mod-header"},E={class:"mod-title"},S={key:0,class:"subtitle"},C={class:"mod-wrap"},T=Object(o["n"])("div",{class:"mod-title"},[Object(o["n"])("h3",null," 推荐视频 ")],-1),_={class:"list-items"};function P(e,t,n,v,b,p){var O,P,L,A,R,V,q,I,H,z,N,F,B=Object(o["V"])("Masthead"),Z=Object(o["V"])("DPlayer"),D=Object(o["V"])("VideoToolbar"),W=Object(o["V"])("Skeleton"),Q=Object(o["V"])("RCVideoItem"),$=Object(o["V"])("CommentModule"),J=Object(o["V"])("AuthorInfo"),Y=Object(o["V"])("CollectionPosts"),U=Object(o["V"])("Footer"),X=Object(o["V"])("SideBar");return Object(o["M"])(),Object(o["m"])(o["b"],null,[Object(o["q"])(B),Object(o["n"])("div",i,[Object(o["n"])("div",c,[Object(o["n"])("div",r,[Object(o["n"])("div",l,[Object(o["n"])("div",a,[Object(o["n"])("div",s,[null!==(O=v.post)&&void 0!==O&&O.video?(Object(o["M"])(),Object(o["k"])(Z,{key:0,source:null===(P=v.post)||void 0===P?void 0:P.video,progress:0},null,8,["source"])):Object(o["l"])("",!0)])])]),Object(o["n"])("div",u,[Object(o["n"])("div",{class:Object(o["A"])(["movie-intro","hide-lg",b.isCollapse&&"collapse"])},[Object(o["n"])("div",d,[Object(o["p"])(Object(o["Z"])(null===(L=v.post)||void 0===L?void 0:L.description)+" ",1),Object(o["n"])("span",{class:"down-up up-box",onClick:t[0]||(t[0]=function(){return p.toggleCollapse&&p.toggleCollapse.apply(p,arguments)})},f)]),Object(o["n"])("span",{class:"down-up down-box",onClick:t[1]||(t[1]=function(){return p.toggleCollapse&&p.toggleCollapse.apply(p,arguments)})},h)],2),v.post?(Object(o["M"])(),Object(o["k"])(D,{key:0,post:v.post},null,8,["post"])):Object(o["l"])("",!0),Object(o["n"])("div",j,[m,Object(o["n"])("div",y,[(null===(A=v.recommendPosts)||void 0===A?void 0:A.length)<1?(Object(o["M"])(),Object(o["k"])(W,{key:0,type:"recommend-movies",count:4})):(Object(o["M"])(!0),Object(o["m"])(o["b"],{key:1},Object(o["T"])(v.recommendPosts,(function(e){return Object(o["M"])(),Object(o["m"])("div",{class:"list-item",key:null===e||void 0===e?void 0:e.id},[Object(o["q"])(Q,{video:e},null,8,["video"])])})),128))])]),null!==(R=v.post)&&void 0!==R&&R.id?(Object(o["M"])(),Object(o["k"])($,{key:1,"commentable-id":null===(V=v.post)||void 0===V?void 0:V.id,type:"posts"},null,8,["commentable-id"])):Object(o["l"])("",!0)])]),Object(o["n"])("div",g,[Object(o["n"])("div",k,[Object(o["q"])(J,{user:null===(q=v.post)||void 0===q?void 0:q.user},null,8,["user"]),w]),null!==(I=v.collection)&&void 0!==I&&I.id?(Object(o["M"])(),Object(o["m"])("div",x,[Object(o["n"])("div",M,[Object(o["n"])("h3",E,Object(o["Z"])((null===(H=v.collection)||void 0===H?void 0:H.name)||"相关视频"),1),null!==(z=v.collection)&&void 0!==z&&z.count_posts?(Object(o["M"])(),Object(o["m"])("div",S,"共"+Object(o["Z"])(null===(N=v.collection)||void 0===N?void 0:N.count_posts)+"集",1)):Object(o["l"])("",!0)]),Object(o["q"])(Y,{collection:v.collection},null,8,["collection"])])):Object(o["l"])("",!0),Object(o["n"])("div",C,[T,Object(o["n"])("div",_,[(null===(F=v.recommendPosts)||void 0===F?void 0:F.length)<1?(Object(o["M"])(),Object(o["k"])(W,{key:0,type:"recommend-movies",count:4})):(Object(o["M"])(!0),Object(o["m"])(o["b"],{key:1},Object(o["T"])(v.recommendPosts,(function(e){return Object(o["M"])(),Object(o["m"])("div",{class:"list-item",key:null===e||void 0===e?void 0:e.id},[Object(o["q"])(Q,{video:e},null,8,["video"])])})),128))])])])])]),Object(o["q"])(U),Object(o["q"])(X)],64)}Object(o["N"])();n("a9e3"),n("fb6a");var L=n("6c02"),A=n("f685"),R=n("a684"),V=n("2d5b"),q=n("1c97"),I=n("be7c");Object(o["P"])("data-v-f8f0b9de");var H=["href"],z={class:"figure"},N={class:"figure-pic"},F={class:"detail"},B=["href"],Z={class:"detail-meta"},D={class:"like"},W={key:0,class:"icon",viewBox:"0 0 1024 1024",version:"1.1"},Q=Object(o["n"])("path",{d:"M466.88 908.96L113.824 563.296a270.08 270.08 0 0 1 0-387.392c108.8-106.56 284.896-106.56 393.696 0 1.504 1.472 2.976 2.944 4.448 4.48 1.472-1.536 2.944-3.008 4.448-4.48 108.8-106.56 284.896-106.56 393.696 0a269.952 269.952 0 0 1 34.016 347.072l-387.392 385.6a64 64 0 0 1-89.92 0.384z","p-id":"9345"},null,-1),$=[Q],J={key:1,class:"icon",viewBox:"0 0 1024 1024",version:"1.1"},Y=Object(o["n"])("path",{d:"M736 128l6.485333 0.085333C880.661333 131.541333 992 245.013333 992 384c0 55.082667-14.357333 93.333333-34.538667 126.037333a312.021333 312.021333 0 0 1-41.130666 55.658667L598.741333 886.485333l-5.077333 4.928c-2.88 2.688-5.653333 5.12-8.426667 7.424-13.056 10.816-26.176 18.410667-39.274666 23.146667a98.922667 98.922667 0 0 1-23.744 5.482667l-5.12 0.405333L512 928l-5.12-0.128-5.12-0.405333a99.242667 99.242667 0 0 1-23.701333-5.482667c-13.12-4.736-26.24-12.330667-39.296-23.146667a182.677333 182.677333 0 0 1-8.32-7.317333l-0.106667-0.106667-5.098667-4.906666L107.669333 565.674667a311.552 311.552 0 0 1-41.130666-55.68C46.357333 477.354667 32 439.104 32 384c0-141.162667 114.837333-256 256-256l7.68 0.106667h0.170667l6.848 0.298666 0.661333 0.042667 4.992 0.341333 3.584 0.32c4.544 0.426667 9.066667 0.96 13.568 1.6 0.298667 0.085333 0.618667 0.128 0.917333 0.170667 39.082667 5.845333 76.16 20.672 108.864 43.712l2.24 1.706667c5.589333 4.032 11.050667 8.277333 16.362667 12.8l7.872 6.890666L512 246.250667l50.24-50.218667c7.765333-7.104 15.850667-13.674667 24.234667-19.712l2.24-1.706667a253.994667 253.994667 0 0 1 108.842666-43.733333c0.32 0 0.64-0.064 0.96-0.106667a228.266667 228.266667 0 0 1 13.546667-1.642666l3.584-0.298667c1.642667-0.149333 3.328-0.256 4.992-0.362667l0.64-0.021333 6.933333-0.32h0.426667l0.725333-0.021333-0.874666 0.021333L736 128z m-129.536 114.282667l-49.237333 49.216 0.042666 0.042666-20.650666 20.650667c-5.973333 4.202667-13.056 6.933333-20.736 7.637333L512 320a42.453333 42.453333 0 0 1-23.424-6.997333l-1.386667-1.002667-20.458666-20.48 0.021333-0.021333-49.216-49.216a192.725333 192.725333 0 0 0-20.053333-16.021334l-7.082667-4.693333-3.2-1.984-2.218667-1.322667-1.002666-0.597333-3.392-1.898667 1.28 0.682667-2.858667-1.557333-2.816-1.514667 0.981333 0.554667-2.410666-1.258667 1.386666 0.704-2.986666-1.514667-2.944-1.450666 0.384 0.213333-2.24-1.045333 1.770666 0.810666-3.349333-1.557333-3.349333-1.472 0.938666 0.426667-7.424-3.008a191.530667 191.530667 0 0 0-47.061333-11.52l-5.717333-0.576-0.938667-0.085334-0.576-0.042666-0.618667-0.042667 0.426667 0.021333 0.192 0.021334h0.106667l-0.298667-0.021334-0.554667-0.021333-0.64-0.064A194.602667 194.602667 0 0 0 298.666667 192.298667l3.114666 0.192 0.128 0.021333h0.128l-0.256-0.021333-6.4-0.341334L288 192l-5.653333 0.085333C179.072 195.072 96 280 96 384c0 35.904 10.816 67.029333 24.981333 92.330667 9.024 14.506667 20.437333 29.184 34.197334 46.357333l315.584 318.826667c14.72 14.72 26.858667 21.269333 38.378666 22.336L512 864c11.434667-0.170667 23.296-5.589333 37.610667-18.986667l3.626666-3.498666L868.842667 522.666667c13.738667-17.173333 25.152-31.850667 34.176-46.378667 14.165333-25.28 24.981333-56.405333 24.981333-92.309333 0-104-83.072-188.928-186.346667-191.914667L736 192a193.6 193.6 0 0 0-14.762667 0.554667l0.661334-0.042667-1.152 0.085333-0.64 0.042667-0.405334 0.042667 0.170667-0.021334 0.234667-0.021333h0.042666l-0.277333 0.021333-0.362667 0.042667-1.834666 0.149333a193.216 193.216 0 0 0-3.562667 0.384l5.12-0.512 0.277333-0.021333 0.192-0.021333-0.469333 0.042666-6.784 0.725334a191.445333 191.445333 0 0 0-51.84 13.930666l-2.794667 1.216 1.706667-0.789333-3.072 1.386667a189.845333 189.845333 0 0 0-3.114667 1.450666l0.533334-0.213333-2.368 1.109333 1.770666-0.896-3.2 1.6a190.293333 190.293333 0 0 0-3.264 1.685334l1.066667-0.533334-2.816 1.450667-1.664 0.917333-1.28 0.704-2.538667 1.450667 0.448-0.256-0.64 0.362667-0.064 0.042666-0.277333 0.170667-1.514667 0.896-0.746666 0.448-2.56 1.6 0.746666-0.490667-1.344 0.853334-3.882666 2.517333c-8.170667 5.418667-15.936 11.52-23.274667 18.218667z","p-id":"28278"},null,-1),U=[Y],X={class:"meta-text text-ellipsis"},G=["href"],K={class:"meta-text text-ellipsis"};function ee(e,t,n,i,c,r){var l,a,s,u,d,v,b,f,p=Object(o["W"])("lazyload");return Object(o["M"])(),Object(o["m"])("a",{class:"rc-video-item",href:"/video/".concat(n.video.id)},[Object(o["n"])("div",z,[Object(o["n"])("div",N,[Object(o["lb"])(Object(o["n"])("img",null,null,512),[[p,n.video.cover]])])]),Object(o["n"])("div",F,[Object(o["n"])("a",{href:"/video/".concat(n.video.id),class:"detail-title webkit-text-ellipsis"},Object(o["Z"])(n.video.description),9,B),Object(o["n"])("div",Z,[Object(o["n"])("div",D,[null!==(l=n.video)&&void 0!==l&&l.liked?(Object(o["M"])(),Object(o["m"])("svg",W,$)):(Object(o["M"])(),Object(o["m"])("svg",J,U)),Object(o["n"])("span",X,Object(o["Z"])((null===(a=n.video)||void 0===a?void 0:a.count_likes)||0),1)]),null!==(s=n.video)&&void 0!==s&&null!==(u=s.user)&&void 0!==u&&u.id?(Object(o["M"])(),Object(o["m"])("a",{key:0,class:"user",href:"/user/".concat(null===(d=n.video)||void 0===d||null===(v=d.user)||void 0===v?void 0:v.id)},[Object(o["n"])("span",K,Object(o["Z"])(null===(b=n.video)||void 0===b||null===(f=b.user)||void 0===f?void 0:f.name),1)],8,G)):Object(o["l"])("",!0)])])],8,H)}Object(o["N"])();var te={props:{video:{type:Object}},setup:function(e){}};n("79ed");te.render=ee,te.__scopeId="data-v-f8f0b9de";var ne=te;Object(o["P"])("data-v-30411ee1");var oe={class:"video-toolbar"},ie={class:"user-operation"},ce={class:"operation-item"},re=Object(o["n"])("svg",{class:"icon",viewBox:"0 0 1024 1024",version:"1.1"},[Object(o["n"])("path",{d:"M466.88 908.96L113.824 563.296a270.08 270.08 0 0 1 0-387.392c108.8-106.56 284.896-106.56 393.696 0 1.504 1.472 2.976 2.944 4.448 4.48 1.472-1.536 2.944-3.008 4.448-4.48 108.8-106.56 284.896-106.56 393.696 0a269.952 269.952 0 0 1 34.016 347.072l-387.392 385.6a64 64 0 0 1-89.92 0.384z","p-id":"9345"})],-1),le={class:"operation-item hide-xs"},ae=Object(o["n"])("div",{class:"op-button"},[Object(o["n"])("svg",{fill:"#909090",t:"1632905818952",class:"icon",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"39381",width:"90",height:"90"},[Object(o["n"])("path",{d:"M1014.88968 411.786477l-364.412811-400.854093c-14.576512-14.576512-36.441281-14.576512-51.017794 0C584.882562 25.508897 584.882562 32.797153 584.882562 47.373665l0 211.359431c-298.818505 0-583.060498 247.800712-583.060498 546.619217 0 80.170819 36.441281 182.206406 72.882562 218.647687 43.729537-225.935943 269.66548-400.854093 510.177936-400.854093 0 21.864769 0 218.647687 0 218.647687 0 7.288256 0 14.576512 7.288256 29.153025 14.576512 14.576512 43.729537 7.288256 51.017794 0l364.412811-393.565836C1022.177936 462.80427 1022.177936 448.227758 1022.177936 440.939502 1022.177936 433.651246 1022.177936 419.074733 1014.88968 411.786477z","p-id":"39382"})]),Object(o["n"])("span",null,"分享")],-1),se={class:"share-popover"},ue=Object(o["n"])("img",{src:"/img/qqgroup.png",class:"qrcode",alt:"二维码"},null,-1),de={class:"link-wrap"},ve=Object(o["n"])("p",{class:"title"},"扫描左侧二维码可加入QQ群求影视资源、复制播放地址分享给好友一起刷视频",-1),be={class:"link-box"},fe={class:"link-text",id:"link-text"},pe={class:"operation-item download-app"},Oe=Object(o["n"])("svg",{t:"1632899144543",class:"icon",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"16900",width:"90",height:"90"},[Object(o["n"])("path",{d:"M757.76 30.72l-512 0C197.973333 30.72 160.426667 68.266667 160.426667 116.053333l0 791.893333c0 47.786667 37.546667 88.746667 88.746667 88.746667l215.04 0L580.266667 996.693333l177.493333 0c47.786667 0 88.746667-37.546667 88.746667-88.746667L846.506667 116.053333C846.506667 68.266667 808.96 30.72 757.76 30.72zM419.84 92.16l170.666667 0c6.826667 0 13.653333 6.826667 13.653333 13.653333s-6.826667 13.653333-13.653333 13.653333l-170.666667 0c-6.826667 0-13.653333-6.826667-13.653333-13.653333S409.6 92.16 419.84 92.16zM501.76 928.426667c-34.133333 0-61.44-27.306667-61.44-61.44 0-34.133333 27.306667-61.44 61.44-61.44s61.44 27.306667 61.44 61.44C563.2 901.12 535.893333 928.426667 501.76 928.426667z","p-id":"16901"})],-1),he=Object(o["n"])("span",null,"用APP看",-1),je=[Oe,he],me={class:"report-button hide-xs"},ye=Object(o["n"])("svg",{class:"icon",viewBox:"0 0 1045 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},[Object(o["n"])("path",{d:"M557.824 641.194667l17.92-219.818667 1.792-78.848h-87.808l1.792 78.848 17.322667 219.818667h48.981333zM533.333333 793.514667c29.866667 0 54.357333-20.906667 54.357334-51.968S563.2 688.981333 533.333333 688.981333c-29.866667 0-54.357333 21.504-54.357333 52.565334S503.466667 793.514667 533.333333 793.514667z","p-id":"37871"}),Object(o["n"])("path",{d:"M467.989333 116.096L92.309333 795.882667A74.666667 74.666667 0 0 0 157.653333 906.666667h751.36a74.666667 74.666667 0 0 0 65.344-110.784L598.677333 116.096a74.666667 74.666667 0 0 0-130.688 0z m70.506667 26.773333a10.666667 10.666667 0 0 1 4.181333 4.181334l375.68 679.786666a10.666667 10.666667 0 0 1-9.344 15.829334H157.653333a10.666667 10.666667 0 0 1-9.322666-15.829334l375.68-679.786666a10.666667 10.666667 0 0 1 14.485333-4.181334z","p-id":"37872"})],-1),ge=Object(o["n"])("span",null,"举报",-1),ke=[ye,ge];function we(e,t,n,i,c,r){var l=Object(o["V"])("el-popover"),a=Object(o["W"])("auth");return Object(o["M"])(),Object(o["m"])("div",oe,[Object(o["n"])("ul",ie,[Object(o["n"])("li",ce,[Object(o["lb"])(Object(o["n"])("div",{class:Object(o["A"])(["op-button",i.liked&&"active"])},[re,Object(o["n"])("span",null,Object(o["Z"])(i.count_likes||"喜欢"),1)],2),[[a,i.favoriteHandler,"click"]])]),Object(o["n"])("li",le,[Object(o["q"])(l,{placement:"bottom-start","popper-class":"share-popper",trigger:"hover","show-arrow":!1,width:360},{reference:Object(o["kb"])((function(){return[ae]})),default:Object(o["kb"])((function(){return[Object(o["n"])("div",se,[ue,Object(o["n"])("div",de,[ve,Object(o["n"])("div",be,[Object(o["n"])("div",fe,Object(o["Z"])(i.videoLink||"链接出错啦！！！"),1),Object(o["n"])("div",{class:"copy-link",onClick:t[0]||(t[0]=function(){return i.shareVideoLink&&i.shareVideoLink.apply(i,arguments)})},"复制")])])])]})),_:1})]),Object(o["n"])("li",pe,[Object(o["n"])("div",{class:"op-button",onClick:t[1]||(t[1]=function(){return r.downloadApp&&r.downloadApp.apply(r,arguments)})},je)])]),Object(o["lb"])(Object(o["n"])("div",me,ke,512),[[a,r.showReportModal,"click"]])])}Object(o["N"])();var xe=n("1da1"),Me=(n("96cf"),n("99af"),n("2ef0")),Ee=n("4995"),Se=n("e6a9"),Ce=n.n(Se),Te=n("2de2"),_e={props:{post:Object},setup:function(e){var t,n,i,c,r,l,a=Object(o["cb"])(e),s=a.post,u=Object(o["R"])((null===(t=s.value)||void 0===t?void 0:t.liked)||!1),d=Object(o["R"])((null===(n=s.value)||void 0===n?void 0:n.count_likes)||0),v=Object(o["R"])(null!==(i=s.value)&&void 0!==i&&i.id?"#".concat((null===(c=s.value)||void 0===c?void 0:c.description)||"","# https://").concat(Te["m"],"/video/").concat(null===(r=s.value)||void 0===r?void 0:r.id," 点击观看！"):""),b=Object(R["bb"])({id:null===(l=s.value)||void 0===l?void 0:l.id,type:"POST"},{fetchPolicy:"network-only"}),f=b.toggleLike,p=b.onDone,O=b.onError;p((function(e){var t,n=e.data;n&&(u.value=null===n||void 0===n||null===(t=n.toggleLike)||void 0===t?void 0:t.isLiked)})),O((function(){u.value?d.value--:d.value++}));var h=Object(Me["debounce"])((function(){u.value?d.value--:d.value++,u.value=!u.value,f()}),500),j=Ce()(),m=j.toClipboard;function y(){return g.apply(this,arguments)}function g(){return g=Object(xe["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!v.value){e.next=12;break}return e.prev=1,e.next=4,m(v.value);case 4:Object(Ee["a"])({message:"复制成功",type:"success"}),e.next=10;break;case 7:e.prev=7,e.t0=e["catch"](1),Object(Ee["a"])({message:"复制失败",type:"error"});case 10:e.next=13;break;case 12:Object(Ee["a"])({message:"链接出错",type:"error"});case 13:case"end":return e.stop()}}),e,null,[[1,7]])}))),g.apply(this,arguments)}function k(){Object(Ee["a"])({message:"即将上线，敬请期待",type:"info"})}return{liked:u,count_likes:d,favoriteHandler:h,videoLink:v,shareVideoLink:y,watchTogether:k}},methods:{showReportModal:function(){this.$bus.emit("SHOW_REPORT_MODAL",{id:this.post.id,title:"举报视频",type:"posts"})},downloadApp:function(){Te["q"]?(this.$bus.emit("SHOW_BROWSER_OPEN_PROMPT"),window.pwaEventTrack("用APP看","腾讯浏览器")):"IOS"===Te["i"].OS?(this.$bus.emit("SHOW_IOS_PWA_PROMPT"),window.pwaEventTrack("用APP看","iOS浏览器")):(window.open(Te["j"],"_blank"),window.pwaEventTrack("用APP看","安卓浏览器"))}}};n("6dbf"),n("bdd6");_e.render=we,_e.__scopeId="data-v-30411ee1";var Pe=_e;Object(o["P"])("data-v-b5ecee50");var Le={class:"user-info"},Ae={class:"module-start"},Re=["href"],Ve=["src"],qe=["href"],Ie={class:"user-title"},He={class:"user-name webkit-text-ellipsis"},ze={class:"user-meta"},Ne={class:"meta-item"},Fe=Object(o["n"])("span",{class:"meta-name"},"粉丝",-1),Be={class:"meta-count"},Ze={class:"meta-item"},De=Object(o["n"])("span",{class:"meta-name"},"获赞",-1),We={class:"meta-count"},Qe={key:0,class:"button-wrap"};function $e(e,t,n,i,c,r){var l,a,s,u,d,v,b,f=Object(o["V"])("FollowButton");return Object(o["M"])(),Object(o["m"])("div",Le,[Object(o["n"])("div",Ae,[Object(o["n"])("a",{class:"user-avatar",rel:"noopener noreferrer",href:"/user/".concat(null===(l=n.user)||void 0===l?void 0:l.id)},[null!==(a=n.user)&&void 0!==a&&a.avatar?(Object(o["M"])(),Object(o["m"])("img",{key:0,class:"avatar-img",src:null===(s=n.user)||void 0===s?void 0:s.avatar,alt:""},null,8,Ve)):Object(o["l"])("",!0)],8,Re)]),Object(o["n"])("a",{class:"module-detail",rel:"noopener noreferrer",href:"/user/".concat(null===(u=n.user)||void 0===u?void 0:u.id)},[Object(o["n"])("div",Ie,[Object(o["n"])("div",He,[Object(o["n"])("span",null,Object(o["Z"])((null===(d=n.user)||void 0===d?void 0:d.name)||"匿名用户"),1)])]),Object(o["n"])("div",ze,[Object(o["n"])("p",Ne,[Fe,Object(o["n"])("span",Be,Object(o["Z"])((null===(v=n.user)||void 0===v?void 0:v.count_followers)||0),1)]),Object(o["n"])("p",Ze,[De,Object(o["n"])("span",We,Object(o["Z"])((null===(b=n.user)||void 0===b?void 0:b.count_likes)||0),1)])])],8,qe),n.user?(Object(o["M"])(),Object(o["m"])("div",Qe,[Object(o["q"])(f,{user:n.user,size:"small",round:!1},null,8,["user"])])):Object(o["l"])("",!0)])}Object(o["N"])();var Je=n("e292"),Ye={props:{user:Object},components:{FollowButton:Je["default"]}};n("94ca0");Ye.render=$e,Ye.__scopeId="data-v-b5ecee50";var Ue=Ye;Object(o["P"])("data-v-381e7670");var Xe={class:"list-items"};function Ge(e,t,n,i,c,r){var l,a=Object(o["V"])("Skeleton"),s=Object(o["V"])("RCVideoItem");return Object(o["M"])(),Object(o["m"])("div",Xe,[(null===(l=i.posts)||void 0===l?void 0:l.length)<1?(Object(o["M"])(),Object(o["k"])(a,{key:0,type:"recommend-movies",count:4})):(Object(o["M"])(!0),Object(o["m"])(o["b"],{key:1},Object(o["T"])(i.posts,(function(e){return Object(o["M"])(),Object(o["m"])("div",{class:"list-item",key:e.id},[Object(o["q"])(s,{video:e},null,8,["video"])])})),128)),i.loadingMore?(Object(o["M"])(),Object(o["k"])(a,{key:2,type:"recommend-movies",count:1})):i.hasMorePages?(Object(o["M"])(),Object(o["m"])("div",{key:3,class:"loadmore-btn",onClick:t[0]||(t[0]=function(){return i.loadMore&&i.loadMore.apply(i,arguments)})}," 点击加载更多 ")):Object(o["l"])("",!0)])}Object(o["N"])();var Ke=n("d257"),et={props:{collection:{type:Object}},components:{Skeleton:V["a"],RCVideoItem:ne},setup:function(e){var t,n=Object(o["cb"])(e),i=n.collection,c=Object(A["d"])(R["h"],{id:null===(t=i.value)||void 0===t?void 0:t.id,page:1,count:4}),r=c.result,l=c.loading,a=c.error,s=c.fetchMore,u=Object(A["e"])(r,[],(function(e){var t,n;return null===e||void 0===e||null===(t=e.collection)||void 0===t||null===(n=t.posts)||void 0===n?void 0:n.data})),d=Object(A["e"])(r,{},(function(e){var t,n;return null===e||void 0===e||null===(t=e.collection)||void 0===t||null===(n=t.posts)||void 0===n?void 0:n.paginatorInfo})),v=Object(o["R"])(1),b=Object(o["R"])(!0);Object(o["ib"])(d,(function(e,t){v.value=null===e||void 0===e?void 0:e.currentPage,b.value=null===e||void 0===e?void 0:e.hasMorePages}));var f=Object(o["R"])(!1),p=Object(o["i"])((function(){return l.value||f.value||!b.value}));function O(){b.value&&!f.value&&(f.value=!0,s({variables:{page:v.value+1},updateQuery:function(e,t){var n=t.fetchMoreResult;return f.value=!1,n?Object(Ke["c"])(e,n):e}}))}return{loading:l,error:a,disabled:p,loadMore:O,loadingMore:f,hasMorePages:b,collection:i,posts:u}}};n("5989");et.render=Ge,et.__scopeId="data-v-381e7670";var tt=et,nt={name:"VideoDetail",components:{DPlayer:q["a"],CommentModule:I["a"],RCVideoItem:ne,Skeleton:V["a"],AuthorInfo:Ue,VideoToolbar:Pe,CollectionPosts:tt},setup:function(e){var t,n,i=Object(L["c"])(),c=Object(o["R"])(Number(null===(t=i.params)||void 0===t?void 0:t.id)),r=Object(R["eb"])({id:c}),l=r.post,a=r.collections,s=Object(o["R"])(null===(n=a.value)||void 0===n?void 0:n[0]);Object(o["ib"])(i,(function(e,t){var n;c.value=Number(null===(n=e.params)||void 0===n?void 0:n.id)})),Object(o["ib"])(a,(function(e,t){var n;s.value=null===(n=a.value)||void 0===n?void 0:n[0]}));var u=Object(A["d"])(R["r"]),d=u.result,v=Object(A["e"])(d,[],(function(e){var t;return null===e||void 0===e||null===(t=e.fastRecommendPosts)||void 0===t?void 0:t.slice(0,4)}));return{post:l,collection:s,recommendPosts:v}},methods:{toggleCollapse:function(){this.isCollapse=!this.isCollapse}},data:function(){return{isCollapse:!0}}};n("0a3e");nt.render=P,nt.__scopeId="data-v-4ca9afac";t["default"]=nt},bdd6:function(e,t,n){"use strict";n("6899")},bf54:function(e,t,n){},e6a9:function(e,t,n){"use strict";var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var i=o(n("b311"));t.default=function(e){var t=void 0===(null===e||void 0===e?void 0:e.appendToBody)||e.appendToBody;return{toClipboard:function(e,n){return new Promise((function(o,c){var r=document.createElement("button"),l=new i.default(r,{text:function(){return e},action:function(){return"copy"},container:void 0!==n?n:document.body});l.on("success",(function(e){l.destroy(),o(e)})),l.on("error",(function(e){l.destroy(),c(e)})),t&&document.body.appendChild(r),r.click(),t&&document.body.removeChild(r)}))}}}}}]);
//# sourceMappingURL=chunk-a45ca4fe.4833694f.js.map