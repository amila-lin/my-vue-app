<template>
  <div class="flex gap-5">
    <h1>Home Page</h1>
    <router-link to="/about" custom v-slot="{ navigate, href }">
      <el-button :native-type="'button'" @click="navigate" :href="href" type="primary">
        <el-icon :size="24" color="#fdfefe" class="pr-2">
            <Loading class="block" />
          </el-icon>
        Go to About
      </el-button>
    </router-link>
  </div>
</template>

