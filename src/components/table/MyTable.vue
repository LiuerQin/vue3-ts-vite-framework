<!-- 
  使用：
  table attributes & table event 直接在父组件里写
  <my-table :tableObj="tableObj" :border="true" @row-click="handleRowClick">

  </my-table>
  tableObj: {
    tableData: [{
      '列key1': '值1',
      '列key2': '值2'
    }, ...],
    tableHeader: [{
      label: '列名',
      value: '列key',
      children?: [],
      fixed?: '列属性', // 默认false
      showOverflowTooltip?：'列属性', // 默认true
      width?: '列宽',
      minWidth?: '列最小宽'
    }, ...]
  }
 -->
<template>
  <el-table :data="props.tableObj.tableData" :border="true" class="my-table">
    <slot name="prev"></slot>
    <my-table-column :tableHeader="props.tableObj.tableHeader">
    </my-table-column>
    <slot></slot>
  </el-table>
</template>
<script lang="ts" setup>
import type { TableObj } from "./types";
interface Props {
  tableObj: TableObj;
}
const props = defineProps<Props>();
</script>
<style lang="scss" scoped>
.my-table {
  margin: 18px 0;
  :deep(.el-table__cell) {
    text-align: center;
  }
  :deep(thead) {
    color: #464c5b;
  }
}
</style>
