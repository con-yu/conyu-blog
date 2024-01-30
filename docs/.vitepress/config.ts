import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: '从羽的个人博客',
  head: [['link', { rel: 'icon', href: 'ico/write.ico' }]],
  description: 'A VitePress Site',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页 🏠', link: '/' },
      { text: '编程笔记 🤖', link: '/test' },
      { text: '逆旅随想 ✈', link: '/markdown-examples' },
      { text: '文海拾贝 🌈', link: 'view/frontend/Module/index' },
      { text: '储物间 📦', link: 'view/frontend/regexp/Patterns&flags' },
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
