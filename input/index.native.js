// { "framework": "Vue" }

!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports["npm/weex-droplet-ui/example/input/index"]=e():t["npm/weex-droplet-ui/example/input/index"]=e()}(this,function(){return function(t){function e(o){if(n[o])return n[o].exports;var i=n[o]={i:o,l:!1,exports:{}};return t[o].call(i.exports,i,i.exports,e),i.l=!0,i.exports}var n={};return e.m=t,e.c=n,e.i=function(t){return t},e.d=function(t,n,o){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:o})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/",e(e.s=155)}({0:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=weex.config.env.deviceWidth,i=weex.config.env.deviceHeight,r=weex.config.env.platform.toLowerCase(),s=(weex.config.env.appName,{data:function(){return{$env:{isWeb:"web"===r,isAndroid:"android"===r,isIos:"ios"===r}}},methods:{getPageHeight:function(){return"android"===r?750/o*i:i},preventDefault:function(t){t.preventDefault&&t.preventDefault(),t.stopPropagation&&t.stopPropagation()}}});e.default=s},1:function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var i=n(7);Object.defineProperty(e,"default",{enumerable:!0,get:function(){return o(i).default}})},10:function(t,e){t.exports={"icon-font":{fontFamily:"dropletUiIconfont",color:"#666666",fontSize:"32"}}},12:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("text",{staticClass:["icon-font"],style:t.iconStyle},[t._v(t._s(t.Icon[t.name]))])},staticRenderFns:[]}},132:function(t,e,n){var o,i,r=[];r.push(n(207)),o=n(180);var s=n(230);i=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(i=o=o.default),"function"==typeof i&&(i=i.options),i.render=s.render,i.staticRenderFns=s.staticRenderFns,i._scopeId="data-v-95ec9a5a",i.style=i.style||{},r.forEach(function(t){for(var e in t)i.style[e]=t[e]}),"function"==typeof __register_static_styles__&&__register_static_styles__(i._scopeId,r),t.exports=o},14:function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var i=n(19);Object.defineProperty(e,"default",{enumerable:!0,get:function(){return o(i).default}})},155:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(132),i=function(t){return t&&t.__esModule?t:{default:t}}(o);i.default.el="#root",e.default=new Vue(i.default)},180:function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var i=n(14),r=o(i),s=n(1),u=o(s);e.default={data:function(){return{}},components:{WxInput:r.default,WxIcon:u.default}}},19:function(t,e,n){var o,i,r=[];r.push(n(28)),o=n(23);var s=n(32);i=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(i=o=o.default),"function"==typeof i&&(i=i.options),i.render=s.render,i.staticRenderFns=s.staticRenderFns,i._scopeId="data-v-3f2a0d24",i.style=i.style||{},r.forEach(function(t){for(var e in t)i.style[e]=t[e]}),"function"==typeof __register_static_styles__&&__register_static_styles__(i._scopeId,r),t.exports=o},207:function(t,e){t.exports={demo:{marginTop:"52",marginLeft:"40",marginRight:"40"},icon:{fontSize:"44",color:"#DEDEDE",width:"100",height:"100",textAlign:"center",lineHeight:"100"}}},23:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(0),i=function(t){return t&&t.__esModule?t:{default:t}}(o);weex.requireModule("modal");e.default={mixins:[i.default],props:{type:{type:String,default:"text"},icon:{type:String},tail:{type:String},placeholder:{type:String},value:{type:String},disabled:{type:Boolean,default:!1},autofocus:{type:Boolean,default:!1},maxlength:{type:String},iconStyle:{type:Object},tailStyle:{type:Object},width:{type:String},bgColor:{type:String,default:"#f8f8f8"}},data:function(){return{style:{width:this.width,"background-color":this.bgColor},inputValue:""}},methods:{onblur:function(t){this.preventDefault(t),this.$emit("wxBlur",this.inputValue)},oninput:function(t){this.preventDefault(t),this.inputValue=t.value,this.$emit("input",t.value),this.$emit("wxInput",this.inputValue)},onfocus:function(t){this.preventDefault(t),this.$emit("wxFocus",this.inputValue)}}}},230:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("wx-input",{staticClass:["demo"],attrs:{placeholder:"请输入手机号"}},[n("wx-icon",{staticClass:["icon"],attrs:{slot:"left",name:"search"},slot:"left"})],1),n("wx-input",{staticClass:["demo"],attrs:{width:"500px",type:"password",placeholder:"请输入密码"}},[n("wx-icon",{staticClass:["icon"],attrs:{slot:"left",name:"search"},slot:"left"})],1)],1)},staticRenderFns:[]}},28:function(t,e){t.exports={"wx-input":{display:"flex",width:"670",height:"100",flexDirection:"row"},"wx-input-icon":{width:"100",alignItems:"center",justifyContent:"center"},input:{flex:1}}},32:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:["wx-input"],style:t.style},[t.icon?n("div",{staticClass:["wx-input-icon"]},[n("image",{style:t.iconStyle,attrs:{src:t.icon}})]):t._e(),t._t("left"),n("input",{staticClass:["input"],style:{"background-color":t.bgColor},attrs:{type:t.type,placeholder:t.placeholder,value:t.value,disabled:t.disabled,autofocus:t.autofocus,maxlength:t.maxlength},on:{input:t.oninput,blur:t.onblur,focus:t.onfocus}}),t.tail?n("div",{staticClass:["wx-input-icon"]},[n("image",{style:t.tailStyle,attrs:{src:t.tail}})]):t._e()],2)},staticRenderFns:[]}},5:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={roundclose:"",success:"",search:"",enter:"",back:""}},7:function(t,e,n){var o,i,r=[];r.push(n(10)),o=n(9);var s=n(12);i=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(i=o=o.default),"function"==typeof i&&(i=i.options),i.render=s.render,i.staticRenderFns=s.staticRenderFns,i._scopeId="data-v-6666ac2b",i.style=i.style||{},r.forEach(function(t){for(var e in t)i.style[e]=t[e]}),"function"==typeof __register_static_styles__&&__register_static_styles__(i._scopeId,r),t.exports=o},9:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(5),i=function(t){return t&&t.__esModule?t:{default:t}}(o),r=weex.requireModule("dom");e.default={props:{name:{type:String,default:"success"},styles:{type:Object,default:function(){return{}}}},data:function(){return{iconStyle:{},Icon:i.default}},beforeCreate:function(){r.addRule("fontFace",{fontFamily:"dropletUiIconfont",src:"url('https://at.alicdn.com/t/font_534309_4czzlr17zdw2vs4i.ttf')"})},created:function(){this.setStyle()},methods:{setStyle:function(){this.iconStyle=Object.assign({},this.styles)}}}}})});
//# sourceMappingURL=index.native.js.map