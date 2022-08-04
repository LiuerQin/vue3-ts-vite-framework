<template>
  <el-sub-menu v-if="showSubMenu" :index="menu.path">
    <template #title>
      <img v-if="menu.icon" :src="menu.icon" alt="" />
      <span>{{ menu.text }}</span>
    </template>
    <layout-menu
      v-for="subMenu in menu.children"
      :menu="subMenu"
      :key="subMenu.path"
      >item one</layout-menu
    >
  </el-sub-menu>
  <el-menu-item v-else :index="menu.path">
    <!-- <el-icon><icon-menu /></el-icon> -->
    <img v-if="menu.icon" :src="menu.icon" alt="" />
    <span>{{ menu.text }}</span>
  </el-menu-item>
</template>

<script lang="ts" setup>
import { computed } from "vue";
const props = defineProps<{
  menu: object;
}>();

const showSubMenu = computed(
  () => props.menu.children && props.menu.children.length > 0
);
</script>
