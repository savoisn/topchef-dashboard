import{_ as r}from"./nuxt-link.50b09d49.js";import{o,b as a,e as t,f as n,w as s,k as i,t as d}from"./entry.e54d3354.js";const l={class:"my-2 mx-2 text-center grid place-content-center"},m=["src"],p={__name:"Chef",props:{chef:{type:Object,required:!0},border:{type:String,required:!0}},setup(e){return(f,h)=>{const c=r;return o(),a("div",l,[t("div",null,[n(c,{to:`/chef/2024?chef=${e.chef.id}`},{default:s(()=>[t("img",{class:i(["border-2",[e.border]]),src:`/topchef-dashboard/images/${e.chef.img}`},null,10,m)]),_:1},8,["to"]),t("span",null,d(e.chef.name),1)])])}}};export{p as _};