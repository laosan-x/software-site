<template>
  <div class="layout">
    <!-- 导航栏 -->
    <header class="nav-bar">
      <div class="nav-container">
        <a href="/" class="logo">
          <span class="logo-icon">📦</span>
          <span class="logo-text">硬核笔迹</span>
        </a>
        
        <nav class="nav-menu">
          <a href="/" class="nav-link" :class="{ active: isActive('/') }">首页</a>
          <a href="/category/windows" class="nav-link" :class="{ active: isActive('/category/windows') }">Windows</a>
          <a href="/category/mac" class="nav-link" :class="{ active: isActive('/category/mac') }">Mac</a>
          <a href="/category/android" class="nav-link" :class="{ active: isActive('/category/android') }">Android</a>
          <a href="/category/tv" class="nav-link" :class="{ active: isActive('/category/tv') }">TV盒子</a>
        </nav>
        
        <div class="nav-actions">
          <button class="theme-toggle" @click="toggleTheme" :title="isDark ? '切换到浅色模式' : '切换到深色模式'">
            <svg v-if="isDark" class="icon-sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="12" cy="12" r="5"></circle>
              <line x1="12" y1="1" x2="12" y2="3"></line>
              <line x1="12" y1="21" x2="12" y2="23"></line>
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
              <line x1="1" y1="12" x2="3" y2="12"></line>
              <line x1="21" y1="12" x2="23" y2="12"></line>
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
            </svg>
            <svg v-else class="icon-moon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
            </svg>
          </button>
          <div class="search-box">
            <input 
              type="text" 
              placeholder="搜索软件..." 
              v-model="searchQuery"
              @keyup.enter="handleSearch"
            />
            <button @click="handleSearch">🔍</button>
          </div>
        </div>
      </div>
    </header>
    
    <!-- 主内容区 -->
    <main class="main-content">
      <slot />
    </main>
    
    <!-- 页脚 -->
    <footer class="footer">
      <div class="footer-content">
        <div class="footer-section">
          <h4>下载分类</h4>
          <ul>
            <li><a href="/category/windows">Windows 软件</a></li>
            <li><a href="/category/mac">Mac 软件</a></li>
            <li><a href="/category/android">Android 应用</a></li>
            <li><a href="/category/tv">TV盒子应用</a></li>
          </ul>
        </div>
        <div class="footer-section">
          <h4>帮助中心</h4>
          <ul>
            <li><a href="/help/faq">常见问题</a></li>
            <li><a href="/help/download">下载说明</a></li>
            <li><a href="/help/contact">联系我们</a></li>
          </ul>
        </div>
        <div class="footer-section">
          <h4>关于</h4>
          <ul>
            <li><a href="/about">关于本站</a></li>
            <li><a href="/disclaimer">免责声明</a></li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <p>© 2025 硬核笔迹 | 所有软件仅供学习交流</p>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'
import { useRoute, useRouter } from 'vitepress'

const route = useRoute()
const router = useRouter()
const searchQuery = ref('')
const isDark = ref(true)

// 主题切换
const toggleTheme = () => {
  isDark.value = !isDark.value
  updateTheme()
}

const updateTheme = () => {
  if (typeof document !== 'undefined') {
    document.documentElement.classList.toggle('light-mode', !isDark.value)
    localStorage.setItem('theme', isDark.value ? 'dark' : 'light')
  }
}

// 初始化主题
onMounted(() => {
  const savedTheme = localStorage.getItem('theme')
  if (savedTheme) {
    isDark.value = savedTheme === 'dark'
  } else {
    // 检测系统偏好
    isDark.value = !window.matchMedia('(prefers-color-scheme: light)').matches
  }
  updateTheme()
})

const isActive = (path) => {
  return route.path === path
}

const handleSearch = () => {
  if (searchQuery.value.trim()) {
    router.go(`/search?q=${encodeURIComponent(searchQuery.value)}`)
  }
}
</script>

<style scoped>
.layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: var(--vp-c-bg);
}

/* Win11 导航栏 */
.nav-bar {
  position: sticky;
  top: 0;
  z-index: 100;
  background: var(--vp-nav-bg-color);
  backdrop-filter: blur(20px) saturate(180%);
  -webkit-backdrop-filter: blur(20px) saturate(180%);
  border-bottom: 1px solid var(--vp-nav-border);
}

.nav-container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 24px;
  height: 64px;
  display: flex;
  align-items: center;
  gap: 32px;
}

.logo {
  display: flex;
  align-items: center;
  gap: 8px;
  text-decoration: none;
  color: var(--vp-c-text-1);
  font-weight: 700;
  font-size: 1.25rem;
  flex-shrink: 0;
}

.logo-icon {
  font-size: 1.5rem;
}

.nav-menu {
  display: flex;
  gap: 8px;
  flex: 1;
}

.nav-link {
  padding: 8px 16px;
  color: var(--vp-c-text-2);
  text-decoration: none;
  font-size: 0.875rem;
  font-weight: 500;
  border-radius: 6px;
  transition: all 0.2s ease;
}

.nav-link:hover {
  color: var(--vp-c-text-1);
  background: var(--vp-card-bg);
}

.nav-link.active {
  color: #fff;
  background: linear-gradient(135deg, var(--vp-c-brand-2), var(--vp-c-brand-1));
  box-shadow: 0 2px 8px rgba(0, 103, 192, 0.3);
}

.nav-actions {
  display: flex;
  align-items: center;
  gap: 12px;
}

.theme-toggle {
  width: 40px;
  height: 40px;
  border-radius: 8px;
  background: rgba(45, 45, 45, 0.8);
  border: 1px solid rgba(255, 255, 255, 0.1);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
  color: #fff;
  padding: 0;
}

.theme-toggle svg {
  width: 20px;
  height: 20px;
}

/* 浅色模式下按钮样式 */
:root.light-mode .theme-toggle {
  background: rgba(255, 255, 255, 0.9);
  border: 1px solid rgba(0, 0, 0, 0.1);
  color: #1a1a1a;
}

.theme-toggle:hover {
  transform: scale(1.05);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}

.search-box {
  display: flex;
  align-items: center;
  background: var(--vp-card-bg);
  border: 1px solid var(--vp-card-border);
  border-radius: 8px;
  overflow: hidden;
  backdrop-filter: blur(10px);
  transition: all 0.2s ease;
}

.search-box:hover {
  background: var(--vp-card-bg-hover);
  border-color: rgba(0, 120, 212, 0.3);
}

.search-box input {
  padding: 10px 16px;
  background: transparent;
  border: none;
  color: var(--vp-c-text-1);
  font-size: 0.875rem;
  width: 220px;
  outline: none;
}

.search-box input::placeholder {
  color: var(--vp-c-text-3);
}

.search-box button {
  padding: 10px 16px;
  background: transparent;
  border: none;
  cursor: pointer;
  font-size: 1rem;
  transition: all 0.2s ease;
}

.search-box button:hover {
  background: rgba(0, 120, 212, 0.1);
}

/* 主内容 */
.main-content {
  flex: 1;
  max-width: 1400px;
  width: 100%;
  margin: 0 auto;
  padding: 24px;
}

/* 页脚 */
.footer {
  background: var(--vp-c-bg-alt);
  border-top: 1px solid var(--vp-card-border);
  padding: 48px 24px 24px;
}

.footer-content {
  max-width: 1400px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 32px;
}

.footer-section h4 {
  color: var(--vp-c-text-1);
  font-size: 1rem;
  margin-bottom: 16px;
}

.footer-section ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-section li {
  margin-bottom: 8px;
}

.footer-section a {
  color: var(--vp-c-text-2);
  text-decoration: none;
  font-size: 0.875rem;
  transition: color 0.3s ease;
}

.footer-section a:hover {
  color: var(--vp-c-brand-1);
}

.footer-bottom {
  max-width: 1400px;
  margin: 32px auto 0;
  padding-top: 24px;
  border-top: 1px solid var(--vp-card-border);
  text-align: center;
}

.footer-bottom p {
  color: var(--vp-c-text-3);
  font-size: 0.875rem;
}

/* 响应式 */
@media (max-width: 768px) {
  .nav-container {
    padding: 0 16px;
    gap: 16px;
  }
  
  .nav-menu {
    display: none;
  }
  
  .search-box input {
    width: 120px;
  }
  
  .main-content {
    padding: 16px;
  }
  
  .footer-content {
    grid-template-columns: 1fr;
    gap: 24px;
  }
}
</style>
