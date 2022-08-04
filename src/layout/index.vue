<template>
  <el-container>
    <el-header>
      <layout-header></layout-header>
    </el-header>
    <el-container>
      <el-aside>
        <layout-sidebar></layout-sidebar>
      </el-aside>
      <el-container>
        <el-main class="layout-main">
          <layout-main></layout-main>
        </el-main>
        <el-footer class="layout-footer">
          <layout-footer></layout-footer>
        </el-footer>
      </el-container>
    </el-container>
  </el-container>
</template>

<script lang="ts" setup>
import LayoutHeader from "./LayoutHeader.vue";
import LayoutSidebar from "./LayoutSidebar.vue";
import LayoutMain from "./LayoutMain.vue";
import LayoutFooter from "./LayoutFooter.vue";
</script>
<style lang="scss" scoped>
:deep(.el-header) {
  padding: 0;
  height: auto;
}
:deep(.el-aside) {
  width: auto;
}
.layout-main {
  display: flex;
  flex-direction: column;
  > div {
    flex: 0 0 auto;
  }
  > :deep(.layout-content-wrapper) {
    flex: 1 0 auto;
  }
}
.layout-footer {
  height: 40px;
  background-color: white;
  margin: 0 20px;
}
</style>
