<template>
  <div class="layout-tabs">
    <div class="layout-tabs-home">
      <router-link to="home">
        <el-icon><HomeFilled /></el-icon>
      </router-link>
    </div>
    <el-tabs
      v-model="currentTab"
      type="card"
      class="layout-tabs-tabs"
      closable
      @tab-remove="removeTab"
      @tab-change="changeTab"
    >
      <el-tab-pane
        v-for="item in tabs"
        :key="item.name"
        :label="item.title"
        :name="item.name"
      ></el-tab-pane>
    </el-tabs>
  </div>
</template>
<script lang="ts" setup>
import { computed } from "vue";
import { useRoute, useRouter } from "vue-router";
import { HomeFilled } from "@element-plus/icons-vue";
import { useLayoutStore } from "store/modules/layout";
import { routesMap } from "@/router";

const layoutStore = useLayoutStore();
const route = useRoute();
const router = useRouter();

const currentTab = computed(() => route.name);
const tabs = computed(() => {
  return layoutStore.tabs;
});

// 首次进入系统，添加tab
const blackName = ["home"];
routesMap.has(route.name) &&
  blackName.indexOf(route.name as string) === -1 &&
  layoutStore.addTab({
    name: route.name,
    title: route.meta.title,
    path: route.path,
  });

const removeTab = (targetName: string) => {
  layoutStore.removeTab(targetName);
};
const changeTab = (targetName: string) => {
  router.push(targetName);
};
</script>
<style lang="scss" scoped>
// @use "styles/mixins.scss" as *;
$icon-color: #444;
$home-width: 50px;

.layout-tabs {
  height: 40px;
  background-color: white;
  box-shadow: 0px 4px 8px #ddd;
  // @include setFlex();
  display: flex;
  &-home {
    flex: none;
    width: $home-width;
    font-size: 20px;
    border-right: 1px solid #d1d912;
    .el-icon {
      color: $icon-color;
      top: 50%;
      transform: translateY(-50%);
      cursor: pointer;
      &:hover {
        color: lighten($icon-color, 15%);
      }
    }
  }
  &-tabs {
    width: calc(100% - $home-width);
    :deep(.el-tabs__nav) {
      border-top: 0px;
      .is-active {
        border-top: 4px solid $color-primary;
        border-bottom: none;
      }
    }
  }
}
</style>
