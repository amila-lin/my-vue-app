<template>
    <div class="w-full flex justify-center text-gray-500 text-xs">
     &copy; {{ startYear === currentYear ? currentYear : `${startYear}–${currentYear}` }} AmilaLin. All rights reserved.
    </div>
</template>
<script setup lang="ts">
import { computed } from 'vue'

const currentYear = computed(() => new Date().getFullYear())
const startYear = 2025
</script>
