import{F as a}from"./chunks/FigmaContainer.Cvz-boro.js";import{c as p,I as s,U as n,m as l,a as e,o as r}from"./chunks/framework.B9byA8Cw.js";const o=n('<h1 id="codesign-axure-项目总结" tabindex="-1">CoDesign Axure 项目总结 <a class="header-anchor" href="#codesign-axure-项目总结" aria-label="Permalink to &quot;CoDesign Axure 项目总结&quot;">​</a></h1><h2 id="项目介绍" tabindex="-1">项目介绍 <a class="header-anchor" href="#项目介绍" aria-label="Permalink to &quot;项目介绍&quot;">​</a></h2><p>Axure 是产品经理用来做原型设计的软件，CoDesign 已经上线过一版产品原型，但是存在以下问题：</p><ul><li>axure html 框架的 UI 与 CD 的 UI 不统一</li><li>无法接入 CD 通用的协作能力</li><li>没有对 axure 文件做解析，无法深度定制</li><li>存在安全合规隐患</li><li>上传速度慢，无法进行差量上传</li><li>寄存在设计稿模块中，非单独模块</li></ul><h3 id="axure-产品原型对比" tabindex="-1">Axure 产品原型对比 <a class="header-anchor" href="#axure-产品原型对比" aria-label="Permalink to &quot;Axure 产品原型对比&quot;">​</a></h3>',5),t=n('<p>支持的能力如下：</p><ul><li>通用功能： <ul><li>历史版本，操作记录</li><li>资料库，源文件</li><li>原型分享，页面搜索</li><li>页面评论，协作通知</li></ul></li><li>Axure拓展功能： <ul><li>备注说明</li><li>热区交互</li><li>画布缩放模式</li></ul></li></ul><h2 id="项目架构图" tabindex="-1">项目架构图 <a class="header-anchor" href="#项目架构图" aria-label="Permalink to &quot;项目架构图&quot;">​</a></h2>',3),i=n(`<ul><li>Axure Client: Axure 客户端，包含 8、9、10 版本</li><li>Axure Preview: Axure 客户端中 HTML 预览功能</li><li>CoDesign Axure Electron: CoDesign 客户端插件，上传用户 Axure preview 的数据源</li><li>Axure Html Zip: Axure 客户端生产的 Axure 源数据 zip 包</li><li>CoDesign Web Uploader: CoDesign 资源文件上传接入组件</li><li>Axure Resource Upload Plugin: Axure 资源上传插件，适配客户端 Axure preview 与 Axure zip 包。</li><li>CoDesign Axure SDK: 控制 Axure 内容在 CoDesign 中的数据加载与用户交互</li><li>CoDesign Web Axure: CoDesign 中产品原型 Axure 模块</li></ul><h2 id="axure-数据源解析" tabindex="-1">Axure 数据源解析 <a class="header-anchor" href="#axure-数据源解析" aria-label="Permalink to &quot;Axure 数据源解析&quot;">​</a></h2><p>首先需要对 axure 的数据进行解析，并做混淆处理。</p><h3 id="为什么要混淆" tabindex="-1">为什么要混淆 <a class="header-anchor" href="#为什么要混淆" aria-label="Permalink to &quot;为什么要混淆&quot;">​</a></h3><p>混淆处理的目的是为了能够把 <code>axure</code> 的渲染控制权集成在 axure sdk 中，这样可以保证站外不能引用改页面。Axure 的产物是一个 HTML 的 <code>zip</code> 包。</p><p>老版本的策略是，直接将 <code>zip</code> 包的内容传到 <code>cos</code> <code>上面，然后在CoDesign</code> 中的 <code>iframe</code> 嵌入，所以可以直接在站外访问这个页面。相当于一个静态资源在线化了。</p><h3 id="axure-数据源" tabindex="-1">Axure 数据源 <a class="header-anchor" href="#axure-数据源" aria-label="Permalink to &quot;Axure 数据源&quot;">​</a></h3><p>axure 产物目录结构如下</p><div class="language-txt line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki material-theme-palenight vp-code"><code><span class="line"><span>py-test</span></span>
<span class="line"><span>├── 7c0714f53210a7de0049487bdbe1b360.html // hash后的页面（需要修改内部内容）</span></span>
<span class="line"><span>├── 9a0dd486e186bcc473ac51b757c96834.html // hash后的页面（需要修改内部内容）</span></span>
<span class="line"><span>├── meta  // 生成的页面 meta.json, 前端页面加载对应资源链接（hash生成）</span></span>
<span class="line"><span>│   ├── 7c0714f53210a7de0049487bdbe1b360.json</span></span>
<span class="line"><span>│   └── 9a0dd486e186bcc473ac51b757c96834.json</span></span>
<span class="line"><span>├── data</span></span>
<span class="line"><span>│   ├── document.js</span></span>
<span class="line"><span>│   └── styles.css</span></span>
<span class="line"><span>├── files</span></span>
<span class="line"><span>│   ├── page_1</span></span>
<span class="line"><span>│   │   ├── data.js // 页面对应的资源文件（需要修改内部内容）</span></span>
<span class="line"><span>│   │   └── styles.css</span></span>
<span class="line"><span>│   └── page_1_1</span></span>
<span class="line"><span>│       ├── data.js // 页面对应的资源文件（需要修改内部内容）</span></span>
<span class="line"><span>│       └── styles.css</span></span>
<span class="line"><span>├── images</span></span>
<span class="line"><span>│   ├── page_1</span></span>
<span class="line"><span>│   │   └── u6.png</span></span>
<span class="line"><span>│   └── page_1_1</span></span>
<span class="line"><span>├── index.html</span></span>
<span class="line"><span>├── plugins // 自带的 plugins，无需更改内容</span></span>
<span class="line"><span>├── resources // 自带资源文件，无需更改内容</span></span>
<span class="line"><span>└── start_with_pages.html</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br></div></div><h3 id="源数据混淆" tabindex="-1">源数据混淆 <a class="header-anchor" href="#源数据混淆" aria-label="Permalink to &quot;源数据混淆&quot;">​</a></h3><div class="language-txt line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki material-theme-palenight vp-code"><code><span class="line"><span></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="codesign-接入-axure-模块" tabindex="-1">CoDesign 接入 Axure 模块 <a class="header-anchor" href="#codesign-接入-axure-模块" aria-label="Permalink to &quot;CoDesign 接入 Axure 模块&quot;">​</a></h2><p>Axure 这个模块在 CoDesign 中如何接入，如何做这一块的设计。</p><h3 id="web-端通信流程" tabindex="-1">web 端通信流程 <a class="header-anchor" href="#web-端通信流程" aria-label="Permalink to &quot;web 端通信流程&quot;">​</a></h3>`,14),c=l("h4",{id:"axure-容器",tabindex:"-1"},[e("Axure 容器 "),l("a",{class:"header-anchor",href:"#axure-容器","aria-label":'Permalink to "Axure 容器"'},"​")],-1),u=l("h4",{id:"评论组件容器",tabindex:"-1"},[e("评论组件容器 "),l("a",{class:"header-anchor",href:"#评论组件容器","aria-label":'Permalink to "评论组件容器"'},"​")],-1),b=n('<h3 id="如何运行" tabindex="-1">如何运行 <a class="header-anchor" href="#如何运行" aria-label="Permalink to &quot;如何运行&quot;">​</a></h3><p>在 CoDesign 怎么跑起来</p><h2 id="axure-sdk" tabindex="-1">Axure SDK <a class="header-anchor" href="#axure-sdk" aria-label="Permalink to &quot;Axure SDK&quot;">​</a></h2><p>描述 Axure SDK 的作用，已经开发过程中遇到的问题</p><h3 id="资源加载" tabindex="-1">资源加载 <a class="header-anchor" href="#资源加载" aria-label="Permalink to &quot;资源加载&quot;">​</a></h3><p>如何加载资源</p><h4 id="sdk-加载" tabindex="-1">SDK 加载 <a class="header-anchor" href="#sdk-加载" aria-label="Permalink to &quot;SDK 加载&quot;">​</a></h4><p>...</p><h4 id="js、css-资源加载" tabindex="-1">js、css 资源加载 <a class="header-anchor" href="#js、css-资源加载" aria-label="Permalink to &quot;js、css 资源加载&quot;">​</a></h4><p>...</p><h3 id="内容区域计算" tabindex="-1">内容区域计算 <a class="header-anchor" href="#内容区域计算" aria-label="Permalink to &quot;内容区域计算&quot;">​</a></h3><p>...</p><h3 id="axure-内置功能在-web-端的实现" tabindex="-1">Axure 内置功能在 Web 端的实现 <a class="header-anchor" href="#axure-内置功能在-web-端的实现" aria-label="Permalink to &quot;Axure 内置功能在 Web 端的实现&quot;">​</a></h3><p>Axure 内置功能在 web 端很多都需要重新实现</p><h4 id="axure-评论" tabindex="-1">Axure 评论 <a class="header-anchor" href="#axure-评论" aria-label="Permalink to &quot;Axure 评论&quot;">​</a></h4><p>...</p><h4 id="点击热区高亮" tabindex="-1">点击热区高亮 <a class="header-anchor" href="#点击热区高亮" aria-label="Permalink to &quot;点击热区高亮&quot;">​</a></h4><p>...</p><h3 id="画板模式" tabindex="-1">画板模式 <a class="header-anchor" href="#画板模式" aria-label="Permalink to &quot;画板模式&quot;">​</a></h3><p>...</p><h3 id="axure-8-9-10-兼容性如何处理" tabindex="-1">Axure 8，9，10 兼容性如何处理 <a class="header-anchor" href="#axure-8-9-10-兼容性如何处理" aria-label="Permalink to &quot;Axure 8，9，10 兼容性如何处理&quot;">​</a></h3><p>...</p><h2 id="基于-electron-的客户端上传插件" tabindex="-1">基于 Electron 的客户端上传插件 <a class="header-anchor" href="#基于-electron-的客户端上传插件" aria-label="Permalink to &quot;基于 Electron 的客户端上传插件&quot;">​</a></h2>',23),h=n('<h2 id="上传算法设计" tabindex="-1">上传算法设计 <a class="header-anchor" href="#上传算法设计" aria-label="Permalink to &quot;上传算法设计&quot;">​</a></h2><p>...</p><h4 id="老的上传算法" tabindex="-1">老的上传算法 <a class="header-anchor" href="#老的上传算法" aria-label="Permalink to &quot;老的上传算法&quot;">​</a></h4><p>...</p><h4 id="新的上传算法" tabindex="-1">新的上传算法 <a class="header-anchor" href="#新的上传算法" aria-label="Permalink to &quot;新的上传算法&quot;">​</a></h4><p>...</p><h3 id="插件自动更新流程" tabindex="-1">插件自动更新流程 <a class="header-anchor" href="#插件自动更新流程" aria-label="Permalink to &quot;插件自动更新流程&quot;">​</a></h3><p>...</p><h3 id="插件打包与签名" tabindex="-1">插件打包与签名 <a class="header-anchor" href="#插件打包与签名" aria-label="Permalink to &quot;插件打包与签名&quot;">​</a></h3><p>...</p><h2 id="内容安全加固" tabindex="-1">内容安全加固 <a class="header-anchor" href="#内容安全加固" aria-label="Permalink to &quot;内容安全加固&quot;">​</a></h2><h3 id="安全问题" tabindex="-1">安全问题 <a class="header-anchor" href="#安全问题" aria-label="Permalink to &quot;安全问题&quot;">​</a></h3><p>我们也遇到了一些安全问题：</p><ul><li>无法控制 axure html 在 CD 之外的访问，存在泄露风险（前文的混淆 axure 产物解决了这个问题）</li><li>用户盗用 Cos Token，上传非法的 html，导致大量安全单（原理是，拿到 token 以后，直接上传个有巨大安全隐患的 HTML，且访问域名为 qq.com），解决这个问题的方法就是，cos 拒绝 HTML 文件的上传。</li></ul><h3 id="采取的措施" tabindex="-1">采取的措施 <a class="header-anchor" href="#采取的措施" aria-label="Permalink to &quot;采取的措施&quot;">​</a></h3><p>采取了下面的措施：</p><ul><li>增加 csp 规则，资源加载限制（治标不治本）</li><li>axure-sdk 控制内容加载，本站外无法访问</li><li>HTML 转为 txt 加载，全站 cos 拒绝 html 上传</li></ul><h3 id="基于-blob-的-iframe-数据加载" tabindex="-1">基于 Blob 的 Iframe 数据加载 <a class="header-anchor" href="#基于-blob-的-iframe-数据加载" aria-label="Permalink to &quot;基于 Blob 的 Iframe 数据加载&quot;">​</a></h3>',18),d=n(`<p>核心点：</p><ul><li>文件上传：将 HTML 文件，通过 .txt 的格式上传至 cos，禁用 html 上传</li><li>内容加载：通过读取 txt 文件内容的形式，将内容转成 blob，iframe 通过加载 blob 可以读取到文件内容</li><li>无限嵌套的 iframe：axure 的 iframe 可以进行无限嵌套的，这边其实就是一个迭代，每一个子 iframe 都需要主动去发现子 iframe，并加载，代码如下：</li></ul><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight vp-code"><code><span class="line"><span style="color:#BABED8;">async </span><span style="color:#82AAFF;">loadChildIframe</span><span style="color:#BABED8;">() </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">  // 读取所有 iframe</span></span>
<span class="line"><span style="color:#C792EA;">  const</span><span style="color:#BABED8;"> allIframe</span><span style="color:#89DDFF;"> =</span><span style="color:#BABED8;"> document</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">querySelectorAll</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">iframe</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">  for</span><span style="color:#F07178;"> (</span><span style="color:#C792EA;">const</span><span style="color:#BABED8;"> iframe</span><span style="color:#89DDFF;"> of</span><span style="color:#BABED8;"> allIframe</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">    iframe</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">onload</span><span style="color:#89DDFF;"> =</span><span style="color:#C792EA;"> async</span><span style="color:#89DDFF;"> ()</span><span style="color:#C792EA;"> =&gt;</span><span style="color:#89DDFF;"> {</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">      // 拿到 path url</span></span>
<span class="line"><span style="color:#C792EA;">      const</span><span style="color:#BABED8;"> pathUrl</span><span style="color:#89DDFF;"> =</span><span style="color:#BABED8;"> iframe</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getAttribute</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">src</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">      // 拿到子框架对应的资源</span></span>
<span class="line"><span style="color:#C792EA;">      const</span><span style="color:#BABED8;"> blobUrl</span><span style="color:#89DDFF;"> =</span><span style="color:#89DDFF;font-style:italic;"> await</span><span style="color:#82AAFF;"> fetchPageBlobUrl</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">this.</span><span style="color:#BABED8;">baseUrl</span><span style="color:#89DDFF;"> +</span><span style="color:#BABED8;"> pathUrl</span><span style="color:#89DDFF;">,</span><span style="color:#89DDFF;"> this.</span><span style="color:#BABED8;">env</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">      // 加载 blobUrl</span></span>
<span class="line"><span style="color:#BABED8;">      iframe</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">setAttribute</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">src</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> blobUrl</span><span style="color:#89DDFF;"> +</span><span style="color:#89DDFF;"> \`</span><span style="color:#C3E88D;">#</span><span style="color:#89DDFF;">\${</span><span style="color:#BABED8;">pathUrl</span><span style="color:#89DDFF;">}</span><span style="color:#C3E88D;">-</span><span style="color:#89DDFF;">\${</span><span style="color:#BABED8;">iframe</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">id</span><span style="color:#89DDFF;">}\`</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">    };</span></span>
<span class="line"><span style="color:#89DDFF;">  }</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><ul><li>图片代理：由于图片的 url 继承自 iframe 的域名，但是通过 blob 的方式加载 html 是没有域名的，需要做一个图片代理，利用</li></ul><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight vp-code"><code><span class="line"><span style="color:#BABED8;">async </span><span style="color:#82AAFF;">proxyImage</span><span style="color:#BABED8;">() </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#C792EA;">  const</span><span style="color:#BABED8;"> allImage</span><span style="color:#89DDFF;"> =</span><span style="color:#BABED8;"> document</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">querySelectorAll</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">img</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">  for</span><span style="color:#F07178;"> (</span><span style="color:#C792EA;">const</span><span style="color:#BABED8;"> image</span><span style="color:#89DDFF;"> of</span><span style="color:#BABED8;"> allImage</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">    image</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">onerror</span><span style="color:#89DDFF;"> =</span><span style="color:#89DDFF;"> ()</span><span style="color:#C792EA;"> =&gt;</span><span style="color:#89DDFF;"> {</span></span>
<span class="line"><span style="color:#C792EA;">      const</span><span style="color:#BABED8;"> pathUrl</span><span style="color:#89DDFF;"> =</span><span style="color:#BABED8;"> image</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getAttribute</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">src</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#C792EA;">      const</span><span style="color:#BABED8;"> fileUrl</span><span style="color:#89DDFF;"> =</span><span style="color:#89DDFF;"> this.</span><span style="color:#BABED8;">baseUrl</span><span style="color:#89DDFF;"> +</span><span style="color:#BABED8;"> pathUrl</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#BABED8;">      image</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">setAttribute</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">src</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> fileUrl</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">    };</span></span>
<span class="line"><span style="color:#89DDFF;">  }</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h2 id="总结" tabindex="-1">总结 <a class="header-anchor" href="#总结" aria-label="Permalink to &quot;总结&quot;">​</a></h2><p>以上是在开发 axure 产品原型功能时遇到的各种问题，以及对应的解决办法。新版的 axure 产品原型上线后，得到了用户良好的反馈，成为了 CoDesign 第二大使用的模块。</p>`,7),_=JSON.parse('{"title":"CoDesign Axure 项目总结","description":"","frontmatter":{},"headers":[],"relativePath":"article/record/axure.md","filePath":"article/record/axure.md","lastUpdated":1710301558000}'),D={name:"article/record/axure.md"},f=Object.assign(D,{setup(F){return(y,m)=>(r(),p("div",null,[o,s(a,{url:"https://www.figma.com/file/E2utI9rEseFTc7tJ3Bbl9o/blog?type=whiteboard&node-id=4915-3033&t=oyHf5qQSFlbfnhzh-4"}),t,s(a,{url:"https://www.figma.com/file/E2utI9rEseFTc7tJ3Bbl9o/blog?type=whiteboard&node-id=1266%3A465&t=VhmgWJhomfVcVNWz-1"}),i,s(a,{url:"https://www.figma.com/file/E2utI9rEseFTc7tJ3Bbl9o/blog?type=whiteboard&node-id=1598-982&t=oyHf5qQSFlbfnhzh-4"}),c,s(a,{url:"https://www.figma.com/file/E2utI9rEseFTc7tJ3Bbl9o/blog?type=whiteboard&node-id=1598-1000&t=oyHf5qQSFlbfnhzh-4"}),u,s(a,{url:"https://www.figma.com/file/E2utI9rEseFTc7tJ3Bbl9o/blog?type=whiteboard&node-id=1598-1006&t=oyHf5qQSFlbfnhzh-4"}),b,s(a,{url:"https://www.figma.com/file/E2utI9rEseFTc7tJ3Bbl9o/blog?type=whiteboard&node-id=5341-3526&t=XYqh81JwF7tzbA93-4"}),h,s(a,{url:"https://www.figma.com/file/E2utI9rEseFTc7tJ3Bbl9o/blog?type=whiteboard&node-id=5341-3343&t=XYqh81JwF7tzbA93-4"}),d]))}});export{_ as __pageData,f as default};