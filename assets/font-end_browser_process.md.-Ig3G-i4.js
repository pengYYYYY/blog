import{_ as a,c as e,o as l,U as i}from"./chunks/framework.UId1oBXU.js";const T=JSON.parse('{"title":"浏览器页面加载过程","description":"","frontmatter":{},"headers":[],"relativePath":"font-end/browser/process.md","filePath":"font-end/browser/process.md","lastUpdated":1704559210000}'),o={name:"font-end/browser/process.md"},t=i('<h1 id="浏览器页面加载过程" tabindex="-1">浏览器页面加载过程 <a class="header-anchor" href="#浏览器页面加载过程" aria-label="Permalink to &quot;浏览器页面加载过程&quot;">​</a></h1><h2 id="准备动作" tabindex="-1">准备动作 <a class="header-anchor" href="#准备动作" aria-label="Permalink to &quot;准备动作&quot;">​</a></h2><p>输入后，先做 url 匹配，从书签，历史记录等地方，找到已经输入的字符串可能匹配的 URL，然后显示出来。让你做选择。</p><h2 id="开始加载" tabindex="-1">开始加载 <a class="header-anchor" href="#开始加载" aria-label="Permalink to &quot;开始加载&quot;">​</a></h2><p>当浏览器刚开始加载一个地址之后，标签页上的图标便进入了加载状态。但此时图中页面显示的依然是之前打开的页面内容。</p><h2 id="url-请求过程" tabindex="-1">URL 请求过程 <a class="header-anchor" href="#url-请求过程" aria-label="Permalink to &quot;URL 请求过程&quot;">​</a></h2><p>进入了页面资源请求过程。这时，浏览器进程会通过进程间通信(IPC)把 URL 请求发送至网络进程，网络进程接收到 URL 请求后，会在这里发起真正的 URL 请求流程。</p><ul><li><p>网络进程会查找本地缓存是否缓存了该资源。如果有缓存资源，那么直接返回资源给 浏览器进程;如果在缓存中没有查找到资源，那么直接进入网络请求流程。这请求前的第一步是要进行 DNS 解析，以获取请求域名的服务器 IP 地址。如果请求协议是 HTTPS，那么还需要建立 TLS 连接。</p></li><li><p>利用 IP 地址和服务器建立 TCP 连接。连接建立之后，浏览器端会构建请求行、 请求头等信息，并把和该域名相关的 Cookie 等数据附加到请求头中，然后向服务器发送构建的请求信息。</p></li><li><p>服务器接收到请求信息后，会根据请求信息生成响应数据(包括响应行、响应头和响应体等信息)，发给网络进程。等网络进程接收了响应行和响应头之后，就开始解析响应头的内容了。</p></li></ul><h2 id="重定向" tabindex="-1">重定向 <a class="header-anchor" href="#重定向" aria-label="Permalink to &quot;重定向&quot;">​</a></h2><p>在接收到服务器返回的响应头后，网络进程开始解析响应头，如果发现返回的状态码是 301 或者 302，那么说明服务器需要浏览器重定向到其他 URL。这时网络进程会从响应头 的 Location 字段里面读取重定向的地址，然后再发起新的 HTTP 或者 HTTPS 请求，一切又重头开始了。</p><h2 id="响应数据类型处理" tabindex="-1">响应数据类型处理 <a class="header-anchor" href="#响应数据类型处理" aria-label="Permalink to &quot;响应数据类型处理&quot;">​</a></h2><ul><li><p>Content-Type： 它告诉浏览器服务器返回的响应体数据是什么类型，然后浏览器会根据 Content-Type 的值来决定如何显示响应体的内容。</p></li><li><p>响应头中的 Content-type 字段的值是 text/html，这就是告诉浏览器，服务器返回的数据是HTML 格式。</p></li><li><p>Content-Type 的值是 application/octet-stream，显示数据是字节流类型的，通常情况下，浏览器会按照下载类型来处理该请求。</p></li></ul><h2 id="准备渲染进程" tabindex="-1">准备渲染进程 <a class="header-anchor" href="#准备渲染进程" aria-label="Permalink to &quot;准备渲染进程&quot;">​</a></h2><p>Chrome 会为每个页面分配一个渲染进程，也就是说，每打开一个新页面就 会配套创建一个新的渲染进程。</p><p>通常情况下，打开新的页面都会使用单独的渲染进程; 如果从 A 页面打开 B 页面，且 A 和 B 都属于同一站点的话，那么 B 页面复用 A 页面的渲染进程;如果是其他情况，浏览器进程则会为 B 创建一个新的渲染进程。</p><p>同一站点：同一站点”定义为根域名(xxxx.org)加上协议(例如，https:// 或者 http://)，还包含了该根域名下的所有子域名和不同的端口</p><h2 id="提交文档" tabindex="-1">提交文档 <a class="header-anchor" href="#提交文档" aria-label="Permalink to &quot;提交文档&quot;">​</a></h2><p>“提交文档”的消息是由浏览器进程发出的，渲染进程接收到“提交文档”的消息后，会和网络进程建立传输数据的“管道”。</p><p>等文档数据传输完成之后，渲染进程会返回“确认提交”的消息给浏览器进程。</p><p>浏览器进程在收到“确认提交”的消息后，会更新浏览器界面状态，包括了安全状态、地址栏的 URL、前进后退的历史状态，并更新 Web 页面。</p><h2 id="渲染阶段" tabindex="-1">渲染阶段 <a class="header-anchor" href="#渲染阶段" aria-label="Permalink to &quot;渲染阶段&quot;">​</a></h2><p>渲染机制过于复杂，所以渲染模块在执行过程中会被划分为很多子阶段，输入的 HTML 经过这些子阶段，最后输出像素。我们把这样的一个处理流程叫做渲染流水线。</p><p>按照渲染的时间顺序，流水线可分为如下几个子阶段: 构建 DOM 树、样式计算、布局阶段、分层、绘制、分块、光栅化和合成。</p><h3 id="构建-dom-树" tabindex="-1">构建 DOM 树 <a class="header-anchor" href="#构建-dom-树" aria-label="Permalink to &quot;构建 DOM 树&quot;">​</a></h3><p>浏览器无法直接理解和使用 HTML，所以需要将 HTML 转换为浏览器能够理解的结构——DOM树。</p><p>解析是将一个元素通过一定的方式转换成另一种形式。 比如 html 的解析。首先要明确，html 下载到浏览器的表现形式就是 包含字符串的文件。浏览器将 html 文件里面的字符串读取到内存中，按照 html 规则，对字符串进行取词编译，将字符串转化成另一种易于表达的数据结构。</p><h3 id="样式计算" tabindex="-1">样式计算 <a class="header-anchor" href="#样式计算" aria-label="Permalink to &quot;样式计算&quot;">​</a></h3><h4 id="把-css-转换为浏览器能够理解的结构" tabindex="-1">把 CSS 转换为浏览器能够理解的结构 <a class="header-anchor" href="#把-css-转换为浏览器能够理解的结构" aria-label="Permalink to &quot;把 CSS 转换为浏览器能够理解的结构&quot;">​</a></h4><p>CSS 样式来源主要有三种:</p><ul><li>通过 link 引用的外部 CSS 文件</li><li><code>&lt;style&gt;</code>标记内的 CSS</li><li>元素的 style 属性内嵌的 CSS</li></ul><p>当渲染引擎接 收到 CSS 文本时，会执行一个转换操作，将 CSS 文本转换为浏览器可以理解的结构—— styleSheets。</p><h4 id="转换样式表中的属性值-使其标准化" tabindex="-1">转换样式表中的属性值，使其标准化 <a class="header-anchor" href="#转换样式表中的属性值-使其标准化" aria-label="Permalink to &quot;转换样式表中的属性值，使其标准化&quot;">​</a></h4><p>现在我们已经把现有的 CSS 文本转化为浏览器可以理解的结构了，那么接下来就要对其进行属性值的标准化操作。</p><p>CSS 文本中有很多属性值，如 2em、blue、bold，这些类型数值不容易 被渲染引擎理解。所以需要将所有值转换为渲染引擎容易理解的、标准化的计算值。</p><h4 id="计算出-dom-树中每个节点的具体样式" tabindex="-1">计算出 DOM 树中每个节点的具体样式 <a class="header-anchor" href="#计算出-dom-树中每个节点的具体样式" aria-label="Permalink to &quot;计算出 DOM 树中每个节点的具体样式&quot;">​</a></h4><p>CSS 继承就是每个 DOM 节点都包含有父节点的样式。所有子节点都继承了父节点样式。</p><p>这里需要特别提下 UserAgent 样式， 它是浏览器提供的一组默认样式，如果你不提供任何样式，默认使用的就是 UserAgent 样式。</p><h3 id="布局阶段" tabindex="-1">布局阶段 <a class="header-anchor" href="#布局阶段" aria-label="Permalink to &quot;布局阶段&quot;">​</a></h3><h4 id="创建布局树" tabindex="-1">创建布局树 <a class="header-anchor" href="#创建布局树" aria-label="Permalink to &quot;创建布局树&quot;">​</a></h4><p>为了构建布局树，浏览器大体上完成了下面这些工作:</p><ul><li>遍历 DOM 树中的所有可见节点，并把这些节点加到布局中;</li><li>而不可见的节点会被布局树忽略掉，如 head 标签下面的全部内容，再比如 <code>body.p.span</code> 这个元素，因为它的属性包含 <code>display:none</code>，所以这个元素也没有被包进布局树。</li></ul><h4 id="布局计算" tabindex="-1">布局计算 <a class="header-anchor" href="#布局计算" aria-label="Permalink to &quot;布局计算&quot;">​</a></h4><p>在执行布局操作的时候，会把布局运算的结果重新写回布局树中，所以布局树既是输入内容也是输出内容，这是布局阶段一个不合理的地方，因为在布局阶段并没有清晰地将输入内容和输出内容区分开来。</p><h3 id="分层" tabindex="-1">分层 <a class="header-anchor" href="#分层" aria-label="Permalink to &quot;分层&quot;">​</a></h3><p>如一些复杂的 3D 变换、页面滚动，或者使用 z-indexing 做 z 轴排序等，为了更加方便地实现这些效果，渲染引擎还需要为特定的节点生成专用的 图层，并生成一棵对应的图层树(LayerTree)。</p><p>浏览器的页面实际上被分成了很多图层，这些图层叠加后合成了最终的页面。</p><p>并不是布局树的每个节点都包含一个图层，如果一个节点没有对应的层，那么 这个节点就从属于父节点的图层。</p><p>满足下面两点中任意一点的元素就可以被提升为单独的一个图层。</p><ul><li>第一点，拥有层叠上下文属性的元素会被提升为单独的一层。</li><li>第二点，需要剪裁(clip)的地方也会被创建为图层。</li></ul><h3 id="图层绘制" tabindex="-1">图层绘制 <a class="header-anchor" href="#图层绘制" aria-label="Permalink to &quot;图层绘制&quot;">​</a></h3><p>在完成图层树的构建之后，渲染引擎会对图层树中的每个图层进行绘制，那么接下来我们看看渲染引擎是怎么实现图层绘制的?</p><p>渲染引擎实现图层的绘制，会把一个图层的绘制拆分成很多小的绘制指令，然后再把这些指令按照顺序组成一个待绘制列表。</p><p>当图层的绘制列表准备好之后，主线程会把该绘制列表提交(commit)给合成线程。</p><h3 id="完整的渲染流程" tabindex="-1">完整的渲染流程 <a class="header-anchor" href="#完整的渲染流程" aria-label="Permalink to &quot;完整的渲染流程&quot;">​</a></h3><ol><li>渲染进程将 HTML 内容转换为能够读懂的DOM 树结构。</li><li>渲染引擎将 CSS 样式表转化为浏览器可以理解的 styleSheets，计算出 DOM 节点的样式。</li><li>创建布局树，并计算元素的布局信息。</li><li>对布局树进行分层，并生成分层树。</li><li>为每个图层生成绘制列表，并将其提交到合成线程。</li><li>合成线程将图层分成图块，并在光栅化线程池中将图块转换成位图。</li><li>合成线程发送绘制图块命令 DrawQuad 给浏览器进程。</li><li>浏览器进程根据 DrawQuad 消息生成页面，并显示到显示器上。</li></ol><h2 id="重排-重绘-合成" tabindex="-1">重排，重绘，合成 <a class="header-anchor" href="#重排-重绘-合成" aria-label="Permalink to &quot;重排，重绘，合成&quot;">​</a></h2><h3 id="更新了元素的几何属性-重排" tabindex="-1">更新了元素的几何属性(重排) <a class="header-anchor" href="#更新了元素的几何属性-重排" aria-label="Permalink to &quot;更新了元素的几何属性(重排)&quot;">​</a></h3><p>如果你通过 JavaScript 或者 CSS 修改元素的几何位置属性，例如改变元素的宽度、高度等，那么浏览器会触发重新布局，解析之后的一系列子阶段，这个过程就叫重排。重排需要更新完整的渲染流水线，所以开销也是最大的。</p><h3 id="更新元素的绘制属性-重绘" tabindex="-1">更新元素的绘制属性(重绘) <a class="header-anchor" href="#更新元素的绘制属性-重绘" aria-label="Permalink to &quot;更新元素的绘制属性(重绘)&quot;">​</a></h3><p>接下来，我们再来看看重绘，比如通过 JavaScript 更改某些元素的背景颜色，渲染流水线会怎样调整呢?你可以参考下图:</p><p>从图中可以看出，如果修改了元素的背景颜色，那么布局阶段将不会被执行，因为并没有引起几何位置的变换，所以就直接进入了绘制阶段，然后执行之后的一系列子阶段，这个过程就叫重绘。相较于重排操作，重绘省去了布局和分层阶段，所以执行效率会比重排操作要高 一些。</p><h3 id="直接合成阶段" tabindex="-1">直接合成阶段 <a class="header-anchor" href="#直接合成阶段" aria-label="Permalink to &quot;直接合成阶段&quot;">​</a></h3><p>那如果你更改一个既不要布局也不要绘制的属性，会发生什么变化呢?渲染引擎将跳过布局和绘制，只执行后续的合成操作，我们把这个过程叫做合成。</p><p>我们使用了 CSS 的 transform 来实现动画效果，这可以避开重排和重绘阶段， 直接在非主线程上执行合成动画操作。这样的效率是最高的，因为是在非主线程上合成，并没有占用主线程的资源，另外也避开了布局和绘制两个子阶段，所以相对于重绘和重排，合成能大大提升绘制效率。</p><h2 id="浏览器的网络请求" tabindex="-1">浏览器的网络请求 <a class="header-anchor" href="#浏览器的网络请求" aria-label="Permalink to &quot;浏览器的网络请求&quot;">​</a></h2><p>浏览器端发起 HTTP 请求流程</p><ul><li>构建请求</li></ul><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight vp-code"><code><span class="line"><span style="color:#FFCB6B;">GET</span><span style="color:#C3E88D;"> /index.html</span><span style="color:#C3E88D;"> HTTP1.1</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul><li>查找缓存</li></ul><p>在真正发起网络请求之前，浏览器会先在浏览器缓存中查询是否有要请求的文件其中，浏览器缓存是一种在本地保存资源副本，以供下次请求时直接使用的技术。命中缓存，返回该资源的副本，并直接结束请求。否则继续请求。</p><ul><li>准备 IP 地址和端口</li></ul><p>第一步浏览器会请求DNS 返回域名对应的IP。当 然浏览器还提供了DNS数据缓存服务，如果某个域名已经解析过了，那么浏览器会缓存解析的结果，以供下次查询时直接使用，这样也会减少一次网络请求。拿到IP 之后，接下来就需要获取端口号了。通常情况下，如果URL没有特别指明端口 号，那么HTTP协议默认是80端口。</p><ul><li>等待TCP队列</li></ul><p>Chrome有个机制，同一个域名同时最多只能建立6个TCP连接， 如果在同一个域名下同时有10个请求发生，其中4个请求会进入排队等待状态，直到进行中的请求完成。</p><ul><li>建立TCP连接</li></ul><p>排队等待结束后，浏览器通过TCP与服务器连接</p><ul><li>发送 HTTP 请求</li></ul><p>首先浏览器会向服务器发送请求行，包括了请求方法，请求URI,HTTP协议。发送请求行就是告诉服务器需要什么资源。 发送请求体，把信息告诉服务器，发送请求行命令之后，还要以请求头形式发送其他一些信息，把浏览器的一些基础 信息告诉服务器。</p><ul><li>服务端处理HTTP请求</li></ul><p>服务器会返回响应行，包括协议版本和状态码，发送响应体</p><ul><li>断开连接</li></ul><p>一旦服务器向客户端返回了请求数据，它就要关闭 TCP 连接，当配置了<code>Connection:Keep-Alive</code>属性,tcp连接会被保持打开状态，这样浏览器可以通过同一个TCP连接发送请求。保持 <code>TCP</code> 连接可以省去下次请求时需要建立连接的时间，提升资源加载速度。</p><h3 id="缓存问题" tabindex="-1">缓存问题 <a class="header-anchor" href="#缓存问题" aria-label="Permalink to &quot;缓存问题&quot;">​</a></h3><p>第二次打开页面时，速度会变快，主要原因是第一次加载页面过程中，缓存了一些耗时操作。</p><p><code>DNS缓存</code> 和 <code>页面资源</code> 会被浏览器缓存下来。dns缓存主要就是在浏览器本地把对应 <code>ip</code> 和域名关联起来。</p><p>页面资源缓存过程，分以下情况:</p><ul><li>本地无缓存，继续请求 <code>web</code> 服务器，<code>web</code> 服务器无缓存，返回数据，数据缓存本地。</li><li>本地缓存在生存期 <code>Max-age</code> 里，无需请求,直接返回本地缓存.</li><li>本地缓存过期，请求 <code>web</code> 服务器，服务器返回 304，缓存内容没有改动，刷新缓存新鲜度。</li></ul><p>当服务器返回 HTTP 响应头给浏览器时，浏览器是通过响 应头中的 Cache-Control 字段来设置是否缓存该资源，通常，我们还需要为这个资源设置一个缓存过期时长。而这个时长是通过 Cache-Control 中的 Max-age 参数来设置的，比 如上图设置的缓存过期时间是 2000 秒。</p><p>这也就意味着，在该缓存资源还未过期的情况下, 如果再次请求该资源，会直接返回缓存中 的资源给浏览器。但如果缓存过期了，浏览器则会继续发起网络请求，并且在 HTTP 请求头中带上:</p><p>服务器收到请求头后，会根据 If-None-Match 的值来判断请求的资源是否有更新，如果没有更新，就返回 304 状态码。如果资源有更新，服务器就直接返回最新资源给浏览器</p><h2 id="加载时间统计" tabindex="-1">加载时间统计 <a class="header-anchor" href="#加载时间统计" aria-label="Permalink to &quot;加载时间统计&quot;">​</a></h2><h3 id="总时间" tabindex="-1">总时间 <a class="header-anchor" href="#总时间" aria-label="Permalink to &quot;总时间&quot;">​</a></h3><p>排队时间 + 网络传输时间 + 页面解析时间</p><h3 id="网络传输层" tabindex="-1">网络传输层 <a class="header-anchor" href="#网络传输层" aria-label="Permalink to &quot;网络传输层&quot;">​</a></h3><ul><li>DNS 时间</li></ul><p>通过域名解析服务（DNS），将指定的域名解析成IP地址的消耗时间，例如将 www.tingyun.com 解析成 42.62.56.35。发生一次域名解析后，WINDOWS操作系统会缓存此操作的结果，当监测节点再次解析相同的域名时，WINDOWS 会将此缓存的结果返回给监测节点，对应消耗时间值可能为0。</p><ul><li>DNS 解析总时间</li></ul><p>浏览一个页面过程中，包含页面中的元素，发生DNS解析时的总花费时间。</p><ul><li>建立连接时间</li></ul><p>浏览器和WEB服务器建立 TCP/IP 连接的消耗时间。当元素下载完成后，浏览器可能会根据服务器返回的结果保持此连接，而不是完全关闭此连接。当监测节点再次和相同的服务器建立连接时，会复用此连接，对应消耗时间可能为0。注：此指标即为 TCP/IP 连接三次握手的前二次握手的时间(从 IE 发送 TCP 包 SYN 到收到服务器返回的 TCP 包 SYN ACK 的时间)，第三次握手时间(从IE发送TCP包ACK到服务器接收此TCP包的时间)不计算在内。</p><ul><li>SSL 握手时间</li></ul><p>IE浏览器和WEB服务器建立安全套接层（SSL）连接的消耗时间。TCP/IP连接建立之后，根据WEB服务器需要，可能建立安全套接层（SSL）连接，例如 使用https协议的网址。和TCP/IP连接一样，SSL连接也可能被相同的服务器保持连接和复用连接，对应消耗时间可能为0。</p><ul><li>重定向时间</li></ul><p>重定向技术可以分为两类，一类是客户端重定向，一类是服务器端重定向。此项指标不包括客户端重定向时间。当IE浏览器通过一个网址访问WEB服务器时，服务器可能通知IE浏览器此网址已经被其它网址所替代，服务器会返回IE浏览器新的网址，浏览器再根据这个新的网址继续访问，这就是服务器重定向。重定向时间是从收到WEB服务器重定向指令到请求WEB服务器的第一个元素之前的消耗时间。</p><ul><li>发出请求时间</li></ul><p>IE浏览器发送HTTP请求开始，到IE浏览器发送HTTP请求结束的消耗时间。注：HTTP请求的最后一个数据包在网络上传送并到达WEB服务器的时间没有包括在内。当一个HTTP请求包含的数据量比较小时，例如仅发出一个元素下载（GET）请求，发出请求时间通常是比较短的。而当一个HTTP请求包含的数据量比较大时，例如上传文件（POST）请求，此请求会被WINDOWS网络层(winInet)分成多个数据包分多次传送到WEB服务器，每个数据包被WEB服务器接收之后才会通知IE浏览器继续传送下一个数据包，所以这时发出请求时间会相对长一些。</p><ul><li>首包时间</li></ul><p>IE 浏览器发送 HTTP 请求结束开始，到收到 WEB 服务器返回的第一个数据包的消耗时间。此指标包含了发送 HTTP 请求时最后一个数据包在网络上的传输时间、服务器响应此请求的时间和服务器回应的第一个数据包在网络上面的传输时间。</p><ul><li>客户端时间</li></ul><p>监测一个页面时，没有发生网络通讯的时间片断的总和。此项指标包括了浏览器内存初始分配，解析下载的数据包，页面显示等多个小段时间的总和。注：当IE浏览器解析数据包等操作和网络通讯同时进行时，此段时间并不包含在客户端时间之内。</p><ul><li>内容下载时间</li></ul><p>监测一个页面时，从页面角度看，IE浏览器接收WEB服务器返回的非第一个数据包的消耗时间。</p><h2 id="页面总下载字节数" tabindex="-1">页面总下载字节数 <a class="header-anchor" href="#页面总下载字节数" aria-label="Permalink to &quot;页面总下载字节数&quot;">​</a></h2><ul><li>页面总下载字节数</li></ul><p>浏览一个页面过程中从 WEB 服务器返回的网络通讯字节总数。此指标包含了 HTTP 协议头的字节数，代表了实际发生的真实的网络流量。</p><ul><li>元素总下载字节数</li></ul><p>下载页面内某一元素时，例如图像元素、css 元素，从 WEB 服务器返回的字节数。注：此指标未包含 HTTP 协议头的字节数，所以当服务器未启用 HTTP 压缩时，页面内全部元素总下载字节数的累计会比页面总下载字节数稍微小一些。而在 WEB 服务器返回的网络数据包是经过 HTTP 压缩的情况下，IE 浏览器会对原始网络数据包解压缩，此指标指的是解压缩后的元素的大小，页面内全部元素总下载字节数的累计会比页面总下载字节数大很多。</p>',117),r=[t];function p(h,n,d,s,c,u){return l(),e("div",null,r)}const b=a(o,[["render",p]]);export{T as __pageData,b as default};
