import s from"./ContentSlot.e8cc5dc8.js";import{f as o,h as f,k as u,y as m}from"./entry.85abd035.js";import"./utils.3ab7e905.js";const l=o({name:"Markdown",extends:s,setup(t){const{parent:e}=m(),{between:n,default:a}=f(),r=u(()=>typeof t.unwrap=="string"?t.unwrap.split(" "):["*"]);return{fallbackSlot:a,tags:r,between:n,parent:e}}});export{l as default};