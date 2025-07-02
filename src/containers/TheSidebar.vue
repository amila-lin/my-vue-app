<template>
  <div class="h-screen w-full bg-gray-100 p-2 pl-2">
    <div class="h-full grid grid-cols-1 content-start">
        <el-scrollbar >
    <div v-for="item in 20" :key="item" class="scrollbar-demo-item p-2">
        <div class="bg-white rounded-md p-2 text-center w-full text-gray-100">
            {{ item }}
        </div>
    </div>
  </el-scrollbar>
    </div>
  </div>
</template>

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