import{_ as s,c as a,o as n,a as l}from"./app.d2afdd46.js";const e='{"title":"多种内网穿透姿势，简单易用","description":"","frontmatter":{},"headers":[{"level":2,"title":"什么是内网穿透","slug":"什么是内网穿透"},{"level":3,"title":"应用场景","slug":"应用场景"},{"level":2,"title":"frp工具的使用","slug":"frp工具的使用"},{"level":3,"title":"需要的工具","slug":"需要的工具"},{"level":3,"title":"内网穿透实现web服务","slug":"内网穿透实现web服务"},{"level":3,"title":"启动","slug":"启动"},{"level":3,"title":"客户端设置","slug":"客户端设置"},{"level":3,"title":"启动客户端","slug":"启动客户端"},{"level":3,"title":"内网穿透实现SSH连接","slug":"内网穿透实现ssh连接"},{"level":2,"title":"ngrok工具的使用","slug":"ngrok工具的使用"},{"level":3,"title":"下载客户端","slug":"下载客户端"},{"level":3,"title":"配置客户端authtoken","slug":"配置客户端authtoken"},{"level":3,"title":"开始做内网穿透","slug":"开始做内网穿透"},{"level":2,"title":"小结","slug":"小结"}],"relativePath":"basics/network/nat.md"}',p={},r=[l('<h1 id="多种内网穿透姿势，简单易用" tabindex="-1">多种内网穿透姿势，简单易用 <a class="header-anchor" href="#多种内网穿透姿势，简单易用" aria-hidden="true">#</a></h1><h2 id="什么是内网穿透" tabindex="-1">什么是内网穿透 <a class="header-anchor" href="#什么是内网穿透" aria-hidden="true">#</a></h2><p>内网穿透，即NAT穿透，网络连接时术语，计算机是局域网内时，外网与内网的计算机节点需要连接通信，有时就会出现不支持内网穿透。就是说映射端口，能让外网的电脑找到处于内网的电脑，提高下载速度。不管是内网穿透还是其他类型的网络穿透，都是网络穿透的统一方法来研究和解决。 简单来说就是：外网访问内网指定机器指定端口</p><h3 id="应用场景" tabindex="-1">应用场景 <a class="header-anchor" href="#应用场景" aria-hidden="true">#</a></h3><ul><li>提供内网穿透服务</li><li>连接内网服务器，在外网演示内网web站点</li><li>无需服务器部署，快速调试本地程序，微信公众号开发利器</li><li>支持http、https协议站点，省去证书中间件复杂配置，http协议站点直接升级为https站点</li><li>支持TCP，UDP协议端口转发。支持数据库、SSH、远程桌面、网络摄像头等等开放到外网</li></ul><h2 id="frp工具的使用" tabindex="-1">frp工具的使用 <a class="header-anchor" href="#frp工具的使用" aria-hidden="true">#</a></h2><p>搭建稍微复杂，但是非常灵活，目前内网穿透首选了。<a href="https://github.com/fatedier/frp" target="_blank" rel="noopener noreferrer">frp传送门</a></p><h3 id="需要的工具" tabindex="-1">需要的工具 <a class="header-anchor" href="#需要的工具" aria-hidden="true">#</a></h3><ul><li><p>vps一台，随便什么云都可以</p></li><li><p>自己的终端</p></li></ul><h3 id="内网穿透实现web服务" tabindex="-1">内网穿透实现web服务 <a class="header-anchor" href="#内网穿透实现web服务" aria-hidden="true">#</a></h3><p>先登陆vps看看自己的处理器架构然后选择对应版本的frp</p><div class="language-shell"><pre><code><span class="line"><span style="color:#A6ACCD;">arch</span></span>\n<span class="line"><span style="color:#A6ACCD;">// x86_64</span></span>\n<span class="line"></span></code></pre></div><p>选择<a href="https://github.com/fatedier/frp/releases" target="_blank" rel="noopener noreferrer">amd64版本(frp_0.33.0_linux_amd64.tar.gz)</a></p><div class="language-shell"><pre><code><span class="line"><span style="color:#A6ACCD;">wget https://github.com/fatedier/frp/releases/download/v0.33.0/frp_0.33.0_linux_amd64.tar.gz</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#A6ACCD;">// 解压</span></span>\n<span class="line"><span style="color:#A6ACCD;">tar -zxvf frp_0.33.0_linux_amd64.tar.gz</span></span>\n<span class="line"><span style="color:#A6ACCD;">mv frp_0.33.0_linux_amd64 frp</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#A6ACCD;">vim frps.ini</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#A6ACCD;">// 添加下面配置</span></span>\n<span class="line"><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">common</span><span style="color:#89DDFF;">]</span></span>\n<span class="line"><span style="color:#A6ACCD;">bind_port = 7000</span></span>\n<span class="line"><span style="color:#A6ACCD;">dashboard_port = 7001</span></span>\n<span class="line"><span style="color:#A6ACCD;">token = superYue</span></span>\n<span class="line"><span style="color:#A6ACCD;">dashboard_user = frp</span></span>\n<span class="line"><span style="color:#A6ACCD;">dashboard_pwd = frp</span></span>\n<span class="line"></span></code></pre></div><ul><li>bind_port表示客户端和服务端连接的端口，默认是7000，需要跟客户端的bind_port保持一致。</li><li>dashboard_port是服务端仪表盘的端口，配置完成以后可以通过浏览器访问x.x.x.x:7500查看frp服务的dashborad。</li><li>token是用于客户端跟服务端连接的口令，连接口令，要跟客户端的token保持一致就行。</li><li>dashboard_user和dashboard_pwd表示打开仪表板页面登录的用户名和密码，登陆时候要用上。</li></ul><div class="language-shell"><pre><code><span class="line"><span style="color:#A6ACCD;">vim frps.ini</span></span>\n<span class="line"></span></code></pre></div><p>添加如下配置：</p><div class="language-shell"><pre><code><span class="line"><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">common</span><span style="color:#89DDFF;">]</span></span>\n<span class="line"><span style="color:#A6ACCD;">bind_port = 7000</span></span>\n<span class="line"><span style="color:#A6ACCD;">token = superYue</span></span>\n<span class="line"><span style="color:#A6ACCD;">vhost_http_port = 10080</span></span>\n<span class="line"><span style="color:#A6ACCD;">vhost_https_port = 10443</span></span>\n<span class="line"></span></code></pre></div><ul><li>bind_port表示客户端和服务端连接的端口，默认是7000，需要保持和客户端的bind_port一致。</li><li>token跟服务端设置的token保持一致。</li><li>vhost_http_port和vhost_https_port用于服务端主机访问的端口，需要再vps安全组里添加此端口，保持端口放行。</li></ul><h3 id="启动" tabindex="-1">启动 <a class="header-anchor" href="#启动" aria-hidden="true">#</a></h3><div class="language-shell"><pre><code><span class="line"><span style="color:#A6ACCD;">./frps -c frps.ini</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#A6ACCD;">// 守护进程</span></span>\n<span class="line"><span style="color:#A6ACCD;">nohup ./frps -c frps.ini</span></span>\n<span class="line"></span></code></pre></div><p>打开配置的x.x.x.x:7500就可以看到仪表板截面。</p><p><img src="/blog/assets/cnV1Hg.32f50364.png" alt="img"></p><h3 id="客户端设置" tabindex="-1">客户端设置 <a class="header-anchor" href="#客户端设置" aria-hidden="true">#</a></h3><p>安装同样版本的<code>frp</code>,安装方法一样，mac上面需要使用 <code>frp_0.33.0_darwin_amd64.tar.gz</code>这个版本</p><div class="language-shell"><pre><code><span class="line"><span style="color:#A6ACCD;">vim frpc.ini</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">common</span><span style="color:#89DDFF;">]</span></span>\n<span class="line"><span style="color:#A6ACCD;">server_addr = xxxxx</span></span>\n<span class="line"><span style="color:#A6ACCD;">server_port = 7000</span></span>\n<span class="line"><span style="color:#A6ACCD;">token = superYue</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">web</span><span style="color:#89DDFF;">]</span></span>\n<span class="line"><span style="color:#82AAFF;">type</span><span style="color:#A6ACCD;"> = http</span></span>\n<span class="line"><span style="color:#A6ACCD;">local_port = 9003</span></span>\n<span class="line"><span style="color:#A6ACCD;">custom_domains = xx.xx.xx</span></span>\n<span class="line"></span></code></pre></div><ul><li>server_addr使用的是外网机器IP。</li><li>server_port服务端设置的端口。</li><li>local_port为本地客户端启动的web服务。</li><li>type为代理的类型，web服务设置为http类型。</li><li>custom_domains为外网VPS绑定的访问域名或者机器的IP。</li></ul><h3 id="启动客户端" tabindex="-1">启动客户端 <a class="header-anchor" href="#启动客户端" aria-hidden="true">#</a></h3><div class="language-shell"><pre><code><span class="line"><span style="color:#A6ACCD;">./frpc -c frpc.ini</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#A6ACCD;">// 守护进程</span></span>\n<span class="line"><span style="color:#A6ACCD;">nohup ./frpc -c frpsc.ini</span></span>\n<span class="line"></span></code></pre></div><p>启动成功之后，使用外网IP或者域名:vhost_http_port，即custom_domains:10080，就可以通过外网的访问自己内网/本地启动的web服务了。</p><h3 id="内网穿透实现ssh连接" tabindex="-1">内网穿透实现SSH连接 <a class="header-anchor" href="#内网穿透实现ssh连接" aria-hidden="true">#</a></h3><p>配置 frpc.ini</p><div class="language-shell"><pre><code><span class="line"><span style="color:#A6ACCD;">vim frpc.ini</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">common</span><span style="color:#89DDFF;">]</span></span>\n<span class="line"><span style="color:#A6ACCD;">xxx/ 不赘述了</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">ssh</span><span style="color:#89DDFF;">]</span></span>\n<span class="line"><span style="color:#82AAFF;">type</span><span style="color:#A6ACCD;"> = tcp</span></span>\n<span class="line"><span style="color:#A6ACCD;">local_ip = 127.0.0.1</span></span>\n<span class="line"><span style="color:#A6ACCD;">local_port = 22</span></span>\n<span class="line"><span style="color:#A6ACCD;">remote_port = 8001</span></span>\n<span class="line"></span></code></pre></div><ul><li>server_addr就是你公网服务器的IP。</li><li>server_port服务端设置的端口。</li><li>token跟服务端设置的token保持一致即可。</li><li>type为代理的类型，SSH服务设置为tcp类型。</li><li>local_ip为本地IP。</li><li>local_port为内网客户端设置的SSH端口。</li><li>remote_port为内网提供给外网访问的服务端口。</li></ul><p>启动方式跟穿透Web服务一样，这样我可以通过服务器公网IP和8001端口来连接本地的机器了（SSH）。</p><div class="language-shell"><pre><code><span class="line"><span style="color:#A6ACCD;">ssh -p remote_port username@server_addr</span></span>\n<span class="line"></span></code></pre></div><ul><li>remote_port使用的是内网机器设置的端口。</li><li>username使用的是内网机器的用户名。</li><li>server_addr使用的是外网机器IP。</li></ul><p>frp还有很多其他协议支持，<code>tcp</code>,<code>udp</code>,<code>http</code>,<code>https</code>,<code>stcp</code>, 但是frp的配置方式稍微繁琐，并且需要有自己的vps，下面介绍的工具就非常简单了。</p><h2 id="ngrok工具的使用" tabindex="-1">ngrok工具的使用 <a class="header-anchor" href="#ngrok工具的使用" aria-hidden="true">#</a></h2><p>打开ngrok官网注册一个账号后登录，<a href="https://dashboard.ngrok.com" target="_blank" rel="noopener noreferrer">ngrok官网</a></p><h3 id="下载客户端" tabindex="-1">下载客户端 <a class="header-anchor" href="#下载客户端" aria-hidden="true">#</a></h3><p><img src="/blog/assets/q0LAns.2aa0fd48.png" alt="img"></p><h3 id="配置客户端authtoken" tabindex="-1">配置客户端authtoken <a class="header-anchor" href="#配置客户端authtoken" aria-hidden="true">#</a></h3><p>首页基本给了你想要的一切</p><blockquote><p>command 方式</p></blockquote><div class="language-shell"><pre><code><span class="line"><span style="color:#A6ACCD;">./ngrok authtoken xxxx</span></span>\n<span class="line"></span></code></pre></div><blockquote><p>config 方式</p></blockquote><div class="language-shell"><pre><code><span class="line"><span style="color:#82AAFF;">cd</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">~</span><span style="color:#A6ACCD;">/.ngrok2/ngrok.yml</span></span>\n<span class="line"><span style="color:#A6ACCD;">authtoken: xxxxx</span></span>\n<span class="line"></span></code></pre></div><h3 id="开始做内网穿透" tabindex="-1">开始做内网穿透 <a class="header-anchor" href="#开始做内网穿透" aria-hidden="true">#</a></h3><p><img src="/blog/assets/ngap0n.d7eaf07c.png" alt="img"></p><p>假设你在本机上启动了一个端口号为8000的服务，使用内网穿透工具将当前8000端口的服务映射到外网去。 打开ngrok客户端</p><div class="language-shell"><pre><code><span class="line"><span style="color:#A6ACCD;">ngrok http 8000</span></span>\n<span class="line"></span></code></pre></div><p><img src="/blog/assets/BfBZNa.e802fd07.png" alt="img"></p><p>这样就可通过外网访问 <code>http://24a2c2f8390e.ngrok.io</code> 自己内网的服务啦,是不是非常简单。但是比frp搭建少了一些灵活性，但是不能自定义域名之类的，用来临时处理一下内网穿透需求还是很方便的。</p><h2 id="小结" tabindex="-1">小结 <a class="header-anchor" href="#小结" aria-hidden="true">#</a></h2><p>当然内网穿透的姿势远不至这些，有兴趣的话自己研究把，希望上面的内容可以帮到大家。</p>',56)];var o=s(p,[["render",function(s,l,e,p,o,i){return n(),a("div",null,r)}]]);export{e as __pageData,o as default};