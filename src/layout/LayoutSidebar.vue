<template>
  <el-menu
    :default-active="$route.path"
    :collapse="isCollapse"
    @select="handleMenuSelect"
    router
    class="layout-menu"
  >
    <layout-menu
      v-for="menu in menuList"
      :key="menu.url"
      :menu="menu"
    ></layout-menu>
  </el-menu>
</template>

<script lang="ts" setup>
import LayoutMenu from "@/layout/LayoutMenu.vue";
import { usePermissionStore } from "store/modules/permission";
import { useLayoutStore } from "store/modules/layout";
import { router } from "@/router/index";
import { computed } from "vue";
import type { RouteRecord } from "vue-router";

const permissionStore = usePermissionStore();
const layoutStore = useLayoutStore();

// todo:临时获取菜单
// permissionStore.getPermission();

const menuList = computed(() => permissionStore.menuList);
const isCollapse = computed(() => layoutStore.collapse);

function handleMenuSelect(
  index: string | number,
  indexPath: string,
  item: any,
  routerResult: Promise<unknown>
) {
  routerResult.then(() => {
    const routes = router.getRoutes();
    const currentRoute = routes
      .filter((item: RouteRecord) => item.path === index)
      .filter((item: RouteRecord) => item.name !== "home");
    if (currentRoute && currentRoute.length > 0) {
      const r = currentRoute[0];
      layoutStore.addTab({
        name: r.name,
        path: r.path,
        title: r.meta.title,
      });
    }
  });
}
</script>

<style lang="scss" scoped>
@use "@/styles/layout.scss" as *;
.layout-menu {
  overflow: auto;
  height: calc(100vh - $layout-header-height);
  &:not(.el-menu--collapse) {
    width: $layout-menu-width;
  }
}
</style>
