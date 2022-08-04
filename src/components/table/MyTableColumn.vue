<template>
  <el-table-column
    v-for="item in props.tableHeader"
    :key="item.value"
    :prop="item.value"
    :label="item.label"
    :min-width="item.minWidth"
    :width="item.width"
    :fixed="item.fixed"
    :show-overflow-tooltip="
      typeof item.showOverflowTooltip == 'boolean'
        ? item.showOverflowTooltip
        : true
    "
  >
    <template v-if="item.children && item.children.length > 0">
      <my-table-column :tableHeader="item.children"></my-table-column>
    </template>
  </el-table-column>
</template>
<script lang="ts" setup>
import type { TableHeader } from "./types";
interface Props {
  tableHeader: TableHeader;
}
const props = defineProps<Props>();
</script>
