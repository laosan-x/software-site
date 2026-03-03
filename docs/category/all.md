---
title: 全部软件
aside: false
---

<script setup>
import { ref } from 'vue'
import SoftwareGrid from '../.vitepress/theme/components/SoftwareGrid.vue'

const allSoftware = ref([
  {
    title: 'TVBox Takagen99版',
    version: 'v2025.01.20',
    description: '一款免费无广告的电视盒子播放器，支持多源、高清播放',
    category: '媒体播放',
    categoryType: 'media',
    platform: 'TV',
    tag: '热门',
    size: '35.2 MB',
    downloads: '12580',
    rating: '4.9',
    downloadUrl: '/software/tvbox',
    detailUrl: '/software/tvbox',
    icon: '📺',
    date: '2025-01-20'
  },
  {
    title: 'PotPlayer',
    version: 'v1.7.22077',
    description: '功能强大的多媒体播放器，支持各种视频格式',
    category: '媒体播放',
    categoryType: 'media',
    platform: 'Windows',
    tag: '推荐',
    size: '38.5 MB',
    downloads: '89200',
    rating: '4.8',
    downloadUrl: '#',
    detailUrl: '#',
    icon: '🎬',
    date: '2025-01-18'
  },
  {
    title: '7-Zip',
    version: 'v24.09',
    description: '开源免费的压缩软件，支持多种压缩格式',
    category: '系统工具',
    categoryType: 'system',
    platform: 'Windows',
    tag: '必备',
    size: '1.5 MB',
    downloads: '256000',
    rating: '4.9',
    downloadUrl: '#',
    detailUrl: '#',
    icon: '📦',
    date: '2025-01-15'
  },
  {
    title: 'VLC Media Player',
    version: 'v3.0.20',
    description: '开源跨平台多媒体播放器',
    category: '媒体播放',
    categoryType: 'media',
    platform: 'Windows',
    tag: '',
    size: '42.8 MB',
    downloads: '67800',
    rating: '4.7',
    downloadUrl: '#',
    detailUrl: '#',
    icon: '📹',
    date: '2025-01-10'
  },
  {
    title: 'Everything',
    version: 'v1.4.1.1024',
    description: '极速文件搜索工具',
    category: '系统工具',
    categoryType: 'system',
    platform: 'Windows',
    tag: '热门',
    size: '1.8 MB',
    downloads: '145000',
    rating: '4.9',
    downloadUrl: '#',
    detailUrl: '#',
    icon: '🔍',
    date: '2025-01-08'
  },
  {
    title: 'OBS Studio',
    version: 'v30.0.2',
    description: '免费开源的视频录制和直播软件',
    category: '媒体工具',
    categoryType: 'media',
    platform: 'Windows',
    tag: 'NEW',
    size: '128 MB',
    downloads: '8900',
    rating: '4.8',
    downloadUrl: '#',
    detailUrl: '#',
    icon: '🎥',
    date: '2025-01-20'
  }
])
</script>

# 📦 全部软件

<SoftwareGrid :software="allSoftware" />
