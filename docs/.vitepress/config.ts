import { defineConfig } from 'vitepress'

export default defineConfig({
  title: '从羽的个人博客',
  head: [['link', { rel: 'icon', href: 'ico/write.ico' }]],
  description: `conyu's personal blog`,
  themeConfig: {
    // logo: '', // logo待定
    nav: [
      { text: '首页 🏡', link: '/' },
      {
        text: '编程笔记 💻',
        activeMatch: '/views/programing/',
        items: [
          {
            text: '综述 🔍',
            link: '/views/programing/common/index',
          },
          {
            text: '前端 🌈',
            link: '/views/programing/frontend/foreword',
            activeMatch: '^/views/programing/frontend/',
          },
          {
            text: '服务器 🕸',
            link: '/views/programing/server/index',
          },
          {
            text: 'python 🐍',
            link: '/views/programing/python/index',
          },
        ],
      },
      { text: '逆旅随想 💭', link: '/views/caprice/index', activeMatch: '/views/caprice/' },
      { text: '文海拾贝 🐚', link: 'views/bookmark/index', activeMatch: '/views/bookmark/ ' },
      { text: '储物间 📦', link: 'views/storageRoom/index', activeMatch: '/views/storageRoom/' },
    ],
    sidebar: {
      'views/programing/frontend/': [
        {
          text: '简介',
          items: [
            { text: '前言', link: '/views/programing/frontend/foreword' },
            { text: '参考文档', link: '/views/programing/frontend/reference' },
          ],
        },
        {
          text: '基础',
          collapsed: false,
          items: [
            { text: 'HTML', link: '/views/programing/frontend/html' },
            { text: 'Module', link: '/views/programing/frontend/module' },
            { text: '整合版', link: '/views/programing/frontend/all' },
          ],
        },
      ],
    },
    // (广告······暂时没有🙃)
    // carbonAds: {
    //   code: 'your-carbon-code as',
    //   placement: 'your-carbon-placement',
    // },
    socialLinks: [
      {
        icon: {
          svg: `<svg t="1707630504390" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1556" width="200" height="200"><path d="M512 512m-512 0a512 512 0 1 0 1024 0 512 512 0 1 0-1024 0Z" fill="#07C160" opacity=".8" p-id="1557"></path><path d="M707.0208 327.2704a262.5024 262.5024 0 0 0-257.5616 43.1104 284.6464 284.6464 0 0 0-98.7392 178.3296 229.2736 229.2736 0 0 1-51.6096-112.4352 189.696 189.696 0 0 1 39.8848-148.48 217.6 217.6 0 0 1 170.4192-82.9952 224.2816 224.2816 0 0 1 197.6064 122.4704z m70.656 113.0496a233.856 233.856 0 0 1-47.232 315.5968 225.8176 225.8176 0 0 1-80.0256 38.656 252.4928 252.4928 0 0 0 52.4288-91.6224 257.8688 257.8688 0 0 0-154.5472-322.0736c-2.7648-0.9728-5.5552-1.8432-8.3456-2.7136a200.192 200.192 0 0 1 237.7216 62.1568z m-268.5184 238.6176a232.96 232.96 0 0 0 150.4512-48.1536 217.1392 217.1392 0 0 1-11.7504 55.7568c-41.7024 111.7184-162.432 160.1536-288.9472 117.0176a242.8672 242.8672 0 0 1-146.6368-283.264 269.2096 269.2096 0 0 1 32.5376-76.3648 279.68 279.68 0 0 0 115.7376 186.88 19.7888 19.7888 0 0 1 8.3456 15.36 23.8848 23.8848 0 0 1-0.7424 6.272l-10.5728 49.8432a29.9008 29.9008 0 0 0-1.2032 7.2192 9.5232 9.5232 0 0 0 9.728 9.344 10.24 10.24 0 0 0 5.3248-2.048l59.776-39.7824a28.4928 28.4928 0 0 1 14.6688-5.12 27.0336 27.0336 0 0 1 6.8608 0.64 249.0368 249.0368 0 0 0 56.32 6.528z" fill="#FFFFFF" p-id="1558"></path></svg>`,
        },
        link: '/weixin',
        ariaLabel: '从羽的公众号'
      },
    ],
  },
  lastUpdated: true,
  markdown: {
    lineNumbers: true,
    theme: {
      light: 'github-light',
      dark: 'one-dark-pro',
    },
  },
})
