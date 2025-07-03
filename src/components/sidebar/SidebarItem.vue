<template>
  <li class="mb-2">
    <div
      class="cursor-pointer flex items-center justify-between p-2 rounded hover:bg-gray-100"
      @click="toggle"
    >
      <div class="flex items-center space-x-2 flex-1">
        <!-- Icon -->
        <component
          v-if="iconComponent"
          :is="iconComponent"
          class="text-gray-600 w-4"
        />

        <!-- Label or Link -->
        <router-link
          v-if="item.link && !hasChildren"
          :to="item.link"
          class="flex-1 line-clamp-2"
        >
          {{ item.label }}
        </router-link>
        <span v-else>{{ item.label }}</span>
      </div>

      <!-- Expand/Collapse Arrow -->
      <span v-if="hasChildren" class="text-sm">
        <el-icon>
          <arrow-down v-if="open" />
          <arrow-right v-else />
        </el-icon>
      </span>
    </div>

    <!-- Children -->
    <ul v-if="hasChildren && open" class="pl-4 border-l border-gray-200">
      <SidebarItem
        v-for="child in item.children"
        :key="child.label"
        :item="child"
      />
    </ul>
  </li>
</template>

<script setup lang="ts">
import { ref, computed, defineProps } from "vue";
import type { PropType } from "vue";
import * as ElementPlusIconsVue from "@element-plus/icons-vue";

interface MenuItem {
  label: string;
  icon?: string;
  link?: string;
  children?: MenuItem[];
}

const props = defineProps({
  item: {
    type: Object as PropType<MenuItem>,
    required: true,
  },
});

const open = ref(false);

const toggle = () => {
  if (hasChildren.value) open.value = !open.value;
};

const hasChildren = computed(
  () => !!props.item.children && props.item.children.length > 0
);

const iconComponent = computed(() => {
  const iconKey = props.item.icon as keyof typeof ElementPlusIconsVue;
  if (iconKey && ElementPlusIconsVue[iconKey]) {
    return ElementPlusIconsVue[iconKey];
  }
  return null;
});
</script>
