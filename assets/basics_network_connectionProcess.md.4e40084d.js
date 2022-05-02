import{_ as t,c as e,o as l,a as i}from"./app.8e91bad3.js";const a='{"title":"网络连接过程","description":"","frontmatter":{},"headers":[{"level":2,"title":"关键字","slug":"关键字"},{"level":2,"title":"浏览器生成的消息","slug":"浏览器生成的消息"},{"level":3,"title":"浏览器生成 HTTP 请求消息","slug":"浏览器生成-http-请求消息"},{"level":3,"title":"向 DNS 服务器查询 Web 服务器的 IP 地址","slug":"向-dns-服务器查询-web-服务器的-ip-地址"},{"level":3,"title":"http","slug":"http"},{"level":3,"title":"DNS","slug":"dns"},{"level":3,"title":"ip地址","slug":"ip地址"},{"level":3,"title":"socket库与dns解析","slug":"socket库与dns解析"},{"level":2,"title":"用电信号传输 TCP/IP 数据","slug":"用电信号传输-tcp-ip-数据"},{"level":3,"title":"协议栈","slug":"协议栈"},{"level":3,"title":"套接字实体","slug":"套接字实体"},{"level":3,"title":"调用socket时的操作","slug":"调用socket时的操作"},{"level":3,"title":"连接服务器","slug":"连接服务器"},{"level":3,"title":"IP 与以太网的包收发操作","slug":"ip-与以太网的包收发操作"},{"level":3,"title":"通过 ARP 查询目标路由器的 MAC 地址","slug":"通过-arp-查询目标路由器的-mac-地址"},{"level":3,"title":"网卡","slug":"网卡"},{"level":3,"title":"将 IP 包转换成电或光信号发送出去","slug":"将-ip-包转换成电或光信号发送出去"},{"level":3,"title":"给网络包再加 3 个控制数据","slug":"给网络包再加-3-个控制数据"},{"level":3,"title":"电信号和时钟信号","slug":"电信号和时钟信号"},{"level":3,"title":"向集线器发送网络包","slug":"向集线器发送网络包"},{"level":3,"title":"UDP协议的收发","slug":"udp协议的收发"},{"level":2,"title":"从网线到网络设备","slug":"从网线到网络设备"},{"level":3,"title":"信号在网线和集线器中传输","slug":"信号在网线和集线器中传输"},{"level":3,"title":"交换机的包装操作","slug":"交换机的包装操作"},{"level":3,"title":"路由器的包转发操作","slug":"路由器的包转发操作"},{"level":3,"title":"路由器的附加功能","slug":"路由器的附加功能"},{"level":2,"title":"通过接入网进入互联网内部","slug":"通过接入网进入互联网内部"},{"level":3,"title":"ADSL 接入网的结构和工作方式","slug":"adsl-接入网的结构和工作方式"},{"level":3,"title":"光纤接入网(FTTH)","slug":"光纤接入网-ftth"},{"level":3,"title":"接入网中使用的 PPP 和隧道","slug":"接入网中使用的-ppp-和隧道"},{"level":3,"title":"网络运营商的内部","slug":"网络运营商的内部"},{"level":3,"title":"跨越运营商的网络包","slug":"跨越运营商的网络包"},{"level":2,"title":"服务器端的局域网","slug":"服务器端的局域网"},{"level":3,"title":"Web 服务器的部署地点","slug":"web-服务器的部署地点"},{"level":3,"title":"防火墙的结构和原理","slug":"防火墙的结构和原理"},{"level":3,"title":"通过将请求平均分配给多台服务器来平衡负载","slug":"通过将请求平均分配给多台服务器来平衡负载"},{"level":3,"title":"利用缓存服务器分担负载","slug":"利用缓存服务器分担负载"}],"relativePath":"basics/network/connectionProcess.md"}',d={},r=[i('<h1 id="网络连接过程" tabindex="-1">网络连接过程 <a class="header-anchor" href="#网络连接过程" aria-hidden="true">#</a></h1><blockquote><p>OSI: 7层模型，从上到下</p></blockquote><ul><li>应用层：为应用程序提供服务</li><li>表示层：数据格式化，数据加密</li><li>会话层：建立，管理和维护回话</li><li>传输层：建设、管理和维护端到端的连接</li><li>网络层：IP选址和路由选择</li><li>数据链路层：提供访问介质和链路管理</li><li>物理层：物理层</li></ul><blockquote><p>TCP/IP: 5层模型</p></blockquote><ul><li>应用层：TELENET, SSH, HTTP, SMTP, POP, SSL/TLS, FTP, MIME, HTML, SNMP, MIB, SIP, RTP</li><li>传输层：TCP,UDP</li><li>网络层：交换机（IP,ICMP,RIP,IGMP）</li><li>数据链路层：网卡</li><li>物理层：集线器，中集线，双绞线</li></ul><blockquote><p>TELENET与SSH协议都是客户端连接终端的协议，SSH加密，TELENET不加密.</p></blockquote><h2 id="关键字" tabindex="-1">关键字 <a class="header-anchor" href="#关键字" aria-hidden="true">#</a></h2><ul><li>子网</li><li>子网掩码</li><li>主机号</li><li>IP</li><li>网段</li><li>MAC地址</li><li>tcp连接三次握手</li><li>集线器</li><li>交换机</li><li>路由器</li></ul><h2 id="浏览器生成的消息" tabindex="-1">浏览器生成的消息 <a class="header-anchor" href="#浏览器生成的消息" aria-hidden="true">#</a></h2><h3 id="浏览器生成-http-请求消息" tabindex="-1">浏览器生成 HTTP 请求消息 <a class="header-anchor" href="#浏览器生成-http-请求消息" aria-hidden="true">#</a></h3><ul><li>浏览器先要解析 URL</li><li>文件路径</li><li>HTTP 基本原理 <ul><li>请求方法</li><li>请求头字段</li><li>响应状态码</li></ul></li></ul><h3 id="向-dns-服务器查询-web-服务器的-ip-地址" tabindex="-1">向 DNS 服务器查询 Web 服务器的 IP 地址 <a class="header-anchor" href="#向-dns-服务器查询-web-服务器的-ip-地址" aria-hidden="true">#</a></h3><ul><li>ip地址 <ul><li>子网</li><li>主机号</li><li>子网掩码</li></ul></li><li>Socket 库提供查询 IP 地址的功能（Socket 库是用于调用网络功能的程序组件集合） <ul><li>web浏览器调用操作系统库socket库</li><li>通过解析器向 DNS 服务器发出查询</li></ul></li></ul><h4 id="dns-查询" tabindex="-1">DNS 查询 <a class="header-anchor" href="#dns-查询" aria-hidden="true">#</a></h4><ul><li>域名层级</li><li>DNS服务器层级</li><li>DNS缓存加速</li></ul><h4 id="委托协议栈发送消息" tabindex="-1">委托协议栈发送消息 <a class="header-anchor" href="#委托协议栈发送消息" aria-hidden="true">#</a></h4><ul><li>创建套接字(创建套接字阶段)</li><li>将管道连接到服务器端的套接字上(连接阶段)</li><li>收发数据(通信阶段)</li><li>断开管道并删除套接字(断开阶段)</li></ul><h3 id="http" tabindex="-1">http <a class="header-anchor" href="#http" aria-hidden="true">#</a></h3><h4 id="头中的重要字段" tabindex="-1">头中的重要字段 <a class="header-anchor" href="#头中的重要字段" aria-hidden="true">#</a></h4><table><thead><tr><th>头字段类型</th><th>Http版本</th><th>含义</th></tr></thead><tbody><tr><td>通用头:适用于请求和响应消息的头字段</td><td></td><td></td></tr><tr><td>Date</td><td>http1.0/http1.1</td><td>表示请求和响应生成的日期</td></tr><tr><td>Pragma</td><td>http1.0/http1.1</td><td>表示数据是否允许缓存的通信选项</td></tr><tr><td>Cache-Control</td><td>http1.1</td><td>控制缓存的相关信息</td></tr><tr><td>Connection</td><td>http1.1</td><td>设置发送响应之后 TCP 连接是否继续保持的通信选项</td></tr><tr><td>Transfer-Encoding</td><td>http1.1</td><td>表示消息主体的编码格式</td></tr><tr><td>Via</td><td>http1.1</td><td>记录途中经过的代理和网关</td></tr><tr><td>请求头:用于表示请求消息的附加信息的头字段</td><td></td><td></td></tr><tr><td>Authorization</td><td>http1.0/http1.1</td><td>身份认证数据</td></tr><tr><td>From</td><td>http1.0/http1.1</td><td>请求发送者的邮件地址</td></tr><tr><td>If-Modified-Since</td><td>http1.0/http1.1</td><td>处理缓存字段：如果希望仅当数据在某个日期之后有更新时才执 行请求，可以在这个字段指定希望的日期。</td></tr><tr><td>Referer</td><td>http1.0/http1.1</td><td>当通过点击超级链接进入下一个页面时，在这里会记录下上一个页面的 URI</td></tr><tr><td>User-Agent</td><td>http1.0/http1.1</td><td>客户端软件的名称和版本号等相关信息</td></tr><tr><td>Accept</td><td>http1.0/http1.1</td><td>客户端可支持的数据类型(Content-Type)，以 MIME 类型来表示</td></tr><tr><td>Accept-Charset</td><td>http1.0/http1.1</td><td>客户端可支持的字符集</td></tr><tr><td>Accept-Encoding</td><td>http1.0/http1.1</td><td>客户端可支持的编码格式(Content-Encoding)， 一般来说表示数据的压缩格式</td></tr><tr><td>Accept-Language</td><td>http1.0/http1.1</td><td>客户端可支持的语言，汉语为 zh，英语为 en</td></tr><tr><td>Host</td><td>http1.1</td><td>接收请求的服务器 IP 地址和端口号</td></tr><tr><td>If-Match</td><td>http1.1</td><td>参见 Etag</td></tr><tr><td>If-None-Match</td><td>http1.1</td><td>参见 Etag</td></tr><tr><td>If-Unmodified-Since</td><td>http1.1</td><td>当指定日期之后数据未更新时执行请求</td></tr><tr><td>Range</td><td>http1.1</td><td>当需要只获取部分数据而不是全部数据时，可通过这个字段指定要获取的数据范围</td></tr><tr><td>响应头:用于表示响应消息的附加信息的头字段</td><td></td><td></td></tr><tr><td>Location</td><td>http1.0/http1.1</td><td>表示信息的准确位置。当请求的 URI 为相对路径 时，这个字段用来返回绝对路径</td></tr><tr><td>Server</td><td>http1.0/http1.1</td><td>服务器程序的名称和版本号等相关信息</td></tr><tr><td>WWW-Authenticate</td><td>http1.0/http1.1</td><td>当请求的信息存在访问控制时，返回身份认证用的数据(Challenge 1)</td></tr><tr><td>Accept-Ranges</td><td>http1.1</td><td>当希望仅请求部分数据(使用 Range 来指定范围) 时，服务器会告知客户端是否支持这一功能</td></tr><tr><td>实体头:用于表示实体(消息体)的附加信息的头字段</td><td></td><td></td></tr><tr><td>Allow</td><td>http1.0/http1.1</td><td>表示指定的 URI 支持的方法</td></tr><tr><td>Content-Encoding</td><td>http1.0/http1.1</td><td>当消息体经过压缩等编码处理时，表示其编码格式</td></tr><tr><td>Content-Length</td><td>http1.0/http1.1</td><td>表示消息体的长度</td></tr><tr><td>Content-Type</td><td>http1.0/http1.1</td><td>表示消息体的数据类型，以 MIME 规格定义的数 据类型来表示</td></tr><tr><td>Expires</td><td>http1.0/http1.1</td><td>表示消息体的有效期</td></tr><tr><td>Last-Modified</td><td>http1.0/http1.1</td><td>数据的最后更新日期</td></tr><tr><td>Content-Language</td><td>http1.0/http1.1</td><td>表示消息体的语言。汉语为 zh，英语为 en</td></tr><tr><td>Content-Location</td><td>http1.1</td><td>表示消息体在服务器上的位置(URI)</td></tr><tr><td>Content-Range</td><td>http1.1</td><td>当仅请求部分数据时，表示消息体包含的数据范围</td></tr><tr><td>Etag</td><td>http1.1</td><td>在更新操作中，有时候需要基于上一次请求的响应 数据来发送下一次请求。在这种情况下，这个字段 可以用来提供上次响应与下次请求之间的关联信息。 上次响应中，服务器会通过 Etag 向客户端发送一 个唯一标识，在下次请求中客户端可以通过 If- Match、If-None-Match、If-Range 字段将这个标识 告知服务器，这样服务器就知道该请求和上次的响 应是相关的。这个字段的功能和 Cookie 是相同的， 但 Cookie 是网景(Netscape)公司自行开发的规格， 而 Etag 是将其进行标准化后的规格</td></tr></tbody></table><h4 id="http状态码" tabindex="-1">HTTP状态码 <a class="header-anchor" href="#http状态码" aria-hidden="true">#</a></h4><p>| 状态码 | 含义 | | 1xx | 告知请求的处理进度和情况 | | 2xx | 成功 | | 3xx | 表示需要进一步操作 | | 4xx | 客户端错误 | | 5xx | 服务器错误 |</p><h3 id="dns" tabindex="-1">DNS <a class="header-anchor" href="#dns" aria-hidden="true">#</a></h3><h3 id="ip地址" tabindex="-1">ip地址 <a class="header-anchor" href="#ip地址" aria-hidden="true">#</a></h3><ul><li>TCP/IP 的结构 <img src="/blog/assets/M2OEc8.7ff0ce85.png" alt="img"></li></ul><p>TCP/IP 结构可以理解为由一些小的子网，通过路由器连接起来的一个大网络。子网可以理解为用集线器连接起来的计算机。可以将其看成一个单位，称为子网。将子网通过路由器连接起来，就形成了一个网络。</p><ul><li>路由器：一种对包进行转发的设备，在第 3 章有详细介绍</li><li>集线器：一种对包进行转发的设备，分为中继式集线器和交换式集线器两种</li></ul><ol><li>ip地址主体表示方式：<code>10.11.12.13</code></li><li>采用ip地址主体相同的格式表示子网掩码的方法：<code>10.11.12.13/255.255.255.0</code></li><li>采用网络号比特数来表示子网掩码的方法：<code>10.11.12.13/24</code></li><li>表示子网的地址：<code>10.11.12.0/24</code></li><li>表示子网内广播的地址：<code>10.11.12.255/24</code></li></ol><table><thead><tr><th>-</th><th>十进制表示</th><th>将左侧十进制转换成为比特</th></tr></thead><tbody><tr><td>IP地址</td><td>10.1.2.3</td><td>00001010.00000001.00000010.00000011</td></tr><tr><td>子网掩码</td><td>255.255.255.0</td><td>11111111.11111111.11111111.00000000</td></tr><tr><td>网络号/主机号</td><td>10.1.2/3</td><td>00001010.00000001.00000010/00000011</td></tr></tbody></table><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>IP 地址的主机号 全 0:表示整个子网 全 1:表示向子网上所有设备发送包，即“广播”</p></div><h3 id="socket库与dns解析" tabindex="-1">socket库与dns解析 <a class="header-anchor" href="#socket库与dns解析" aria-hidden="true">#</a></h3><ul><li><p>Socket 库是操作系统中的一种库，其中包含的程序组件，可以让其他的应用程序调用操作系统的网络功能。而解析器就是这个库中 的其中一种程序组件。Socket 库是用于调用网络功能的程序组件集合。</p></li><li><p>在编写浏览器等应用程序的时候只需要。写上解析器的程序名称“gethostbyname”以及 Web 服务器 B的域名“<a href="http://www.xxx.com" target="_blank" rel="noopener noreferrer">www.xxx.com</a>”就可以了，这样就完成了对解析器的调用.<code>gethostbyname(&quot;www.xxx.com&quot;)</code>。</p></li><li><p>解析器内部原理，</p></li></ul><h2 id="用电信号传输-tcp-ip-数据" tabindex="-1">用电信号传输 TCP/IP 数据 <a class="header-anchor" href="#用电信号传输-tcp-ip-数据" aria-hidden="true">#</a></h2><h3 id="协议栈" tabindex="-1">协议栈 <a class="header-anchor" href="#协议栈" aria-hidden="true">#</a></h3><ul><li>创建套接字</li><li>连接服务器</li><li>收发数据</li><li>从服务器断开连接并删除套接字</li><li>IP 与以太网的包收发操作</li><li>用 UDP 协议收发数据的操作</li></ul><blockquote><p>流程图</p></blockquote><p><img src="/blog/assets/rDFEHO.ccf4b794.png" alt="img"></p><ol><li><p>最上面的部分是网络应用程序，浏览器、电子邮件客户端、Web 服务器、电子邮件服务器等程序. 它们会将收发数据等工作委派给下层的部分来完成。不同的应用程序收发的数据内容不同，但收发数据的操作是共通的。 应用程序下面是socket库</p></li><li><p>下面就是操作系统内部了，其中包括协议栈。协议栈的上半部分有 两块，分别是负责用 TCP 协议收发数据的部分和负责用 UDP 协议收发数 据的部分。像浏览器、邮件等一般的应用程序都是使用 TCP 收发数据的，而像 DNS 查询 等收发较短的控制数据的时候则使用 UDP。</p></li><li><p>在互联网上传送数 据时，数据会被切分成一个一个的网络包，而将网络包发送给通信对象的操作就是由 IP 来负责的，此外，IP 中还包括 ICMPA 协议和 ARPB 协议。 ICMP 用于告知网络包传送过程中产生的错误以及各种控制消息，ARP 用 于根据 IP 地址查询相应的以太网 MAC 地址</p></li></ol><h3 id="套接字实体" tabindex="-1">套接字实体 <a class="header-anchor" href="#套接字实体" aria-hidden="true">#</a></h3><p>套接字的实体就是通信控制信息。</p><ul><li>存放控制信息的内存空间：通信对象的 IP 地址、端口号、通信操作的 进行状态。</li><li>在发送数据时，需要看一看套接字中的通信对象 IP 地址和端口号，以便向指定的 IP 地址 和端口发送数据。等待一定时间后发送丢失的数据。 套接字中记录了用于控制通信操作的各种控制信息，协议栈则需要根据这些信息判断下一步的行动，这就是套接 字的作用。</li></ul><h3 id="调用socket时的操作" tabindex="-1">调用socket时的操作 <a class="header-anchor" href="#调用socket时的操作" aria-hidden="true">#</a></h3><p>消息收发的操作</p><p><img src="/blog/assets/YuJPq1.b08bf268.png" alt="img"></p><h3 id="连接服务器" tabindex="-1">连接服务器 <a class="header-anchor" href="#连接服务器" aria-hidden="true">#</a></h3><ul><li><p>当执行数据收发操作时，我们还需要一块用来临时存放 要收发的数据的内存空间，这块内存空间称为缓冲区，它也是在连接操作 的过程中分配的</p></li><li><p>网络包中没有实际的数据，只有控制信息，这些控 制信息位于网络包的开头，因此被称为头部。</p></li></ul><blockquote><p>tcp头部格式</p></blockquote><p><img src="/blog/assets/JyiaEn.8b276132.png" alt="img"></p><blockquote><p>客户端与服务器之间交换的控制信息</p></blockquote><p><img src="/blog/assets/VFFvJn.257059a7.png" alt="img"></p><h4 id="连接操作的实际过程" tabindex="-1">连接操作的实际过程 <a class="header-anchor" href="#连接操作的实际过程" aria-hidden="true">#</a></h4><blockquote><p>ip模块</p></blockquote><p>这个过程是从应用程序调用 Socket 库的 connect 开始的。</p><p>connect(&lt; 描述符 &gt;, &lt; 服务器 IP 地址和端口号 &gt;, ...)</p><blockquote><p>tcp模块（3次握手）</p></blockquote><ul><li><p>客户端：在 TCP 头部中设置发送方和接收方端口号以及 SYN 比特。</p></li><li><p>服务端：返回响应时还需要将 ACK 控制位设为1，表示已经收到，服务器 TCP 模块会将 TCP 头部传递给 IP 模块，并委托 IP 模块向客户端返回响应。</p></li><li><p>客户端：网络包就会返回到客户端，通过 IP 模块到达 TCP 模块，通过 TCP 头部的信息确认连接服务器的操作是否成功，如果 SYN 为 1 则表，示连接成功，这时会向套接字中写入服务器的 IP 地址、端口号等信息，同时还会将状态改为连接完毕。客户端也需要将 ACK 比特设置为 1 并发回服务器，告诉服务器刚才的响应包已经收到。</p></li><li><p>服务器：收到这个返回包之后，连接操作才算全部完成。</p></li></ul><p>只要数据传输过程在持续，也就是在调用 close 断 开之前，连接是一直存在的。建立连接之后，协议栈的连接操作就结束了，也就是说 connect 已经执行完毕，控制流程被交回到应用程序。</p><h4 id="将-http-请求消息交给协议栈" tabindex="-1">将 HTTP 请求消息交给协议栈 <a class="header-anchor" href="#将-http-请求消息交给协议栈" aria-hidden="true">#</a></h4><p>数据收发操作是从应用程序调用 write 将要发送的数据交给协议栈开始的。协议栈并不关心应用程序传来的数据是什么内容。应用程序在调用 write 时会指定发送数据的长度，在协议栈看来，要发送的数据就是一定长度的二进制字节序列而已。</p><p>一次将多少数据交给协议栈 是由应用程序自行决定的，协议栈并不能控制这一行为。因此需要在数据积累到一定量时再发送出去。</p><p>根据下面几个要素来判断需要发送多少个包：</p><ol><li>第一个判断要素是每个网络包能容纳的数据长度</li><li>MTU 表示一个网络包的最大长度，在以太网中一般是 1500 字节(图 2.5)</li><li>MSS:除去头部之后，一个网络包所能容纳的 TCP 数据的最大长度。</li></ol><p><img src="/blog/assets/QwVEjF.3da3e5b1.png" alt="img"></p><p>另一个判断要素是时间。当应用程序发送数据的频率不高的时候，如果每次都等到长度接近 MSS 时再发送，可能会因为等待时间太长而造成发送延迟，这种情况下，即便缓冲区中的数据长度没有达到 MSS，也应该果 断发送出去。为此，协议栈的内部有一个计时器，当经过一定时间之后， 就会把网络包发送出去。</p><p>程序指定不等待填满缓冲区直接发送，则协议栈就会按照要求直接发送数据。</p><h4 id="对较大的数据进行拆分" tabindex="-1">对较大的数据进行拆分 <a class="header-anchor" href="#对较大的数据进行拆分" aria-hidden="true">#</a></h4><p>HTTP 请求消息一般不会很长，一个网络包就能装得下，但如果其中要提交表单数据，长度就可能超过一个网络包所能容纳的数据量，比如在博客或者论坛上发表一篇长文就属于这种情况。</p><blockquote><p>应用程序数据的拆分发送</p></blockquote><p><img src="/blog/assets/vX7T6E.40606e02.png" alt="img"></p><h4 id="使用-ack-号确认网络包已收到" tabindex="-1">使用 ACK 号确认网络包已收到 <a class="header-anchor" href="#使用-ack-号确认网络包已收到" aria-hidden="true">#</a></h4><blockquote><p>序号和 ACK 号的用法</p></blockquote><p><img src="/blog/assets/NcWHwE.6cf8d8d8.png" alt="img"></p><blockquote><p>数据双向传输时的情况</p></blockquote><p><img src="/blog/assets/enCMDG.715924e2.png" alt="img"></p><blockquote><p>序号和 ACK 号的交互</p></blockquote><p><img src="/blog/assets/7ri9Nx.ff16b55b.png" alt="img"></p><p><code>TCP</code> 采用这样的方式确认对方是否收到了数据,在得到对方确认之前，发送过的包都会保存在发送缓冲区中。如果对方没有返回某些包对应的 <code>ACK</code> 号，那么就重新发送这些包。</p><p>网卡、集线器、路由器都没有错误补偿机制，一旦检测到错误 就直接丢弃相应的包。应用程序也是一样，因为采用 <code>TCP</code> 传输，即便发生 一些错误对方最终也能够收到正确的数据，所以应用程序只管自顾自地发 送这些数据就好了</p><p>不过，如果发生网络中断、服务器宕机等问题，那么 无论 <code>TCP</code> 怎样重传都不管用。这种情况下，无论如何尝试都是徒劳，因 此 <code>TCP</code> 会在尝试几次重传无效之后强制结束通信，并向应用程序报错。</p><h4 id="根据网络包平均往返时间调整-ack-号等待时间" tabindex="-1">根据网络包平均往返时间调整 ACK 号等待时间 <a class="header-anchor" href="#根据网络包平均往返时间调整-ack-号等待时间" aria-hidden="true">#</a></h4><ol><li>返回 ACK 号的等待时间(这个等待时间叫超时时间)。</li><li>当网络传输繁忙时就会发生拥塞，ACK 号的返回会变慢，这时我们就 必须将等待时间设置得稍微长一点，否则可能会发生已经重传了包之后， 前面的 ACK 号才姗姗来迟的情况。</li><li>等待时间需要设为一个合适的值，不能太长也不能太短</li></ol><h4 id="使用窗口有效管理-ack-号" tabindex="-1">使用窗口有效管理 ACK 号 <a class="header-anchor" href="#使用窗口有效管理-ack-号" aria-hidden="true">#</a></h4><p>ACK 号的这段时间，需要有效利用</p><blockquote><p>方式对比</p></blockquote><p><img src="/blog/assets/tT9MPM.af340ae6.png" alt="img"></p><ol><li>当接收方的 <code>TCP</code> 收到包后，会先将数据存放到接收缓冲区中</li><li>将数据块组装起来还原成原本的数据并传递给应用程序，如果这些操作还没完成下一个包就到下一个，下一个包也会被暂存在接收缓冲区中。</li><li>数据到达的速率比处理这些数据并传递给应用程序的速率还要快，那么接收缓冲区中的数据就会越堆越多，最后就会溢出。（避免：接收方需要告诉发送方自己最多能接收多少数据）</li></ol><blockquote><p>滑动窗口与接收缓冲区</p></blockquote><p><img src="/blog/assets/xIOqYQ.b3d9c480.png" alt="img"></p><ul><li><p>ACK 与窗口的合并</p></li><li><p>接收 HTTP 响应消息</p></li></ul><h3 id="ip-与以太网的包收发操作" tabindex="-1">IP 与以太网的包收发操作 <a class="header-anchor" href="#ip-与以太网的包收发操作" aria-hidden="true">#</a></h3><blockquote><p>网络包的结构</p></blockquote><p><img src="/blog/assets/sngZCn.ad6a5fe4.png" alt="img"></p><blockquote><p>发送方、接收方和转发设备</p></blockquote><p><img src="/blog/assets/PigTAV.ac76743a.png" alt="img"></p><p>路由器和集线器</p><ul><li>路由器根据目标地址判断下一个路由器的位置</li><li>集线器在子网中将网络包传输到下一个路由</li></ul><p>集线器是按照以太网规则传输包的设备，路由器是按照 <code>IP</code> 规则传输包的设备</p><ul><li><p>IP 协议根据目标地址判断下一个 <code>IP</code> 转发设备的位置</p></li><li><p>子网中的以太网协议将包传输到下一个转发设备</p></li><li><p>(a)<code>MAC</code> 头部(用于以太网协议)</p></li><li><p>(b)<code>IP</code> 头部(用于 <code>IP</code> 协议)</p></li></ul><blockquote><p>Ip头部格式</p></blockquote><p><img src="/blog/assets/LoOBx5.b47560ff.png" alt="img"></p><blockquote><p>mac头部格式</p></blockquote><p><img src="/blog/assets/Z10VXt.751191ff.png" alt="img"></p><ul><li>MAC 地址是在网卡生产时写入 ROM 里的，只要将这个值读取出来写入 MAC 头部就可以了。</li><li>设置发送方 IP 地址时， 我们已经判断出了从哪块网卡发送这个包，那么现在只要将这块网卡对应 的 MAC 地址填进去就好了。</li><li>接收方所以先得搞清楚应该把包发给谁，这个只要查一下路由表 就知道了。在路由表中找到相匹配的条目，然后把包发给 Gateway 列中的 IP 地址就可以了。</li></ul><h3 id="通过-arp-查询目标路由器的-mac-地址" tabindex="-1">通过 ARP 查询目标路由器的 MAC 地址 <a class="header-anchor" href="#通过-arp-查询目标路由器的-mac-地址" aria-hidden="true">#</a></h3><p><img src="/blog/assets/0E7J5c.3605141d.png" alt="img"></p><ul><li>ARP 缓存的内存空间.先查询一下 ARP 缓存，如果其中已经保存 了对方的 MAC 地址，就不需要发送 ARP 查询，直接使用 ARP 缓存中的 地址，而当 ARP 缓存中不存在对方 MAC 地址时，则发送 ARP 查询.</li></ul><blockquote><p>mac地址</p></blockquote><p><img src="/blog/assets/UjvXdY.7f3a357f.png" alt="img"></p><h3 id="网卡" tabindex="-1">网卡 <a class="header-anchor" href="#网卡" aria-hidden="true">#</a></h3><blockquote><p>以太网结构图</p></blockquote><p><img src="/blog/assets/kzMLtK.25fdb20b.png" alt="img"></p><p>以太网的三个特点</p><ul><li>将包发送到 MAC 头部的接收方 MAC 地址代表的目的地</li><li>用发送方 MAC 地址识别发送方</li><li>用以太类型识别包的内容</li></ul><p>(以太网和英特网的差别)</p><ul><li>以太网是局域网</li><li>英特网是具有全球性质的</li></ul><h3 id="将-ip-包转换成电或光信号发送出去" tabindex="-1">将 IP 包转换成电或光信号发送出去 <a class="header-anchor" href="#将-ip-包转换成电或光信号发送出去" aria-hidden="true">#</a></h3><p><img src="/blog/assets/s7RNs0.37b54fa7.png" alt="img"></p><ul><li>网卡驱动程序会对硬件进行初始化操作，然后硬件才进入可以使用的状态</li><li>控制以太网收发操作的 MAC 模块中设置 MAC 地址。</li><li>网卡的 ROM 中保存着全世界唯一的 MAC 地址，这是在生产网卡时写入的，将这个值读出之后就可以对 MAC 模块进行设置，MAC 模块就知 道自己对应的 MAC 地址了</li></ul><h3 id="给网络包再加-3-个控制数据" tabindex="-1">给网络包再加 3 个控制数据 <a class="header-anchor" href="#给网络包再加-3-个控制数据" aria-hidden="true">#</a></h3><p>网卡是如何将包转换成电信号并发送到网线中的，网卡驱动从 IP 模块获取包之后，会将其复制到网卡内的缓冲区中，然后向 MAC 模块发送发送包的命令</p><p><img src="/blog/assets/D7X5O6.3cd062c8.png" alt="img"></p><h3 id="电信号和时钟信号" tabindex="-1">电信号和时钟信号 <a class="header-anchor" href="#电信号和时钟信号" aria-hidden="true">#</a></h3><p><img src="/blog/assets/ciANJL.8ceb151a.png" alt="img"></p><h3 id="向集线器发送网络包" tabindex="-1">向集线器发送网络包 <a class="header-anchor" href="#向集线器发送网络包" aria-hidden="true">#</a></h3><ul><li><p>半双工通信 发送和接收同时并行的方式叫作“全双工”</p></li><li><p>双工通信 某一时刻只能进行发送或接收其中一种操作的叫作“半双工”</p></li></ul><p>MAC 模块从报头开始将数字信息按每个比特转换成电信号，然后由 PHY， 或者叫 MAU 的信号收发模块发送出去。将数字信息转换为电信号的速率就是网络的传输速率，PHY(MAU)模块会将信号转换为可在网线上传输的格式。 MAC 模块将可转换为任意格式的通用信号发送给 PHY(MAU)模块，然后 PHY(MAU)模块 再将其转换为可在网线上传输的格式。</p><h3 id="udp协议的收发" tabindex="-1">UDP协议的收发 <a class="header-anchor" href="#udp协议的收发" aria-hidden="true">#</a></h3><p>和TCP协议相比UDP协议是不可靠的</p><h4 id="udp-头部中的控制信息" tabindex="-1">UDP 头部中的控制信息 <a class="header-anchor" href="#udp-头部中的控制信息" aria-hidden="true">#</a></h4><p><img src="/blog/assets/lbQlmm.e025a5bb.png" alt="img"></p><h2 id="从网线到网络设备" tabindex="-1">从网线到网络设备 <a class="header-anchor" href="#从网线到网络设备" aria-hidden="true">#</a></h2><p>通过网线传输 出去的包是如何经过集线器、交换机和路由器等网络设备，最终进入互联 网的。</p><h3 id="信号在网线和集线器中传输" tabindex="-1">信号在网线和集线器中传输 <a class="header-anchor" href="#信号在网线和集线器中传输" aria-hidden="true">#</a></h3><p>信号从计算机中流出之后，会在网线中经过集线器等设备前进。此时， 信号是如何在网线和集线器传输的？。信号在传输过程中会衰减，还会受到噪声干扰而失真，如何抑制这些影响？</p><h4 id="每个包都是独立传输的" tabindex="-1">每个包都是独立传输的 <a class="header-anchor" href="#每个包都是独立传输的" aria-hidden="true">#</a></h4><p>转发设备会根据包头部中的控制信息，在转发设备内部一个写有转发规则的表中进行查询，以此来判断包的目的地，然后将包朝目的地的方向进行转发。</p><blockquote><p>局域网的简单结构</p></blockquote><p><img src="/blog/assets/ZqJEYD.e50fa717.png" alt="img"></p><ul><li>以太网信号的本质是正负变化的电压，大 家可以认为网卡的 PHY(MAU)模块就是一个从正负两个信号端子输出信 号的电路。</li><li>信号到达集线器的时候并不是跟刚发送出去的时候一模一样。 集线器收到的信号有时会出现衰减。</li><li>信号在网线的传输过程中，能量会逐渐损失。网线越长，信号衰减就越严重。</li></ul><h4 id="双绞”是为了抑制噪声" tabindex="-1">双绞”是为了抑制噪声 <a class="header-anchor" href="#双绞”是为了抑制噪声" aria-hidden="true">#</a></h4><ul><li>产生噪声的原因是网线周围的电磁波，当电磁波接触到金属等导体 时，在其中就会产生电流。</li></ul><h4 id="集线器将信号发往所有线路" tabindex="-1">集线器将信号发往所有线路 <a class="header-anchor" href="#集线器将信号发往所有线路" aria-hidden="true">#</a></h4><p>以太网的基本架构 A 就是将包发到所有的设备，然后由设备根据接收方 MAC 地址来判断应该接 收哪些包，而集线器就是这一架构的忠实体现，它就是负责按照以太网的基本架构将信号广播出去。</p><blockquote><p>交叉网线的使用</p></blockquote><p><img src="/blog/assets/C3GdKo.6e04b28d.png" alt="img"></p><blockquote><p>交叉网线</p></blockquote><p><img src="/blog/assets/ZwgFMk.0027b8cf.png" alt="img"></p><h3 id="交换机的包装操作" tabindex="-1">交换机的包装操作 <a class="header-anchor" href="#交换机的包装操作" aria-hidden="true">#</a></h3><p>交换机的设计是将网络包原样 转发到目的地.</p><h4 id="交换机根据地址表进行转发" tabindex="-1">交换机根据地址表进行转发 <a class="header-anchor" href="#交换机根据地址表进行转发" aria-hidden="true">#</a></h4><ul><li>PHY(MAU)模块会将网线中的信号转换为通用格式,然后传递给 <code>MAC</code> 模块。</li><li>MAC 模块将信号转换为数字信息，然后通过包末尾的 FCS 校验错误，如果没有问题则存放到缓冲区中。</li></ul><p><img src="/blog/assets/4CpyHw.6064153d.png" alt="img"></p><p>交换机的工作方式和网卡有一点不同。网卡本身具有 MAC 地址，并通过核对收到的包的接收方 MAC 地址判断是不是发给自己的，如果不是发给自己的则丢弃。交换机的端口不核对接收方 MAC 地址，而是直接接收所有的包并存放到缓冲区中。和网卡不同，交换机的端口不具有 MAC 地址。</p><h4 id="mac-地址表的维护" tabindex="-1">MAC 地址表的维护 <a class="header-anchor" href="#mac-地址表的维护" aria-hidden="true">#</a></h4><ul><li>第一种是收到包时，将发送方 MAC 地址以及其输入端口的号码写入 MAC地址表中。</li><li>另一种是删除地址表中某条记录的操作，这是为了防止设备移动时产生问题。防止终端设备移动产生问题，只需要将一段时间不使用的过时记录从地址表中删除就可以了。</li></ul><p>交换机会自行更新或删除地址表中的记录，不需要手动维护</p><h4 id="特殊操作" tabindex="-1">特殊操作 <a class="header-anchor" href="#特殊操作" aria-hidden="true">#</a></h4><ul><li>交换机发现一个包要发回到原端口时，就会直接丢弃这个包</li><li>地址表中找不到指定的 MAC 地址，交换机无法判断应该把包转发到哪个端口，只能将包转发到除了源端口之外的所有端 口上，无论该设备连接在哪个端口上都能收到这个包。</li><li>如果接收方 MAC 地址是一个广播地址 A，那么交换机会将包发送到除源端口之外的所有端口</li></ul><blockquote><p>不向源端口转发网络包</p></blockquote><p><img src="/blog/assets/N4GyXU.258b4674.png" alt="img"></p><h4 id="全双工模式可以同时进行发送和接收" tabindex="-1">全双工模式可以同时进行发送和接收 <a class="header-anchor" href="#全双工模式可以同时进行发送和接收" aria-hidden="true">#</a></h4><ul><li><p>全双工模式是交换机特有的工作模式，它可以同时进行发送和接收操作，集线器不具备这样的特性。</p></li><li><p>使用双绞线时，发送和接收的信号线是各自独立的。在双绞线中信号不会发生碰撞。</p></li><li><p>网线连接的另一端，即交换机端口和网卡的 PHY (MAU)模块以及 MAC 模块，其内部发送和接收电路也是各自独立的，信号也不会发生碰撞</p></li><li><p>在全双工模式下，无需等待其 他信号结束就可以发送信号，因此它比半双工模式速度要快。由于双方可以同时发送数据，所以可同时传输的数据量也更大，性能也就更高。</p></li></ul><h4 id="自动协商-确定最优的传输速率" tabindex="-1">自动协商:确定最优的传输速率 <a class="header-anchor" href="#自动协商-确定最优的传输速率" aria-hidden="true">#</a></h4><p>自动切换工作模式的功能。这一功能可 以由相互连接的双方探测对方是否支持全双工模式，并自动切换成相应的工作模式。此外，除了能自动切换工作模式之外，还能探测对方的传输速率并进行自动切换。</p><h4 id="交换机可同时执行多个转发操作" tabindex="-1">交换机可同时执行多个转发操作 <a class="header-anchor" href="#交换机可同时执行多个转发操作" aria-hidden="true">#</a></h4><ul><li>交换机只将包转发到具有特定 MAC 地址的设备连接的端口，其他端口都是空闲的。</li><li>当包从最上面的端口发送到最下 面的端口时，其他端口都处于空闲状态，这些端口可以传输其他的包。因此交换机可以同时转发多个包。</li><li>相对地，集线器会将输入的信号广播到所有的端口，如果同时输入多个信号就会发生碰撞，无法同时传输多路信号，因此从设备整体的转发能力来看，交换机要高于集线器。</li></ul><h3 id="路由器的包转发操作" tabindex="-1">路由器的包转发操作 <a class="header-anchor" href="#路由器的包转发操作" aria-hidden="true">#</a></h3><p>路由器和交换机是有区别的。因为路由器是基于 IP 设计的，而交换机是基于以太网设计的。</p><ul><li>转发模块负责判断包的转发目的地</li><li>端口模块负责包的收发操作</li><li>路由器转发模 块和端口模块的关系，就相当于协议栈的 IP 模块和网卡之间的关系</li><li>路由器的端口具有 MAC 地址，因此它就能够成为以太网的发送方和接收方，端口还具有 IP 地址，从这个意义上来说，它和计算机的网卡是一样的。当转发包时，首先路由器端口会接收发给自己的以太网包，然后查询转发目标，再由相应的端口作为发送方将以太网包发送出去。</li><li>交换机只是将进来的包转发出去而已，它自己并不会成为 发送方或者接收方。</li><li>路由器会忽略主机号，只匹配网络号。</li></ul><p><img src="/blog/assets/LW6mIS.8ea45849.png" alt="img"></p><blockquote><p>路由聚合</p></blockquote><p>路由聚合，多个子网会被合并成一个子网，子网掩码会发生 变化，同时，目标地址列也会改成聚合后的地址。</p><p><img src="/blog/assets/yRcoxq.11784982.png" alt="img"></p><ul><li>根据目标地址和子网 掩码匹配到某条记录后，路由器就会将网络包交给接口列中指定的网络接口(即端口)，并转发到网关列中指定的 IP 地址</li></ul><p>路由表进行维护的方法有几种</p><ul><li>人手动维护路由记录</li><li>根据路由协议机制，通过路由器之间的信息交换由路由器自行维护路由表的记录</li></ul><h4 id="路由器的包接收操作" tabindex="-1">路由器的包接收操作 <a class="header-anchor" href="#路由器的包接收操作" aria-hidden="true">#</a></h4><ul><li>信号到达网线接口部分，其中的 PHY(MAU)模块和 MAC 模块将信号转换为数字信息，然后通过包末尾的 FCS 进行错误校验。</li><li>如果没问题则检查 MAC 头部中的接收方 MAC 地址，看看是不是发给自己的包</li><li>如果是就放到接收缓冲区中，否则就丢弃这个包</li><li>如果包的接收方 MAC 地址不是自己，说明这个包是发给其他设备的，如果接收这个包就违反了以太网的规则。</li></ul><h4 id="查询路由表确定输出端口" tabindex="-1">查询路由表确定输出端口 <a class="header-anchor" href="#查询路由表确定输出端口" aria-hidden="true">#</a></h4><ul><li>完成包接收操作之后，路由器就会丢弃包开头的 MAC 头部</li><li>MAC 头部的作用就是将包送达路由器，其中的接收方 MAC 地址就是路由器端口的 MAC 地址。</li></ul><h4 id="找不到匹配路由时选择默认路由" tabindex="-1">找不到匹配路由时选择默认路由 <a class="header-anchor" href="#找不到匹配路由时选择默认路由" aria-hidden="true">#</a></h4><ul><li>子网掩码 0.0.0.0 的意思是网络包接收方 IP 地址和路由表目标地址 的匹配中需要匹配的比特数为 0，换句话说，就是根本不需要匹配</li><li>只要 将子网掩码设置为 0.0.0.0，那么无论任何地址都能匹配到这一条记录，这 样就不会发生不知道要转发到哪里的问题了。</li></ul><h4 id="包的有效期" tabindex="-1">包的有效期 <a class="header-anchor" href="#包的有效期" aria-hidden="true">#</a></h4><p>TTL(Time to Live，生存时间)</p><ul><li>包每经过一个路由器的转发，TTL就会减 1，当这个值变成 0 时，就表示超过了有效期，这个包就会被丢弃。</li><li>这个机制是为了防止包在一个地方陷入死循环</li></ul><h4 id="通过分片功能拆分大网络包" tabindex="-1">通过分片功能拆分大网络包 <a class="header-anchor" href="#通过分片功能拆分大网络包" aria-hidden="true">#</a></h4><p>不同的线路和局域网类型各自能传输的最大包长度也不同，因此 输出端口的最大包长度可能会小于输入端口，即便两个端口的最大包长度相同，也可能会因为添加了一些头部数据而导致包的实际长度发生变化。 <img src="/blog/assets/5pT9Yt.72d23224.png" alt="img"></p><h3 id="路由器的附加功能" tabindex="-1">路由器的附加功能 <a class="header-anchor" href="#路由器的附加功能" aria-hidden="true">#</a></h3><p>路由器除了基本功能之外，还有一些附加功能。</p><h4 id="地址转换" tabindex="-1">地址转换 <a class="header-anchor" href="#地址转换" aria-hidden="true">#</a></h4><p>在内网中可用作私有地址的范围仅限 以下这些。</p><ul><li>10.0.0.0 ~ 10.255.255.255</li><li>172.16.0.0 ~ 172.31.255.255</li><li>192.168.0.0 ~ 192.168.255.255</li></ul><blockquote><p>私有地址和公有地址分别管理</p></blockquote><p><img src="/blog/assets/JZS0Se.8fb637fa.png" alt="img"></p><h4 id="地址转换的基本原理" tabindex="-1">地址转换的基本原理 <a class="header-anchor" href="#地址转换的基本原理" aria-hidden="true">#</a></h4><p>地址转换的基本原理是在转发网络包时对 IP 头部中的 IP 地址和端口号进行改写。</p><p><img src="/blog/assets/YHUAbb.a0d0a39e.png" alt="img"></p><h2 id="通过接入网进入互联网内部" tabindex="-1">通过接入网进入互联网内部 <a class="header-anchor" href="#通过接入网进入互联网内部" aria-hidden="true">#</a></h2><p>看一看网络包是如何通过互联网接入路由器，最终进入互联网内部的</p><h3 id="adsl-接入网的结构和工作方式" tabindex="-1">ADSL 接入网的结构和工作方式 <a class="header-anchor" href="#adsl-接入网的结构和工作方式" aria-hidden="true">#</a></h3><blockquote><p>互联网的整体架构</p></blockquote><p><img src="/blog/assets/qzgOvg.a328dca8.png" alt="img"></p><p>互联网的基本结构与家庭、公司网络一样，我们可以将互联网理解为家庭、公司网络的一个放大版。</p><ul><li>距离的不同和路由的维护方式，就是互联网与家庭、公司网络之间最主要的两个不同点。</li></ul><h4 id="接入网" tabindex="-1">接入网 <a class="header-anchor" href="#接入网" aria-hidden="true">#</a></h4><p>指连接互联网与家庭、公司网络的通信线路。一般家用的接入网方式包括 ADSLB、FTTHC、CATV、电话线、ISDN 等，公司则还可能使用专线。接入网的线路有很多种类，我们无法探索所有这些线路，因此下面先介绍一个比较有代表性的例子——ADSL。</p><blockquote><p>网络包形态的变化</p></blockquote><p><img src="/blog/assets/3xr8j7.f5c2abb2.png" alt="img"></p><h4 id="adsl-modem-将包拆分成信元" tabindex="-1">ADSL Modem 将包拆分成信元 <a class="header-anchor" href="#adsl-modem-将包拆分成信元" aria-hidden="true">#</a></h4><blockquote><p>信号的调制</p></blockquote><p><img src="/blog/assets/ZeAaIz.c53357b7.png" alt="img"></p><h4 id="连接用户与互联网的接入网" tabindex="-1">连接用户与互联网的接入网 <a class="header-anchor" href="#连接用户与互联网的接入网" aria-hidden="true">#</a></h4><blockquote><p>从用户到电话局</p></blockquote><h3 id="光纤接入网-ftth" tabindex="-1">光纤接入网(FTTH) <a class="header-anchor" href="#光纤接入网-ftth" aria-hidden="true">#</a></h3><p>光纤是由一种双层结构的纤维状透明材质(玻璃和塑料)构成的，通过在里面的纤芯中传导光信号来传输数字信息。ADSL 信号是由多个频段的信号组成的，比较复杂，但光信号却非 常简单，亮表示 1，暗表示 0。</p><blockquote><p>光纤的结构 <img src="/blog/assets/SK8zmH.c9192b36.png" alt="img"></p></blockquote><blockquote><p>光纤的通信原理</p></blockquote><p><img src="/blog/assets/pDeAzS.f2652484.png" alt="img"></p><ul><li>数字信息并不能一下子变成光信号，先将数字信息转换成电信号，然后再将电信号转换成光信号。这里的电信号非常简单，1 用高电压表示，0 用低电压表示。</li><li>将这样的电信号输入 LED、激光二极管等光源后，这些光源就会根据信号电压的变化发光， 高电压发光亮，低电压发光暗。</li></ul><h3 id="接入网中使用的-ppp-和隧道" tabindex="-1">接入网中使用的 PPP 和隧道 <a class="header-anchor" href="#接入网中使用的-ppp-和隧道" aria-hidden="true">#</a></h3><p>互联网本来就是由很多台路由器相互连接组成的，因此原则上应该是 将接入网连接到路由器上。随着接入网发展到 ADSL 和 FTTH，接入网连接的路由器也跟着演进，而这种进化型的路由器就叫作 BAS。</p><h4 id="ppp" tabindex="-1">PPP <a class="header-anchor" href="#ppp" aria-hidden="true">#</a></h4><p>PPP 拨号连接操作</p><p><img src="/blog/assets/A6mVZV.cef25218.png" alt="img"></p><h4 id="pppoe" tabindex="-1">PPPoE <a class="header-anchor" href="#pppoe" aria-hidden="true">#</a></h4><p>PPPoE 是由传统电话拨号 上网上使用的 PPP 协议发展而来的，所以我们先来看一看 PPP 拨号上网的工作方式。</p><h3 id="网络运营商的内部" tabindex="-1">网络运营商的内部 <a class="header-anchor" href="#网络运营商的内部" aria-hidden="true">#</a></h3><h4 id="pop-和-noc" tabindex="-1">POP 和 NOC <a class="header-anchor" href="#pop-和-noc" aria-hidden="true">#</a></h4><blockquote><p>互联网内部概览</p></blockquote><p><img src="/blog/assets/DGdYjV.c3a041b4.png" alt="img"></p><blockquote><p>POP概览</p></blockquote><p><img src="/blog/assets/h9MP8b.6df111eb.png" alt="img"></p><h3 id="跨越运营商的网络包" tabindex="-1">跨越运营商的网络包 <a class="header-anchor" href="#跨越运营商的网络包" aria-hidden="true">#</a></h3><blockquote><p>运营商之间的路由信息交换</p></blockquote><p><img src="/blog/assets/qCQWpW.32e8b776.png" alt="img"></p><blockquote><p>路由信息交换的类型</p></blockquote><p><img src="/blog/assets/Fhht2W.76d50c13.png" alt="img"></p><h2 id="服务器端的局域网" tabindex="-1">服务器端的局域网 <a class="header-anchor" href="#服务器端的局域网" aria-hidden="true">#</a></h2><h3 id="web-服务器的部署地点" tabindex="-1">Web 服务器的部署地点 <a class="header-anchor" href="#web-服务器的部署地点" aria-hidden="true">#</a></h3><blockquote><p>服务器位置</p></blockquote><p><img src="/blog/assets/5WSpYm.af29866d.png" alt="img"></p><ul><li>第一种，网络包裸奔，不安全，</li><li>防火墙可以对网络包进行安全检查</li><li>数据中心通过高速线路直接连接到互联网的核心部分，当服务器访问量很大时这是非常有效的。</li></ul><h3 id="防火墙的结构和原理" tabindex="-1">防火墙的结构和原理 <a class="header-anchor" href="#防火墙的结构和原理" aria-hidden="true">#</a></h3><blockquote><p>地址转换和包过滤中用于设置规则的字段 <img src="/blog/assets/D1sIio.2296bcda.png" alt="img"></p></blockquote><blockquote><p>包过滤的示例 <img src="/blog/assets/MEVYb2.c51dc6d6.png" alt="img"></p></blockquote><ul><li>也可以通过端口号来限定应用程序是否可以通过</li><li>从公司内网访问公开区域的规则</li><li>从外部无法访问公司内网</li><li>当网络包经过时，可以通过防火墙</li></ul><h3 id="通过将请求平均分配给多台服务器来平衡负载" tabindex="-1">通过将请求平均分配给多台服务器来平衡负载 <a class="header-anchor" href="#通过将请求平均分配给多台服务器来平衡负载" aria-hidden="true">#</a></h3><p>性能不足时需要负载均衡</p><p>通过轮询的方式来指定访问服务器IP地址</p><blockquote><p>DNS轮询</p></blockquote><p><img src="/blog/assets/iglWS7.be77a49f.png" alt="img"></p><blockquote><p>负载均衡器</p></blockquote><p><img src="/blog/assets/VNzctz.e6282b19.png" alt="img"></p><blockquote><p>缓存服务器工作流程</p></blockquote><p><img src="/blog/assets/hVjUF1.df784f53.png" alt="img"></p><blockquote><p>缓存服务器的三种部署方式</p></blockquote><p><img src="/blog/assets/fDGXca.488a65fb.png" alt="img"></p><blockquote><p>如何找到最近的缓存服务器</p></blockquote><p><img src="/blog/assets/BNKwaj.7459bcbf.png" alt="img"></p><h3 id="利用缓存服务器分担负载" tabindex="-1">利用缓存服务器分担负载 <a class="header-anchor" href="#利用缓存服务器分担负载" aria-hidden="true">#</a></h3>',260)];var h=t(d,[["render",function(t,i,a,d,h,p){return l(),e("div",null,r)}]]);export{a as __pageData,h as default};