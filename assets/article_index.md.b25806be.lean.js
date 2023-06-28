import{_ as v,o as i,c,d as e,r as d,f as b,u as A,w as x,t as g,n as C,g as I,h as w,F as j,i as D,j as S,k as $,v as U,e as a,b as o,p as L,l as P,m as l}from"./app.1ad5e66e.js";const T={},B={class:"TeamHero"},N={class:"container"},V={class:"title"},z={class:"lead"},O={class:"action"};function H(t,s){return i(),c("div",B,[e("div",N,[e("h1",V,[d(t.$slots,"title",{},void 0,!0)]),e("p",z,[d(t.$slots,"lead",{},void 0,!0)]),e("p",O,[d(t.$slots,"action",{},void 0,!0)])])])}const q=v(T,[["render",H],["__scopeId","data-v-4b96fd09"]]),F={class:"banner"},J=["src"],M={key:1,class:"banner-img banner-tip"},E={class:"info"},G={class:"name"},K={class:"desc"},Q=b({__name:"ArticleItem",props:{article:{type:Object,required:!0}},setup(t){const s=t,n=()=>{s.article.linkUrl&&(window.location.href=s.article.linkUrl)};return(_,f)=>(i(),c("article",{class:C(["ArticleItem",{disabled:!t.article.linkUrl}]),onClick:n},[e("figure",F,[t.article.bannerUrl?(i(),c("img",{key:0,class:"banner-img",src:A(x)(t.article.bannerUrl)},null,8,J)):(i(),c("div",M,g(t.article.tip),1))]),e("div",E,[e("h1",G,g(t.article.name),1),e("section",K,g(t.article.desc),1)])],2))}});const R=v(Q,[["__scopeId","data-v-4f479d5a"]]),y=t=>(L("data-v-258b7717"),t=t(),P(),t),W={class:"ArticleList"},X={class:"container"},Y={class:"info"},Z={class:"title"},ee={class:"lead"},te={class:"articles"},se={key:0,class:"building"},ae={class:"pagination"},ie={class:"item"},ce=y(()=>e("svg",{xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",focusable:"false",viewBox:"0 0 24 24",class:"icon","data-v-b57a953c":""},[e("path",{d:"M15,19c-0.3,0-0.5-0.1-0.7-0.3l-6-6c-0.4-0.4-0.4-1,0-1.4l6-6c0.4-0.4,1-0.4,1.4,0s0.4,1,0,1.4L10.4,12l5.3,5.3c0.4,0.4,0.4,1,0,1.4C15.5,18.9,15.3,19,15,19z"})],-1)),ne={class:"item"},le=y(()=>e("svg",{xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",focusable:"false",viewBox:"0 0 24 24",class:"icon","data-v-b57a953c":""},[e("path",{d:"M9,19c-0.3,0-0.5-0.1-0.7-0.3c-0.4-0.4-0.4-1,0-1.4l5.3-5.3L8.3,6.7c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l6,6c0.4,0.4,0.4,1,0,1.4l-6,6C9.5,18.9,9.3,19,9,19z"})],-1)),h=5,re=b({__name:"ArticleList",props:{articles:{type:Object,required:!0}},setup(t){const s=t,n=I(1),_=w(()=>{const r=(n.value-1)*h;return s.articles.slice(r,r+h)}),f=w(()=>n.value*h<s.articles.length),k=r=>{n.value+=r===1?1:-1};return(r,p)=>(i(),c("section",W,[e("div",X,[e("div",Y,[e("h2",Z,[d(r.$slots,"title",{},void 0,!0)]),e("p",ee,[d(r.$slots,"lead",{},void 0,!0)])]),e("div",te,[(i(!0),c(j,null,D(_.value,u=>(i(),c("div",{key:u.name,class:"article"},[o(R,{article:u},null,8,["article"])]))),128)),_.value.length===0?(i(),c("div",se," 🚧 建设中 🏗️ ")):S("",!0),e("div",ae,[e("div",{onClick:p[0]||(p[0]=u=>k(2))},[$(e("div",ie,[ce,a(" 上一页 ")],512),[[U,n.value>1]])]),e("div",{onClick:p[1]||(p[1]=u=>k(1))},[$(e("div",ne,[a(" 下一页 "),le],512),[[U,f.value]])])])])])]))}});const m=v(re,[["__scopeId","data-v-258b7717"]]),oe={class:"ArticlePage"},de=b({__name:"ArticlePage",setup(t){const s={article:[{bannerUrl:"article/composition-api.jpeg",name:"TDesign CompositionAPI 重构之路",desc:"记录了 TDesign 在 CompositionAPI 组件重构的开始，过程与收获",linkUrl:"../article/record/vca-refactor"},{bannerUrl:"article/td-component.png",name:"TDesign 组件开发范式",desc:"记录了 TDesign 的组件开发范式，在开源协同的过程中形成较为统一的开发规范",linkUrl:"../article/record/dev-paradigm"}],project:[{bannerUrl:"article/vite.webp",name:"webpack 迁移 vite 实践",desc:"项目中切换vite的记录，对于webpack来说，vite是个实打实的杀手",linkUrl:"../work/tencent/vite-build"},{bannerUrl:"article/vitest-td.png",name:" TDesign 在 vitest 的实践",desc:"TDesign 从 Jest 套件迁移至 Vitest 的过程，执行效率提升60%。",linkUrl:"../article/record/vitest-refactor"}],personal:[{bannerUrl:"article/vite-press.webp",name:"Blog 翻新记录",desc:"利用工作之余翻新了我的 blog, 使用了 vitepress 和 algolia, 记录一下整个流程",linkUrl:"../article/record/blog-refactor"},{bannerUrl:"article/deploy.jpeg",name:"开源网站部署工具",desc:"用过 vercel, github pages, 腾讯云serverless, 微信云托管等部署工具，简单总结一下",linkUrl:"../article/record/deploy"},{bannerUrl:"article/nat.jpeg",name:"几种内网穿透姿势",tip:"内网穿透",desc:"liyong frp 与 ngrok 进行内网穿透的实践记录及对比",linkUrl:"../article/record/nat"}]};return(n,_)=>(i(),c("div",oe,[o(q,null,{title:l(()=>[a("写的一些东西")]),lead:l(()=>[a("涵盖各个知识面的文章，有专业内入也有工作记录的，还有一些杂事")]),_:1}),o(m,{articles:s.article},{title:l(()=>[a("🔖 专业文章")]),lead:l(()=>[a("写的一些专业文章，理论总结。花了点心思的东西。")]),_:1},8,["articles"]),o(m,{articles:s.project},{title:l(()=>[a("👷 搬砖记录")]),lead:l(()=>[a("在日常工作中遇到的一些坑，主要是实战记录。")]),_:1},8,["articles"]),o(m,{articles:s.personal},{title:l(()=>[a("👽️ 杂七杂八")]),lead:l(()=>[a("在日常工作中遇到的一些坑，主要是实战记录。")]),_:1},8,["articles"])]))}});const _e=v(de,[["__scopeId","data-v-0db6060c"]]),ve=JSON.parse('{"title":"文章","description":"","frontmatter":{"page":true,"layout":"page","title":"文章"},"headers":[],"relativePath":"article/index.md","lastUpdated":1687963195000}'),pe={name:"article/index.md"},ge=Object.assign(pe,{setup(t){return(s,n)=>(i(),c("div",null,[o(_e)]))}});export{ve as __pageData,ge as default};
