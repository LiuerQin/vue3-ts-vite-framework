<template>
  <layout-tabs></layout-tabs>
  <layout-breadcrumb></layout-breadcrumb>
  <div class="layout-content-wrapper">
    <router-view></router-view>
  </div>
</template>

<script lang="ts" setup>
import LayoutTabs from "./LayoutTabs.vue";
import LayoutBreadcrumb from "./LayoutBreadcrumb.vue";
</script>
<style lang="scss" scoped>
.layout-content-wrapper {
  background-color: white;
  padding: 15px 10px;
}
</style>
