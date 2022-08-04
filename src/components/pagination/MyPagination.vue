<template>
  <el-pagination
    background
    layout="total, prev, pager, next, jumper, sizes"
    :total="1000"
    class="my-pagination"
  />
</template>

<style lang="scss" scoped>
.my-pagination {
  justify-content: flex-end;
  :deep(.el-select .el-input) {
    width: 100px;
  }
}
</style>
