import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "绘梦AI",
  description: "专业AI动画创作一站式平台",
  ignoreDeadLinks: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/logo.svg',
    nav: [
      { text: '首页', link: '/' },
      { text: '快速开始', link: '/getting-started' },
      { text: '功能介绍', link: '/features/' },
      { text: '用户指南', link: '/guide/' },
      { text: '费用', link: '/credits/' }
    ],

    sidebar: {
      '/guide/': [
        {
          text: '用户指南',
          items: [
            { text: '指南概述', link: '/guide/' },
            { text: '系统要求', link: '/getting-started#系统要求' },
            { text: '系统概览', link: '/guide/overview' },
            { text: '配置说明', link: '/guide/config' },
            { text: '关键帧处理', link: '/guide/keyframe' },
            { text: '任务管理', link: '/guide/tasks' },
            { text: '常见问题', link: '/guide/faq' }
          ]
        }
      ],
      '/features/': [
        {
          text: '项目后台',
          items: [
            { text: '功能概览', link: '/features/' },
            { text: '项目管理', link: '/features/project-management' },
            { text: '素材拆解', link: '/features/material-analysis' },
            { text: '基础设定', link: '/features/basic-settings' },
            { text: '分镜编辑', link: '/features/storyboard-editing' }
          ]
        },
        {
          text: '创作工作台',
          items: [
            { text: '分镜编辑', link: '/features/storyboard-workspace' },
            { text: '批量转绘', link: '/features/batch-rendering' },
            { text: '自动修复', link: '/features/auto-repair' },
            { text: '关键帧选择', link: '/features/keyframe-selection' },
            { text: '视频生成', link: '/features/video-generation' },
            { text: '视频对口型', link: '/features/lip-sync' }
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
      ]
    },



    footer: {
      message: '专业的 AI动漫创作平台',
      copyright: 'Copyright © 2025 绘梦AI团队'
    }
  }
})
