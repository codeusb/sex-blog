"use strict";(self.webpackChunksex_blog=self.webpackChunksex_blog||[]).push([[3608],{585:(e,s,r)=>{r.r(s),r.d(s,{default:()=>o});r(9685);var t=r(4669),a=r(2892),i=r(5274),l=r(1946),n=r(5873),c=r(3342);function h(e){let{year:s,posts:r}=e;return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n.Z,{as:"h3",id:s,children:s}),(0,c.jsx)("ul",{children:r.map((e=>(0,c.jsx)("li",{children:(0,c.jsxs)(t.Z,{to:e.metadata.permalink,children:[e.metadata.formattedDate," - ",e.metadata.title]})},e.metadata.date)))})]})}function d(e){let{years:s}=e;return(0,c.jsx)("section",{className:"margin-vert--lg",children:(0,c.jsx)("div",{className:"container",children:(0,c.jsx)("div",{className:"row",children:s.map(((e,s)=>(0,c.jsx)("div",{className:"col col--4 margin-vert--lg",children:(0,c.jsx)(h,{...e})},s)))})})})}function o(e){let{archive:s}=e;const r=(0,a.I)({id:"theme.blog.archive.title",message:"Archive",description:"The page & hero title of the blog archive page"}),t=(0,a.I)({id:"theme.blog.archive.description",message:"Archive",description:"The page & hero description of the blog archive page"}),h=function(e){const s=e.reduce(((e,s)=>{const r=s.metadata.date.split("-")[0],t=e.get(r)??[];return e.set(r,[s,...t])}),new Map);return Array.from(s,(e=>{let[s,r]=e;return{year:s,posts:r}}))}(s.blogPosts);return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i.d,{title:r,description:t}),(0,c.jsxs)(l.Z,{children:[(0,c.jsx)("header",{className:"hero hero--primary",children:(0,c.jsxs)("div",{className:"container",children:[(0,c.jsx)(n.Z,{as:"h1",className:"hero__title",children:r}),(0,c.jsx)("p",{className:"hero__subtitle",children:t})]})}),(0,c.jsx)("main",{children:h.length>0&&(0,c.jsx)(d,{years:h})})]})]})}}}]);