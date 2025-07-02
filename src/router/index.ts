import { createRouter, createWebHistory } from 'vue-router'
import TheContainer from '@/containers/TheContainer.vue'

const routes = [
   {
      path: '/',
      name: 'Index',
      redirect: '/home',
      component: TheContainer,
      children: [
        {
          path: '/home',
          name: 'Home',
          component: () => import('@/views/Home.vue') // ✅ lazy load
        },
        {
          path: '/about',
          name: 'About',
          component: () => import('@/views/About.vue') ,
        }
      ],
    },
]

const router = createRouter({
  history: createWebHistory('/my-vue-app/'), // 👈 和 vite.config.ts 的 base 保持一致
  routes,
})

export default router

