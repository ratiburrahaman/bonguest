/*! For license information please see main.56a7621922887f85039a.js.LICENSE.txt */
!function(e){function t(t){for(var r,c,s=t[0],a=t[1],u=t[2],l=0,p=[];l<s.length;l++)c=s[l],Object.prototype.hasOwnProperty.call(o,c)&&o[c]&&p.push(o[c][0]),o[c]=0;for(r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r]);for(f&&f(t);p.length;)p.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,s=1;s<n.length;s++){var a=n[s];0!==o[a]&&(r=!1)}r&&(i.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},o={0:0},i=[];function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="";var s=window.webpackJsonp=window.webpackJsonp||[],a=s.push.bind(s);s.push=t,s=s.slice();for(var u=0;u<s.length;u++)t(s[u]);var f=a;i.push([121,1]),n()}({121:function(e,t,n){n(122),e.exports=n(310)},310:function(e,t,n){"use strict";n.r(t);n(308);var r,o={isgameOver:!1,isSoundOn:!0,isMusicOn:!0,speed:8,maxLife:3,tempSpeed:0};function i(e){return e.sys.canvas.width/2}function c(e){return e.sys.canvas.height/2}function s(e){return e.sys.canvas.width}function a(e){return e.sys.canvas.height}function u(e){o.isSoundOn&&e.sound.play("click")}function f(e){r||(r=e.sound.add("bgm"))}function l(e){o.isMusicOn&&r.play()}function p(e){r.stop()}var h=[[[0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0],[1,1,1,1,1,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0]],[[0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,1,1,1,1,5,0,0,0,0],[0,0,0,1,1,1,1,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0]],[[0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,1,0,0,0,0,0,0,0],[0,0,0,1,1,1,0,0,0,0,0,0],[0,0,1,1,1,1,1,0,0,0,0,0],[0,1,1,1,1,1,1,1,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0]],[[0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,1,0,0,0,0,0,0],[0,0,0,0,1,0,1,0,0,0,0,0],[0,0,0,0,0,1,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0]],[[0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,1,1,1,1,1,1,0,0],[0,0,0,1,1,1,1,1,1,1,1,1],[0,0,1,1,0,0,0,0,0,0,1,1],[1,1,1,0,0,0,5,0,0,0,1,1],[1,1,1,0,0,0,0,0,0,0,0,0]],[[0,0,0,1,1,1,1,1,0,0,0,0],[0,0,0,1,1,1,1,1,0,0,0,0],[1,1,1,0,0,0,0,0,0,0,0,0],[1,1,1,0,0,0,0,0,0,0,0,0],[0,0,0,1,1,1,1,1,0,0,0,0],[0,0,0,1,1,1,1,1,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0]]];function y(e){return(y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function d(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function b(e,t){return(b=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function v(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=O(e);if(t){var o=O(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return m(this,n)}}function m(e,t){return!t||"object"!==y(t)&&"function"!=typeof t?g(e):t}function g(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function O(e){return(O=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var S=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&b(e,t)}(c,Phaser.Physics.Arcade.Sprite);var t,n,r,i=v(c);function c(e,t,n){var r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,c),(r=i.call(this,e,t,n,"hearth")).scene.add.existing(g(r)),r.scene.physics.world.enable(g(r)),r.body.allowGravity=!1,r.setImmovable(!0),r.body.setCircle(.5*r.width),r.setDepth(5),r}return t=c,(n=[{key:"preUpdate",value:function(){this.active&&!o.isgameOver&&(this.x+=-o.speed)}}])&&d(t.prototype,n),r&&d(t,r),c}();function w(e){return(w="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function P(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _(e,t){return(_=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function j(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=k(e);if(t){var o=k(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return x(this,n)}}function x(e,t){return!t||"object"!==w(t)&&"function"!=typeof t?R(e):t}function R(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function k(e){return(k=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var E=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_(e,t)}(c,Phaser.Physics.Arcade.Sprite);var t,n,r,i=j(c);function c(e,t,n){var r,o,s,a;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,c),r=i.call(this,e,t,n,"obs-".concat(Phaser.Math.Between(1,4))),o=R(r),a=void 0,(s="isVisited")in o?Object.defineProperty(o,s,{value:a,enumerable:!0,configurable:!0,writable:!0}):o[s]=a,r.scene.add.existing(R(r)),r.scene.physics.world.enable(R(r)),r.body.allowGravity=!1,r.setImmovable(!0),r.body.setSize(.2*r.width,.3*r.height),r.body.setOffset(70,45),r.setDepth(2),r.setOrigin(.5,1),r}return t=c,(n=[{key:"preUpdate",value:function(){o.isgameOver||(this.x+=-o.speed)}}])&&P(t.prototype,n),r&&P(t,r),c}();function T(e){return(T="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function G(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function A(e,t){return(A=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function C(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=M(e);if(t){var o=M(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return B(this,n)}}function B(e,t){return!t||"object"!==T(t)&&"function"!=typeof t?U(e):t}function U(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function M(e){return(M=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var I=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&A(e,t)}(c,Phaser.Physics.Arcade.Sprite);var t,n,r,i=C(c);function c(e,t,n){var r,o,s,a;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,c),r=i.call(this,e,t,n,"shield"),o=U(r),a=void 0,(s="isVisited")in o?Object.defineProperty(o,s,{value:a,enumerable:!0,configurable:!0,writable:!0}):o[s]=a,r.scene.add.existing(U(r)),r.scene.physics.world.enable(U(r)),r.body.allowGravity=!1,r.setImmovable(!0),r.body.setCircle(.5*r.width),r.setDepth(2),r.setOrigin(.5,1),r}return t=c,(n=[{key:"preUpdate",value:function(){this.active&&!o.isgameOver&&(this.x+=-o.speed)}}])&&G(t.prototype,n),r&&G(t,r),c}();function L(e){return(L="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function D(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function V(e,t){return(V=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function H(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=N(e);if(t){var o=N(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return F(this,n)}}function F(e,t){return!t||"object"!==L(t)&&"function"!=typeof t?z(e):t}function z(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function N(e){return(N=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var Y=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&V(e,t)}(c,Phaser.Physics.Arcade.Sprite);var t,n,r,i=H(c);function c(e,t,n){var r,o,s,a;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,c),r=i.call(this,e,t,n,"speed"),o=z(r),a=void 0,(s="isVisited")in o?Object.defineProperty(o,s,{value:a,enumerable:!0,configurable:!0,writable:!0}):o[s]=a,r.scene.add.existing(z(r)),r.scene.physics.world.enable(z(r)),r.body.allowGravity=!1,r.setImmovable(!0),r.body.setSize(.5*r.width,.3*r.height),r.body.setOffset(10,15),r.setDepth(2),r.setOrigin(.5,1),r}return t=c,(n=[{key:"preUpdate",value:function(){this.active&&!o.isgameOver&&(this.x+=-o.speed)}}])&&D(t.prototype,n),r&&D(t,r),c}();function J(e){return(J="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function X(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function K(e,t){return(K=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function W(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=Z(e);if(t){var o=Z(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return q(this,n)}}function q(e,t){return!t||"object"!==J(t)&&"function"!=typeof t?Q(e):t}function Q(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Z(e){return(Z=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var $=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&K(e,t)}(s,Phaser.Physics.Arcade.Sprite);var t,n,r,c=W(s);function s(e,t,n){var r,o,i,a;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,s),r=c.call(this,e,t,n,"vitamin_".concat(Phaser.Math.Between(1,2))),o=Q(r),a=!1,(i="isCollected")in o?Object.defineProperty(o,i,{value:a,enumerable:!0,configurable:!0,writable:!0}):o[i]=a,r.scene.add.existing(Q(r)),r.scene.physics.world.enable(Q(r)),r.body.allowGravity=!1,r.setImmovable(!0),r.setScale(.2),r.body.setSize(.5*r.width),r.setDepth(3),r.scene.tweens.add({targets:Q(r),scale:.21,duration:200,yoyo:!0,repeat:-1}),r}return t=s,(n=[{key:"preUpdate",value:function(){this.active&&!o.isgameOver&&(this.x+=-o.speed)}},{key:"collect",value:function(){var e=this;this.scene.tweens.add({targets:this,x:i(this.scene),y:40,duration:500,onComplete:function(){e.destroy()}})}}])&&X(t.prototype,n),r&&X(t,r),s}();function ee(e){return(ee="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function te(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function ne(e,t){return(ne=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function re(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=ce(e);if(t){var o=ce(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return oe(this,n)}}function oe(e,t){return!t||"object"!==ee(t)&&"function"!=typeof t?ie(e):t}function ie(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function ce(e){return(ce=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function se(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var ae=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&ne(e,t)}(c,Phaser.Physics.Arcade.Sprite);var t,n,r,i=re(c);function c(e,t,n,r,o,a){var u;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,c),se(ie(u=i.call(this,e,s(e)+400,t,"platform_".concat(Phaser.Math.Between(1,2)))),"shield",void 0),se(ie(u),"obstacle",void 0),se(ie(u),"vitaminGroup",void 0),u.scene.add.existing(ie(u)),u.scene.physics.world.enable(ie(u)),u.body.allowGravity=!1,u.setImmovable(!0),u.setScale(.8,1),u.body.setSize(u.width,.5*u.height),u.setDepth(3),u.vitaminGroup=a,u.body.checkCollision.down=!1;var f=Phaser.Math.Between(0,5);if(0==f)u.shield=new I(u.scene,u.x,u.y),n.add(u.shield);else if(1==f)u.obstacle=new E(u.scene,u.x+Phaser.Math.FloatBetween(-80,80),u.y+95),r.add(u.obstacle);else if(2==f){var l=new Y(u.scene,u.x+Phaser.Math.FloatBetween(-80,80),u.y);o.add(l)}else u.addBottle();return u}return t=c,(n=[{key:"preUpdate",value:function(){this.active&&!o.isgameOver&&(this.x+=-o.speed)}},{key:"addBottle",value:function(){for(var e=Phaser.Math.Between(0,5),t=0;t<h[e].length;t++)for(var n=0;n<h[e][t].length;n++)if(1==h[e][t][n]){var r=new $(this.scene,s(this.scene)+100+60*n,100+100*t);this.vitaminGroup.add(r)}}}])&&te(t.prototype,n),r&&te(t,r),c}();function ue(e){return(ue="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function fe(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function le(e,t,n){return(le="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=be(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function pe(e,t){return(pe=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function he(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=be(e);if(t){var o=be(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return ye(this,n)}}function ye(e,t){return!t||"object"!==ue(t)&&"function"!=typeof t?de(e):t}function de(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function be(e){return(be=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function ve(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var me=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&pe(e,t)}(c,Phaser.Physics.Arcade.Sprite);var t,n,r,i=he(c);function c(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,c),ve(de(t=i.call(this,e,250,400,"player_1",0)),"shieldEffect",void 0),ve(de(t),"speedEffect",void 0),ve(de(t),"isShieldEffectActive",void 0),ve(de(t),"isSpeedEffectActive",void 0),ve(de(t),"currentSpeed",o.speed),t.scene.add.existing(de(t)),t.scene.physics.world.enable(de(t)),t.setCollideWorldBounds(!0),t.body.setSize(.5*t.width,.9*t.height),t.body.offset.y=20,t.play("run"),t.setDepth(5),t.setScale(1),t.flipX=!0,t.shieldEffect=t.scene.add.image(t.x,t.y,"shield-effect").setDepth(6).setVisible(t.isShieldEffectActive),t.speedEffect=t.scene.add.image(t.x-10,t.y,"speed").setDepth(4).setVisible(t.isSpeedEffectActive),t}return t=c,(n=[{key:"shieldUpdate",value:function(){this.shieldEffect.setVisible(this.isShieldEffectActive)}},{key:"speedUpdate",value:function(){this.speedEffect.setVisible(this.isSpeedEffectActive),this.isSpeedEffectActive?(o.speed=this.currentSpeed+3,this.anims.stop()):(o.speed=this.currentSpeed,this.play("run"))}},{key:"preUpdate",value:function(e,t){le(be(c.prototype),"preUpdate",this).call(this,e,t),this.shieldEffect.setPosition(this.x,this.y),this.speedEffect.setPosition(this.x-70,this.y),this.isSpeedEffectActive?(this.setVelocityY(0),this.body.allowGravity=!1):this.body.allowGravity=!0}},{key:"fall",value:function(){var e=this;this.anims.stop(),this.angle=90,this.body.enable=!1,this.scene.tweens.add({targets:this,duration:200,alpha:0,repeat:1,yoyo:!0,onComplete:function(){e.revive()}})}},{key:"revive",value:function(){o.maxLife>0&&(this.body.enable=!0,o.isgameOver=!1,this.play("run"),this.angle=0),0==o.maxLife&&this.destroy()}}])&&fe(t.prototype,n),r&&fe(t,r),c}();function ge(e){return(ge="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function Oe(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Se(e,t){return(Se=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function we(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=je(e);if(t){var o=je(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Pe(this,n)}}function Pe(e,t){return!t||"object"!==ge(t)&&"function"!=typeof t?_e(e):t}function _e(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function je(e){return(je=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function xe(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var Re=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Se(e,t)}(f,Phaser.Scene);var t,n,r,u=we(f);function f(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,f),xe(_e(e=u.call(this,{key:"GameScene"})),"bgTile",void 0),xe(_e(e),"player",void 0),xe(_e(e),"platformGroup",void 0),xe(_e(e),"obstacleGroup",void 0),xe(_e(e),"shieldGroup",void 0),xe(_e(e),"speedGroup",void 0),xe(_e(e),"speedUpActiveTime",void 0),xe(_e(e),"ShieldActiveTime",void 0),xe(_e(e),"vitaminGroup",void 0),xe(_e(e),"lifeGroup",void 0),xe(_e(e),"cursors",void 0),e}return t=f,(n=[{key:"init",value:function(){o.tempSpeed=o.speed,this.platformGroup=this.add.group(),this.lifeGroup=this.add.group(),this.obstacleGroup=this.add.group(),this.shieldGroup=this.add.group(),this.speedGroup=this.add.group(),this.vitaminGroup=this.add.group(),this.speedUpActiveTime=300,this.ShieldActiveTime=300,this.cursors=this.input.keyboard.createCursorKeys()}},{key:"create",value:function(){var e=this;this.bgTile=this.add.tileSprite(i(this),c(this),s(this),a(this),"bg").setScale(1),this.physics.world.setBounds(0,0,s(this),a(this),!0,!0,!1,!0);var t,n=[250,400];this.time.addEvent({delay:4e3,callback:function(){var t=n[Phaser.Math.Between(0,1)],r=new ae(e,t,e.shieldGroup,e.obstacleGroup,e.speedGroup,e.vitaminGroup);e.platformGroup.add(r)},repeat:-1}),this.time.addEvent({delay:5e3,callback:function(){var t=new E(e,s(e)+200,a(e)-20);e.obstacleGroup.add(t)},repeat:-1}),(t=this.anims).create({key:"run",frames:t.generateFrameNumbers("player_1",{start:0,end:8}),repeat:-1,frameRate:10}),this.player=new me(this),this.input.on("pointerup",(function(){o.isgameOver||e.player.isSpeedEffectActive?e.player.setVelocityY(0):e.jump()})),this.physics.add.overlap(this.player,this.vitaminGroup,(function(t,n){n.isCollected||(e.events.emit("score"),o.isSoundOn&&e.sound.play("scoreup"),n.collect(),n.isCollected=!0)})),this.physics.add.collider(this.player,this.platformGroup,(function(){})),this.physics.add.overlap(this.player,this.lifeGroup,(function(t,n){o.maxLife++,n.destroy(),e.events.emit("addLife")})),this.physics.add.collider(this.player,this.shieldGroup,(function(t,n){e.player.y<n.y&&!n.isVisited?e.player.isShieldEffectActive||(e.player.isShieldEffectActive=!0,e.player.shieldUpdate()):n.isVisited=!0})),this.physics.add.collider(this.player,this.obstacleGroup,(function(t,n){e.player.y<n.y&&!n.isVisited?e.player.isShieldEffectActive||e.player.isSpeedEffectActive||(n.isVisited=!0,o.maxLife--,e.events.emit("updateLife"),e.player.setVelocityY(0),o.isgameOver=!0,e.player.fall(),e.addNewLife(),n.destroy(),o.isSoundOn&&e.sound.play("oh-no")):n.isVisited=!0})),this.physics.add.collider(this.player,this.speedGroup,(function(t,n){n.isVisited?n.isVisited=!0:e.player.isSpeedEffectActive||(e.player.isSpeedEffectActive=!0,e.player.speedUpdate())}));var r=this.physics.add.image(i(this),a(this)-120,"platform_1").setDepth(20).setScale(2,.2).setAlpha(.01);r.body.allowGravity=!1,r.setImmovable(!0),this.physics.add.collider(this.player,r,(function(){}))}},{key:"update",value:function(){o.isgameOver||(this.bgTile.tilePositionX+=o.speed),this.player&&(this.player.isSpeedEffectActive&&(this.speedUpActiveTime--,this.speedUpActiveTime<0&&(this.player.isSpeedEffectActive=!1,this.player.speedUpdate(),this.speedUpActiveTime=300)),this.player.isShieldEffectActive&&(this.ShieldActiveTime--,this.ShieldActiveTime<0&&(this.player.isShieldEffectActive=!1,this.player.shieldUpdate(),this.ShieldActiveTime=300)),Phaser.Input.Keyboard.JustDown(this.cursors.space)&&this.jump())}},{key:"jump",value:function(){o.isgameOver||this.player.body.touching.down&&(this.player.setVelocityY(-1150),o.isSoundOn&&this.sound.play("jump"))}},{key:"addNewLife",value:function(){var e=new S(this,s(this)+200,Phaser.Math.FloatBetween(120,a(this)-200));this.lifeGroup.add(e)}}])&&Oe(t.prototype,n),r&&Oe(t,r),f}();function ke(e){return(ke="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function Ee(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Te(e,t){return(Te=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function Ge(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=Be(e);if(t){var o=Be(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Ae(this,n)}}function Ae(e,t){return!t||"object"!==ke(t)&&"function"!=typeof t?Ce(e):t}function Ce(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Be(e){return(Be=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function Ue(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var Me=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Te(e,t)}(y,Phaser.Scene);var t,n,r,h=Ge(y);function y(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,y),Ue(Ce(e=h.call(this,"HomeScene")),"settingCotainer",void 0),Ue(Ce(e),"modeContainer",void 0),Ue(Ce(e),"bg",void 0),e}return t=y,(n=[{key:"create",value:function(){var e=this;f(this),l(),console.log(o.isMusicOn),this.bg=this.add.tileSprite(i(this),c(this),s(this),a(this),"bg").setScale(1),this.add.image(i(this),c(this),"title").setScale(.7);var t=this.add.container(i(this),c(this)+150),n=this.add.image(-100,50,"btn-settings").setInteractive().on("pointerup",(function(){u(e),e.tweens.add({targets:e.settingCotainer,scale:1,duration:300})})),r=this.add.image(100,50,"btn-play").setInteractive().on("pointerup",(function(){e.tweens.add({targets:e.modeContainer,scale:1,duration:300})}));t.add([n,r]),this.settingPanel()}},{key:"settingPanel",value:function(){var e=this;this.settingCotainer=this.add.container(i(this),c(this));var t=this.add.image(0,0,"panel-bg"),n=this.add.image(0,-175,"txt-settings"),r=this.add.image(0,230,"home-btn").setInteractive().on("pointerup",(function(){u(e),e.tweens.add({targets:e.settingCotainer,scale:0,duration:300})})),s=this.add.image(-100,-50,"icn-sfx"),a=this.add.sprite(100,-50,"onoff",o.isSoundOn?0:1).setInteractive().on("pointerup",(function(){o.isSoundOn=!o.isSoundOn,a.setFrame(o.isSoundOn?0:1)})),f=this.add.image(-100,70,"icn-music"),h=this.add.sprite(100,70,"onoff",o.isMusicOn?0:1).setInteractive().on("pointerup",(function(){o.isMusicOn=!o.isMusicOn,h.setFrame(o.isMusicOn?0:1),o.isMusicOn?l():p()}));this.settingCotainer.add([t,r,n,s,a,f,h]),this.settingCotainer.setScale(0),this.modePanel()}},{key:"update",value:function(e,t){this.bg.tilePositionX+=5}},{key:"modePanel",value:function(){var e=this;this.modeContainer=this.add.container(i(this),c(this));var t=this.add.image(0,0,"panel-bg"),n=this.add.text(0,-185,"SELECT MODE",{fontFamily:"font",fontSize:"60px",color:"black",stroke:"white",strokeThickness:1}).setOrigin(.5),r=this.add.text(0,-80,"Easy",{fontFamily:"font",fontSize:"60px",stroke:"black",strokeThickness:1}).setOrigin(.5).setInteractive().on("pointerup",(function(){u(e),o.speed=5,e.scene.start("GameScene"),e.scene.start("HUDScnene"),e.scene.bringToTop("HUDScnene")})),s=this.add.text(0,0,"Medium",{fontFamily:"font",fontSize:"60px",stroke:"black",strokeThickness:1}).setOrigin(.5).setInteractive().on("pointerup",(function(){o.speed=8,u(e),e.scene.start("GameScene"),e.scene.start("HUDScnene"),e.scene.bringToTop("HUDScnene")})),a=this.add.text(0,80,"Hard",{fontFamily:"font",fontSize:"60px",stroke:"black",strokeThickness:1}).setOrigin(.5).setInteractive().on("pointerup",(function(){u(e),o.speed=12,e.scene.start("GameScene"),e.scene.start("HUDScnene"),e.scene.bringToTop("HUDScnene")}));this.modeContainer.add([t,n,r,s,a]),this.modeContainer.setScale(0)}}])&&Ee(t.prototype,n),r&&Ee(t,r),y}();function Ie(e){return(Ie="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function Le(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function De(e,t){return(De=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function Ve(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=ze(e);if(t){var o=ze(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return He(this,n)}}function He(e,t){return!t||"object"!==Ie(t)&&"function"!=typeof t?Fe(e):t}function Fe(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function ze(e){return(ze=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function Ne(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var Ye=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&De(e,t)}(h,Phaser.Scene);var t,n,r,u=Ve(h);function h(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,h),Ne(Fe(e=u.call(this,"HUDScnene")),"gameOverContainer",void 0),Ne(Fe(e),"scoreText",void 0),Ne(Fe(e),"finalscoreText",void 0),Ne(Fe(e),"score",void 0),Ne(Fe(e),"lifeArr",void 0),Ne(Fe(e),"bestScore",void 0),Ne(Fe(e),"bestScoreText",void 0),e}return t=h,(n=[{key:"init",value:function(){this.lifeArr=[],this.score=0}},{key:"create",value:function(){var e=this;this.add.image(s(this),40,"logo").setScale(.15).setOrigin(1,.5),localStorage.getItem("best-score")?this.bestScore=parseInt(localStorage.getItem("best-score")):localStorage.setItem("best-score","0"),f(this),l();for(var t=0;t<o.maxLife;t++){var n=this.add.image(40+70*t,40,"hearth").setDepth(15);this.lifeArr.push(n)}this.add.image(i(this)-45,40,"vitamin_2").setScale(.15),this.scoreText=this.add.text(i(this),40,"".concat(this.score),{fontSize:"65px",fontFamily:"font"}).setOrigin(0,.5);var r=this.add.text(i(this),a(this)-5,"Miles:0",{fontSize:"50px",fontFamily:"font"}).setOrigin(.5,1),c=0;this.time.addEvent({delay:100,callback:function(){o.isgameOver||(c+=.01,r.text="Miles: ".concat(c.toPrecision(2)))},repeat:-1});var u=this.scene.get("GameScene");u.events.on("updateLife",(function(){o.maxLife>0&&(e.lifeArr[o.maxLife].visible=!1),0==o.maxLife&&(e.lifeArr[0].visible=!1,o.isSoundOn&&e.sound.play("overSound"),e.showGameOverPanel(),o.isgameOver=!0,o.speed=0)})),u.events.on("addLife",(function(){o.maxLife<4&&(console.log(o.maxLife),e.lifeArr[o.maxLife-1].visible=!0)})),u.events.on("score",(function(){e.score++,e.scoreText.text=""+e.score})),this.addGameOverPanel()}},{key:"addGameOverPanel",value:function(){var e=this;this.gameOverContainer=this.add.container(i(this),c(this)).setScale(0);var t=this.add.rectangle(0,0,s(this),a(this),0,.7),n=this.add.image(0,0,"panel-bg"),r=this.add.image(0,-200,"txt-gameover"),u=this.add.image(-120,-30,"vitamin_1").setScale(.4),f=this.add.image(0,-30,"vitamin_2").setScale(.4),l=this.add.image(120,-30,"vitamin_3").setScale(.4);this.finalscoreText=this.add.text(0,80,"Score: ".concat(this.score),{fontSize:"60px",fontFamily:"font"}).setOrigin(.5),this.bestScoreText=this.add.text(0,140,"Best: ".concat(this.score),{fontSize:"60px",fontFamily:"font"}).setOrigin(.5);var p=this.add.image(290,-30,"store").setAngle(30).setInteractive().on("pointerup",(function(){window.open("https://www.bonnearth.com/","_blank").focus()})),h=this.add.image(375,50,"hand").setScale(.2).setAngle(-30);this.tweens.add({targets:h,alpha:0,duration:500,yoyo:!0,repeat:-1,ease:"Linear"});var y=this.add.image(-100,250,"home-btn").setInteractive().on("pointerup",(function(){o.maxLife=3,o.isgameOver=!1,e.scene.start("HomeScene"),e.scene.stop("GameScene"),e.scene.stop("HUDScnene");var t=e.scene.get("GameScene");t.events.off("updateLife"),t.events.off("score")})),d=this.add.image(150,250,"btn-retry").setInteractive().on("pointerup",(function(){e.scene.start("GameScene"),e.scene.start("HUDScnene"),e.scene.bringToTop("HUDScnene");var t=e.scene.get("GameScene");t.events.off("updateLife"),t.events.off("score"),o.speed=o.tempSpeed,o.maxLife=3,o.isgameOver=!1}));this.gameOverContainer.add([t,n,r,u,f,l,this.finalscoreText,y,d,this.bestScoreText,p,h])}},{key:"showGameOverPanel",value:function(){p(),this.HighScore(),this.bestScoreText.text="Best:"+this.bestScore,this.finalscoreText.text="Score:"+this.score,this.gameOverContainer.visible=!0,this.tweens.add({targets:this.gameOverContainer,scale:1,duration:500})}},{key:"HighScore",value:function(){this.bestScore<this.score&&(this.bestScore=this.score,localStorage.setItem("best-score",this.score.toString()))}}])&&Le(t.prototype,n),r&&Le(t,r),h}();function Je(e){return(Je="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function Xe(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Ke(e,t){return(Ke=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function We(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=Qe(e);if(t){var o=Qe(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return qe(this,n)}}function qe(e,t){return!t||"object"!==Je(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function Qe(e){return(Qe=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var Ze=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Ke(e,t)}(s,Phaser.Scene);var t,n,r,o=We(s);function s(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,s),o.call(this,"LoaderScene")}return t=s,(n=[{key:"preload",value:function(){var e=this.add.text(i(this),c(this)+50,"0%",{fontSize:"30px",color:"white",fontFamily:"font"}).setOrigin(.5);this.load.on("progress",(function(t){e.text="".concat(Math.round(100*t),"%")}),this),this.load.on("complete",(function(){this.scene.start("HomeScene")}),this),this.load.pack("preload","assets/pack.json","preload")}},{key:"create",value:function(){}}])&&Xe(t.prototype,n),r&&Xe(t,r),s}(),$e={type:Phaser.AUTO,parent:"game",backgroundColor:"#000000",width:1280,height:720,scale:{mode:Phaser.Scale.FIT,autoCenter:Phaser.Scale.CENTER_BOTH},physics:{default:"arcade",arcade:{gravity:{y:2200},debug:!1}},scene:[Ze,Ye,Me,Re]};new Phaser.Game($e)}});