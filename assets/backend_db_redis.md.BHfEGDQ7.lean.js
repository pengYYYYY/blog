import{_ as a,c as n,R as l,o as e}from"./chunks/framework.3D9yNSa1.js";const u=JSON.parse('{"title":"redis","description":"","frontmatter":{},"headers":[],"relativePath":"backend/db/redis.md","filePath":"backend/db/redis.md","lastUpdated":1725463910000}'),p={name:"backend/db/redis.md"};function r(i,s,o,c,t,d){return e(),n("div",null,s[0]||(s[0]=[l(`<h1 id="redis" tabindex="-1">redis <a class="header-anchor" href="#redis" aria-label="Permalink to &quot;redis&quot;">​</a></h1><p><code>redis</code> 是一个开源数据的 kv 数据库，它的数据放置于内存当中，常用来做缓存服务器。</p><h2 id="安装" tabindex="-1">安装 <a class="header-anchor" href="#安装" aria-label="Permalink to &quot;安装&quot;">​</a></h2><p>安装</p><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight vp-code"><code><span class="line"><span style="color:#FFCB6B;">//下载</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">wget</span><span style="color:#89DDFF;"> &lt;</span><span style="color:#C3E88D;">http://download.redis.io/releases/redis-5.0.8.tar.g</span><span style="color:#BABED8;">z</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">安装目录/usr/local/redis</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">//解压</span></span>
<span class="line"><span style="color:#FFCB6B;">tar</span><span style="color:#C3E88D;"> -zxf</span><span style="color:#C3E88D;"> xx</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">make</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">//</span><span style="color:#C3E88D;"> 执行make</span><span style="color:#C3E88D;"> install进行Redis安装</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">make</span><span style="color:#C3E88D;"> install</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">//为了方便管理，将Redis文件中的conf配置文件和常用命令移动到统一文件中</span></span>
<span class="line"><span style="color:#FFCB6B;">mkdir</span><span style="color:#C3E88D;"> bin</span><span style="color:#C3E88D;"> etc</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">mv</span><span style="color:#C3E88D;"> redis.conf</span><span style="color:#C3E88D;"> /usr/local/redis/etc/</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">mv</span><span style="color:#C3E88D;"> mkreleasehdr.sh</span><span style="color:#C3E88D;"> redis-benchmark</span><span style="color:#C3E88D;"> redis-check-aof</span><span style="color:#C3E88D;"> redis-check-rdb</span><span style="color:#C3E88D;"> redis-cli</span><span style="color:#C3E88D;"> redis-server</span><span style="color:#C3E88D;"> /usr/local/redis/bin/</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">//</span><span style="color:#C3E88D;"> 启动</span></span>
<span class="line"><span style="color:#FFCB6B;">redis-server</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">//</span><span style="color:#C3E88D;"> 设置绑定ip</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">vim</span><span style="color:#C3E88D;"> /etc/redis.conf</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">bind</span><span style="color:#C3E88D;"> xxx</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">//</span><span style="color:#C3E88D;"> 设置后台启动redis</span></span>
<span class="line"><span style="color:#FFCB6B;">vim</span><span style="color:#C3E88D;"> redis.conf</span></span>
<span class="line"><span style="color:#FFCB6B;">daemonized</span><span style="color:#C3E88D;"> yes</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">//</span><span style="color:#C3E88D;"> 查看redis进程</span></span>
<span class="line"><span style="color:#FFCB6B;">netstat</span><span style="color:#C3E88D;"> -tunpl</span><span style="color:#89DDFF;">|</span><span style="color:#FFCB6B;">grep</span><span style="color:#F78C6C;"> 6379</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">//</span><span style="color:#C3E88D;"> 链接redis客户端</span></span>
<span class="line"><span style="color:#FFCB6B;">redis-cli</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br></div></div><h2 id="使用-yum-安装" tabindex="-1">使用 yum 安装 <a class="header-anchor" href="#使用-yum-安装" aria-label="Permalink to &quot;使用 yum 安装&quot;">​</a></h2><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight vp-code"><code><span class="line"><span style="color:#676E95;font-style:italic;">//需要安装Remi的软件源</span></span>
<span class="line"><span style="color:#BABED8;">yum install </span><span style="color:#89DDFF;">-</span><span style="color:#BABED8;">y </span><span style="color:#FFCB6B;">http</span><span style="color:#89DDFF;">:</span><span style="color:#676E95;font-style:italic;">//rpms.famillecollet.com/enterprise/remi-release-7.rpm</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//然后可以使用下面的命令安装最新版本的redis</span></span>
<span class="line"><span style="color:#BABED8;">yum </span><span style="color:#89DDFF;">--</span><span style="color:#BABED8;">enablerepo</span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;">remi install redis</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//安装完毕后，即可使用下面的命令启动redis服务</span></span>
<span class="line"><span style="color:#BABED8;">service redis start</span></span>
<span class="line"><span style="color:#BABED8;">或者</span></span>
<span class="line"><span style="color:#BABED8;">systemctl start redis</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h2 id="特点" tabindex="-1">特点 <a class="header-anchor" href="#特点" aria-label="Permalink to &quot;特点&quot;">​</a></h2><ul><li>速度快，因为数据在内存当中，类似于 HashMap</li><li>支持丰富的数据类型，string, list, set, hash</li><li>支持事物，操作都是原子性的</li><li>丰富的特性，应用场景广泛</li></ul><h2 id="应用场景" tabindex="-1">应用场景 <a class="header-anchor" href="#应用场景" aria-label="Permalink to &quot;应用场景&quot;">​</a></h2><h3 id="缓存" tabindex="-1">缓存 <a class="header-anchor" href="#缓存" aria-label="Permalink to &quot;缓存&quot;">​</a></h3><p>因为 redis 的读取性能优异，每秒可以处理超过 10w 次的读写操作。redis 可以保存多种数据结构，单个 value 的最大限制是 1GB,而 memcached 只能保存1md的数据。</p><h3 id="分布式锁" tabindex="-1">分布式锁 <a class="header-anchor" href="#分布式锁" aria-label="Permalink to &quot;分布式锁&quot;">​</a></h3><p>因为 redis 单线程的特点，对于高并发系统，都是用多服务器部署，在进行逻辑处理的时候可以用到分布式锁来限制程序的并发。</p><h3 id="自动过期" tabindex="-1">自动过期 <a class="header-anchor" href="#自动过期" aria-label="Permalink to &quot;自动过期&quot;">​</a></h3><p>redis 针对数据都可以设置过期时间，可以自动清理过期数据，常见的应用场景：短信验证码，活动开始和截止日期等。</p><h3 id="秒杀的缓存层" tabindex="-1">秒杀的缓存层 <a class="header-anchor" href="#秒杀的缓存层" aria-label="Permalink to &quot;秒杀的缓存层&quot;">​</a></h3><p>可以利用 redis 单线程的特性来控制并发，将 redis 作为缓存平台，由于其读写能力强，不易产生程序阻塞现象。</p><h3 id="发布订阅" tabindex="-1">发布订阅 <a class="header-anchor" href="#发布订阅" aria-label="Permalink to &quot;发布订阅&quot;">​</a></h3><p>可以使用 redis 的发布订阅模式实现一些聊天系统。</p><h2 id="redis-问题" tabindex="-1">redis 问题 <a class="header-anchor" href="#redis-问题" aria-label="Permalink to &quot;redis 问题&quot;">​</a></h2><h3 id="缓存雪崩" tabindex="-1">缓存雪崩 <a class="header-anchor" href="#缓存雪崩" aria-label="Permalink to &quot;缓存雪崩&quot;">​</a></h3><p>缓存雪崩，是指缓存中设置了大批量相同过期时间的数据同时过期失效，而在这一刻访问量剧增，缓存近乎失效，所有请求全部转向 DB，DB 瞬时压力过重雪崩，甚至 down 机。和缓存击穿不同的是，缓存击穿指并发查同一条数据，缓存雪崩是不同数据都过期了，很多数据都查不到从而查数据库。</p><p>解决方案：</p><ul><li>过期时间设置随机，防止同一时间大量数据过期现象发生。</li><li>若 redis 缓存是分布式部署，可以把热点数据均匀分布在不同缓存数据库中。</li><li>均匀设置过期时间，避免同一时期过期</li><li>互斥锁，保证同一时间只有一个应用在构建缓存。</li><li>双 key 策略，主 key 设置过期时间，备 key 永久，主 key 过期，返回备 key 的内容。</li><li>后台更新缓存，定时更新，消息队列通知更新</li></ul><h3 id="缓存穿透" tabindex="-1">缓存穿透 <a class="header-anchor" href="#缓存穿透" aria-label="Permalink to &quot;缓存穿透&quot;">​</a></h3><p>缓存穿透是指查询一个缓存和数据库中都没有的数据，由于大部分缓存策略是被动加载的，并且出于容错考虑，如果从存储层查不到数据则不写入缓存，这将导致这个不存在的数据每次请求都要到存储层去查询，失去了缓存的意义。用户不断发起请求，在流量大时，就可能对 DB 形成巨大的压力，利用不存在的 key 频繁攻击应用也是很大的问题。</p><ul><li>缓存和数据库中都不存在的数据，可以将此 key 对应的 value 设置为一个默认的值，比如 “NULL”，并设置一个缓存的失效时间，这时在缓存失效之前，所有通过此 key 的访问都被缓存挡住了。后面如果此 key 对应的数据在 DB 中存在时，缓存失效之后，通过此 key 再去访问数据，就能拿到新的 value 了。</li><li>接口层增加校验，比如用户鉴权校验，id 根据数据场景做基础校验，id&lt;=0 的直接拦截。</li><li>使用布隆过滤器判断数据是否存在</li></ul><h3 id="缓存击穿" tabindex="-1">缓存击穿 <a class="header-anchor" href="#缓存击穿" aria-label="Permalink to &quot;缓存击穿&quot;">​</a></h3><p>缓存击穿是指缓存中的一个热点 Key(比如一个秒杀商品)，在某个时间点过期的时候，恰好在这个时间点访问量剧增，对这个 Key 有大量的并发请求过来，请求发现缓存过期一般都会从后端 DB 加载数据并回设回缓存，但就在缓存中的数据还没有完全从 DB 中加载过来的这个时间段期间，并发瞬间造成大量请求直接击穿到 DB，对 DB 形成巨大压力。</p><p>缓存击穿，又叫热点 key 问题，是这三个问题中最经典的一个问题。</p><ul><li>互斥锁</li><li>热点数据不设置过期时间，由后台主动更新</li></ul><h3 id="缓存雪崩和缓存击穿的区别" tabindex="-1">缓存雪崩和缓存击穿的区别 <a class="header-anchor" href="#缓存雪崩和缓存击穿的区别" aria-label="Permalink to &quot;缓存雪崩和缓存击穿的区别&quot;">​</a></h3><p>缓存击穿跟缓存雪崩类似，区别就是缓存雪崩是群体失效（多个 key），缓存击穿是单体失效（一个热点 key）。</p><h2 id="redis-的过期策略和内存淘汰机制" tabindex="-1">Redis 的过期策略和内存淘汰机制 <a class="header-anchor" href="#redis-的过期策略和内存淘汰机制" aria-label="Permalink to &quot;Redis 的过期策略和内存淘汰机制&quot;">​</a></h2><h3 id="过期策略" tabindex="-1">过期策略 <a class="header-anchor" href="#过期策略" aria-label="Permalink to &quot;过期策略&quot;">​</a></h3><blockquote><p>定期删除</p></blockquote><p>定期删除指的是Redis默认每隔100ms就随机抽取一些设置了过期时间的key，检测这些key是否过期，如果过期了就将其删掉。</p><p>因为key太多，如果全盘扫描所有的key会非常耗性能，所以是随机抽取一些key来删除。这样就有可能删除不完，需要惰性删除配合。</p><blockquote><p>惰性删除</p></blockquote><p>惰性删除不再是Redis去主动删除，而是在客户端要获取某个key的时候，Redis会先去检测一下这个key是否已经过期，如果没有过期则返回给客户端，如果已经过期了，那么Redis会删除这个key，不会返回给客户端。</p><p>所以惰性删除可以解决一些过期了，但没被定期删除随机抽取到的key。但有些过期的key既没有被随机抽取，也没有被客户端访问，就会一直保留在数据库，占用内存，长期下去可能会导致内存耗尽。所以Redis提供了内存淘汰机制来解决这个问题。</p><h3 id="内存淘汰机制" tabindex="-1">内存淘汰机制 <a class="header-anchor" href="#内存淘汰机制" aria-label="Permalink to &quot;内存淘汰机制&quot;">​</a></h3><p>Redis在使用内存达到某个阈值（通过maxmemory配置)的时候，就会触发内存淘汰机制，选取一些key来删除。内存淘汰有许多策略，下面分别介绍这几种不同的策略。</p><ul><li>noeviction：当内存不足以容纳新写入数据时，新写入操作会报错。默认策略</li><li>allkeys-lru：当内存不足以容纳新写入数据时，在键空间中，移除最近最少使用的key。</li><li>allkeys-random：当内存不足以容纳新写入数据时，在键空间中，随机移除某个key。</li><li>volatile-lru：当内存不足以容纳新写入数据时，在设置了过期时间的键空间中，移除最近最少使用的key。</li><li>volatile-random：当内存不足以容纳新写入数据时，在设置了过期时间的键空间中，随机移除某个key。</li><li>volatile-ttl：当内存不足以容纳新写入数据时，在设置了过期时间的键空间中，有更早过期时间的key优先移除。</li></ul>`,45)]))}const y=a(p,[["render",r]]);export{u as __pageData,y as default};
