import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  base: '/my-vue-app/', // ✅ GitHub Pages 的 public 路徑，需與 repo 名稱相同
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
  build: {
    chunkSizeWarningLimit: 1000, // 調成 1000kB，例如
    rollupOptions: {
      output: {
        manualChunks: {
          vue: ['vue', 'vue-router'],
          elementPlus: ['element-plus'],
        },
      },
    },
  },
})