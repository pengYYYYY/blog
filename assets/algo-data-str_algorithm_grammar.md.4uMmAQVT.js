import{_ as s,c as n,o as a,U as l}from"./chunks/framework.UId1oBXU.js";const p="/blog/assets/svPCPR.IrctMLEK.png",u=JSON.parse('{"title":"杂七杂八","description":"","frontmatter":{},"headers":[],"relativePath":"algo-data-str/algorithm/grammar.md","filePath":"algo-data-str/algorithm/grammar.md","lastUpdated":1704559210000}'),o={name:"algo-data-str/algorithm/grammar.md"},e=l('<h1 id="杂七杂八" tabindex="-1">杂七杂八 <a class="header-anchor" href="#杂七杂八" aria-label="Permalink to &quot;杂七杂八&quot;">​</a></h1><h2 id="尾递归调用" tabindex="-1">尾递归调用 <a class="header-anchor" href="#尾递归调用" aria-label="Permalink to &quot;尾递归调用&quot;">​</a></h2><p>函数调用会在内存形成一个&quot;调用记录&quot;，又称&quot;调用帧&quot;（call frame），保存调用位置和内部变量等信息。</p><p><img src="'+p+`" alt="img"></p><p>在递归中，如果尾调用自身，就称为尾递归。递归非常消耗内存，因为需要同时保存成千上百个调用记录，很容易发生&quot;栈溢出&quot;错误（stack overflow）。对于尾递归来说，由于只存在一个调用记录，所以永远不会发生&quot;栈溢出&quot;错误。</p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight vp-code"><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#82AAFF;"> factorial</span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;font-style:italic;">n</span><span style="color:#89DDFF;">)</span><span style="color:#89DDFF;"> {</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">  if</span><span style="color:#F07178;"> (</span><span style="color:#BABED8;">n</span><span style="color:#89DDFF;"> ===</span><span style="color:#F78C6C;"> 1</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F78C6C;"> 1</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">  return</span><span style="color:#BABED8;"> n</span><span style="color:#89DDFF;"> *</span><span style="color:#82AAFF;"> factorial</span><span style="color:#F07178;">(</span><span style="color:#BABED8;">n</span><span style="color:#89DDFF;"> -</span><span style="color:#F78C6C;"> 1</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>上面代码是一个阶乘函数，计算n的阶乘，最多需要保存n个调用记录，复杂度 O(n) 。 如果改写成尾递归，只保留一个调用记录，复杂度 O(1) 。</p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight vp-code"><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#82AAFF;"> factorial</span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;font-style:italic;">n</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;font-style:italic;"> total</span><span style="color:#89DDFF;">)</span><span style="color:#89DDFF;"> {</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">  if</span><span style="color:#F07178;"> (</span><span style="color:#BABED8;">n</span><span style="color:#89DDFF;"> ===</span><span style="color:#F78C6C;"> 1</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#BABED8;"> total</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">  return</span><span style="color:#82AAFF;"> factorial</span><span style="color:#F07178;">(</span><span style="color:#BABED8;">n</span><span style="color:#89DDFF;"> -</span><span style="color:#F78C6C;"> 1</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> n</span><span style="color:#89DDFF;"> *</span><span style="color:#BABED8;"> total</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="运算符技巧" tabindex="-1">运算符技巧 <a class="header-anchor" href="#运算符技巧" aria-label="Permalink to &quot;运算符技巧&quot;">​</a></h2><h3 id="交换两个数" tabindex="-1">交换两个数 <a class="header-anchor" href="#交换两个数" aria-label="Permalink to &quot;交换两个数&quot;">​</a></h3><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight vp-code"><code><span class="line"><span style="color:#676E95;font-style:italic;">// 常规</span></span>
<span class="line"><span style="color:#BABED8;">int tmp </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> x</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#BABED8;">x </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> y</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#BABED8;">y </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> tmp</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 位运算</span></span>
<span class="line"><span style="color:#BABED8;">x </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> x </span><span style="color:#89DDFF;">^</span><span style="color:#BABED8;"> y   </span><span style="color:#676E95;font-style:italic;">// （1）</span></span>
<span class="line"><span style="color:#BABED8;">y </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> x </span><span style="color:#89DDFF;">^</span><span style="color:#BABED8;"> y   </span><span style="color:#676E95;font-style:italic;">// （2）</span></span>
<span class="line"><span style="color:#BABED8;">x </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> x </span><span style="color:#89DDFF;">^</span><span style="color:#BABED8;"> y   </span><span style="color:#676E95;font-style:italic;">// （3）</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h3 id="判断奇偶数" tabindex="-1">判断奇偶数 <a class="header-anchor" href="#判断奇偶数" aria-label="Permalink to &quot;判断奇偶数&quot;">​</a></h3><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight vp-code"><code><span class="line"><span style="color:#676E95;font-style:italic;">// 普通判断</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#BABED8;">(n </span><span style="color:#89DDFF;">%</span><span style="color:#F78C6C;"> 2</span><span style="color:#89DDFF;"> ==</span><span style="color:#F78C6C;"> 1</span><span style="color:#BABED8;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> // n 是个奇数。</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 位运算</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#BABED8;">(n </span><span style="color:#89DDFF;">&amp;</span><span style="color:#F78C6C;"> 1</span><span style="color:#89DDFF;"> ==</span><span style="color:#F78C6C;"> 1</span><span style="color:#BABED8;">)</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">  // n 是个奇数。</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h3 id="异或" tabindex="-1">^= 异或 <a class="header-anchor" href="#异或" aria-label="Permalink to &quot;^= 异或&quot;">​</a></h3><p>二进制对比，在两次对比以后会是原来的值</p><p>4 ^= 5</p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight vp-code"><code><span class="line"><span style="color:#F78C6C;">100</span><span style="color:#676E95;font-style:italic;"> //4</span></span>
<span class="line"><span style="color:#F78C6C;">101</span><span style="color:#676E95;font-style:italic;"> //5</span></span>
<span class="line"><span style="color:#F78C6C;">001</span><span style="color:#676E95;font-style:italic;"> //异或后得到</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h4 id="示例-只出现一次的数字" tabindex="-1">示例：<a href="https://leetcode-cn.com/problems/single-number/" target="_blank" rel="noreferrer">只出现一次的数字</a> <a class="header-anchor" href="#示例-只出现一次的数字" aria-label="Permalink to &quot;示例：[只出现一次的数字](https://leetcode-cn.com/problems/single-number/)&quot;">​</a></h4><div class="language-javascript line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight vp-code"><code><span class="line"><span style="color:#C792EA;">let</span><span style="color:#BABED8;"> ans </span><span style="color:#89DDFF;">=</span><span style="color:#F78C6C;"> 0</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;"> for</span><span style="color:#BABED8;"> (</span><span style="color:#C792EA;">const</span><span style="color:#BABED8;"> num </span><span style="color:#89DDFF;">of</span><span style="color:#BABED8;"> nums) </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;">  </span></span>
<span class="line"><span style="color:#BABED8;">  ans</span><span style="color:#89DDFF;"> ^=</span><span style="color:#BABED8;"> num</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;"> }</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;"> return</span><span style="color:#BABED8;"> ans</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h3 id="移位-和" tabindex="-1">移位&gt;&gt;和&gt;&gt;&gt; <a class="header-anchor" href="#移位-和" aria-label="Permalink to &quot;移位&gt;&gt;和&gt;&gt;&gt;&quot;">​</a></h3><p><code>&gt;&gt;&gt;</code> 是无符号的 <code>&gt;&gt;</code> 是有符号的</p><h4 id="示例" tabindex="-1">示例 <a class="header-anchor" href="#示例" aria-label="Permalink to &quot;示例&quot;">​</a></h4><p>通过寻找二分的中间点</p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight vp-code"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#BABED8;"> mid </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> (start </span><span style="color:#89DDFF;">+</span><span style="color:#BABED8;"> end) </span><span style="color:#89DDFF;">&gt;&gt;</span><span style="color:#F78C6C;"> 1</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="数组中的位置交换" tabindex="-1">数组中的位置交换 <a class="header-anchor" href="#数组中的位置交换" aria-label="Permalink to &quot;数组中的位置交换&quot;">​</a></h2><p>i，j两个位置的交换</p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight vp-code"><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#82AAFF;"> swap</span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;font-style:italic;">i</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;font-style:italic;"> j</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;font-style:italic;"> arr</span><span style="color:#89DDFF;">)</span><span style="color:#89DDFF;"> {</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">  if</span><span style="color:#F07178;">(</span><span style="color:#BABED8;">i</span><span style="color:#89DDFF;"> ==</span><span style="color:#BABED8;"> j</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">    return</span></span>
<span class="line"><span style="color:#89DDFF;">  }</span></span>
<span class="line"><span style="color:#BABED8;">  arr</span><span style="color:#F07178;">[</span><span style="color:#BABED8;">i</span><span style="color:#F07178;">] </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> arr</span><span style="color:#F07178;">[</span><span style="color:#BABED8;">i</span><span style="color:#F07178;">] </span><span style="color:#89DDFF;">+</span><span style="color:#BABED8;"> arr</span><span style="color:#F07178;">[</span><span style="color:#BABED8;">j</span><span style="color:#F07178;">]</span></span>
<span class="line"><span style="color:#BABED8;">  arr</span><span style="color:#F07178;">[</span><span style="color:#BABED8;">j</span><span style="color:#F07178;">] </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> arr</span><span style="color:#F07178;">[</span><span style="color:#BABED8;">i</span><span style="color:#F07178;">] </span><span style="color:#89DDFF;">-</span><span style="color:#BABED8;"> arr</span><span style="color:#F07178;">[</span><span style="color:#BABED8;">j</span><span style="color:#F07178;">]</span></span>
<span class="line"><span style="color:#BABED8;">  arr</span><span style="color:#F07178;">[</span><span style="color:#BABED8;">i</span><span style="color:#F07178;">] </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> arr</span><span style="color:#F07178;">[</span><span style="color:#BABED8;">i</span><span style="color:#F07178;">] </span><span style="color:#89DDFF;">-</span><span style="color:#BABED8;"> arr</span><span style="color:#F07178;">[</span><span style="color:#BABED8;">j</span><span style="color:#F07178;">]</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h2 id="整数操作相关" tabindex="-1">整数操作相关 <a class="header-anchor" href="#整数操作相关" aria-label="Permalink to &quot;整数操作相关&quot;">​</a></h2><h3 id="整数反转" tabindex="-1"><a href="https://leetcode-cn.com/problems/reverse-integer/" target="_blank" rel="noreferrer">整数反转</a> <a class="header-anchor" href="#整数反转" aria-label="Permalink to &quot;[整数反转](https://leetcode-cn.com/problems/reverse-integer/)&quot;">​</a></h3><p>🌟</p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight vp-code"><code><span class="line"><span style="color:#C792EA;">var</span><span style="color:#BABED8;"> reverse </span><span style="color:#89DDFF;">=</span><span style="color:#C792EA;"> function</span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;font-style:italic;">x</span><span style="color:#89DDFF;">)</span><span style="color:#89DDFF;"> {</span></span>
<span class="line"><span style="color:#C792EA;">  let</span><span style="color:#BABED8;"> ord</span><span style="color:#89DDFF;"> =</span><span style="color:#BABED8;"> Math</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">abs</span><span style="color:#F07178;">(</span><span style="color:#BABED8;">x</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span><span style="color:#676E95;font-style:italic;">//去符号</span></span>
<span class="line"><span style="color:#C792EA;">  let</span><span style="color:#BABED8;"> now</span><span style="color:#89DDFF;"> =</span><span style="color:#F78C6C;"> 0</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">  while</span><span style="color:#F07178;">(</span><span style="color:#BABED8;">ord</span><span style="color:#89DDFF;"> &gt;</span><span style="color:#F78C6C;"> 0</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">    now</span><span style="color:#89DDFF;"> =</span><span style="color:#BABED8;"> now</span><span style="color:#89DDFF;"> *</span><span style="color:#F78C6C;"> 10</span><span style="color:#89DDFF;"> +</span><span style="color:#BABED8;"> ord</span><span style="color:#89DDFF;"> %</span><span style="color:#F78C6C;"> 10</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#BABED8;">    ord</span><span style="color:#89DDFF;"> =</span><span style="color:#BABED8;"> Math</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">floor</span><span style="color:#F07178;">(</span><span style="color:#BABED8;">ord</span><span style="color:#89DDFF;"> /</span><span style="color:#F78C6C;"> 10</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">  }</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">  if</span><span style="color:#F07178;">(</span><span style="color:#BABED8;">x</span><span style="color:#89DDFF;"> &lt;</span><span style="color:#F78C6C;"> 0</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">    return</span><span style="color:#BABED8;"> now</span><span style="color:#89DDFF;"> &lt;=</span><span style="color:#BABED8;"> Math</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">pow</span><span style="color:#F07178;">(</span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">31</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">?</span><span style="color:#89DDFF;"> -</span><span style="color:#BABED8;">now</span><span style="color:#89DDFF;"> :</span><span style="color:#F78C6C;"> 0</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">  }</span><span style="color:#89DDFF;font-style:italic;">else</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">    return</span><span style="color:#BABED8;"> now</span><span style="color:#89DDFF;"> &lt;</span><span style="color:#BABED8;"> Math</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">pow</span><span style="color:#F07178;">(</span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">31</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">?</span><span style="color:#BABED8;"> now</span><span style="color:#89DDFF;"> :</span><span style="color:#F78C6C;"> 0</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">  }</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><h3 id="字符串相加" tabindex="-1"><a href="https://leetcode-cn.com/problems/add-strings/" target="_blank" rel="noreferrer">字符串相加</a> <a class="header-anchor" href="#字符串相加" aria-label="Permalink to &quot;[字符串相加](https://leetcode-cn.com/problems/add-strings/)&quot;">​</a></h3><p>🌟</p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight vp-code"><code><span class="line"><span style="color:#C792EA;">var</span><span style="color:#BABED8;"> addStrings </span><span style="color:#89DDFF;">=</span><span style="color:#C792EA;"> function</span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;font-style:italic;">num1</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;font-style:italic;"> num2</span><span style="color:#89DDFF;">)</span><span style="color:#89DDFF;"> {</span></span>
<span class="line"><span style="color:#C792EA;">  const</span><span style="color:#BABED8;"> ans</span><span style="color:#89DDFF;"> =</span><span style="color:#F07178;"> []</span></span>
<span class="line"><span style="color:#C792EA;">  let</span><span style="color:#BABED8;"> i</span><span style="color:#89DDFF;"> =</span><span style="color:#BABED8;"> num1</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">length</span><span style="color:#89DDFF;"> -</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> j</span><span style="color:#89DDFF;"> =</span><span style="color:#BABED8;"> num2</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">length</span><span style="color:#89DDFF;"> -</span><span style="color:#F78C6C;"> 1</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> add</span><span style="color:#89DDFF;"> =</span><span style="color:#F78C6C;"> 0</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">  while</span><span style="color:#F07178;">(</span><span style="color:#BABED8;">i</span><span style="color:#89DDFF;"> &gt;=</span><span style="color:#F78C6C;"> 0</span><span style="color:#89DDFF;"> ||</span><span style="color:#BABED8;"> j</span><span style="color:#89DDFF;"> &gt;=</span><span style="color:#F78C6C;"> 0</span><span style="color:#89DDFF;"> ||</span><span style="color:#BABED8;"> add</span><span style="color:#89DDFF;"> !=</span><span style="color:#F78C6C;"> 0</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#C792EA;">    const</span><span style="color:#BABED8;"> x</span><span style="color:#89DDFF;"> =</span><span style="color:#BABED8;"> i</span><span style="color:#89DDFF;"> &gt;=</span><span style="color:#F78C6C;"> 0</span><span style="color:#89DDFF;"> ?</span><span style="color:#82AAFF;"> parseInt</span><span style="color:#F07178;">(</span><span style="color:#BABED8;">num1</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">charAt</span><span style="color:#F07178;">(</span><span style="color:#BABED8;">i</span><span style="color:#F07178;">)) </span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;"> 0</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#C792EA;">    const</span><span style="color:#BABED8;"> y</span><span style="color:#89DDFF;"> =</span><span style="color:#BABED8;"> j</span><span style="color:#89DDFF;"> &gt;=</span><span style="color:#F78C6C;"> 0</span><span style="color:#89DDFF;"> ?</span><span style="color:#82AAFF;"> parseInt</span><span style="color:#F07178;">(</span><span style="color:#BABED8;">num2</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">charAt</span><span style="color:#F07178;">(</span><span style="color:#BABED8;">j</span><span style="color:#F07178;">)) </span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;"> 0</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#C792EA;">    const</span><span style="color:#BABED8;"> result</span><span style="color:#89DDFF;"> =</span><span style="color:#BABED8;"> x</span><span style="color:#89DDFF;"> +</span><span style="color:#BABED8;"> y</span><span style="color:#89DDFF;"> +</span><span style="color:#BABED8;"> add</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#BABED8;">    ans</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">push</span><span style="color:#F07178;">(</span><span style="color:#BABED8;">result</span><span style="color:#89DDFF;"> %</span><span style="color:#F78C6C;"> 10</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#BABED8;">    add</span><span style="color:#89DDFF;"> =</span><span style="color:#BABED8;"> Math</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">floor</span><span style="color:#F07178;">(</span><span style="color:#BABED8;">result</span><span style="color:#89DDFF;"> /</span><span style="color:#F78C6C;"> 10</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#BABED8;">    i</span><span style="color:#89DDFF;">--</span></span>
<span class="line"><span style="color:#BABED8;">    j</span><span style="color:#89DDFF;">--</span></span>
<span class="line"><span style="color:#89DDFF;">  }</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">  return</span><span style="color:#BABED8;"> ans</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">reverse</span><span style="color:#F07178;">()</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">join</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;&#39;</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><h3 id="字符串相乘" tabindex="-1"><a href="https://leetcode-cn.com/problems/multiply-strings/" target="_blank" rel="noreferrer">字符串相乘</a> <a class="header-anchor" href="#字符串相乘" aria-label="Permalink to &quot;[字符串相乘](https://leetcode-cn.com/problems/multiply-strings/)&quot;">​</a></h3><p>🌟🌟</p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight vp-code"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#BABED8;"> multiply </span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;"> (</span><span style="color:#BABED8;font-style:italic;">num1</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;font-style:italic;"> num2</span><span style="color:#89DDFF;">)</span><span style="color:#C792EA;"> =&gt;</span><span style="color:#89DDFF;"> {</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">  if</span><span style="color:#F07178;">(</span><span style="color:#BABED8;">num1</span><span style="color:#89DDFF;"> ==</span><span style="color:#89DDFF;"> &#39;</span><span style="color:#C3E88D;">0</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;"> ||</span><span style="color:#BABED8;"> num2</span><span style="color:#89DDFF;"> ==</span><span style="color:#89DDFF;"> &#39;</span><span style="color:#C3E88D;">0</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F78C6C;"> 0</span></span>
<span class="line"><span style="color:#C792EA;">  let</span><span style="color:#BABED8;"> len1</span><span style="color:#89DDFF;"> =</span><span style="color:#BABED8;"> num1</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">length</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;"> </span></span>
<span class="line"><span style="color:#C792EA;">  let</span><span style="color:#BABED8;"> len2</span><span style="color:#89DDFF;"> =</span><span style="color:#BABED8;"> num2</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">length</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#C792EA;">  let</span><span style="color:#BABED8;"> arr</span><span style="color:#89DDFF;"> =</span><span style="color:#89DDFF;"> new</span><span style="color:#82AAFF;"> Array</span><span style="color:#F07178;">(</span><span style="color:#BABED8;">len1</span><span style="color:#89DDFF;"> +</span><span style="color:#BABED8;"> len2</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">fill</span><span style="color:#F07178;">(</span><span style="color:#F78C6C;">0</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#C792EA;">  let</span><span style="color:#BABED8;"> i</span><span style="color:#89DDFF;"> =</span><span style="color:#BABED8;"> len1</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> j</span><span style="color:#89DDFF;"> =</span><span style="color:#BABED8;"> len2</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">  while</span><span style="color:#F07178;">(</span><span style="color:#BABED8;">i</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">    i</span><span style="color:#89DDFF;">--</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">    while</span><span style="color:#F07178;">(</span><span style="color:#BABED8;">j</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">      j</span><span style="color:#89DDFF;">--</span></span>
<span class="line"><span style="color:#C792EA;">      let</span><span style="color:#BABED8;"> sum</span><span style="color:#89DDFF;"> =</span><span style="color:#BABED8;"> num1</span><span style="color:#F07178;">[</span><span style="color:#BABED8;">i</span><span style="color:#F07178;">]</span><span style="color:#89DDFF;">*</span><span style="color:#BABED8;">num2</span><span style="color:#F07178;">[</span><span style="color:#BABED8;">j</span><span style="color:#F07178;">] </span><span style="color:#89DDFF;">+</span><span style="color:#BABED8;"> arr</span><span style="color:#F07178;">[</span><span style="color:#BABED8;">i</span><span style="color:#89DDFF;">+</span><span style="color:#BABED8;">j</span><span style="color:#89DDFF;">+</span><span style="color:#F78C6C;">1</span><span style="color:#F07178;">]</span></span>
<span class="line"><span style="color:#BABED8;">      arr</span><span style="color:#F07178;">[</span><span style="color:#BABED8;">i</span><span style="color:#89DDFF;">+</span><span style="color:#BABED8;">j</span><span style="color:#F07178;">] </span><span style="color:#89DDFF;">+=</span><span style="color:#F78C6C;"> 0</span><span style="color:#89DDFF;"> |</span><span style="color:#BABED8;"> sum</span><span style="color:#89DDFF;"> /</span><span style="color:#F78C6C;"> 10</span></span>
<span class="line"><span style="color:#BABED8;">      arr</span><span style="color:#F07178;">[</span><span style="color:#BABED8;">i</span><span style="color:#89DDFF;">+</span><span style="color:#BABED8;">j</span><span style="color:#89DDFF;">+</span><span style="color:#F78C6C;">1</span><span style="color:#F07178;">] </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> sum</span><span style="color:#89DDFF;"> %</span><span style="color:#F78C6C;"> 10</span></span>
<span class="line"><span style="color:#89DDFF;">    }</span></span>
<span class="line"><span style="color:#BABED8;">    j</span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;">len2</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">  }</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">  while</span><span style="color:#F07178;">(</span><span style="color:#BABED8;">arr</span><span style="color:#F07178;">[</span><span style="color:#F78C6C;">0</span><span style="color:#F07178;">] </span><span style="color:#89DDFF;">==</span><span style="color:#F78C6C;"> 0</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">    arr</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">shift</span><span style="color:#F07178;">()</span></span>
<span class="line"><span style="color:#89DDFF;">  }</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">  return</span><span style="color:#BABED8;"> arr</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">join</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;&#39;</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><h3 id="进制转换" tabindex="-1"><a href="https://leetcode-cn.com/problems/multiply-strings/" target="_blank" rel="noreferrer">进制转换</a> <a class="header-anchor" href="#进制转换" aria-label="Permalink to &quot;[进制转换](https://leetcode-cn.com/problems/multiply-strings/)&quot;">​</a></h3><p>🌟</p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight vp-code"><code><span class="line"><span style="color:#676E95;font-style:italic;">// 10进制转n进制</span></span>
<span class="line"><span style="color:#C792EA;">function</span><span style="color:#82AAFF;"> ten2x</span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;font-style:italic;">num</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;font-style:italic;"> n</span><span style="color:#89DDFF;">){</span></span>
<span class="line"><span style="color:#C792EA;">  var</span><span style="color:#BABED8;"> res</span><span style="color:#89DDFF;"> =</span><span style="color:#F07178;"> []</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">  while</span><span style="color:#F07178;">(</span><span style="color:#BABED8;">num</span><span style="color:#89DDFF;"> &gt;</span><span style="color:#F78C6C;"> 0</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">    res</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">push</span><span style="color:#F07178;">(</span><span style="color:#BABED8;">num</span><span style="color:#89DDFF;"> %</span><span style="color:#BABED8;"> n</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#BABED8;">    x</span><span style="color:#89DDFF;"> =</span><span style="color:#BABED8;"> Math</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">floor</span><span style="color:#F07178;">(</span><span style="color:#BABED8;">num</span><span style="color:#89DDFF;"> /</span><span style="color:#BABED8;"> n</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">  }</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">  return</span><span style="color:#BABED8;"> res</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">reverse</span><span style="color:#F07178;">()</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">join</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;&#39;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div>`,40),r=[e];function t(c,y,F,D,i,B){return a(),n("div",null,r)}const A=s(o,[["render",t]]);export{u as __pageData,A as default};
