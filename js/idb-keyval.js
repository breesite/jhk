// prettier-ignore
// idb-keyval@6.1.0

!function(n){var t={};function e(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return n[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}e.m=n,e.c=t,e.d=function(n,t,r){e.o(n,t)||Object.defineProperty(n,t,{enumerable:!0,get:r})},e.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},e.t=function(n,t){if(1&t&&(n=e(n)),8&t)return n;if(4&t&&"object"==typeof n&&n&&n.__esModule)return n;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:n}),2&t&&"string"!=typeof n)for(var o in n)e.d(r,o,function(t){return n[t]}.bind(null,o));return r},e.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return e.d(t,"a",t),t},e.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},e.p="/",e(e.s=2)}({"+lRy":function(n,t){},2:function(n,t,e){e("ZlCI"),e("pyCd"),e("o8Fr"),e("varN"),e("ZE6U"),e("aIiO"),e("iL6w"),e("L4uY"),e("VlFf"),e("Fdeq"),e("G/NM"),e("pKBE"),e("4/J1"),e("W7tJ"),e("B0po"),e("9nDE"),e("Wtrm"),e("TiY7"),e("+lRy"),e("eGRQ"),n.exports=e("s+SA")},"4/J1":function(n,t){},"9nDE":function(n,t){},B0po:function(n,t){},Fdeq:function(n,t){},"G/NM":function(n,t){},L4uY:function(n,t){},TiY7:function(n,t){},VlFf:function(n,t){},W7tJ:function(n,t){},Wtrm:function(n,t){},ZE6U:function(n,t){},ZlCI:function(n,t,e){(function(n){function t(n){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(n)}!function(){var e,r="object"==(void 0===n?"undefined":t(n))&&n&&n.Object===Object&&n,o="object"==("undefined"==typeof self?"undefined":t(self))&&self&&self.Object===Object&&self;function u(n){return new Promise((function(t,e){n.oncomplete=n.onsuccess=function(){return t(n.result)},n.onabort=n.onerror=function(){return e(n.error)}}))}function i(n,t){var e,r=(!navigator.userAgentData&&/Safari\//.test(navigator.userAgent)&&!/Chrom(e|ium)\//.test(navigator.userAgent)&&indexedDB.databases?new Promise((function(n){var t=function(){return indexedDB.databases().finally(n)};e=setInterval(t,100),t()})).finally((function(){return clearInterval(e)})):Promise.resolve()).then((function(){var e=indexedDB.open(n);return e.onupgradeneeded=function(){return e.result.createObjectStore(t)},u(e)}));return function(n,e){return r.then((function(r){return e(r.transaction(t,n).objectStore(t))}))}}function c(){return e=e||i("keyval-store","keyval")}function f(n,t){return n("readonly",(function(n){return n.openCursor().onsuccess=function(){this.result&&(t(this.result),this.result.continue())},u(n.transaction)}))}(r||o||Function("return this")()).idbKeyval={clear:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c();return n("readwrite",(function(n){return n.clear(),u(n.transaction)}))},createStore:i,del:function(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:c();return t("readwrite",(function(t){return t.delete(n),u(t.transaction)}))},delMany:function(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:c();return t("readwrite",(function(t){return n.forEach((function(n){return t.delete(n)})),u(t.transaction)}))},entries:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c(),t=[];return f(n,(function(n){return t.push([n.key,n.value])})).then((function(){return t}))},get:function(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:c();return t("readonly",(function(t){return u(t.get(n))}))},getMany:function(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:c();return t("readonly",(function(t){return Promise.all(n.map((function(n){return u(t.get(n))})))}))},keys:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c(),t=[];return f(n,(function(n){return t.push(n.key)})).then((function(){return t}))},promisifyRequest:u,set:function(n,t){var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:c();return e("readwrite",(function(e){return e.put(t,n),u(e.transaction)}))},setMany:function(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:c();return t("readwrite",(function(t){return n.forEach((function(n){return t.put(n[1],n[0])})),u(t.transaction)}))},update:function(n,t){var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:c();return e("readwrite",(function(e){return new Promise((function(r,o){e.get(n).onsuccess=function(){try{e.put(t(this.result),n),r(u(e.transaction))}catch(n){o(n)}}}))}))},values:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c(),t=[];return f(n,(function(n){return t.push(n.value)})).then((function(){return t}))}}}()}).call(this,e("yLpj"))},aIiO:function(n,t){},eGRQ:function(n,t){},iL6w:function(n,t){},o8Fr:function(n,t){},pKBE:function(n,t){},pyCd:function(n,t){},"s+SA":function(n,t){},varN:function(n,t){},yLpj:function(n,t){var e;e=function(){return this}();try{e=e||new Function("return this")()}catch(n){"object"==typeof window&&(e=window)}n.exports=e}});
