import{_ as s,o as a,c as n,a as l}from"./app.d6e52298.js";const e="/blog/assets/figma-embed.7ace3c39.png",o="/blog/assets/figma-container.3830cb25.png",p="/blog/assets/algolia-dashboard.43c19250.png",c="/blog/assets/algolia-api-keys.fe92223f.png",r="/blog/assets/algolia-search-list.a56573ec.png",m=JSON.parse('{"title":"Blog \u7FFB\u65B0\u8BB0\u5F55","description":"","frontmatter":{},"headers":[{"level":2,"title":"Why","slug":"why","link":"#why","children":[]},{"level":2,"title":"How","slug":"how","link":"#how","children":[]},{"level":2,"title":"Other","slug":"other","link":"#other","children":[]},{"level":2,"title":"Summarize","slug":"summarize","link":"#summarize","children":[]},{"level":2,"title":"\u7EED","slug":"\u7EED","link":"#\u7EED","children":[]},{"level":2,"title":"algolia","slug":"algolia","link":"#algolia","children":[{"level":3,"title":"\u7533\u8BF7","slug":"\u7533\u8BF7","link":"#\u7533\u8BF7","children":[]},{"level":3,"title":"\u8BBE\u7F6E apikey","slug":"\u8BBE\u7F6E-apikey","link":"#\u8BBE\u7F6E-apikey","children":[]},{"level":3,"title":"\u722C\u53D6\u6570\u636E","slug":"\u722C\u53D6\u6570\u636E","link":"#\u722C\u53D6\u6570\u636E","children":[]},{"level":3,"title":"\u6570\u636E\u5217\u8868","slug":"\u6570\u636E\u5217\u8868","link":"#\u6570\u636E\u5217\u8868","children":[]},{"level":3,"title":"vitepess \u914D\u7F6E","slug":"vitepess-\u914D\u7F6E","link":"#vitepess-\u914D\u7F6E","children":[]}]}],"relativePath":"article/record/blog-refactor.md","lastUpdated":1662652261000}'),t={name:"article/record/blog-refactor.md"},i=l('<h1 id="blog-\u7FFB\u65B0\u8BB0\u5F55" tabindex="-1">Blog \u7FFB\u65B0\u8BB0\u5F55 <a class="header-anchor" href="#blog-\u7FFB\u65B0\u8BB0\u5F55" aria-hidden="true">#</a></h1><p>\u6D45\u8BB0\u5F55\u4E00\u4E0B <code>blog</code> \u7FFB\u65B0\u7684\u8FC7\u7A0B\u3002</p><h2 id="why" tabindex="-1">Why <a class="header-anchor" href="#why" aria-hidden="true">#</a></h2><ul><li>\u7B2C\u4E00\u70B9\uFF1A\u81EA\u4ECE\u7528\u4E86 <code>vite</code> \u4EE5\u540E\u5B9E\u5728\u662F\u5FCD\u4E0D\u4E86\u70ED\u66F4\u65B0\u7684\u901F\u5EA6\u3002\u57FA\u672C\u4E0A\u4E2A\u4EBA\u7684\u6240\u6709\u6280\u672F\u6808\u90FD\u5728\u5F80 <code>vite</code> \u8FC1\u79FB\u3002\u6240\u4EE5\u60F3\u628A <code>blog</code> \u7FFB\u65B0\u4E00\u4E0B, \u5F3A\u8FEB\u75C7\u3002</li><li>\u7B2C\u4E8C\u70B9\uFF1A\u4E4B\u524D\u7684 <code>blog</code> \u5C31\u662F\u6587\u6863+\u56FE\u7247\uFF0C\u6BD4\u8F83\u751F\u786C\uFF0C\u4E14\u90FD\u662F\u5B66\u4E60\u8BB0\u5F55\u3002\u65B0\u7684 <code>blog</code> \u60F3\u505A\u70B9\u65B0\u80FD\u529B\u8FDB\u6765\uFF0C\u53E6\u5916\u5C31\u662F\u628A\u4EE5\u524D\u7684\u5B66\u4E60\u5185\u5BB9\u518D\u597D\u597D\u6574\u7406\u4E00\u4E0B\u3002</li><li>\u7B2C\u4E09\u70B9\uFF1A\u611F\u89C9 <code>vue</code> \u7684\u65B0\u5B98\u7F51\u633A\u597D\u770B\u7684\uFF0C\u60F3\u7528 <code>@vue/theme</code> \u6298\u817E\u4E00\u4E0B\u3002</li></ul><h2 id="how" tabindex="-1">How <a class="header-anchor" href="#how" aria-hidden="true">#</a></h2><ul><li>setup\uFF1A\u65B0\u7684 <code>blog</code> \u51B3\u5B9A\u4E86\u7528 <code>vue</code> \u65B0\u5B98\u7F51\u7684\u914D\u8272\uFF0C\u90A3\u5C31\u76F4\u63A5\u7AD9\u5728\u5DE8\u4EBA\u7684\u80A9\u8180\u4E0A\u5427\uFF0C\u4E8E\u662F\u4E4E <code>fork</code> \u4E00\u4EFD <a href="https://github.com/vuejs-translations/docs-zh-cn" target="_blank" rel="noreferrer">docs-zh-cn</a>\u3002\u8FD9\u4E5F\u662F\u5BF9\u4E8E <code>@vue/theme</code> \u7684\u6700\u4F73\u5B9E\u8DF5\u5427\u3002</li><li>\u6587\u4EF6\u8D44\u6E90\uFF1A\u8FC1\u79FB\u8001\u7AD9\u70B9\u7684\u6587\u6863\uFF0C\u8FD9\u4E2A\u65F6\u5019\u9047\u5230\u4E86\u4E00\u4E2A\u95EE\u9898\uFF0C\u4E4B\u524D\u7684\u56FE\u7247\u5168\u90E8\u90FD\u662F\u653E\u5230 <code>gitee</code> \u7684\u56FE\u5E8A\uFF0C\u6709\u4E00\u5929\u7A81\u7136\u5168\u90E8\u6302\u4E86\uFF0C\u90A3\u5929\u817E\u8BAF\u4E91 <code>cos</code> \u8FD8\u4E13\u95E8\u505A\u4E86\u4E00\u4E2A\u6D3B\u52A8\u6765\u8FC1\u79FB\u3002\u4E0D\u8FC7\u4E3A\u4E86\u907F\u514D\u540E\u9762\u518D\u53D1\u751F\u8FD9\u6837\u7684\u4E8B\u60C5\uFF0C\u8FD8\u662F\u76F4\u63A5\u628A\u56FE\u7247\u8D44\u6E90\u5B58\u5728github\u5427\u3002</li><li>\u90E8\u7F72\uFF1A\u90E8\u7F72\u8FD8\u662F\u7528<a href="https://github.com/JamesIves/github-pages-deploy-action" target="_blank" rel="noreferrer">github-pages-deploy-action</a> \u8FD9\u4E2A\u5F88\u6210\u719F\u7684\u5E93\uFF0C\u5F53\u7136\u8FD8\u6709\u5F88\u591A\u79CD\u514D\u8D39\u7684\u90E8\u7F72\u8D44\u6E90\u53EF\u4EE5\u53BB\u770B <a href="https://vitejs.dev/guide/static-deploy.html" target="_blank" rel="noreferrer">vite-static-deploy</a>\u3002</li></ul><h2 id="other" tabindex="-1">Other <a class="header-anchor" href="#other" aria-hidden="true">#</a></h2><ul><li>figma: \u8111\u56FE\u4F1A\u8FC1\u79FB\u5230 <code>figjam</code> \u91CC\u9762\u53BB\uFF0C<code>figma</code> \u7684 <code>embed</code> \u53EF\u4EE5\u751F\u6210\u4E00\u4E2A <code>iframe</code>, \u505A\u4E00\u4E2A <code>figma-container</code> \u7EC4\u4EF6\u540E\u53EF\u4EE5\u76F4\u63A5\u5D4C\u5165\u5230\u6587\u6863\u91CC\u9762\u6765\u3002\u4F53\u9A8C\u4F1A\u6BD4\u4E4B\u524D\u7684\u8111\u56FE\u622A\u56FE\u597D\u5F88\u591A\u3002\u4E4B\u524D\u753B\u7684\u8111\u56FE\u6BD4\u8F83\u591A\uFF0C\u4F1A\u6162\u6162\u53BB\u505A\u8FC1\u79FB\u3002</li></ul><blockquote><p>\u5206\u4EAB\u6309\u94AE</p></blockquote><p><img src="'+e+'" alt="img"></p><blockquote><p>\u6587\u6863\u5D4C\u5165\u6548\u679C</p></blockquote><p><img src="'+o+'" alt="img"></p><ul><li>xmind: \u662F\u8FC4\u4ECA\u4E3A\u6B62\u5F88\u4F18\u79C0\u7684\u8111\u56FE\u8F6F\u4EF6\u4E86\uFF0C\u5BF9\u6BD4\u767E\u5EA6\u8111\u56FE\uFF0C\u817E\u8BAF\u6587\u6863\u7B49\uFF0C\u4F53\u9A8C\u786E\u5B9E\u597D\u4E0D\u5C11\u3002\u4F46\u662F\u5728\u534F\u540C\u529E\u516C\u6D6A\u6F6E\u4E2D\uFF0C<code>xmind</code> \u5BF9\u5728\u7EBF\u534F\u540C\u7F16\u8F91\u7684\u80FD\u529B\u652F\u6301\u786E\u5B9E\u4E0D\u8DB3\uFF0C\u5B58\u5728\u5F88\u591A\u4E0D\u65B9\u4FBF\u7684\u5730\u65B9\uFF0C\u4E14web\u7248\u672C\u7684\u4E0D\u652F\u6301\u5BF9\u5728\u7EBF\u6587\u4EF6\u7684\u6253\u5F00\u9884\u89C8\uFF0C\u4E0D\u7B26\u5408\u4E2A\u4EBA\u9700\u6C42\u3002\u53EF\u4EE5\u53BB\u4F53\u9A8C <a href="https://xmind.works/#/" target="_blank" rel="noreferrer">web-xmind</a>\uFF0C\u53EF\u4EE5\u5B58\u50A8\u6587\u4EF6\u5230\u4E91\u76D8\u91CC\u9762\uFF0C\u7136\u540E\u5728 <code>web-xmind</code> \u91CC\u9762\u6253\u5F00\u3002\u7F3A\u70B9\u5C31\u662F\u6574\u4E2A\u94FE\u8DEF\u6CA1\u6709\u6253\u901A\uFF0C\u6CA1\u6709\u7C7B\u4F3C <code>figma embed</code> \u8FD9\u79CD\u4E1C\u897F\u3002</li></ul><h2 id="summarize" tabindex="-1">Summarize <a class="header-anchor" href="#summarize" aria-hidden="true">#</a></h2><p>\u603B\u7ED3\u4E0B\u6765\uFF0C\u6574\u4E2A\u6D41\u7A0B\u6CA1\u6709\u5F88\u5927\u7684\u96BE\u70B9\uFF0C\u4F46\u662F\u4E5F\u82B1\u4E86\u4E00\u4E9B\u65F6\u95F4\u5728\u8FD9\u4E0A\u9762\uFF0C\u535A\u5BA2\u7AD9\u70B9\u786E\u5B9E\u53EF\u4EE5\u5F88\u5FEB\u53BB\u642D\u5EFA\uFF0C\u8FD8\u662F\u60F3\u63D0\u5347\u4E00\u4E0B\u53EF\u73A9\u6027\u3002\u4E2A\u4EBA\u628A\u535A\u5BA2\u5F53\u4F5C\u4E00\u4E2A\u8BB0\u5F55\u7684\u8F7D\u4F53\uFF0C\u91CD\u8981\u7684\u8FD8\u662F\u575A\u6301\u5199\u70B9\u4E1C\u897F\u3002\u53E6\u5916\u8FD8\u6709 <code>algolia</code> \u6CA1\u6709\u53BB\u5F04\uFF0C\u5BF9\u9762\u4E0A\u7684\u7FFB\u65B0\u53EA\u662F\u4E00\u4E2A\u8D77\u70B9\uFF0C\u540E\u9762\u8FD8\u6709\u5F88\u591A\u53EF\u73A9\u513F\u7684\u5730\u65B9\uFF0C\u4E4B\u524D\u7684\u7AD9\u70B9\u786E\u5B9E\u8BA9\u81EA\u5DF1\u6CA1\u6709\u6B32\u671B\u53BB\u66F4\u65B0\u548C\u5199\u4E1C\u897F\uFF0C\u6295\u5165\u4E00\u4E9B\u65F6\u95F4\u5728\u65B0 <code>blog</code> \u91CC\u9762\uFF0C\u8BA9\u81EA\u5DF1\u66F4\u6709\u52A8\u529B\u53BB\u505A\u8FD9\u4EF6\u4E8B\u60C5\u3002</p><h2 id="\u7EED" tabindex="-1">\u7EED <a class="header-anchor" href="#\u7EED" aria-hidden="true">#</a></h2><p>\u6700\u8FD1\u53D1\u73B0 <code>vitepress</code> \u53D1\u5E03 <code>1.0</code> \u4E86\uFF0C\u800C\u4E14 <code>ui</code> \u548C <code>@vue/theme</code> \u5DEE\u4E0D\u591A\uFF0C\u751A\u81F3\u66F4\u9002\u5408\u4E00\u70B9\uFF0C\u6700\u8FD1 <code>vitest</code> <code>vite</code> \u8FD9\u4E9B\u5E93\u7684\u5B98\u7F51\u4E5F\u90FD\u6362\u4E86\u65B0\u88C5\u3002\u51B3\u5B9A\u653E\u5F03 <code>@vue/theme</code> \u8FD9\u4E00\u5957\uFF0C\u76F4\u63A5\u6539\u5230\u7B80\u5355\u7684\u6A21\u5F0F\u7684 <code>vitepress</code>\uFF0C\u4E4B\u524D\u90A3\u4E00\u5957\u6709\u8FC7\u591A\u7684\u5B9A\u5236\u5316\u7684\u4E1C\u897F\uFF0C\u5305\u62EC <code>logo</code> \u90FD\u662F\u9B54\u6539\u7684\u3002\u63A5\u5165 <code>vitepress</code> \u7684\u8FC7\u7A0B\u5F88\u7B80\u5355\uFF0C\u57FA\u672C\u4E0A\u5C31\u662F\u590D\u5236\uFF0C\u7136\u540E\u5220\u6389\u4E00\u4E9B\u6CA1\u7528\u7684\u5305\u3002\u53D1\u73B0\u4E00\u4E2A <code>logo</code> \u70B9\u51FB\u8DF3\u8F6C\u7684 <code>bug</code>, \u5B98\u65B9\u4E5F\u5F88\u5FEB\u5C31\u89E3\u51B3\u4E86\u3002\u7136\u540E\u89E3\u51B3\u4E86\u9EBB\u70E6\u7684 <code>algolia</code> \u914D\u7F6E\u95EE\u9898\u3002</p><h2 id="algolia" tabindex="-1">algolia <a class="header-anchor" href="#algolia" aria-hidden="true">#</a></h2><p>Algolia \u662F\u4E00\u4E2A\u6570\u636E\u5E93\u5B9E\u65F6\u641C\u7D22\u670D\u52A1\uFF0C\u80FD\u591F\u63D0\u4F9B\u6BEB\u79D2\u7EA7\u7684\u6570\u636E\u5E93\u641C\u7D22\u670D\u52A1\uFF0C\u5E76\u4E14\u5176\u670D\u52A1\u80FD\u4EE5 API \u7684\u5F62\u5F0F\u65B9\u4FBF\u5730\u5E03\u5C40\u5230\u7F51\u9875\u3001\u5BA2\u6237\u7AEF\u3001APP \u7B49\u591A\u79CD\u573A\u666F\u3002</p><h3 id="\u7533\u8BF7" tabindex="-1">\u7533\u8BF7 <a class="header-anchor" href="#\u7533\u8BF7" aria-hidden="true">#</a></h3><p>algolia \u4E5F\u63D0\u4F9B\u4E86\u4E00\u4E2A\u4E13\u95E8\u7528\u4E8E\u6587\u6863\u641C\u7D22\u670D\u52A1\u7684 <code>docsearch</code>\uFF0C\u9700\u8981\u8FDB\u884C\u7533\u8BF7\u3002</p><p><a href="https://docsearch.algolia.com/apply/" target="_blank" rel="noreferrer">\u641C\u7D22\u670D\u52A1\u7533\u8BF7\u5730\u5740</a></p><p>\u7533\u8BF7\u5B8C\u4EE5\u540E\u53D1\u73B0\u9700\u8981\u82B1\u5F88\u957F\u65F6\u95F4\u7B49\u5F85\u5BA1\u6279\uFF0C\u4E8E\u662F\u76F4\u63A5\u7528\u6807\u51C6\u5316\u7684\u670D\u52A1\u4E86\u3002</p><h3 id="\u8BBE\u7F6E-apikey" tabindex="-1">\u8BBE\u7F6E apikey <a class="header-anchor" href="#\u8BBE\u7F6E-apikey" aria-hidden="true">#</a></h3><p><img src="'+p+'" alt="img"></p><p>\u8FDB\u5165\u4E3B\u754C\u9762\uFF0C\u70B9\u51FB API Keys\u3002</p><p>\u8FD9\u65F6\u5019API Keys\u9ED8\u8BA4\u63D0\u4F9B\u4E86\u56DB\u4E2A\uFF0C\u5206\u522B\u5BF9\u5E94\u4E0D\u540C\u7684\u6743\u9650\uFF0C\u6211\u4EEC\u53EA\u9700\u8981\u7528\u5230\u4E24\u4E2A\u5373\u53EF:</p><ul><li>Search-Only API Key: \u53EA\u80FD\u7528\u4E8E\u641C\u7D22\uFF0C\u5728\u751F\u4EA7\u4E2D\u4F7F\u7528\u3002</li><li>Admin API Key: \u7BA1\u7406\u5458API\uFF0C\u53EF\u7528\u4F5C\u6240\u6709\u4E8B\u60C5\uFF0C\u5728\u722C\u53D6\u6570\u636E\u7684\u65F6\u5019\u4F7F\u7528\u3002</li></ul><p><img src="'+c+`" alt="img"></p><h3 id="\u722C\u53D6\u6570\u636E" tabindex="-1">\u722C\u53D6\u6570\u636E <a class="header-anchor" href="#\u722C\u53D6\u6570\u636E" aria-hidden="true">#</a></h3><p>\u65B0\u5EFA\u6587\u4EF6\u5939\u548C\u5BF9\u5E94\u6587\u4EF6\u76EE\u5F55\u5982\u4E0B\uFF1A</p><div class="language-text line-numbers-mode"><button class="copy"></button><span class="lang">text</span><pre><code><span class="line"><span style="color:#A6ACCD;">- algoliaConfig</span></span>
<span class="line"><span style="color:#A6ACCD;">-- .env</span></span>
<span class="line"><span style="color:#A6ACCD;">-- config.js</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h4 id="env\u6587\u4EF6\u914D\u7F6E" tabindex="-1">.env\u6587\u4EF6\u914D\u7F6E <a class="header-anchor" href="#env\u6587\u4EF6\u914D\u7F6E" aria-hidden="true">#</a></h4><p><code>appid</code> \u548C <code>api-key</code>,\u8FD9\u91CC\u4F7F\u7528\u7684\u662F <code>admin api key</code>.\u5207\u8BB0\u4E0D\u8981\u6CC4\u6F0F\uFF0C\u4E5F\u4E0D\u8981\u4F20\u5230 <code>github</code> \u4E0A\u9762\uFF0C\u672C\u5730\u8DD1\u5B8C\u5373\u53EF\u3002</p><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">APPLICATION_ID=PXUFXUCGYX</span></span>
<span class="line"><span style="color:#A6ACCD;">API_KEY=xxx</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h4 id="config-json-\u914D\u7F6E\u95EE\u9898" tabindex="-1">config.json \u914D\u7F6E\u95EE\u9898 <a class="header-anchor" href="#config-json-\u914D\u7F6E\u95EE\u9898" aria-hidden="true">#</a></h4><div class="language-json line-numbers-mode"><button class="copy"></button><span class="lang">json</span><pre><code><span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">index_name</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">blog</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">start_urls</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">https://pengyyyyy.github.io/blog</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;">//\u7EBF\u4E0A\u5730\u5740</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">],</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">stop_urls</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[],</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">selectors</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;">//\u8BCD\u6761\u7EA7\u522B,\u5BF9\u5E94\u7684HTML\u6807\u7B7E</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">lvl0</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F78C6C;">selector</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">sidebar-links sidebar-group-items</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F78C6C;">global</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">true,</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F78C6C;">default_value</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Documentation</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">lvl1</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">h1</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">lvl2</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">h2</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">strip_chars</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;"> .,;:#</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">custom_settings</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">attributesForFaceting</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">language</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">version</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">conversation_id</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">809666386</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">],</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">scrap_start_urls</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">false,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">nb_hits</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">OUTPUT OF THE CRAWL</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br></div></div><h4 id="\u5229\u7528-algolia-docsearch-scraper-\u722C\u53BB\u7EBF\u4E0A\u9875\u9762" tabindex="-1">\u5229\u7528 algolia/docsearch-scraper \u722C\u53BB\u7EBF\u4E0A\u9875\u9762 <a class="header-anchor" href="#\u5229\u7528-algolia-docsearch-scraper-\u722C\u53BB\u7EBF\u4E0A\u9875\u9762" aria-hidden="true">#</a></h4><p>\u4F7F\u7528 <code>docker</code> \u722C\u53D6\u6570\u636E\u3002\u8FDB\u5165\u6587\u4EF6\u5939\u4E0B\u8FD0\u884C\u5982\u4E0B\u547D\u4EE4\u5373\u53EF\uFF0C\u722C\u53BB\u7684\u6570\u636E\u4F1A\u81EA\u52A8\u4E0A\u4F20\u5230 <code>algolia</code> \u7684\u670D\u52A1\u5668</p><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">docker run -it --env-file=.env -e </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">CONFIG=</span><span style="color:#89DDFF;">$(</span><span style="color:#C3E88D;">cat ./config.json</span><span style="color:#89DDFF;">)&quot;</span><span style="color:#A6ACCD;"> algolia/docsearch-scraper </span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><h3 id="\u6570\u636E\u5217\u8868" tabindex="-1">\u6570\u636E\u5217\u8868 <a class="header-anchor" href="#\u6570\u636E\u5217\u8868" aria-hidden="true">#</a></h3><p><img src="`+r+`" alt="img"></p><p>\u63A5\u4E0B\u6765\u53EF\u4EE5\u5728\u9762\u677F\u4E2D\u770B\u5230\u6240\u6709\u722C\u53D6\u4E0A\u6765\u7684\u6570\u636E\u8BCD\u6761\u3002\u5982\u679C\u5185\u5BB9\u4E0D\u591F\u597D\uFF0C\u53EF\u4EE5\u5220\u9664\uFF0C\u7136\u540E\u91CD\u65B0\u914D\u7F6E\u518D\u722C\u53D6\u5C31\u597D\u4E86\u3002</p><h3 id="vitepess-\u914D\u7F6E" tabindex="-1">vitepess \u914D\u7F6E <a class="header-anchor" href="#vitepess-\u914D\u7F6E" aria-hidden="true">#</a></h3><div class="language-js line-numbers-mode"><button class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#676E95;">// .vitepress/config.ts</span></span>
<span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">defineConfig</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">vitepress</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">default</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">defineConfig</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">themeConfig</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">algolia</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">appId</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">xxx</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">apiKey</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">xxx</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;">// \u4E00\u5B9A\u8981\u4F7F\u7528 Search-Only API Key</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">indexName</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">blog</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div>`,45),D=[i];function y(F,d,u,C,A,b){return a(),n("div",null,D)}const g=s(t,[["render",y]]);export{m as __pageData,g as default};
