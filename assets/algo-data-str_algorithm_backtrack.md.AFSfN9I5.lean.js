import{_ as n,c as a,R as l,o as p}from"./chunks/framework.3D9yNSa1.js";const i=JSON.parse('{"title":"回溯","description":"","frontmatter":{},"headers":[],"relativePath":"algo-data-str/algorithm/backtrack.md","filePath":"algo-data-str/algorithm/backtrack.md","lastUpdated":1725463910000}'),o={name:"algo-data-str/algorithm/backtrack.md"};function e(t,s,r,c,F,D){return p(),a("div",null,s[0]||(s[0]=[l(`<h1 id="回溯" tabindex="-1">回溯 <a class="header-anchor" href="#回溯" aria-label="Permalink to &quot;回溯&quot;">​</a></h1><h2 id="数组的组合" tabindex="-1">数组的组合 <a class="header-anchor" href="#数组的组合" aria-label="Permalink to &quot;数组的组合&quot;">​</a></h2><p>给一个数组 [1, 2, 3, 4, 5]，目标值为 6，输出 [ [ 1, 2, 3 ], [ 1, 5 ], [ 2, 4 ] ]</p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight vp-code"><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#82AAFF;"> getAllArrays</span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;font-style:italic;">arr</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;font-style:italic;"> target</span><span style="color:#89DDFF;">)</span><span style="color:#89DDFF;"> {</span></span>
<span class="line"><span style="color:#C792EA;">  function</span><span style="color:#82AAFF;"> backtrack</span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;font-style:italic;">start</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;font-style:italic;"> target</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;font-style:italic;"> path</span><span style="color:#89DDFF;">)</span><span style="color:#89DDFF;"> {</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">    if</span><span style="color:#F07178;"> (</span><span style="color:#BABED8;">target</span><span style="color:#89DDFF;"> ===</span><span style="color:#F78C6C;"> 0</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">      res</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">push</span><span style="color:#F07178;">(</span><span style="color:#BABED8;">path</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">      return</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">    }</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">    for</span><span style="color:#F07178;"> (</span><span style="color:#C792EA;">let</span><span style="color:#BABED8;"> i</span><span style="color:#89DDFF;"> =</span><span style="color:#BABED8;"> start</span><span style="color:#89DDFF;">;</span><span style="color:#BABED8;"> i</span><span style="color:#89DDFF;"> &lt;</span><span style="color:#BABED8;"> arr</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">length</span><span style="color:#89DDFF;">;</span><span style="color:#BABED8;"> i</span><span style="color:#89DDFF;">++</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">      if</span><span style="color:#F07178;"> (</span><span style="color:#BABED8;">arr</span><span style="color:#F07178;">[</span><span style="color:#BABED8;">i</span><span style="color:#F07178;">] </span><span style="color:#89DDFF;">&gt;</span><span style="color:#BABED8;"> target</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">        break</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">      }</span></span>
<span class="line"><span style="color:#82AAFF;">      backtrack</span><span style="color:#F07178;">(</span><span style="color:#BABED8;">i</span><span style="color:#89DDFF;"> +</span><span style="color:#F78C6C;"> 1</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> target</span><span style="color:#89DDFF;"> -</span><span style="color:#BABED8;"> arr</span><span style="color:#F07178;">[</span><span style="color:#BABED8;">i</span><span style="color:#F07178;">]</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> path</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">concat</span><span style="color:#F07178;">(</span><span style="color:#BABED8;">arr</span><span style="color:#F07178;">[</span><span style="color:#BABED8;">i</span><span style="color:#F07178;">]))</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">    }</span></span>
<span class="line"><span style="color:#89DDFF;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">  const</span><span style="color:#BABED8;"> res</span><span style="color:#89DDFF;"> =</span><span style="color:#F07178;"> []</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#82AAFF;">  backtrack</span><span style="color:#F07178;">(</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> target</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> [])</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">  return</span><span style="color:#BABED8;"> res</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">getAllArrays</span><span style="color:#BABED8;">([</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;"> 2</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;"> 3</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;"> 4</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;"> 5</span><span style="color:#BABED8;">]</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;"> 6</span><span style="color:#BABED8;">)</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// [ [ 1, 2, 3 ], [ 1, 5 ], [ 2, 4 ] ]</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div><h2 id="电话号码的字母组合" tabindex="-1"><a href="https://leetcode.cn/problems/letter-combinations-of-a-phone-number/solutions/388979/shou-hua-tu-jie-liang-chong-jie-fa-dfshui-su-bfsya/" target="_blank" rel="noreferrer">电话号码的字母组合</a> <a class="header-anchor" href="#电话号码的字母组合" aria-label="Permalink to &quot;[电话号码的字母组合](https://leetcode.cn/problems/letter-combinations-of-a-phone-number/solutions/388979/shou-hua-tu-jie-liang-chong-jie-fa-dfshui-su-bfsya/)&quot;">​</a></h2><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight vp-code"><code><span class="line"><span style="color:#C792EA;">var</span><span style="color:#BABED8;"> letterCombinations </span><span style="color:#89DDFF;">=</span><span style="color:#C792EA;"> function</span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;font-style:italic;">digits</span><span style="color:#89DDFF;">)</span><span style="color:#89DDFF;"> {</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">  if</span><span style="color:#F07178;"> (</span><span style="color:#BABED8;">digits</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">length</span><span style="color:#89DDFF;"> ==</span><span style="color:#F78C6C;"> 0</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> []</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#C792EA;">  const</span><span style="color:#BABED8;"> res</span><span style="color:#89DDFF;"> =</span><span style="color:#F07178;"> []</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#C792EA;">  const</span><span style="color:#BABED8;"> map</span><span style="color:#89DDFF;"> =</span><span style="color:#89DDFF;"> {</span></span>
<span class="line"><span style="color:#F78C6C;">    2</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;"> &#39;</span><span style="color:#C3E88D;">abc</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F78C6C;">    3</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;"> &#39;</span><span style="color:#C3E88D;">def</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F78C6C;">    4</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;"> &#39;</span><span style="color:#C3E88D;">ghi</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F78C6C;">    5</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;"> &#39;</span><span style="color:#C3E88D;">jkl</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F78C6C;">    6</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;"> &#39;</span><span style="color:#C3E88D;">mno</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F78C6C;">    7</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;"> &#39;</span><span style="color:#C3E88D;">pqrs</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F78C6C;">    8</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;"> &#39;</span><span style="color:#C3E88D;">tuv</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F78C6C;">    9</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;"> &#39;</span><span style="color:#C3E88D;">wxyz</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#89DDFF;">  }</span></span>
<span class="line"><span style="color:#C792EA;">  const</span><span style="color:#BABED8;"> backtrack</span><span style="color:#89DDFF;"> =</span><span style="color:#89DDFF;"> (</span><span style="color:#BABED8;font-style:italic;">curStr</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;font-style:italic;"> i</span><span style="color:#89DDFF;">)</span><span style="color:#C792EA;"> =&gt;</span><span style="color:#89DDFF;"> {</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">    if</span><span style="color:#F07178;"> (</span><span style="color:#BABED8;">i</span><span style="color:#89DDFF;"> &gt;</span><span style="color:#BABED8;"> digits</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">length</span><span style="color:#89DDFF;"> -</span><span style="color:#F78C6C;"> 1</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">      res</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">push</span><span style="color:#F07178;">(</span><span style="color:#BABED8;">curStr</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">      return</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">    }</span></span>
<span class="line"><span style="color:#C792EA;">    const</span><span style="color:#BABED8;"> letters</span><span style="color:#89DDFF;"> =</span><span style="color:#BABED8;"> map</span><span style="color:#F07178;">[</span><span style="color:#BABED8;">digits</span><span style="color:#F07178;">[</span><span style="color:#BABED8;">i</span><span style="color:#F07178;">]]</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">    for</span><span style="color:#F07178;"> (</span><span style="color:#C792EA;">const</span><span style="color:#BABED8;"> letter</span><span style="color:#89DDFF;"> of</span><span style="color:#BABED8;"> letters</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#82AAFF;">      backtrack</span><span style="color:#F07178;">(</span><span style="color:#BABED8;">curStr</span><span style="color:#89DDFF;"> +</span><span style="color:#BABED8;"> letter</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> i</span><span style="color:#89DDFF;"> +</span><span style="color:#F78C6C;"> 1</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">    }</span></span>
<span class="line"><span style="color:#89DDFF;">  }</span></span>
<span class="line"><span style="color:#82AAFF;">  backtrack</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;"> 0</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">  return</span><span style="color:#BABED8;"> res</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div><h2 id="全排列" tabindex="-1"><a href="https://leetcode.cn/problems/permutations/" target="_blank" rel="noreferrer">全排列</a> <a class="header-anchor" href="#全排列" aria-label="Permalink to &quot;[全排列](https://leetcode.cn/problems/permutations/)&quot;">​</a></h2><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight vp-code"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#BABED8;"> permute </span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;"> (</span><span style="color:#BABED8;font-style:italic;">nums</span><span style="color:#89DDFF;">)</span><span style="color:#C792EA;"> =&gt;</span><span style="color:#89DDFF;"> {</span></span>
<span class="line"><span style="color:#C792EA;">  function</span><span style="color:#82AAFF;"> backtrack</span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;font-style:italic;">list</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;font-style:italic;"> temp</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;font-style:italic;"> nums</span><span style="color:#89DDFF;">)</span><span style="color:#89DDFF;"> {</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">    if</span><span style="color:#F07178;"> (</span><span style="color:#BABED8;">temp</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">length</span><span style="color:#89DDFF;"> ===</span><span style="color:#BABED8;"> nums</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">length</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">        return</span><span style="color:#BABED8;"> list</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">push</span><span style="color:#F07178;">([</span><span style="color:#89DDFF;">...</span><span style="color:#BABED8;">temp</span><span style="color:#F07178;">])</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">    }</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">    for</span><span style="color:#F07178;"> (</span><span style="color:#C792EA;">let</span><span style="color:#BABED8;"> i</span><span style="color:#89DDFF;"> =</span><span style="color:#F78C6C;"> 0</span><span style="color:#89DDFF;">;</span><span style="color:#BABED8;"> i</span><span style="color:#89DDFF;"> &lt;</span><span style="color:#BABED8;"> nums</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">length</span><span style="color:#89DDFF;">;</span><span style="color:#BABED8;"> i</span><span style="color:#89DDFF;">++</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">        if</span><span style="color:#F07178;"> (</span><span style="color:#BABED8;">temp</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">includes</span><span style="color:#F07178;">(</span><span style="color:#BABED8;">nums</span><span style="color:#F07178;">[</span><span style="color:#BABED8;">i</span><span style="color:#F07178;">])) </span><span style="color:#89DDFF;font-style:italic;">continue</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#BABED8;">        temp</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">push</span><span style="color:#F07178;">(</span><span style="color:#BABED8;">nums</span><span style="color:#F07178;">[</span><span style="color:#BABED8;">i</span><span style="color:#F07178;">])</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#82AAFF;">        backtrack</span><span style="color:#F07178;">(</span><span style="color:#BABED8;">list</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> temp</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> nums</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span><span style="color:#676E95;font-style:italic;"> // 执行递归公式</span></span>
<span class="line"><span style="color:#BABED8;">        temp</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">pop</span><span style="color:#F07178;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">    }</span></span>
<span class="line"><span style="color:#89DDFF;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">  let</span><span style="color:#BABED8;"> list</span><span style="color:#89DDFF;"> =</span><span style="color:#F07178;"> []</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#82AAFF;">  backtrack</span><span style="color:#F07178;">(</span><span style="color:#BABED8;">list</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> []</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> nums</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">  return</span><span style="color:#BABED8;"> list</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div>`,8)]))}const b=n(o,[["render",e]]);export{i as __pageData,b as default};
