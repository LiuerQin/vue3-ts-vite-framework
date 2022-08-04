<template>
  <my-table :tableObj="tableObj">
    <template #prev>
      <el-table-column type="index" label="序号" width="100" />
    </template>
    <template #default>
      <el-table-column label="操作">
        <template #default="scope">
          <el-button type="primary" link @click="handleEdit(scope.row)"
            >编辑</el-button
          >
          <el-button type="danger" link @click="handleDelete(scope.row)"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </template>
  </my-table>

  <edit-add-form v-model="visible" flag="edit"></edit-add-form>
</template>
<script lang="ts" setup>
import EditAddForm from "./EditAddForm.vue";
import { ElMessage, ElMessageBox } from "element-plus";
import { computed, ref } from "vue";
import type {
  TableHeader,
  TableData,
  TableObj,
} from "@/components/table/types";
interface Props {
  tableData: TableData;
}
const props = defineProps<Props>();

const visible = ref<boolean>(true);
setTimeout(() => {
  visible.value = false;
}, 3000);
const tableHeader: TableHeader = [
  {
    label: "角色名称",
    value: "role",
  },
  {
    label: "备注",
    value: "mark",
  },
  {
    label: "操作人",
    value: "operate",
  },
  {
    label: "操作时间",
    value: "time",
  },
];

const tableObj = computed<TableObj>(() => {
  return {
    tableData: props.tableData,
    tableHeader,
  };
});

const handleEdit = (row: object) => {
  // show dialog
};

const handleDelete = (row: object) => {
  ElMessageBox.confirm("确认删除该角色吗?", "警告", {
    confirmButtonText: "确认",
    cancelButtonText: "取消",
    type: "warning",
    center: true,
  })
    .then(() => {
      // do delete
      ElMessage({
        type: "success",
        message: "删除成功！",
      });
    })
    .catch(() => {});
};
</script>
