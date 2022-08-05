<template>
  <div>
    <role-header
      v-model:role="r.role"
      @handleSearch="handleSearch"
      @handle-download="handleDownload"
      @handleAdd="handleAdd"
    ></role-header>
    <role-main :tableData="r.tableData"></role-main>
    <role-footer
      :total="pageData.total"
      v-model:current-page="pageData.currentPage"
      v-model:page-size="pageData.pageSize"
      @current-change="handlePageChange"
      @size-change="handlePageSizeChange"
    ></role-footer>
  </div>
</template>
<script lang="ts" setup>
import { reactive } from "vue";
import RoleHeader from "./components/RoleHeader.vue";
import RoleMain from "./components/RoleMain.vue";
import RoleFooter from "./components/RoleFooter.vue";
import type { TableData } from "@/components/table/types";
import type { PageData } from "@/components/pagination/types";

interface R {
  role: string;
  tableData: TableData;
}
const r: R = reactive({
  role: "",
  tableData: [],
});
const pageData: PageData = reactive({
  total: 0,
  pageSize: 10,
  currentPage: 1,
});

function handleSearch() {
  // api调用
  console.log("role", r.role);
  setTimeout(() => {
    r.tableData = [
      {
        role: "超级管理员",
        mark: "所有权限",
      },
      {
        role: "普通用户",
        mark: "部分权限",
      },
    ];
    pageData.total = 2;
    pageData.currentPage = 1;
  });
}
function handlePageChange(currentPage: number): void {
  console.log("currentPage", currentPage);
}
function handlePageSizeChange(pageSize: number): void {
  console.log("pageSize", pageSize);
}
function handleDownload() {
  // api调用
  console.log("role", r.role);
}
function handleAdd(formData: any) {
  // add Api
  console.log(formData, formData.roleName);
}
</script>
