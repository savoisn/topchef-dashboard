import{_ as c}from"./Chef.702fd429.js";import{o as r,b as a,e as t,t as s,F as l,r as i,c as d,k as u}from"./entry.14c333d4.js";const g={class:"bg-white my-8"},m={class:"col-span-2 content-center text-center"},p={__name:"Brigade",props:{name:{type:String,required:!0},backgroundColorClass:{type:String,required:!1},borderColorClass:{type:String,required:!1},leader:{type:String||null,required:!0},chefs:{type:[Object],required:!0}},setup(e){return(C,b)=>{const n=c;return r(),a("div",g,[t("div",{class:u(["grid content-center gap-x-8 gap-y-4 grid-cols-2 border-2",[e.borderColorClass,e.backgroundColorClass]])},[t("div",m,[t("span",null,s(e.name)+" - "+s(e.leader),1)]),(r(!0),a(l,null,i(e.chefs,o=>(r(),d(n,{chef:o,border:e.borderColorClass},null,8,["chef","border"]))),256))],2)])}}};export{p as _};