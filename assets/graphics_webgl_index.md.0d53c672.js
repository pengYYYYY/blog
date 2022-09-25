import{_ as e,o as a,c as l,a as i}from"./app.d6e52298.js";const p=JSON.parse('{"title":"webgl\u57FA\u7840","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u7740\u8272\u5668\u4E0EGLSL","slug":"\u7740\u8272\u5668\u4E0Eglsl","link":"#\u7740\u8272\u5668\u4E0Eglsl","children":[]},{"level":2,"title":"\u56FE\u50CF\u5904\u7406","slug":"\u56FE\u50CF\u5904\u7406","link":"#\u56FE\u50CF\u5904\u7406","children":[]},{"level":2,"title":"\u4E8C\u7EF4\u5E73\u79FB\uFF0C\u65CB\u8F6C\uFF0C\u7F29\u653E\u548C\u77E9\u9635\u8FD0\u7B97","slug":"\u4E8C\u7EF4\u5E73\u79FB\uFF0C\u65CB\u8F6C\uFF0C\u7F29\u653E\u548C\u77E9\u9635\u8FD0\u7B97","link":"#\u4E8C\u7EF4\u5E73\u79FB\uFF0C\u65CB\u8F6C\uFF0C\u7F29\u653E\u548C\u77E9\u9635\u8FD0\u7B97","children":[]},{"level":2,"title":"\u4E09\u7EF4","slug":"\u4E09\u7EF4","link":"#\u4E09\u7EF4","children":[]},{"level":2,"title":"\u5149\u7167","slug":"\u5149\u7167","link":"#\u5149\u7167","children":[]},{"level":2,"title":"\u51E0\u4F55","slug":"\u51E0\u4F55","link":"#\u51E0\u4F55","children":[]},{"level":2,"title":"\u7EB9\u7406","slug":"\u7EB9\u7406","link":"#\u7EB9\u7406","children":[]},{"level":2,"title":"\u9634\u5F71","slug":"\u9634\u5F71","link":"#\u9634\u5F71","children":[]},{"level":2,"title":"\u6587\u5B57","slug":"\u6587\u5B57","link":"#\u6587\u5B57","children":[]}],"relativePath":"graphics/webgl/index.md","lastUpdated":1662824748000}'),r={name:"graphics/webgl/index.md"},d=i('<h1 id="webgl\u57FA\u7840" tabindex="-1">webgl\u57FA\u7840 <a class="header-anchor" href="#webgl\u57FA\u7840" aria-hidden="true">#</a></h1><h2 id="\u7740\u8272\u5668\u4E0Eglsl" tabindex="-1">\u7740\u8272\u5668\u4E0EGLSL <a class="header-anchor" href="#\u7740\u8272\u5668\u4E0Eglsl" aria-hidden="true">#</a></h2><p>WebGL\u5728\u7535\u8111\u7684GPU\u4E2D\u8FD0\u884C, \u5728\u7F16\u5199\u80FD\u591F\u5728GPU\u4E0A\u8FD0\u884C\u7684\u4EE3\u7801\u8FC7\u7A0B\u4E2D\uFF0C\u6BCF\u5BF9\u65B9\u6CD5\u4E2D\u4E00\u4E2A\u53EB\u9876\u70B9\u7740\u8272\u5668\uFF0C \u53E6\u4E00\u4E2A\u53EB\u7247\u65AD\u7740\u8272\u5668\uFF0C\u6BCF\u4E00\u5BF9\u7EC4\u5408\u8D77\u6765\u79F0\u4F5C\u4E00\u4E2A <code>program</code>\uFF08\u7740\u8272\u7A0B\u5E8F\uFF09\u3002</p><p>\u5BF9\u4E8E\u60F3\u8981\u7ED8\u5236\u7684\u6BCF\u4E00\u4E2A\u5BF9\u8C61\uFF0C\u90FD\u9700\u8981\u5148\u8BBE\u7F6E\u4E00\u7CFB\u5217\u72B6\u6001\u503C\uFF0C\u7136\u540E\u901A\u8FC7\u8C03\u7528 <code>gl.drawArrays</code> \u6216 <code>gl.drawElements</code> \u8FD0\u884C\u4E00\u4E2A\u7740\u8272\u65B9\u6CD5\u5BF9\uFF0C\u4F7F\u5F97\u4F60\u7684\u7740\u8272\u5668\u5BF9\u80FD\u591F\u5728 <code>GPU</code> \u4E0A\u8FD0\u884C\u3002\u7740\u8272\u5668\u83B7\u53D6\u6570\u636E\u76844\u79CD\u65B9\u6CD5:</p><ul><li>\u5C5E\u6027\uFF08Attributes\uFF09\u548C\u7F13\u51B2: \u7F13\u51B2\u662F\u53D1\u9001\u5230GPU\u7684\u4E00\u4E9B\u4E8C\u8FDB\u5236\u6570\u636E\u5E8F\u5217\uFF0C\u901A\u5E38\u60C5\u51B5\u4E0B\u7F13\u51B2\u6570\u636E\u5305\u62EC\u4F4D\u7F6E\uFF0C\u6CD5\u5411\u91CF\uFF0C\u7EB9\u7406\u5750\u6807\uFF0C\u9876\u70B9\u989C\u8272\u503C\u7B49\u3002 \u4F60\u53EF\u4EE5\u5B58\u50A8\u4EFB\u4F55\u6570\u636E\u3002</li><li>\u5168\u5C40\u53D8\u91CF\uFF08Uniforms\uFF09: \u5168\u5C40\u53D8\u91CF\u5728\u7740\u8272\u7A0B\u5E8F\u8FD0\u884C\u524D\u8D4B\u503C\uFF0C\u5728\u8FD0\u884C\u8FC7\u7A0B\u4E2D\u5168\u5C40\u6709\u6548\u3002</li><li>\u7EB9\u7406\uFF08Textures\uFF09: \u7EB9\u7406\u662F\u4E00\u4E2A\u6570\u636E\u5E8F\u5217\uFF0C\u53EF\u4EE5\u5728\u7740\u8272\u7A0B\u5E8F\u8FD0\u884C\u4E2D\u968F\u610F\u8BFB\u53D6\u5176\u4E2D\u7684\u6570\u636E\u3002 \u5927\u591A\u6570\u60C5\u51B5\u5B58\u653E\u7684\u662F\u56FE\u50CF\u6570\u636E\uFF0C\u4F46\u662F\u7EB9\u7406\u4EC5\u4EC5\u662F\u6570\u636E\u5E8F\u5217\uFF0C \u4F60\u4E5F\u53EF\u4EE5\u968F\u610F\u5B58\u653E\u9664\u4E86\u989C\u8272\u6570\u636E\u4EE5\u5916\u7684\u5176\u5B83\u6570\u636E\u3002</li><li>\u53EF\u53D8\u91CF\uFF08Varyings\uFF09: \u53EF\u53D8\u91CF\u662F\u4E00\u79CD\u9876\u70B9\u7740\u8272\u5668\u7ED9\u7247\u65AD\u7740\u8272\u5668\u4F20\u503C\u7684\u65B9\u5F0F\uFF0C\u4F9D\u7167\u6E32\u67D3\u7684\u56FE\u5143\u662F\u70B9\uFF0C \u7EBF\u8FD8\u662F\u4E09\u89D2\u5F62\uFF0C\u9876\u70B9\u7740\u8272\u5668\u4E2D\u8BBE\u7F6E\u7684\u53EF\u53D8\u91CF\u4F1A\u5728\u7247\u65AD\u7740\u8272\u5668\u8FD0\u884C\u4E2D\u83B7\u53D6\u4E0D\u540C\u7684\u63D2\u503C\u3002</li></ul><h2 id="\u56FE\u50CF\u5904\u7406" tabindex="-1">\u56FE\u50CF\u5904\u7406 <a class="header-anchor" href="#\u56FE\u50CF\u5904\u7406" aria-hidden="true">#</a></h2><h2 id="\u4E8C\u7EF4\u5E73\u79FB\uFF0C\u65CB\u8F6C\uFF0C\u7F29\u653E\u548C\u77E9\u9635\u8FD0\u7B97" tabindex="-1">\u4E8C\u7EF4\u5E73\u79FB\uFF0C\u65CB\u8F6C\uFF0C\u7F29\u653E\u548C\u77E9\u9635\u8FD0\u7B97 <a class="header-anchor" href="#\u4E8C\u7EF4\u5E73\u79FB\uFF0C\u65CB\u8F6C\uFF0C\u7F29\u653E\u548C\u77E9\u9635\u8FD0\u7B97" aria-hidden="true">#</a></h2><h2 id="\u4E09\u7EF4" tabindex="-1">\u4E09\u7EF4 <a class="header-anchor" href="#\u4E09\u7EF4" aria-hidden="true">#</a></h2><h2 id="\u5149\u7167" tabindex="-1">\u5149\u7167 <a class="header-anchor" href="#\u5149\u7167" aria-hidden="true">#</a></h2><h2 id="\u51E0\u4F55" tabindex="-1">\u51E0\u4F55 <a class="header-anchor" href="#\u51E0\u4F55" aria-hidden="true">#</a></h2><h2 id="\u7EB9\u7406" tabindex="-1">\u7EB9\u7406 <a class="header-anchor" href="#\u7EB9\u7406" aria-hidden="true">#</a></h2><h2 id="\u9634\u5F71" tabindex="-1">\u9634\u5F71 <a class="header-anchor" href="#\u9634\u5F71" aria-hidden="true">#</a></h2><h2 id="\u6587\u5B57" tabindex="-1">\u6587\u5B57 <a class="header-anchor" href="#\u6587\u5B57" aria-hidden="true">#</a></h2>',13),h=[d];function t(n,s,c,o,u,_){return a(),l("div",null,h)}const b=e(r,[["render",t]]);export{p as __pageData,b as default};