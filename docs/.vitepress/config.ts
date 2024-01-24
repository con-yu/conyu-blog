import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: '从羽的个人博客',
  head: [['link', { rel: 'icon', href: 'icon/write.ico' }]],
  description: 'A VitePress Site',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页 🏠', link: '/' },
      { text: '测试特性 🤖', link: '/test' },
      { text: '示例 ✈', link: '/markdown-examples' },
      { text: '前端笔记 🌈', link: 'view/frontend/Module/index' },
      { text: '杂项 📦', link: 'view/frontend/regexp/Patterns&flags' },
    ],
    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' },
        ],
      },
    ],
    /** 广告 */
    // carbonAds: {
    //   code: 'your-carbon-code as',
    //   placement: 'your-carbon-placement',
    // },

    // socialLinks: [{ icon: 'github', link: 'https://github.com/vuejs/vitepress' }],
  },
  lastUpdated: true,
  markdown: {
    lineNumbers: true,
  },
})
