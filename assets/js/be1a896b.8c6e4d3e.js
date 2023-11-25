"use strict";(self.webpackChunksex_blog=self.webpackChunksex_blog||[]).push([[2075],{274:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>t,default:()=>h,frontMatter:()=>d,metadata:()=>s,toc:()=>o});var l=i(3342),r=i(7131);const d={id:"algorithm-advance",title:"\u7b97\u6cd5\u8fdb\u9636",tags:["\u7b97\u6cd5"]},t=void 0,s={id:"algorithm/algorithm-advance",title:"\u7b97\u6cd5\u8fdb\u9636",description:"\u56fe\u8bba",source:"@site/docs/04-algorithm/02-advance.md",sourceDirName:"04-algorithm",slug:"/algorithm/algorithm-advance",permalink:"/sex-blog/docs/algorithm/algorithm-advance",draft:!1,unlisted:!1,tags:[{label:"\u7b97\u6cd5",permalink:"/sex-blog/docs/tags/\u7b97\u6cd5"}],version:"current",sidebarPosition:2,frontMatter:{id:"algorithm-advance",title:"\u7b97\u6cd5\u8fdb\u9636",tags:["\u7b97\u6cd5"]},sidebar:"tutorialSidebar",previous:{title:"\u7b97\u6cd5\u57fa\u7840",permalink:"/sex-blog/docs/algorithm/algorithm-basic"},next:{title:"\u6570\u636e\u7ed3\u6784",permalink:"/sex-blog/docs/algorithm/algorithm-structure"}},c={},o=[{value:"\u56fe\u8bba",id:"\u56fe\u8bba",level:3},{value:"\u8d2a\u5fc3\u7b97\u6cd5",id:"\u8d2a\u5fc3\u7b97\u6cd5",level:3},{value:"\u52a8\u6001\u89c4\u5212",id:"\u52a8\u6001\u89c4\u5212",level:3},{value:"\u6570\u7ec4",id:"\u6570\u7ec4",level:3},{value:"\u961f\u5217",id:"\u961f\u5217",level:3},{value:"\u6808",id:"\u6808",level:3},{value:"\u4e8c\u53c9\u6811",id:"\u4e8c\u53c9\u6811",level:3},{value:"\u5e76\u67e5\u96c6 \ud83d\udd3c",id:"\u5e76\u67e5\u96c6-",level:3},{value:"\u4e8c\u5206\u67e5\u627e \ud83d\udd3c",id:"\u4e8c\u5206\u67e5\u627e-",level:3},{value:"\u6392\u5217\u7ec4\u5408 \ud83d\udd3c",id:"\u6392\u5217\u7ec4\u5408-",level:3},{value:"\u524d\u7f00\u548c \ud83d\udd3c",id:"\u524d\u7f00\u548c-",level:3},{value:"\u52a8\u6001\u89c4\u5212 \ud83d\udd3c",id:"\u52a8\u6001\u89c4\u5212-",level:3},{value:"\u6570\u8bba \ud83d\udd3c",id:"\u6570\u8bba-",level:3},{value:"KMP \ud83d\udd3c",id:"kmp-",level:3},{value:"\u94fe\u8868",id:"\u94fe\u8868",level:3}];function a(e){const n={code:"code",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,r.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h3,{id:"\u56fe\u8bba",children:"\u56fe\u8bba"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"DFS \ud83d\udd3c"})}),"\n",(0,l.jsx)(n.p,{children:"\u677f\u5b50\uff1a\u904d\u5386\u4e8c\u53c9\u6811\u7684\u8def\u5f84"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"var dfs = (node, visited) => {\r\n    if(!node){\r\n        return;\r\n    }\r\n    visited.push(node.val);\r\nif(!node.left && !node.right){\r\n    const path = visited.slice();\r\n    console.log(path);\r\n}\r\ndfs(node.left, visited);\r\ndfs(node.right, visited);\r\nvisited.pop();\r\n}\n"})}),"\n",(0,l.jsx)(n.p,{children:"BFS \ud83d\udd3c"}),"\n",(0,l.jsx)(n.p,{children:"\u90bb\u63a5\u8868 & \u90bb\u63a5\u77e9\u9635"}),"\n",(0,l.jsx)(n.h3,{id:"\u8d2a\u5fc3\u7b97\u6cd5",children:"\u8d2a\u5fc3\u7b97\u6cd5"}),"\n",(0,l.jsx)(n.h3,{id:"\u52a8\u6001\u89c4\u5212",children:"\u52a8\u6001\u89c4\u5212"}),"\n",(0,l.jsx)(n.h3,{id:"\u6570\u7ec4",children:"\u6570\u7ec4"}),"\n",(0,l.jsx)(n.p,{children:"\u53cc\u6307\u9488\r\n\u6ed1\u52a8\u7a97\u53e3\uff08\u7c7b\u4f3c\u53cc\u6307\u9488\uff09"}),"\n",(0,l.jsx)(n.h3,{id:"\u961f\u5217",children:"\u961f\u5217"}),"\n",(0,l.jsx)(n.h3,{id:"\u6808",children:"\u6808"}),"\n",(0,l.jsx)(n.h3,{id:"\u4e8c\u53c9\u6811",children:"\u4e8c\u53c9\u6811"}),"\n",(0,l.jsx)(n.p,{children:"\u9012\u5f52\u5f88\u591a\u65f6\u5019\u53ef\u4ee5\u4e0e\u4e8c\u53c9\u6811\u76f8\u7ed3\u5408\uff01\r\n\u6784\u9020\u4e8c\u53c9\u6811\u7c7b\u9898\u76ee\uff0c\u7528\u524d\u5e8f\u904d\u5386\u6784\u9020\r\n\u4e8c\u53c9\u641c\u7d22\u6811\r\n\u4e2d\u5e8f\u904d\u5386\u6709\u5e8f\uff08\u6240\u4ee5\u4e00\u822c\u4e8c\u53c9\u641c\u7d22\u6811\u7c7b\u9898\u76ee\u90fd\u7528\u4e2d\u5e8f\u904d\u5386\uff09"}),"\n",(0,l.jsx)(n.h3,{id:"\u5e76\u67e5\u96c6-",children:"\u5e76\u67e5\u96c6 \ud83d\udd3c"}),"\n",(0,l.jsx)(n.h3,{id:"\u4e8c\u5206\u67e5\u627e-",children:"\u4e8c\u5206\u67e5\u627e \ud83d\udd3c"}),"\n",(0,l.jsx)(n.h3,{id:"\u6392\u5217\u7ec4\u5408-",children:"\u6392\u5217\u7ec4\u5408 \ud83d\udd3c"}),"\n",(0,l.jsx)(n.h3,{id:"\u524d\u7f00\u548c-",children:"\u524d\u7f00\u548c \ud83d\udd3c"}),"\n",(0,l.jsx)(n.p,{children:"\u5dee\u5206"}),"\n",(0,l.jsx)(n.h3,{id:"\u52a8\u6001\u89c4\u5212-",children:"\u52a8\u6001\u89c4\u5212 \ud83d\udd3c"}),"\n",(0,l.jsx)(n.p,{children:"\u52a8\u89c4\u4e94\u90e8\u66f2\r\n1.dp\u6570\u7ec4\u542b\u4e49\r\n2.\u9012\u63a8\u516c\u5f0f\r\n3.\u521d\u59cb\u5316\r\n4.\u904d\u5386\u987a\u5e8f\r\n5.\u6253\u5370\u9a8c\u8bc1"}),"\n",(0,l.jsx)(n.p,{children:"01\u80cc\u5305\u95ee\u9898 \ud83d\udd3c\r\n\u9012\u63a8\u516c\u5f0f\uff08\u4e8c\u7ef4\uff09\uff1adp[i][j] = max(dp[i - 1][j], dp[i - 1][j - weight[i]] + value[i]);"}),"\n",(0,l.jsx)(n.p,{children:"\u9012\u63a8\u516c\u5f0f\uff08\u4e00\u7ef4\uff09\uff1adp[j] = max(dp[j], dp[j - weight[i]] + value[i]);"}),"\n",(0,l.jsx)(n.p,{children:"\u9012\u63a8\u516c\u5f0f\u53d8\u5f62\uff1adp[j] += dp[j - nums[i]"}),"\n",(0,l.jsx)(n.p,{children:"\u5b8c\u5168\u80cc\u5305\u95ee\u9898\r\n\u6700\u5927\u4ef7\u503c/\u662f\u5426\u80fd\u88c5\u6ee1 =\u300b\u904d\u5386\u987a\u5e8f\u90fd\u53ef"}),"\n",(0,l.jsx)(n.p,{children:"\u88c5\u6ee1\u80cc\u5305\u591a\u5c11\u79cd\u65b9\u6cd5\uff0c\u7ec4\u5408\u6570 =\u300b \u904d\u5386\u987a\u5e8f-\u5148\u7269\u54c1\u518d\u80cc\u5305"}),"\n",(0,l.jsx)(n.p,{children:"\u88c5\u6ee1\u80cc\u5305\u591a\u5c11\u79cd\u65b9\u6cd5\uff0c\u6392\u5217\u6570 =\u300b \u904d\u5386\u987a\u5e8f-\u5148\u80cc\u5305\u518d\u7269\u54c1"}),"\n",(0,l.jsx)(n.p,{children:"\u6c42\u7ed9\u5b9a\u80cc\u5305\u5bb9\u91cf\uff0c\u6700\u5c11\u7269\u54c1\u6570"}),"\n",(0,l.jsx)(n.h3,{id:"\u6570\u8bba-",children:"\u6570\u8bba \ud83d\udd3c"}),"\n",(0,l.jsx)(n.h3,{id:"kmp-",children:"KMP \ud83d\udd3c"}),"\n",(0,l.jsx)(n.h3,{id:"\u94fe\u8868",children:"\u94fe\u8868"}),"\n",(0,l.jsx)(n.p,{children:"\u521b\u5efa\u865a\u62df\u5934\u8282\u70b9"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"4.8lqb\uff0c\u6700\u8fd1\u5728\u5b66\u4e60\u524d\u7aef\uff0c\u7b97\u6cd5\u57fa\u672c\u6ca1\u6709\u8fdb\u5c55 \ud83d\ude23"})}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"2023.04.08 \u7b97\u6cd5\u76f8\u5173\u6682\u65f6\u4e0d\u66f4\u4e86\uff0c\u6c89\u6dc0\u6c89\u6dc0"})})]})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(a,{...e})}):a(e)}},7131:(e,n,i)=>{i.d(n,{Z:()=>s,a:()=>t});var l=i(9685);const r={},d=l.createContext(r);function t(e){const n=l.useContext(d);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),l.createElement(d.Provider,{value:n},e.children)}}}]);