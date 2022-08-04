<template>
  <el-breadcrumb class="layout-breadcrumb" :separator-icon="ArrowRight">
    <el-breadcrumb-item v-for="item in breadcrumbArr" :key="item">{{
      item
    }}</el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script lang="ts" setup>
import { ArrowRight } from "@element-plus/icons-vue";
import { usePermissionStore } from "store/modules/permission";
import type { MenuList } from "store/modules/permission";
import { useRoute } from "vue-router";
import { computed, watchEffect, ref } from "vue";
import type { Ref } from "vue";

const breadcrumbArr: Ref<Array<string>> = ref([]);
const permissionStore = usePermissionStore();
const route = useRoute();

function getBreadcrumb(menuList: MenuList, routePath: string): Array<string> {
  let res: Array<string> = [];
  for (let i = 0; i < menuList.length; i++) {
    const menu = menuList[i];
    if (menu.path === routePath) {
      res = [menu.text];
      break;
    } else {
      if (menu.children && menu.children.length > 0) {
        const childrenResult = getBreadcrumb(menu.children, routePath);
        if (childrenResult && childrenResult.length > 0) {
          res = [menu.text, ...childrenResult];
          break;
        }
      }
    }
  }
  return res;
}

const menuList = computed(() => permissionStore.menuList);

watchEffect(() => {
  const routePath = route.path as string;
  breadcrumbArr.value = getBreadcrumb(menuList.value, routePath);
  console.log(breadcrumbArr);
});
</script>
<style lang="scss" scoped>
.layout-breadcrumb {
  margin: 20px;
}
</style>
