<template>
   <div class="common-layout">
    <el-container>
      <el-aside width="240px">
         <Sidebar/>
      </el-aside>
      <el-container>
        <el-header>
            <Header/>
        </el-header>
        <el-main>
            <RouterView></RouterView>
        </el-main>
        <el-footer>
            <Footer/>
        </el-footer>
      </el-container>
    </el-container>
  </div>
</template>
<script setup lang="ts">
import { RouterView } from 'vue-router'
import Sidebar from '@/containers/TheSidebar.vue'
import Footer from '@/containers/TheFooter.vue'
import Header from '@/containers/TheHeader.vue'
</script>

<style scoped>
.common-layout {
  height: 100vh;
}
</style>