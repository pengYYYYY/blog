import{_ as h,o as n,c as s,b as t,r as l,d as E,u as v,w as C,t as f,n as D,e as $,f as F,F as k,g as y,h as I,i as b,v as B,j as r,p as U,k as z,l as i,m as u}from"./app.4149d65f.js";const L={},P={class:"TeamHero"},S={class:"container"},j={class:"title"},T={class:"lead"},N={class:"action"};function V(e,a){return n(),s("div",P,[t("div",S,[t("h1",j,[l(e.$slots,"title",{},void 0,!0)]),t("p",T,[l(e.$slots,"lead",{},void 0,!0)]),t("p",N,[l(e.$slots,"action",{},void 0,!0)])])])}var H=h(L,[["render",V],["__scopeId","data-v-3c97f872"]]);const J={class:"banner"},M=["src"],O={class:"info"},q={class:"name"},G={class:"desc"},K=E({__name:"ArticleItem",props:{article:null},setup(e){const a=e,c=()=>{!a.article.linkUrl||(window.location.href=a.article.linkUrl)};return(o,g)=>(n(),s("article",{class:D(["ArticleItem",{disabled:!e.article.linkUrl}]),onClick:c},[t("figure",J,[t("img",{class:"banner-img",src:v(C)(e.article.bannerUrl)},null,8,M)]),t("div",O,[t("h1",q,f(e.article.name),1),t("section",G,f(e.article.desc),1)])],2))}});var Q=h(K,[["__scopeId","data-v-ce26cbd6"]]);const w=e=>(U("data-v-9b0f100a"),e=e(),z(),e),R={class:"ArticleList"},W={class:"container"},X={class:"info"},Y={class:"title"},Z={class:"lead"},tt={class:"articles"},et={key:0,class:"building"},at={class:"pagination"},it={class:"item"},ut=w(()=>t("svg",{xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",focusable:"false",viewBox:"0 0 24 24",class:"icon","data-v-b57a953c":""},[t("path",{d:"M15,19c-0.3,0-0.5-0.1-0.7-0.3l-6-6c-0.4-0.4-0.4-1,0-1.4l6-6c0.4-0.4,1-0.4,1.4,0s0.4,1,0,1.4L10.4,12l5.3,5.3c0.4,0.4,0.4,1,0,1.4C15.5,18.9,15.3,19,15,19z"})],-1)),nt=i(" \u4E0A\u4E00\u9875 "),st=[ut,nt],ct={class:"item"},dt=i(" \u4E0B\u4E00\u9875 "),ot=w(()=>t("svg",{xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",focusable:"false",viewBox:"0 0 24 24",class:"icon","data-v-b57a953c":""},[t("path",{d:"M9,19c-0.3,0-0.5-0.1-0.7-0.3c-0.4-0.4-0.4-1,0-1.4l5.3-5.3L8.3,6.7c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l6,6c0.4,0.4,0.4,1,0,1.4l-6,6C9.5,18.9,9.3,19,9,19z"})],-1)),rt=[dt,ot],lt=E({__name:"ArticleList",props:{articles:null},setup(e){const a=e,c=5,o=$(1),g=F(()=>{const d=(o.value-1)*c;return a.articles.slice(d,d+c)}),A=F(()=>o.value*c<a.articles.length),x=d=>{o.value+=d===1?1:-1};return(d,p)=>(n(),s("section",R,[t("div",W,[t("div",X,[t("h2",Y,[l(d.$slots,"title",{},void 0,!0)]),t("p",Z,[l(d.$slots,"lead",{},void 0,!0)])]),t("div",tt,[(n(!0),s(k,null,y(v(g),_=>(n(),s("div",{key:_.name,class:"article"},[r(Q,{article:_},null,8,["article"])]))),128)),v(g).length===0?(n(),s("div",et," \u{1F6A7} \u5EFA\u8BBE\u4E2D \u{1F3D7}\uFE0F ")):I("",!0),t("div",at,[t("div",{onClick:p[0]||(p[0]=_=>x(2))},[b(t("div",it,st,512),[[B,o.value>1]])]),t("div",{onClick:p[1]||(p[1]=_=>x(1))},[b(t("div",ct,rt,512),[[B,v(A)]])])])])])]))}});var m=h(lt,[["__scopeId","data-v-9b0f100a"]]);const pt={class:"ArticlePage"},_t=i("\u5199\u7684\u4E00\u4E9B\u4E1C\u897F"),vt=i("\u6DB5\u76D6\u5404\u4E2A\u77E5\u8BC6\u9762\u7684\u6587\u7AE0\uFF0C\u6709\u4E13\u4E1A\u5185\u5165\u4E5F\u6709\u5DE5\u4F5C\u8BB0\u5F55\u7684\uFF0C\u8FD8\u6709\u4E00\u4E9B\u6742\u4E8B\u513F"),ht=i("\u{1F516} \u4E13\u4E1A\u6587\u7AE0"),gt=i("\u5199\u7684\u4E00\u4E9B\u4E13\u4E1A\u6587\u7AE0\uFF0C\u7406\u8BBA\u603B\u7ED3\u3002\u82B1\u4E86\u70B9\u5FC3\u601D\u7684\u4E1C\u897F\u3002"),mt=i("\u{1F477} \u642C\u7816\u8BB0\u5F55"),Et=i("\u5728\u65E5\u5E38\u5DE5\u4F5C\u4E2D\u9047\u5230\u7684\u4E00\u4E9B\u5751\uFF0C\u4E3B\u8981\u662F\u5B9E\u6218\u8BB0\u5F55\u3002"),xt=i("\u{1F47D}\uFE0F \u6742\u4E03\u6742\u516B"),ft=i("\u5728\u65E5\u5E38\u5DE5\u4F5C\u4E2D\u9047\u5230\u7684\u4E00\u4E9B\u5751\uFF0C\u4E3B\u8981\u662F\u5B9E\u6218\u8BB0\u5F55\u3002"),Ft=E({__name:"ArticlePage",setup(e){const a={article:[{bannerUrl:"article/vitest-td.png",name:" TDesign \u5728 vitest \u7684\u5B9E\u8DF5",desc:"TDesign \u4ECE Jest \u5957\u4EF6\u8FC1\u79FB\u81F3 Vitest \u7684\u8FC7\u7A0B\uFF0C\u5EFA\u8BBE\u7EC4\u4EF6\u5E93\u5DE5\u7A0B\u5316\u6D4B\u8BD5\u65B9\u6848",linkUrl:"../article/record/vitest"},{bannerUrl:"article/figma.png",name:"\u{1F6A7} \u4ECE Figma api \u5230\u8BBE\u8BA1\u8F6F\u4EF6",desc:"\u4ECE figma \u6570\u636E\u7ED3\u6784\u4E3A\u8D77\u70B9\uFF0C\u5256\u8BBE\u8BA1\u8F6F\u4EF6\u57FA\u7840\u56FE\u5F62\u7684\u539F\u7406"},{bannerUrl:"article/composition-api.jpeg",name:"\u{1F6A7} TDesign CompositionAPI \u91CD\u6784",desc:"\u8BB0\u5F55\u4E86 TDesign \u5728 CompositionAPI \u7EC4\u4EF6\u91CD\u6784\u7684\u5F00\u59CB\uFF0C\u8FC7\u7A0B\u4E0E\u6536\u83B7"}],project:[{bannerUrl:"article/vite.webp",name:"webpack \u8FC1\u79FB Vite \u5B9E\u8DF5",desc:"\u9879\u76EE\u4E2D\u5207\u6362vite\u7684\u8BB0\u5F55\uFF0C\u5BF9\u4E8Ewebpack\u6765\u8BF4\uFF0Cvite\u662F\u4E2A\u5B9E\u6253\u5B9E\u7684\u6740\u624B",linkUrl:"../work/tencent/vite-build"}],personal:[{bannerUrl:"article/vite-press.webp",name:"Blog \u7FFB\u65B0\u8BB0\u5F55",desc:"\u5229\u7528\u5DE5\u4F5C\u4E4B\u4F59\u7FFB\u65B0\u4E86\u6211\u7684blog, \u7FFB\u65B0\u7684\u4E5F\u5DEE\u4E0D\u591A\u4E86,\u8BB0\u5F55\u4E00\u4E0B\u6574\u4E2A\u6D41\u7A0B",linkUrl:"../article/record/blog-refactor"},{bannerUrl:"article/deploy.jpeg",name:"\u5F00\u6E90\u7F51\u7AD9\u90E8\u7F72\u5DE5\u5177",desc:"\u7528\u8FC7 vercel, github pages, surge, \u817E\u8BAF\u4E91serverless \u7B49\u90E8\u7F72\u5DE5\u5177\uFF0C\u7B80\u5355\u603B\u7ED3\u4E00\u4E0B",linkUrl:"../article/record/deploy"}]};return(c,o)=>(n(),s("div",pt,[r(H,null,{title:u(()=>[_t]),lead:u(()=>[vt]),_:1}),r(m,{articles:a.article},{title:u(()=>[ht]),lead:u(()=>[gt]),_:1},8,["articles"]),r(m,{articles:a.project},{title:u(()=>[mt]),lead:u(()=>[Et]),_:1},8,["articles"]),r(m,{articles:a.personal},{title:u(()=>[xt]),lead:u(()=>[ft]),_:1},8,["articles"])]))}});var bt=h(Ft,[["__scopeId","data-v-d77c4050"]]);const At=JSON.parse('{"title":"\u6587\u7AE0","description":"","frontmatter":{"page":true,"layout":"page","title":"\u6587\u7AE0"},"headers":[],"relativePath":"article/index.md","lastUpdated":1655565965000}'),Bt={name:"article/index.md"},Ct=Object.assign(Bt,{setup(e){return(a,c)=>(n(),s("div",null,[r(bt)]))}});export{At as __pageData,Ct as default};
