<template>
  <div class="h-screen w-full bg-gray-100 p-2 ">
    <div class="h-full grid grid-cols-1 content-start">
      <el-scrollbar >
      <div class="w-64 bg-white h-screen shadow-md p-4 overflow-y-auto">
        <ul>
          <SidebarItem
            v-for="item in menu"
            :key="item.label"
            :item="item"
          />
        </ul>
      </div>
    </el-scrollbar>
    </div>
  </div>
</template>
<script setup lang="ts">
import SidebarItem from '@/components/sidebar/SidebarItem.vue'

interface MenuItem {
  label: string
  icon?: string
  link?: string
  children?: MenuItem[]
}

const menu: MenuItem[] = [
  {
    label: '教育',
    icon: 'Reading',
    children: [
      {
        label: '國小數學運算練習',
        icon: 'EditPen',
        link: '/education/math'
      }
    ]
  },
  {
    label: '生活',
    icon: 'House',
    children: [
      { label: '健康資訊', icon: 'Medal', link: '/life/health' },
      { label: '興趣學習', icon: 'Star', link: '/life/hobbies' },
      { label: '記帳管理', icon: 'Wallet', link: '/life/finance' }
    ]
  }
]
</script>

<style scoped>
.scrollbar-demo-item {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;

  text-align: center;
  border-radius: 4px;
  background: var(--el-color-primary-light-9);
  color: var(--el-color-primary);
}
</style>