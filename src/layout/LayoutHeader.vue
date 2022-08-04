<template>
  <div class="layout-header">
    <div :class="logoClass">
      <img :src="logoSrc" />
      <el-icon :size="24" @click="toggleCollapse">
        <Expand v-if="collapse" />
        <Fold v-else />
      </el-icon>
    </div>
    <div class="layout-header-right">
      <h4>{{ title }}</h4>
      <el-dropdown @command="handleClick">
        <span>
          <el-icon><Avatar /></el-icon>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item command="logout">登出</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { computed } from "vue";
import { useLayoutStore } from "@/store/modules/layout";
import logo from "@/assets/layout/logo.png?url";
import logoMini from "@/assets/layout/logo-mini.png?url";
import { Expand, Fold, Avatar } from "@element-plus/icons-vue";

const title = import.meta.env.VITE_APP_TITLE;
const layoutStore = useLayoutStore();

const collapse = computed(() => layoutStore.collapse);
const logoClass = computed(() =>
  collapse.value ? "layout-header-left-collapse" : "layout-header-left"
);
const logoSrc = computed(() => (collapse.value ? logoMini : logo));

function toggleCollapse(): void {
  layoutStore.toggleCollapse();
}

function handleClick(command: string): void {
  if (command === "logout") {
    // 退出操作
    console.log("logout");
  }
}
</script>
<style lang="scss" scoped>
@use "styles/layout.scss" as *;
@use "styles/mixins.scss" as *;

$paddingVal: 20px;

.layout-header {
  @include setFlex;
  height: $layout-header-height;
  background-color: $color-primary;
  color: white;
  padding: 0 $paddingVal;
  &-left,
  &-left-collapse {
    @include setFlex;
    // 减去padding值
    width: calc($layout-menu-width - $paddingVal - 10px);
    transition: width ease-out 0.3s;
    img {
      max-height: calc($layout-header-height - 34px);
    }
    .el-icon {
      cursor: pointer;
    }
  }
  &-left {
    padding-right: 10px;
  }
  &-left-collapse {
    width: 64px;
    img {
      width: 20px;
    }
  }
  &-right {
    flex: 1 0;
    padding-left: $paddingVal;
    @include setFlex;
    h4 {
      font-weight: normal;
    }
    .el-dropdown {
      color: white;
      .el-icon {
        font-size: 32px;
      }
    }
  }
}
</style>
