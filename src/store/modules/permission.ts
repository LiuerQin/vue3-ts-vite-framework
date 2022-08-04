import { defineStore } from "pinia";
import { routesMap, router } from "@/router";
import type { RoutesMap } from "@/router";
import { addRoutes } from "@/router/routerHelper";

interface MenuApiResItem {
  text: string;
  identifier: string;
  children?: MenuApiResItem[] | [];
  [key: string]: any;
}

export type MenuItem = Omit<MenuApiResItem, "children"> & {
  path: string;
  children?: MenuItem[] | [];
};
export type MenuList = MenuItem[];

interface PermissionState {
  menuList: MenuList;
}

export const usePermissionStore = defineStore("permissionStore", {
  state: (): PermissionState => ({
    menuList: [],
  }),
  actions: {
    getPermission() {
      // todo: 需要对接权限接口
      const apiRes: MenuApiResItem[] = [
        {
          identifier: "home",
          text: "首页",
        },
        {
          identifier: "xitong",
          text: "系统管理",
          children: [
            {
              identifier: "user",
              text: "用户管理",
            },
            {
              identifier: "role",
              text: "角色管理",
            },
            {
              identifier: "menu",
              text: "菜单管理",
            },
          ],
        },
      ];

      // 获取菜单跳转路径
      const getMenuUrl = function (
        apiRes: MenuApiResItem[],
        routesMap: RoutesMap
      ): MenuItem[] {
        return apiRes.map((item) => {
          let children;
          if (item.children && item.children.length > 0) {
            children = getMenuUrl(item.children, routesMap);
          }
          const path = routesMap.get(item.identifier)?.path || "";
          return {
            ...item,
            path,
            children,
          };
        });
      };
      this.menuList = getMenuUrl(apiRes, routesMap);

      // 根据权限更新路由对象
      addRoutes(this.menuList, routesMap, router);
    },
  },
  getters: {},
});
