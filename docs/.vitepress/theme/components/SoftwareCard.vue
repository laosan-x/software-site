<template>
  <div class="software-card" @click="goToDetail">
    <div class="header">
      <div class="icon" :style="{ background: gradient }">
        {{ iconText }}
      </div>
      <div class="info">
        <div class="title">{{ title }}</div>
        <div class="version">{{ version }}</div>
      </div>
    </div>
    
    <div class="description">{{ description }}</div>
    
    <div class="meta">
      <span class="tag">{{ category }}</span>
      <span class="tag">{{ platform }}</span>
      <span v-if="tag" class="tag highlight">{{ tag }}</span>
    </div>
    
    <div class="footer">
      <div class="stats">
        <div class="stat">
          <span>💾</span>
          <span>{{ size }}</span>
        </div>
        <div class="stat">
          <span>⬇️</span>
          <span>{{ downloads }}</span>
        </div>
        <div class="stat">
          <span>⭐</span>
          <span>{{ rating }}</span>
        </div>
      </div>
      <a 
        :href="downloadUrl" 
        class="download-btn"
        @click.stop
        target="_blank"
      >
        下载
      </a>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRouter } from 'vitepress'

const props = defineProps({
  title: String,
  version: String,
  description: String,
  category: String,
  platform: String,
  tag: String,
  size: String,
  downloads: String,
  rating: String,
  downloadUrl: String,
  detailUrl: String,
  icon: String
})

const router = useRouter()

const iconText = computed(() => {
  return props.icon || props.title?.charAt(0).toUpperCase() || '📦'
})

const gradient = computed(() => {
  const colors = [
    ['#0078d4', '#0067c0'],
    ['#005a9e', '#0078d4'],
    ['#106ebe', '#005a9e'],
    ['#0078d4', '#005a9e'],
    ['#0067c0', '#005a9e']
  ]
  const index = props.title?.length % colors.length || 0
  const [start, end] = colors[index]
  return `linear-gradient(135deg, ${start}, ${end})`
})

const goToDetail = () => {
  if (props.detailUrl) {
    router.go(props.detailUrl)
  }
}
</script>

<style scoped>
.software-card {
  background: var(--vp-card-bg);
  border: 1px solid var(--vp-card-border);
  border-radius: 12px;
  padding: 20px;
  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  backdrop-filter: blur(20px);
  box-shadow: var(--win11-shadow);
}

.software-card:hover {
  background: var(--vp-card-bg-hover);
  border-color: rgba(0, 120, 212, 0.3);
  transform: translateY(-2px);
  box-shadow: var(--win11-shadow-lg);
}

.header {
  display: flex;
  align-items: flex-start;
  gap: 16px;
  margin-bottom: 16px;
}

.icon {
  width: 64px;
  height: 64px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  flex-shrink: 0;
  color: white;
  font-weight: 700;
  box-shadow: 0 4px 12px rgba(0, 103, 192, 0.3);
}

.info {
  flex: 1;
}

.title {
  font-size: 1.125rem;
  font-weight: 700;
  color: var(--vp-c-text-1);
  margin-bottom: 4px;
  line-height: 1.3;
}

.version {
  font-size: 0.75rem;
  color: var(--vp-c-brand-2);
  font-weight: 600;
}

.description {
  font-size: 0.875rem;
  color: var(--vp-c-text-2);
  line-height: 1.5;
  margin-bottom: 16px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.meta {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 16px;
}

.tag {
  font-size: 0.75rem;
  padding: 4px 12px;
  background: var(--vp-c-gutter);
  border-radius: 20px;
  color: var(--vp-c-text-3);
}

.tag.highlight {
  background: rgba(0, 120, 212, 0.15);
  color: #4fc3f7;
}

.footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 16px;
  border-top: 1px solid var(--vp-c-divider);
}

.stats {
  display: flex;
  gap: 16px;
  font-size: 0.75rem;
  color: var(--vp-c-text-3);
}

.stat {
  display: flex;
  align-items: center;
  gap: 4px;
}

.download-btn {
  padding: 8px 20px;
  background: linear-gradient(135deg, var(--vp-c-brand-2), var(--vp-c-brand-1));
  color: white;
  border-radius: 8px;
  font-size: 0.875rem;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.2s ease;
  border: none;
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(0, 103, 192, 0.3);
}

.download-btn:hover {
  background: linear-gradient(135deg, var(--vp-c-brand-1), var(--vp-c-brand-3));
  box-shadow: 0 4px 12px rgba(0, 103, 192, 0.4);
  transform: translateY(-1px);
}
</style>
