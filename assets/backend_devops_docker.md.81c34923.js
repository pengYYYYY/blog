import{_ as e,o as l,c as o,a as r}from"./app.93974dee.js";var a="/blog/assets/Y3b6oi.1e5bdd24.png",t="/blog/assets/9OfiAF.1b3c88d5.png",i="/blog/assets/IuoDmS.304fc039.png",c="/blog/assets/PxFy1k.7413995c.png",d="/blog/assets/O8bw3R.5299b9c1.png";const v='{"title":"docker","description":"","frontmatter":{},"headers":[{"level":2,"title":"docker\u7B80\u4ECB","slug":"docker\u7B80\u4ECB"},{"level":3,"title":"Docker \u57FA\u672C\u7EC4\u6210","slug":"docker-\u57FA\u672C\u7EC4\u6210"},{"level":3,"title":"VM \u8DDF Docker","slug":"vm-\u8DDF-docker"},{"level":2,"title":"Docker\u8FD0\u884C\u539F\u7406","slug":"docker\u8FD0\u884C\u539F\u7406"},{"level":3,"title":"namespace \u8FDB\u7A0B\u9694\u79BB","slug":"namespace-\u8FDB\u7A0B\u9694\u79BB"},{"level":3,"title":"CGroup \u5206\u914D\u8D44\u6E90","slug":"cgroup-\u5206\u914D\u8D44\u6E90"},{"level":3,"title":"chroot \u8DDF pivot_root \u6587\u4EF6\u7CFB\u7EDF","slug":"chroot-\u8DDF-pivot-root-\u6587\u4EF6\u7CFB\u7EDF"},{"level":2,"title":"docker\u7F51\u7EDC","slug":"docker\u7F51\u7EDC"},{"level":2,"title":"docker\u547D\u4EE4","slug":"docker\u547D\u4EE4"}],"relativePath":"backend/devops/docker.md","lastUpdated":1655193856000}',p={name:"backend/devops/docker.md"},s=r('<h1 id="docker" tabindex="-1">docker <a class="header-anchor" href="#docker" aria-hidden="true">#</a></h1><h2 id="docker\u7B80\u4ECB" tabindex="-1">docker\u7B80\u4ECB <a class="header-anchor" href="#docker\u7B80\u4ECB" aria-hidden="true">#</a></h2><p>Docker\u662F\u5E94\u7528\u7A0B\u5E8F\u4E0E\u7CFB\u7EDF\u4E4B\u95F4\u7684\u9694\u79BB\u5C42\u3002Docker\u8BA9\u5E94\u7528\u7A0B\u5E8F\u4E0D\u5FC5\u518D\u5173\u5FC3\u4E3B\u673A\u73AF\u5883\uFF0C\u5404\u4E2A\u5E94\u7528\u5B89\u88C5\u5728docker\u955C\u50CF\u91CC\u9762\uFF0Cdocker\u5F15\u64CE\u8D1F\u8D23\u8FD0\u884C\u5305\u88F9\u4E86\u5E94\u7528\u7A0B\u5E8F\u7684docker\u955C\u50CF\u3002</p><p>Docker\u7684\u7406\u5FF5\u662F\u8BA9\u5F00\u53D1\u4EBA\u5458\u53EF\u4EE5\u7B80\u5355\u5730\u628A\u5E94\u7528\u7A0B\u5E8F\u53CA\u4F9D\u8D56\u88C5\u8F7D\u5230\u5BB9\u5668\u4E2D\uFF0C\u7136\u540E\u8F7B\u677E\u5730\u90E8\u7F72\u5230\u4EFB\u4F55\u5730\u65B9\u3002docker\u6709\u4EE5\u4E0B\u7279\u70B9\uFF1A</p><ul><li>Docker\u5BB9\u5668\u662F\u8F7B\u91CF\u7EA7\u7684\u865A\u62DF\u6280\u672F\uFF0C\u5360\u7528\u66F4\u5C11\u7CFB\u7EDF\u8D44\u6E90\u3002</li><li>\u4F7F\u7528 Docker\u5BB9\u5668\uFF0C\u4E0D\u540C\u56E2\u961F\uFF08\u5982\u5F00\u53D1\u3001\u6D4B\u8BD5\uFF0C\u8FD0\u7EF4\uFF09\u4E4B\u95F4\u66F4\u5BB9\u6613\u5408\u4F5C\u3002</li><li>\u53EF\u4EE5\u5728\u4EFB\u4F55\u5730\u65B9\u90E8\u7F72 Docker \u5BB9\u5668\uFF0C\u6BD4\u5982\u5728\u4EFB\u4F55\u7269\u7406\u548C\u865A\u62DF\u673A\u4E0A\uFF0C\u751A\u81F3\u5728\u4E91\u4E0A\u3002</li><li>\u7531\u4E8EDocker\u5BB9\u5668\u975E\u5E38\u8F7B\u91CF\u7EA7\uFF0C\u56E0\u6B64\u53EF\u6269\u5C55\u6027\u5F88\u5F3A\u3002</li></ul><h3 id="docker-\u57FA\u672C\u7EC4\u6210" tabindex="-1">Docker \u57FA\u672C\u7EC4\u6210 <a class="header-anchor" href="#docker-\u57FA\u672C\u7EC4\u6210" aria-hidden="true">#</a></h3><p><img src="'+a+'" alt="img"></p><ul><li>\u955C\u50CF\uFF08image\uFF09\uFF1A</li></ul><p>Docker \u955C\u50CF\u5C31\u597D\u6BD4\u662F\u4E00\u4E2A\u76EE\u6807\uFF0C\u53EF\u4EE5\u901A\u8FC7\u8FD9\u4E2A\u76EE\u6807\u6765\u521B\u5EFA\u5BB9\u5668\u670D\u52A1\uFF0C\u53EF\u4EE5\u7B80\u5355\u7684\u7406\u89E3\u4E3A\u7F16\u7A0B\u8BED\u8A00\u4E2D\u7684\u7C7B\u3002</p><ul><li>\u5BB9\u5668\uFF08container\uFF09:</li></ul><p>Docker \u5229\u7528\u5BB9\u5668\u6280\u672F\uFF0C\u72EC\u7ACB\u8FD0\u884C\u4E00\u4E2A\u6216\u8005\u4E00\u7EC4\u5E94\u7528\uFF0C\u5BB9\u5668\u662F\u901A\u8FC7\u955C\u50CF\u6765\u521B\u5EFA\u7684\uFF0C\u5728\u5BB9\u5668\u4E2D\u53EF\u6267\u884C\u542F\u52A8\u3001\u505C\u6B62\u3001\u5220\u9664\u7B49\u57FA\u672C\u547D\u4EE4\uFF0C\u6700\u7EC8\u670D\u52A1\u8FD0\u884C\u6216\u8005\u9879\u76EE\u8FD0\u884C\u5C31\u662F\u5728\u5BB9\u5668\u4E2D\u7684\uFF0C\u53EF\u7406\u89E3\u4E3A\u662F\u7C7B\u7684\u5B9E\u4F8B\u3002</p><ul><li>\u4ED3\u5E93\uFF08repository\uFF09:</li></ul><p>\u4ED3\u5E93\u5C31\u662F\u5B58\u653E\u955C\u50CF\u7684\u5730\u65B9\uFF01\u4ED3\u5E93\u5206\u4E3A\u516C\u6709\u4ED3\u5E93\u548C\u79C1\u6709\u4ED3\u5E93\uFF0C\u7C7B\u4F3CGit\u3002\u4E00\u822C\u6211\u4EEC\u7528\u7684\u65F6\u5019\u90FD\u662F\u7528\u56FD\u5185docker\u955C\u50CF\u6765\u52A0\u901F\u3002</p><h3 id="vm-\u8DDF-docker" tabindex="-1">VM \u8DDF Docker <a class="header-anchor" href="#vm-\u8DDF-docker" aria-hidden="true">#</a></h3><p><img src="'+t+'" alt="img"></p><ul><li>\u865A\u62DF\u673A</li></ul><p>\u4F20\u7EDF\u7684\u865A\u62DF\u673A\u9700\u8981\u6A21\u62DF\u6574\u53F0\u673A\u5668\u5305\u62EC\u786C\u4EF6\uFF0C\u6BCF\u53F0\u865A\u62DF\u673A\u90FD\u9700\u8981\u6709\u81EA\u5DF1\u7684\u64CD\u4F5C\u7CFB\u7EDF\uFF0C\u865A\u62DF\u673A\u4E00\u65E6\u88AB\u5F00\u542F\uFF0C\u9884\u5206\u914D\u7ED9\u4ED6\u7684\u8D44\u6E90\u5C06\u5168\u90E8\u88AB\u5360\u7528\u3002\u6BCF\u4E00\u4E2A\u865A\u62DF\u673A\u5305\u62EC\u5E94\u7528\uFF0C\u5FC5\u8981\u7684\u4E8C\u8FDB\u5236\u548C\u5E93\uFF0C\u4EE5\u53CA\u4E00\u4E2A\u5B8C\u6574\u7684\u7528\u6237\u64CD\u4F5C\u7CFB\u7EDF\u3002</p><ul><li>Docker</li></ul><p>\u5BB9\u5668\u6280\u672F\u662F\u548C\u6211\u4EEC\u7684\u5BBF\u4E3B\u673A\u5171\u4EAB\u786C\u4EF6\u8D44\u6E90\u53CA\u64CD\u4F5C\u7CFB\u7EDF\u53EF\u4EE5\u5B9E\u73B0\u8D44\u6E90\u7684\u52A8\u6001\u5206\u914D\u3002\u5BB9\u5668\u5305\u542B\u5E94\u7528\u548C\u5176\u6240\u6709\u7684\u4F9D\u8D56\u5305\uFF0C\u4F46\u662F\u4E0E\u5176\u4ED6\u5BB9\u5668\u5171\u4EAB\u5185\u6838\u3002\u5BB9\u5668\u5728\u5BBF\u4E3B\u673A\u64CD\u4F5C\u7CFB\u7EDF\u4E2D\uFF0C\u5728\u7528\u6237\u7A7A\u95F4\u4EE5\u5206\u79BB\u7684\u8FDB\u7A0B\u8FD0\u884C</p><h2 id="docker\u8FD0\u884C\u539F\u7406" tabindex="-1">Docker\u8FD0\u884C\u539F\u7406 <a class="header-anchor" href="#docker\u8FD0\u884C\u539F\u7406" aria-hidden="true">#</a></h2><p>Docker\u53EA\u63D0\u4F9B\u4E00\u4E2A\u8FD0\u884C\u73AF\u5883\uFF0C\u662F\u4E0D\u9700\u8981\u8FD0\u884C\u4E00\u4E2A\u72EC\u7ACB\u7684 OS\uFF0C\u5BB9\u5668\u4E2D\u7684\u7CFB\u7EDF\u5185\u6838\u8DDF\u5BBF\u4E3B\u673A\u7684\u5185\u6838\u662F\u516C\u7528\u7684\u3002docker\u5BB9\u5668\u672C\u8D28\u4E0A\u662F\u5BBF\u4E3B\u673A\u7684\u8FDB\u7A0B\u3002\u4ED6\u505A\u4E86\u5982\u4E0B\u64CD\u4F5C\uFF1A</p><h3 id="namespace-\u8FDB\u7A0B\u9694\u79BB" tabindex="-1">namespace \u8FDB\u7A0B\u9694\u79BB <a class="header-anchor" href="#namespace-\u8FDB\u7A0B\u9694\u79BB" aria-hidden="true">#</a></h3><p><img src="'+i+'" alt="img"></p><p>Linux Namespaces \u673A\u5236\u63D0\u4F9B\u4E00\u79CD\u8FDB\u7A0B\u8D44\u6E90\u9694\u79BB\u65B9\u6848\u3002PID\u3001IPC\u3001Network \u7B49\u7CFB\u7EDF\u8D44\u6E90\u4E0D\u518D\u662F\u5168\u5C40\u6027\u7684\uFF0C\u800C\u662F\u5C5E\u4E8E\u67D0\u4E2A\u7279\u5B9A\u7684Namespace\u3002\u6BCF\u4E2Anamespace\u4E0B\u7684\u8D44\u6E90\u5BF9\u4E8E\u5176\u4ED6 namespace \u4E0B\u7684\u8D44\u6E90\u90FD\u662F\u900F\u660E\uFF0C\u4E0D\u53EF\u89C1\u7684\u3002\u7CFB\u7EDF\u4E2D\u53EF\u4EE5\u540C\u65F6\u5B58\u5728\u4E24\u4E2A\u8FDB\u7A0B\u53F7\u4E3A0\u30011\u30012\u7684\u8FDB\u7A0B\uFF0C\u7531\u4E8E\u5C5E\u4E8E\u4E0D\u540C\u7684namespace\uFF0C\u6240\u4EE5\u5B83\u4EEC\u4E4B\u95F4\u5E76\u4E0D\u51B2\u7A81\u3002</p><h3 id="cgroup-\u5206\u914D\u8D44\u6E90" tabindex="-1">CGroup \u5206\u914D\u8D44\u6E90 <a class="header-anchor" href="#cgroup-\u5206\u914D\u8D44\u6E90" aria-hidden="true">#</a></h3><p>Docker \u901A\u8FC7 Cgroup \u6765\u63A7\u5236\u5BB9\u5668\u4F7F\u7528\u7684\u8D44\u6E90\u914D\u989D\uFF0C\u4E00\u65E6\u8D85\u8FC7\u8FD9\u4E2A\u914D\u989D\u5C31\u53D1\u51FAOOM\u3002\u914D\u989D\u4E3B\u8981\u5305\u62EC CPU\u3001\u5185\u5B58\u3001\u78C1\u76D8\u4E09\u5927\u65B9\u9762\uFF0C \u57FA\u672C\u8986\u76D6\u4E86\u5E38\u89C1\u7684\u8D44\u6E90\u914D\u989D\u548C\u4F7F\u7528\u91CF\u63A7\u5236\u3002</p><p><img src="'+c+'" alt="img"></p><p>Cgroup \u662F Control Groups \u7684\u7F29\u5199\uFF0C\u662FLinux \u5185\u6838\u63D0\u4F9B\u7684\u4E00\u79CD\u53EF\u4EE5\u9650\u5236\u3001\u8BB0\u5F55\u3001\u9694\u79BB\u8FDB\u7A0B\u7EC4\u6240\u4F7F\u7528\u7684\u7269\u7406\u8D44\u6E90(\u5982 CPU\u3001\u5185\u5B58\u3001\u78C1\u76D8 IO \u7B49\u7B49)\u7684\u673A\u5236\uFF0C\u88AB LXC(Linux container)\u3001Docker \u7B49\u5F88\u591A\u9879\u76EE\u7528\u4E8E\u5B9E\u73B0\u8FDB\u7A0B\u8D44\u6E90\u63A7\u5236\u3002Cgroup \u672C\u8EAB\u662F\u63D0\u4F9B\u5C06\u8FDB\u7A0B\u8FDB\u884C\u5206\u7EC4\u5316\u7BA1\u7406\u7684\u529F\u80FD\u548C\u63A5\u53E3\u7684\u57FA\u7840\u7ED3\u6784\uFF0CI/O \u6216\u5185\u5B58\u7684\u5206\u914D\u63A7\u5236\u7B49\u5177\u4F53\u7684\u8D44\u6E90\u7BA1\u7406\u662F\u901A\u8FC7\u8BE5\u529F\u80FD\u6765\u5B9E\u73B0\u7684\uFF0C\u8FD9\u4E9B\u5177\u4F53\u7684\u8D44\u6E90 \u7BA1\u7406\u529F\u80FD\u79F0\u4E3A Cgroup \u5B50\u7CFB\u7EDF\u3002</p><h3 id="chroot-\u8DDF-pivot-root-\u6587\u4EF6\u7CFB\u7EDF" tabindex="-1">chroot \u8DDF pivot_root \u6587\u4EF6\u7CFB\u7EDF <a class="header-anchor" href="#chroot-\u8DDF-pivot-root-\u6587\u4EF6\u7CFB\u7EDF" aria-hidden="true">#</a></h3><p>chroot(change root file system)\u547D\u4EE4\u7684\u529F\u80FD\u662F\u6539\u53D8\u8FDB\u7A0B\u7684\u6839\u76EE\u5F55\u5230\u6307\u5B9A\u7684\u4F4D\u7F6E\u3002\u6BD4\u5982\u6211\u4EEC\u73B0\u5728\u6709\u4E00\u4E2A$HOME/test\u76EE\u5F55\uFF0C\u60F3\u8981\u628A\u5B83\u4F5C\u4E3A\u4E00\u4E2A /bin/bash \u8FDB\u7A0B\u7684\u6839\u76EE\u5F55\u3002</p><ol><li>\u9996\u5148\uFF0C\u521B\u5EFA\u4E00\u4E2A HOME/test/bin,lib64,lib</li><li>\u628Abash\u547D\u4EE4\u62F7\u8D1D\u5230test\u76EE\u5F55\u5BF9\u5E94\u7684bin\u8DEF\u5F84\u4E0B cp -v /bin/bash,ls $HOME/test/bin</li><li>\u628Abash\u547D\u4EE4\u9700\u8981\u7684\u6240\u6709so\u6587\u4EF6\uFF0C\u4E5F\u62F7\u8D1D\u5230test\u76EE\u5F55\u5BF9\u5E94\u7684lib\u8DEF\u5F84\u4E0B</li><li>\u6267\u884Cchroot\u547D\u4EE4\uFF0C\u544A\u8BC9\u64CD\u4F5C\u7CFB\u7EDF\uFF0C\u6211\u4EEC\u5C06\u4F7F\u7528HOME/test /bin/bash</li></ol><ul><li>\u4E00\u81F4\u6027</li></ul><p>\u7531\u4E8E rootfs \u91CC\u6253\u5305\u7684\u4E0D\u53EA\u662F\u5E94\u7528\uFF0C\u800C\u662F\u6574\u4E2A\u64CD\u4F5C\u7CFB\u7EDF\u7684\u6587\u4EF6\u548C\u76EE\u5F55\uFF0C\u4E5F\u5C31\u610F\u5473\u7740\u5E94\u7528\u4EE5\u53CA\u5B83\u8FD0\u884C\u6240\u9700\u8981\u7684\u6240\u6709\u4F9D\u8D56\u90FD\u88AB\u5C01\u88C5\u5728\u4E86\u4E00\u8D77\u3002\u6709\u4E86\u5BB9\u5668\u955C\u50CF\u6253\u5305\u64CD\u4F5C\u7CFB\u7EDF\u7684\u80FD\u529B\uFF0C\u8FD9\u4E2A\u6700\u57FA\u7840\u7684\u4F9D\u8D56\u73AF\u5883\u4E5F\u7EC8\u4E8E\u53D8\u6210\u4E86\u5E94\u7528\u6C99\u76D2\u7684\u4E00\u90E8\u5206\u3002\u8FD9\u5C31\u8D4B\u4E88\u4E86\u5BB9\u5668\u6240\u8C13\u7684\u4E00\u81F4\u6027\uFF1A</p><p>\u65E0\u8BBA\u5728\u672C\u5730\u3001\u4E91\u7AEF\uFF0C\u8FD8\u662F\u5728\u4E00\u53F0\u4EFB\u4F55\u5730\u65B9\u7684\u673A\u5668\u4E0A\uFF0C\u7528\u6237\u53EA\u9700\u8981\u89E3\u538B\u6253\u5305\u597D\u7684\u5BB9\u5668\u955C\u50CF\uFF0C\u90A3\u4E48\u8FD9\u4E2A\u5E94\u7528\u8FD0\u884C\u6240\u9700\u8981\u7684\u5B8C\u6574\u7684\u6267\u884C\u73AF\u5883\u5C31\u88AB\u91CD\u73B0\u51FA\u6765\u4E86\u3002</p><ul><li>UnionFS \u8054\u5408\u6587\u4EF6\u7CFB\u7EDF</li></ul><p>\u5982\u4F55\u5B9E\u73B0rootfs\u7684\u9AD8\u6548\u53EF\u91CD\u590D\u5229\u7528\u5462\uFF1FDocker\u5728\u955C\u50CF\u7684\u8BBE\u8BA1\u4E2D\u5F15\u5165\u4E86\u5C42\uFF08layer\uFF09\u7684\u6982\u5FF5\u3002\u4E5F\u5C31\u662F\u8BF4\u7528\u6237\u5236\u4F5C\u955C\u50CF\u7684\u6BCF\u4E00\u6B65\u64CD\u4F5C\u90FD\u4F1A\u751F\u6210\u4E00\u4E2A\u5C42\uFF0C\u4E5F\u5C31\u662F\u4E00\u4E2A\u589E\u91CFrootfs\u3002\u4ECB\u7ECD\u5206\u5C42\u524D\u6211\u4EEC\u5148\u8BF4\u4E2A\u91CD\u8981\u77E5\u8BC6\u70B9\uFF0C\u8054\u5408\u6587\u4EF6\u7CFB\u7EDF\u3002</p><ul><li>layer \u5206\u5C42</li></ul><ol><li>\u53EA\u8BFB\u5C42</li><li>\u53EF\u8BFB\u5199\u5C42</li><li>init\u5C42</li></ol><h2 id="docker\u7F51\u7EDC" tabindex="-1">docker\u7F51\u7EDC <a class="header-anchor" href="#docker\u7F51\u7EDC" aria-hidden="true">#</a></h2><ul><li>host: \u548C\u5BBF\u4E3B\u673A\u5171\u4EAB\u7F51\u7EDC</li><li>none: \u4E0D\u914D\u7F6E\u7F51\u7EDC</li><li>bridge: docker\u9ED8\u8BA4\uFF0C\u4E5F\u53EF\u81EA\u521B</li><li>container: \u5BB9\u5668\u7F51\u7EDC\u8FDE\u901A\uFF0C\u5BB9\u5668\u76F4\u63A5\u4E92\u8054</li></ul><h2 id="docker\u547D\u4EE4" tabindex="-1">docker\u547D\u4EE4 <a class="header-anchor" href="#docker\u547D\u4EE4" aria-hidden="true">#</a></h2><p><img src="'+d+'" alt="img"></p><ul><li>FROM</li></ul><p>FROM \u6307\u4EE4\u7528\u4E8E\u6307\u5B9A\u57FA\u7840\u955C\u50CF\uFF0C\u56E0\u6B64\u6240\u6709\u7684 dockerfile \u90FD\u5FC5\u987B\u4F7F\u7528 FROM \u6307\u4EE4\u5F00\u5934\u3002FROM \u6307\u4EE4\u53EF\u4EE5\u51FA\u73B0\u591A\u6B21\uFF0C\u8FD9\u6837\u4F1A\u6784\u5EFA\u591A\u4E2A\u955C\u50CF\uFF0C\u6BCF\u4E2A\u955C\u50CF\u521B\u5EFA\u5B8C\u6210\u540E\uFF0CDocker \u547D\u4EE4\u884C\u754C\u9762\u4F1A\u8F93\u51FA\u8BE5\u955C\u50CF\u7684 ID\u3002\u5E38\u7528\u6307\u4EE4\u683C\u5F0F\u4E3A\uFF1A<code>FROM &lt;image&gt;[:&lt;tag&gt;] [AS &lt;name&gt;]</code>\u3002</p><ul><li>LABEL</li></ul><p>LABEL \u6307\u4EE4\u53EF\u4EE5\u7528\u4E8E\u6307\u5B9A\u955C\u50CF\u76F8\u5173\u7684\u5143\u6570\u636E\u4FE1\u606F\u3002\u683C\u5F0F\u4E3A\uFF1A<code>LABEL &lt;key&gt;=&lt;value&gt; &lt;key&gt;=&lt;value&gt; &lt;key&gt;=&lt;value&gt;</code>... \u3002</p><ul><li>ENV</li></ul><p>ENV \u6307\u4EE4\u7528\u4E8E\u58F0\u660E\u73AF\u5883\u53D8\u91CF\uFF0C\u58F0\u660E\u597D\u7684\u73AF\u5883\u53D8\u91CF\u53EF\u4EE5\u5728\u540E\u9762\u7684\u6307\u4EE4\u4E2D\u5F15\u7528\uFF0C\u5F15\u7528\u683C\u5F0F\u4E3A <code>$variable_name \u6216 ${variable_name}</code> \u3002\u5E38\u7528\u683C\u5F0F\u6709\u4EE5\u4E0B\u4E24\u79CD\uFF1A</p><ol><li>ENV <code>&lt;key&gt; &lt;value&gt;</code>\uFF1A\u7528\u4E8E\u8BBE\u7F6E\u5355\u4E2A\u73AF\u5883\u53D8\u91CF\uFF1B</li><li>ENV <code>&lt;key&gt;=&lt;value&gt;</code> ... \uFF1A\u7528\u4E8E\u4E00\u6B21\u8BBE\u7F6E\u591A\u4E2A\u73AF\u5883\u53D8\u91CF\u3002</li></ol><ul><li>EXPOSE</li></ul><p>EXPOSE \u7528\u4E8E\u6307\u660E\u5BB9\u5668\u5BF9\u5916\u66B4\u9732\u7684\u7AEF\u53E3\u53F7\uFF0C\u683C\u5F0F\u4E3A\uFF1A<code>EXPOSE &lt;port&gt; [&lt;port&gt;/&lt;protocol&gt;...]</code> \uFF0C\u60A8\u53EF\u4EE5\u6307\u5B9A\u7AEF\u53E3\u662F\u4FA6\u542C TCP \u8FD8\u662F UDP\uFF0C\u5982\u679C\u672A\u6307\u5B9A\u534F\u8BAE\uFF0C\u5219\u9ED8\u8BA4\u4E3A TCP\u3002</p><ul><li>WORKDIR</li></ul><p>WORKDIR \u7528\u4E8E\u6307\u660E\u5DE5\u4F5C\u76EE\u5F55\uFF0C\u5B83\u53EF\u4EE5\u591A\u6B21\u4F7F\u7528\u3002\u5982\u679C\u6307\u660E\u7684\u662F\u76F8\u5BF9\u8DEF\u5F84\uFF0C\u5219\u5B83\u5C06\u76F8\u5BF9\u4E8E\u4E0A\u4E00\u4E2AWORKDIR\u6307\u4EE4\u7684\u8DEF\u5F84\u3002</p><ul><li>COPY</li></ul><p>COPY \u6307\u4EE4\u7684\u5E38\u7528\u683C\u5F0F\u4E3A\uFF1ACOPY <code>&lt;src&gt;... &lt;dest&gt;</code>\uFF0C\u7528\u4E8E\u5C06\u6307\u5B9A\u8DEF\u5F84\u4E2D\u7684\u6587\u4EF6\u6DFB\u52A0\u5230\u65B0\u7684\u955C\u50CF\u4E2D\uFF0C\u62F7\u8D1D\u7684\u76EE\u6807\u8DEF\u5F84\u53EF\u4EE5\u4E0D\u5B58\u5728\uFF0C\u7A0B\u5E8F\u4F1A\u81EA\u52A8\u521B\u5EFA\u3002</p><ul><li>RUN</li></ul><p>RUN \u6307\u4EE4\u4F1A\u5728\u524D\u4E00\u6761\u547D\u4EE4\u521B\u5EFA\u51FA\u7684\u955C\u50CF\u57FA\u7840\u4E0A\u518D\u521B\u5EFA\u4E00\u4E2A\u5BB9\u5668\uFF0C\u5E76\u5728\u5BB9\u5668\u4E2D\u8FD0\u884C\u547D\u4EE4\uFF0C\u5728\u547D\u4EE4\u7ED3\u675F\u540E\u63D0\u4EA4\u8BE5\u5BB9\u5668\u4E3A\u65B0\u7684\u955C\u50CF\u3002\u5B83\u652F\u6301\u4EE5\u4E0B\u4E24\u79CD\u683C\u5F0F\uFF1A</p><ol><li><code>RUN &lt;command&gt;</code>\uFF08shell \u683C\u5F0F\uFF09</li><li><code>RUN [&quot;executable&quot;, &quot;param1&quot;, &quot;param2&quot;]</code> (exec \u683C\u5F0F)</li></ol><ul><li>CMD</li></ul><ol><li>CMD [&quot;executable&quot;,&quot;param1&quot;,&quot;param2&quot;] (exec \u683C\u5F0F, \u9996\u9009)</li><li>CMD [&quot;param1&quot;,&quot;param2&quot;] (\u4F5C\u4E3A ENTRYPOINT \u7684\u9ED8\u8BA4\u53C2\u6570)</li><li>CMD command param1 param2 (shell \u683C\u5F0F)</li></ol><p>CMD \u6307\u4EE4\u63D0\u4F9B\u5BB9\u5668\u8FD0\u884C\u65F6\u7684\u9ED8\u8BA4\u503C\uFF0C\u8FD9\u4E9B\u9ED8\u8BA4\u503C\u53EF\u4EE5\u662F\u4E00\u6761\u6307\u4EE4\uFF0C\u4E5F\u53EF\u4EE5\u662F\u4E00\u4E9B\u53C2\u6570\u3002\u4E00\u4E2A dockerfile \u4E2D\u53EF\u4EE5\u6709\u591A\u6761 CMD \u6307\u4EE4\uFF0C\u4F46\u53EA\u6709\u6700\u540E\u4E00\u6761 CMD \u6307\u4EE4\u6709\u6548\u3002CMD \u6307\u4EE4\u4E0E RUN \u6307\u4EE4\u7684\u547D\u4EE4\u683C\u5F0F\u76F8\u540C\uFF0C\u4F46\u4F5C\u7528\u4E0D\u540C\uFF1ARUN \u6307\u4EE4\u662F\u5728\u955C\u50CF\u7684\u6784\u5EFA\u9636\u6BB5\u7528\u4E8E\u4EA7\u751F\u65B0\u7684\u955C\u50CF\uFF1B\u800C CMD \u6307\u4EE4\u5219\u662F\u5728\u5BB9\u5668\u7684\u542F\u52A8\u9636\u6BB5\u9ED8\u8BA4\u5C06 CMD \u6307\u4EE4\u4F5C\u4E3A\u7B2C\u4E00\u6761\u6267\u884C\u7684\u547D\u4EE4\uFF0C\u5982\u679C\u7528\u6237\u5728 docker run \u65F6\u6307\u5B9A\u4E86\u65B0\u7684\u547D\u4EE4\u53C2\u6570\uFF0C\u5219\u4F1A\u8986\u76D6 CMD \u6307\u4EE4\u4E2D\u7684\u547D\u4EE4\u3002</p><ul><li>ENTRYPOINT</li></ul><p>ENTRYPOINT \u6307\u4EE4 \u652F\u6301\u4EE5\u4E0B\u4E24\u79CD\u683C\u5F0F\uFF1A</p><ol><li>ENTRYPOINT [&quot;executable&quot;, &quot;param1&quot;, &quot;param2&quot;] (exec \u683C\u5F0F\uFF0C\u9996\u5148)</li><li>ENTRYPOINT command param1 param2 (shell \u683C\u5F0F)</li></ol><p>ENTRYPOINT \u6307\u4EE4 \u548C CMD \u6307\u4EE4\u7C7B\u4F3C\uFF0C\u90FD\u53EF\u4EE5\u8BA9\u5BB9\u5668\u5728\u6BCF\u6B21\u542F\u52A8\u65F6\u6267\u884C\u76F8\u540C\u7684\u547D\u4EE4\u3002\u4F46\u4E0D\u540C\u7684\u662F CMD \u540E\u9762\u53EF\u4EE5\u662F\u53C2\u6570\u4E5F\u53EF\u4EE5\u662F\u547D\u4EE4\uFF0C\u800C ENTRYPOINT \u53EA\u80FD\u662F\u547D\u4EE4\uFF1B\u53E6\u5916 docker run \u547D\u4EE4\u63D0\u4F9B\u7684\u8FD0\u884C\u53C2\u6570\u53EF\u4EE5\u8986\u76D6 CMD\uFF0C\u4F46\u4E0D\u80FD\u8986\u76D6 ENTRYPOINT \uFF0C\u8FD9\u610F\u5473\u7740 ENTRYPOINT \u6307\u4EE4\u4E0A\u7684\u547D\u4EE4\u4E00\u5B9A\u4F1A\u88AB\u6267\u884C\u3002</p>',65),u=[s];function n(h,k,g,m,D,b){return l(),o("div",null,u)}var O=e(p,[["render",n]]);export{v as __pageData,O as default};
