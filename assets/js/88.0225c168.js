(window.webpackJsonp=window.webpackJsonp||[]).push([[88],{439:function(v,_,t){"use strict";t.r(_);var a=t(25),i=Object(a.a)({},(function(){var v=this,_=v.$createElement,t=v._self._c||_;return t("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[t("h1",{attrs:{id:"javascript核心"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#javascript核心"}},[v._v("#")]),v._v(" JavaScript核心")]),v._v(" "),t("p",[t("img",{attrs:{src:"https://gitee.com/PENG_YUE/myImg/raw/master/uPic/aaQ65d.png",alt:"img"}})]),v._v(" "),t("p",[v._v("js的几大核心问题")]),v._v(" "),t("h2",{attrs:{id:"解释执行"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#解释执行"}},[v._v("#")]),v._v(" 解释执行")]),v._v(" "),t("ul",[t("li",[v._v("代码编译阶段\n"),t("ul",[t("li",[v._v("编译器\n"),t("ul",[t("li",[v._v("高级语言")]),v._v(" "),t("li",[v._v("汇编指令集")]),v._v(" "),t("li",[v._v("机器码")])])]),v._v(" "),t("li",[v._v("编译器\n"),t("ul",[t("li",[v._v("词法分析和语法分析生成AST")]),v._v(" "),t("li",[v._v("语义分析生成中间代码")]),v._v(" "),t("li",[v._v("代码优化生成二进制文件")]),v._v(" "),t("li",[v._v("直接执行二进制文件")])])]),v._v(" "),t("li",[v._v("解释器\n"),t("ul",[t("li",[v._v("词法分析和语法分析生成AST")]),v._v(" "),t("li",[v._v("语义分析生成字节码")]),v._v(" "),t("li",[v._v("解释执行")])])])])]),v._v(" "),t("li",[v._v("V8执行代码阶段\n"),t("ul",[t("li",[v._v("生成抽象语法树(AST)和执行上下文（编译阶段）\n"),t("ul",[t("li",[v._v("使用编译器")]),v._v(" "),t("li",[v._v("分词")]),v._v(" "),t("li",[v._v("解析")])])]),v._v(" "),t("li",[v._v("生成字节码\n"),t("ul",[t("li",[v._v("ast")]),v._v(" "),t("li",[v._v("机器码")])])]),v._v(" "),t("li",[v._v("执行代码\n"),t("ul",[t("li",[v._v("使用解释器")]),v._v(" "),t("li",[v._v("热点代码的缓存")])])])])])]),v._v(" "),t("h2",{attrs:{id:"作用域"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#作用域"}},[v._v("#")]),v._v(" 作用域")]),v._v(" "),t("ul",[t("li",[v._v("全局作用域")]),v._v(" "),t("li",[v._v("函数作用域\n"),t("ul",[t("li",[v._v("执行上下文")]),v._v(" "),t("li",[v._v("词法作用域")])])]),v._v(" "),t("li",[v._v("块级作用域")]),v._v(" "),t("li",[v._v("闭包")]),v._v(" "),t("li",[v._v("作用域链")])]),v._v(" "),t("h2",{attrs:{id:"原型链"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#原型链"}},[v._v("#")]),v._v(" 原型链")]),v._v(" "),t("h2",{attrs:{id:"事件循环"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#事件循环"}},[v._v("#")]),v._v(" 事件循环")]),v._v(" "),t("h2",{attrs:{id:"垃圾回收"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#垃圾回收"}},[v._v("#")]),v._v(" 垃圾回收")]),v._v(" "),t("ul",[t("li",[v._v("栈空间\n"),t("ul",[t("li",[v._v("执行状态指针")])])]),v._v(" "),t("li",[v._v("堆空间\n"),t("ul",[t("li",[v._v("新生代\n"),t("ul",[t("li",[v._v("swap")]),v._v(" "),t("li",[v._v("对象晋升")])])]),v._v(" "),t("li",[v._v("老生代\n"),t("ul",[t("li",[v._v("标记清除法")]),v._v(" "),t("li",[v._v("引用计数法")]),v._v(" "),t("li",[v._v("内存整理")])])])])])]),v._v(" "),t("p",[v._v("垃圾回收算法有多种，我们从 "),t("code",[v._v("吞吐量 throughput")]),v._v(",  "),t("code",[v._v("最大暂停时间")]),v._v(", "),t("code",[v._v("堆使用效率")]),v._v(", "),t("code",[v._v("访问的局部性")]),v._v("来评测算法的好坏。")]),v._v(" "),t("h3",{attrs:{id:"标记-清除算法（-mark-sweep-gc）"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#标记-清除算法（-mark-sweep-gc）"}},[v._v("#")]),v._v(" 标记-清除算法（ Mark-Sweep GC）")]),v._v(" "),t("p",[v._v("标记清除法分两个阶段：")]),v._v(" "),t("ul",[t("li",[v._v("标记阶段：从根集合出发，将所有活动对象及其子对象打上标记")]),v._v(" "),t("li",[v._v("清除阶段：遍历堆，将非活动对象（未打上标记）的连接到空闲链表上")])]),v._v(" "),t("p",[t("img",{attrs:{src:"https://gitee.com/PENG_YUE/myImg/raw/master/uPic/nmF8wj.png",alt:"img"}})]),v._v(" "),t("p",[v._v("优点：")]),v._v(" "),t("p",[v._v("实现简单， 容易和其他算法组合")]),v._v(" "),t("p",[v._v("缺点：")]),v._v(" "),t("ul",[t("li",[v._v("碎片化， 会导致无数小分块散落在堆的各处")]),v._v(" "),t("li",[v._v("分配速度不理想，每次分配都需要遍历空闲列表找到足够大的分块")]),v._v(" "),t("li",[v._v("与写时复制技术不兼容，因为每次都会在活动对象上打上标记")])]),v._v(" "),t("h3",{attrs:{id:"标记-压缩（mark-compact）"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#标记-压缩（mark-compact）"}},[v._v("#")]),v._v(" 标记-压缩（Mark-Compact）")]),v._v(" "),t("p",[v._v("和“标记－清除”相似，不过在标记阶段后它将所有活动对象紧密的排在堆的一侧（压缩），消除了内存碎片，不过压缩是需要花费计算成本的。如下图过程，标记后需要定位各个活动对象的新内存地址，然后再移动对象，总共搜索了3次堆。")]),v._v(" "),t("p",[t("img",{attrs:{src:"https://gitee.com/PENG_YUE/myImg/raw/master/uPic/z0sV6k.png",alt:"img"}})]),v._v(" "),t("p",[v._v("有效利用了堆，不会出现内存碎片 也不会像复制算法那样只能利用堆的一部分")]),v._v(" "),t("p",[v._v("压缩过程的开销，需要多次搜索堆")]),v._v(" "),t("h3",{attrs:{id:"引用计数-reference-counting"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#引用计数-reference-counting"}},[v._v("#")]),v._v(" 引用计数 Reference Counting")]),v._v(" "),t("p",[v._v("引用计数，就是记录每个对象被引用的次数，每次新建对象、赋值引用和删除引用的同时更新计数器，如果计数器值为0则直接回收内存。 很明显，引用计数最大的优势是暂停时间短")]),v._v(" "),t("ul",[t("li",[t("p",[v._v("优点")]),v._v(" "),t("ul",[t("li",[v._v("可即刻回收垃圾")]),v._v(" "),t("li",[v._v("最大暂停时间短")]),v._v(" "),t("li",[v._v("没有必要沿指针查找，不要和标记-清除算法一样沿着根集合开始查找")])])]),v._v(" "),t("li",[t("p",[v._v("缺点")]),v._v(" "),t("ul",[t("li",[v._v("计数器的增减处理繁重")]),v._v(" "),t("li",[v._v("计数器需要占用很多位")]),v._v(" "),t("li",[v._v("实现繁琐复杂， 每个赋值操作都得替换成引用更新操作")]),v._v(" "),t("li",[v._v("循环引用无法回收")])])])]),v._v(" "),t("h3",{attrs:{id:"gc复制算法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#gc复制算法"}},[v._v("#")]),v._v(" GC复制算法")]),v._v(" "),t("p",[v._v("将堆分为两个大小相同的空间 From 和 To， 利用 From 空间进行分配，当 From 空间满的时候，GC将其中的活动对象复制到 To 空间，之后将两个空间互换即完成GC。")]),v._v(" "),t("ul",[t("li",[v._v("优点\n"),t("ul",[t("li",[v._v("优秀的吞吐量， 只需要关心活动对象")]),v._v(" "),t("li",[v._v("可实现高速分配； 因为分块是连续的，不需要使用空闲链表")]),v._v(" "),t("li",[v._v("不会发生碎片化")]),v._v(" "),t("li",[v._v("与缓存兼容")])])]),v._v(" "),t("li",[v._v("缺点\n"),t("ul",[t("li",[v._v("堆使用率低")]),v._v(" "),t("li",[v._v("需要空间大")]),v._v(" "),t("li",[v._v("递归调用函数， 复制子对象需要递归调用复制函数消耗栈")])])])]),v._v(" "),t("h3",{attrs:{id:"三色标记算法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#三色标记算法"}},[v._v("#")]),v._v(" 三色标记算法")]),v._v(" "),t("ul",[t("li",[v._v("白色： 没有检查")]),v._v(" "),t("li",[v._v("灰色： 自身被检查了，成员没被检查完（可以认为访问到了，但是正在被检查，就是遍历里那些在队列中的节点）")]),v._v(" "),t("li",[v._v("黑色： 自身和成员都被检查完了")])]),v._v(" "),t("p",[v._v("根查找阶段： 对能直接从根引用的对象打上标记，堆放到标记栈里（白色 涂成 灰色）\n标记阶段： 从标记栈中取出对象，将其子对象涂成灰色；这个阶段不是一下子处理所有的灰色对象，而只是处理一定个数，然后暂停gc\n清除阶段： 将没被标记的白色对象连接到空闲链表，并重置已标记的对象标记位")]),v._v(" "),t("p",[t("img",{attrs:{src:"https://gitee.com/PENG_YUE/myImg/raw/master/uPic/Ws6vCZ.png",alt:"img"}}),v._v(" "),t("img",{attrs:{src:"https://gitee.com/PENG_YUE/myImg/raw/master/uPic/Lf382t.png",alt:"img"}}),v._v(" "),t("img",{attrs:{src:"https://gitee.com/PENG_YUE/myImg/raw/master/uPic/qDWHNH.png",alt:"img"}})]),v._v(" "),t("p",[v._v("优点： 缩短最大暂停时间\n缺点： 降低了吞吐量")]),v._v(" "),t("h2",{attrs:{id:"this指向"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#this指向"}},[v._v("#")]),v._v(" this指向")]),v._v(" "),t("ul",[t("li",[v._v("call")]),v._v(" "),t("li",[v._v("bind")]),v._v(" "),t("li",[v._v("apply")]),v._v(" "),t("li",[v._v("箭头函数")])]),v._v(" "),t("h2",{attrs:{id:"事件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#事件"}},[v._v("#")]),v._v(" 事件")]),v._v(" "),t("p",[v._v("事件的三个阶段")]),v._v(" "),t("ul",[t("li",[v._v("事件捕获")]),v._v(" "),t("li",[v._v("事件触发")]),v._v(" "),t("li",[v._v("事件冒泡")])]),v._v(" "),t("h3",{attrs:{id:"事件阻断"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#事件阻断"}},[v._v("#")]),v._v(" 事件阻断")]),v._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[v._v("event"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[v._v("stopPropagation")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v(")")]),v._v("\n")])]),v._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[v._v("1")]),t("br")])])])}),[],!1,null,null,null);_.default=i.exports}}]);