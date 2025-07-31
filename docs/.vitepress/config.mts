import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "灵境AI动漫创作平台",
  description: "专业AI动画创作一站式平台",
  ignoreDeadLinks: true,
  head: [
    ['link', { rel: 'icon', href: '/logo.svg' }]
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/logo.svg',
    nav: [
      { text: '首页', link: '/' },
      { text: '快速开始', link: '/getting-started' },
      { text: '用户指南', link: '/guide/data-overview' },
      { text: '更新日志', link: '/changelog/' },
      { text: '费用', link: '/credits/' },
      { text: '法律条款', link: '/legal/' }
    ],

    sidebar: {
      '/guide/': [
        {
          text: '项目后台',
          items: [
            { text: '数据概览', link: '/guide/data-overview' },
            { text: '项目管理', link: '/guide/project-management' },
            { text: '用户管理', link: '/guide/user-management' },
            { text: '团队素材', link: '/guide/team-assets' }
          ]
        },
        {
          text: '创作工作台',
          items: [
            { text: '关键帧处理', link: '/guide/keyframe' },
            { text: '图像生成', link: '/guide/image-generation' },
            { text: '视频生成', link: '/guide/video-generation' },
            { text: '对口型', link: '/guide/portrait-matching' }
          ]
        }
      ],
      '/legal/': [
        {
          text: '法律条款',
          items: [
            { text: '用户协议', link: '/legal/user-agreement' },
            { text: '隐私政策', link: '/legal/privacy-policy' },
            { text: '付费服务协议', link: '/legal/payment-policy' }
          ]
        }
      ],
      '/credits/': [
        {
          text: '积分文档',
          items: [
            { text: '积分参考', link: '/credits/' }
          ]
        }
      ],
      '/changelog/': [
        {
          text: '更新日志',
          items: [
            { text: '版本历史', link: '/changelog/' }
          ]
        }
      ],

    },



    footer: {
      message: '灵境AI动漫创作平台动漫创作平台',
      copyright: 'Copyright © 2025 灵境万维（杭州）智能科技有限公司'
    }
  }
})
