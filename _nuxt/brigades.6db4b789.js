import{a as n,o as a,b as i,e as r,f as _,u as o,h as b,t as u,F as h,r as w,c as x}from"./entry.776c1163.js";import"./app.config.7650ae0f.js";import{r as m}from"./ref_topchef.42412882.js";import{C,a as k}from"./index.570f5758.js";import{_ as y}from"./Brigade.d1e287a9.js";import"./Chef.5ff8eebd.js";const S={class:"text-3xl font-bold tracking-tight text-gray-900"},v=["disabled"],B=["disabled"],$={__name:"ShowSwitcher",setup(p){const e=n("show_counter"),c=n("year"),l=m().countShowsForYear(2023);return(f,s)=>(a(),i("h1",S,[r("button",{type:"button",class:"font-mono",disabled:o(e)<=1,onClick:s[0]||(s[0]=d=>e.value--)},[_(o(C),{class:"block h-6 w-6"})],8,v),b(" TopChef "+u(o(c))+" Statut après l'emission "+u(o(e))+" ",1),r("button",{class:"font-mono",disabled:o(e)>=o(l),onClick:s[1]||(s[1]=d=>e.value++)},[_(o(k),{class:"block h-6 w-6"})],8,B)]))}},F={class:"bg-white shadow"},N={class:"mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8"},V={class:"grid content-center gap-x-8 gap-y-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-2"},E={__name:"brigades",setup(p){const e=n("show_counter"),c=n("year"),l=m();return(f,s)=>{const d=$,g=y;return a(),i(h,null,[r("header",F,[r("div",N,[_(d)])]),r("div",V,[(a(!0),i(h,null,w(o(l).getBrigadesStatusByYearAndByShow(o(c),o(e)),t=>(a(),x(g,{name:t.name,leader:t.leader,borderColorClass:t.border,backgroundColorClass:t.background,chefs:t.chefs},null,8,["name","leader","borderColorClass","backgroundColorClass","chefs"]))),256))])],64)}}};export{E as default};
