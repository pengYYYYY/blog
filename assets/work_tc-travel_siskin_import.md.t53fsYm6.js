import{_ as s,c as a,o as n,U as l}from"./chunks/framework.UId1oBXU.js";const p="/blog/assets/fB0ZEQ.QJkVqIcP.png",u=JSON.parse('{"title":"按需加载","description":"","frontmatter":{},"headers":[],"relativePath":"work/tc-travel/siskin/import.md","filePath":"work/tc-travel/siskin/import.md","lastUpdated":1704559210000}'),e={name:"work/tc-travel/siskin/import.md"},o=l(`<h1 id="按需加载" tabindex="-1">按需加载 <a class="header-anchor" href="#按需加载" aria-label="Permalink to &quot;按需加载&quot;">​</a></h1><h2 id="组件库按需加载" tabindex="-1">组件库按需加载 <a class="header-anchor" href="#组件库按需加载" aria-label="Permalink to &quot;组件库按需加载&quot;">​</a></h2><p>目前按需加载有两种方式实现。</p><ul><li>使用<code>babel-plugin-import</code>插件来自动按需引入</li><li>提供<code>es module</code>版本，开启<code>tree shaking</code></li></ul><h3 id="babel-plugin-import" tabindex="-1">babel-plugin-import <a class="header-anchor" href="#babel-plugin-import" aria-label="Permalink to &quot;babel-plugin-import&quot;">​</a></h3><p><code>babel-plugin-import</code>是<code>ant-design</code>团队出的一个<code>babel</code>插件，主要用于模块的按需加载。其原理就是将直接引入的方式通过<code>babel</code>转化成按需引入的方式。如果<code>css</code>也需要按需加载，也会注入<code>css</code>引用代码。</p><p>例如</p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight vp-code"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#89DDFF;"> {</span><span style="color:#BABED8;"> Button</span><span style="color:#89DDFF;"> }</span><span style="color:#89DDFF;font-style:italic;"> from</span><span style="color:#89DDFF;"> &#39;</span><span style="color:#C3E88D;">antd</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>转换成</p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight vp-code"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#BABED8;"> Button </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#89DDFF;"> &#39;</span><span style="color:#C3E88D;">antd/es/button</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#89DDFF;"> &#39;</span><span style="color:#C3E88D;">antd/es/button/style</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="tree-shaking" tabindex="-1">tree shaking <a class="header-anchor" href="#tree-shaking" aria-label="Permalink to &quot;tree shaking&quot;">​</a></h3><p>如果组件库提供了<code>es module</code>版本，并开启了<code>tree shaking</code>，那么不需要<code>babel-plugin-import</code>，也可以达到按需加载的目的，这个方法只针对于<code>js</code>，对于样式的按需加载仍需要手动引入。 当然<code>babel-plugin-import</code>和<code>tree shaking</code> 也可以并存使用。但大部分情况并存使用与单独使用体积差距不是很大。 例如：</p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight vp-code"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#89DDFF;"> {</span><span style="color:#BABED8;"> Button</span><span style="color:#89DDFF;"> }</span><span style="color:#89DDFF;font-style:italic;"> from</span><span style="color:#89DDFF;"> &#39;</span><span style="color:#C3E88D;">antd</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#89DDFF;"> &#39;</span><span style="color:#C3E88D;">antd/es/button/style</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p><code>webpack</code>可以通过在<code>package.json</code>设置<code>sideEffects: false</code>,开启<code>tree shaking</code>。</p><h2 id="babel-plugin-import原理" tabindex="-1">babel-plugin-import原理 <a class="header-anchor" href="#babel-plugin-import原理" aria-label="Permalink to &quot;babel-plugin-import原理&quot;">​</a></h2><p>babel-plugin-import 提供组件的按需加载</p><p>将</p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight vp-code"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#89DDFF;"> {</span><span style="color:#BABED8;"> Button</span><span style="color:#89DDFF;"> }</span><span style="color:#89DDFF;font-style:italic;"> from</span><span style="color:#89DDFF;"> &#39;</span><span style="color:#C3E88D;">antd</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>转换成</p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight vp-code"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#BABED8;"> Button </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#89DDFF;"> &#39;</span><span style="color:#C3E88D;">antd/es/button</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#89DDFF;"> &#39;</span><span style="color:#C3E88D;">antd/es/button/style</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="第一步-依赖收集" tabindex="-1">第一步 依赖收集 <a class="header-anchor" href="#第一步-依赖收集" aria-label="Permalink to &quot;第一步 依赖收集&quot;">​</a></h3><p>babel-plubin-import 会在 ImportDeclaration 里将所有的 specifier 收集起来。大致的AST如下:</p><p><img src="`+p+`" alt="img"></p><p>可以从这个 ImportDeclaration 语句中提取几个关键点：</p><ul><li>source.value: antd</li><li>specifier.local.name: Button</li><li>specifier.local.name: Rate</li></ul><p>代码</p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight vp-code"><code><span class="line"><span style="color:#82AAFF;">ImportDeclaration</span><span style="color:#BABED8;">(path</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> state) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#C792EA;">  const</span><span style="color:#89DDFF;"> {</span><span style="color:#BABED8;"> node</span><span style="color:#89DDFF;"> }</span><span style="color:#89DDFF;"> =</span><span style="color:#BABED8;"> path</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">  if</span><span style="color:#F07178;"> (</span><span style="color:#89DDFF;">!</span><span style="color:#BABED8;">node</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#C792EA;">  const</span><span style="color:#89DDFF;"> {</span><span style="color:#BABED8;"> value</span><span style="color:#89DDFF;"> }</span><span style="color:#89DDFF;"> =</span><span style="color:#BABED8;"> node</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">source</span><span style="color:#89DDFF;">;</span><span style="color:#676E95;font-style:italic;"> // 代码里 import 的包名</span></span>
<span class="line"><span style="color:#C792EA;">  const</span><span style="color:#89DDFF;"> {</span><span style="color:#BABED8;"> libraryName</span><span style="color:#89DDFF;"> }</span><span style="color:#89DDFF;"> =</span><span style="color:#89DDFF;"> this;</span><span style="color:#676E95;font-style:italic;"> // 插件 options 的包名</span></span>
<span class="line"><span style="color:#C792EA;">  const</span><span style="color:#89DDFF;"> {</span><span style="color:#BABED8;"> types</span><span style="color:#89DDFF;"> }</span><span style="color:#89DDFF;"> =</span><span style="color:#89DDFF;"> this;</span><span style="color:#676E95;font-style:italic;"> // babel-type 工具函数</span></span>
<span class="line"><span style="color:#C792EA;">  const</span><span style="color:#BABED8;"> pluginState</span><span style="color:#89DDFF;"> =</span><span style="color:#89DDFF;"> this.</span><span style="color:#82AAFF;">getPluginState</span><span style="color:#F07178;">(</span><span style="color:#BABED8;">state</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span><span style="color:#676E95;font-style:italic;"> // 获取状态</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">  if</span><span style="color:#F07178;"> (</span><span style="color:#BABED8;">value</span><span style="color:#89DDFF;"> ===</span><span style="color:#BABED8;"> libraryName</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">    node</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">specifiers</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">forEach</span><span style="color:#F07178;">(</span><span style="color:#BABED8;font-style:italic;">spec</span><span style="color:#C792EA;"> =&gt;</span><span style="color:#89DDFF;"> {</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">      if</span><span style="color:#F07178;"> (</span><span style="color:#BABED8;">types</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">isImportSpecifier</span><span style="color:#F07178;">(</span><span style="color:#BABED8;">spec</span><span style="color:#F07178;">)) </span><span style="color:#89DDFF;">{</span><span style="color:#676E95;font-style:italic;"> // 判断是不是 ImportSpecifier 类型的节点，也就是是否是大括号的</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">        // 收集依赖</span></span>
<span class="line"><span style="color:#BABED8;">        pluginState</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">specified</span><span style="color:#F07178;">[</span><span style="color:#BABED8;">spec</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">local</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">name</span><span style="color:#F07178;">] </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> spec</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">imported</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">name</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">      }</span><span style="color:#89DDFF;font-style:italic;"> else</span><span style="color:#89DDFF;"> {</span><span style="color:#F07178;"> </span></span>
<span class="line"><span style="color:#BABED8;">        pluginState</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">libraryObjs</span><span style="color:#F07178;">[</span><span style="color:#BABED8;">spec</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">local</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">name</span><span style="color:#F07178;">] </span><span style="color:#89DDFF;">=</span><span style="color:#FF9CAC;"> true</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">      }</span></span>
<span class="line"><span style="color:#89DDFF;">    }</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#BABED8;">    pluginState</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">pathsToRemove</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">push</span><span style="color:#F07178;">(</span><span style="color:#BABED8;">path</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">  }</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><p>在 <code>babel</code> 遍历了所有的 <code>ImportDeclaration</code> 节点之后，就收集好了依赖关系，下一步就是如何收集。</p><h3 id="第二步-判断是否使用" tabindex="-1">第二步 判断是否使用 <a class="header-anchor" href="#第二步-判断是否使用" aria-label="Permalink to &quot;第二步 判断是否使用&quot;">​</a></h3><p>收集了依赖关系之后，得要判断一下这些 <code>import</code> 的变量是否被使用到了:</p><p>首先会进行如下的转换</p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight vp-code"><code><span class="line"><span style="color:#BABED8;">ReactDOM</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">render</span><span style="color:#BABED8;">(</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">Button</span><span style="color:#89DDFF;">&gt;</span><span style="color:#BABED8;">Hello</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#FFCB6B;">Button</span><span style="color:#89DDFF;">&gt;</span><span style="color:#BABED8;">)</span><span style="color:#89DDFF;">;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>转换到</p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight vp-code"><code><span class="line"><span style="color:#BABED8;">React</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">createElement</span><span style="color:#BABED8;">(Button</span><span style="color:#89DDFF;">,</span><span style="color:#89DDFF;"> null,</span><span style="color:#89DDFF;"> &quot;</span><span style="color:#C3E88D;">Hello</span><span style="color:#89DDFF;">&quot;</span><span style="color:#BABED8;">)</span><span style="color:#89DDFF;">;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>判断其是否进行了转换</p><h3 id="第三步-生成引入代码-核心" tabindex="-1">第三步 生成引入代码（核心） <a class="header-anchor" href="#第三步-生成引入代码-核心" aria-label="Permalink to &quot;第三步 生成引入代码（核心）&quot;">​</a></h3><p>第一步和第二步主要的工作是找到需要被插件处理的依赖关系：</p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight vp-code"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#89DDFF;"> {</span><span style="color:#BABED8;"> Button</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> Rate</span><span style="color:#89DDFF;"> }</span><span style="color:#89DDFF;font-style:italic;"> from</span><span style="color:#89DDFF;"> &#39;</span><span style="color:#C3E88D;">antd</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#BABED8;">ReactDOM</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">render</span><span style="color:#BABED8;">(</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">Button</span><span style="color:#89DDFF;">&gt;</span><span style="color:#BABED8;">Hello</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#FFCB6B;">Button</span><span style="color:#89DDFF;">&gt;</span><span style="color:#BABED8;">)</span><span style="color:#89DDFF;">;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p><code>Button</code> 组件使用到了，<code>Rate</code> 在代码里未使用。所以插件要做的也只是自动引入 <code>Button</code> 的代码和样式即可。</p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight vp-code"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#89DDFF;"> {</span><span style="color:#BABED8;"> Button</span><span style="color:#89DDFF;"> }</span><span style="color:#89DDFF;font-style:italic;"> from</span><span style="color:#89DDFF;"> &#39;</span><span style="color:#C3E88D;">antd</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>转换成</p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight vp-code"><code><span class="line"><span style="color:#C792EA;">var</span><span style="color:#BABED8;"> _button </span><span style="color:#89DDFF;">=</span><span style="color:#82AAFF;"> require</span><span style="color:#BABED8;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">antd/lib/button</span><span style="color:#89DDFF;">&#39;</span><span style="color:#BABED8;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#82AAFF;">require</span><span style="color:#BABED8;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">antd/lib/button/style</span><span style="color:#89DDFF;">&#39;</span><span style="color:#BABED8;">)</span><span style="color:#89DDFF;">;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p><code>babel-plugin-import</code> 和普遍的 <code>babel</code> 插件一样，会遍历代码的 <code>ast</code>，然后在 <code>ast</code> 上做了一些事情：</p><ol><li>收集依赖：找到<code>importDeclaration</code>，分析出包 <code>x</code> 和依赖 <code>y,z</code>,例如 <code>x</code> 和 <code>libraryName</code> 是一致的，就将其收集起来。</li><li>判断是否使用：判断收集到的依赖是否被使用，如果有使用就调用 <code>importMethod</code> 生成新的 <code>import</code> 语句。</li><li>生成引入代码：根据配置项生成代码和样式的 <code>import</code> 语句</li></ol>`,44),t=[o];function c(r,i,D,F,y,d){return n(),a("div",null,t)}const m=s(e,[["render",c]]);export{u as __pageData,m as default};
