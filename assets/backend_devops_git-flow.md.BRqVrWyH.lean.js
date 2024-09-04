import{_ as s,c as e,R as n,o as l}from"./chunks/framework.3D9yNSa1.js";const h=JSON.parse('{"title":"git-flow","description":"","frontmatter":{},"headers":[],"relativePath":"backend/devops/git-flow.md","filePath":"backend/devops/git-flow.md","lastUpdated":1725463910000}'),p={name:"backend/devops/git-flow.md"};function o(t,a,r,i,c,d){return l(),e("div",null,a[0]||(a[0]=[n(`<h1 id="git-flow" tabindex="-1">git-flow <a class="header-anchor" href="#git-flow" aria-label="Permalink to &quot;git-flow&quot;">​</a></h1><p><code>Git Flow</code> 把标准的 <code>Git</code> 命令用脚本组合了起来，形成比较有效而简单的命令。</p><h2 id="分支情形" tabindex="-1">分支情形 <a class="header-anchor" href="#分支情形" aria-label="Permalink to &quot;分支情形&quot;">​</a></h2><p>在 <code>Git Flow</code> 中，主要的分支有 <code>master</code>、<code>develop</code>、<code>hotfix</code>、<code>release</code>、<code>feature</code> 这五种分支。<code>master</code> 和 <code>develop</code> 分支是我们最常见的分支，它们被称作长期分支，一直存活在整个工作流程中，而其它的分支大部分会因任务结束而被删除。</p><h2 id="master分支" tabindex="-1">master分支 <a class="header-anchor" href="#master分支" aria-label="Permalink to &quot;master分支&quot;">​</a></h2><p>该分支主要用来存放稳定、随时可以上线的版本。 这个分支的来源只能从别的分支合并过来，开发者不会直接commit到这个分支上。 通常我们也会在这个分支上的提交打上版本号标签。</p><h2 id="develop分支" tabindex="-1">develop分支 <a class="header-anchor" href="#develop分支" aria-label="Permalink to &quot;develop分支&quot;">​</a></h2><p>这个分支主要是所有开发的基础分支。</p><p>当要添加功能时，所有功能都是从这个分支切出去的，而功能分支实现后，也都会合并回来这个分支中。</p><h2 id="hotfix分支" tabindex="-1">hotfix分支 <a class="header-anchor" href="#hotfix分支" aria-label="Permalink to &quot;hotfix分支&quot;">​</a></h2><p>当线上产品发生了紧急问题的时候，就会从master分支中开一个hotfix分支出来进行修复。当hotfix分支修复完成之后，就会合并到master分支中，并且也会合并到develop分支中。</p><h2 id="release分支" tabindex="-1">release分支 <a class="header-anchor" href="#release分支" aria-label="Permalink to &quot;release分支&quot;">​</a></h2><p>当develop分支完成需求后，就可以从develop分支中开一个release分支，进行上线前最后的测试。测试完成后，释放release分支将会同时合并到master以及develop分支中。</p><h2 id="feature分支" tabindex="-1">feature分支 <a class="header-anchor" href="#feature分支" aria-label="Permalink to &quot;feature分支&quot;">​</a></h2><p>当我们需要补充功能的时候，就会从develop分支中开一个feature分支进行功能开发。</p><h2 id="git-flow使用场景" tabindex="-1">git-flow使用场景 <a class="header-anchor" href="#git-flow使用场景" aria-label="Permalink to &quot;git-flow使用场景&quot;">​</a></h2><h3 id="start" tabindex="-1">start <a class="header-anchor" href="#start" aria-label="Permalink to &quot;start&quot;">​</a></h3><p>新功能开始开发前，需准备好开发分支。</p><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight vp-code"><code><span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#C3E88D;"> flow</span><span style="color:#C3E88D;"> feature</span><span style="color:#C3E88D;"> start</span><span style="color:#C3E88D;"> feature-name</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>执行上面命令后，将会在本地创建一个名为 <code>feature-name</code> 的分支，并切换到该分支。 而且无论你当前处于哪个分支，它都会基于本地develop分支创建的。 上述命令相当于执行了下面的Git操作。</p><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight vp-code"><code><span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#C3E88D;"> checkout</span><span style="color:#C3E88D;"> -b</span><span style="color:#C3E88D;"> feature/feature-name</span><span style="color:#C3E88D;"> develop</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>需要注意的一点是，该分支是基于本地的 <code>develop</code> 分支创建，所以执行此命令前一般需要拉取最新的远程代码。</p><h3 id="publish" tabindex="-1">publish <a class="header-anchor" href="#publish" aria-label="Permalink to &quot;publish&quot;">​</a></h3><p>在本地开发完成新功能并进行commit操作后，需要将本地代码提交到远程仓库。</p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight vp-code"><code><span class="line"><span style="color:#BABED8;">git flow feature publish feature</span><span style="color:#89DDFF;">-</span><span style="color:#BABED8;">name</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>该命令主要做了三件事情：</p><ul><li>创建一个名为feature/feature-name的远程分支</li><li>本地分支track远程分支</li><li>如果本地存在还没提交的代码，就进行代码提交</li></ul><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight vp-code"><code><span class="line"><span style="color:#BABED8;">git push origin feature</span><span style="color:#89DDFF;">/&lt;</span><span style="color:#BABED8;">feature</span><span style="color:#89DDFF;">-</span><span style="color:#BABED8;">name</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#BABED8;">git push </span><span style="color:#89DDFF;">--</span><span style="color:#BABED8;">set</span><span style="color:#89DDFF;">-</span><span style="color:#BABED8;">upstream origin feature</span><span style="color:#89DDFF;">/&lt;</span><span style="color:#BABED8;">feature</span><span style="color:#89DDFF;">-</span><span style="color:#BABED8;">name</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#BABED8;">git push origin</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>当你执行后publish操作后，后续还需要进行代码提交的话，只需执行正常的push命令既可。</p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight vp-code"><code><span class="line"><span style="color:#BABED8;">git push</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="finish" tabindex="-1">finish <a class="header-anchor" href="#finish" aria-label="Permalink to &quot;finish&quot;">​</a></h3><p>当功能开发完毕后就将进入测试阶段，此时需要将该分支合并到 <code>develop</code> 分支。</p><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight vp-code"><code><span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#C3E88D;"> flow</span><span style="color:#C3E88D;"> feature</span><span style="color:#C3E88D;"> finish</span><span style="color:#C3E88D;"> feature-name</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>该命令也主要做了三件事情：</p><ul><li>切换到develop分支</li><li>合并代码到develop分支</li><li>删除本地feature/feature-name分支</li></ul><h2 id="git相关操作" tabindex="-1">git相关操作 <a class="header-anchor" href="#git相关操作" aria-label="Permalink to &quot;git相关操作&quot;">​</a></h2><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight vp-code"><code><span class="line"><span style="color:#FFCB6B;">设置新建的分支为默认的igt</span><span style="color:#C3E88D;"> pull</span><span style="color:#C3E88D;"> git</span><span style="color:#C3E88D;"> push</span><span style="color:#C3E88D;"> 分支</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#C3E88D;"> branch</span><span style="color:#C3E88D;"> --set-upstream-to=origin/dev</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#C3E88D;"> branch</span><span style="color:#C3E88D;"> --unset-upstream</span><span style="color:#C3E88D;"> master</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">修改ignore文件后操作</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#C3E88D;"> rm</span><span style="color:#C3E88D;"> -r</span><span style="color:#C3E88D;"> --cached</span><span style="color:#C3E88D;"> .</span><span style="color:#676E95;font-style:italic;">  #清除缓存  </span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#C3E88D;"> add</span><span style="color:#C3E88D;"> .</span><span style="color:#676E95;font-style:italic;"> #重新trace file  </span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#C3E88D;"> commit</span><span style="color:#C3E88D;"> -m</span><span style="color:#89DDFF;"> &quot;</span><span style="color:#C3E88D;">update .gitignore</span><span style="color:#89DDFF;">&quot;</span><span style="color:#676E95;font-style:italic;"> #提交和注释  </span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#C3E88D;"> push</span><span style="color:#C3E88D;"> origin</span><span style="color:#C3E88D;"> master</span><span style="color:#676E95;font-style:italic;"> #可选，如果需要同步到remote上的话</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div>`,37)]))}const b=s(p,[["render",o]]);export{h as __pageData,b as default};
