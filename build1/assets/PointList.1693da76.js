import{H as p,L as m,K as f,r as a,o as r,c as i,a as o,w as d,F as l,b as t,i as g,t as _,g as b}from"./app.dc8eb5b8.js";import{A as y}from"./Admin.6860733d.js";import{_ as v}from"./_plugin-vue_export-helper.cdc0426e.js";import"./toastify.5ab8cc9b.js";const w={components:{Head:p,AdminLayout:y,Link:m},props:{errors:Object,auth:Object,category_share:Object,points:Object},methods:{destroyPoint(s){confirm("\u524A\u9664\u3057\u3066\u3082\u3044\u3044\u3067\u3059\u304B\uFF1F")&&f.Inertia.delete(route("admin.point.destroy",{id:s}))}},data(){return{}}},j={class:"pt-6 md:px-2 px-4"},k=t("h1",{class:"mb-2 text-lg font-bold"},"\u30DD\u30A4\u30F3\u30C8\u8A2D\u5B9A",-1),L=t("hr",{class:"mb-8"},null,-1),A={class:"flex flex-wrap justify-evenly"},C={class:"mb-4 bg-white text-center relative rounded-lg shadow-md",style:{width:"160px",height:"200px"}},H={class:"text-center h-3/5 pt-2 px-1 flex justify-center",style:{height:"65%"}},O=["src"],B={class:"text-sm px-3 flex items-end justify-center font-bold",style:{height:"15%"}},N={class:"p-1 h-1/5"},P={class:"rounded-full py-0.5 bg-neutral-800 text-neutral-100 w-[100px] text-xs h-5/6"},V=["onClick"],F=t("div",{class:"rounded-full bg-green-500 text-3xl text-neutral-100 h-10 w-10"}," + ",-1);function D(s,E,n,I,K,u){const h=a("Head"),c=a("Link"),x=a("AdminLayout");return r(),i(l,null,[o(h,{title:"\u30DD\u30A4\u30F3\u30C8\u8A2D\u5B9A"}),o(x,null,{default:d(()=>[t("div",j,[k,L,t("div",A,[(r(!0),i(l,null,g(n.points.data,(e,S)=>(r(),i("div",C,[t("div",H,[t("img",{class:"inline-block object-contain",src:e.image},null,8,O)]),t("div",B,_(e.title),1),t("div",N,[t("button",P," \xA5 "+_(e.amount_str),1)]),o(c,{href:s.route("admin.point.edit",{id:e.id})+n.category_share.cat_route_appendix,class:"rounded absolute top-0 right-0 px-4 py-2 bg-green-500 text-xs text-neutral-50"},{default:d(()=>[b(" \u7DE8\u96C6\u3059\u308B ")]),_:2},1032,["href"]),t("button",{onClick:T=>u.destroyPoint(e.id),class:"rounded absolute top-0 left-0 px-4 py-2 bg-red-500 text-xs text-neutral-50"}," \u524A\u9664 ",8,V)]))),256)),o(c,{href:s.route("admin.point.create")+n.category_share.cat_route_appendix,class:"mb-4 bg-white text-center relative rounded-lg shadow-md flex justify-center items-center",style:{width:"160px",height:"200px"}},{default:d(()=>[F]),_:1},8,["href"])])])]),_:1})],64)}const J=v(w,[["render",D]]);export{J as default};
