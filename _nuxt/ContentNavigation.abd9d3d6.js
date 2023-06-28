import{l as D,_ as e,f as p,j as d,D as A,a as R,E as g,k as E,F as V,G as h,u as y,H as b,q as s,p as T,I as j,J as S,K as w,d as r,t as $,L as x,h as N,M as C}from"./entry.23c56394.js";import{u as k}from"./asyncData.d42e5596.js";import{h as f,e as M,j as z}from"./query.481edc8b.js";import{w as P,s as B,u as H,a as Q}from"./utils.29b19d91.js";import"./client-only.1faed6a2.js";import"./Nav.vue_vue_type_style_index_0_scoped_73941770_lang.3eea16e4.js";import"./ContentRenderer.e061c86f.js";import"./ContentDoc.62de5715.js";import"./ContentList.fe0c996f.js";import"./ContentQuery.8980dd90.js";import"./ContentRendererMarkdown.eeaa9196.js";import"./ContentSlot.3d63124e.js";import"./DocumentDrivenEmpty.ba79a64e.js";import"./DocumentDrivenNotFound.9ee19480.js";import"./Markdown.747b7d16.js";import"./ProseCode.e8601b82.js";import"./components.a9953900.js";import"./_commonjsHelpers.fed2a411.js";import"./_plugin-vue_export-helper.a1a6add7.js";const G=async t=>{var u,n;const{content:o}=D().public,a=typeof(t==null?void 0:t.params)=="function"?t.params():t||{};o.locales.length&&((n=(u=a.where)==null?void 0:u.find(l=>l._locale))!=null&&n._locale||(a.where=a.where||[],a.where.push({_locale:o.defaultLocale})));const _=o.experimental.stripQueryParameters?P(`/navigation/${`${f(a)}.${o.integrity}`}/${M(a)}.json`):P(`/navigation/${f(a)}.${o.integrity}.json`);if(B())return(await e(()=>import("./client-db.e097cd32.js"),["./client-db.e097cd32.js","./entry.23c56394.js","./entry.379acf47.css","./utils.29b19d91.js","./query.481edc8b.js","./_commonjsHelpers.fed2a411.js"],import.meta.url).then(l=>l.generateNavigation))(a);const i=await $fetch(_,{method:"GET",responseType:"json",params:o.experimental.stripQueryParameters?void 0:{_params:z(a),previewToken:H("previewToken").value}});if(typeof i=="string"&&i.startsWith("<!DOCTYPE html>"))throw new Error("Not found");return i};const L={},U=p({props:{name:String},async setup(t,o){const a=await L[t.name]().then(_=>_.default||_);return()=>d(a,{},o.slots)}}),q=p({props:{name:{type:[String,Boolean,Object],default:null}},setup(t,o){const a=A("_route"),_=a===R()?g():a,i=E(()=>{var u,n;return(n=(u=y(t.name))!=null?u:_.meta.layout)!=null?n:"default"});return()=>{var m;const u=i.value&&i.value in L,n=(m=_.meta.layoutTransition)!=null?m:V;return h(b,u&&n,{default:()=>h(U,u&&{key:i.value,name:i.value,hasTransition:void 0},o.slots).default()}).default()}}}),F=Object.freeze(Object.defineProperty({__proto__:null,default:q},Symbol.toStringTag,{value:"Module"})),J=p({emits:{error(t){return!0}},setup(t,{slots:o,emit:a}){const _=s(null),i=T();return j(u=>{if(!i.isHydrating)return a("error",u),_.value=u,!1}),()=>{var u,n;return _.value?(u=o.error)==null?void 0:u.call(o,{error:_}):(n=o.default)==null?void 0:n.call(o)}}}),K=Object.freeze(Object.defineProperty({__proto__:null,default:J},Symbol.toStringTag,{value:"Module"})),W=p({name:"DevOnly",setup(t,o){return()=>null}}),Y=Object.freeze(Object.defineProperty({__proto__:null,default:W},Symbol.toStringTag,{value:"Module"})),X=p({name:"ServerPlaceholder",render(){return S("div")}}),Z=Object.freeze(Object.defineProperty({__proto__:null,default:X},Symbol.toStringTag,{value:"Module"})),tt=p({name:"NuxtLoadingIndicator",props:{throttle:{type:Number,default:200},duration:{type:Number,default:2e3},height:{type:Number,default:3},color:{type:String,default:"repeating-linear-gradient(to right,#00dc82 0%,#34cdfe 50%,#0047e1 100%)"}},setup(t,{slots:o}){const a=et({duration:t.duration,throttle:t.throttle}),_=T();return _.hook("page:start",a.start),_.hook("page:finish",a.finish),w(()=>a.clear),()=>d("div",{class:"nuxt-loading-indicator",style:{position:"fixed",top:0,right:0,left:0,pointerEvents:"none",width:`${a.progress.value}%`,height:`${t.height}px`,opacity:a.isLoading.value?1:0,background:t.color,backgroundSize:`${100/a.progress.value*100}% auto`,transition:"width 0.1s, height 0.4s, opacity 0.4s",zIndex:999999}},o)}});function et(t){const o=s(0),a=s(!1),_=E(()=>1e4/t.duration);let i=null,u=null;function n(){l(),o.value=0,a.value=!0,t.throttle?u=setTimeout(v,t.throttle):v()}function m(){o.value=100,I()}function l(){clearInterval(i),clearTimeout(u),i=null,u=null}function O(c){o.value=Math.min(100,o.value+c)}function I(){l(),setTimeout(()=>{a.value=!1,setTimeout(()=>{o.value=0},400)},500)}function v(){i=setInterval(()=>{O(_.value)},100)}return{progress:o,isLoading:a,start:n,finish:m,clear:l}}const rt=Object.freeze(Object.defineProperty({__proto__:null,default:tt},Symbol.toStringTag,{value:"Module"}));r(()=>e(()=>import("./Comments.dd847c63.js"),["./Comments.dd847c63.js","./client-only.1faed6a2.js","./entry.23c56394.js","./entry.379acf47.css","./client-only.0a5191b0.css","./_plugin-vue_export-helper.a1a6add7.js"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./Filter.5adeefd3.js"),["./Filter.5adeefd3.js","./entry.23c56394.js","./entry.379acf47.css","./metadata.3f7e0256.js","./use-outside-click.3e7f8ae2.js","./hidden.bbf4c04c.js"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./FilterBar.605d15d7.js"),["./FilterBar.605d15d7.js","./entry.23c56394.js","./entry.379acf47.css","./use-outside-click.3e7f8ae2.js","./use-tracked-pointer.9855fc8b.js"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./Foot.3f8dfc3b.js"),["./Foot.3f8dfc3b.js","./Nav.vue_vue_type_style_index_0_scoped_73941770_lang.3eea16e4.js","./entry.23c56394.js","./entry.379acf47.css","./Nav.989f618f.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./Huggingface.191b51bf.js"),["./Huggingface.191b51bf.js","./ContentRenderer.e061c86f.js","./ContentRendererMarkdown.eeaa9196.js","./entry.23c56394.js","./entry.379acf47.css","./_commonjsHelpers.fed2a411.js","./client-only.1faed6a2.js","./client-only.0a5191b0.css","./Comments.dd847c63.js","./_plugin-vue_export-helper.a1a6add7.js","./Nav.vue_vue_type_style_index_0_scoped_73941770_lang.3eea16e4.js","./Nav.989f618f.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./Modal.971e5e75.js"),["./Modal.971e5e75.js","./_plugin-vue_export-helper.a1a6add7.js","./entry.23c56394.js","./entry.379acf47.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./Nav.f454586f.js"),["./Nav.f454586f.js","./entry.23c56394.js","./entry.379acf47.css","./Nav.vue_vue_type_style_index_0_scoped_73941770_lang.3eea16e4.js","./Nav.989f618f.css","./_plugin-vue_export-helper.a1a6add7.js"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./Notebook.f6b7559b.js"),["./Notebook.f6b7559b.js","./ContentRenderer.e061c86f.js","./ContentRendererMarkdown.eeaa9196.js","./entry.23c56394.js","./entry.379acf47.css","./_commonjsHelpers.fed2a411.js","./client-only.1faed6a2.js","./client-only.0a5191b0.css","./Comments.dd847c63.js","./_plugin-vue_export-helper.a1a6add7.js","./Nav.vue_vue_type_style_index_0_scoped_73941770_lang.3eea16e4.js","./Nav.989f618f.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./SelectType.1b713a72.js"),["./SelectType.1b713a72.js","./entry.23c56394.js","./entry.379acf47.css","./use-outside-click.3e7f8ae2.js","./use-tracked-pointer.9855fc8b.js","./hidden.bbf4c04c.js"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ContentDoc.62de5715.js"),["./ContentDoc.62de5715.js","./entry.23c56394.js","./entry.379acf47.css","./ContentRenderer.e061c86f.js","./ContentRendererMarkdown.eeaa9196.js","./_commonjsHelpers.fed2a411.js","./ContentQuery.8980dd90.js","./asyncData.d42e5596.js","./query.481edc8b.js","./utils.29b19d91.js"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ContentList.fe0c996f.js"),["./ContentList.fe0c996f.js","./ContentQuery.8980dd90.js","./entry.23c56394.js","./entry.379acf47.css","./asyncData.d42e5596.js","./query.481edc8b.js","./utils.29b19d91.js"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>Promise.resolve().then(()=>at),void 0,import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ContentQuery.8980dd90.js"),["./ContentQuery.8980dd90.js","./entry.23c56394.js","./entry.379acf47.css","./asyncData.d42e5596.js","./query.481edc8b.js","./utils.29b19d91.js"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ContentRenderer.e061c86f.js"),["./ContentRenderer.e061c86f.js","./ContentRendererMarkdown.eeaa9196.js","./entry.23c56394.js","./entry.379acf47.css","./_commonjsHelpers.fed2a411.js"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ContentRendererMarkdown.eeaa9196.js"),["./ContentRendererMarkdown.eeaa9196.js","./entry.23c56394.js","./entry.379acf47.css","./_commonjsHelpers.fed2a411.js"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ContentSlot.3d63124e.js"),["./ContentSlot.3d63124e.js","./utils.29b19d91.js","./entry.23c56394.js","./entry.379acf47.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./DocumentDrivenEmpty.ba79a64e.js"),["./DocumentDrivenEmpty.ba79a64e.js","./entry.23c56394.js","./entry.379acf47.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./DocumentDrivenNotFound.9ee19480.js"),["./DocumentDrivenNotFound.9ee19480.js","./entry.23c56394.js","./entry.379acf47.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./Markdown.747b7d16.js"),["./Markdown.747b7d16.js","./ContentSlot.3d63124e.js","./utils.29b19d91.js","./entry.23c56394.js","./entry.379acf47.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ProseA.4766058f.js"),["./ProseA.4766058f.js","./entry.23c56394.js","./entry.379acf47.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ProseBlockquote.2b00ecc3.js"),["./ProseBlockquote.2b00ecc3.js","./_plugin-vue_export-helper.a1a6add7.js","./entry.23c56394.js","./entry.379acf47.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ProseCode.e8601b82.js"),["./ProseCode.e8601b82.js","./_plugin-vue_export-helper.a1a6add7.js","./entry.23c56394.js","./entry.379acf47.css","./ProseCode.e63e49c6.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ProseCodeInline.8970f7f5.js"),["./ProseCodeInline.8970f7f5.js","./_plugin-vue_export-helper.a1a6add7.js","./entry.23c56394.js","./entry.379acf47.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ProseEm.5014a186.js"),["./ProseEm.5014a186.js","./_plugin-vue_export-helper.a1a6add7.js","./entry.23c56394.js","./entry.379acf47.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ProseH1.9d98414c.js"),["./ProseH1.9d98414c.js","./entry.23c56394.js","./entry.379acf47.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ProseH2.96f2d1c7.js"),["./ProseH2.96f2d1c7.js","./entry.23c56394.js","./entry.379acf47.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ProseH3.e178b636.js"),["./ProseH3.e178b636.js","./entry.23c56394.js","./entry.379acf47.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ProseH4.ad45df19.js"),["./ProseH4.ad45df19.js","./entry.23c56394.js","./entry.379acf47.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ProseH5.972e66a0.js"),["./ProseH5.972e66a0.js","./entry.23c56394.js","./entry.379acf47.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ProseH6.339122e7.js"),["./ProseH6.339122e7.js","./entry.23c56394.js","./entry.379acf47.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ProseHr.b260c6f6.js"),["./ProseHr.b260c6f6.js","./_plugin-vue_export-helper.a1a6add7.js","./entry.23c56394.js","./entry.379acf47.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ProseImg.66f2c94c.js"),["./ProseImg.66f2c94c.js","./entry.23c56394.js","./entry.379acf47.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ProseLi.e1300579.js"),["./ProseLi.e1300579.js","./_plugin-vue_export-helper.a1a6add7.js","./entry.23c56394.js","./entry.379acf47.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ProseOl.59469f1e.js"),["./ProseOl.59469f1e.js","./_plugin-vue_export-helper.a1a6add7.js","./entry.23c56394.js","./entry.379acf47.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ProseP.428469e6.js"),["./ProseP.428469e6.js","./_plugin-vue_export-helper.a1a6add7.js","./entry.23c56394.js","./entry.379acf47.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ProseStrong.cbb21406.js"),["./ProseStrong.cbb21406.js","./_plugin-vue_export-helper.a1a6add7.js","./entry.23c56394.js","./entry.379acf47.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ProseTable.93b4b839.js"),["./ProseTable.93b4b839.js","./_plugin-vue_export-helper.a1a6add7.js","./entry.23c56394.js","./entry.379acf47.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ProseTbody.be39c8c2.js"),["./ProseTbody.be39c8c2.js","./_plugin-vue_export-helper.a1a6add7.js","./entry.23c56394.js","./entry.379acf47.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ProseTd.d4aca92c.js"),["./ProseTd.d4aca92c.js","./_plugin-vue_export-helper.a1a6add7.js","./entry.23c56394.js","./entry.379acf47.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ProseTh.9e4c6bbc.js"),["./ProseTh.9e4c6bbc.js","./_plugin-vue_export-helper.a1a6add7.js","./entry.23c56394.js","./entry.379acf47.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ProseThead.df795d5c.js"),["./ProseThead.df795d5c.js","./_plugin-vue_export-helper.a1a6add7.js","./entry.23c56394.js","./entry.379acf47.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ProseTr.4857b7ab.js"),["./ProseTr.4857b7ab.js","./_plugin-vue_export-helper.a1a6add7.js","./entry.23c56394.js","./entry.379acf47.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ProseUl.4594d591.js"),["./ProseUl.4594d591.js","./_plugin-vue_export-helper.a1a6add7.js","./entry.23c56394.js","./entry.379acf47.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./welcome.898089bf.js"),["./welcome.898089bf.js","./entry.23c56394.js","./entry.379acf47.css","./_plugin-vue_export-helper.a1a6add7.js","./asyncData.d42e5596.js","./query.481edc8b.js","./utils.29b19d91.js","./client-only.1faed6a2.js","./client-only.0a5191b0.css","./Nav.vue_vue_type_style_index_0_scoped_73941770_lang.3eea16e4.js","./Nav.989f618f.css","./ContentRenderer.e061c86f.js","./ContentRendererMarkdown.eeaa9196.js","./_commonjsHelpers.fed2a411.js","./ContentDoc.62de5715.js","./ContentQuery.8980dd90.js","./ContentList.fe0c996f.js","./ContentSlot.3d63124e.js","./DocumentDrivenEmpty.ba79a64e.js","./DocumentDrivenNotFound.9ee19480.js","./Markdown.747b7d16.js","./ProseCode.e8601b82.js","./ProseCode.e63e49c6.css","./components.a9953900.js"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>Promise.resolve().then(()=>F),void 0,import.meta.url).then(t=>t.default||t));r(()=>e(()=>Promise.resolve().then(()=>K),void 0,import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./client-only.1faed6a2.js"),["./client-only.1faed6a2.js","./entry.23c56394.js","./entry.379acf47.css","./client-only.0a5191b0.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>Promise.resolve().then(()=>Y),void 0,import.meta.url).then(t=>t.default||t));r(()=>e(()=>Promise.resolve().then(()=>Z),void 0,import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./entry.23c56394.js").then(t=>t.aj),["./entry.23c56394.js","./entry.379acf47.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>Promise.resolve().then(()=>rt),void 0,import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./entry.23c56394.js").then(t=>t.ak),["./entry.23c56394.js","./entry.379acf47.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./components.a9953900.js"),["./components.a9953900.js","./entry.23c56394.js","./entry.379acf47.css"],import.meta.url).then(t=>t.NoScript));r(()=>e(()=>import("./components.a9953900.js"),["./components.a9953900.js","./entry.23c56394.js","./entry.379acf47.css"],import.meta.url).then(t=>t.Link));r(()=>e(()=>import("./components.a9953900.js"),["./components.a9953900.js","./entry.23c56394.js","./entry.379acf47.css"],import.meta.url).then(t=>t.Base));r(()=>e(()=>import("./components.a9953900.js"),["./components.a9953900.js","./entry.23c56394.js","./entry.379acf47.css"],import.meta.url).then(t=>t.Title));r(()=>e(()=>import("./components.a9953900.js"),["./components.a9953900.js","./entry.23c56394.js","./entry.379acf47.css"],import.meta.url).then(t=>t.Meta));r(()=>e(()=>import("./components.a9953900.js"),["./components.a9953900.js","./entry.23c56394.js","./entry.379acf47.css"],import.meta.url).then(t=>t.Style));r(()=>e(()=>import("./components.a9953900.js"),["./components.a9953900.js","./entry.23c56394.js","./entry.379acf47.css"],import.meta.url).then(t=>t.Head));r(()=>e(()=>import("./components.a9953900.js"),["./components.a9953900.js","./entry.23c56394.js","./entry.379acf47.css"],import.meta.url).then(t=>t.Html));r(()=>e(()=>import("./components.a9953900.js"),["./components.a9953900.js","./entry.23c56394.js","./entry.379acf47.css"],import.meta.url).then(t=>t.Body));const ot=p({name:"ContentNavigation",props:{query:{type:Object,required:!1,default:void 0}},async setup(t){const{query:o}=$(t),a=E(()=>{var i;return typeof((i=o.value)==null?void 0:i.params)=="function"?o.value.params():o.value});if(!a.value&&x("dd-navigation").value){const{navigation:i}=Q();return{navigation:i}}const{data:_}=await k(`content-navigation-${f(a.value)}`,()=>G(a.value));return{navigation:_}},render(t){const o=N(),{navigation:a}=t,_=n=>d(C,{to:n._path},()=>n.title),i=(n,m)=>d("ul",m?{"data-level":m}:null,n.map(l=>l.children?d("li",null,[_(l),i(l.children,m+1)]):d("li",null,_(l)))),u=n=>i(n,0);return o!=null&&o.default?o.default({navigation:a,...this.$attrs}):u(a)}}),at=Object.freeze(Object.defineProperty({__proto__:null,default:ot},Symbol.toStringTag,{value:"Module"}));export{ot as default};
