---
title: TVBox Takagen99版 2025最新版
description: 一款免费无广告的电视盒子播放器，支持多源、高清播放
aside: false
---

<script setup>
import { ref } from 'vue'

const softwareInfo = ref({
  name: 'TVBox Takagen99版',
  version: 'v2025.01.20',
  size: '35.2 MB',
  platform: 'Android TV',
  category: '媒体播放',
  downloads: '12,580',
  rating: '4.9',
  updateDate: '2025-01-20',
  language: '简体中文',
  license: '免费开源'
})

const downloadLinks = ref([
  { name: '蓝奏云', url: '#', speed: '高速' },
  { name: '百度网盘', url: '#', speed: '一般' },
  { name: '夸克网盘', url: '#', speed: '高速' }
])

const screenshots = ref([
  'https://via.placeholder.com/800x450/3b82f6/ffffff?text=截图1',
  'https://via.placeholder.com/800x450/8b5cf6/ffffff?text=截图2',
  'https://via.placeholder.com/800x450/10b981/ffffff?text=截图3'
])
</script>

<div class="software-detail">
  <!-- 软件头部信息 -->
  <div class="detail-header">
    <div class="icon">📺</div>
    <div class="info">
      <h1>{{ softwareInfo.name }}</h1>
      <div class="meta">
        <span class="version">{{ softwareInfo.version }}</span>
        <span class="rating">⭐ {{ softwareInfo.rating }}</span>
        <span class="downloads">⬇️ {{ softwareInfo.downloads }} 次下载</span>
      </div>
      <div class="tags">
        <span class="tag">{{ softwareInfo.category }}</span>
        <span class="tag">{{ softwareInfo.platform }}</span>
        <span class="tag hot">热门</span>
      </div>
    </div>
  </div>

  <!-- 软件介绍 -->
  <div class="detail-section">
    <h2>📋 软件介绍</h2>
    <p>TVBox 是一款开源的电视盒子播放器，支持多种视频源接入，界面简洁，操作流畅。Takagen99 版是目前功能最完善的版本之一，支持以下特性：</p>
    <ul>
      <li>✅ 完全免费，无任何广告</li>
      <li>✅ 支持多源切换，播放更稳定</li>
      <li>✅ 4K/8K 超清播放支持</li>
      <li>✅ 支持自定义数据源</li>
      <li>✅ 直播、点播一体化</li>
      <li>✅ 支持字幕加载</li>
    </ul>
  </div>

  <!-- 软件截图 -->
  <div class="detail-section">
    <h2>📸 软件截图</h2>
    <div class="screenshots">
      <img v-for="(img, index) in screenshots" :key="index" :src="img" :alt="`截图${index + 1}`" />
    </div>
  </div>

  <!-- 版本信息 -->
  <div class="detail-section">
    <h2>📌 版本信息</h2>
    <div class="info-grid">
      <div class="info-item">
        <span class="label">版本号</span>
        <span class="value">{{ softwareInfo.version }}</span>
      </div>
      <div class="info-item">
        <span class="label">文件大小</span>
        <span class="value">{{ softwareInfo.size }}</span>
      </div>
      <div class="info-item">
        <span class="label">支持平台</span>
        <span class="value">{{ softwareInfo.platform }}</span>
      </div>
      <div class="info-item">
        <span class="label">更新日期</span>
        <span class="value">{{ softwareInfo.updateDate }}</span>
      </div>
      <div class="info-item">
        <span class="label">语言</span>
        <span class="value">{{ softwareInfo.language }}</span>
      </div>
      <div class="info-item">
        <span class="label">授权方式</span>
        <span class="value">{{ softwareInfo.license }}</span>
      </div>
    </div>
  </div>

  <!-- 更新日志 -->
  <div class="detail-section">
    <h2>📝 更新日志</h2>
    <div class="changelog">
      <div class="changelog-item">
        <div class="version">v2025.01.20</div>
        <div class="date">2025-01-20</div>
        <ul>
          <li>修复部分设备闪退问题</li>
          <li>优化播放器内核，提升播放稳定性</li>
          <li>新增数据源管理功能</li>
        </ul>
      </div>
      <div class="changelog-item">
        <div class="version">v2024.12.15</div>
        <div class="date">2024-12-15</div>
        <ul>
          <li>增加对 Android 14 的支持</li>
          <li>优化界面显示效果</li>
        </ul>
      </div>
    </div>
  </div>

  <!-- 下载区域 -->
  <div class="detail-section download-section">
    <h2>⬇️ 下载地址</h2>
    <div class="download-links">
      <a v-for="link in downloadLinks" :key="link.name" :href="link.url" class="download-btn">
        <span class="name">{{ link.name }}</span>
        <span class="speed" :class="link.speed">{{ link.speed }}</span>
      </a>
    </div>
    <div class="tips">
      <p>💡 提示：如链接失效请留言反馈，我们会尽快更新</p>
    </div>
  </div>

  <!-- 免责声明 -->
  <div class="detail-section disclaimer">
    <h2>⚠️ 免责声明</h2>
    <p>本站提供的所有软件均来源于网络，仅供学习交流使用。请在下载后24小时内删除，如需长期使用请购买正版。如有侵权请联系我们删除。</p>
  </div>
</div>

<style scoped>
.software-detail {
  max-width: 900px;
  margin: 0 auto;
}

.detail-header {
  display: flex;
  gap: 24px;
  padding: 32px;
  background: var(--vp-c-bg-alt);
  border-radius: 16px;
  margin-bottom: 32px;
}

.icon {
  width: 100px;
  height: 100px;
  background: linear-gradient(135deg, #3b82f6, #8b5cf6);
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
  flex-shrink: 0;
}

.info h1 {
  font-size: 1.75rem;
  font-weight: 700;
  color: var(--vp-c-text-1);
  margin: 0 0 12px 0;
}

.meta {
  display: flex;
  gap: 16px;
  margin-bottom: 16px;
  flex-wrap: wrap;
}

.meta span {
  font-size: 0.875rem;
  color: var(--vp-c-text-2);
}

.meta .version {
  color: var(--vp-c-brand-2);
  font-weight: 600;
}

.tags {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}

.tag {
  padding: 4px 12px;
  background: var(--vp-c-bg-elv);
  border-radius: 20px;
  font-size: 0.75rem;
  color: var(--vp-c-text-3);
}

.tag.hot {
  background: rgba(239, 68, 68, 0.2);
  color: #ef4444;
}

.detail-section {
  margin-bottom: 40px;
}

.detail-section h2 {
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--vp-c-text-1);
  margin-bottom: 20px;
  padding-bottom: 12px;
  border-bottom: 1px solid var(--vp-c-divider);
}

.detail-section p {
  color: var(--vp-c-text-2);
  line-height: 1.8;
  margin-bottom: 16px;
}

.detail-section ul {
  color: var(--vp-c-text-2);
  line-height: 2;
}

.screenshots {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 16px;
}

.screenshots img {
  width: 100%;
  border-radius: 8px;
  border: 1px solid var(--vp-c-divider);
}

.info-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 16px;
}

.info-item {
  display: flex;
  justify-content: space-between;
  padding: 12px 16px;
  background: var(--vp-c-bg-alt);
  border-radius: 8px;
}

.info-item .label {
  color: var(--vp-c-text-3);
  font-size: 0.875rem;
}

.info-item .value {
  color: var(--vp-c-text-1);
  font-weight: 500;
}

.changelog-item {
  padding: 20px;
  background: var(--vp-c-bg-alt);
  border-radius: 12px;
  margin-bottom: 16px;
}

.changelog-item .version {
  font-weight: 700;
  color: var(--vp-c-brand-2);
  margin-bottom: 4px;
}

.changelog-item .date {
  font-size: 0.75rem;
  color: var(--vp-c-text-3);
  margin-bottom: 12px;
}

.changelog-item ul {
  margin: 0;
  padding-left: 20px;
}

.download-section {
  background: linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(139, 92, 246, 0.1));
  border: 1px solid var(--vp-c-brand-1);
  border-radius: 16px;
  padding: 32px;
}

.download-links {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  margin-bottom: 20px;
}

.download-btn {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 24px;
  background: var(--vp-c-brand-1);
  color: white;
  text-decoration: none;
  border-radius: 8px;
  font-weight: 600;
  transition: all 0.3s ease;
}

.download-btn:hover {
  background: var(--vp-c-brand-3);
  transform: translateY(-2px);
}

.download-btn .speed {
  font-size: 0.75rem;
  padding: 2px 8px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 4px;
}

.download-btn .speed.高速 {
  background: rgba(34, 197, 94, 0.3);
}

.tips {
  padding: 16px;
  background: var(--vp-c-bg-alt);
  border-radius: 8px;
}

.tips p {
  margin: 0;
  color: var(--vp-c-text-3);
  font-size: 0.875rem;
}

.disclaimer {
  padding: 24px;
  background: rgba(239, 68, 68, 0.05);
  border: 1px solid rgba(239, 68, 68, 0.2);
  border-radius: 12px;
}

.disclaimer h2 {
  color: #ef4444;
  border-bottom-color: rgba(239, 68, 68, 0.2);
}

@media (max-width: 768px) {
  .detail-header {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
  
  .icon {
    width: 80px;
    height: 80px;
    font-size: 2.5rem;
  }
  
  .meta {
    justify-content: center;
  }
  
  .tags {
    justify-content: center;
  }
}
</style>
