import{H as g,u as v,r as b,o,c as l,a as h,w as y,F as w,b as e,d as k,e as f,v as _,t as d,f as n,g as m}from"./app.dc8eb5b8.js";import{A as L}from"./Admin.6860733d.js";import{_ as U}from"./_plugin-vue_export-helper.cdc0426e.js";import"./toastify.5ab8cc9b.js";const V={components:{Head:g,AdminLayout:L},props:{errors:Object,auth:Object,category_share:Object},data(){return{url:null,url1:null}},methods:{submit(){this.$refs.photo&&(this.form.image=this.$refs.photo.files[0]),this.$refs.photo1&&(this.form.thumbnail=this.$refs.photo1.files[0]),this.form.post(route("admin.gacha.store"))},previewImage(i){const t=i.target.files[0];this.url=URL.createObjectURL(t)},previewImage1(i){const t=i.target.files[0];this.url1=URL.createObjectURL(t)}},setup(i){return{form:v({point:"",count_card:"",lost_product_type:"",thumbnail:"",image:"",category_id:i.category_share.cat_id,spin_limit:"3"})}}},C={class:"pt-6 md:px-2 px-4"},I=e("h1",{class:"mb-2 text-lg font-bold"},"\u30AC\u30C1\u30E3 \u8FFD\u52A0",-1),j=e("hr",{class:"mb-8"},null,-1),O={class:"mb-4"},A=e("label",{for:"text1",class:"block font-medium text-sm text-neutral-700 mb-1"},[m("\u6D88\u8CBB\u30DD\u30A4\u30F3\u30C8\uFF08\u30C6\u30AD\u30B9\u30C8\uFF09"),e("span",{class:"text-red-500"},"*")],-1),H={key:0,class:"text-red-500 text-sm mt-1"},N={class:"mb-4"},R=e("label",{for:"text2",class:"block font-medium text-sm text-neutral-700 mb-1"},[m("\u7DCF\u30AB\u30FC\u30C9\u6570\uFF08\u534A\u89D2\u6570\u5B57\uFF09"),e("span",{class:"text-red-500"},"*")],-1),B={key:0,class:"text-red-500 text-sm mt-1"},F={class:"mb-4"},D=e("label",{for:"text1",class:"block font-medium text-sm text-neutral-700 mb-1"},[m("\u30AC\u30C1\u30E3\u5236\u9650\u56DE\u6570 "),e("span",{class:"text-red-500"},"*")],-1),M={key:0,class:"text-red-500 text-sm mt-1"},S={class:"mb-4"},T=e("label",{for:"file1",class:"block font-medium text-sm text-neutral-700 mb-1"},[m("\u30B5\u30E0\u30CD\u30A4\u30EB "),e("span",{class:"text-red-500"},"*")],-1),E={class:"text-center w-full"},q=["src"],z={key:0,class:"text-red-500 text-sm mt-1"},G={class:"mb-8"},J=e("label",{for:"file1",class:"block font-medium text-sm text-neutral-700 mb-1"},[m("\u8A73\u7D30\u30DA\u30FC\u30B8\u753B\u50CF "),e("span",{class:"text-red-500"},"*")],-1),K={class:"text-center w-full"},P=["src"],Q={key:0,class:"text-red-500 text-sm mt-1"},W=e("div",{class:"mb-8 text-center"},[e("button",{type:"submit",class:"inline-block items-center px-14 py-2.5 bg-green-500 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-green-700 active:bg-green-700 focus:outline-none focus:border-green-700 focus:shadow-outline-green transition ease-in-out duration-150"}," \u4FDD\u5B58 ")],-1);function X(i,t,s,a,u,c){const p=b("Head"),x=b("AdminLayout");return o(),l(w,null,[h(p,{title:"\u30AC\u30C1\u30E3 \u8FFD\u52A0"}),h(x,null,{default:y(()=>[e("div",C,[I,j,e("form",{onSubmit:t[5]||(t[5]=k(r=>c.submit(),["prevent"]))},[e("div",O,[A,f(e("input",{"onUpdate:modelValue":t[0]||(t[0]=r=>a.form.point=r),id:"text1",type:"number",class:"w-full border-neutral-300 focus:border-neutral-300 focus:ring focus:ring-neutral-200 focus:ring-opacity-50 rounded-md shadow-sm placeholder-neutral-300",placeholder:"\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044"},null,512),[[_,a.form.point]]),s.errors.point?(o(),l("div",H,d(s.errors.point),1)):n("",!0)]),e("div",N,[R,f(e("input",{"onUpdate:modelValue":t[1]||(t[1]=r=>a.form.count_card=r),id:"text2",type:"number",class:"w-full border-neutral-300 focus:border-neutral-300 focus:ring focus:ring-neutral-200 focus:ring-opacity-50 rounded-md shadow-sm placeholder-neutral-300",placeholder:"\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044"},null,512),[[_,a.form.count_card]]),s.errors.count_card?(o(),l("div",B,d(s.errors.count_card),1)):n("",!0)]),e("div",F,[D,f(e("input",{"onUpdate:modelValue":t[2]||(t[2]=r=>a.form.spin_limit=r),id:"text1",type:"number",class:"w-full border-neutral-300 focus:border-neutral-300 focus:ring focus:ring-neutral-200 focus:ring-opacity-50 rounded-md shadow-sm placeholder-neutral-300",placeholder:"\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044"},null,512),[[_,a.form.spin_limit]]),s.errors.spin_limit?(o(),l("div",M,d(s.errors.spin_limit),1)):n("",!0)]),e("div",S,[T,e("div",E,[u.url1?(o(),l("img",{key:0,src:u.url1,class:"inline-block mt-4 h-52"},null,8,q)):n("",!0)]),e("input",{onChange:t[3]||(t[3]=(...r)=>c.previewImage1&&c.previewImage1(...r)),ref:"photo1",id:"file1",type:"file",class:"w-full"},null,544),s.errors.thumbnail?(o(),l("div",z,d(s.errors.thumbnail),1)):n("",!0)]),e("div",G,[J,e("div",K,[u.url?(o(),l("img",{key:0,src:u.url,class:"inline-block mt-4 h-52"},null,8,P)):n("",!0)]),e("input",{onChange:t[4]||(t[4]=(...r)=>c.previewImage&&c.previewImage(...r)),ref:"photo",id:"file1",type:"file",class:"w-full"},null,544),s.errors.image?(o(),l("div",Q,d(s.errors.image),1)):n("",!0)]),W],32)])]),_:1})],64)}const te=U(V,[["render",X]]);export{te as default};
