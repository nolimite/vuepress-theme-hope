import{_ as c}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as l,o as u,c as m,e as _,a as e,b as t,d as n,w as a,n as k,g,f as h}from"./app-Ch2j0pIk.js";const f={},b=e("p",null,"VuePress 主要从 Markdown 文件生成页面。因此，你可以使用它轻松生成文档或博客站点。",-1),v=e("p",null,"你应该创建和编写 Markdown 文件，以便 VuePress 可以根据文件结构将它们转换为不同的页面。",-1),w=e("h2",{id:"markdown-介绍",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#markdown-介绍"},[e("span",null,"Markdown 介绍")])],-1),x={href:"https://theme-hope.vuejs.press/zh/cookbook/markdown/",target:"_blank",rel:"noopener noreferrer"},j={href:"https://theme-hope.vuejs.press/zh/cookbook/markdown/demo.html",target:"_blank",rel:"noopener noreferrer"},y=e("h2",{id:"markdown-配置",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#markdown-配置"},[e("span",null,"Markdown 配置")])],-1),z=e("p",null,"VuePress 通过 Frontmatter 为每个 Markdown 页面引入配置。",-1),M={class:"hint-container info"},V=e("p",{class:"hint-container-title"},"相关信息",-1),P={href:"https://theme-hope.vuejs.press/zh/cookbook/vuepress/page.html#front-matter",target:"_blank",rel:"noopener noreferrer"},A=e("h2",{id:"markdown-扩展",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#markdown-扩展"},[e("span",null,"Markdown 扩展")])],-1),E={href:"https://github.com/markdown-it/markdown-it",target:"_blank",rel:"noopener noreferrer"},B={href:"https://github.com/markdown-it/markdown-it#syntax-extensions",target:"_blank",rel:"noopener noreferrer"},T=e("h3",{id:"vuepress-扩展",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#vuepress-扩展"},[e("span",null,"VuePress 扩展")])],-1),C=e("p",null,"为了丰富文档写作，VuePress 对 Markdown 语法进行了扩展。",-1),N={href:"https://theme-hope.vuejs.press/zh/cookbook/vuepress/markdown.html",target:"_blank",rel:"noopener noreferrer"},D=e("h3",{id:"主题扩展",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#主题扩展"},[e("span",null,"主题扩展")])],-1),F={href:"https://plugin-md-enhance.vuejs.press/zh/",target:"_blank",rel:"noopener noreferrer"},H=e("code",null,"vuepress-plugin-md-enhance",-1),S=h(`<h4 id="提示容器" tabindex="-1"><a class="header-anchor" href="#提示容器"><span>提示容器</span></a></h4><div><p>安全的在 Markdown 中使用 {{ variable }}。</p></div><div class="hint-container info"><p class="hint-container-title">自定义标题</p><p>信息容器，包含 <code>代码</code> 与 <a href="#%E6%8F%90%E7%A4%BA%E5%AE%B9%E5%99%A8">链接</a>。</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">const</span> a <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></div><div class="hint-container tip"><p class="hint-container-title">自定义标题</p><p>提示容器</p></div><div class="hint-container warning"><p class="hint-container-title">自定义标题</p><p>警告容器</p></div><div class="hint-container caution"><p class="hint-container-title">自定义标题</p><p>危险容器</p></div><details class="hint-container details"><summary>自定义标题</summary><p>详情容器</p></details>`,7),$={href:"https://theme-hope.vuejs.press/zh/guide/markdown/hint.html",target:"_blank",rel:"noopener noreferrer"},I=e("h4",{id:"代码块",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#代码块"},[e("span",null,"代码块")])],-1),R=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token function"},"pnpm"),t(),e("span",{class:"token function"},"add"),t(),e("span",{class:"token parameter variable"},"-D"),t(` vuepress-theme-hope
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"})])],-1),Z=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token function"},"yarn"),t(),e("span",{class:"token function"},"add"),t(),e("span",{class:"token parameter variable"},"-D"),t(` vuepress-theme-hope
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"})])],-1),L=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token function"},"npm"),t(" i "),e("span",{class:"token parameter variable"},"-D"),t(` vuepress-theme-hope
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"})])],-1),O={href:"https://theme-hope.vuejs.press/zh/guide/markdown/code-tabs.html",target:"_blank",rel:"noopener noreferrer"},J=e("h4",{id:"上下角标",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#上下角标"},[e("span",null,"上下角标")])],-1),K=e("p",null,[t("19"),e("sup",null,"th"),t(" H"),e("sub",null,"2"),t("O")],-1),U={href:"https://theme-hope.vuejs.press/zh/guide/markdown/sup-sub.html",target:"_blank",rel:"noopener noreferrer"},W=e("h4",{id:"自定义对齐",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#自定义对齐"},[e("span",null,"自定义对齐")])],-1),q=e("div",{style:{"text-align":"center"}},[e("p",null,"我是居中的")],-1),G=e("div",{style:{"text-align":"right"}},[e("p",null,"我在右对齐")],-1),Q={href:"https://theme-hope.vuejs.press/zh/guide/markdown/align.html",target:"_blank",rel:"noopener noreferrer"},X=e("h4",{id:"attrs",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#attrs"},[e("span",null,"Attrs")])],-1),Y=e("p",null,[t("一个拥有 ID 的 "),e("strong",{id:"word"},"单词"),t("。")],-1),ee={href:"https://theme-hope.vuejs.press/zh/guide/markdown/attrs.html",target:"_blank",rel:"noopener noreferrer"},te=e("h4",{id:"脚注",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#脚注"},[e("span",null,"脚注")])],-1),ne=e("p",null,[t("此文字有脚注"),e("a",{href:"%E8%BF%99%E6%98%AF%E8%84%9A%E6%B3%A8%E5%86%85%E5%AE%B9"},"^first"),t(".")],-1),se={href:"https://theme-hope.vuejs.press/zh/guide/markdown/footnote.html",target:"_blank",rel:"noopener noreferrer"},ae=e("h4",{id:"标记",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#标记"},[e("span",null,"标记")])],-1),re=e("p",null,[t("你可以标记 "),e("mark",null,"重要的内容"),t(" 。")],-1),oe={href:"https://theme-hope.vuejs.press/zh/guide/markdown/mark.html",target:"_blank",rel:"noopener noreferrer"},le=h('<h4 id="任务列表" tabindex="-1"><a class="header-anchor" href="#任务列表"><span>任务列表</span></a></h4><ul class="task-list-container"><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-0" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-0"> 计划 1</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-1" disabled="disabled"><label class="task-list-item-label" for="task-item-1"> 计划 2</label></li></ul>',2),he={href:"https://theme-hope.vuejs.press/zh/guide/markdown/tasklist.html",target:"_blank",rel:"noopener noreferrer"},ie=e("h3",{id:"图片增强",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#图片增强"},[e("span",null,"图片增强")])],-1),de=e("p",null,"支持为图片设置颜色模式和大小",-1),pe={href:"https://theme-hope.vuejs.press/zh/guide/markdown/image.html",target:"_blank",rel:"noopener noreferrer"},ce=e("h4",{id:"组件",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#组件"},[e("span",null,"组件")])],-1),ue={href:"https://theme-hope.vuejs.press/zh/guide/markdown/component.html",target:"_blank",rel:"noopener noreferrer"},me=e("h4",{id:"导入文件",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#导入文件"},[e("span",null,"导入文件")])],-1),_e={href:"https://theme-hope.vuejs.press/zh/guide/markdown/include.html",target:"_blank",rel:"noopener noreferrer"},ke=e("h4",{id:"样式化",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#样式化"},[e("span",null,"样式化")])],-1),ge={href:"https://theme-hope.vuejs.press/zh/guide/markdown/stylize.html",target:"_blank",rel:"noopener noreferrer"},fe=e("h4",{id:"tex-语法",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#tex-语法"},[e("span",null,"Tex 语法")])],-1),be=e("p",null,"$$ \\frac {\\partial^r} {\\partial \\omega^r} \\left(\\frac {y^{\\omega}} {\\omega}\\right) = \\left(\\frac {y^{\\omega}} {\\omega}\\right) \\left{(\\log y)^r + \\sum_{i=1}^r \\frac {(-1)^i r \\cdots (r-i+1) (\\log y)^{r-i}} {\\omega^i} \\right} $$",-1),ve={href:"https://theme-hope.vuejs.press/zh/guide/markdown/tex.html",target:"_blank",rel:"noopener noreferrer"},we=e("h4",{id:"图表",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#图表"},[e("span",null,"图表")])],-1),xe=e("iframe",{src:"https://plugin-md-enhance-demo.vuejs.press/snippet/chartjs.html",width:"100%",height:"450"},null,-1),je={href:"https://theme-hope.vuejs.press/zh/guide/markdown/chartjs.html",target:"_blank",rel:"noopener noreferrer"},ye=e("h4",{id:"echarts",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#echarts"},[e("span",null,"Echarts")])],-1),ze=e("iframe",{src:"https://plugin-md-enhance-demo.vuejs.press/snippet/echarts.html",width:"100%",height:"800"},null,-1),Me={href:"https://theme-hope.vuejs.press/zh/guide/markdown/echarts.html",target:"_blank",rel:"noopener noreferrer"},Ve=e("h4",{id:"流程图",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#流程图"},[e("span",null,"流程图")])],-1),Pe=e("iframe",{src:"https://plugin-md-enhance-demo.vuejs.press/snippet/flowchart.html",width:"100%",height:"450"},null,-1),Ae={href:"https://theme-hope.vuejs.press/zh/guide/markdown/flowchart.html",target:"_blank",rel:"noopener noreferrer"},Ee=e("h4",{id:"markmap",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#markmap"},[e("span",null,"MarkMap")])],-1),Be=e("iframe",{src:"https://plugin-md-enhance-demo.vuejs.press/snippet/markmap.html",width:"100%",height:"380"},null,-1),Te={href:"https://theme-hope.vuejs.press/zh/guide/markdown/markmap.html",target:"_blank",rel:"noopener noreferrer"},Ce=e("h4",{id:"mermaid",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#mermaid"},[e("span",null,"Mermaid")])],-1),Ne=e("iframe",{src:"https://plugin-md-enhance-demo.vuejs.press/snippet/mermaid.html",width:"100%",height:"620"},null,-1),De={href:"https://theme-hope.vuejs.press/zh/guide/markdown/mermaid.html",target:"_blank",rel:"noopener noreferrer"},Fe=e("h4",{id:"代码演示",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#代码演示"},[e("span",null,"代码演示")])],-1),He=e("iframe",{src:"https://plugin-md-enhance-demo.vuejs.press/snippet/code-demo.html",width:"100%",height:"450"},null,-1),Se={href:"https://theme-hope.vuejs.press/zh/guide/markdown/demo.html",target:"_blank",rel:"noopener noreferrer"},$e=e("h4",{id:"交互演示",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#交互演示"},[e("span",null,"交互演示")])],-1),Ie=e("iframe",{src:"https://plugin-md-enhance-demo.vuejs.press/snippet/playground.html",width:"100%",height:"480"},null,-1),Re={href:"https://theme-hope.vuejs.press/zh/guide/markdown/playground.html",target:"_blank",rel:"noopener noreferrer"},Ze=e("h4",{id:"kotlin-交互演示",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#kotlin-交互演示"},[e("span",null,"Kotlin 交互演示")])],-1),Le=e("iframe",{src:"https://plugin-md-enhance-demo.vuejs.press/snippet/kotlin-playground.html",width:"100%",height:"220"},null,-1),Oe={href:"https://theme-hope.vuejs.press/zh/guide/markdown/kotlin-playground.html",target:"_blank",rel:"noopener noreferrer"},Je=e("h4",{id:"vue-交互演示",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#vue-交互演示"},[e("span",null,"Vue 交互演示")])],-1),Ke=e("iframe",{src:"https://plugin-md-enhance-demo.vuejs.press/snippet/vue-playground.html",width:"100%",height:"380"},null,-1),Ue={href:"https://theme-hope.vuejs.press/zh/guide/markdown/vue-playground.html",target:"_blank",rel:"noopener noreferrer"},We=e("h4",{id:"sandpack-交互演示",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#sandpack-交互演示"},[e("span",null,"Sandpack 交互演示")])],-1),qe=e("iframe",{src:"https://plugin-md-enhance-demo.vuejs.press/snippet/sandpack.html",width:"100%",height:"380"},null,-1),Ge={href:"https://theme-hope.vuejs.press/zh/guide/markdown/sandpack.html",target:"_blank",rel:"noopener noreferrer"},Qe=e("h4",{id:"幻灯片",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#幻灯片"},[e("span",null,"幻灯片")])],-1),Xe=e("iframe",{src:"https://plugin-md-enhance-demo.vuejs.press/snippet/revealjs.html",width:"100%",height:"400"},null,-1),Ye={href:"https://theme-hope.vuejs.press/zh/guide/markdown/revealjs.html",target:"_blank",rel:"noopener noreferrer"};function et(tt,nt){const s=l("ExternalLinkIcon"),i=l("CodeTabs"),d=l("VPCard"),p=l("Badge");return u(),m("div",null,[b,v,_(" more "),w,e("p",null,[t("如果你是一个新手，还不会编写 Markdown，请先阅读 "),e("a",x,[t("Markdown 介绍"),n(s)]),t(" 和 "),e("a",j,[t("Markdown 演示"),n(s)]),t("。")]),y,z,e("div",M,[V,e("p",null,[t("Frontmatter 是 VuePress 中很重要的一个概念，如果你不了解它，你需要阅读 "),e("a",P,[t("Frontmatter 介绍"),n(s)]),t("。")])]),A,e("p",null,[t("VuePress 会使用 "),e("a",E,[t("markdown-it"),n(s)]),t(" 来解析 Markdown 内容，因此可以借助于 markdown-it 插件来实现 "),e("a",B,[t("语法扩展"),n(s)]),t(" 。")]),T,C,e("p",null,[t("关于这些扩展，请阅读 "),e("a",N,[t("VuePress 中的 Markdown 扩展"),n(s)]),t("。")]),D,e("p",null,[t("通过 "),e("a",F,[H,n(s)]),t("，主题扩展了更多 Markdown 语法，提供更加丰富的写作功能。")]),S,e("ul",null,[e("li",null,[e("a",$,[t("查看详情"),n(s)])])]),I,n(i,{id:"89",data:[{id:"pnpm"},{id:"yarn"},{id:"npm"}],active:2},{title0:a(({value:r,isActive:o})=>[t("pnpm")]),title1:a(({value:r,isActive:o})=>[t("yarn")]),title2:a(({value:r,isActive:o})=>[t("npm")]),tab0:a(({value:r,isActive:o})=>[R]),tab1:a(({value:r,isActive:o})=>[Z]),tab2:a(({value:r,isActive:o})=>[L]),_:1}),e("ul",null,[e("li",null,[e("a",O,[t("查看详情"),n(s)])])]),J,K,e("ul",null,[e("li",null,[e("a",U,[t("查看详情"),n(s)])])]),W,q,G,e("ul",null,[e("li",null,[e("a",Q,[t("查看详情"),n(s)])])]),X,Y,e("ul",null,[e("li",null,[e("a",ee,[t("查看详情"),n(s)])])]),te,ne,e("ul",null,[e("li",null,[e("a",se,[t("查看详情"),n(s)])])]),ae,re,e("ul",null,[e("li",null,[e("a",oe,[t("查看详情"),n(s)])])]),le,e("p",null,[e("a",he,[t("查看详情"),n(s)])]),ie,de,e("ul",null,[e("li",null,[e("a",pe,[t("查看详情"),n(s)])])]),ce,n(d,k(g({title:"Mr.Hope",desc:"Where there is light, there is hope",logo:"https://mister-hope.com/logo.svg",link:"https://mister-hope.com",background:"rgba(253, 230, 138, 0.15)"})),null,16),e("ul",null,[e("li",null,[e("a",ue,[t("查看详情"),n(s)])])]),me,e("ul",null,[e("li",null,[e("a",_e,[t("查看详情"),n(s)])])]),ke,e("p",null,[t("向 Mr.Hope 捐赠一杯咖啡。 "),n(p,{type:"tip"},{default:a(()=>[t("Recommended")]),_:1})]),e("ul",null,[e("li",null,[e("a",ge,[t("查看详情"),n(s)])])]),fe,be,e("ul",null,[e("li",null,[e("a",ve,[t("查看详情"),n(s)])])]),we,xe,e("ul",null,[e("li",null,[e("a",je,[t("查看详情"),n(s)])])]),ye,ze,e("ul",null,[e("li",null,[e("a",Me,[t("查看详情"),n(s)])])]),Ve,Pe,e("ul",null,[e("li",null,[e("a",Ae,[t("查看详情"),n(s)])])]),Ee,Be,e("ul",null,[e("li",null,[e("a",Te,[t("查看详情"),n(s)])])]),Ce,Ne,e("ul",null,[e("li",null,[e("a",De,[t("查看详情"),n(s)])])]),Fe,He,e("ul",null,[e("li",null,[e("a",Se,[t("查看详情"),n(s)])])]),$e,Ie,e("ul",null,[e("li",null,[e("a",Re,[t("查看详情"),n(s)])])]),Ze,Le,e("ul",null,[e("li",null,[e("a",Oe,[t("View Detail"),n(s)])])]),Je,Ke,e("ul",null,[e("li",null,[e("a",Ue,[t("查看详情"),n(s)])])]),We,qe,e("ul",null,[e("li",null,[e("a",Ge,[t("查看详情"),n(s)])])]),Qe,Xe,e("ul",null,[e("li",null,[e("a",Ye,[t("查看详情"),n(s)])])])])}const rt=c(f,[["render",et],["__file","markdown.html.vue"]]),ot=JSON.parse('{"path":"/zh/demo/markdown.html","title":"Markdown 展示","lang":"zh-CN","frontmatter":{"title":"Markdown 展示","icon":"fab fa-markdown","order":2,"category":["使用指南"],"tag":["Markdown"],"description":"VuePress 主要从 Markdown 文件生成页面。因此，你可以使用它轻松生成文档或博客站点。 你应该创建和编写 Markdown 文件，以便 VuePress 可以根据文件结构将它们转换为不同的页面。","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://mister-hope.github.io/demo/markdown.html"}],["meta",{"property":"og:url","content":"https://mister-hope.github.io/zh/demo/markdown.html"}],["meta",{"property":"og:site_name","content":"博客演示"}],["meta",{"property":"og:title","content":"Markdown 展示"}],["meta",{"property":"og:description","content":"VuePress 主要从 Markdown 文件生成页面。因此，你可以使用它轻松生成文档或博客站点。 你应该创建和编写 Markdown 文件，以便 VuePress 可以根据文件结构将它们转换为不同的页面。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-04-12T07:00:05.000Z"}],["meta",{"property":"article:author","content":"Mr.Hope"}],["meta",{"property":"article:tag","content":"Markdown"}],["meta",{"property":"article:modified_time","content":"2024-04-12T07:00:05.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Markdown 展示\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-04-12T07:00:05.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Hope\\",\\"url\\":\\"https://mister-hope.com\\"}]}"]]},"headers":[{"level":2,"title":"Markdown 介绍","slug":"markdown-介绍","link":"#markdown-介绍","children":[]},{"level":2,"title":"Markdown 配置","slug":"markdown-配置","link":"#markdown-配置","children":[]},{"level":2,"title":"Markdown 扩展","slug":"markdown-扩展","link":"#markdown-扩展","children":[{"level":3,"title":"VuePress 扩展","slug":"vuepress-扩展","link":"#vuepress-扩展","children":[]},{"level":3,"title":"主题扩展","slug":"主题扩展","link":"#主题扩展","children":[]},{"level":3,"title":"图片增强","slug":"图片增强","link":"#图片增强","children":[]}]}],"git":{"createdTime":1712905205000,"updatedTime":1712905205000,"contributors":[{"name":"nolimite","email":"nolimite@naver.com","commits":1}]},"readingTime":{"minutes":3.08,"words":924},"filePathRelative":"zh/demo/markdown.md","localizedDate":"2024年4月12日","excerpt":"<p>VuePress 主要从 Markdown 文件生成页面。因此，你可以使用它轻松生成文档或博客站点。</p>\\n<p>你应该创建和编写 Markdown 文件，以便 VuePress 可以根据文件结构将它们转换为不同的页面。</p>\\n","autoDesc":true}');export{rt as comp,ot as data};
