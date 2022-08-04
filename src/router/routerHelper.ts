import type { Router } from "vue-router";
import type { MenuList, MenuItem } from "store/modules/permission";
import type { RoutesMap } from "@/router";

const parent = "layout";

export function addRoutes(
  menuList: MenuList,
  routesMap: RoutesMap,
  router: Router
) {
  menuList.forEach((menu: MenuItem) => {
    const routeConfig = routesMap.get(menu.identifier);
    routeConfig && router.addRoute(parent, routeConfig);
    menu.children &&
      menu.children.length > 0 &&
      addRoutes(menu.children, routesMap, router);
  });
}
