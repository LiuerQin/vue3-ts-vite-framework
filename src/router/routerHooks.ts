import type { Router } from "vue-router";
import { usePermissionStore } from "store/modules/permission";

export function setupRouterHooks(router: Router): void {
  const whiteList = ["/login"];
  const permissionStore = usePermissionStore();
  router.beforeEach((to, from, next) => {
    if (whiteList.indexOf(to.path) > -1) {
      next();
    }
    if (!permissionStore.menuList || permissionStore.menuList.length === 0) {
      // 获取权限或者登陆
      permissionStore.getPermission();
      next(to.fullPath); // { path: to.fullPath, replace: true, query: to.query };
    } else {
      next();
    }
  });
}
