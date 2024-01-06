import{_ as a,c as l,o as t,U as e}from"./chunks/framework.UId1oBXU.js";const u=JSON.parse('{"title":"复杂度","description":"","frontmatter":{},"headers":[],"relativePath":"algo-data-str/complexity.md","filePath":"algo-data-str/complexity.md","lastUpdated":1704559210000}'),i={name:"algo-data-str/complexity.md"},o=e('<h1 id="复杂度" tabindex="-1">复杂度 <a class="header-anchor" href="#复杂度" aria-label="Permalink to &quot;复杂度&quot;">​</a></h1><p>复杂度可以衡量算法的好坏。分析复杂度的同时，也是模拟运算的过程。</p><h2 id="时间复杂度" tabindex="-1">时间复杂度 <a class="header-anchor" href="#时间复杂度" aria-label="Permalink to &quot;时间复杂度&quot;">​</a></h2><p>实际是指程序运行次数，而不是程序运行时间</p><ul><li>O(1):常数阶</li><li>O(log2 n):对数阶</li><li>O(n):线性阶</li><li>O(nlog2n):线性对数阶</li><li>O(n^2):平方型</li><li>O(n^3):立方型</li><li>O(2^n):指数型</li><li>O(2^n):阶乘阶</li></ul><h2 id="空间复杂度" tabindex="-1">空间复杂度 <a class="header-anchor" href="#空间复杂度" aria-label="Permalink to &quot;空间复杂度&quot;">​</a></h2><p>算法执行时创建的变量（包括临时变量）个数</p><ul><li>忽略常数，用O(1)表示</li><li>递归算法的空间复杂度 = 递归深度N * 每次递归所要的辅助空间</li><li>对于单线程来说，递归有运行时堆栈，求的是递归最深的那一次压栈所耗费的空间的个数，因为递归最深的那一次所耗费的空间足以容纳它所有递归过程。递归是要返回上一层的，所以它所需要的空间不是一直累加起来的</li></ul>',8),r=[o];function n(s,c,d,_,p,h){return t(),l("div",null,r)}const f=a(i,[["render",n]]);export{u as __pageData,f as default};
