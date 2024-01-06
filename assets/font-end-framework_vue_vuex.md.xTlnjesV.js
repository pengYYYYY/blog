import{_ as s,c as n,o as a,U as l}from"./chunks/framework.UId1oBXU.js";const b=JSON.parse('{"title":"vuex","description":"","frontmatter":{},"headers":[],"relativePath":"font-end-framework/vue/vuex.md","filePath":"font-end-framework/vue/vuex.md","lastUpdated":1704559210000}'),p={name:"font-end-framework/vue/vuex.md"},e=l(`<h1 id="vuex" tabindex="-1">vuex <a class="header-anchor" href="#vuex" aria-label="Permalink to &quot;vuex&quot;">​</a></h1><p>Vuex 实现了一个单向数据流，在全局拥有一个 State 存放数据，当组件要更改 State 中的数据时，必须通过 Mutation 提交修改信息，Mutation 同时提供了订阅者模式供外部插件调用获取 State 数据的更新。</p><p>重点：</p><ul><li>单例</li><li>集中式管理</li><li>可预测</li></ul><p>核心特性：</p><ul><li>state</li><li>getters</li><li>commit(提交数据更新) -&gt; mutations</li><li>dispatch(触发异步操作方法) -&gt; actions(异步操作数据更新)</li><li>modules(模块化)</li></ul><h2 id="流程" tabindex="-1">流程 <a class="header-anchor" href="#流程" aria-label="Permalink to &quot;流程&quot;">​</a></h2><p>vuex 本身是一颗状态树，组件使用 store 实例的 state 来访问这些状态，然后 <code>mutation</code> 方法来修改这些状态，并且只能用 <code>mutation</code> 来修改状态，在组件中调用 <code>commit</code> 方法提交 <code>mutation</code>；如果应用中有异步操作或者复杂逻辑组合，我们需要编写 <code>action</code>，执行结束如果有状态修改任然需要提交 <code>mutation</code>,组件中调用这些 <code>action</code> 使用 <code>dispatch</code> 方法派发。最后就是模块化，通过<code>modules</code>来分模块。</p><h2 id="基本原理" tabindex="-1">基本原理 <a class="header-anchor" href="#基本原理" aria-label="Permalink to &quot;基本原理&quot;">​</a></h2><p>是借用了 vue 的数据响应化特性实现的，它会利用 Vue 将 state 作为 data 对其进行响应化处理，从而使得这些状态发生变化的时，能够导致组件进行重新的渲染。</p><h2 id="event-bus" tabindex="-1">Event bus <a class="header-anchor" href="#event-bus" aria-label="Permalink to &quot;Event bus&quot;">​</a></h2><p>组件间传递参数可以使用 event bus 来做，实际上就是开了另外一个 vue，vuex 的本质也是如此。</p><h3 id="创建-eventbus" tabindex="-1">创建 EventBus <a class="header-anchor" href="#创建-eventbus" aria-label="Permalink to &quot;创建 EventBus&quot;">​</a></h3><h4 id="全局eventbus" tabindex="-1">全局EventBus <a class="header-anchor" href="#全局eventbus" aria-label="Permalink to &quot;全局EventBus&quot;">​</a></h4><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight vp-code"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#BABED8;"> Vue </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#89DDFF;"> &#39;</span><span style="color:#C3E88D;">Vue</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#C792EA;">var</span><span style="color:#BABED8;"> EventBus </span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;"> new</span><span style="color:#82AAFF;"> Vue</span><span style="color:#BABED8;">()</span></span>
<span class="line"><span style="color:#BABED8;">Object</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">defineProperties</span><span style="color:#BABED8;">(</span><span style="color:#FFCB6B;">Vue</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">prototype</span><span style="color:#89DDFF;">,</span><span style="color:#89DDFF;"> {</span></span>
<span class="line"><span style="color:#F07178;">  $bus</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;"> {</span></span>
<span class="line"><span style="color:#82AAFF;">    get</span><span style="color:#89DDFF;">:</span><span style="color:#C792EA;"> function</span><span style="color:#89DDFF;"> ()</span><span style="color:#89DDFF;"> {</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">      return</span><span style="color:#BABED8;"> EventBus</span></span>
<span class="line"><span style="color:#89DDFF;">    }</span></span>
<span class="line"><span style="color:#89DDFF;">  }</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#BABED8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">this.</span><span style="color:#BABED8;">$bus</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">$emit</span><span style="color:#BABED8;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">message</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">message from global bus</span><span style="color:#89DDFF;">&#39;</span><span style="color:#BABED8;">)</span></span>
<span class="line"><span style="color:#89DDFF;">this.</span><span style="color:#BABED8;">$bus</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">$on</span><span style="color:#BABED8;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">message</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;font-style:italic;"> msg</span><span style="color:#C792EA;"> =&gt;</span><span style="color:#89DDFF;"> {</span></span>
<span class="line"><span style="color:#BABED8;"> console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">message</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;">msg</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#BABED8;">)</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><h4 id="单文件eventbus" tabindex="-1">单文件EventBus <a class="header-anchor" href="#单文件eventbus" aria-label="Permalink to &quot;单文件EventBus&quot;">​</a></h4><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight vp-code"><code><span class="line"><span style="color:#676E95;font-style:italic;">//event-bus.js</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#BABED8;"> Vue </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#89DDFF;"> &#39;</span><span style="color:#C3E88D;">Vue</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#C792EA;"> const</span><span style="color:#BABED8;"> EventBus </span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;"> new</span><span style="color:#82AAFF;"> Vue</span><span style="color:#BABED8;">()</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><ul><li>组件A</li></ul><div class="language-vue line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki material-theme-palenight vp-code"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">  &lt;</span><span style="color:#F07178;">div</span><span style="color:#C792EA;"> id</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">example</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">    &lt;</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;"> @</span><span style="color:#C792EA;">click</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#BABED8;">sendMsg</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#BABED8;">send</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">  &lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#89DDFF;"> {</span><span style="color:#BABED8;">EventBus</span><span style="color:#89DDFF;">}</span><span style="color:#89DDFF;font-style:italic;"> from</span><span style="color:#89DDFF;"> &#39;</span><span style="color:#C3E88D;">../event-bus</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#89DDFF;font-style:italic;"> default</span><span style="color:#89DDFF;"> {</span></span>
<span class="line"><span style="color:#F07178;">  methods</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;"> {</span></span>
<span class="line"><span style="color:#F07178;">    sendMsg</span><span style="color:#89DDFF;"> ()</span><span style="color:#89DDFF;"> {</span></span>
<span class="line"><span style="color:#BABED8;">      EventBus</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">$emit</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">message</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#89DDFF;"> {</span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;"> &#39;</span><span style="color:#C3E88D;">kim</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> type</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;"> &#39;</span><span style="color:#C3E88D;">human</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#89DDFF;">    }</span></span>
<span class="line"><span style="color:#89DDFF;">  }</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><ul><li>组件B</li></ul><div class="language-vue line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki material-theme-palenight vp-code"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">  &lt;</span><span style="color:#F07178;">div</span><span style="color:#C792EA;"> id</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">example</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">    {{</span><span style="color:#BABED8;">msg</span><span style="color:#89DDFF;">}}</span></span>
<span class="line"><span style="color:#89DDFF;">  &lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#89DDFF;"> {</span><span style="color:#BABED8;">EventBus</span><span style="color:#89DDFF;">}</span><span style="color:#89DDFF;font-style:italic;"> from</span><span style="color:#89DDFF;"> &#39;</span><span style="color:#C3E88D;">../event-bus</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#89DDFF;font-style:italic;"> default</span><span style="color:#89DDFF;"> {</span></span>
<span class="line"><span style="color:#F07178;">  data</span><span style="color:#89DDFF;"> ()</span><span style="color:#89DDFF;"> {</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">    return</span><span style="color:#89DDFF;"> {</span></span>
<span class="line"><span style="color:#F07178;">      msg</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;"> &#39;</span><span style="color:#C3E88D;">123</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#89DDFF;">    }</span></span>
<span class="line"><span style="color:#89DDFF;">  },</span></span>
<span class="line"><span style="color:#F07178;">  mounted</span><span style="color:#89DDFF;"> ()</span><span style="color:#89DDFF;"> {</span></span>
<span class="line"><span style="color:#BABED8;">    EventBus</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">$on</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">message</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#89DDFF;"> (</span><span style="color:#BABED8;font-style:italic;">msg</span><span style="color:#89DDFF;">)</span><span style="color:#C792EA;"> =&gt;</span><span style="color:#89DDFF;"> {</span></span>
<span class="line"><span style="color:#BABED8;">      console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">receive message</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> msg</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#89DDFF;">    }</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#89DDFF;">  }</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div><h3 id="eventbus原理" tabindex="-1">eventBus原理 <a class="header-anchor" href="#eventbus原理" aria-label="Permalink to &quot;eventBus原理&quot;">​</a></h3><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight vp-code"><code><span class="line"><span style="color:#C792EA;">class</span><span style="color:#FFCB6B;"> Bus</span><span style="color:#89DDFF;"> {</span></span>
<span class="line"><span style="color:#C792EA;">  constructor</span><span style="color:#89DDFF;">()</span><span style="color:#89DDFF;"> {</span></span>
<span class="line"><span style="color:#89DDFF;">    this.</span><span style="color:#BABED8;">callbacks</span><span style="color:#89DDFF;"> =</span><span style="color:#89DDFF;"> {}</span></span>
<span class="line"><span style="color:#89DDFF;">  }</span></span>
<span class="line"><span style="color:#F07178;">  $on</span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;font-style:italic;">name</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;font-style:italic;"> fn</span><span style="color:#89DDFF;">)</span><span style="color:#89DDFF;"> {</span></span>
<span class="line"><span style="color:#89DDFF;">    this.</span><span style="color:#BABED8;">callbacks</span><span style="color:#F07178;">[</span><span style="color:#BABED8;">name</span><span style="color:#F07178;">] </span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;"> this.</span><span style="color:#BABED8;">callbacks</span><span style="color:#F07178;">[</span><span style="color:#BABED8;">name</span><span style="color:#F07178;">] </span><span style="color:#89DDFF;">||</span><span style="color:#F07178;"> []</span></span>
<span class="line"><span style="color:#89DDFF;">    this.</span><span style="color:#BABED8;">callbacks</span><span style="color:#F07178;">[</span><span style="color:#BABED8;">name</span><span style="color:#F07178;">]</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">push</span><span style="color:#F07178;">(</span><span style="color:#BABED8;">fn</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#89DDFF;">  }</span></span>
<span class="line"><span style="color:#F07178;">  $emit</span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;font-style:italic;">name</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;font-style:italic;"> args</span><span style="color:#89DDFF;">)</span><span style="color:#89DDFF;"> {</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">    if</span><span style="color:#F07178;"> (</span><span style="color:#89DDFF;">this.</span><span style="color:#BABED8;">callbacks</span><span style="color:#F07178;">[</span><span style="color:#BABED8;">name</span><span style="color:#F07178;">]) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">      this.</span><span style="color:#BABED8;">callbacks</span><span style="color:#F07178;">[</span><span style="color:#BABED8;">name</span><span style="color:#F07178;">]</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">forEach</span><span style="color:#F07178;">(</span><span style="color:#BABED8;font-style:italic;">cb</span><span style="color:#C792EA;"> =&gt;</span><span style="color:#82AAFF;"> cb</span><span style="color:#F07178;">(</span><span style="color:#BABED8;">args</span><span style="color:#F07178;">))</span></span>
<span class="line"><span style="color:#89DDFF;">    }</span></span>
<span class="line"><span style="color:#89DDFF;">  }</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div>`,23),o=[e];function t(c,r,F,D,i,y){return a(),n("div",null,o)}const m=s(p,[["render",t]]);export{b as __pageData,m as default};
