import{_ as t,c as o,R as a,o as l}from"./chunks/framework.3D9yNSa1.js";const h=JSON.parse('{"title":"生命周期","description":"","frontmatter":{},"headers":[],"relativePath":"font-end-framework/architecture/lifeCycle.md","filePath":"font-end-framework/architecture/lifeCycle.md","lastUpdated":1725463910000}'),r={name:"font-end-framework/architecture/lifeCycle.md"};function i(n,e,d,u,c,p){return l(),o("div",null,e[0]||(e[0]=[a('<h1 id="生命周期" tabindex="-1">生命周期 <a class="header-anchor" href="#生命周期" aria-label="Permalink to &quot;生命周期&quot;">​</a></h1><h2 id="vue2-0的生命周期" tabindex="-1">vue2.0的生命周期 <a class="header-anchor" href="#vue2-0的生命周期" aria-label="Permalink to &quot;vue2.0的生命周期&quot;">​</a></h2><ul><li>beforeCreate：执行时组件还未创建，通常用于插件开发中执行一些未初始化任务</li><li>created：组件初始化完毕，各种数据可以使用，常用于异步数据获取（注意在ssr中会执行两次created）</li><li>beforeMounted：未执行渲染，更新，dom未创建</li><li>mounted：初始化结束，dom创建，可用于获取访问数据和dom元素</li><li>beforeUpdate：更新前，可用于获取更新前各种状态</li><li>updated：更新后，所有状态都是最新</li><li>beforeDestory：销毁前，用于定时器或订阅的取消</li><li>destoryed：组件已经销毁</li></ul><h2 id="vue3-0的生命周期" tabindex="-1">vue3.0的生命周期 <a class="header-anchor" href="#vue3-0的生命周期" aria-label="Permalink to &quot;vue3.0的生命周期&quot;">​</a></h2><h3 id="生命周期2-x与composition之间的映射关系" tabindex="-1">生命周期2.x与Composition之间的映射关系 <a class="header-anchor" href="#生命周期2-x与composition之间的映射关系" aria-label="Permalink to &quot;生命周期2.x与Composition之间的映射关系&quot;">​</a></h3><p>beforeCreate -&gt; use setup() created -&gt; use setup() beforeMount -&gt; onBeforeMount mounted -&gt; onMounted beforeUpdate -&gt; onBeforeUpdate updated -&gt; onUpdated beforeDestroy -&gt; onBeforeUnmount destroyed -&gt; onUnmounted errorCaptured -&gt; onErrorCaptured</p><h3 id="setup执行时机" tabindex="-1">setup执行时机 <a class="header-anchor" href="#setup执行时机" aria-label="Permalink to &quot;setup执行时机&quot;">​</a></h3><p>在beforeCreate之后，create之前执行.</p><h2 id="react生命周期" tabindex="-1">react生命周期 <a class="header-anchor" href="#react生命周期" aria-label="Permalink to &quot;react生命周期&quot;">​</a></h2><h3 id="react16-4之前的生命周期" tabindex="-1">react16.4之前的生命周期 <a class="header-anchor" href="#react16-4之前的生命周期" aria-label="Permalink to &quot;react16.4之前的生命周期&quot;">​</a></h3><ul><li>defaultProps &amp;&amp; propType：初始化props默认值</li><li>construct：构造函数</li><li>componentWillMount：组件将要挂载</li><li>render：组件渲染</li><li>componentDidMount：组件挂载完成</li></ul><blockquote><p>组件运行时：</p></blockquote><ul><li>组件卸载 <ul><li>componentWillUnmount</li></ul></li></ul><blockquote><p>state改变：</p></blockquote><ul><li>shouldComponentUpdate</li><li>componentWillUpdate</li><li>render</li><li>componentDidUpdate</li></ul><blockquote><p>父组件更新render(),props改变</p></blockquote><ul><li>componentWillReceiveProps</li></ul><h3 id="react16-4以后的生命周期" tabindex="-1">react16.4以后的生命周期 <a class="header-anchor" href="#react16-4以后的生命周期" aria-label="Permalink to &quot;react16.4以后的生命周期&quot;">​</a></h3><p>v17以后可能会被废弃的三个生命周期用getDerivedStateFromPros替代：</p><ul><li>componentWillMount</li><li>componentWillUpdate</li><li>componentWillReceiveProps</li></ul><p>要用的话加unsafe</p><p>引入了两个新的生命周期：</p><ul><li>static getDerivedStateFromPros: 在render方法之前都会调用的,返回一个对象来更新state，如果返回null则不更新任何内容。</li><li>getSnapshotBeforeUpdate:在最近一次渲染输出（提交到DOM节点）之前调用，此生命周期的返回值将作为参数传递给<code>componentDidUpdate(prevProps, prevState, snapshot)</code></li></ul>',23)]))}const m=t(r,[["render",i]]);export{h as __pageData,m as default};
