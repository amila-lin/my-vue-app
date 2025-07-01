import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import './assets/tailwind.css'  // 导入 tailwind
import router from './router'

const app = createApp(App)
app.use(router)
app.mount('#app')
