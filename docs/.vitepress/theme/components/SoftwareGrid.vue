<template>
  <div class="software-section">
    <!-- 分类标签 -->
    <div class="category-tabs">
      <button 
        v-for="cat in categories" 
        :key="cat.value"
        class="category-tab"
        :class="{ active: currentCategory === cat.value }"
        @click="filterByCategory(cat.value)"
      >
        {{ cat.label }}
      </button>
    </div>
    
    <!-- 过滤器 -->
    <div class="filter-bar">
      <select v-model="sortBy" @change="sortSoftware">
        <option value="newest">最新发布</option>
        <option value="popular">最多下载</option>
        <option value="rating">评分最高</option>
        <option value="size">文件大小</option>
      </select>
      
      <select v-model="platformFilter" @change="filterSoftware">
        <option value="">全部平台</option>
        <option value="Windows">Windows</option>
        <option value="Mac">Mac</option>
        <option value="Android">Android</option>
        <option value="TV">TV盒子</option>
      </select>
    </div>
    
    <!-- 软件网格 -->
    <div class="software-grid">
      <SoftwareCard
        v-for="item in filteredSoftware"
        :key="item.title"
        v-bind="item"
      />
    </div>
    
    <!-- 空状态 -->
    <div v-if="filteredSoftware.length === 0" class="empty-state">
      <div class="empty-icon">📭</div>
      <p>暂无相关软件</p>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import SoftwareCard from './SoftwareCard.vue'

const props = defineProps({
  software: {
    type: Array,
    default: () => []
  }
})

const categories = [
  { label: '全部', value: 'all' },
  { label: '媒体播放', value: 'media' },
  { label: '办公软件', value: 'office' },
  { label: '系统工具', value: 'system' },
  { label: '下载工具', value: 'download' },
  { label: '安全防护', value: 'security' },
  { label: '图形设计', value: 'graphics' }
]

const currentCategory = ref('all')
const sortBy = ref('newest')
const platformFilter = ref('')

const filteredSoftware = computed(() => {
  let result = [...props.software]
  
  // 分类过滤
  if (currentCategory.value !== 'all') {
    result = result.filter(item => item.categoryType === currentCategory.value)
  }
  
  // 平台过滤
  if (platformFilter.value) {
    result = result.filter(item => item.platform === platformFilter.value)
  }
  
  // 排序
  switch (sortBy.value) {
    case 'newest':
      result.sort((a, b) => new Date(b.date) - new Date(a.date))
      break
    case 'popular':
      result.sort((a, b) => parseInt(b.downloads) - parseInt(a.downloads))
      break
    case 'rating':
      result.sort((a, b) => parseFloat(b.rating) - parseFloat(a.rating))
      break
  }
  
  return result
})

const filterByCategory = (category) => {
  currentCategory.value = category
}

const sortSoftware = () => {
  // 排序逻辑在 computed 中处理
}

const filterSoftware = () => {
  // 过滤逻辑在 computed 中处理
}
</script>

<style scoped>
.software-section {
  padding: 20px 0;
}

.category-tabs {
  display: flex;
  gap: 12px;
  padding: 20px 0;
  border-bottom: 1px solid var(--vp-card-border);
  margin-bottom: 20px;
  flex-wrap: wrap;
}

.category-tab {
  padding: 8px 16px;
  background: var(--vp-card-bg);
  border: 1px solid var(--vp-card-border);
  border-radius: 8px;
  color: var(--vp-c-text-2);
  font-size: 0.875rem;
  cursor: pointer;
  transition: all 0.2s ease;
  white-space: nowrap;
}

.category-tab:hover {
  background: var(--vp-card-bg-hover);
  border-color: rgba(0, 120, 212, 0.4);
  color: var(--vp-c-text-1);
}

.category-tab.active {
  background: linear-gradient(135deg, var(--vp-c-brand-2), var(--vp-c-brand-1));
  border-color: transparent;
  color: white;
  box-shadow: 0 2px 8px rgba(0, 103, 192, 0.3);
}

.filter-bar {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 16px 0;
  margin-bottom: 20px;
  flex-wrap: wrap;
}

.filter-bar select {
  padding: 8px 12px;
  background: var(--vp-card-bg);
  border: 1px solid var(--vp-card-border);
  border-radius: 6px;
  color: var(--vp-c-text-1);
  font-size: 0.875rem;
  cursor: pointer;
  outline: none;
  backdrop-filter: blur(10px);
}

.filter-bar select:focus {
  border-color: var(--vp-c-brand-1);
}

.software-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 20px;
}

.empty-state {
  text-align: center;
  padding: 60px 20px;
}

.empty-icon {
  font-size: 4rem;
  margin-bottom: 16px;
}

.empty-state p {
  color: var(--vp-c-text-3);
  font-size: 1rem;
}

@media (max-width: 768px) {
  .software-grid {
    grid-template-columns: 1fr;
  }
  
  .category-tabs {
    overflow-x: auto;
    flex-wrap: nowrap;
    -webkit-overflow-scrolling: touch;
    padding-bottom: 12px;
  }
  
  .category-tab {
    flex-shrink: 0;
  }
}
</style>
