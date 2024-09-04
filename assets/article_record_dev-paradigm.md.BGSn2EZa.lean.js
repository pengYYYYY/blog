import{_ as n,c as a,R as l,o as p}from"./chunks/framework.3D9yNSa1.js";const y=JSON.parse('{"title":"CompositionAPI 组件开发范式","description":"","frontmatter":{},"headers":[],"relativePath":"article/record/dev-paradigm.md","filePath":"article/record/dev-paradigm.md","lastUpdated":1725463910000}'),e={name:"article/record/dev-paradigm.md"};function o(c,s,r,t,i,D){return p(),a("div",null,s[0]||(s[0]=[l(`<h1 id="compositionapi-组件开发范式" tabindex="-1">CompositionAPI 组件开发范式 <a class="header-anchor" href="#compositionapi-组件开发范式" aria-label="Permalink to &quot;CompositionAPI 组件开发范式&quot;">​</a></h1><h2 id="代码组织" tabindex="-1">代码组织 <a class="header-anchor" href="#代码组织" aria-label="Permalink to &quot;代码组织&quot;">​</a></h2><p>每个贡献者的代码风格都是不同的，在认同 <code>CompositionAPI</code> 理念的情况下。我们希望能够有较为标准的代码组织结构。让整体的代码保持一个大概的代码块风格，组件的维护会更加清晰，避免代码的堆积。</p><h3 id="合理的拆分" tabindex="-1">合理的拆分 <a class="header-anchor" href="#合理的拆分" aria-label="Permalink to &quot;合理的拆分&quot;">​</a></h3><p>以 <code>upload</code> 组件为例，代码块应该是分层设计的。第一步先进行合理的组件拆分，拆分的原则：</p><ol><li>按表现类型拆分出子组件：<code>upload</code> 组件存在多种表现类型，因此会衍生出4个子组件：<code>Dragger</code>、<code>ImageCard</code>、<code>FlowList</code>、<code>SingleFile</code></li><li>按不同的逻辑处理, 内聚出不同的 <code>hook</code> 与表现层代码挂钩：<code>useComponentsStatus</code>, <code>useImgPreview</code>, <code>useRemove</code>, <code>useDragger</code>, <code>useActions</code>。</li></ol><h3 id="组件状态管理" tabindex="-1">组件状态管理 <a class="header-anchor" href="#组件状态管理" aria-label="Permalink to &quot;组件状态管理&quot;">​</a></h3><ol><li>组件参数状态，<a href="https://github.com/Tencent/tdesign-vue-next/wiki/%E4%BD%BF%E7%94%A8-CompositionAPI-%E5%BC%80%E5%8F%91-TDesign-%E7%BB%84%E4%BB%B6#%E5%8F%8C%E5%90%91%E7%BB%91%E5%AE%9A%E8%AF%AD%E6%B3%95%E7%B3%96%E5%8F%97%E6%8E%A7%E9%9D%9E%E5%8F%97%E6%8E%A7" target="_blank" rel="noreferrer">双向绑定语法糖，受控，非受控</a></li><li>一个组件内置状态的上下文，集中管理组件内置的状态。散落在各个代码块的内部变量难以维护。这样会很清晰的知道组件的内置状态存在哪些。这一部分的代码可以通过 <code>provider</code> 向子组件注入，也可以使用 <code>context</code> 向子组件传递。</li></ol><h3 id="注意事项" tabindex="-1">注意事项 <a class="header-anchor" href="#注意事项" aria-label="Permalink to &quot;注意事项&quot;">​</a></h3><ul><li>类似这种简短计算的代码必要性不是很强</li></ul><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight vp-code"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#BABED8;"> isSingle </span><span style="color:#89DDFF;">=</span><span style="color:#82AAFF;"> computed</span><span style="color:#BABED8;">(</span><span style="color:#89DDFF;">()</span><span style="color:#C792EA;"> =&gt;</span><span style="color:#BABED8;"> props</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">theme </span><span style="color:#89DDFF;">===</span><span style="color:#89DDFF;"> &#39;</span><span style="color:#C3E88D;">single</span><span style="color:#89DDFF;">&#39;</span><span style="color:#BABED8;">)</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul><li><p>组件事件简化，因为 <code>TD</code> 的 <code>API</code> 在多个框架下使用，会融合一些 <code>react API</code> 的设计,在事件方面 <code>XXX evnt</code> 通常会伴随一个 <code>onXXX</code> 的函数参数,<a href="https://github.com/Tencent/tdesign-vue-next/wiki/TDesign--CompositionAPI-%E5%BC%80%E5%8F%91%E8%A7%84%E8%8C%83#%E7%BB%84%E4%BB%B6%E4%BA%8B%E4%BB%B6" target="_blank" rel="noreferrer">组件事件</a></p></li><li><p>在 <code>options API</code> 中，<code>methods</code> 可以直接暴露出去，不需要 <code>expose</code>，而 <code>setup</code> 中，需要按需 <code>expose</code> 相关函数。</p></li><li><p>注意逻辑的拆分，不要写长篇代码。做到高内聚，低耦合。</p></li></ul><h3 id="组件代码示例" tabindex="-1">组件代码示例 <a class="header-anchor" href="#组件代码示例" aria-label="Permalink to &quot;组件代码示例&quot;">​</a></h3><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight vp-code"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#89DDFF;"> {</span><span style="color:#BABED8;"> defineComponent</span><span style="color:#89DDFF;"> }</span><span style="color:#89DDFF;font-style:italic;"> from</span><span style="color:#89DDFF;"> &#39;</span><span style="color:#C3E88D;">vue</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#89DDFF;"> {</span><span style="color:#BABED8;"> TdUploadProps</span><span style="color:#89DDFF;"> }</span><span style="color:#89DDFF;font-style:italic;"> from</span><span style="color:#89DDFF;"> &#39;</span><span style="color:#C3E88D;">./type</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span><span style="color:#676E95;font-style:italic;"> // 标准的type文件</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#BABED8;"> props </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#89DDFF;"> &#39;</span><span style="color:#C3E88D;">./props</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span><span style="color:#676E95;font-style:italic;"> // 标准的props文件</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#89DDFF;"> {</span><span style="color:#BABED8;"> xxx</span><span style="color:#89DDFF;"> }</span><span style="color:#89DDFF;font-style:italic;"> from</span><span style="color:#89DDFF;"> &#39;</span><span style="color:#C3E88D;">./interface</span><span style="color:#89DDFF;">&#39;</span><span style="color:#676E95;font-style:italic;"> // 如果需要自定义一些 \`interface\`, 则统一放到 \`interface\` 文件当中</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 子组件</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#BABED8;"> Dragger </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#89DDFF;"> &#39;</span><span style="color:#C3E88D;">./dragger</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#BABED8;"> ImageCard </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#89DDFF;"> &#39;</span><span style="color:#C3E88D;">./image</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#BABED8;"> FlowList </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#89DDFF;"> &#39;</span><span style="color:#C3E88D;">./flow-list</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#BABED8;"> SingleFile </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#89DDFF;"> &#39;</span><span style="color:#C3E88D;">./single-file</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// hooks</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#89DDFF;"> {</span><span style="color:#BABED8;"> useConfig</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> usePrefixClass</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> useCommonClassName</span><span style="color:#89DDFF;"> }</span><span style="color:#89DDFF;font-style:italic;"> from</span><span style="color:#89DDFF;"> &#39;</span><span style="color:#C3E88D;">../hooks/useConfig</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span><span style="color:#676E95;font-style:italic;"> // 全局的config配置, classPrefix, commonClass</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#BABED8;"> useVModel </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#89DDFF;"> &#39;</span><span style="color:#C3E88D;">../hooks/useVModel</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span><span style="color:#676E95;font-style:italic;"> // 语法糖与受控处理</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#89DDFF;"> {</span><span style="color:#BABED8;"> useLogicHook</span><span style="color:#89DDFF;"> }</span><span style="color:#89DDFF;font-style:italic;"> from</span><span style="color:#89DDFF;"> &#39;</span><span style="color:#C3E88D;">./hook</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span><span style="color:#676E95;font-style:italic;"> // 纯逻辑代码的组件内部hook，按逻辑区分，方便后续的维护</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#89DDFF;font-style:italic;"> default</span><span style="color:#82AAFF;"> defineComponent</span><span style="color:#BABED8;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  name</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;"> &quot;</span><span style="color:#C3E88D;">TUpload</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#BABED8;">  props</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">  setup</span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;font-style:italic;">props</span><span style="color:#89DDFF;">:</span><span style="color:#FFCB6B;"> TdUploadProps</span><span style="color:#89DDFF;">)</span><span style="color:#89DDFF;"> {</span></span>
<span class="line"><span style="color:#C792EA;">    const</span><span style="color:#89DDFF;"> {</span><span style="color:#F07178;"> classPrefix</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> prefix</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> global</span><span style="color:#89DDFF;"> }</span><span style="color:#89DDFF;"> =</span><span style="color:#82AAFF;"> useConfig</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">upload</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#C792EA;">    const</span><span style="color:#BABED8;"> COMPONENT_NAME</span><span style="color:#89DDFF;"> =</span><span style="color:#82AAFF;"> usePrefixClass</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">upload</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#C792EA;">    const</span><span style="color:#89DDFF;"> {</span><span style="color:#BABED8;"> STATUS</span><span style="color:#89DDFF;"> }</span><span style="color:#89DDFF;"> =</span><span style="color:#82AAFF;"> useCommonClassName</span><span style="color:#F07178;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">    const</span><span style="color:#89DDFF;"> {</span><span style="color:#BABED8;"> files</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> modelValue</span><span style="color:#89DDFF;"> }</span><span style="color:#89DDFF;"> =</span><span style="color:#82AAFF;"> toRefs</span><span style="color:#F07178;">(</span><span style="color:#BABED8;">props</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    // \`files\` 的更新统一使用 \`setUploadValue\`</span></span>
<span class="line"><span style="color:#C792EA;">    const</span><span style="color:#89DDFF;"> [</span><span style="color:#BABED8;">uploadValue</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> setUploadValue</span><span style="color:#89DDFF;">]</span><span style="color:#89DDFF;"> =</span><span style="color:#82AAFF;"> useVModel</span><span style="color:#F07178;">(</span></span>
<span class="line"><span style="color:#BABED8;">      files</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#BABED8;">      modelValue</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#BABED8;">      props</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">defaultFiles</span><span style="color:#89DDFF;"> ||</span><span style="color:#F07178;"> []</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#BABED8;">      props</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">onChange</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">    )</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    // 组件上下文，集中管理组件内置的状态</span></span>
<span class="line"><span style="color:#C792EA;">    const</span><span style="color:#BABED8;"> uploadCtx</span><span style="color:#89DDFF;">:</span><span style="color:#FFCB6B;"> UploadCtxType</span><span style="color:#89DDFF;"> =</span><span style="color:#82AAFF;"> reactive</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">      uploadValue</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#BABED8;">      setUploadValue</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">      loadingFile</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;"> null,</span><span style="color:#676E95;font-style:italic;"> // 加载中的文件</span></span>
<span class="line"><span style="color:#F07178;">      toUploadFiles</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> []</span><span style="color:#89DDFF;">,</span><span style="color:#676E95;font-style:italic;"> // 等待上传的文件队列</span></span>
<span class="line"><span style="color:#F07178;">      errorMsg</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;"> &#39;&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">    }</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    // 逻辑层 \`hook\` 导出表现层需要的变量, 相关的effect函数。</span></span>
<span class="line"><span style="color:#C792EA;">    const</span><span style="color:#89DDFF;"> {</span><span style="color:#BABED8;"> logicVar</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> logicHandler</span><span style="color:#89DDFF;"> }</span><span style="color:#89DDFF;"> =</span><span style="color:#82AAFF;"> useLogicHook</span><span style="color:#F07178;">(</span><span style="color:#BABED8;">props</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> uploadCtx</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">    </span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    // 表现层 \`render\` 函数, 按模块拆分，避免主 \`render\` 函数内容过多。</span></span>
<span class="line"><span style="color:#C792EA;">    const</span><span style="color:#BABED8;"> renderContent</span><span style="color:#89DDFF;"> =</span><span style="color:#89DDFF;"> ()</span><span style="color:#C792EA;"> =&gt;</span><span style="color:#89DDFF;"> {</span></span>
<span class="line"><span style="color:#89DDFF;">      &lt;</span><span style="color:#F07178;">div</span><span style="color:#C792EA;"> class</span><span style="color:#89DDFF;">={</span><span style="color:#BABED8;">[COMPONENT_NAME</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">value</span><span style="color:#89DDFF;">,</span><span style="color:#89DDFF;"> {</span></span>
<span class="line"><span style="color:#BABED8;">         STATUS.</span><span style="color:#F07178;">disabled</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> props</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">disabled</span></span>
<span class="line"><span style="color:#89DDFF;">       }</span><span style="color:#BABED8;">]</span><span style="color:#89DDFF;">} </span><span style="color:#C792EA;">onClick</span><span style="color:#89DDFF;">={</span><span style="color:#BABED8;">logicHandler</span><span style="color:#89DDFF;">}&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">        {</span><span style="color:#BABED8;">logicVar</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">      &lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    // 可以直接在setup返回render函数，不需要再单独写 \`render\` 函数。同时 \`setup render\` 函数里面也有很完整的类型支持。需要对外暴露的方法可以使用 \`ctx.expose\`</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">    return</span><span style="color:#89DDFF;"> ()</span><span style="color:#C792EA;"> =&gt;</span><span style="color:#F07178;"> (</span></span>
<span class="line"><span style="color:#89DDFF;">      &lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;{</span><span style="color:#82AAFF;">renderContent</span><span style="color:#BABED8;">()</span><span style="color:#89DDFF;">}&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#F07178;">    )</span></span>
<span class="line"><span style="color:#89DDFF;">  },</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#BABED8;">)</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br></div></div><h2 id="tnode渲染" tabindex="-1">TNode渲染 <a class="header-anchor" href="#tnode渲染" aria-label="Permalink to &quot;TNode渲染&quot;">​</a></h2><p><a href="https://github.com/Tencent/tdesign-vue-next/wiki/%E4%B8%A4%E7%A7%8D-renderTNode-%E5%87%BD%E6%95%B0%E7%9A%84%E4%BD%BF%E7%94%A8%E6%96%B9%E5%BC%8F" target="_blank" rel="noreferrer">TNode 介绍</a></p><p>为 <code>TNode</code> 的 <code>API</code> 中，需要使用 <code>useTNodeJSX</code> 得到渲染函数进行渲染，函数内会处理好 <code>props</code> <code>function props</code> 与插槽的关系。</p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight vp-code"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#89DDFF;"> {</span><span style="color:#BABED8;"> useTNodeJSX</span><span style="color:#89DDFF;"> }</span><span style="color:#89DDFF;font-style:italic;"> from</span><span style="color:#89DDFF;"> &#39;</span><span style="color:#C3E88D;">../hooks/tnode</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">defineComponent</span><span style="color:#BABED8;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  setup</span><span style="color:#89DDFF;">()</span><span style="color:#89DDFF;"> {</span></span>
<span class="line"><span style="color:#C792EA;">    const</span><span style="color:#BABED8;"> renderTNode</span><span style="color:#89DDFF;"> =</span><span style="color:#82AAFF;"> useTNodeJSX</span><span style="color:#F07178;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#C792EA;">    const</span><span style="color:#BABED8;"> renderChild</span><span style="color:#89DDFF;"> =</span><span style="color:#89DDFF;"> ()</span><span style="color:#C792EA;"> =&gt;</span><span style="color:#89DDFF;"> {</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">      return</span><span style="color:#82AAFF;"> renderTNode</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">default</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#89DDFF;">    }</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">    return</span><span style="color:#89DDFF;"> ()</span><span style="color:#C792EA;"> =&gt;</span><span style="color:#F07178;"> (</span></span>
<span class="line"><span style="color:#89DDFF;">      &lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#BABED8;">        // 两种写法</span></span>
<span class="line"><span style="color:#89DDFF;">        {</span><span style="color:#82AAFF;">renderTNode</span><span style="color:#BABED8;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">TNodeName</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> options)</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">        {</span><span style="color:#82AAFF;">renderChild</span><span style="color:#BABED8;">()</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">      &lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#F07178;">    )</span></span>
<span class="line"><span style="color:#89DDFF;">  },</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#BABED8;">)</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><h2 id="组件库配置项" tabindex="-1">组件库配置项 <a class="header-anchor" href="#组件库配置项" aria-label="Permalink to &quot;组件库配置项&quot;">​</a></h2><p>统一使用 <code>useConfig</code>, <code>useConfig</code> 会导出 <code>global</code>, <code>classPrefix</code>, <code>t</code>。</p><p>在很多情况下你可能只需要导出一个带prefix的类名，你可以使用 <code>usePrefixClass</code>。</p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight vp-code"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#BABED8;"> COMPONENT_NAME </span><span style="color:#89DDFF;">=</span><span style="color:#82AAFF;"> usePrefixClass</span><span style="color:#BABED8;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">componentName</span><span style="color:#89DDFF;">&#39;</span><span style="color:#BABED8;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 也可以只得到一个classPrefix</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#BABED8;"> classPrefix </span><span style="color:#89DDFF;">=</span><span style="color:#82AAFF;"> usePrefixClass</span><span style="color:#BABED8;">()</span><span style="color:#89DDFF;">;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p><code>commonClass</code> 集合了一些公用的 <code>class</code>。分为 <code>SIZE</code> 和 <code>STATUS</code>。</p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight vp-code"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#89DDFF;"> {</span><span style="color:#BABED8;"> SIZE</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> STATUS </span><span style="color:#89DDFF;">}</span><span style="color:#89DDFF;"> =</span><span style="color:#82AAFF;"> useCommonClassName</span><span style="color:#BABED8;">()</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><code>ConfigReceiverMixins</code> 会被废弃。</p><h2 id="双向绑定语法糖-受控-非受控" tabindex="-1">双向绑定语法糖，受控，非受控 <a class="header-anchor" href="#双向绑定语法糖-受控-非受控" aria-label="Permalink to &quot;双向绑定语法糖，受控，非受控&quot;">​</a></h2><p>逐渐放弃使用高阶函数 <code>mapProps</code>。实现 <code>v-model</code> 使用 <code>useVModel</code>, 实现 <code>v-model:xx</code> 使用 <code>useDefaultValue</code>。这两个 <code>hook</code> 在内部会处理好受控与非受控，组件内部使用暴露出来的值即可，同时对外的参数更新也需要使用暴露出的函数进行更新。</p><h3 id="usevmodel" tabindex="-1">useVModel <a class="header-anchor" href="#usevmodel" aria-label="Permalink to &quot;useVModel&quot;">​</a></h3><p>用于实现主参数的双向绑定 <code>v-model</code>，受控与非受控</p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight vp-code"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#BABED8;"> useVModel </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#89DDFF;"> &#39;</span><span style="color:#C3E88D;">../hooks/useVModel</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#89DDFF;"> {</span><span style="color:#BABED8;"> value</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> modelValue </span><span style="color:#89DDFF;">}</span><span style="color:#89DDFF;"> =</span><span style="color:#82AAFF;"> toRefs</span><span style="color:#BABED8;">(props)</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#89DDFF;"> [</span><span style="color:#BABED8;">innerValue</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> setInnerValue</span><span style="color:#89DDFF;">]</span><span style="color:#89DDFF;"> =</span><span style="color:#82AAFF;"> useVModel</span><span style="color:#BABED8;">(</span></span>
<span class="line"><span style="color:#BABED8;">  value</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#BABED8;">  modelValue</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#BABED8;">  props</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">defaultValue</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#BABED8;">  props</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">onChange</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">  &#39;</span><span style="color:#C3E88D;">propsName</span><span style="color:#89DDFF;">&#39;</span><span style="color:#676E95;font-style:italic;"> // 可选参数，用于类似 \`files\` 这种别名主双向绑定参数的处理</span></span>
<span class="line"><span style="color:#BABED8;">)</span><span style="color:#89DDFF;">;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h3 id="usedefaultvalue" tabindex="-1">useDefaultValue <a class="header-anchor" href="#usedefaultvalue" aria-label="Permalink to &quot;useDefaultValue&quot;">​</a></h3><p>用于实现辅助参数的双向绑定<code>v-model:visible</code>，受控与非受控</p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight vp-code"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#BABED8;"> useDefaultValue </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#89DDFF;"> &#39;</span><span style="color:#C3E88D;">../hooks/useDefaultValue</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#89DDFF;"> {</span><span style="color:#BABED8;"> visible </span><span style="color:#89DDFF;">}</span><span style="color:#89DDFF;"> =</span><span style="color:#82AAFF;"> toRefs</span><span style="color:#BABED8;">(props)</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#89DDFF;"> [</span><span style="color:#BABED8;">innerVisible</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> setInnerVisible</span><span style="color:#89DDFF;">]</span><span style="color:#89DDFF;"> =</span><span style="color:#82AAFF;"> useDefaultValue</span><span style="color:#BABED8;">(</span></span>
<span class="line"><span style="color:#BABED8;">  visible</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#BABED8;">  props</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">defaultVisible</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#BABED8;">  props</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">onVisibleChange</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">  &#39;</span><span style="color:#C3E88D;">visible</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#BABED8;">)</span><span style="color:#89DDFF;">;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h2 id="组件事件" tabindex="-1">组件事件 <a class="header-anchor" href="#组件事件" aria-label="Permalink to &quot;组件事件&quot;">​</a></h2><p>在 <code>TDesign vue</code> 中事件都会存在 <code>onXXX</code> 的 <code>props</code> 函数，可以通过 <code>props.onXXX</code> 的方法进行处理。对于 <code>props</code> 中定义了的事件不需要再调用 <code>emit(&#39;xxx&#39;)</code>.</p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight vp-code"><code><span class="line"><span style="color:#676E95;font-style:italic;">// props</span></span>
<span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">  onChange</span><span style="color:#89DDFF;">?:</span><span style="color:#89DDFF;"> (...</span><span style="color:#BABED8;font-style:italic;">args</span><span style="color:#89DDFF;">)</span><span style="color:#C792EA;"> =&gt;</span><span style="color:#89DDFF;"> {};</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// tsx</span></span>
<span class="line"><span style="color:#82AAFF;">setup</span><span style="color:#BABED8;">(props) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">  props</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">onChange</span><span style="color:#89DDFF;">?.</span><span style="color:#F07178;">(</span><span style="color:#BABED8;">args</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h2 id="provide与inject" tabindex="-1">Provide与inject <a class="header-anchor" href="#provide与inject" aria-label="Permalink to &quot;Provide与inject&quot;">​</a></h2><ol><li>合理使用 <code>Provide</code> 与 <code>inject</code>，按需 <code>provide</code>，避免 <code>children</code> 调用 <code>$parent</code> 这类代码.</li><li>合理的 <code>InjectionKey</code>，需要注意 <code>InjectionKey</code> 的导出位置，避免循环引用。</li></ol><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight vp-code"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#89DDFF;"> {</span><span style="color:#BABED8;"> InjectionKey</span><span style="color:#89DDFF;"> }</span><span style="color:#89DDFF;font-style:italic;"> from</span><span style="color:#89DDFF;"> &#39;</span><span style="color:#C3E88D;">vue</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#BABED8;"> CheckboxGroupInjectionKey</span><span style="color:#89DDFF;">:</span><span style="color:#FFCB6B;"> InjectionKey</span><span style="color:#89DDFF;">&lt;{</span></span>
<span class="line"><span style="color:#F07178;">  name</span><span style="color:#89DDFF;">:</span><span style="color:#FFCB6B;"> string</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  componentProps</span><span style="color:#89DDFF;">:</span><span style="color:#FFCB6B;"> string</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">  xxxProvideProps</span><span style="color:#89DDFF;">:</span><span style="color:#FFCB6B;"> string</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">}&gt;</span><span style="color:#89DDFF;"> =</span><span style="color:#82AAFF;"> Symbol</span><span style="color:#BABED8;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">componentName</span><span style="color:#89DDFF;">&#39;</span><span style="color:#BABED8;">)</span><span style="color:#89DDFF;">;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div>`,39)]))}const d=n(e,[["render",o]]);export{y as __pageData,d as default};
