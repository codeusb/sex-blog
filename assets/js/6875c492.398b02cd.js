"use strict";(self.webpackChunksex_blog=self.webpackChunksex_blog||[]).push([[8610],{922:(e,t,n)=>{n.d(t,{Z:()=>l});n(9685);var s=n(2892),a=n(907),i=n(3342);function l(e){const{metadata:t}=e,{previousPage:n,nextPage:l}=t;return(0,i.jsxs)("nav",{className:"pagination-nav","aria-label":(0,s.I)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"}),children:[n&&(0,i.jsx)(a.Z,{permalink:n,title:(0,i.jsx)(s.Z,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)",children:"Newer Entries"})}),l&&(0,i.jsx)(a.Z,{permalink:l,title:(0,i.jsx)(s.Z,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)",children:"Older Entries"}),isNext:!0})]})}},101:(e,t,n)=>{n.d(t,{Z:()=>l});n(9685);var s=n(1415),a=n(4770),i=n(3342);function l(e){let{items:t,component:n=a.Z}=e;return(0,i.jsx)(i.Fragment,{children:t.map((e=>{let{content:t}=e;return(0,i.jsx)(s.n,{content:t,children:(0,i.jsx)(n,{children:(0,i.jsx)(t,{})})},t.metadata.permalink)}))})}},6644:(e,t,n)=>{n.r(t),n.d(t,{default:()=>f});n(9685);var s=n(8290),a=n(2892),i=n(9923),l=n(5274),r=n(6440),o=n(4669),c=n(1063),g=n(922),d=n(5488),u=n(101),h=n(4363),p=n(5873),m=n(3342);function x(e){const t=function(){const{selectMessage:e}=(0,i.c)();return t=>e(t,(0,a.I)({id:"theme.blog.post.plurals",description:'Pluralized label for "{count} posts". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One post|{count} posts"},{count:t}))}();return(0,a.I)({id:"theme.blog.tagTitle",description:"The title of the page for a blog tag",message:'{nPosts} tagged with "{tagName}"'},{nPosts:t(e.count),tagName:e.label})}function j(e){let{tag:t}=e;const n=x(t);return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(l.d,{title:n}),(0,m.jsx)(d.Z,{tag:"blog_tags_posts"})]})}function b(e){let{tag:t,items:n,sidebar:s,listMetadata:i}=e;const l=x(t);return(0,m.jsxs)(c.Z,{sidebar:s,children:[t.unlisted&&(0,m.jsx)(h.Z,{}),(0,m.jsxs)("header",{className:"margin-bottom--xl",children:[(0,m.jsx)(p.Z,{as:"h1",children:l}),(0,m.jsx)(o.Z,{href:t.allTagsPath,children:(0,m.jsx)(a.Z,{id:"theme.tags.tagsPageLink",description:"The label of the link targeting the tag list page",children:"View All Tags"})})]}),(0,m.jsx)(u.Z,{items:n}),(0,m.jsx)(g.Z,{metadata:i})]})}function f(e){return(0,m.jsxs)(l.FG,{className:(0,s.Z)(r.k.wrapper.blogPages,r.k.page.blogTagPostListPage),children:[(0,m.jsx)(j,{...e}),(0,m.jsx)(b,{...e})]})}},4363:(e,t,n)=>{n.d(t,{Z:()=>h});n(9685);var s=n(8290),a=n(2892),i=n(9555),l=n(3342);function r(){return(0,l.jsx)(a.Z,{id:"theme.unlistedContent.title",description:"The unlisted content banner title",children:"Unlisted page"})}function o(){return(0,l.jsx)(a.Z,{id:"theme.unlistedContent.message",description:"The unlisted content banner message",children:"This page is unlisted. Search engines will not index it, and only users having a direct link can access it."})}function c(){return(0,l.jsx)(i.Z,{children:(0,l.jsx)("meta",{name:"robots",content:"noindex, nofollow"})})}var g=n(6440),d=n(1901);function u(e){let{className:t}=e;return(0,l.jsx)(d.Z,{type:"caution",title:(0,l.jsx)(r,{}),className:(0,s.Z)(t,g.k.common.unlistedBanner),children:(0,l.jsx)(o,{})})}function h(e){return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(c,{}),(0,l.jsx)(u,{...e})]})}}}]);