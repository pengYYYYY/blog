import{_ as s,c as a,o as n,U as e}from"./chunks/framework.B9byA8Cw.js";const F=JSON.parse('{"title":"Auth","description":"","frontmatter":{},"headers":[],"relativePath":"font-end/browser/auth.md","filePath":"font-end/browser/auth.md","lastUpdated":1710606289000}'),o={name:"font-end/browser/auth.md"},l=e(`<h1 id="auth" tabindex="-1">Auth <a class="header-anchor" href="#auth" aria-label="Permalink to &quot;Auth&quot;">​</a></h1><p>基于 <code>session</code> 和基于 <code>JWT</code> 的方式的主要区别就是用户的状态保存的位置，<code>session</code> 是保存在服务端的，而 <code>JWT</code> 是保存在客户端的。</p><h2 id="jwt-的原理" tabindex="-1">JWT 的原理 <a class="header-anchor" href="#jwt-的原理" aria-label="Permalink to &quot;JWT 的原理&quot;">​</a></h2><p>简单来说，<code>JWT</code> 只是一个具有以下格式的字符串,它由三部分组成：</p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight vp-code"><code><span class="line"><span style="color:#BABED8;">header</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">payload</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">signature</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight vp-code"><code><span class="line"><span style="color:#676E95;font-style:italic;">// header</span></span>
<span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;"> &quot;</span><span style="color:#C3E88D;">typ</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">: </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">JWT</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">  &quot;</span><span style="color:#C3E88D;">alg</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">: </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">HS256</span><span style="color:#89DDFF;">&quot;</span><span style="color:#676E95;font-style:italic;"> //算法</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// payload</span></span>
<span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">  &quot;</span><span style="color:#C3E88D;">userId</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">: </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">xxx</span><span style="color:#89DDFF;">&quot;</span><span style="color:#676E95;font-style:italic;"> //存一个用户信息</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// signature</span></span>
<span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#82AAFF;">  iss</span><span style="color:#F07178;"> (</span><span style="color:#BABED8;">issuer</span><span style="color:#F07178;">)：</span><span style="color:#BABED8;">签发人</span></span>
<span class="line"><span style="color:#82AAFF;">  exp</span><span style="color:#F07178;"> (</span><span style="color:#BABED8;">expiration</span><span style="color:#BABED8;"> time</span><span style="color:#F07178;">)：</span><span style="color:#BABED8;">过期时间</span></span>
<span class="line"><span style="color:#82AAFF;">  sub</span><span style="color:#F07178;"> (</span><span style="color:#BABED8;">subject</span><span style="color:#F07178;">)：</span><span style="color:#BABED8;">主题</span></span>
<span class="line"><span style="color:#82AAFF;">  aud</span><span style="color:#F07178;"> (</span><span style="color:#BABED8;">audience</span><span style="color:#F07178;">)：</span><span style="color:#BABED8;">受众</span></span>
<span class="line"><span style="color:#82AAFF;">  nbf</span><span style="color:#F07178;"> (</span><span style="color:#BABED8;">Not</span><span style="color:#BABED8;"> Before</span><span style="color:#F07178;">)：</span><span style="color:#BABED8;">生效时间</span></span>
<span class="line"><span style="color:#82AAFF;">  iat</span><span style="color:#F07178;"> (</span><span style="color:#BABED8;">Issued</span><span style="color:#BABED8;"> At</span><span style="color:#F07178;">)：</span><span style="color:#BABED8;">签发时间</span></span>
<span class="line"><span style="color:#82AAFF;">  jti</span><span style="color:#F07178;"> (</span><span style="color:#BABED8;">JWT</span><span style="color:#BABED8;"> ID</span><span style="color:#F07178;">)：</span><span style="color:#BABED8;">编号</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><p>签名使用以下伪代码计算：</p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight vp-code"><code><span class="line"><span style="color:#BABED8;">data </span><span style="color:#89DDFF;">=</span><span style="color:#82AAFF;"> base64urlEncode</span><span style="color:#BABED8;">( header ) </span><span style="color:#89DDFF;">+</span><span style="color:#BABED8;"> “</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">” </span><span style="color:#89DDFF;">+</span><span style="color:#82AAFF;"> base64urlEncode</span><span style="color:#BABED8;">( payload )</span></span>
<span class="line"><span style="color:#BABED8;">hashedData </span><span style="color:#89DDFF;">=</span><span style="color:#82AAFF;"> hash</span><span style="color:#BABED8;">( data</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> secret ) </span><span style="color:#676E95;font-style:italic;">// 密钥很重要</span></span>
<span class="line"><span style="color:#BABED8;">signature </span><span style="color:#89DDFF;">=</span><span style="color:#82AAFF;"> base64urlEncode</span><span style="color:#BABED8;">( hashedData )</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="jwt-如何保护我们的数据" tabindex="-1">JWT 如何保护我们的数据 <a class="header-anchor" href="#jwt-如何保护我们的数据" aria-label="Permalink to &quot;JWT 如何保护我们的数据&quot;">​</a></h3><p><code>JWT</code> 内的数据是经过编码和签名的，而不是加密的。编码数据的目的是转换数据的结构。签名数据允许数据接收器验证数据源的真实性。 因为服务器是知道密钥的，通过上面的三步就可以得到一个哈希值，然后进行比较后做匹配。</p><h2 id="jwt-的优点" tabindex="-1">JWT 的优点 <a class="header-anchor" href="#jwt-的优点" aria-label="Permalink to &quot;JWT 的优点&quot;">​</a></h2><ol><li>可扩展性好 应用程序分布式部署的情况下，<code>session</code> 需要做多机数据共享，通常可以存在数据库或者 <code>redis</code> 里面。而 <code>JWT</code> 不需要。</li><li>无状态 <code>JWT</code> 不在服务端存储任何状态。<code>RESTfulAPI</code> 的原则之一是无状态，发出请求时，总会返回带有参数的响应，不会产生附加影响。用户的认证状态引入这种附加影响，这破坏了这一原则。另外 <code>JWT</code> 的载荷中可以存储一些常用信息，用于交换信息，有效地使用 <code>JWT</code>，可以降低服务器查询数据库的次数。</li></ol><h2 id="jwt-的缺点" tabindex="-1">JWT 的缺点 <a class="header-anchor" href="#jwt-的缺点" aria-label="Permalink to &quot;JWT 的缺点&quot;">​</a></h2><ul><li>安全性</li></ul><p>由于 <code>JWT</code> 的 <code>payload</code> 是使用 <code>base64</code> 编码的，并没有加密，因此 <code>JWT</code> 中不能存储敏感数据。而 <code>session</code> 的信息是存在服务端的，相对来说更安全。</p><ul><li>性能</li></ul><p><code>JWT</code> 太长。由于是无状态使用 <code>JWT</code>，所有的数据都被放到 <code>JWT</code> 里，如果还要进行一些数据交换，那载荷会更大，经过编码之后导致 <code>JWT</code> 非常长，cookie 的限制大小一般是 4k，cookie 很可能放不下，所以 <code>JWT</code> 一般放在 <code>localStorage</code> 里面。并且用户在系统中的每一次 <code>http</code> 请求都会把 <code>JWT</code> 携带在 <code>Header</code> 里面，<code>http</code> 请求的 <code>Header</code> 可能比 <code>Body</code> 还要大。而 <code>sessionId</code> 只是很短的一个字符串，因此使用 <code>JWT</code> 的 <code>http</code> 请求比使用 <code>session</code> 的开销大得多。</p><ul><li>一次性</li></ul><p>无状态是 <code>JWT</code> 的特点，但也导致了这个问题，<code>JWT</code> 是一次性的。想修改里面的内容，就必须签发一个新的 <code>JWT</code>。无法废弃通过上面 <code>JWT</code> 的验证机制可以看出来，一旦签发一个 <code>JWT</code>，在到期之前就会始终有效，无法中途废弃。</p><ul><li>续签</li></ul><p>要改变 JWT 的有效时间，就要签发新的 <code>JWT</code>。最简单的一种方式是每次请求刷新 JWT，即每个 http 请求都返回一个新的 JWT。这个方法不仅暴力不优雅，而且每次请求都要做 JWT 的加密解密，会带来性能问题。</p><h3 id="jwt-的登出操作" tabindex="-1">JWT 的登出操作 <a class="header-anchor" href="#jwt-的登出操作" aria-label="Permalink to &quot;JWT 的登出操作&quot;">​</a></h3><p>在实现登出操作的时候，此时 <code>JWT</code> 并没过期，且 <code>JWT</code> 是无状态的，我们可以将这类 <code>key</code>，存在 <code>redis</code> 里面，然后在权鉴时做判断，<code>redis</code> 中 <code>key</code> 的实效时间，就是 <code>JWT</code> 的失效时间。</p><h2 id="auth2-0" tabindex="-1">Auth2.0 <a class="header-anchor" href="#auth2-0" aria-label="Permalink to &quot;Auth2.0&quot;">​</a></h2><p>OAuth协议，是一种授权协议，常用于用户权限的授权。</p><h3 id="授权码流程" tabindex="-1">授权码流程 <a class="header-anchor" href="#授权码流程" aria-label="Permalink to &quot;授权码流程&quot;">​</a></h3><p>采用 Authorization Code 获取 Access Token 的授权验证流程又被称为 Web Server Flow，适用于所有有 Server端的应用。有以下的几个步骤：</p><ol><li>通过 client_id 请求授权服务端，获取 Authorization Code。</li><li>通过 Authorization Code、client_id、client_secret（保存在服务端）请求授权服务端，在验证完 Authorization Code 是否失效以及接入的客户端信息是否有效。授权服务端生成 Access Token 和 Refresh Token 并返回给客户端。</li><li>客户端通过得到的 Access Token 请求资源服务应用，获取需要的且在申请的 Access Token 权限范围内的资源信息。</li></ol>`,28),p=[l];function c(t,r,d,i,y,u){return n(),a("div",null,p)}const h=s(o,[["render",c]]);export{F as __pageData,h as default};
