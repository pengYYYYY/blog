import{_ as e,o as a,c as i,a as r}from"./app.d6e52298.js";const _=JSON.parse('{"title":"\u7EBF\u7A0B\u548C\u8FDB\u7A0B\u7684\u533A\u522B","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u8FDB\u7A0B\u548C\u7EBF\u7A0B","slug":"\u8FDB\u7A0B\u548C\u7EBF\u7A0B","link":"#\u8FDB\u7A0B\u548C\u7EBF\u7A0B","children":[{"level":3,"title":"\u6982\u8FF0","slug":"\u6982\u8FF0","link":"#\u6982\u8FF0","children":[]},{"level":3,"title":"\u533A\u522B","slug":"\u533A\u522B","link":"#\u533A\u522B","children":[]},{"level":3,"title":"\u4F18\u7F3A\u70B9","slug":"\u4F18\u7F3A\u70B9","link":"#\u4F18\u7F3A\u70B9","children":[]}]},{"level":2,"title":"\u591A\u8FDB\u7A0B\u3001\u591A\u7EBF\u7A0B","slug":"\u591A\u8FDB\u7A0B\u3001\u591A\u7EBF\u7A0B","link":"#\u591A\u8FDB\u7A0B\u3001\u591A\u7EBF\u7A0B","children":[{"level":3,"title":"\u6982\u8FF0","slug":"\u6982\u8FF0-1","link":"#\u6982\u8FF0-1","children":[]},{"level":3,"title":"\u5206\u7C7B","slug":"\u5206\u7C7B","link":"#\u5206\u7C7B","children":[]},{"level":3,"title":"\u8FDB\u5165\u7EBF\u7A0B\u5E26\u6765\u7684\u4E3B\u8981\u597D\u5904","slug":"\u8FDB\u5165\u7EBF\u7A0B\u5E26\u6765\u7684\u4E3B\u8981\u597D\u5904","link":"#\u8FDB\u5165\u7EBF\u7A0B\u5E26\u6765\u7684\u4E3B\u8981\u597D\u5904","children":[]}]}],"relativePath":"basics/computer/threadsAndProcesses.md","lastUpdated":1662652261000}'),l={name:"basics/computer/threadsAndProcesses.md"},t=r('<h1 id="\u7EBF\u7A0B\u548C\u8FDB\u7A0B\u7684\u533A\u522B" tabindex="-1">\u7EBF\u7A0B\u548C\u8FDB\u7A0B\u7684\u533A\u522B <a class="header-anchor" href="#\u7EBF\u7A0B\u548C\u8FDB\u7A0B\u7684\u533A\u522B" aria-hidden="true">#</a></h1><h2 id="\u8FDB\u7A0B\u548C\u7EBF\u7A0B" tabindex="-1">\u8FDB\u7A0B\u548C\u7EBF\u7A0B <a class="header-anchor" href="#\u8FDB\u7A0B\u548C\u7EBF\u7A0B" aria-hidden="true">#</a></h2><h3 id="\u6982\u8FF0" tabindex="-1">\u6982\u8FF0 <a class="header-anchor" href="#\u6982\u8FF0" aria-hidden="true">#</a></h3><p>\u8FDB\u7A0B\u662F\u5177\u6709\u4E00\u5B9A\u72EC\u7ACB\u529F\u80FD\u7684\u7A0B\u5E8F\u5173\u4E8E\u67D0\u4E2A\u6570\u636E\u96C6\u5408\u4E0A\u7684\u4E00\u6B21\u8FD0\u884C\u6D3B\u52A8\uFF0C\u8FDB\u7A0B\u662F\u7CFB\u7EDF\u8FDB\u884C\u8D44\u6E90\u5206\u914D\u548C\u8C03\u5EA6\u7684\u4E00\u4E2A\u72EC\u7ACB\u5355\u4F4D\u3002</p><p>\u7EBF\u7A0B\u662F\u8FDB\u7A0B\u7684\u4E00\u4E2A\u5B9E\u4F53\uFF0C\u662F CPU \u8C03\u5EA6\u548C\u5206\u6D3E\u7684\u57FA\u672C\u5355\u4F4D\uFF0C\u5B83\u662F\u6BD4\u8FDB\u7A0B\u66F4\u5C0F\u7684\u80FD\u72EC\u7ACB\u8FD0\u884C\u7684\u57FA\u672C\u5355\u4F4D\u3002\u7EBF\u7A0B\u81EA\u5DF1\u57FA\u672C\u4E0A\u4E0D\u7528\u6709\u7CFB\u7EDF\u8D44\u6E90\uFF0C\u53EA\u62E5\u6709\u4E00\u70B9\u5728\u8FD0\u884C\u4E2D\u5FC5\u4E0D\u53EF\u5C11\u7684\u8D44\u6E90\uFF08\u5982\u7A0B\u5E8F\u8BA1\u6570\u5668\uFF0C\u4E00\u7EC4\u5BC4\u5B58\u5668\u548C\u6808\uFF09\uFF0C\u4F46\u662F\u5B83\u53EF\u4E0E\u540C\u5C5E\u4E00\u4E2A\u8FDB\u7A0B\u7684\u5176\u4ED6\u7684\u7EBF\u7A0B\u5171\u4EAB\u8FDB\u7A0B\u6240\u62E5\u6709\u7684\u5168\u90E8\u8D44\u6E90\u3002</p><p>\u4E00\u4E2A\u7EBF\u7A0B\u53EF\u4EE5\u521B\u5EFA\u548C\u64A4\u9500\u53E6\u4E00\u4E2A\u7EBF\u7A0B\uFF1B\u540C\u4E00\u4E2A\u8FDB\u7A0B\u4E2D\u7684\u591A\u4E2A\u7EBF\u7A0B\u4E4B\u95F4\u53EF\u4EE5\u5E76\u53D1\u6267\u884C\u3002</p><p>\u76F8\u5BF9\u8FDB\u7A0B\u800C\u8A00\uFF0C\u7EBF\u7A0B\u662F\u4E00\u4E2A\u66F4\u52A0\u63A5\u8FD1\u4E8E\u6267\u884C\u4F53\u7684\u6982\u5FF5\uFF0C\u5B83\u53EF\u4EE5\u4E0E\u540C\u8FDB\u7A0B\u4E2D\u7684\u5176\u4ED6\u7EBF\u7A0B\u5171\u4EAB\u6570\u636E\uFF0C\u4F46\u62E5\u6709\u81EA\u5DF1\u7684\u6808\u7A7A\u95F4\uFF0C\u62E5\u6709\u72EC\u7ACB\u7684\u6267\u884C\u5E8F\u5217\u3002</p><p>\u5728\u4E32\u884C\u7A0B\u5E8F\u57FA\u7840\u4E0A\u5F15\u5165\u7EBF\u7A0B\u548C\u8FDB\u7A0B\u662F\u4E3A\u4E86\u63D0\u9AD8\u7A0B\u5E8F\u7684\u5E76\u53D1\u5EA6\uFF0C\u4ECE\u800C\u63D0\u9AD8\u7A0B\u5E8F\u8FD0\u884C\u6548\u7387\u548C\u54CD\u5E94\u65F6\u95F4\u3002</p><h3 id="\u533A\u522B" tabindex="-1">\u533A\u522B <a class="header-anchor" href="#\u533A\u522B" aria-hidden="true">#</a></h3><p>\u8FDB\u7A0B\u548C\u7EBF\u7A0B\u7684\u4E3B\u8981\u5DEE\u522B\u5728\u4E8E\u5B83\u4EEC\u662F\u4E0D\u540C\u7684\u64CD\u4F5C\u7CFB\u7EDF\u8D44\u6E90\u7BA1\u7406\u65B9\u5F0F\u3002\u8FDB\u7A0B\u6709\u72EC\u7ACB\u7684\u5730\u5740\u7A7A\u95F4\uFF0C\u4E00\u4E2A\u8FDB\u7A0B\u5D29\u6E83\u540E\uFF0C\u5728\u4FDD\u62A4\u6A21\u5F0F\u4E0B\u4E0D\u4F1A\u5BF9\u5176\u4ED6\u8FDB\u7A0B\u4EA7\u751F\u5F71\u54CD\uFF0C\u800C\u7EBF\u7A0B\u53EA\u662F\u4E00\u4E2A\u8FDB\u7A0B\u4E2D\u7684\u4E0D\u540C\u6267\u884C\u8DEF\u5F84\u3002\u7EBF\u7A0B\u6709\u81EA\u5DF1\u7684\u5806\u6808\u548C\u5C40\u90E8\u53D8\u91CF\uFF0C\u4F46\u7EBF\u7A0B\u4E4B\u95F4\u6CA1\u6709\u5355\u72EC\u7684\u5730\u5740\u7A7A\u95F4\uFF0C\u4E00\u4E2A\u7EBF\u7A0B\u6B7B\u6389\u5C31\u7B49\u4E8E\u6574\u4E2A\u8FDB\u7A0B\u6B7B\u6389\uFF0C\u6240\u4EE5\u591A\u8FDB\u7A0B\u7684\u7A0B\u5E8F\u8981\u6BD4\u591A\u7EBF\u7A0B\u7684\u7A0B\u5E8F\u5065\u58EE\uFF0C\u4F46\u5728\u8FDB\u7A0B\u5207\u6362\u65F6\uFF0C\u8017\u8D39\u8D44\u6E90\u8F83\u5927\uFF0C\u6548\u7387\u8981\u5DEE\u4E00\u4E9B\u3002 <strong>\u4F46\u5BF9\u4E00\u4E9B\u8981\u6C42\u540C\u65F6\u8FDB\u884C\u5E76\u4E14\u53C8\u8981\u5171\u4EAB\u67D0\u4E9B\u53D8\u91CF\u7684\u5E76\u53D1\u64CD\u4F5C\uFF0C\u53EA\u80FD\u7528\u7EBF\u7A0B\uFF0C\u4E0D\u80FD\u7528\u8FDB\u7A0B\u3002</strong></p><p>\u7B80\u800C\u8A00\u4E4B\uFF1A</p><ol><li>\u4E00\u4E2A\u7A0B\u5E8F\u81F3\u5C11\u6709\u4E00\u4E2A\u8FDB\u7A0B\uFF0C\u4E00\u4E2A\u8FDB\u7A0B\u81F3\u5C11\u6709\u4E00\u4E2A\u7EBF\u7A0B\uFF1B</li><li>\u7EBF\u7A0B\u7684\u5212\u5206\u5C3A\u5EA6\u5C0F\u4E8E\u8FDB\u7A0B\uFF0C\u4F7F\u5F97\u591A\u7EBF\u7A0B\u7A0B\u5E8F\u7684\u5E76\u53D1\u6027\u9AD8\uFF1B</li><li>\u53E6\u5916\uFF0C\u8FDB\u7A0B\u5728\u6267\u884C\u8FC7\u7A0B\u4E2D\u62E5\u6709\u72EC\u7ACB\u7684\u5185\u5B58\u5355\u5143\uFF0C\u800C\u591A\u4E2A\u7EBF\u7A0B\u5171\u4EAB\u5185\u5B58\uFF0C\u4ECE\u800C\u6781\u5927\u5730\u63D0\u9AD8\u4E86\u7A0B\u5E8F\u7684\u8FD0\u884C\u6548\u7387\uFF1B</li><li>\u7EBF\u7A0B\u5728\u6267\u884C\u8FC7\u7A0B\u4E2D\u548C\u8FDB\u7A0B\u8FD8\u662F\u6709\u533A\u522B\u7684\uFF0C\u6BCF\u4E2A\u72EC\u7ACB\u7684\u7EBF\u7A0B\u6709\u4E00\u4E2A\u7A0B\u5E8F\u8FD0\u884C\u5165\u53E3\u3001\u987A\u5E8F\u6267\u884C\u5E8F\u5217\u548C\u7A0B\u5E8F\u7684\u51FA\u53E3\u3002 <strong>\u4F46\u662F\u7EBF\u7A0B\u4E0D\u80FD\u591F\u72EC\u7ACB\u6267\u884C\uFF0C</strong> \u5FC5\u987B\u4F9D\u9760\u5B58\u5728\u7684\u5E94\u7528\u7A0B\u5E8F\u4E2D\uFF0C\u6709\u5E94\u7528\u7A0B\u5E8F\u63D0\u4F9B\u591A\u4E2A\u7EBF\u7A0B\u6267\u884C\u63A7\u5236\uFF1B</li><li>\u4ECE\u903B\u8F91\u89D2\u5EA6\u6765\u770B\uFF0C\u591A\u7EBF\u7A0B\u7684\u610F\u4E49\u5728\u4E8E\u4E00\u4E2A\u5E94\u7528\u7A0B\u5E8F\u4E2D\uFF0C\u6709\u591A\u4E2A\u6267\u884C\u90E8\u5206\u53EF\u4EE5\u540C\u65F6\u6267\u884C\u3002\u4F46\u64CD\u4F5C\u7CFB\u7EDF\u5E76\u6CA1\u6709\u5C06\u591A\u4E2A\u7EBF\u7A0B\u770B\u4F5C\u591A\u4E2A\u72EC\u7ACB\u7684\u5E94\u7528\uFF0C\u6765\u5B9E\u73B0\u8FDB\u7A0B\u7684\u8C03\u5EA6\u7BA1\u7406\u4EE5\u53CA\u8D44\u6E90\u5206\u914D\u3002 <strong>\u8FD9\u5C31\u662F\u8FDB\u7A0B\u548C\u7EBF\u7A0B\u7684\u91CD\u8981\u533A\u522B\u3002</strong></li></ol><h3 id="\u4F18\u7F3A\u70B9" tabindex="-1">\u4F18\u7F3A\u70B9 <a class="header-anchor" href="#\u4F18\u7F3A\u70B9" aria-hidden="true">#</a></h3><p>\u7EBF\u7A0B\u548C\u8FDB\u7A0B\u5728\u4F7F\u7528\u4E0A\u5404\u6709\u4F18\u7F3A\u70B9\uFF1A\u7EBF\u7A0B\u6267\u884C\u5F00\u9500\u5C0F\uFF0C\u4F46\u4E0D\u5229\u4E8E\u8D44\u6E90\u7684\u7BA1\u7406\u548C\u4FDD\u62A4\uFF1B\u8FDB\u7A0B\u6B63\u597D\u76F8\u53CD\u3002\u540C\u65F6\uFF0C\u7EBF\u7A0B\u9002\u5408\u4E8E\u5728 SMP \u673A\u5668\u4E0A\u8FD0\u884C\uFF0C\u800C\u8FDB\u7A0B\u5219\u53EF\u4EE5\u8DE8\u673A\u5668\u8FC1\u79FB\u3002</p><h2 id="\u591A\u8FDB\u7A0B\u3001\u591A\u7EBF\u7A0B" tabindex="-1">\u591A\u8FDB\u7A0B\u3001\u591A\u7EBF\u7A0B <a class="header-anchor" href="#\u591A\u8FDB\u7A0B\u3001\u591A\u7EBF\u7A0B" aria-hidden="true">#</a></h2><h3 id="\u6982\u8FF0-1" tabindex="-1">\u6982\u8FF0 <a class="header-anchor" href="#\u6982\u8FF0-1" aria-hidden="true">#</a></h3><p>\u8FDB\u7A0B\u5C31\u662F\u4E00\u4E2A\u7A0B\u5E8F\u8FD0\u884C\u7684\u65F6\u5019\u88AB CPU \u62BD\u8C61\u51FA\u6765\uFF0C\u4E00\u4E2A\u7A0B\u5E8F\u8FD0\u884C\u540E\u88AB\u62BD\u8C61\u4E3A\u4E00\u4E2A\u8FDB\u7A0B\uFF0C\u4F46\u662F\u7EBF\u7A0B\u662F\u4ECE\u4E00\u4E2A\u8FDB\u7A0B\u4E2D\u5206\u5272\u51FA\u6765\u7684\uFF0C\u7531\u4E8E CPU \u5904\u7406\u8FDB\u7A0B\u7684\u65F6\u5019\u662F\u91C7\u7528\u65F6\u95F4\u7247\u8F6E\u8F6C\u7684\u65B9\u5F0F\uFF0C\u6240\u4EE5\u8981\u628A\u4E00\u4E2A\u5927\u4E2A\u8FDB\u7A0B\u5206\u5272\u6210\u591A\u4E2A\u7EBF\u7A0B\uFF0C\u4F8B\u5982\uFF1A\u7F51\u9645\u5FEB\u8F66\u4E2D\u6587\u4EF6\u5206\u6210 100 \u90E8\u5206\uFF0C10 \u4E2A\u7EBF\u7A0B\u6587\u4EF6\u5C31\u88AB\u5206\u6210 10 \u4EFD\u6765\u540C\u65F6\u4E0B\u8F7D 1- 10 \u5360\u4E00\u4E2A\u7EBF\u7A0B 11 - 20 \u5360\u4E00\u4E2A\u7EBF\u7A0B\uFF0C\u4EE5\u6B64\u7C7B\u63A8\uFF0C\u7EBF\u7A0B\u8D8A\u591A\uFF0C\u6587\u4EF6\u5C31\u88AB\u5206\u7684\u8D8A\u591A\uFF0C\u540C\u65F6\u4E0B\u8F7D\u5F53\u7136\u901F\u5EA6\u4E5F\u66F4\u5FEB\u3002</p><p><strong>\u8FDB\u7A0B\u662F\u7A0B\u5E8F\u5728\u8BA1\u7B97\u673A\u4E0A\u7684\u4E00\u6B21\u6267\u884C\u6D3B\u52A8\u3002</strong> \u5F53\u4F60\u8FD0\u884C\u4E00\u4E2A\u7A0B\u5E8F\uFF0C\u4F60\u5C31\u542F\u52A8\u4E86\u4E00\u4E2A\u8FDB\u7A0B\u3002\u663E\u7136\uFF0C\u7A0B\u5E8F\u53EA\u662F\u4E00\u7EC4\u6307\u4EE4\u7684\u6709\u5E8F\u96C6\u5408\uFF0C\u5B83\u672C\u8EAB\u6CA1\u6709\u4EFB\u4F55\u8FD0\u884C\u7684\u542B\u4E49\uFF0C\u53EA\u662F\u4E00\u4E2A\u9759\u6001\u5B9E\u4F53\u3002\u800C\u8FDB\u7A0B\u5219\u4E0D\u540C\uFF0C\u5B83\u662F\u7A0B\u5E8F\u5728\u67D0\u4E2A\u6570\u636E\u96C6\u4E0A\u7684\u6267\u884C\uFF0C\u662F\u4E00\u4E2A\u52A8\u6001\u5B9E\u4F53\u3002\u5B83\u56E0\u521B\u5EFA\u800C\u4EA7\u751F\uFF0C\u56E0\u8C03\u5EA6\u800C\u8FD0\u884C\uFF0C\u56E0\u7B49\u5F85\u8D44\u6E90\u6216\u4E8B\u4EF6\u800C\u88AB\u5904\u4E8E\u7B49\u5F85\u72B6\u6001\uFF0C\u56E0\u5B8C\u6210\u4EFB\u52A1\u800C\u88AB\u64A4\u9500\uFF0C\u53CD\u6620\u4E86\u4E00\u4E2A\u7A0B\u5E8F\u5728\u4E00\u5B9A\u7684\u6570\u636E\u96C6\u4E0A\u8FD0\u884C\u7684\u5168\u90E8\u52A8\u6001\u8FC7\u7A0B\u3002 <strong>\u8FDB\u7A0B\u662F\u64CD\u4F5C\u7CFB\u7EDF\u5206\u914D\u8D44\u6E90\u7684\u5355\u4F4D\u3002</strong> \u5728 Windows \u4E0B\uFF0C\u8FDB\u7A0B\u53C8\u88AB\u7EC6\u5316\u4E3A\u7EBF\u7A0B\uFF0C\u4E5F\u5C31\u662F\u4E00\u4E2A\u8FDB\u7A0B\u4E0B\u6709\u591A\u4E2A\u80FD\u72EC\u7ACB\u8FD0\u884C\u7684\u66F4\u5C0F\u5355\u4F4D\u3002 <strong>\u7EBF\u7A0B\uFF08Thread\uFF09\u662F\u8FDB\u7A0B\u7684\u4E00\u4E2A\u5B9E\u4F53\uFF0C\u662F CPU \u8C03\u5EA6\u548C\u5206\u6D3E\u7684\u57FA\u672C\u5355\u4F4D\u3002</strong> \u7EBF\u7A0B\u4E0D\u80FD\u591F\u72EC\u7ACB\u8FD0\u884C\uFF0C\u5FC5\u987B\u4F9D\u5B58\u5728\u5E94\u7528\u7A0B\u5E8F\u4E2D\uFF0C\u7531\u5E94\u7528\u7A0B\u5E8F\u63D0\u4F9B\u591A\u4E2A\u7EBF\u7A0B\u6267\u884C\u63A7\u5236\u3002</p><p><strong>\u7EBF\u7A0B\u548C\u8FDB\u7A0B\u7684\u5173\u7CFB\u662F\uFF1A</strong> \u7EBF\u7A0B\u662F\u5C5E\u4E8E\u8FDB\u7A0B\u7684\uFF0C\u7EBF\u7A0B\u8FD0\u884C\u5728\u8FDB\u7A0B\u7A7A\u95F4\u5185\uFF0C\u540C\u4E00\u8FDB\u7A0B\u6240\u4EA7\u751F\u7684\u7EBF\u7A0B\u5171\u4EAB\u540C\u4E00\u5185\u5B58\u7A7A\u95F4\uFF0C\u4F46\u8FDB\u7A0B\u9000\u51FA\u65F6\u8BE5\u8FDB\u7A0B\u6240\u4EA7\u751F\u7684\u8FDB\u7A0B\u90FD\u4F1A\u88AB\u5F3A\u5236\u9000\u51FA\u5E76\u6E05\u9664\u3002\u7EBF\u7A0B\u53EF\u4E0E\u5C5E\u4E8E\u540C\u4E00\u8FDB\u7A0B\u7684\u5176\u4ED6\u7EBF\u7A0B\u5171\u4EAB\u8FDB\u7A0B\u6240\u62E5\u6709\u7684\u5168\u90E8\u8D44\u6E90\uFF0C\u4F46\u662F\u5176\u672C\u8EAB\u57FA\u672C\u4E0A\u4E0D\u7528\u6709\u7CFB\u7EDF\u8D44\u6E90\uFF0C\u53EA\u62E5\u6709\u4E00\u70B9\u5728\u8FD0\u884C\u4E2D\u5FC5\u4E0D\u53EF\u5C11\u7684\u4FE1\u606F\uFF08\u5982\u7A0B\u5E8F\u8BA1\u6570\u5668\u3001\u4E00\u7EC4\u5BC4\u5B58\u5668\u548C\u6808\uFF09\u3002</p><p>\u5728\u540C\u4E00\u65F6\u95F4\u91CC\uFF0C\u540C\u4E00\u4E2A\u8BA1\u7B97\u673A\u7CFB\u7EDF\u4E2D\u5982\u679C\u5141\u8BB8\u4E24\u4E2A\u6216\u4E24\u4E2A\u4EE5\u4E0A\u7684\u8FDB\u7A0B\u5904\u4E8E\u8FD0\u884C\u72B6\u6001\uFF0C\u8FD9\u4FBF\u662F\u591A\u4EFB\u52A1\u3002\u73B0\u4EE3\u7684\u64CD\u4F5C\u7CFB\u7EDF\u51E0\u4E4E\u90FD\u662F\u591A\u4EFB\u52A1\u64CD\u4F5C\u7CFB\u7EDF\uFF0C\u80FD\u591F\u540C\u65F6\u7BA1\u7406\u591A\u4E2A\u8FDB\u7A0B\u7684\u8FD0\u884C\u3002\u591A\u4EFB\u52A1\u5E26\u6765\u7684\u597D\u5904\u662F\u660E\u663E\u7684\uFF0C\u6BD4\u5982\u4F60\u53EF\u4EE5\u8FB9\u542C mp3 \u8FB9\u4E0A\u7F51\uFF0C\u4E0E\u6B64\u540C\u65F6\u751A\u81F3\u53EF\u4EE5\u5C06\u4E0B\u8F7D\u7684\u6587\u6863\u6253\u5370\u51FA\u6765\uFF0C\u800C\u8FD9\u4E9B\u4EFB\u52A1\u4E4B\u95F4\u4E1D\u6BEB\u4E0D\u4F1A\u76F8\u4E92\u5E72\u6270\u3002\u90A3\u4E48\u8FD9\u91CC\u5C31\u6D89\u53CA\u5230\u4E86\u5E76\u884C\u7684\u95EE\u9898\uFF0C\u4FD7\u8BDD\u8BF4\uFF0C\u4E00\u5FC3\u4E0D\u80FD\u4E8C\u7528\uFF0C\u8FD9\u5BF9\u8BA1\u7B97\u673A\u4E5F\u4E00\u6837\uFF0C\u539F\u5219\u4E0A\u4E00\u4E2A CPU \u53EA\u80FD\u5206\u914D\u7ED9\u4E00\u4E2A\u8FDB\u7A0B\uFF0C\u4EE5\u4FBF\u8FD0\u884C\u8FD9\u4E2A\u8FDB\u7A0B\u3002\u6211\u4EEC\u901A\u5E38\u4F7F\u7528\u7684\u8BA1\u7B97\u673A\u53EA\u6709\u4E00\u4E2A CPU\uFF0C\u4E5F\u5C31\u662F\u4E00\u4E2A\u6838\u5FC3\uFF0C\u8981\u8BA9\u5B83\u4E00\u5FC3\u591A\u7528\uFF0C\u540C\u65F6\u8FD0\u884C\u591A\u4E2A\u8FDB\u7A0B\uFF0C\u5C31\u5FC5\u987B\u4F7F\u7528\u5E76\u53D1\u6280\u672F\u3002\u5B9E\u73B0\u5E76\u53D1\u6280\u672F\u76F8\u5F53\u590D\u6742\uFF0C <strong>\u6700\u5BB9\u6613\u7406\u89E3\u7684\u4E8B\u300C\u65F6\u95F4\u7247\u8F6E\u8F6C\u8FDB\u7A0B\u8C03\u5EA6\u7B97\u6CD5\u300D\uFF0C</strong> \u5B83\u7684\u601D\u60F3\u7B80\u5355\u4ECB\u7ECD\u5982\u4E0B\uFF1A\u5728\u64CD\u4F5C\u7CFB\u7EDF\u7684\u7BA1\u7406\u4E0B\uFF0C\u6240\u6709\u6B63\u5728\u8FD0\u884C\u7684\u8FDB\u7A0B\u8F6E\u6D41\u4F7F\u7528 CPU\uFF0C\u6BCF\u4E2A\u8FDB\u7A0B\u5141\u8BB8\u5360\u7528 CPU \u7684\u65F6\u95F4\u975E\u5E38\u77ED\uFF08\u6BD4\u5982 10 \u6BEB\u79D2\uFF09\uFF0C\u8FD9\u6837\u7528\u6237\u6839\u672C\u611F\u89C9\u4E0D\u51FA\u6765 CPU \u662F\u5728\u8F6E\u6D41\u4E3A\u591A\u4E2A\u8FDB\u7A0B\u670D\u52A1\uFF0C\u5C31\u597D\u50CF\u6240\u6709\u8FDB\u7A0B\u90FD\u5728\u4E0D\u95F4\u65AD\u8FD0\u884C\u4E00\u6837\uFF0C\u4F46\u5B9E\u9645\u4E0A\u5728\u4EFB\u4F55\u65F6\u95F4\u90FD\u53EA\u6709\u4E00\u4E2A\u8FDB\u7A0B\u5360\u7528 CPU\u3002</p><p>\u5982\u679C\u4E00\u53F0\u8BA1\u7B97\u673A\u6709\u591A\u4E2A CPU\uFF0C\u60C5\u51B5\u5C31\u4E0D\u540C\u4E86\uFF0C\u5982\u679C\u8FDB\u7A0B\u6570\u5C0F\u4E8E CPU \u6570\uFF0C\u5219\u4E0D\u540C\u7684\u8FDB\u7A0B\u53EF\u4EE5\u5206\u914D\u7ED9\u4E0D\u540C\u7684 CPU \u6765\u8FD0\u884C\uFF0C\u8FD9\u6837\uFF0C\u591A\u4E2A\u8FDB\u7A0B\u662F\u771F\u6B63\u540C\u65F6\u8FD0\u884C\u7684\uFF0C\u8FD9\u4FBF\u662F\u5E76\u884C\u3002\u5982\u679C\u8FDB\u7A0B\u6570\u5927\u4E8E CPU \u6570\uFF0C\u5219\u4ECD\u7136\u9700\u8981\u4F7F\u7528\u5E76\u53D1\u6280\u672F\u3002</p><p><strong>\u5728 Windows \u4E0B\uFF0C\u8FDB\u884C CPU \u5206\u914D\u662F\u4EE5\u7EBF\u7A0B\u4E3A\u5355\u4F4D\u7684\uFF0C</strong> \u4E00\u4E2A\u8FDB\u7A0B\u53EF\u80FD\u6709\u591A\u4E2A\u7EBF\u7A0B\u7EC4\u6210\uFF0C\u8FD9\u662F\u60C5\u51B5\u66F4\u52A0\u590D\u6742\uFF0C\u7B80\u5355\u6765\u8BF4\uFF1A</p><p>\u603B\u7EBF\u7A0B\u6570 &lt;= CPU \u6570\u91CF\uFF1A\u5E76\u884C\u8FD0\u884C</p><p>\u603B\u7EBF\u7A0B\u6570 &gt;= CPU \u6570\u91CF\uFF1A\u5E76\u53D1\u8FD0\u884C</p><p>\u5E76\u884C\u8FD0\u884C\u7684\u6548\u7387\u663E\u7136\u9AD8\u4E8E\u5E76\u53D1\u8FD0\u884C\uFF0C\u6240\u4EE5\u5728\u591A CPU \u7684\u8BA1\u7B97\u673A\u4E2D\uFF0C\u591A\u4EFB\u52A1\u7684\u6548\u7387\u6BD4\u8F83\u9AD8\u3002\u4F46\u662F\uFF0C\u5982\u679C\u5728\u591A CPU \u8BA1\u7B97\u673A\u4E2D\u4E4B\u8FD0\u884C\u4E00\u4E2A\u8FDB\u7A0B\uFF08\u7EBF\u7A0B\uFF09\uFF0C\u5C31\u4E0D\u80FD\u53D1\u6325\u591A CPU \u7684\u4F18\u52BF\u3002</p><p>\u591A\u4EFB\u52A1\u64CD\u4F5C\u7CFB\u7EDF\uFF08\u5982\uFF1AWindows\uFF09\u7684\u57FA\u672C\u539F\u7406\uFF1A\u64CD\u4F5C\u7CFB\u7EDF\u5C06 CPU \u7684\u65F6\u95F4\u5206\u914D\u7ED9\u591A\u4E2A\u7EBF\u7A0B\uFF0C\u6BCF\u4E2A\u7EBF\u7A0B\u5728\u64CD\u4F5C\u7CFB\u7EDF\u6307\u5B9A\u7684\u65F6\u95F4\u7247\u5185\u5B8C\u6210\uFF08\u6CE8\u610F\uFF0C\u8FD9\u91CC\u7684\u591A\u4E2A\u7EBF\u7A0B\u662F\u5206\u5C5E\u4E8E\u4E0D\u540C\u8FDB\u7A0B\u7684\uFF09\u3002\u64CD\u4F5C\u7CFB\u7EDF\u4E0D\u65AD\u7684\u4ECE\u4E00\u4E2A\u7EBF\u7A0B\u7684\u6267\u884C\u5207\u6362\u5230\u53E6\u4E00\u4E2A\u7EBF\u7A0B\u7684\u6267\u884C\uFF0C\u5982\u6B64\u5F80\u590D\uFF0C\u4ECE\u5B8F\u89C2\u4E0A\u770B\u5C31\u597D\u50CF\u591A\u4E2A\u7EBF\u7A0B\u5728\u4E00\u8D77\u6267\u884C\u3002\u7531\u4E8E\u8FD9\u591A\u4E2A\u7EBF\u7A0B\u5206\u5C5E\u4E8E\u4E0D\u540C\u7684\u8FDB\u7A0B\uFF0C\u56E0\u6B64\u5728\u6211\u4EEC\u770B\u6765\u5C31\u597D\u50CF\u591A\u4E2A\u591A\u4E2A\u8FDB\u7A0B\u5728\u540C\u65F6\u6267\u884C\uFF0C\u8FD9\u5C31\u5B9E\u73B0\u4E86\u591A\u4EFB\u52A1\u3002</p><h3 id="\u5206\u7C7B" tabindex="-1">\u5206\u7C7B <a class="header-anchor" href="#\u5206\u7C7B" aria-hidden="true">#</a></h3><p>\u6839\u636E\u8FDB\u7A0B\u4E0E\u7EBF\u7A0B\u7684\u8BBE\u7F6E\uFF0C\u64CD\u4F5C\u7CFB\u7EDF\u5927\u81F4\u5206\u4E3A\u5982\u4E0B\u7C7B\u578B\uFF1A</p><ol><li>\u5355\u8FDB\u7A0B\u3001\u5355\u7EBF\u7A0B\uFF1AMS-DOS \u5927\u81F4\u662F\u8FD9\u79CD\u64CD\u4F5C\u7CFB\u7EDF\uFF1B</li><li>\u591A\u8FDB\u7A0B\u3001\u5355\u7EBF\u7A0B\uFF1A\u591A\u6570 UNIX\uFF08\u53CA\u7C7B UNIX \u7684 LINUX\uFF09\u662F\u8FD9\u79CD\u64CD\u4F5C\u7CFB\u7EDF\uFF1B</li><li>\u591A\u8FDB\u7A0B\u3001\u591A\u7EBF\u7A0B\uFF1AWin32\uFF08Windows NT / 2000 / XP\uFF09\uFF1B</li><li>\u4F46\u8FDB\u7A0B\u3001\u591A\u7EBF\u7A0B\uFF1AVxWorks\u3002</li></ol><h3 id="\u8FDB\u5165\u7EBF\u7A0B\u5E26\u6765\u7684\u4E3B\u8981\u597D\u5904" tabindex="-1">\u8FDB\u5165\u7EBF\u7A0B\u5E26\u6765\u7684\u4E3B\u8981\u597D\u5904 <a class="header-anchor" href="#\u8FDB\u5165\u7EBF\u7A0B\u5E26\u6765\u7684\u4E3B\u8981\u597D\u5904" aria-hidden="true">#</a></h3><ol><li>\u5728\u8FDB\u7A0B\u5185\u521B\u5EFA\u3001\u7EC8\u6B62\u7EBF\u7A0B\u6BD4\u521B\u5EFA\u3001\u7EC8\u6B62\u8FDB\u7A0B\u8981\u5FEB\uFF1B</li><li>\u540C\u4E00\u8FDB\u7A0B\u5185\u7684\u7EBF\u7A0B\u95F4\u5207\u6362\u6BD4\u8FDB\u7A0B\u95F4\u5207\u6362\u8981\u5FEB\uFF0C\u5C24\u5176\u662F\u7528\u6237\u7EA7\u7EBF\u7A0B\u95F4\u5207\u6362\u3002</li></ol>',31),n=[t];function s(d,h,o,p,c,P){return a(),i("div",null,n)}const U=e(l,[["render",s]]);export{_ as __pageData,U as default};
