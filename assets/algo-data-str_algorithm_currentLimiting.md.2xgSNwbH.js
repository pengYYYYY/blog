import{_ as s,c as a,o as n,U as l}from"./chunks/framework.UId1oBXU.js";const p="/blog/assets/5WyR3M.GGP_lEUD.png",e="/blog/assets/GJSwJo.dIY1HWfE.png",o="/blog/assets/FGOV5W.zZ_-u0Rd.png",h=JSON.parse('{"title":"限流算法","description":"","frontmatter":{},"headers":[],"relativePath":"algo-data-str/algorithm/currentLimiting.md","filePath":"algo-data-str/algorithm/currentLimiting.md","lastUpdated":1704559210000}'),t={name:"algo-data-str/algorithm/currentLimiting.md"},r=l(`<h1 id="限流算法" tabindex="-1">限流算法 <a class="header-anchor" href="#限流算法" aria-label="Permalink to &quot;限流算法&quot;">​</a></h1><p>今天和后端小哥哥聊天，问了一下我限流算法，简单了解了一下。</p><h2 id="计数器算法" tabindex="-1">计数器算法 <a class="header-anchor" href="#计数器算法" aria-label="Permalink to &quot;计数器算法&quot;">​</a></h2><p>计数器算法(Counter) 就是一个计数器 , 在单位时间内可以通过 n 个请求 , 每进来一个请求, 就将计数器 +1 , 当计数器到达了 n,此时就不让请求过去 , 但是存在一个问题: 边界问题，比如在单位时间 -1000ms 的时候过来 100 个请求 , 当刚刚过了 1000ms 的时候重置了，但是又来了 100 个请求 , 此时就会发生实际上在这 2S 的时候处理了 200 个请求 , 严重超载了, 此时服务器处理不了就导致错误了。</p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight vp-code"><code><span class="line"><span style="color:#C792EA;">class</span><span style="color:#FFCB6B;"> CounterLimiter</span><span style="color:#89DDFF;"> {</span></span>
<span class="line"><span style="color:#C792EA;">  constructor</span><span style="color:#89DDFF;">()</span><span style="color:#89DDFF;"> {</span></span>
<span class="line"><span style="color:#89DDFF;">    this.</span><span style="color:#BABED8;">initFLow</span><span style="color:#89DDFF;"> =</span><span style="color:#F78C6C;"> 0</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">    this.</span><span style="color:#BABED8;">MAX_FlOW</span><span style="color:#89DDFF;"> =</span><span style="color:#F78C6C;"> 1000</span></span>
<span class="line"><span style="color:#82AAFF;">    setTimeout</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">()</span><span style="color:#C792EA;"> =&gt;</span><span style="color:#89DDFF;"> {</span></span>
<span class="line"><span style="color:#BABED8;">      initFlow</span><span style="color:#89DDFF;"> =</span><span style="color:#F78C6C;"> 0</span></span>
<span class="line"><span style="color:#89DDFF;">    },</span><span style="color:#F78C6C;"> 10000</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#89DDFF;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">  request</span><span style="color:#89DDFF;">()</span><span style="color:#89DDFF;"> {</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">    if</span><span style="color:#F07178;"> (</span><span style="color:#89DDFF;">this.</span><span style="color:#BABED8;">initFLow</span><span style="color:#89DDFF;"> &gt;</span><span style="color:#89DDFF;"> this.</span><span style="color:#BABED8;">MAX_FlOWv</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">      // 如果限流就拒绝</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">      return</span></span>
<span class="line"><span style="color:#89DDFF;">    }</span></span>
<span class="line"><span style="color:#89DDFF;">    this.</span><span style="color:#BABED8;">initFlow</span><span style="color:#89DDFF;"> ++</span></span>
<span class="line"><span style="color:#89DDFF;">  }</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><h2 id="滑动窗口算法" tabindex="-1">滑动窗口算法 <a class="header-anchor" href="#滑动窗口算法" aria-label="Permalink to &quot;滑动窗口算法&quot;">​</a></h2><p>滑动窗口算法是将时间周期分为N个小周期，分别记录每个小周期内访问次数，并且根据时间滑动删除过期的小周期。</p><p>如下图，假设时间周期为1min，将1min再分为2个小周期，统计每个小周期的访问数量，则可以看到，第一个时间周期内，访问数量为75，第二个时间周期内，访问数量为100，超过100的访问则被限流掉了</p><p>由此可见，当滑动窗口的格子划分的越多，那么滑动窗口的滚动就越平滑，限流的统计就会越精确。</p><p>此算法可以很好的解决固定窗口算法的临界问题。</p><p><img src="`+p+'" alt="img"></p><h2 id="漏桶算法" tabindex="-1">漏桶算法 <a class="header-anchor" href="#漏桶算法" aria-label="Permalink to &quot;漏桶算法&quot;">​</a></h2><p>漏桶算法是访问请求到达时直接放入漏桶，如当前容量已达到上限（限流值），则进行丢弃（触发限流策略）。漏桶以固定的速率进行释放访问请求（即请求通过），直到漏桶为空。</p><p><img src="'+e+'" alt="img"></p><h2 id="令牌桶算法" tabindex="-1">令牌桶算法 <a class="header-anchor" href="#令牌桶算法" aria-label="Permalink to &quot;令牌桶算法&quot;">​</a></h2><p>令牌桶算法是程序以r（r=时间周期/限流值）的速度向令牌桶中增加令牌，直到令牌桶满，请求到达时向令牌桶请求令牌，如获取到令牌则通过请求，否则触发限流策略</p><p><img src="'+o+'" alt="img"></p>',17),c=[r];function i(F,D,m,y,b,u){return n(),a("div",null,c)}const _=s(t,[["render",i]]);export{h as __pageData,_ as default};
