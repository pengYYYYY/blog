import{_ as e,o as l,c as i,a as t}from"./app.93974dee.js";var a="/blog/assets/iRBZBM.46047e73.png";const _='{"title":"http-next","description":"","frontmatter":{},"headers":[{"level":2,"title":"http2","slug":"http2"},{"level":3,"title":"\u4E8C\u8FDB\u5236\u5206\u5E27","slug":"\u4E8C\u8FDB\u5236\u5206\u5E27"},{"level":3,"title":"\u591A\u8DEF\u590D\u7528","slug":"\u591A\u8DEF\u590D\u7528"},{"level":3,"title":"\u670D\u52A1\u5668\u63A8\u9001","slug":"\u670D\u52A1\u5668\u63A8\u9001"},{"level":3,"title":"\u5934\u90E8\u538B\u7F29","slug":"\u5934\u90E8\u538B\u7F29"},{"level":3,"title":"Http2\u8BF7\u6C42\u8FC7\u7A0B","slug":"http2\u8BF7\u6C42\u8FC7\u7A0B"},{"level":2,"title":"http3","slug":"http3"},{"level":3,"title":"\u521D\u59CB\u63E1\u624B","slug":"\u521D\u59CB\u63E1\u624B"},{"level":3,"title":"\u91CD\u590D\u63E1\u624B","slug":"\u91CD\u590D\u63E1\u624B"},{"level":3,"title":"\u8FDE\u63A5\u8FC1\u79FB","slug":"\u8FDE\u63A5\u8FC1\u79FB"},{"level":3,"title":"\u53EF\u9760\u6027","slug":"\u53EF\u9760\u6027"}],"relativePath":"basics/network/http-next.md","lastUpdated":1655193856000}',p={name:"basics/network/http-next.md"},h=t('<h1 id="http-next" tabindex="-1">http-next <a class="header-anchor" href="#http-next" aria-hidden="true">#</a></h1><h2 id="http2" tabindex="-1">http2 <a class="header-anchor" href="#http2" aria-hidden="true">#</a></h2><ul><li><p>\u4E00\u4E2ATCP\u2ED3\u8FDE\u63A5\u6765\u4F20\u8F93\u6570\u636E\uFF0C\u8FD9\u6837\u6574\u4E2A\u9875\u9762\u8D44\u6E90\u7684\u4E0B\u8F7D\u8FC7\u7A0B\u53EA\u9700\u8981\u4E00\u6B21\u6162\u542F\u52A8\u3002\u540C\u65F6\u4E5F\u907F\u514D\u4E86\u591A\u4E2ATCP\u8FDE\u63A5\u7ADE\u4E89\u5E26\u5BBD\u6240\u5E26\u6765\u7684\u95EE\u9898\u3002</p></li><li><p>\u961F\u5934\u963B\u585E\uFF0C\u8D44\u6E90\u5E76\u884C\u8BF7\u6C42\uFF0C</p></li><li><p>\u591A\u8DEF\u590D\u7528\u673A\u5236\uFF0C\u4E2A\u8BF7\u6C42\u90FD\u6709\u4E00\u4E2A\u5BF9\u5E94\u7684 ID\uFF0C\u5728\u6D4F\u89C8\u5668\u7AEF\uFF0C\u5C31\u53EF\u4EE5\u968F\u65F6\u5C06\u8BF7\u6C42\u53D1\u9001\u7ED9\u670D\u52A1\u5668\u4E86\u3002\u5C06\u8BF7\u6C42\u5206\u6210\u4E00\u5E27\u4E00\u5E27\u7684\u6570\u636E\u53BB\u4F20\u8F93\u3002\u5F53\u6536\u5230\u4E00\u4E2A\u4F18\u5148\u7EA7\u9AD8\u7684\u8BF7\u6C42\u65F6\uFF0C\u670D\u52A1\u5668\u53EF\u4EE5\u6682\u505C\u4E4B\u524D\u7684\u8BF7\u6C42\u6765\u4F18\u5148\u5904\u7406\u5173\u952E\u8D44\u6E90\u7684\u8BF7\u6C42\u3002</p></li></ul><h3 id="\u4E8C\u8FDB\u5236\u5206\u5E27" tabindex="-1">\u4E8C\u8FDB\u5236\u5206\u5E27 <a class="header-anchor" href="#\u4E8C\u8FDB\u5236\u5206\u5E27" aria-hidden="true">#</a></h3><p>\u5E27\uFF1AHTTP/2 \u6570\u636E\u901A\u4FE1\u7684\u6700\u5C0F\u5355\u4F4D\u6D88\u606F\uFF1A\u6307 HTTP/2 \u4E2D\u903B\u8F91\u4E0A\u7684 HTTP \u6D88\u606F\u3002\u4F8B\u5982\u8BF7\u6C42\u548C\u54CD\u5E94\u7B49\uFF0C\u6D88\u606F\u7531\u4E00\u4E2A\u6216\u591A\u4E2A\u5E27\u7EC4\u6210\u3002</p><p>\u6D41\uFF1A\u5B58\u5728\u4E8E\u8FDE\u63A5\u4E2D\u7684\u4E00\u4E2A\u865A\u62DF\u901A\u9053\u3002\u6D41\u53EF\u4EE5\u627F\u8F7D\u53CC\u5411\u6D88\u606F\uFF0C\u6BCF\u4E2A\u6D41\u90FD\u6709\u4E00\u4E2A\u552F\u4E00\u7684\u6574\u6570ID\u3002</p><p>HTTP/2 \u91C7\u7528\u4E8C\u8FDB\u5236\u683C\u5F0F\u4F20\u8F93\u6570\u636E\uFF0C\u800C\u975E HTTP 1.x \u7684\u6587\u672C\u683C\u5F0F\uFF0C\u4E8C\u8FDB\u5236\u534F\u8BAE\u89E3\u6790\u8D77\u6765\u66F4\u9AD8\u6548\u3002 HTTP / 1 \u7684\u8BF7\u6C42\u548C\u54CD\u5E94\u62A5\u6587\uFF0C\u90FD\u662F\u7531\u8D77\u59CB\u884C\uFF0C\u9996\u90E8\u548C\u5B9E\u4F53\u6B63\u6587\uFF08\u53EF\u9009\uFF09\u7EC4\u6210\uFF0C\u5404\u90E8\u5206\u4E4B\u95F4\u4EE5\u6587\u672C\u6362\u884C\u7B26\u5206\u9694\u3002HTTP/2 \u5C06\u8BF7\u6C42\u548C\u54CD\u5E94\u6570\u636E\u5206\u5272\u4E3A\u66F4\u5C0F\u7684\u5E27\uFF0C\u5E76\u4E14\u5B83\u4EEC\u91C7\u7528\u4E8C\u8FDB\u5236\u7F16\u7801\u3002</p><p>HTTP/2 \u4E2D\uFF0C\u540C\u57DF\u540D\u4E0B\u6240\u6709\u901A\u4FE1\u90FD\u5728\u5355\u4E2A\u8FDE\u63A5\u4E0A\u5B8C\u6210\uFF0C\u8BE5\u8FDE\u63A5\u53EF\u4EE5\u627F\u8F7D\u4EFB\u610F\u6570\u91CF\u7684\u53CC\u5411\u6570\u636E\u6D41\u3002\u6BCF\u4E2A\u6570\u636E\u6D41\u90FD\u4EE5\u6D88\u606F\u7684\u5F62\u5F0F\u53D1\u9001\uFF0C\u800C\u6D88\u606F\u53C8\u7531\u4E00\u4E2A\u6216\u591A\u4E2A\u5E27\u7EC4\u6210\u3002\u591A\u4E2A\u5E27\u4E4B\u95F4\u53EF\u4EE5\u4E71\u5E8F\u53D1\u9001\uFF0C\u6839\u636E\u5E27\u9996\u90E8\u7684\u6D41\u6807\u8BC6\u53EF\u4EE5\u91CD\u65B0\u7EC4\u88C5\u3002</p><h3 id="\u591A\u8DEF\u590D\u7528" tabindex="-1">\u591A\u8DEF\u590D\u7528 <a class="header-anchor" href="#\u591A\u8DEF\u590D\u7528" aria-hidden="true">#</a></h3><p>\u591A\u8DEF\u590D\u7528\uFF0C\u4EE3\u66FF\u539F\u6765\u7684\u5E8F\u5217\u548C\u963B\u585E\u673A\u5236\u3002\u6240\u6709\u5C31\u662F\u8BF7\u6C42\u7684\u90FD\u662F\u901A\u8FC7\u4E00\u4E2A TCP\u8FDE\u63A5\u5E76\u53D1\u5B8C\u6210\u3002 HTTP 1.x \u4E2D\uFF0C\u5982\u679C\u60F3\u5E76\u53D1\u591A\u4E2A\u8BF7\u6C42\uFF0C\u5FC5\u987B\u4F7F\u7528\u591A\u4E2A TCP \u94FE\u63A5\uFF0C\u4E14\u6D4F\u89C8\u5668\u4E3A\u4E86\u63A7\u5236\u8D44\u6E90\uFF0C\u8FD8\u4F1A\u5BF9\u5355\u4E2A\u57DF\u540D\u6709 6-8\u4E2A\u7684TCP\u94FE\u63A5\u8BF7\u6C42\u9650\u5236\u3002</p><p>\u5728 HTTP/2 \u4E2D\uFF0C\u6709\u4E86\u4E8C\u8FDB\u5236\u5206\u5E27\u4E4B\u540E\uFF0CHTTP /2 \u4E0D\u518D\u4F9D\u8D56 TCP \u94FE\u63A5\u53BB\u5B9E\u73B0\u591A\u6D41\u5E76\u884C\u4E86\uFF0C\u5728 HTTP/2\u4E2D\uFF1A</p><ul><li>\u540C\u57DF\u540D\u4E0B\u6240\u6709\u901A\u4FE1\u90FD\u5728\u5355\u4E2A\u8FDE\u63A5\u4E0A\u5B8C\u6210\u3002</li><li>\u5355\u4E2A\u8FDE\u63A5\u53EF\u4EE5\u627F\u8F7D\u4EFB\u610F\u6570\u91CF\u7684\u53CC\u5411\u6570\u636E\u6D41\u3002</li><li>\u6570\u636E\u6D41\u4EE5\u6D88\u606F\u7684\u5F62\u5F0F\u53D1\u9001\uFF0C\u800C\u6D88\u606F\u53C8\u7531\u4E00\u4E2A\u6216\u591A\u4E2A\u5E27\u7EC4\u6210\uFF0C\u591A\u4E2A\u5E27\u4E4B\u95F4\u53EF\u4EE5\u4E71\u5E8F\u53D1\u9001\uFF0C\u56E0\u4E3A\u6839\u636E\u5E27\u9996\u90E8\u7684\u6D41\u6807\u8BC6\u53EF\u4EE5\u91CD\u65B0\u7EC4\u88C5\u3002</li></ul><p>\u6027\u80FD\u63D0\u5347\uFF1A</p><ul><li>\u540C\u4E2A\u57DF\u540D\u53EA\u9700\u8981\u5360\u7528\u4E00\u4E2A TCP \u8FDE\u63A5\uFF0C\u6D88\u9664\u4E86\u56E0\u591A\u4E2A TCP \u8FDE\u63A5\u800C\u5E26\u6765\u7684\u5EF6\u65F6\u548C\u5185\u5B58\u6D88\u8017\u3002</li><li>\u5355\u4E2A\u8FDE\u63A5\u4E0A\u53EF\u4EE5\u5E76\u884C\u4EA4\u9519\u7684\u8BF7\u6C42\u548C\u54CD\u5E94\uFF0C\u4E4B\u95F4\u4E92\u4E0D\u5E72\u6270\u3002</li><li>\u5728HTTP/2\u4E2D\uFF0C\u6BCF\u4E2A\u8BF7\u6C42\u90FD\u53EF\u4EE5\u5E26\u4E00\u4E2A31bit\u7684\u4F18\u5148\u503C\uFF0C0\u8868\u793A\u6700\u9AD8\u4F18\u5148\u7EA7\uFF0C\u6570\u503C\u8D8A\u5927\u4F18\u5148\u7EA7\u8D8A\u4F4E\u3002\u6709\u4E86\u8FD9\u4E2A\u4F18\u5148\u503C\uFF0C\u5BA2\u6237\u7AEF\u548C\u670D\u52A1\u5668\u5C31\u53EF\u4EE5\u5728\u5904\u7406\u4E0D\u540C\u7684\u6D41\u65F6\u91C7\u53D6\u4E0D\u540C\u7684\u7B56\u7565\uFF0C\u4EE5\u6700\u4F18\u7684\u65B9\u5F0F\u53D1\u9001\u6D41\u3001\u6D88\u606F\u548C\u5E27\u3002</li></ul><h3 id="\u670D\u52A1\u5668\u63A8\u9001" tabindex="-1">\u670D\u52A1\u5668\u63A8\u9001 <a class="header-anchor" href="#\u670D\u52A1\u5668\u63A8\u9001" aria-hidden="true">#</a></h3><p>\u670D\u52A1\u7AEF\u53EF\u4EE5\u5728\u53D1\u9001\u9875\u9762HTML\u65F6\u4E3B\u52A8\u63A8\u9001\u5176\u5B83\u8D44\u6E90\uFF0C\u800C\u4E0D\u7528\u7B49\u5230\u6D4F\u89C8\u5668\u89E3\u6790\u5230\u76F8\u5E94\u4F4D\u7F6E\uFF0C\u53D1\u8D77\u8BF7\u6C42\u518D\u54CD\u5E94\u3002\u4F8B\u5982\u670D\u52A1\u7AEF\u53EF\u4EE5\u4E3B\u52A8\u628AJS\u548CCSS\u6587\u4EF6\u63A8\u9001\u7ED9\u5BA2\u6237\u7AEF\uFF0C\u800C\u4E0D\u9700\u8981\u5BA2\u6237\u7AEF\u89E3\u6790HTML\u65F6\u518D\u53D1\u9001\u8FD9\u4E9B\u8BF7\u6C42\u3002</p><p>\u670D\u52A1\u7AEF\u53EF\u4EE5\u4E3B\u52A8\u63A8\u9001\uFF0C\u5BA2\u6237\u7AEF\u4E5F\u6709\u6743\u5229\u9009\u62E9\u662F\u5426\u63A5\u6536\u3002\u5982\u679C\u670D\u52A1\u7AEF\u63A8\u9001\u7684\u8D44\u6E90\u5DF2\u7ECF\u88AB\u6D4F\u89C8\u5668\u7F13\u5B58\u8FC7\uFF0C\u6D4F\u89C8\u5668\u53EF\u4EE5\u901A\u8FC7\u53D1\u9001RST_STREAM\u5E27\u6765\u62D2\u6536\u3002\u4E3B\u52A8\u63A8\u9001\u4E5F\u9075\u5B88\u540C\u6E90\u7B56\u7565\uFF0C\u670D\u52A1\u5668\u4E0D\u4F1A\u968F\u4FBF\u63A8\u9001\u7B2C\u4E09\u65B9\u8D44\u6E90\u7ED9\u5BA2\u6237\u7AEF\u3002</p><h3 id="\u5934\u90E8\u538B\u7F29" tabindex="-1">\u5934\u90E8\u538B\u7F29 <a class="header-anchor" href="#\u5934\u90E8\u538B\u7F29" aria-hidden="true">#</a></h3><p>HTTP/2\u5BF9\u6D88\u606F\u5934\u91C7\u7528HPACK\uFF08\u4E13\u4E3Ahttp/2\u5934\u90E8\u8BBE\u8BA1\u7684\u538B\u7F29\u683C\u5F0F\uFF09\u8FDB\u884C\u538B\u7F29\u4F20\u8F93\uFF0C\u80FD\u591F\u8282\u7701\u6D88\u606F\u5934\u5360\u7528\u7684\u7F51\u7EDC\u7684\u6D41\u91CF\u3002\u800CHTTP/1.x\u6BCF\u6B21\u8BF7\u6C42\uFF0C\u90FD\u4F1A\u643A\u5E26\u5927\u91CF\u5197\u4F59\u5934\u4FE1\u606F\uFF0C\u6D6A\u8D39\u4E86\u5F88\u591A\u5E26\u5BBD\u8D44\u6E90\u3002</p><ul><li>HTTP/2\u5728\u5BA2\u6237\u7AEF\u548C\u670D\u52A1\u5668\u7AEF\u4F7F\u7528\u201C\u9996\u90E8\u8868\u201D\u6765\u8DDF\u8E2A\u548C\u5B58\u50A8\u4E4B\u524D\u53D1\u9001\u7684\u952E\uFF0D\u503C\u5BF9\uFF0C\u5BF9\u4E8E\u76F8\u540C\u7684\u6570\u636E\uFF0C\u4E0D\u518D\u901A\u8FC7\u6BCF\u6B21\u8BF7\u6C42\u548C\u54CD\u5E94\u53D1\u9001\uFF1B</li><li>\u9996\u90E8\u8868\u5728HTTP/2\u7684\u8FDE\u63A5\u5B58\u7EED\u671F\u5185\u59CB\u7EC8\u5B58\u5728\uFF0C\u7531\u5BA2\u6237\u7AEF\u548C\u670D\u52A1\u5668\u5171\u540C\u6E10\u8FDB\u5730\u66F4\u65B0;</li><li>\u6BCF\u4E2A\u65B0\u7684\u9996\u90E8\u952E\uFF0D\u503C\u5BF9\u8981\u4E48\u88AB\u8FFD\u52A0\u5230\u5F53\u524D\u8868\u7684\u672B\u5C3E\uFF0C\u8981\u4E48\u66FF\u6362\u8868\u4E2D\u4E4B\u524D\u7684\u503C\u3002</li></ul><h3 id="http2\u8BF7\u6C42\u8FC7\u7A0B" tabindex="-1">Http2\u8BF7\u6C42\u8FC7\u7A0B <a class="header-anchor" href="#http2\u8BF7\u6C42\u8FC7\u7A0B" aria-hidden="true">#</a></h3><ul><li><p>\u9996\u5148\uFF0C\u6D4F\u89C8\u5668\u51C6\u5907\u597D\u8BF7\u6C42\u6570\u636E\uFF0C\u5305\u62EC\u4E86\u8BF7\u6C42\u884C\u3001\u8BF7\u6C42\u5934\u7B49\u4FE1\u606F\uFF0C\u5982\u679C\u662FPOST\u65B9\u6CD5\uFF0C\u90A3\u4E48\u8FD8\u8981\u6709\u8BF7\u6C42\u4F53\u3002</p></li><li><p>\u8FD9\u4E9B\u6570\u636E\u7ECF\u8FC7\u4E8C\u8FDB\u5236\u5206\u5E27\u5C42\u5904\u7406\u4E4B\u540E\uFF0C\u4F1A\u88AB\u8F6C\u6362\u4E3A\u4E00\u4E2A\u4E2A\u5E26\u6709\u8BF7\u6C42ID\u7F16\u53F7\u7684\u5E27\uFF0C\u901A\u8FC7\u534F\u8BAE\u6808\u5C06\u8FD9\u4E9B\u5E27\u53D1\u9001\u7ED9\u670D\u52A1\u5668\u3002</p></li><li><p>\u670D\u52A1\u5668\u63A5\u6536\u5230\u6240\u6709\u5E27\u4E4B\u540E\uFF0C\u4F1A\u5C06\u6240\u6709\u76F8\u540CID\u7684\u5E27\u5408\u5E76\u4E3A\u4E00\u6761\u5B8C\u6574\u7684\u8BF7\u6C42\u4FE1\u606F\u3002</p></li><li><p>\u7136\u540E\u670D\u52A1\u5668\u5904\u7406\u8BE5\u6761\u8BF7\u6C42\uFF0C\u5E76\u5C06\u5904\u7406\u7684\u54CD\u5E94\u884C\u3001\u54CD\u5E94\u5934\u548C\u54CD\u5E94\u4F53\u5206\u522B\u53D1\u9001\u81F3\u4E8C\u8FDB\u5236\u5206\u5E27\u5C42\u3002</p></li><li><p>\u540C\u6837\uFF0C\u4E8C\u8FDB\u5236\u5206\u5E27\u5C42\u4F1A\u5C06\u8FD9\u4E9B\u54CD\u5E94\u6570\u636E\u8F6C\u6362\u4E3A\u4E00\u4E2A\u4E2A\u5E26\u6709\u8BF7\u6C42ID\u7F16\u53F7\u7684\u5E27\uFF0C\u7ECF\u8FC7\u534F\u8BAE\u6808\u53D1\u9001\u7ED9\u6D4F\u89C8\u5668\u3002</p></li><li><p>\u6D4F\u89C8\u5668\u63A5\u6536\u5230\u54CD\u5E94\u5E27\u4E4B\u540E\uFF0C\u4F1A\u6839\u636EID\u7F16\u53F7\u5C06\u5E27\u7684\u6570\u636E\u63D0\u4EA4\u7ED9\u5BF9\u5E94\u7684\u8BF7\u6C42\u3002</p></li></ul><p>\u901A\u8FC7\u5F15\u5165\u4E8C\u8FDB\u5236\u5206\u5E27\u5C42\uFF0C\u5C31\u5B9E\u73B0\u4E86HTTP\u7684\u591A\u8DEF\u590D\u7528\u6280\u672F\u3002</p><h2 id="http3" tabindex="-1">http3 <a class="header-anchor" href="#http3" aria-hidden="true">#</a></h2><p>QUIC\uFF08quick upd internet connection\uFF09,</p><p>QUIC\u534F\u8BAE\u6709\u4EE5\u4E0B\u7279\u70B9\uFF1A</p><ul><li>\u57FA\u4E8EUDP\u7684\u4F20\u8F93\u5C42\u534F\u8BAE\uFF1A\u5B83\u4F7F\u7528UDP\u7AEF\u53E3\u53F7\u6765\u8BC6\u522B\u6307\u5B9A\u673A\u5668\u4E0A\u7684\u7279\u5B9A\u670D\u52A1\u5668\u3002</li><li>\u53EF\u9760\u6027\uFF1A\u867D\u7136UDP\u662F\u4E0D\u53EF\u9760\u4F20\u8F93\u534F\u8BAE\uFF0C\u4F46\u662FQUIC\u5728UDP\u7684\u57FA\u7840\u4E0A\u505A\u4E86\u4E9B\u6539\u9020\uFF0C\u4F7F\u5F97\u4ED6\u63D0\u4F9B\u4E86\u548CTCP\u7C7B\u4F3C\u7684\u53EF\u9760\u6027\u3002\u5B83\u63D0\u4F9B\u4E86\u6570\u636E\u5305\u91CD\u4F20\u3001\u62E5\u585E\u63A7\u5236\u3001\u8C03\u6574\u4F20\u8F93\u8282\u594F\u4EE5\u53CA\u5176\u4ED6\u4E00\u4E9BTCP\u4E2D\u5B58\u5728\u7684\u7279\u6027\u3002</li><li>\u5B9E\u73B0\u4E86\u65E0\u5E8F\u3001\u5E76\u53D1\u5B57\u8282\u6D41\uFF1AQUIC\u7684\u5355\u4E2A\u6570\u636E\u6D41\u53EF\u4EE5\u4FDD\u8BC1\u6709\u5E8F\u4EA4\u4ED8\uFF0C\u4F46\u591A\u4E2A\u6570\u636E\u6D41\u4E4B\u95F4\u53EF\u80FD\u4E71\u5E8F\uFF0C\u8FD9\u610F\u5473\u7740\u5355\u4E2A\u6570\u636E\u6D41\u7684\u4F20\u8F93\u662F\u6309\u5E8F\u7684\uFF0C\u4F46\u662F\u591A\u4E2A\u6570\u636E\u6D41\u4E2D\u63A5\u6536\u65B9\u6536\u5230\u7684\u987A\u5E8F\u53EF\u80FD\u4E0E\u53D1\u9001\u65B9\u7684\u53D1\u9001\u987A\u5E8F\u4E0D\u540C\uFF01</li><li>\u5FEB\u901F\u63E1\u624B\uFF1AQUIC\u63D0\u4F9B0-RTT\u548C1-RTT\u7684\u8FDE\u63A5\u5EFA\u7ACB</li><li>\u4F7F\u7528TLS 1.3\u4F20\u8F93\u5C42\u5B89\u5168\u534F\u8BAE\uFF1A\u4E0E\u66F4\u65E9\u7684TLS\u7248\u672C\u76F8\u6BD4\uFF0CTLS 1.3\u6709\u7740\u5F88\u591A\u4F18\u70B9\uFF0C\u4F46\u4F7F\u7528\u5B83\u7684\u6700\u4E3B\u8981\u539F\u56E0\u662F\u5176\u63E1\u624B\u6240\u82B1\u8D39\u7684\u5F80\u8FD4\u6B21\u6570\u66F4\u4F4E\uFF0C\u4ECE\u800C\u80FD\u964D\u4F4E\u534F\u8BAE\u7684\u5EF6\u8FDF\u3002</li></ul><p>QUIC\u5EFA\u7ACB\u6D41\u7A0B\uFF1A</p><blockquote><p>Diffie\u2013Hellman (\u4EE5\u4E0B\u7B80\u79F0DH)\u5BC6\u94A5\u4EA4\u6362\u662F\u4E00\u4E2A\u7279\u6B8A\u7684\u4EA4\u6362\u5BC6\u94A5\u7684\u65B9\u6CD5\u3002\u5B83\u662F\u5BC6\u7801\u5B66\u9886\u57DF\u5185\u6700\u65E9\u4ED8\u8BF8\u5B9E\u8DF5\u7684\u5BC6\u94A5\u4EA4\u6362\u65B9\u6CD5\u4E4B\u4E00\u3002 DH\u53EF\u4EE5\u8BA9\u53CC\u65B9\u5728\u5B8C\u5168\u7F3A\u4E4F\u5BF9\u65B9(\u79C1\u6709)\u4FE1\u606F\u7684\u524D\u63D0\u6761\u4EF6\u4E0B\u901A\u8FC7\u4E0D\u5B89\u5168\u7684\u4FE1\u9053\u8FBE\u6210\u4E00\u4E2A\u5171\u4EAB\u7684\u5BC6\u94A5\u3002\u6B64\u5BC6\u94A5\u7528\u4E8E\u5BF9\u540E\u7EED\u4FE1\u606F\u4EA4\u6362\u8FDB\u884C\u5BF9\u79F0\u52A0\u5BC6\u3002</p></blockquote><p>QUIC\u5728\u63E1\u624B\u8FC7\u7A0B\u4E2D\u4F7F\u7528Diffie-Hellman\u7B97\u6CD5\u534F\u5546\u521D\u59CB\u5BC6\u94A5\uFF0C\u521D\u59CB\u5BC6\u94A5\u4F9D\u8D56\u4E8E\u670D\u52A1\u5668\u5B58\u50A8\u7684\u4E00\u7EC4\u914D\u7F6E\u53C2\u6570\uFF0C\u8BE5\u53C2\u6570\u4F1A\u5468\u671F\u6027\u7684\u66F4\u65B0\u3002\u521D\u59CB\u5BC6\u94A5\u534F\u5546\u6210\u529F\u540E\uFF0C\u670D\u52A1\u5668\u4F1A\u63D0\u4F9B\u4E00\u4E2A\u4E34\u65F6\u968F\u673A\u6570\uFF0C\u53CC\u65B9\u6839\u636E\u8FD9\u4E2A\u6570\u518D\u751F\u6210\u4F1A\u8BDD\u5BC6\u94A5\u3002\u5BA2\u6237\u7AEF\u548C\u670D\u52A1\u5668\u4F1A\u4F7F\u7528\u65B0\u751F\u7684\u7684\u5BC6\u94A5\u8FDB\u884C\u6570\u636E\u52A0\u89E3\u5BC6\u3002</p><p>\u4E24\u4E2A\u6B65\u9AA4\uFF1A</p><ul><li>\u521D\u59CB\u63E1\u624B\uFF08Initial handshake\uFF09</li><li>\u6700\u7EC8\uFF08\u4E0E\u91CD\u590D\uFF09\u63E1\u624B\uFF08Final (and repeat) handshake\uFF09</li></ul><p><a href="https://juejin.cn/post/6908522467107536903" target="_blank" rel="noopener noreferrer">https://juejin.cn/post/6908522467107536903</a></p><h3 id="\u521D\u59CB\u63E1\u624B" tabindex="-1">\u521D\u59CB\u63E1\u624B <a class="header-anchor" href="#\u521D\u59CB\u63E1\u624B" aria-hidden="true">#</a></h3><ol><li>\u5728\u8FDE\u63A5\u5F00\u59CB\u5EFA\u7ACB\u65F6\uFF0C\u5BA2\u6237\u7AEF\u4F1A\u5411\u670D\u52A1\u7AEF\u53D1\u9001\u4E00\u4E2A\u6253\u62DB\u547C\u4FE1\u606F\uFF0C\uFF08inchoate client hello (CHLO)\uFF09\uFF0C\u56E0\u4E3A\u662F\u521D\u6B21\u5EFA\u7ACB\uFF0C\u6240\u4EE5\uFF0C\u670D\u52A1\u7AEF\u4F1A\u8FD4\u56DE\u4E00\u4E2A\u62D2\u7EDD\u6D88\u606F\uFF08REJ\uFF09\uFF0C\u8868\u660E\u63E1\u624B\u672A\u5EFA\u7ACB\u6216\u8005\u5BC6\u94A5\u5DF2\u8FC7\u671F\u3002\u6B64\u65F6\u670D\u52A1\u7AEF\u4F1A\u628A\u81EA\u5DF1\u7684\u957F\u671F\u516C\u94A5\u4F20\u7ED9\u5BA2\u6237\u7AEF\u3002</li><li>\u5BA2\u6237\u7AEF\u670D\u52A1\u7AEF\u7684\u957F\u671F\u516C\u94A5\u540E\u5B58\u4E0B\u6765\uFF0C\u7136\u540E\u4F1A\u968F\u673A\u4EA7\u751F\u4E00\u5BF9\u77ED\u671F\u79C1\u94A5\u548C\u77ED\u671F\u516C\u94A5\u3002</li><li>\u5C06\u81EA\u5DF1\u7684\u77ED\u671F\u516C\u94A5\u4F20\u8F93\u7ED9\u670D\u52A1\u7AEF\uFF0C\u670D\u52A1\u7AEF\u63A5\u6536\u8FD9\u4E2A\u8BF7\u6C42\u4EE5\u540E\uFF0C\u4F1A\u4F7F\u7528\u81EA\u5DF1\u7684\u957F\u671F\u516C\u94A5\u548C\u5BA2\u6237\u7AEF\u7684\u77ED\u671F\u516C\u94A5\u8BA1\u7B97\u51FA\u4E00\u4E2A\u76F8\u540C\u7684\u521D\u59CB\u5BC6\u94A5\u3002</li><li>\u4F7F\u7528\u81EA\u5DF1\u7684\u77ED\u671F\u516C\u94A5\u548C\u670D\u52A1\u7AEF\u7684\u957F\u671F\u516C\u94A5\u8BA1\u7B97\u51FA\u4E00\u4E2A\u521D\u59CB\u5BC6\u94A5\uFF0C\u7136\u540E\u4F7F\u7528\u8FD9\u4E2A\u521D\u59CB\u5BC6\u94A5\u76F4\u63A5\u8FDB\u884C\u6570\u636E\u8BF7\u6C42\u3002</li><li>\u670D\u52A1\u7AEF\u62E5\u6709\u4E86\u8BF7\u6C42\u7684\u521D\u59CB\u5BC6\u94A5\uFF0C\u5C31\u53EF\u4EE5\u5BF9\u5176\u8FDB\u884C\u89E3\u5BC6\u4E86\u3002</li><li>\u7136\u540E\u670D\u52A1\u7AEF\u4F1A\u628A\u81EA\u5DF1\u7684\u77ED\u671F\u516C\u94A5\u4F20\u8F93\u7ED9\u5BA2\u6237\u7AEF\uFF0C\u540E\u7EED\u4F7F\u7528\u5BA2\u6237\u7AEF\u7684\u77ED\u671F\u516C\u94A5\u548C\u670D\u52A1\u7AEF\u7684\u77ED\u671F\u516C\u94A5\u751F\u6210\u521D\u59CB\u5BC6\u94A5\uFF0C\u518D\u8FDB\u884C\u52A0\u5BC6\u4F20\u8F93</li></ol><h3 id="\u91CD\u590D\u63E1\u624B" tabindex="-1">\u91CD\u590D\u63E1\u624B <a class="header-anchor" href="#\u91CD\u590D\u63E1\u624B" aria-hidden="true">#</a></h3><p><img src="'+a+'" alt="img"></p><p>\u5BA2\u6237\u7AEF\u548C\u670D\u52A1\u7AEF\u5C31\u90FD\u6709\u4E86\u5BF9\u65B9\u7684\u77ED\u671F\u516C\u94A5\uFF08ephemeral Diffie-Hellman public value\uFF09\u3002</p><p>\u8FD9\u6837\uFF0C\u5BA2\u6237\u7AEF\u548C\u670D\u52A1\u7AEF\u90FD\u53EF\u4EE5\u57FA\u4E8E\u81EA\u5DF1\u7684\u77ED\u671F\u5BC6\u94A5\u548C\u5BF9\u65B9\u7684\u77ED\u671F\u516C\u94A5\u505A\u8FD0\u7B97\uFF0C\u4EA7\u751F\u4E00\u4E2A\u4EC5\u9650\u4E8E\u672C\u6B21\u8FDE\u63A5\u4F7F\u7528\u7684\u524D\u5411\u4FDD\u5BC6\u5BC6\u94A5 (Forward-Secure Key)\uFF0C\u540E\u7EED\u7684\u8BF7\u6C42\u53D1\u9001\uFF0C\u90FD\u57FA\u4E8E\u8FD9\u4E2A\u5BC6\u94A5\u8FDB\u884C\u52A0\u89E3\u5BC6\u5C31\u53EF\u4EE5\u4E86\u3002</p><p>\u53CC\u65B9\u5C31\u5B8C\u6210\u4E86\u6700\u7EC8\u7684\u5BC6\u94A5\u4EA4\u6362\u3001\u8FDE\u63A5\u7684\u63E1\u624B\u5E76\u4E14\u5EFA\u7ACB\u4E86QUIC\u8FDE\u63A5\u3002</p><p>\u5F53\u4E0B\u4E00\u6B21\u8981\u91CD\u65B0\u521B\u5EFA\u8FDE\u63A5\u7684\u65F6\u5019\uFF0C\u5BA2\u6237\u7AEF\u4F1A\u4ECE\u7F13\u5B58\u4E2D\u53D6\u51FA\u81EA\u5DF1\u4E4B\u524D\u7F13\u5B58\u4E0B\u6765\u7684\u670D\u52A1\u5668\u7684\u957F\u671F\u516C\u94A5\uFF0C\u5E76\u91CD\u65B0\u521B\u5EFA\u4E00\u4E2A\u77ED\u671F\u5BC6\u94A5\uFF0C\u91CD\u65B0\u751F\u6210\u4E00\u4E2A\u521D\u8BC6\u5BC6\u94A5\uFF0C\u518D\u4F7F\u7528\u8FD9\u4E2A\u521D\u59CB\u5BC6\u94A5\u5BF9\u60F3\u8981\u4F20\u8F93\u7684\u6570\u636E\u8FDB\u884C\u52A0\u5BC6\uFF0C\u5411\u670D\u52A1\u5668\u53D1\u9001\u4E00\u4E2AComplete CHLO \u8BF7\u6C42\u5373\u53EF\u3002\u8FD9\u6837\u5C31\u8FBE\u5230\u4E860 RTT\u7684\u6570\u636E\u4F20\u8F93\u3002</p><h3 id="\u8FDE\u63A5\u8FC1\u79FB" tabindex="-1">\u8FDE\u63A5\u8FC1\u79FB <a class="header-anchor" href="#\u8FDE\u63A5\u8FC1\u79FB" aria-hidden="true">#</a></h3><p>\u5BF9\u4E8ETCP\u8FDE\u63A5\u7684\u8BC6\u522B\uFF0C\u9700\u8981\u901A\u8FC7\u670D\u52A1\u5668\u548C\u5BA2\u6237\u7AEF\u8FC7\u53CC\u65B9\u7684ip\u548C\u7AEF\u53E3\u56DB\u4E2A\u53C2\u6570\u8FDB\u884C\u7684\u3002\u5728\u7F51\u7EDC\u5207\u6362\u7684\u573A\u666F\u4E2D\uFF0C\u6BD4\u5982\u624B\u673A\u5207\u6362\u7F51\u7EDC\uFF0C\u90A3\u4E48\u81EA\u8EAB\u7684ip\u5C31\u4F1A\u53D1\u751F\u53D8\u5316\u3002\u8FD9\u5C31\u5BFC\u81F4\u4E4B\u524D\u7684TCP\u8FDE\u63A5\u5C31\u4F1A\u5931\u6548\uFF0C\u5C31\u9700\u8981\u91CD\u65B0\u5EFA\u7ACB\u3002</p><p>QUIC\u534F\u8BAE\u4F7F\u7528\u7279\u6709\u7684UUID\u6765\u6807\u8BB0\u6BCF\u4E00\u6B21\u8FDE\u63A5\uFF0C\u5728\u7F51\u7EDC\u73AF\u5883\u53D1\u751F\u53D8\u5316\u7684\u65F6\u5019\uFF0C\u53EA\u8981UUID\u4E0D\u53D8\uFF0C\u5C31\u80FD\u4E0D\u9700\u8981\u63E1\u624B\uFF0C\u7EE7\u7EED\u4F20\u8F93\u6570\u636E\u3002</p><h3 id="\u53EF\u9760\u6027" tabindex="-1">\u53EF\u9760\u6027 <a class="header-anchor" href="#\u53EF\u9760\u6027" aria-hidden="true">#</a></h3><p>TCP\u4E4B\u6240\u4EE5\u88AB\u79F0\u4E4B\u4E3A\u53EF\u9760\u94FE\u63A5\uFF0C\u4E0D\u4EC5\u4EC5\u662F\u56E0\u4E3A\u4ED6\u6709\u4E09\u6B21\u63E1\u624B\u548C\u56DB\u6B21\u5173\u95ED\u7684\u8FC7\u7A0B\uFF0C\u8FD8\u56E0\u4E3A\u4ED6\u505A\u4E86\u5F88\u591A\u8BF8\u5982\u6D41\u91CF\u63A7\u5236\u3001\u6570\u636E\u91CD\u4F20\u3001\u62E5\u585E\u63A7\u5236\u7B49\u53EF\u9760\u6027\u4FDD\u8BC1\u3002</p>',46),r=[h];function n(d,s,T,c,o,u){return l(),i("div",null,r)}var H=e(p,[["render",n]]);export{_ as __pageData,H as default};
