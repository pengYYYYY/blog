import{_ as s,c as n,o as a,U as l}from"./chunks/framework.UId1oBXU.js";const m=JSON.parse('{"title":"动态规划","description":"","frontmatter":{},"headers":[],"relativePath":"algo-data-str/algorithm/dynamicPlan.md","filePath":"algo-data-str/algorithm/dynamicPlan.md","lastUpdated":1704559210000}'),p={name:"algo-data-str/algorithm/dynamicPlan.md"},o=l(`<h1 id="动态规划" tabindex="-1">动态规划 <a class="header-anchor" href="#动态规划" aria-label="Permalink to &quot;动态规划&quot;">​</a></h1><p>重要点：</p><ul><li>寻找状态转移方程</li><li>建立合适的数据结构表（多为类数组结构）</li><li>返回符合题意的结果</li></ul><h2 id="爬楼梯" tabindex="-1"><a href="https://leetcode-cn.com/problems/climbing-stairs/" target="_blank" rel="noreferrer">爬楼梯</a> <a class="header-anchor" href="#爬楼梯" aria-label="Permalink to &quot;[爬楼梯](https://leetcode-cn.com/problems/climbing-stairs/)&quot;">​</a></h2><p>经典问题</p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight vp-code"><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#82AAFF;"> climbStairs</span><span style="color:#89DDFF;"> (</span><span style="color:#BABED8;font-style:italic;">n</span><span style="color:#89DDFF;">)</span><span style="color:#89DDFF;"> {</span></span>
<span class="line"><span style="color:#C792EA;">    let</span><span style="color:#BABED8;"> dp1</span><span style="color:#89DDFF;"> =</span><span style="color:#F78C6C;"> 0</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> dp2</span><span style="color:#89DDFF;"> =</span><span style="color:#F78C6C;"> 1</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> res</span><span style="color:#89DDFF;"> =</span><span style="color:#F78C6C;"> 1</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">    for</span><span style="color:#F07178;">(</span><span style="color:#C792EA;">let</span><span style="color:#BABED8;"> i</span><span style="color:#89DDFF;"> =</span><span style="color:#F78C6C;"> 1</span><span style="color:#89DDFF;">;</span><span style="color:#BABED8;"> i</span><span style="color:#89DDFF;"> &lt;</span><span style="color:#BABED8;"> n</span><span style="color:#89DDFF;">;</span><span style="color:#BABED8;"> i</span><span style="color:#89DDFF;">++</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">        dp1</span><span style="color:#89DDFF;"> =</span><span style="color:#BABED8;"> dp2</span></span>
<span class="line"><span style="color:#BABED8;">        dp2</span><span style="color:#89DDFF;"> =</span><span style="color:#BABED8;"> res</span></span>
<span class="line"><span style="color:#BABED8;">        res</span><span style="color:#89DDFF;"> =</span><span style="color:#BABED8;"> dp1</span><span style="color:#89DDFF;"> +</span><span style="color:#BABED8;"> dp2</span></span>
<span class="line"><span style="color:#89DDFF;">    }</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">    return</span><span style="color:#BABED8;"> res</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h2 id="打家劫舍" tabindex="-1">打家劫舍 <a class="header-anchor" href="#打家劫舍" aria-label="Permalink to &quot;打家劫舍&quot;">​</a></h2><p>状态转换方程 <code>dp[n] = Max(dp[n-1], dp[n-2] + nums[n])</code></p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight vp-code"><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#82AAFF;"> rob</span><span style="color:#89DDFF;"> (</span><span style="color:#BABED8;font-style:italic;">nums</span><span style="color:#89DDFF;">)</span><span style="color:#89DDFF;"> {</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">    if</span><span style="color:#F07178;"> (</span><span style="color:#89DDFF;">!</span><span style="color:#BABED8;">nums</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">length</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F78C6C;"> 0</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">    if</span><span style="color:#F07178;"> (</span><span style="color:#BABED8;">nums</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">length</span><span style="color:#89DDFF;"> ==</span><span style="color:#F78C6C;"> 1</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#BABED8;"> nums</span><span style="color:#F07178;">[</span><span style="color:#F78C6C;">0</span><span style="color:#F07178;">]</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">    if</span><span style="color:#F07178;"> (</span><span style="color:#BABED8;">nums</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">length</span><span style="color:#89DDFF;"> ==</span><span style="color:#F78C6C;"> 2</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#BABED8;"> Math</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">max</span><span style="color:#F07178;">(</span><span style="color:#BABED8;">nums</span><span style="color:#F07178;">[</span><span style="color:#F78C6C;">0</span><span style="color:#F07178;">]</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;">nums</span><span style="color:#F07178;">[</span><span style="color:#F78C6C;">1</span><span style="color:#F07178;">])</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">    let</span><span style="color:#BABED8;"> dp</span><span style="color:#89DDFF;"> =</span><span style="color:#F07178;"> [</span><span style="color:#BABED8;">nums</span><span style="color:#F07178;">[</span><span style="color:#F78C6C;">0</span><span style="color:#F07178;">]</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> Math</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">max</span><span style="color:#F07178;">(</span><span style="color:#BABED8;">nums</span><span style="color:#F07178;">[</span><span style="color:#F78C6C;">0</span><span style="color:#F07178;">]</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> nums</span><span style="color:#F07178;">[</span><span style="color:#F78C6C;">1</span><span style="color:#F07178;">])]</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">    for</span><span style="color:#F07178;"> (</span><span style="color:#C792EA;">let</span><span style="color:#BABED8;"> i</span><span style="color:#89DDFF;"> =</span><span style="color:#F78C6C;"> 2</span><span style="color:#89DDFF;">;</span><span style="color:#BABED8;"> i</span><span style="color:#89DDFF;"> &lt;</span><span style="color:#BABED8;"> nums</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">length</span><span style="color:#89DDFF;">;</span><span style="color:#BABED8;"> i</span><span style="color:#89DDFF;">++</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">        dp</span><span style="color:#F07178;">[</span><span style="color:#BABED8;">i</span><span style="color:#F07178;">] </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> Math</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">max</span><span style="color:#F07178;">(</span><span style="color:#BABED8;">dp</span><span style="color:#F07178;">[</span><span style="color:#BABED8;">i</span><span style="color:#89DDFF;">-</span><span style="color:#F78C6C;">1</span><span style="color:#F07178;">]</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> dp</span><span style="color:#F07178;">[</span><span style="color:#BABED8;">i</span><span style="color:#89DDFF;">-</span><span style="color:#F78C6C;">2</span><span style="color:#F07178;">] </span><span style="color:#89DDFF;">+</span><span style="color:#BABED8;"> nums</span><span style="color:#F07178;">[</span><span style="color:#BABED8;">i</span><span style="color:#F07178;">])</span></span>
<span class="line"><span style="color:#89DDFF;">    }</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">    return</span><span style="color:#BABED8;"> Math</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">max</span><span style="color:#F07178;">(</span><span style="color:#BABED8;">dp</span><span style="color:#F07178;">[</span><span style="color:#BABED8;">num</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">length</span><span style="color:#89DDFF;"> -</span><span style="color:#F78C6C;"> 1</span><span style="color:#F07178;">]</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;"> dp</span><span style="color:#F07178;">[</span><span style="color:#BABED8;">nums</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">length</span><span style="color:#89DDFF;"> -</span><span style="color:#F78C6C;"> 2</span><span style="color:#F07178;">])</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div>`,9),e=[o];function t(r,c,y,F,D,i){return a(),n("div",null,e)}const A=s(p,[["render",t]]);export{m as __pageData,A as default};
