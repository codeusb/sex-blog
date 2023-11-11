// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from "prism-react-renderer";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Sexxion",
  tagline: "Talk is cheap, show me the code",
  favicon: "img/spike.ico",
  plugins: ["@docusaurus/theme-live-codeblock"],
  // Set the production url of your site here
  url: "https://codeusb.github.io/",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/sex-blog/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "codeusb", // Usually your GitHub org/user name.
  projectName: "sex-blog", // Usually your repo name.
  deploymentBranch: "gh-pages",

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  i18n: {
    defaultLocale: "zh-Hans",
    locales: ["zh-Hans"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: "./sidebars.js",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      docs: {
        sidebar: {
          hideable: true,
        },
      },
      navbar: {
        title: "Sexxion_XX",
        items: [
          {
            type: "search",
            position: "right",
          },
          {
            type: "doc",
            docId: "introduction",
            position: "left",
            label: "文档",
          },
          { to: "/blog", label: "博客", position: "left" },
          // {
          //   type: "localeDropdown",
          //   position: "right",
          // },
          {
            href: "https://github.com/codeusb",
            // label: "Github",
            className: "github",
            position: "right",
          },
          {
            href: "https://juejin.cn/user/2124701246954029",
            className: "xtjj",
            position: "right",
          },
          {
            href: "https://leetcode.cn/u/sexxion__xx/",
            className: "leetcode",
            position: "right",
          },
          {
            type: "dropdown",
            label: "友链",
            position: "right",
            items: [
              {
                label: "Github",
                href: "https://github.com/codeusb",
              },
            ],
          },
        ],
      },
      announcementBar: {
        id: "support_us",
        content:
          '⭐如果您喜欢这个网站,请在 GitHub 上给它一颗星！ <a target="_blank" rel="noopener noreferrer" href="https://github.com/codeusb/sex-blog" >GitHub</a>',
        backgroundColor: "#fafbfc",
        textColor: "#091E42",
        isCloseable: true,
      },
      // footer: {
      //   // style: "dark",
      //   links: [
      //     {
      //       title: "Docs",
      //       items: [
      //         {
      //           label: "Tutorial",
      //           to: "/docs/intro",
      //         },
      //       ],
      //     },
      //     {
      //       title: "Community",
      //       items: [
      //         {
      //           label: "Stack Overflow",
      //           href: "https://stackoverflow.com/questions/tagged/docusaurus",
      //         },
      //         {
      //           label: "Discord",
      //           href: "https://discordapp.com/invite/docusaurus",
      //         },
      //         {
      //           label: "Twitter",
      //           href: "https://twitter.com/docusaurus",
      //         },
      //       ],
      //     },
      //     {
      //       title: "More",
      //       items: [
      //         {
      //           label: "Blog",
      //           to: "/blog",
      //         },
      //         {
      //           label: "GitHub",
      //           href: "https://github.com/facebook/docusaurus",
      //         },
      //       ],
      //     },
      //   ],
      //   copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      // },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
      liveCodeBlock: {
        /**
         * The position of the live playground, above or under the editor
         * Possible values: "top" | "bottom"
         */
        playgroundPosition: "bottom",
      },
    }),
};

export default config;
