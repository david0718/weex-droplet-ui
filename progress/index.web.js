// { "framework": "Vue" }

!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports["npm/weex-droplet-ui/example/progress/index"]=t():e["npm/weex-droplet-ui/example/progress/index"]=t()}(this,function(){return function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};return t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/",t(t.s=213)}({0:function(e,t){e.exports=function(e,t,n,r,o){var i,s=e=e||{},a=typeof e.default;"object"!==a&&"function"!==a||(i=e,s=e.default);var u="function"==typeof s?s.options:s;t&&(u.render=t.render,u.staticRenderFns=t.staticRenderFns),r&&(u._scopeId=r);var l;if(o?(l=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),n&&n.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(o)},u._ssrRegister=l):n&&(l=n),l){var c=u.functional,f=c?u.render:u.beforeCreate;c?u.render=function(e,t){return l.call(t),f(e,t)}:u.beforeCreate=f?[].concat(f,l):[l]}return{esModule:i,exports:s,options:u}}},1:function(e,t,n){"use strict";function r(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var i=o(r);return[n].concat(r.sources.map(function(e){return"/*# sourceURL="+r.sourceRoot+e+" */"})).concat([i]).join("\n")}return[n].join("\n")}function o(e){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e))))+" */"}e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var n=r(t,e);return t[2]?"@media "+t[2]+"{"+n+"}":n}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(r[i]=!0)}for(o=0;o<e.length;o++){var s=e[o];"number"==typeof s[0]&&r[s[0]]||(n&&!s[2]?s[2]=n:n&&(s[2]="("+s[2]+") and ("+n+")"),t.push(s))}},t}},10:function(e,t,n){"use strict";!function(){Promise.prototype.finally||Object.defineProperty(Promise.prototype,"finally",{configurable:!0,writable:!0,value:function(e){var t=this.constructor;return this.then(function(n){return t.resolve(e()).then(function(){return n})},function(n){return t.resolve(e()).then(function(){throw n})})}})}()},12:function(e,t,n){t=e.exports=n(1)(void 0),t.push([e.i,".wx-button{background-color:#4676ff;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.wx-text{color:#fff;font-size:.42667rem}",""])},14:function(e,t,n){function r(e){n(18)}var o=n(0)(n(8),n(16),r,null,null);e.exports=o.exports},16:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"wx-button weex-ct",style:e._px2rem(e.buttonStyles,75),attrs:{"data-evt-click":""},on:{weex$tap:function(t){return t.stopPropagation(),e.handleClick(t)}},nativeOn:{weex$tap:function(t){return t.stopPropagation(),e.handleClick(t)}}},[n("p",{staticClass:"wx-text weex-el weex-text",style:e._processExclusiveStyle(e.textStyles,75,"text"),attrs:{}},[e._t("default",null,{})],2)])},staticRenderFns:[]}},165:function(e,t,n){function r(e){n(279)}var o=n(0)(n(190),n(254),r,"data-v-42519091",null);e.exports=o.exports},18:function(e,t,n){var r=n(12);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);n(2)("579ed206",r,!0)},190:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(22),i=r(o),s=n(7),a=r(s);t.default={data:function(){return{}},components:{WxProgress:i.default,WxButton:a.default},methods:{}}},2:function(e,t,n){function r(e){for(var t=0;t<e.length;t++){var n=e[t],r=c[n.id];if(r){r.refs++;for(var o=0;o<r.parts.length;o++)r.parts[o](n.parts[o]);for(;o<n.parts.length;o++)r.parts.push(i(n.parts[o]));r.parts.length>n.parts.length&&(r.parts.length=n.parts.length)}else{for(var s=[],o=0;o<n.parts.length;o++)s.push(i(n.parts[o]));c[n.id]={id:n.id,refs:1,parts:s}}}}function o(){var e=document.createElement("style");return e.type="text/css",f.appendChild(e),e}function i(e){var t,n,r=document.querySelector('style[data-vue-ssr-id~="'+e.id+'"]');if(r){if(h)return g;r.parentNode.removeChild(r)}if(v){var i=p++;r=d||(d=o()),t=s.bind(null,r,i,!1),n=s.bind(null,r,i,!0)}else r=o(),t=a.bind(null,r),n=function(){r.parentNode.removeChild(r)};return t(e),function(r){if(r){if(r.css===e.css&&r.media===e.media&&r.sourceMap===e.sourceMap)return;t(e=r)}else n()}}function s(e,t,n,r){var o=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=b(t,o);else{var i=document.createTextNode(o),s=e.childNodes;s[t]&&e.removeChild(s[t]),s.length?e.insertBefore(i,s[t]):e.appendChild(i)}}function a(e,t){var n=t.css,r=t.media,o=t.sourceMap;if(r&&e.setAttribute("media",r),o&&(n+="\n/*# sourceURL="+o.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */"),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}var u="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!u)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var l=n(6),c={},f=u&&(document.head||document.getElementsByTagName("head")[0]),d=null,p=0,h=!1,g=function(){},v="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());e.exports=function(e,t,n){h=n;var o=l(e,t);return r(o),function(t){for(var n=[],i=0;i<o.length;i++){var s=o[i],a=c[s.id];a.refs--,n.push(a)}t?(o=l(e,t),r(o)):o=[];for(var i=0;i<n.length;i++){var a=n[i];if(0===a.refs){for(var u=0;u<a.parts.length;u++)a.parts[u]();delete c[a.id]}}}};var b=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},213:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(165),o=function(e){return e&&e.__esModule?e:{default:e}}(r);o.default.el="#root",t.default=new Vue(o.default)},22:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(35);Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r(o).default}})},229:function(e,t,n){t=e.exports=n(1)(void 0),t.push([e.i,".progress[data-v-42519091]{margin-top:.8rem}",""])},254:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("wx-progress",{staticClass:"progress",attrs:{outerStyle:{"background-color":"#f5f5f5"},innerStyle:{"background-color":"#f5222d","border-top-right-radius":"40px","border-bottom-right-radius":"40px"},animation:!0,percent:100}}),e._v(" "),n("wx-progress",{staticClass:"progress",attrs:{outerStyle:{"background-color":"#f5f5f5"},innerStyle:{"background-color":"#1890ff","border-top-right-radius":"40px","border-bottom-right-radius":"40px"},animation:!0,percent:90}}),e._v(" "),n("wx-progress",{staticClass:"progress",attrs:{animation:!0,percent:80}}),e._v(" "),n("wx-progress",{staticClass:"progress",attrs:{animation:!0,percent:70}}),e._v(" "),n("wx-progress",{staticClass:"progress",attrs:{animation:!0,percent:60}})],1)},staticRenderFns:[]}},26:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=weex.requireModule("animation");t.default={props:{percent:{type:Number,default:0},width:{type:String,default:"750px"},height:{type:String,default:"40px"},animation:{type:Boolean,default:!0},innerStyle:{type:Object,default:function(){return{}}},outerStyle:{type:Object,default:function(){return{}}}},data:function(){return{progress:"",_outerStyle:{},_innerStyle:{}}},created:function(){this.initStyle(),this.progress=this.getProgress(),this.animation||this.defaultProgress(this.progress)},mounted:function(){this.animation&&this.animationProgress(this.progress)},methods:{initStyle:function(){var e={width:this.width,height:this.height};this._outerStyle=Object.assign({},this.outerStyle,e),e.left="-"+this.width,this._innerStyle=Object.assign({},this.innerStyle,e)},getProgress:function(){return Number(this._outerStyle.width.replace("px",""))*(this.percent/100)+"px"},defaultProgress:function(e){this._innerStyle.width=e,this._innerStyle.left="0px"},animationProgress:function(e){var t=this.$refs.progressBar;r.transition(t,{styles:{transform:"translateX("+e+")",transformOrigin:"center center"},duration:1e3,timingFunction:"ease-out",needLayout:!1,delay:0})}},watch:{percent:function(){this.animationProgress(this.getProgress())}}}},279:function(e,t,n){var r=n(229);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);n(2)("5bd9bc0e",r,!0)},3:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=weex.config.env.deviceWidth,o=weex.config.env.deviceHeight,i=weex.config.env.platform.toLowerCase(),s=(weex.config.env.appName,{data:function(){return{$env:{isWeb:"web"===i,isAndroid:"android"===i,isIos:"ios"===i}}},methods:{getPageHeight:function(){return"android"===i?750/r*o:o},preventDefault:function(e){e.preventDefault&&e.preventDefault(),e.stopPropagation&&e.stopPropagation()}}});t.default=s},30:function(e,t,n){t=e.exports=n(1)(void 0),t.push([e.i,".wx-progress[data-v-131acc96]{background-color:#1890ff;position:relative;overflow:hidden}.progress-bar[data-v-131acc96]{background-color:#52c41a;position:absolute;top:0;z-index:10}",""])},35:function(e,t,n){function r(e){n(42)}var o=n(0)(n(26),n(38),r,"data-v-131acc96",null);e.exports=o.exports},38:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"wx-progress weex-ct",style:e._px2rem(e._outerStyle,75),attrs:{}},[n("p",{ref:"progressBar",staticClass:"progress-bar weex-el weex-text",style:e._processExclusiveStyle(e._innerStyle,75,"text"),attrs:{}})])},staticRenderFns:[]}},42:function(e,t,n){var r=n(30);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);n(2)("b8c7ae5a",r,!0)},6:function(e,t,n){"use strict";e.exports=function(e,t){for(var n=[],r={},o=0;o<t.length;o++){var i=t[o],s=i[0],a=i[1],u=i[2],l=i[3],c={id:e+":"+o,css:a,media:u,sourceMap:l};r[s]?r[s].parts.push(c):n.push(r[s]={id:s,parts:[c]})}return n}},7:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(14);Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r(o).default}})},8:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n(10);var r=n(3),o=function(e){return e&&e.__esModule?e:{default:e}}(r);t.default={mixins:[o.default],props:{width:{type:String,default:"670px"},height:{type:String,default:"90px"},borderRadius:{type:String,default:"12px"},disabled:{type:Boolean,default:!1},disableOnPromise:{type:Function},styles:{type:Object,default:function(){return{}}},disabledBgColor:{type:String,default:"rgba(0, 0, 0, 0.1)"},textColor:{type:String,default:"#ffffff"},textFontSize:{type:String,default:"32px"}},data:function(){return{buttonStyles:{},textStyles:{},promiseDisabled:!1,defualtBgColor:"#4676FF"}},created:function(){this.promiseDisabled=this.disabled,this.setStyle()},watch:{disabled:function(){this.btnStyle(this.disabled)}},methods:{setStyle:function(){var e={height:this.height,width:this.width,"border-radius":this.borderRadius,"background-color":this.defualtBgColor},t=Object.assign({},e,this.styles);this.buttonStyles=t,this.defualtBgColor=this.buttonStyles["background-color"],this.disabled&&(this.buttonStyles["background-color"]=this.disabledBgColor),this.textStyles={color:this.textColor,fontSize:this.textFontSize}},handleClick:function(e){if(this.preventDefault(e),!this.disabled&&!this.promiseDisabled)if(this.disableOnPromise){var t=this.disableOnPromise();this.disablePromise(t)}else this.$emit("wxClick",e)},disablePromise:function(e){var t=this;this.btnStyle(!0),e.finally(function(){t.btnStyle(!1)})},btnStyle:function(e){this.promiseDisabled=e,this.buttonStyles["background-color"]=e?this.disabledBgColor:this.defualtBgColor}}}}})});
//# sourceMappingURL=index.web.js.map