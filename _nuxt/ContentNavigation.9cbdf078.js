import{l as D,_ as e,f as p,j as d,D as A,a as R,E as g,k as E,F as V,G as h,u as y,H as b,q as s,p as T,I as j,J as S,K as w,d as r,t as $,L as x,h as N,M as C}from"./entry.a395116f.js";import{u as k}from"./asyncData.cdd7f8eb.js";import{h as f,e as M,j as z}from"./query.12e6af4a.js";import{w as P,s as B,u as H,a as Q}from"./utils.b6076901.js";import"./client-only.73b84b6e.js";import"./Nav.vue_vue_type_style_index_0_scoped_73941770_lang.0915e8bd.js";import"./ContentRenderer.fbe17fe5.js";import"./ContentDoc.1418c3d3.js";import"./ContentList.4bb8d3c7.js";import"./ContentQuery.5acc7252.js";import"./ContentRendererMarkdown.d28f07bf.js";import"./ContentSlot.dd19a3d7.js";import"./DocumentDrivenEmpty.de24ac4d.js";import"./DocumentDrivenNotFound.2edd602c.js";import"./Markdown.9d71d653.js";import"./ProseCode.acde2816.js";import"./components.79631917.js";import"./_commonjsHelpers.fed2a411.js";import"./_plugin-vue_export-helper.a1a6add7.js";const G=async t=>{var u,n;const{content:o}=D().public,a=typeof(t==null?void 0:t.params)=="function"?t.params():t||{};o.locales.length&&((n=(u=a.where)==null?void 0:u.find(l=>l._locale))!=null&&n._locale||(a.where=a.where||[],a.where.push({_locale:o.defaultLocale})));const _=o.experimental.stripQueryParameters?P(`/navigation/${`${f(a)}.${o.integrity}`}/${M(a)}.json`):P(`/navigation/${f(a)}.${o.integrity}.json`);if(B())return(await e(()=>import("./client-db.cd3d9340.js"),["./client-db.cd3d9340.js","./entry.a395116f.js","./entry.379acf47.css","./utils.b6076901.js","./query.12e6af4a.js","./_commonjsHelpers.fed2a411.js"],import.meta.url).then(l=>l.generateNavigation))(a);const i=await $fetch(_,{method:"GET",responseType:"json",params:o.experimental.stripQueryParameters?void 0:{_params:z(a),previewToken:H("previewToken").value}});if(typeof i=="string"&&i.startsWith("<!DOCTYPE html>"))throw new Error("Not found");return i};const L={},U=p({props:{name:String},async setup(t,o){const a=await L[t.name]().then(_=>_.default||_);return()=>d(a,{},o.slots)}}),q=p({props:{name:{type:[String,Boolean,Object],default:null}},setup(t,o){const a=A("_route"),_=a===R()?g():a,i=E(()=>{var u,n;return(n=(u=y(t.name))!=null?u:_.meta.layout)!=null?n:"default"});return()=>{var m;const u=i.value&&i.value in L,n=(m=_.meta.layoutTransition)!=null?m:V;return h(b,u&&n,{default:()=>h(U,u&&{key:i.value,name:i.value,hasTransition:void 0},o.slots).default()}).default()}}}),F=Object.freeze(Object.defineProperty({__proto__:null,default:q},Symbol.toStringTag,{value:"Module"})),J=p({emits:{error(t){return!0}},setup(t,{slots:o,emit:a}){const _=s(null),i=T();return j(u=>{if(!i.isHydrating)return a("error",u),_.value=u,!1}),()=>{var u,n;return _.value?(u=o.error)==null?void 0:u.call(o,{error:_}):(n=o.default)==null?void 0:n.call(o)}}}),K=Object.freeze(Object.defineProperty({__proto__:null,default:J},Symbol.toStringTag,{value:"Module"})),W=p({name:"DevOnly",setup(t,o){return()=>null}}),Y=Object.freeze(Object.defineProperty({__proto__:null,default:W},Symbol.toStringTag,{value:"Module"})),X=p({name:"ServerPlaceholder",render(){return S("div")}}),Z=Object.freeze(Object.defineProperty({__proto__:null,default:X},Symbol.toStringTag,{value:"Module"})),tt=p({name:"NuxtLoadingIndicator",props:{throttle:{type:Number,default:200},duration:{type:Number,default:2e3},height:{type:Number,default:3},color:{type:String,default:"repeating-linear-gradient(to right,#00dc82 0%,#34cdfe 50%,#0047e1 100%)"}},setup(t,{slots:o}){const a=et({duration:t.duration,throttle:t.throttle}),_=T();return _.hook("page:start",a.start),_.hook("page:finish",a.finish),w(()=>a.clear),()=>d("div",{class:"nuxt-loading-indicator",style:{position:"fixed",top:0,right:0,left:0,pointerEvents:"none",width:`${a.progress.value}%`,height:`${t.height}px`,opacity:a.isLoading.value?1:0,background:t.color,backgroundSize:`${100/a.progress.value*100}% auto`,transition:"width 0.1s, height 0.4s, opacity 0.4s",zIndex:999999}},o)}});function et(t){const o=s(0),a=s(!1),_=E(()=>1e4/t.duration);let i=null,u=null;function n(){l(),o.value=0,a.value=!0,t.throttle?u=setTimeout(v,t.throttle):v()}function m(){o.value=100,I()}function l(){clearInterval(i),clearTimeout(u),i=null,u=null}function O(c){o.value=Math.min(100,o.value+c)}function I(){l(),setTimeout(()=>{a.value=!1,setTimeout(()=>{o.value=0},400)},500)}function v(){i=setInterval(()=>{O(_.value)},100)}return{progress:o,isLoading:a,start:n,finish:m,clear:l}}const rt=Object.freeze(Object.defineProperty({__proto__:null,default:tt},Symbol.toStringTag,{value:"Module"}));r(()=>e(()=>import("./Comments.8920f257.js"),["./Comments.8920f257.js","./client-only.73b84b6e.js","./entry.a395116f.js","./entry.379acf47.css","./client-only.0a5191b0.css","./_plugin-vue_export-helper.a1a6add7.js"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./Filter.ec9601e1.js"),["./Filter.ec9601e1.js","./entry.a395116f.js","./entry.379acf47.css","./metadata.40343319.js","./use-outside-click.f35cab06.js","./hidden.61a4520d.js"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./FilterBar.1c919dc6.js"),["./FilterBar.1c919dc6.js","./entry.a395116f.js","./entry.379acf47.css","./use-outside-click.f35cab06.js","./use-tracked-pointer.59cf2289.js"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./Foot.24784191.js"),["./Foot.24784191.js","./Nav.vue_vue_type_style_index_0_scoped_73941770_lang.0915e8bd.js","./entry.a395116f.js","./entry.379acf47.css","./Nav.989f618f.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./Huggingface.0cfdc766.js"),["./Huggingface.0cfdc766.js","./ContentRenderer.fbe17fe5.js","./ContentRendererMarkdown.d28f07bf.js","./entry.a395116f.js","./entry.379acf47.css","./_commonjsHelpers.fed2a411.js","./client-only.73b84b6e.js","./client-only.0a5191b0.css","./Comments.8920f257.js","./_plugin-vue_export-helper.a1a6add7.js","./Nav.vue_vue_type_style_index_0_scoped_73941770_lang.0915e8bd.js","./Nav.989f618f.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./Modal.08e3f7f7.js"),["./Modal.08e3f7f7.js","./_plugin-vue_export-helper.a1a6add7.js","./entry.a395116f.js","./entry.379acf47.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./Nav.9630fa31.js"),["./Nav.9630fa31.js","./entry.a395116f.js","./entry.379acf47.css","./Nav.vue_vue_type_style_index_0_scoped_73941770_lang.0915e8bd.js","./Nav.989f618f.css","./_plugin-vue_export-helper.a1a6add7.js"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./Notebook.30012c29.js"),["./Notebook.30012c29.js","./ContentRenderer.fbe17fe5.js","./ContentRendererMarkdown.d28f07bf.js","./entry.a395116f.js","./entry.379acf47.css","./_commonjsHelpers.fed2a411.js","./client-only.73b84b6e.js","./client-only.0a5191b0.css","./Comments.8920f257.js","./_plugin-vue_export-helper.a1a6add7.js","./Nav.vue_vue_type_style_index_0_scoped_73941770_lang.0915e8bd.js","./Nav.989f618f.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./SelectType.4a9e6ca3.js"),["./SelectType.4a9e6ca3.js","./entry.a395116f.js","./entry.379acf47.css","./use-outside-click.f35cab06.js","./use-tracked-pointer.59cf2289.js","./hidden.61a4520d.js"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ContentDoc.1418c3d3.js"),["./ContentDoc.1418c3d3.js","./entry.a395116f.js","./entry.379acf47.css","./ContentRenderer.fbe17fe5.js","./ContentRendererMarkdown.d28f07bf.js","./_commonjsHelpers.fed2a411.js","./ContentQuery.5acc7252.js","./asyncData.cdd7f8eb.js","./query.12e6af4a.js","./utils.b6076901.js"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ContentList.4bb8d3c7.js"),["./ContentList.4bb8d3c7.js","./ContentQuery.5acc7252.js","./entry.a395116f.js","./entry.379acf47.css","./asyncData.cdd7f8eb.js","./query.12e6af4a.js","./utils.b6076901.js"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>Promise.resolve().then(()=>at),void 0,import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ContentQuery.5acc7252.js"),["./ContentQuery.5acc7252.js","./entry.a395116f.js","./entry.379acf47.css","./asyncData.cdd7f8eb.js","./query.12e6af4a.js","./utils.b6076901.js"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ContentRenderer.fbe17fe5.js"),["./ContentRenderer.fbe17fe5.js","./ContentRendererMarkdown.d28f07bf.js","./entry.a395116f.js","./entry.379acf47.css","./_commonjsHelpers.fed2a411.js"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ContentRendererMarkdown.d28f07bf.js"),["./ContentRendererMarkdown.d28f07bf.js","./entry.a395116f.js","./entry.379acf47.css","./_commonjsHelpers.fed2a411.js"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ContentSlot.dd19a3d7.js"),["./ContentSlot.dd19a3d7.js","./utils.b6076901.js","./entry.a395116f.js","./entry.379acf47.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./DocumentDrivenEmpty.de24ac4d.js"),["./DocumentDrivenEmpty.de24ac4d.js","./entry.a395116f.js","./entry.379acf47.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./DocumentDrivenNotFound.2edd602c.js"),["./DocumentDrivenNotFound.2edd602c.js","./entry.a395116f.js","./entry.379acf47.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./Markdown.9d71d653.js"),["./Markdown.9d71d653.js","./ContentSlot.dd19a3d7.js","./utils.b6076901.js","./entry.a395116f.js","./entry.379acf47.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ProseA.c4cf599b.js"),["./ProseA.c4cf599b.js","./entry.a395116f.js","./entry.379acf47.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ProseBlockquote.319ff090.js"),["./ProseBlockquote.319ff090.js","./_plugin-vue_export-helper.a1a6add7.js","./entry.a395116f.js","./entry.379acf47.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ProseCode.acde2816.js"),["./ProseCode.acde2816.js","./_plugin-vue_export-helper.a1a6add7.js","./entry.a395116f.js","./entry.379acf47.css","./ProseCode.e63e49c6.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ProseCodeInline.72bde3ff.js"),["./ProseCodeInline.72bde3ff.js","./_plugin-vue_export-helper.a1a6add7.js","./entry.a395116f.js","./entry.379acf47.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ProseEm.c65e0512.js"),["./ProseEm.c65e0512.js","./_plugin-vue_export-helper.a1a6add7.js","./entry.a395116f.js","./entry.379acf47.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ProseH1.7754b869.js"),["./ProseH1.7754b869.js","./entry.a395116f.js","./entry.379acf47.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ProseH2.6391989b.js"),["./ProseH2.6391989b.js","./entry.a395116f.js","./entry.379acf47.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ProseH3.2d7185bf.js"),["./ProseH3.2d7185bf.js","./entry.a395116f.js","./entry.379acf47.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ProseH4.d0fc5677.js"),["./ProseH4.d0fc5677.js","./entry.a395116f.js","./entry.379acf47.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ProseH5.e44f231f.js"),["./ProseH5.e44f231f.js","./entry.a395116f.js","./entry.379acf47.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ProseH6.c280a674.js"),["./ProseH6.c280a674.js","./entry.a395116f.js","./entry.379acf47.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ProseHr.892ddb65.js"),["./ProseHr.892ddb65.js","./_plugin-vue_export-helper.a1a6add7.js","./entry.a395116f.js","./entry.379acf47.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ProseImg.03f86b86.js"),["./ProseImg.03f86b86.js","./entry.a395116f.js","./entry.379acf47.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ProseLi.f0c93384.js"),["./ProseLi.f0c93384.js","./_plugin-vue_export-helper.a1a6add7.js","./entry.a395116f.js","./entry.379acf47.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ProseOl.5c0e66ed.js"),["./ProseOl.5c0e66ed.js","./_plugin-vue_export-helper.a1a6add7.js","./entry.a395116f.js","./entry.379acf47.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ProseP.abe949dd.js"),["./ProseP.abe949dd.js","./_plugin-vue_export-helper.a1a6add7.js","./entry.a395116f.js","./entry.379acf47.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ProseStrong.b93032ea.js"),["./ProseStrong.b93032ea.js","./_plugin-vue_export-helper.a1a6add7.js","./entry.a395116f.js","./entry.379acf47.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ProseTable.6e30b11d.js"),["./ProseTable.6e30b11d.js","./_plugin-vue_export-helper.a1a6add7.js","./entry.a395116f.js","./entry.379acf47.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ProseTbody.a4e47573.js"),["./ProseTbody.a4e47573.js","./_plugin-vue_export-helper.a1a6add7.js","./entry.a395116f.js","./entry.379acf47.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ProseTd.161b3a23.js"),["./ProseTd.161b3a23.js","./_plugin-vue_export-helper.a1a6add7.js","./entry.a395116f.js","./entry.379acf47.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ProseTh.fd88c100.js"),["./ProseTh.fd88c100.js","./_plugin-vue_export-helper.a1a6add7.js","./entry.a395116f.js","./entry.379acf47.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ProseThead.aebbe562.js"),["./ProseThead.aebbe562.js","./_plugin-vue_export-helper.a1a6add7.js","./entry.a395116f.js","./entry.379acf47.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ProseTr.f3b3bf01.js"),["./ProseTr.f3b3bf01.js","./_plugin-vue_export-helper.a1a6add7.js","./entry.a395116f.js","./entry.379acf47.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ProseUl.cee0d5c9.js"),["./ProseUl.cee0d5c9.js","./_plugin-vue_export-helper.a1a6add7.js","./entry.a395116f.js","./entry.379acf47.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./welcome.b9110eb5.js"),["./welcome.b9110eb5.js","./entry.a395116f.js","./entry.379acf47.css","./_plugin-vue_export-helper.a1a6add7.js","./asyncData.cdd7f8eb.js","./query.12e6af4a.js","./utils.b6076901.js","./client-only.73b84b6e.js","./client-only.0a5191b0.css","./Nav.vue_vue_type_style_index_0_scoped_73941770_lang.0915e8bd.js","./Nav.989f618f.css","./ContentRenderer.fbe17fe5.js","./ContentRendererMarkdown.d28f07bf.js","./_commonjsHelpers.fed2a411.js","./ContentDoc.1418c3d3.js","./ContentQuery.5acc7252.js","./ContentList.4bb8d3c7.js","./ContentSlot.dd19a3d7.js","./DocumentDrivenEmpty.de24ac4d.js","./DocumentDrivenNotFound.2edd602c.js","./Markdown.9d71d653.js","./ProseCode.acde2816.js","./ProseCode.e63e49c6.css","./components.79631917.js"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>Promise.resolve().then(()=>F),void 0,import.meta.url).then(t=>t.default||t));r(()=>e(()=>Promise.resolve().then(()=>K),void 0,import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./client-only.73b84b6e.js"),["./client-only.73b84b6e.js","./entry.a395116f.js","./entry.379acf47.css","./client-only.0a5191b0.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>Promise.resolve().then(()=>Y),void 0,import.meta.url).then(t=>t.default||t));r(()=>e(()=>Promise.resolve().then(()=>Z),void 0,import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./entry.a395116f.js").then(t=>t.aj),["./entry.a395116f.js","./entry.379acf47.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>Promise.resolve().then(()=>rt),void 0,import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./entry.a395116f.js").then(t=>t.ak),["./entry.a395116f.js","./entry.379acf47.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./components.79631917.js"),["./components.79631917.js","./entry.a395116f.js","./entry.379acf47.css"],import.meta.url).then(t=>t.NoScript));r(()=>e(()=>import("./components.79631917.js"),["./components.79631917.js","./entry.a395116f.js","./entry.379acf47.css"],import.meta.url).then(t=>t.Link));r(()=>e(()=>import("./components.79631917.js"),["./components.79631917.js","./entry.a395116f.js","./entry.379acf47.css"],import.meta.url).then(t=>t.Base));r(()=>e(()=>import("./components.79631917.js"),["./components.79631917.js","./entry.a395116f.js","./entry.379acf47.css"],import.meta.url).then(t=>t.Title));r(()=>e(()=>import("./components.79631917.js"),["./components.79631917.js","./entry.a395116f.js","./entry.379acf47.css"],import.meta.url).then(t=>t.Meta));r(()=>e(()=>import("./components.79631917.js"),["./components.79631917.js","./entry.a395116f.js","./entry.379acf47.css"],import.meta.url).then(t=>t.Style));r(()=>e(()=>import("./components.79631917.js"),["./components.79631917.js","./entry.a395116f.js","./entry.379acf47.css"],import.meta.url).then(t=>t.Head));r(()=>e(()=>import("./components.79631917.js"),["./components.79631917.js","./entry.a395116f.js","./entry.379acf47.css"],import.meta.url).then(t=>t.Html));r(()=>e(()=>import("./components.79631917.js"),["./components.79631917.js","./entry.a395116f.js","./entry.379acf47.css"],import.meta.url).then(t=>t.Body));const ot=p({name:"ContentNavigation",props:{query:{type:Object,required:!1,default:void 0}},async setup(t){const{query:o}=$(t),a=E(()=>{var i;return typeof((i=o.value)==null?void 0:i.params)=="function"?o.value.params():o.value});if(!a.value&&x("dd-navigation").value){const{navigation:i}=Q();return{navigation:i}}const{data:_}=await k(`content-navigation-${f(a.value)}`,()=>G(a.value));return{navigation:_}},render(t){const o=N(),{navigation:a}=t,_=n=>d(C,{to:n._path},()=>n.title),i=(n,m)=>d("ul",m?{"data-level":m}:null,n.map(l=>l.children?d("li",null,[_(l),i(l.children,m+1)]):d("li",null,_(l)))),u=n=>i(n,0);return o!=null&&o.default?o.default({navigation:a,...this.$attrs}):u(a)}}),at=Object.freeze(Object.defineProperty({__proto__:null,default:ot},Symbol.toStringTag,{value:"Module"}));export{ot as default};
