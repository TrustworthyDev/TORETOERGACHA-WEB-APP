import{H as m,L as x,K as f,r,o as a,c as d,a as o,w as c,F as u,b as t,i as g,t as _,g as b}from"./app.dc8eb5b8.js";import{A as y}from"./Admin.6860733d.js";import{_ as v}from"./_plugin-vue_export-helper.cdc0426e.js";import"./toastify.5ab8cc9b.js";const w={components:{Head:m,AdminLayout:y,Link:x},props:{errors:Object,auth:Object,category_share:Object,products:Object},data(){return{}},methods:{format_number(e){return String(e).replace(/(.)(?=(\d{3})+$)/g,"$1,")},destroyDp(e){confirm("\u524A\u9664\u3057\u3066\u3082\u3044\u3044\u3067\u3059\u304B\uFF1F")&&f.Inertia.delete(route("admin.dp.destroy",{id:e}))}}},j={class:"pt-6 md:px-2 px-4"},k=t("h1",{class:"mb-2 text-lg font-bold"},"TP \u8A2D\u5B9A",-1),L=t("hr",{class:"mb-8"},null,-1),A={class:"flex flex-wrap justify-evenly"},C={class:"mb-4 bg-white text-center relative rounded-lg shadow-md",style:{width:"160px",height:"220px"}},H={class:"text-center h-3/5 pt-2 px-1 flex justify-center",style:{height:"63%"}},O=["src"],B={class:"text-sm px-3 flex items-center justify-center font-bold",style:{height:"20%"}},D={class:"p-1",style:{height:"17%"}},N={class:"rounded-full py-0.5 bg-neutral-800 text-neutral-100 w-[100px] text-xs h-5/6"},T=["onClick"],V=t("div",{class:"rounded-full bg-green-500 text-3xl text-neutral-100 h-10 w-10"}," + ",-1);function F(e,I,n,P,S,i){const h=r("Head"),l=r("Link"),p=r("AdminLayout");return a(),d(u,null,[o(h,{title:"TP \u8A2D\u5B9A"}),o(p,null,{default:c(()=>[t("div",j,[k,L,t("div",A,[(a(!0),d(u,null,g(n.products.data,(s,$)=>(a(),d("div",C,[t("div",H,[t("img",{class:"inline-block object-contain",src:s.image},null,8,O)]),t("div",B,_(s.name),1),t("div",D,[t("button",N,_(i.format_number(s.dp))+"tp ",1)]),o(l,{href:e.route("admin.dp.edit",{id:s.id})+n.category_share.cat_route_appendix,class:"rounded absolute top-0 right-0 px-4 py-2 bg-green-500 text-xs text-neutral-50"},{default:c(()=>[b(" \u7DE8\u96C6\u3059\u308B ")]),_:2},1032,["href"]),t("button",{onClick:E=>i.destroyDp(s.id),class:"rounded absolute top-0 left-0 px-4 py-2 bg-red-500 text-xs text-neutral-50"}," \u524A\u9664 ",8,T)]))),256)),o(l,{href:e.route("admin.dp.create")+n.category_share.cat_route_appendix,class:"mb-4 bg-white text-center relative rounded-lg shadow-md flex justify-center items-center",style:{width:"160px",height:"200px"}},{default:c(()=>[V]),_:1},8,["href"])])])]),_:1})],64)}const J=v(w,[["render",F]]);export{J as default};