import{f as r,y as i,z as d,h as l,q as _,A as u,o as p,c as f}from"../app.bc63bc0f.js";const A=r({__name:"VPCarbonAds",setup(m){const{theme:o}=i(),n=o.value.carbonAds,{isAsideEnabled:a}=d(),s=l();let t=!1;function c(){if(!t){t=!0;const e=document.createElement("script");e.id="_carbonads_js",e.src=`//cdn.carbonads.com/carbon.js?serve=${n.code}&placement=${n.placement}`,e.async=!0,s.value.appendChild(e)}}return n&&_(()=>{a.value?c():u(a,e=>e&&c())}),(e,b)=>(p(),f("div",{class:"VPCarbonAds",ref_key:"container",ref:s},null,512))}});export{A as default};
