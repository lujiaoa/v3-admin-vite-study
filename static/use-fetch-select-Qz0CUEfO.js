import{r as c,d as S,l as V,ag as r,m as i,p as _,U as m,O as b,F as E,a7 as k,u as a,B as f,q as d,M as B,K as C}from"./vue-wOuPBSxb.js";function w(s){const{api:l}=s,t=c(!1),e=c([]),p=c(""),o=()=>{t.value=!0,e.value=[],l().then(u=>{e.value=u.data}).finally(()=>{t.value=!1})};return S(()=>{o()}),{loading:t,options:e,value:p}}const x={code:0,data:[{label:"苹果",value:1},{label:"香蕉",value:2},{label:"橘子",value:3,disabled:!0}],message:"获取 Select 数据成功"};function A(){return new Promise((s,l)=>{setTimeout(()=>{Math.random()<.8?s(x):l(new Error("接口发生错误"))},2e3)})}const D={class:"app-container"},F=d("h4",null,"该示例是演示：通过 hook 自动调用 api 后拿到 Select 组件需要的数据并传递给 Select 组件",-1),M=d("h5",null,"Select 示例",-1),N=d("h5",null,"Select V2 示例（如果数据量过多，可以选择该组件）",-1),T=V({__name:"use-fetch-select",setup(s){const{loading:l,options:t,value:e}=w({api:A});return(p,o)=>{const u=r("el-option"),v=r("el-select"),h=r("el-select-v2");return i(),_("div",D,[F,M,m(v,{loading:a(l),modelValue:a(e),"onUpdate:modelValue":o[0]||(o[0]=n=>f(e)?e.value=n:null),filterable:""},{default:b(()=>[(i(!0),_(E,null,k(a(t),(n,g)=>(i(),B(u,C(n,{key:g,placeholder:"请选择"}),null,16))),128))]),_:1},8,["loading","modelValue"]),N,m(h,{loading:a(l),modelValue:a(e),"onUpdate:modelValue":o[1]||(o[1]=n=>f(e)?e.value=n:null),options:a(t),filterable:"",placeholder:"请选择"},null,8,["loading","modelValue","options"])])}}});export{T as default};
