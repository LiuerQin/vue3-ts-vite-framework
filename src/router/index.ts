import { createRouter, createWebHistory } from "vue-router";
import { setupRouterHooks } from "./routerHooks";
import { App } from "vue";
import type { RoutesMap } from "./types";

const routes = [
  {
    path: "/",
    name: "layout",
    component: () => import("@/layout/index.vue"),
    // redirect: "/home",
    children: [],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export const routesMap: RoutesMap = new Map([
  [
    "home",
    {
      path: "/home",
      component: () => import("views/home/Home.vue"),
      name: "home",
      meta: {
        title: "首页",
      },
    },
  ],
  [
    "user",
    {
      path: "/user",
      component: () => import("views/manage/user/user.vue"),
      name: "user",
      meta: {
        title: "用户管理",
      },
    },
  ],
  [
    "role",
    {
      path: "/role",
      component: () => import("views/manage/role/role.vue"),
      name: "role",
      meta: {
        title: "角色管理",
      },
    },
  ],
  [
    "menu",
    {
      path: "/menu",
      component: () => import("views/manage/menu/menu.vue"),
      name: "menu",
      meta: {
        title: "菜单管理",
      },
    },
  ],
]);

export { router };

export function setupRouter(app: App<Element>): void {
  // 安装路由全局拦截钩子
  setupRouterHooks(router);
  app.use(router);
}
