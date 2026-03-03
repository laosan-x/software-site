---
layout: home

hero:
  name: 硬核笔迹
  text: 免费无广告实用软件
  tagline: 精选优质软件，提供安全可靠的下载服务
  image:
    src: /logo.png
    alt: 硬核笔迹
  actions:
    - theme: brand
      text: 浏览软件
      link: /category/all
    - theme: alt
      text: 关于本站
      link: /about

features:
  - icon: 🪟
    title: Windows 软件
    details: 精选 Windows 平台实用工具，提升工作效率
  - icon: 🍎
    title: Mac 软件
    details: macOS 专属应用，释放你的生产力
  - icon: 🤖
    title: Android 应用
    details: 手机必备神器，让移动生活更便捷
  - icon: 📺
    title: TV盒子应用
    details: 大屏娱乐体验，家庭影音中心
---

<script setup>
import { ref } from 'vue'
import SoftwareCard from './.vitepress/theme/components/SoftwareCard.vue'

const featuredSoftware = ref([
  {
    title: 'TVBox Takagen99版',
    version: 'v2025.01.20',
    description: '一款免费无广告的电视盒子播放器，支持多源、高清播放，功能强大且稳定。',
    category: '媒体播放',
    categoryType: 'media',
    platform: 'TV',
    tag: '热门',
    size: '35.2 MB',
    downloads: '12580',
    rating: '4.9',
    downloadUrl: '/software/tvbox',
    detailUrl: '/software/tvbox',
    icon: '📺'
  },
  {
    title: 'PotPlayer',
    version: 'v1.7.22077',
    description: '功能强大的多媒体播放器，支持各种视频格式，内置解码器。',
    category: '媒体播放',
    categoryType: 'media',
    platform: 'Windows',
    tag: '推荐',
    size: '38.5 MB',
    downloads: '89200',
    rating: '4.8',
    downloadUrl: '#',
    detailUrl: '#',
    icon: '🎬'
  },
  {
    title: '7-Zip',
    version: 'v24.09',
    description: '开源免费的压缩软件，支持多种压缩格式，压缩率高。',
    category: '系统工具',
    categoryType: 'system',
    platform: 'Windows',
    tag: '必备',
    size: '1.5 MB',
    downloads: '256000',
    rating: '4.9',
    downloadUrl: '#',
    detailUrl: '#',
    icon: '📦'
  },
  {
    title: 'VLC Media Player',
    version: 'v3.0.20',
    description: '开源跨平台多媒体播放器，支持几乎所有视频格式。',
    category: '媒体播放',
    categoryType: 'media',
    platform: 'Windows',
    tag: '',
    size: '42.8 MB',
    downloads: '67800',
    rating: '4.7',
    downloadUrl: '#',
    detailUrl: '#',
    icon: '📹'
  },
  {
    title: 'Everything',
    version: 'v1.4.1.1024',
    description: '极速文件搜索工具，秒速搜索全盘文件。',
    category: '系统工具',
    categoryType: 'system',
    platform: 'Windows',
    tag: '热门',
    size: '1.8 MB',
    downloads: '145000',
    rating: '4.9',
    downloadUrl: '#',
    detailUrl: '#',
    icon: '🔍'
  },
  {
    title: 'Bandizip',
    version: 'v7.33',
    description: '专业的压缩软件，支持图片预览和快速拖放。',
    category: '系统工具',
    categoryType: 'system',
    platform: 'Windows',
    tag: '',
    size: '8.2 MB',
    downloads: '45200',
    rating: '4.6',
    downloadUrl: '#',
    detailUrl: '#',
    icon: '🤐'
  }
])

const latestSoftware = ref([
  {
    title: 'OBS Studio',
    version: 'v30.0.2',
    description: '免费开源的视频录制和直播软件，功能强大。',
    category: '媒体工具',
    categoryType: 'media',
    platform: 'Windows',
    tag: 'NEW',
    size: '128 MB',
    downloads: '8900',
    rating: '4.8',
    downloadUrl: '#',
    detailUrl: '#',
    icon: '🎥'
  },
  {
    title: 'Notepad++',
    version: 'v8.6.4',
    description: '强大的文本编辑器，支持多种编程语言高亮。',
    category: '开发工具',
    categoryType: 'system',
    platform: 'Windows',
    tag: '',
    size: '5.6 MB',
    downloads: '23400',
    rating: '4.7',
    downloadUrl: '#',
    detailUrl: '#',
    icon: '📝'
  },
  {
    title: 'Chrome',
    version: 'v121.0',
    description: '谷歌浏览器，快速、安全、稳定的网页浏览体验。',
    category: '网络工具',
    categoryType: 'download',
    platform: 'Windows',
    tag: '',
    size: '95.2 MB',
    downloads: '456000',
    rating: '4.5',
    downloadUrl: '#',
    detailUrl: '#',
    icon: '🌐'
  }
])
</script>

<style>
.VPHome {
  padding-bottom: 0 !important;
}

.software-showcase {
  padding: 60px 0;
}

.showcase-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
}

.showcase-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--vp-c-text-1);
}

.view-all {
  color: var(--vp-c-brand-1);
  text-decoration: none;
  font-size: 0.875rem;
  font-weight: 500;
}

.view-all:hover {
  text-decoration: underline;
}

.software-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 20px;
}

@media (max-width: 768px) {
  .software-grid {
    grid-template-columns: 1fr;
  }
}
</style>

<!-- 特色软件展示 -->
<div class="software-showcase">
  <div class="showcase-header">
    <h2 class="showcase-title">🔥 热门软件</h2>
    <a href="/category/all" class="view-all">查看全部 →</a>
  </div>
  <div class="software-grid">
    <SoftwareCard 
      v-for="item in featuredSoftware" 
      :key="item.title"
      v-bind="item"
    />
  </div>
</div>

<!-- 最新软件 -->
<div class="software-showcase">
  <div class="showcase-header">
    <h2 class="showcase-title">🆕 最新更新</h2>
    <a href="/category/all" class="view-all">查看全部 →</a>
  </div>
  <div class="software-grid">
    <SoftwareCard 
      v-for="item in latestSoftware" 
      :key="item.title"
      v-bind="item"
    />
  </div>
</div>
