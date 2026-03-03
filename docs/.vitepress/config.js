export default {
  // 网站标题和描述
  title: '硬核笔迹',
  description: '免费无广告实用软件下载站',
  
  // GitHub Pages 配置
  // 如果使用自定义域名，注释掉下面这行
  // base: '/software-site/',
  
  // 启用干净URL
  cleanUrls: true,
  
  // 构建输出目录
  outDir: './.vitepress/dist',
  
  // 主题配置
  themeConfig: {
    logo: '/logo.png',
    
    nav: [
      { text: '首页', link: '/' },
      { text: 'Windows', link: '/category/windows' },
      { text: 'Mac', link: '/category/mac' },
      { text: 'Android', link: '/category/android' },
      { text: 'TV盒子', link: '/category/tv' }
    ],
    
    sidebar: false,
    
    footer: {
      message: '所有软件仅供学习交流，请在下载后24小时内删除',
      copyright: 'Copyright © 2025 硬核笔迹'
    },
    
    search: {
      provider: 'local'
    },
    
    // 社交链接
    socialLinks: [
      { icon: 'github', link: 'https://github.com/laosan-x' }
    ]
  },
  
  // Head 配置
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'theme-color', content: '#202020' }],
    ['meta', { name: 'keywords', content: '软件下载,免费软件,Windows软件,Mac软件,Android应用,TV盒子' }],
    ['meta', { name: 'author', content: '硬核笔迹' }]
  ],
  
  // Markdown 配置
  markdown: {
    lineNumbers: true,
    config: (md) => {
      // 自定义 markdown 配置
    }
  },
  
  // Vite 配置
  vite: {
    // 开发服务器配置
    server: {
      port: 4005,
      host: true
    },
    // 构建配置
    build: {
      chunkSizeWarningLimit: 1000
    }
  }
}
