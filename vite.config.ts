import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  base: '/my-vue-app/', // <-- 這要是你 GitHub Repo 的名稱
  plugins: [vue()]
})