import{H as x,L as p,r as n,o,c as a,a as s,w as l,F as d,b as t,i as f,t as u,g as m}from"./app.dc8eb5b8.js";import{A as y}from"./Admin.6860733d.js";import{_ as g}from"./_plugin-vue_export-helper.cdc0426e.js";import"./toastify.5ab8cc9b.js";const b={components:{Head:x,AdminLayout:y,Link:p},props:{errors:Object,auth:Object,category_share:Object,dp_products:Object},data(){return{}}},v={class:"mt-3"},w=t("div",{class:"py-4 flex justify-evenly"},[t("button",{class:"rounded-full py-1 bg-neutral-400 text-neutral-100 w-[120px] text-sm"},"\u30AC\u30C1\u30E3"),t("button",{class:"rounded-full py-1 bg-cyan-500 text-neutral-100 w-[120px] text-sm"},"TP\u4EA4\u63DB\u6240")],-1),j={class:"flex flex-wrap justify-evenly"},L={class:"mb-4 bg-white text-center relative rounded-lg shadow-md",style:{width:"160px",height:"200px"}},k={class:"text-center h-3/5 pt-2",style:{height:"65%"}},A=["src"],H={class:"text-sm px-3 flex items-end justify-center font-bold",style:{height:"15%"}},O={class:"p-1 h-1/5"},B={class:"rounded-full py-0.5 bg-neutral-800 text-neutral-100 w-[100px] text-xs h-5/6"},N=t("div",{class:"rounded-full bg-green-500 text-3xl text-neutral-100 h-10 w-10"}," + ",-1),V=t("div",{class:"flex flex-wrap justify-evenly"},null,-1);function C(r,D,i,F,T,$){const _=n("Head"),c=n("Link"),h=n("AdminLayout");return o(),a(d,null,[s(_,{title:"\u30DD\u30A4\u30F3\u30C8\u8A2D\u5B9A"}),s(h,null,{default:l(()=>[t("div",v,[w,t("div",j,[(o(!0),a(d,null,f(i.dp_products.data,(e,E)=>(o(),a("div",L,[t("div",k,[t("img",{class:"inline-block h-full object-contain",src:e.image},null,8,A)]),t("div",H,u(e.title),1),t("div",O,[t("button",B," \xA5 "+u(e.amount_str),1)]),s(c,{href:r.route("admin.dp.edit",{id:e.id}),class:"absolute top-0 right-0 px-5 py-2 bg-green-500 text-xs text-neutral-50"},{default:l(()=>[m(" \u7DE8\u96C6\u3059\u308B ")]),_:2},1032,["href"])]))),256)),s(c,{href:r.route("admin.dp.create")+i.category_share.cat_route_appendix,class:"mb-4 bg-white text-center relative rounded-lg shadow-md flex justify-center items-center",style:{width:"160px",height:"200px"}},{default:l(()=>[N]),_:1},8,["href"])]),V])]),_:1})],64)}const G=g(b,[["render",C]]);export{G as default};
