/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: '云乡-文档',
  tagline: '云之幻的文档库',
  url: 'https://docs.richasy.cn',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'Richasy', // Usually your GitHub org/user name.
  projectName: 'Richasy-Doc', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: '云乡-文档',
      logo: {
        alt: '云乡',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'doc',
          docId: 'wfa/home',
          position: 'left',
          label: 'Warframe Alerting Prime',
        },
        {
          type: 'doc',
          docId: 'rss-tracker/use',
          position: 'left',
          label: 'RSS Tracker',
        },
        {
          type: 'doc',
          docId: 'clean-reader/use',
          position: 'left',
          label: 'Clean Reader',
        },
        {
          type: 'doc',
          docId: 'markdown-lite/use',
          position: 'left',
          label: 'Markdown Lite',
        },
        {
          type: 'doc',
          docId: 'picture-share/about',
          position: 'left',
          label: 'Picture Share',
        },
        {
          href: 'https://github.com/Richasy',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'light',
      links: [
        {
          title: '在线服务',
          items: [
            {
              label: 'WFA Web',
              to: 'https://wfa.richasy.cn',
            },
            {
              label: 'WFA Riven Market',
              to: 'https://riven.richasy.cn',
            },
          ],
        },
        {
          title: '公开文件',
          items: [
            {
              label: 'Privacy',
              to: '/privacy'
            }
          ]
        },
        {
          title: '联系我',
          items: [
            {
              label: 'Blog',
              to: 'https://blog.richasy.cn',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/Richasy',
            },
            {
              label: 'BiliBili',
              to: 'https://space.bilibili.com/5992670',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Richasy, Inc. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/',
          // Please change this to your repo.
          editUrl:
            'https://github.com/Richasy/Richasy-Doc',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ]
};