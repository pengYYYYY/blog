import{_ as r,c as t,R as a,o as s}from"./chunks/framework.3D9yNSa1.js";const m=JSON.parse('{"title":"物理引擎","description":"","frontmatter":{},"headers":[],"relativePath":"graphics/engine/physics.md","filePath":"graphics/engine/physics.md","lastUpdated":1725463910000}'),i={name:"graphics/engine/physics.md"};function n(l,e,o,c,d,p){return s(),t("div",null,e[0]||(e[0]=[a('<h1 id="物理引擎" tabindex="-1">物理引擎 <a class="header-anchor" href="#物理引擎" aria-label="Permalink to &quot;物理引擎&quot;">​</a></h1><p>2D 的物理引擎，matter.js</p><ul><li>demo：<a href="https://web-render-starter.vercel.app/matter" target="_blank" rel="noreferrer">https://web-render-starter.vercel.app/matter</a></li><li>代码：<a href="https://github.com/PengYYYYY/web-render-starter/blob/master/src/pages/matter.tsx" target="_blank" rel="noreferrer">https://github.com/PengYYYYY/web-render-starter/blob/master/src/pages/matter.tsx</a></li></ul><h2 id="基础概念" tabindex="-1">基础概念 <a class="header-anchor" href="#基础概念" aria-label="Permalink to &quot;基础概念&quot;">​</a></h2><ul><li>引擎（Engine）：引擎 <code>Engine</code> 是 <code>Matter.js</code> 的核心组件，用于管理物理世界中的所有对象、计算物体的运动和相互作用。用来模拟真实环境的。</li><li>渲染器（Render）：渲染器 <code>Render</code> 用于将物理世界中的对象可视化，将物体渲染到屏幕上。</li><li>复合体（Composite）：是包含多个刚体和约束的容器，它们可以作为单个物理对象进行操作。</li><li>刚体（Body）：表示具有物理属性的实体，如形状、质量和速度等。刚体可以是各种形状，例如矩形、圆形、多边形等。</li><li>约束（Constraint）：用于约束刚体的相对运动，例如让两个刚体之间的距离保持不变、限制旋转等。</li><li>循环模块（Runner）：<code>Runner</code> 用于管理和控制物理引擎的主循环。</li></ul>',5)]))}const g=r(i,[["render",n]]);export{m as __pageData,g as default};
