import{d as e,r as t,g as a,a as n,w as l,s as r,b as o,u as s,c as i,e as c,f as u,o as d,h as p,i as f,j as v,k as h,T as m,l as g,m as b,n as y,K as w,_,p as k,q as x,F as C,t as E,v as A,x as S,y as V,z as T,A as I,E as R,B as F,C as P,D as M,G as D,H as z,I as L,J as N,L as O,M as q,N as j,O as W,P as B,Q as $,R as X,S as H,U,V as G,W as Y,X as J,Y as Z,Z as K,$ as Q,a0 as ee,a1 as te,a2 as ae,a3 as ne,a4 as le,a5 as re,a6 as oe,a7 as se}from"./index-e2619ff6.js";import{_ as ie}from"./index.vue_vue_type_script_setup_true_lang-df0133c9.js";var ce=(e=>(e[e.Mobile=0]="Mobile",e[e.Desktop=1]="Desktop",e))(ce||{});const ue="closed";const de=e("app",(()=>{const e=t({opened:a()!==ue,withoutAnimation:!1}),o=n(ce.Desktop);l((()=>e.opened),(e=>function(e){r(e?"opened":ue)}(e)));return{device:o,sidebar:e,toggleSidebar:t=>{e.opened=!e.opened,e.withoutAnimation=t},closeSidebar:t=>{e.opened=!1,e.withoutAnimation=t},toggleDevice:e=>{o.value=e}}})),pe={class:"app-main"},fe={class:"app-scrollbar"},ve=_(o({__name:"AppMain",setup(e){const t=s(),a=i(),n=c((()=>t.path));return(e,t)=>{const l=u("router-view");return d(),p("section",pe,[f("div",fe,[v(l,null,{default:h((({Component:e})=>[v(m,{name:"el-fade-in",mode:"out-in"},{default:h((()=>[(d(),g(w,{include:y(a).cachedViews},[(d(),g(b(e),{key:n.value}))],1032,["include"]))])),_:2},1024)])),_:1})])])}}}),[["__scopeId","data-v-4c4c6790"]]);function he(e,t){void 0===t&&(t={});for(var a=function(e){for(var t=[],a=0;a<e.length;){var n=e[a];if("*"!==n&&"+"!==n&&"?"!==n)if("\\"!==n)if("{"!==n)if("}"!==n)if(":"!==n)if("("!==n)t.push({type:"CHAR",index:a,value:e[a++]});else{var l=1,r="";if("?"===e[s=a+1])throw new TypeError('Pattern cannot start with "?" at '.concat(s));for(;s<e.length;)if("\\"!==e[s]){if(")"===e[s]){if(0==--l){s++;break}}else if("("===e[s]&&(l++,"?"!==e[s+1]))throw new TypeError("Capturing groups are not allowed at ".concat(s));r+=e[s++]}else r+=e[s++]+e[s++];if(l)throw new TypeError("Unbalanced pattern at ".concat(a));if(!r)throw new TypeError("Missing pattern at ".concat(a));t.push({type:"PATTERN",index:a,value:r}),a=s}else{for(var o="",s=a+1;s<e.length;){var i=e.charCodeAt(s);if(!(i>=48&&i<=57||i>=65&&i<=90||i>=97&&i<=122||95===i))break;o+=e[s++]}if(!o)throw new TypeError("Missing parameter name at ".concat(a));t.push({type:"NAME",index:a,value:o}),a=s}else t.push({type:"CLOSE",index:a,value:e[a++]});else t.push({type:"OPEN",index:a,value:e[a++]});else t.push({type:"ESCAPED_CHAR",index:a++,value:e[a++]});else t.push({type:"MODIFIER",index:a,value:e[a++]})}return t.push({type:"END",index:a,value:""}),t}(e),n=t.prefixes,l=void 0===n?"./":n,r="[^".concat(function(e){return e.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}(t.delimiter||"/#?"),"]+?"),o=[],s=0,i=0,c="",u=function(e){if(i<a.length&&a[i].type===e)return a[i++].value},d=function(e){var t=u(e);if(void 0!==t)return t;var n=a[i],l=n.type,r=n.index;throw new TypeError("Unexpected ".concat(l," at ").concat(r,", expected ").concat(e))},p=function(){for(var e,t="";e=u("CHAR")||u("ESCAPED_CHAR");)t+=e;return t};i<a.length;){var f=u("CHAR"),v=u("NAME"),h=u("PATTERN");if(v||h){var m=f||"";-1===l.indexOf(m)&&(c+=m,m=""),c&&(o.push(c),c=""),o.push({name:v||s++,prefix:m,suffix:"",pattern:h||r,modifier:u("MODIFIER")||""})}else{var g=f||u("ESCAPED_CHAR");if(g)c+=g;else if(c&&(o.push(c),c=""),u("OPEN")){m=p();var b=u("NAME")||"",y=u("PATTERN")||"",w=p();d("CLOSE"),o.push({name:b||(y?s++:""),pattern:b&&!y?r:y,prefix:m,suffix:w,modifier:u("MODIFIER")||""})}else d("END")}}return o}function me(e,t){return function(e,t){void 0===t&&(t={});var a=function(e){return e&&e.sensitive?"":"i"}(t),n=t.encode,l=void 0===n?function(e){return e}:n,r=t.validate,o=void 0===r||r,s=e.map((function(e){if("object"==typeof e)return new RegExp("^(?:".concat(e.pattern,")$"),a)}));return function(t){for(var a="",n=0;n<e.length;n++){var r=e[n];if("string"!=typeof r){var i=t?t[r.name]:void 0,c="?"===r.modifier||"*"===r.modifier,u="*"===r.modifier||"+"===r.modifier;if(Array.isArray(i)){if(!u)throw new TypeError('Expected "'.concat(r.name,'" to not repeat, but got an array'));if(0===i.length){if(c)continue;throw new TypeError('Expected "'.concat(r.name,'" to not be empty'))}for(var d=0;d<i.length;d++){var p=l(i[d],r);if(o&&!s[n].test(p))throw new TypeError('Expected all "'.concat(r.name,'" to match "').concat(r.pattern,'", but got "').concat(p,'"'));a+=r.prefix+p+r.suffix}}else if("string"!=typeof i&&"number"!=typeof i){if(!c){var f=u?"an array":"a string";throw new TypeError('Expected "'.concat(r.name,'" to be ').concat(f))}}else{p=l(String(i),r);if(o&&!s[n].test(p))throw new TypeError('Expected "'.concat(r.name,'" to match "').concat(r.pattern,'", but got "').concat(p,'"'));a+=r.prefix+p+r.suffix}}else a+=r}return a}}(he(e,t),t)}const ge={key:0,class:"no-redirect"},be=["onClick"],ye=_(o({__name:"index",setup(e){const t=s(),a=k(),r=n([]),o=()=>{r.value=t.matched.filter((e=>{var t,a;return(null==(t=e.meta)?void 0:t.title)&&!1!==(null==(a=e.meta)?void 0:a.breadcrumb)}))},i=e=>{const{redirect:n,path:l}=e;n?a.push(n):a.push((e=>me(e)(t.params))(l))};return l((()=>t.path),(e=>{e.startsWith("/redirect/")||o()})),o(),(e,t)=>{const a=u("el-breadcrumb-item"),n=u("el-breadcrumb");return d(),g(n,{class:"app-breadcrumb"},{default:h((()=>[(d(!0),p(C,null,x(r.value,((e,t)=>(d(),g(a,{key:e.path},{default:h((()=>["noRedirect"===e.redirect||t===r.value.length-1?(d(),p("span",ge,E(e.meta.title),1)):(d(),p("a",{key:1,onClick:A((t=>i(e)),["prevent"])},E(e.meta.title),9,be))])),_:2},1024)))),128))])),_:1})}}}),[["__scopeId","data-v-1640e2e5"]]),we=_(o({__name:"index",props:{isActive:{type:Boolean,default:!1}},emits:["toggleClick"],setup(e,{emit:t}){const a=e,n=()=>{t("toggleClick")};return(e,t)=>{const l=u("el-icon");return d(),p("div",{onClick:n},[v(l,{size:20,class:"icon"},{default:h((()=>[a.isActive?(d(),g(y(S),{key:0})):(d(),g(y(V),{key:1}))])),_:1})])}}}),[["__scopeId","data-v-8a8975e8"]]),_e=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]],ke=(()=>{if("undefined"==typeof document)return!1;const e=_e[0],t={};for(const a of _e){if((null==a?void 0:a[1])in document){for(const[n,l]of a.entries())t[e[n]]=l;return t}}return!1})(),xe={change:ke.fullscreenchange,error:ke.fullscreenerror};let Ce={request:(e=document.documentElement,t)=>new Promise(((a,n)=>{const l=()=>{Ce.off("change",l),a()};Ce.on("change",l);const r=e[ke.requestFullscreen](t);r instanceof Promise&&r.then(l).catch(n)})),exit:()=>new Promise(((e,t)=>{if(!Ce.isFullscreen)return void e();const a=()=>{Ce.off("change",a),e()};Ce.on("change",a);const n=document[ke.exitFullscreen]();n instanceof Promise&&n.then(a).catch(t)})),toggle:(e,t)=>Ce.isFullscreen?Ce.exit():Ce.request(e,t),onchange(e){Ce.on("change",e)},onerror(e){Ce.on("error",e)},on(e,t){const a=xe[e];a&&document.addEventListener(a,t,!1)},off(e,t){const a=xe[e];a&&document.removeEventListener(a,t,!1)},raw:ke};Object.defineProperties(Ce,{isFullscreen:{get:()=>Boolean(document[ke.fullscreenElement])},element:{enumerable:!0,get:()=>document[ke.fullscreenElement]??void 0},isEnabled:{enumerable:!0,get:()=>Boolean(document[ke.fullscreenEnabled])}}),ke||(Ce={isEnabled:!1});const Ee=Ce,Ae=_(o({__name:"index",props:{element:{default:"html"},openTips:{default:"全屏"},exitTips:{default:"退出全屏"},content:{type:Boolean,default:!1}},setup(e){const t=e,a=n(!1),l=c((()=>a.value?t.exitTips:t.openTips)),r=c((()=>a.value?"fullscreen-exit":"fullscreen")),o=()=>{const e=document.querySelector(t.element)||void 0;Ee.isEnabled?Ee.toggle(e):R.warning("您的浏览器无法工作")},s=()=>{a.value=Ee.isFullscreen};T((e=>{Ee.on("change",s),e((()=>{Ee.isEnabled&&Ee.off("change",s)}))}));const i=n(!1),f=c((()=>i.value?"内容区复原":"内容区放大")),m=c((()=>i.value?"fullscreen-exit":"fullscreen")),b=()=>{document.body.className=i.value?"":"content-large",i.value=!i.value};return(e,t)=>{const n=u("SvgIcon"),s=u("el-tooltip"),i=u("el-dropdown-item"),c=u("el-dropdown-menu"),y=u("el-dropdown");return d(),p("div",null,[e.content?(d(),g(y,{key:1},{dropdown:h((()=>[v(c,null,{default:h((()=>[v(i,{onClick:b},{default:h((()=>[I(E(f.value),1)])),_:1}),v(i,{onClick:o,disabled:a.value},{default:h((()=>[I("内容区全屏")])),_:1},8,["disabled"])])),_:1})])),default:h((()=>[v(n,{name:m.value},null,8,["name"])])),_:1})):(d(),g(s,{key:0,effect:"dark",content:l.value,placement:"bottom"},{default:h((()=>[v(n,{name:r.value,onClick:o},null,8,["name"])])),_:1},8,["content"]))])}}}),[["__scopeId","data-v-9e7c36e4"]]),Se={class:"card-header"},Ve={class:"card-title"},Te={class:"card-time"},Ie={key:0,class:"card-avatar"},Re=["src"],Fe={class:"card-body"},Pe=_(o({__name:"NotifyList",props:{list:{}},setup(e){const t=e;return(e,a)=>{const n=u("el-empty"),l=u("el-tag"),r=u("el-card");return 0===t.list.length?(d(),g(n,{key:0})):(d(!0),p(C,{key:1},x(t.list,((e,t)=>(d(),g(r,{key:t,shadow:"never",class:"card-container"},{header:h((()=>[f("div",Se,[f("div",null,[f("span",null,[f("span",Ve,E(e.title),1),e.extra?(d(),g(l,{key:0,type:e.status,effect:"plain",size:"small"},{default:h((()=>[I(E(e.extra),1)])),_:2},1032,["type"])):F("",!0)]),f("div",Te,E(e.datetime),1)]),e.avatar?(d(),p("div",Ie,[f("img",{src:e.avatar,width:"34"},null,8,Re)])):F("",!0)])])),default:h((()=>[f("div",Fe,E(e.description??"No Data"),1)])),_:2},1024)))),128))}}}),[["__scopeId","data-v-137655f9"]]),Me=[{avatar:"https://gw.alipayobjects.com/zos/rmsportal/OKJXDXrmkNshAMvwtvhu.png",title:"V3 Admin Vite 上线啦",datetime:"半年前",description:"一个免费开源的中后台管理系统基础解决方案，基于 Vue3、TypeScript、Element Plus、Pinia 和 Vite 等主流技术"},{avatar:"https://gw.alipayobjects.com/zos/rmsportal/OKJXDXrmkNshAMvwtvhu.png",title:"V3 Admin 上线啦",datetime:"一年前",description:"一个中后台管理系统基础解决方案，基于 Vue3、TypeScript、Element Plus 和 Pinia"}],De=[{avatar:"https://gw.alipayobjects.com/zos/rmsportal/ThXAXghbEsBCCSDihZxY.png",title:"来自楚门的世界",description:"如果再也不能见到你，祝你早安、午安和晚安",datetime:"1998-06-05"},{avatar:"https://gw.alipayobjects.com/zos/rmsportal/ThXAXghbEsBCCSDihZxY.png",title:"来自大话西游",description:"如果非要在这份爱上加上一个期限，我希望是一万年",datetime:"1995-02-04"},{avatar:"https://gw.alipayobjects.com/zos/rmsportal/ThXAXghbEsBCCSDihZxY.png",title:"来自龙猫",description:"心存善意，定能途遇天使",datetime:"1988-04-16"}],ze=[{title:"任务名称",description:"这家伙很懒，什么都没留下",extra:"未开始",status:"info"},{title:"任务名称",description:"这家伙很懒，什么都没留下",extra:"进行中",status:""},{title:"任务名称",description:"这家伙很懒，什么都没留下",extra:"已超时",status:"danger"}],Le={class:"notify"},Ne={class:"notify-history"},Oe=_(o({__name:"index",setup(e){const t=c((()=>l.value.reduce(((e,t)=>e+t.list.length),0))),a=n("通知"),l=n([{name:"通知",type:"primary",list:Me},{name:"消息",type:"danger",list:De},{name:"待办",type:"warning",list:ze}]),r=()=>{R.success(`跳转到${a.value}历史页面`)};return(e,n)=>{const o=u("el-icon"),s=u("el-tooltip"),i=u("el-badge"),c=u("el-scrollbar"),m=u("el-tab-pane"),b=u("el-tabs"),w=u("el-button"),_=u("el-popover");return d(),p("div",Le,[v(_,{placement:"bottom",width:350,trigger:"click"},{reference:h((()=>[v(i,{value:t.value,max:99,hidden:0===t.value},{default:h((()=>[v(s,{effect:"dark",content:"消息通知",placement:"bottom"},{default:h((()=>[v(o,{size:20},{default:h((()=>[v(y(P))])),_:1})])),_:1})])),_:1},8,["value","hidden"])])),default:h((()=>[v(b,{modelValue:a.value,"onUpdate:modelValue":n[0]||(n[0]=e=>a.value=e),class:"demo-tabs",stretch:""},{default:h((()=>[(d(!0),p(C,null,x(l.value,((e,t)=>(d(),g(m,{name:e.name,key:t},{label:h((()=>[I(E(e.name)+" ",1),v(i,{value:e.list.length,max:99,type:e.type},null,8,["value","type"])])),default:h((()=>[v(c,{height:"400px"},{default:h((()=>[v(Pe,{list:e.list},null,8,["list"])])),_:2},1024)])),_:2},1032,["name"])))),128))])),_:1},8,["modelValue"]),f("div",Ne,[v(w,{link:"",onClick:r},{default:h((()=>[I("查看"+E(a.value)+"历史",1)])),_:1})])])),_:1})])}}}),[["__scopeId","data-v-50089150"]]),qe={class:"navigation-bar"},je={class:"right-menu"},We={class:"right-menu-avatar"},Be={target:"_blank",href:"https://juejin.cn/post/7089377403717287972"},$e={target:"_blank",href:"https://github.com/un-pany/v3-admin-vite"},Xe={target:"_blank",href:"https://gitee.com/un-pany/v3-admin-vite"},He=(e=>(N("data-v-0862bad7"),e=e(),O(),e))((()=>f("span",{style:{display:"block"}},"退出登录",-1))),Ue=_(o({__name:"index",setup(e){const t=k(),a=de(),n=M(),l=D(),{sidebar:r}=z(a),{showNotify:o,showThemeSwitch:s,showScreenfull:i}=z(n),c=()=>{a.toggleSidebar(!1)},m=()=>{l.logout(),t.push("/login")};return(e,t)=>{const a=u("el-avatar"),n=u("el-dropdown-item"),b=u("el-dropdown-menu"),w=u("el-dropdown");return d(),p("div",qe,[v(we,{"is-active":y(r).opened,class:"hamburger",onToggleClick:c},null,8,["is-active"]),v(ye,{class:"breadcrumb"}),f("div",je,[y(i)?(d(),g(Ae,{key:0,class:"right-menu-item"})):F("",!0),y(s)?(d(),g(ie,{key:1,class:"right-menu-item"})):F("",!0),y(o)?(d(),g(Oe,{key:2,class:"right-menu-item"})):F("",!0),v(w,{class:"right-menu-item"},{dropdown:h((()=>[v(b,null,{default:h((()=>[f("a",Be,[v(n,null,{default:h((()=>[I("中文文档")])),_:1})]),f("a",$e,[v(n,null,{default:h((()=>[I("GitHub")])),_:1})]),f("a",Xe,[v(n,null,{default:h((()=>[I("Gitee")])),_:1})]),v(n,{divided:"",onClick:m},{default:h((()=>[He])),_:1})])),_:1})])),default:h((()=>[f("div",We,[v(a,{icon:y(L),size:30},null,8,["icon"]),f("span",null,E(y(l).username),1)])])),_:1})])])}}}),[["__scopeId","data-v-0862bad7"]]),Ge={class:"setting-container"},Ye=(e=>(N("data-v-d440daba"),e=e(),O(),e))((()=>f("h4",null,"系统布局配置",-1))),Je={class:"setting-name"},Ze=_(o({__name:"index",setup(e){const t=M(),{showTagsView:a,showSidebarLogo:n,fixedHeader:l,showNotify:r,showThemeSwitch:o,showScreenfull:s,cacheTagsView:i,showGreyMode:c,showColorWeakness:m}=z(t),g={"显示标签栏":a,"显示侧边栏 Logo":n,"固定 Header":l,"显示消息通知":r,"显示切换主题按钮":o,"显示全屏按钮":s,"是否缓存标签栏":i,"显示灰色模式":c,"显示色弱模式":m},b=()=>{j(),location.reload()};return(e,t)=>{const a=u("el-switch"),n=u("el-button");return d(),p("div",Ge,[Ye,(d(),p(C,null,x(g,((e,t,n)=>f("div",{class:"setting-item",key:n},[f("span",Je,E(t),1),v(a,{modelValue:e.value,"onUpdate:modelValue":t=>e.value=t},null,8,["modelValue","onUpdate:modelValue"])]))),64)),v(n,{type:"danger",icon:y(q),onClick:b},{default:h((()=>[I("重 置")])),_:1},8,["icon"])])}}}),[["__scopeId","data-v-d440daba"]]),Ke=e=>/^(https?:|mailto:|tel:)/.test(e),Qe=["href"],et=o({__name:"SidebarItemLink",props:{to:{}},setup(e){const t=e;return(e,a)=>{const n=u("router-link");return y(Ke)(t.to)?(d(),p("a",{key:0,href:t.to,target:"_blank",rel:"noopener"},[W(e.$slots,"default")],8,Qe)):(d(),g(n,{key:1,to:t.to},{default:h((()=>[W(e.$slots,"default")])),_:3},8,["to"]))}}});function tt(e){if("string"!=typeof e)throw new TypeError("Path must be a string. Received "+JSON.stringify(e))}function at(e,t){for(var a,n="",l=0,r=-1,o=0,s=0;s<=e.length;++s){if(s<e.length)a=e.charCodeAt(s);else{if(47===a)break;a=47}if(47===a){if(r===s-1||1===o);else if(r!==s-1&&2===o){if(n.length<2||2!==l||46!==n.charCodeAt(n.length-1)||46!==n.charCodeAt(n.length-2))if(n.length>2){var i=n.lastIndexOf("/");if(i!==n.length-1){-1===i?(n="",l=0):l=(n=n.slice(0,i)).length-1-n.lastIndexOf("/"),r=s,o=0;continue}}else if(2===n.length||1===n.length){n="",l=0,r=s,o=0;continue}t&&(n.length>0?n+="/..":n="..",l=2)}else n.length>0?n+="/"+e.slice(r+1,s):n=e.slice(r+1,s),l=s-r-1;r=s,o=0}else 46===a&&-1!==o?++o:o=-1}return n}var nt={resolve:function(){for(var e,t="",a=!1,n=arguments.length-1;n>=-1&&!a;n--){var l;n>=0?l=arguments[n]:(void 0===e&&(e=process.cwd()),l=e),tt(l),0!==l.length&&(t=l+"/"+t,a=47===l.charCodeAt(0))}return t=at(t,!a),a?t.length>0?"/"+t:"/":t.length>0?t:"."},normalize:function(e){if(tt(e),0===e.length)return".";var t=47===e.charCodeAt(0),a=47===e.charCodeAt(e.length-1);return 0!==(e=at(e,!t)).length||t||(e="."),e.length>0&&a&&(e+="/"),t?"/"+e:e},isAbsolute:function(e){return tt(e),e.length>0&&47===e.charCodeAt(0)},join:function(){if(0===arguments.length)return".";for(var e,t=0;t<arguments.length;++t){var a=arguments[t];tt(a),a.length>0&&(void 0===e?e=a:e+="/"+a)}return void 0===e?".":nt.normalize(e)},relative:function(e,t){if(tt(e),tt(t),e===t)return"";if((e=nt.resolve(e))===(t=nt.resolve(t)))return"";for(var a=1;a<e.length&&47===e.charCodeAt(a);++a);for(var n=e.length,l=n-a,r=1;r<t.length&&47===t.charCodeAt(r);++r);for(var o=t.length-r,s=l<o?l:o,i=-1,c=0;c<=s;++c){if(c===s){if(o>s){if(47===t.charCodeAt(r+c))return t.slice(r+c+1);if(0===c)return t.slice(r+c)}else l>s&&(47===e.charCodeAt(a+c)?i=c:0===c&&(i=0));break}var u=e.charCodeAt(a+c);if(u!==t.charCodeAt(r+c))break;47===u&&(i=c)}var d="";for(c=a+i+1;c<=n;++c)c!==n&&47!==e.charCodeAt(c)||(0===d.length?d+="..":d+="/..");return d.length>0?d+t.slice(r+i):(r+=i,47===t.charCodeAt(r)&&++r,t.slice(r))},_makeLong:function(e){return e},dirname:function(e){if(tt(e),0===e.length)return".";for(var t=e.charCodeAt(0),a=47===t,n=-1,l=!0,r=e.length-1;r>=1;--r)if(47===(t=e.charCodeAt(r))){if(!l){n=r;break}}else l=!1;return-1===n?a?"/":".":a&&1===n?"//":e.slice(0,n)},basename:function(e,t){if(void 0!==t&&"string"!=typeof t)throw new TypeError('"ext" argument must be a string');tt(e);var a,n=0,l=-1,r=!0;if(void 0!==t&&t.length>0&&t.length<=e.length){if(t.length===e.length&&t===e)return"";var o=t.length-1,s=-1;for(a=e.length-1;a>=0;--a){var i=e.charCodeAt(a);if(47===i){if(!r){n=a+1;break}}else-1===s&&(r=!1,s=a+1),o>=0&&(i===t.charCodeAt(o)?-1==--o&&(l=a):(o=-1,l=s))}return n===l?l=s:-1===l&&(l=e.length),e.slice(n,l)}for(a=e.length-1;a>=0;--a)if(47===e.charCodeAt(a)){if(!r){n=a+1;break}}else-1===l&&(r=!1,l=a+1);return-1===l?"":e.slice(n,l)},extname:function(e){tt(e);for(var t=-1,a=0,n=-1,l=!0,r=0,o=e.length-1;o>=0;--o){var s=e.charCodeAt(o);if(47!==s)-1===n&&(l=!1,n=o+1),46===s?-1===t?t=o:1!==r&&(r=1):-1!==t&&(r=-1);else if(!l){a=o+1;break}}return-1===t||-1===n||0===r||1===r&&t===n-1&&t===a+1?"":e.slice(t,n)},format:function(e){if(null===e||"object"!=typeof e)throw new TypeError('The "pathObject" argument must be of type Object. Received type '+typeof e);return function(e,t){var a=t.dir||t.root,n=t.base||(t.name||"")+(t.ext||"");return a?a===t.root?a+n:a+e+n:n}("/",e)},parse:function(e){tt(e);var t={root:"",dir:"",base:"",ext:"",name:""};if(0===e.length)return t;var a,n=e.charCodeAt(0),l=47===n;l?(t.root="/",a=1):a=0;for(var r=-1,o=0,s=-1,i=!0,c=e.length-1,u=0;c>=a;--c)if(47!==(n=e.charCodeAt(c)))-1===s&&(i=!1,s=c+1),46===n?-1===r?r=c:1!==u&&(u=1):-1!==r&&(u=-1);else if(!i){o=c+1;break}return-1===r||-1===s||0===u||1===u&&r===s-1&&r===o+1?-1!==s&&(t.base=t.name=0===o&&l?e.slice(1,s):e.slice(o,s)):(0===o&&l?(t.name=e.slice(1,r),t.base=e.slice(1,s)):(t.name=e.slice(o,r),t.base=e.slice(o,s)),t.ext=e.slice(r,s)),o>0?t.dir=e.slice(0,o-1):l&&(t.dir="/"),t},sep:"/",delimiter:":",win32:null,posix:null};nt.posix=nt;const lt=B(nt),rt={key:2},ot=_(o({__name:"SidebarItem",props:{item:{},isCollapse:{type:Boolean,default:!1},isFirstLevel:{type:Boolean,default:!0},basePath:{default:""}},setup(e){const t=e,a=c((()=>{var e;return null==(e=t.item.meta)?void 0:e.alwaysShow})),n=c((()=>{var e;return(null==(e=t.item.children)?void 0:e.filter((e=>{var t;return!(null==(t=e.meta)?void 0:t.hidden)})))??[]})),l=c((()=>n.value.length)),r=c((()=>{const e=l.value;switch(!0){case e>1:return null;case 1===e:return n.value[0];default:return{...t.item,path:""}}})),o=e=>{switch(!0){case Ke(e):return e;case Ke(t.basePath):return t.basePath;default:return lt.resolve(t.basePath,e)}};return(e,n)=>{var l;const s=u("SvgIcon"),i=u("el-menu-item"),c=u("sidebar-item",!0),f=u("el-sub-menu");return(null==(l=t.item.meta)?void 0:l.hidden)?F("",!0):(d(),p("div",{key:0,class:X({"simple-mode":t.isCollapse,"first-level":t.isFirstLevel})},[a.value||!r.value||r.value.children?(d(),g(f,{key:1,index:o(t.item.path),teleported:""},{title:h((()=>{var e,a,n;return[(null==(e=t.item.meta)?void 0:e.svgIcon)?(d(),g(s,{key:0,name:t.item.meta.svgIcon},null,8,["name"])):(null==(a=t.item.meta)?void 0:a.elIcon)?(d(),g(b(t.item.meta.elIcon),{key:1,class:"el-icon"})):F("",!0),(null==(n=t.item.meta)?void 0:n.title)?(d(),p("span",rt,E(t.item.meta.title),1)):F("",!0)]})),default:h((()=>[t.item.children?(d(!0),p(C,{key:0},x(t.item.children,(e=>(d(),g(c,{key:e.path,item:e,"is-collapse":t.isCollapse,"is-first-level":!1,"base-path":o(e.path)},null,8,["item","is-collapse","base-path"])))),128)):F("",!0)])),_:1},8,["index"])):(d(),p(C,{key:0},[r.value.meta?(d(),g(et,{key:0,to:o(r.value.path)},{default:h((()=>[v(i,{index:o(r.value.path)},$({default:h((()=>[r.value.meta.svgIcon?(d(),g(s,{key:0,name:r.value.meta.svgIcon},null,8,["name"])):r.value.meta.elIcon?(d(),g(b(r.value.meta.elIcon),{key:1,class:"el-icon"})):F("",!0)])),_:2},[r.value.meta.title?{name:"title",fn:h((()=>[I(E(r.value.meta.title),1)])),key:"0"}:void 0]),1032,["index"])])),_:1},8,["to"])):F("",!0)],64))],2))}}}),[["__scopeId","data-v-b86ded10"]]),st=e=>(N("data-v-93e36fe2"),e=e(),O(),e),it=st((()=>f("img",{src:"/v3-admin-vite/static/logo-cc70e06e.png",class:"sidebar-logo"},null,-1))),ct=st((()=>f("img",{src:"/v3-admin-vite/static/logo-text-1-b6b0364d.png",class:"sidebar-logo-text"},null,-1))),ut=_(o({__name:"SidebarLogo",props:{collapse:{type:Boolean,default:!0}},setup(e){const t=e;return(e,a)=>{const n=u("router-link");return d(),p("div",{class:X(["sidebar-logo-container",{collapse:t.collapse}])},[v(m,{name:"sidebar-logo-fade"},{default:h((()=>[t.collapse?(d(),g(n,{key:"collapse",to:"/"},{default:h((()=>[it])),_:1})):(d(),g(n,{key:"expand",to:"/"},{default:h((()=>[ct])),_:1}))])),_:1})],2)}}}),[["__scopeId","data-v-93e36fe2"]]),dt=e=>{let t="";try{t=getComputedStyle(document.documentElement).getPropertyValue(e)}catch(a){console.error(a)}return t},pt=_(o({__name:"index",setup(e){const t=dt("--v3-sidebar-menu-bg-color"),a=dt("--v3-sidebar-menu-text-color"),n=dt("--v3-sidebar-menu-active-text-color"),l=s(),r=de(),o=H(),i=M(),{showSidebarLogo:f}=z(i),m=c((()=>{const{meta:{activeMenu:e},path:t}=l;return e||t})),b=c((()=>!r.sidebar.opened));return(e,l)=>{const r=u("el-menu"),s=u("el-scrollbar");return d(),p("div",{class:X({"has-logo":y(f)})},[y(f)?(d(),g(ut,{key:0,collapse:b.value},null,8,["collapse"])):F("",!0),v(s,{"wrap-class":"scrollbar-wrapper"},{default:h((()=>[v(r,{"default-active":m.value,collapse:b.value,"background-color":y(t),"text-color":y(a),"active-text-color":y(n),"unique-opened":!0,"collapse-transition":!1,mode:"vertical"},{default:h((()=>[(d(!0),p(C,null,x(y(o).routes,(e=>(d(),g(ot,{key:e.path,item:e,"base-path":e.path,"is-collapse":b.value},null,8,["item","base-path","is-collapse"])))),128))])),_:1},8,["default-active","collapse","background-color","text-color","active-text-color"])])),_:1})],2)}}}),[["__scopeId","data-v-d9e3263d"]]),ft={class:"scroll-container"},vt=_(o({__name:"ScrollPane",props:{tagRefs:{}},setup(e){const t=e,a=s(),r=M(),o=n(),i=n();let c=0;const m=({scrollLeft:e})=>{c=e},b=({deltaY:e})=>{/^-/.test(e.toString())?_("left"):_("right")},w=()=>{const e=i.value.clientWidth,t=o.value.wrapRef.clientWidth;return{scrollbarContentRefWidth:e,scrollbarRefWidth:t,lastDistance:e-t-c}},_=(e,t=200)=>{let a=0;const{scrollbarContentRefWidth:n,scrollbarRefWidth:l,lastDistance:r}=w();l>n||(a="left"===e?Math.max(0,c-t):Math.min(c+t,c+r),o.value.setScrollLeft(a))},k=()=>{const e=t.tagRefs;for(let t=0;t<e.length;t++)if(a.path===e[t].$props.to.path){const a=e[t].$el,n=a.offsetWidth,l=a.offsetLeft,{scrollbarRefWidth:r}=w();if(l<c){return void _("left",c-l)}const o=r+c-n;if(l>o){return void _("right",l-o)}}};return l(a,(()=>{U(k)}),{deep:!0}),(e,t)=>{const a=u("el-icon");return d(),p("div",ft,[v(a,{class:"arrow left",onClick:t[0]||(t[0]=e=>_("left"))},{default:h((()=>[v(y(G))])),_:1}),v(y(Y),{ref_key:"scrollbarRef",ref:o,onWheelPassive:b,onScroll:m},{default:h((()=>[f("div",{ref_key:"scrollbarContentRef",ref:i,class:"scrollbar-content"},[W(e.$slots,"default",{},void 0,!0)],512)])),_:3},512),v(a,{class:"arrow right",onClick:t[1]||(t[1]=e=>_("right"))},{default:h((()=>[v(y(J))])),_:1}),y(r).showScreenfull?(d(),g(Ae,{key:0,element:".app-main",content:!0,class:"screenfull"})):F("",!0)])}}}),[["__scopeId","data-v-d8d9300b"]]),ht={class:"tags-view-container"},mt=_(o({__name:"index",setup(e){const t=Z(),a=k(),r=s(),o=i(),c=H(),m=n([]),b=n(!1),w=n(0),_=n(0),S=n({});let V=[];const T=e=>e.path===r.path,R=e=>{var t;return null==(t=e.meta)?void 0:t.affix},P=(e,t="/")=>{const a=[];return e.forEach((e=>{if(R(e)){const n=lt.resolve(t,e.path);a.push({fullPath:n,path:n,name:e.name,meta:{...e.meta}})}if(e.children){const t=P(e.children,e.path);a.push(...t)}})),a},M=()=>{r.name&&(o.addVisitedView(r),o.addCachedView(r))},D=e=>{o.delVisitedView(e),o.delCachedView(e),T(e)&&L(o.visitedViews,e)},z=()=>{const e=S.value.fullPath;e!==r.path&&void 0!==e&&a.push(e),o.delOthersVisitedViews(S.value),o.delOthersCachedViews(S.value)},L=(e,t)=>{const n=e.slice(-1)[0],l=null==n?void 0:n.fullPath;void 0!==l?a.push(l):"Dashboard"===t.name?a.push({path:"/redirect"+t.path,query:t.query}):a.push("/")},N=()=>{b.value=!1};return l(r,(()=>{M()}),{deep:!0}),l(b,(e=>{e?document.body.addEventListener("click",N):document.body.removeEventListener("click",N)})),K((()=>{(()=>{V=P(c.routes);for(const e of V)e.name&&o.addVisitedView(e)})(),M()})),(e,n)=>{const l=u("el-icon");return d(),p("div",ht,[v(vt,{class:"tags-view-wrapper","tag-refs":m.value},{default:h((()=>[(d(!0),p(C,null,x(y(o).visitedViews,(e=>(d(),g(y(ae),{ref_for:!0,ref_key:"tagRefs",ref:m,key:e.path,class:X([{active:T(e)},"tags-view-item"]),to:{path:e.path,query:e.query},onMouseup:A((t=>!R(e)&&D(e)),["middle"]),onContextmenu:A((a=>((e,a)=>{const n=t.proxy.$el.getBoundingClientRect().left,l=t.proxy.$el.offsetWidth-105,r=a.clientX-n+15;_.value=r>l?l:r,w.value=a.clientY,b.value=!0,S.value=e})(e,a)),["prevent"])},{default:h((()=>{var t;return[I(E(null==(t=e.meta)?void 0:t.title)+" ",1),R(e)?F("",!0):(d(),g(l,{key:0,size:12,onClick:A((t=>D(e)),["prevent","stop"])},{default:h((()=>[v(y(ne))])),_:2},1032,["onClick"]))]})),_:2},1032,["class","to","onMouseup","onContextmenu"])))),128))])),_:1},8,["tag-refs"]),Q(f("ul",{class:"contextmenu",style:te({left:_.value+"px",top:w.value+"px"})},[f("li",{onClick:n[0]||(n[0]=e=>{return t=S.value,o.delCachedView(t),void a.replace({path:"/redirect"+t.path,query:t.query});var t})},"刷新"),R(S.value)?F("",!0):(d(),p("li",{key:0,onClick:n[1]||(n[1]=e=>D(S.value))},"关闭")),f("li",{onClick:z},"关闭其它"),f("li",{onClick:n[2]||(n[2]=e=>{return t=S.value,o.delAllVisitedViews(),o.delAllCachedViews(),void(V.some((e=>e.path===r.path))||L(o.visitedViews,t));var t})},"关闭所有")],4),[[ee,b.value]])])}}}),[["__scopeId","data-v-8ee403be"]]),gt=_(o({__name:"index",props:{buttonTop:{default:350}},setup(e){const t=e;le((e=>({"2a48727e":a})));const a=t.buttonTop+"px",l=n(!1);return(e,t)=>{const a=u("el-icon"),n=u("el-drawer");return d(),p(C,null,[f("div",{class:"handle-button",onClick:t[0]||(t[0]=e=>l.value=!0)},[v(a,{size:24},{default:h((()=>[v(y(re))])),_:1})]),v(n,{modelValue:l.value,"onUpdate:modelValue":t[1]||(t[1]=e=>l.value=e),size:"300px","with-header":!1},{default:h((()=>[W(e.$slots,"default",{},void 0,!0)])),_:3},8,["modelValue"])],64)}}}),[["__scopeId","data-v-e2a71424"]]),bt=_(o({__name:"index",setup(e){const t=de(),a=M(),{showGreyMode:n,showColorWeakness:r,showSettings:o,showTagsView:i,fixedHeader:u}=z(a);(()=>{const e=s(),t=de(),a=()=>document.body.getBoundingClientRect().width-1<992,n=()=>{if(!document.hidden){const e=a();t.toggleDevice(e?ce.Mobile:ce.Desktop),e&&t.closeSidebar(!0)}};l((()=>e.name),(()=>{t.device===ce.Mobile&&t.sidebar.opened&&t.closeSidebar(!1)})),oe((()=>{window.addEventListener("resize",n)})),K((()=>{a()&&(t.toggleDevice(ce.Mobile),t.closeSidebar(!0))})),se((()=>{window.removeEventListener("resize",n)}))})();const m=c((()=>({hideSidebar:!t.sidebar.opened,openSidebar:t.sidebar.opened,withoutAnimation:t.sidebar.withoutAnimation,mobile:t.device===ce.Mobile,showGreyMode:n.value,showColorWeakness:r.value}))),b=()=>{t.closeSidebar(!1)};return(e,t)=>(d(),p("div",{class:X([m.value,"app-wrapper"])},[m.value.mobile&&m.value.openSidebar?(d(),p("div",{key:0,class:"drawer-bg",onClick:b})):F("",!0),v(y(pt),{class:"sidebar-container"}),f("div",{class:X([{hasTagsView:y(i)},"main-container"])},[f("div",{class:X({"fixed-header":y(u)})},[v(y(Ue)),Q(v(y(mt),null,null,512),[[ee,y(i)]])],2),v(y(ve)),y(o)?(d(),g(y(gt),{key:0},{default:h((()=>[v(y(Ze))])),_:1})):F("",!0)],2)],2))}}),[["__scopeId","data-v-fb120e55"]]);export{bt as default};
