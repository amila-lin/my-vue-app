import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import About from '@/views/About.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/about', name: 'About', component: About },
]

const router = createRouter({
  history: createWebHistory('/my-vue-app/'), // 👈 和 vite.config.ts 的 base 保持一致
  routes,
})

export default router

