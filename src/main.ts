import { createApp } from 'vue'

import App from './App.vue'
import './assets/tailwind.css'  // 导入 tailwind
import router from './router'
import 'element-plus/dist/index.css'
import { Share, Loading } from '@element-plus/icons-vue'
import ElementPlus from 'element-plus'

const app = createApp(App)

app.component('Share', Share)
app.component('Loading', Loading)
app.use(router)
app.use(ElementPlus)
app.mount('#app')
