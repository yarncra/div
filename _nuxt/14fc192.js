(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{145:function(e,t,n){"use strict";n.r(t);n(14),n(29);t.default={namespaced:!0,state:function(){return{result:null}},actions:{setResult:function(e,data){var t=e.commit,n=0;data.forEach((function(e){n=e.games.reduce((function(e,t){return e+t&&t.bestResult}),0)})),t("SET_RESULT",n)}},mutations:{SET_RESULT:function(e,t){e.result+=t}},getters:{}}},150:function(e,t,n){"use strict";var o={methods:{disableBodyScroll:function(){var e=document.body.getBoundingClientRect().top;document.body.style.top="".concat(e,"px"),document.body.classList.add("fixed")},enableBodyScroll:function(){if(!this.$store.state.modals.length){var e=document.body.getBoundingClientRect().top;document.body.classList.remove("fixed"),document.body.style.top=null,window.scroll(0,-e)}},openModal:function(e){e&&(this.$store.dispatch("openModal",e),this.disableBodyScroll())},closeModal:function(e){e&&(this.$store.dispatch("closeModal",e),this.enableBodyScroll())},closeAllModals:function(){this.$store.dispatch("closeAllModals"),this.enableBodyScroll()}}};n(0).a.mixin(o)},151:function(e,t,n){"use strict";var o=n(0),r=n(233),l=n.n(r);o.a.use(l.a)},152:function(e,t,n){"use strict";var o=n(0),r=n(234),l=n.n(r);o.a.use(l.a)},206:function(e,t,n){var content=n(302);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(43).default)("f904bdae",content,!0,{sourceMap:!1})},208:function(e,t,n){var content=n(308);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(43).default)("0a68e623",content,!0,{sourceMap:!1})},209:function(e,t,n){var content=n(310);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(43).default)("4ddc4dda",content,!0,{sourceMap:!1})},210:function(e,t,n){var content=n(312);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(43).default)("3adf4eca",content,!0,{sourceMap:!1})},211:function(e,t,n){var content=n(314);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(43).default)("09b9f7d6",content,!0,{sourceMap:!1})},236:function(e,t,n){"use strict";n(45),n(31),n(32),n(14),n(54),n(29),n(55);var o=n(23),r=n(51),l={name:"header-component"},c=(n(307),n(22)),header=Object(c.a)(l,(function(){this._self._c;return this._m(0)}),[function(){var e=this._self._c;return e("header",{staticClass:"header-component"},[e("div",[this._v("header")])])}],!1,null,"249bb5ec",null).exports,f={name:"footer-component"},footer=(n(309),Object(c.a)(f,(function(){this._self._c;return this._m(0)}),[function(){var e=this._self._c;return e("footer",{staticClass:"footer-component"},[e("div",[this._v("footer")])])}],!1,null,"0abe08ac",null).exports),d={name:"loader-component"};n(311);function m(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}var x={components:{vHeader:header,vFooter:footer,vLoader:Object(c.a)(d,(function(){return(0,this._self._c)("div",{staticClass:"loader-component"})}),[],!1,null,null,null).exports},computed:function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?m(Object(source),!0).forEach((function(t){Object(o.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):m(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({},Object(r.c)({isLoading:function(e){return e.isLoading}})),watch:{$route:function(){this.closeAllModals()}}},h=x,v=(n(313),Object(c.a)(h,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"flex column j-between",attrs:{id:"app"}},[e.isLoading?t("div",{staticClass:"loader"},[t("vLoader")],1):e._e(),t("vHeader"),t("main",{staticClass:"grow"},[t("nuxt")],1),t("vFooter",{attrs:{id:"footer"}})],1)}),[],!1,null,null,null));t.a=v.exports},238:function(e,t,n){e.exports=n(239)},301:function(e,t,n){"use strict";n(206)},302:function(e,t,n){var o=n(42)((function(i){return i[1]}));o.push([e.i,".page.error{min-height:100vh}",""]),o.locals={},e.exports=o},305:function(e,t,n){var content=n(306);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(43).default)("1de2615c",content,!0,{sourceMap:!1})},306:function(e,t,n){var o=n(42)((function(i){return i[1]}));o.push([e.i,'*{border:none;font-family:inherit;font-size:100%;font-style:inherit;margin:0;padding:0;vertical-align:baseline}*,:after,:before{box-sizing:border-box}body,html{margin:0;padding:0}body{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-moz-font-feature-settings:"liga" on;text-rendering:optimizeLegibility}button{font-family:serif;font-family:initial}img{display:block;max-height:100%;max-width:100%}a{color:inherit;-webkit-text-decoration:none;text-decoration:none}:link img,:visited img,a img{border:0}li{list-style:none}.flex,.inline-flex{display:flex}.flex.center,.inline-flex.center{align-items:center;justify-content:center}.flex.column,.inline-flex.column{flex-direction:column}.flex.j-start,.inline-flex.j-start{justify-content:flex-start}.flex.j-center,.inline-flex.j-center{justify-content:center}.flex.j-between,.inline-flex.j-between{justify-content:space-between}.flex.j-end,.inline-flex.j-end{justify-content:flex-end}.flex.a-start,.inline-flex.a-start{align-items:flex-start}.flex.a-center,.inline-flex.a-center{align-items:center}.flex.a-end,.inline-flex.a-end{align-items:flex-end}.flex .grow,.inline-flex .grow{flex-grow:1}@media (max-width:1366px){.wrapper{padding:0 65px}}@media (min-width:1367px){.wrapper{margin:0 auto;max-width:1366px;padding:0 65px;width:100%}}.fade-enter-active,.fade-leave-active{transition:opacity .5s ease}.fade-enter,.fade-leave-active{opacity:0}.page-enter-active,.page-leave-active{transition:opacity 1s ease}.page-enter,.page-leave-active{opacity:0}body{color:#30f;font-family:"Inter",Arial,sans-serif;font-size:14px;font-weight:400;line-height:17px}body.fixed{left:0;overflow-y:scroll;position:fixed;top:0;width:100%}',""]),o.locals={},e.exports=o},307:function(e,t,n){"use strict";n(208)},308:function(e,t,n){var o=n(42)((function(i){return i[1]}));o.push([e.i,"",""]),o.locals={},e.exports=o},309:function(e,t,n){"use strict";n(209)},310:function(e,t,n){var o=n(42)((function(i){return i[1]}));o.push([e.i,"",""]),o.locals={},e.exports=o},311:function(e,t,n){"use strict";n(210)},312:function(e,t,n){var o=n(42)((function(i){return i[1]}));o.push([e.i,".loader-component{animation:loader 1.1s linear infinite;border:5px solid rgba(51,0,255,.1);border-left-color:#30f;border-radius:50%;height:50px;left:0;top:0;width:50px}@keyframes loader{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}",""]),o.locals={},e.exports=o},313:function(e,t,n){"use strict";n(211)},314:function(e,t,n){var o=n(42)((function(i){return i[1]}));o.push([e.i,"#app{min-height:100vh}#app .loader{align-items:center;display:flex;height:100vh;justify-content:center;left:0;position:fixed;top:0;width:100vw;z-index:1001}",""]),o.locals={},e.exports=o},315:function(e,t,n){"use strict";n.r(t);n(32),n(14);var o=n(145);t.default={modules:{stage:o.default},state:function(){return{modals:[],isLoading:!1}},actions:{openModal:function(e,t){(0,e.commit)("MODAL_ADD",t)},closeModal:function(e,t){(0,e.commit)("MODAL_REMOVE",t)},closeAllModals:function(e){(0,e.commit)("CLEAR_MODALS")}},mutations:{MODAL_ADD:function(e,t){e.modals.push(t)},MODAL_REMOVE:function(e,t){e.modals=e.modals.filter((function(i){return i!==t}))},CLEAR_MODALS:function(e){e.modals=[]},SET_LOADING:function(e,t){e.isLoading=t}},getters:{}}},41:function(e,t,n){"use strict";var o={name:"page-error"},r=(n(301),n(22)),component=Object(r.a)(o,(function(){this._self._c;return this._m(0)}),[function(){var e=this,t=e._self._c;return t("div",{staticClass:"page error wrapper flex column a-center j-center"},[t("h1",[e._v("Что-то пошло не так")]),t("div",[e._v("Страница перенесена, была удалена или не существовала вовсе")])])}],!1,null,null,null);t.a=component.exports}},[[238,3,1,4]]]);