import{n as c}from"./element-4018b73c.js";import{r as z,z as x}from"./vue-2207505e.js";const R={defense:!0,color:"#c0c4cc",opacity:.5,size:16,family:"serif",angle:-20,width:300,height:200},W=z(document.body);function $(i=W){let u,v,t=null;const r={watermarkElMutationObserver:void 0,parentElMutationObserver:void 0,parentElResizeObserver:void 0},O=(e,a={})=>{if(!i.value){console.warn("请在 DOM 挂载完成后再调用 setWatermark 方法设置水印");return}u=e,v={...R,...a},t?d():f(),m(i.value)},f=()=>{t=document.createElement("div"),t.style.pointerEvents="none",t.style.top="0",t.style.left="0",t.style.position="absolute",t.style.zIndex="99999";const{clientWidth:e,clientHeight:a}=i.value;d({width:e,height:a}),i.value.style.position="relative",i.value.appendChild(t)},d=(e={})=>{t&&(u&&(t.style.background=`url(${w()}) left top repeat`),e.width&&(t.style.width=`${e.width}px`),e.height&&(t.style.height=`${e.height}px`))},w=()=>{const{color:e,opacity:a,size:n,family:s,angle:h,width:g,height:E}=v,o=document.createElement("canvas");o.width=g,o.height=E;const l=o.getContext("2d");return l&&(l.fillStyle=e,l.globalAlpha=a,l.font=`${n}px ${s}`,l.rotate(Math.PI/180*h),l.fillText(u,0,E/2)),o.toDataURL()},b=()=>{if(!(!i.value||!t)){p();try{i.value.removeChild(t)}catch{console.warn("水印元素已不存在，请重新创建")}finally{t=null}}},y=c(()=>{b(),f(),m(i.value)},100),m=e=>{v.defense?!r.watermarkElMutationObserver&&!r.parentElMutationObserver&&k(e):p("mutation"),r.parentElResizeObserver||M(e)},p=(e="all")=>{var a,n,s;(e==="mutation"||e==="all")&&((a=r.watermarkElMutationObserver)==null||a.disconnect(),r.watermarkElMutationObserver=void 0,(n=r.parentElMutationObserver)==null||n.disconnect(),r.parentElMutationObserver=void 0),(e==="resize"||e==="all")&&((s=r.parentElResizeObserver)==null||s.disconnect(),r.parentElResizeObserver=void 0)},k=e=>{const a=c(n=>{n.forEach(c(s=>{switch(s.type){case"attributes":s.target===t&&y();break;case"childList":s.removedNodes.forEach(h=>{h===t&&e.appendChild(t)});break}},100))},100);r.watermarkElMutationObserver=new MutationObserver(a),r.parentElMutationObserver=new MutationObserver(a),r.watermarkElMutationObserver.observe(t,{attributes:!0,childList:!1,subtree:!1}),r.parentElMutationObserver.observe(e,{attributes:!1,childList:!0,subtree:!1})},M=e=>{const a=c(()=>{const{clientWidth:n,clientHeight:s}=e;d({width:n,height:s})},500);r.parentElResizeObserver=new ResizeObserver(a),r.parentElResizeObserver.observe(e)};return x(()=>{b()}),{setWatermark:O,clearWatermark:b}}export{$ as u};
