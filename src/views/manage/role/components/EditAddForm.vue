<template>
  <el-dialog :title="title" width="500px">
    <el-form label-width="100px">
      <el-form-item label="角色名称">
        <el-input v-model="form.roleName" />
      </el-form-item>
      <el-form-item label="备注">
        <el-input v-model="form.mark" />
      </el-form-item>
      <el-form-item label="菜单权限">
        <el-tree
          :data="data"
          show-checkbox
          node-key="id"
          :default-expanded-keys="[2, 3]"
          :default-checked-keys="[5]"
          :props="defaultProps"
        >
        </el-tree>
      </el-form-item>
    </el-form>
    <template #footer>
      <el-button @click="handleClose">取消</el-button>
      <el-button type="primary" @click="handleConfirm">确认</el-button>
    </template>
  </el-dialog>
</template>
<script lang="ts" setup>
import { reactive } from "vue";
import { addEditDialog } from "@/composition/addEditDialog";
import { FData } from "../types";

interface Props {
  flag?: "edit" | "add";
  formData?: FData;
}
const props = withDefaults(defineProps<Props>(), {
  flag: "edit",
});

interface DefineEmits {
  (e: "handleConfirm", formData: FData): void; // 自定义事件
  (e: "handleClose"): void; // 自定义事件
  (e: "update:modelValue", visible: boolean): void;
}
const emits = defineEmits<DefineEmits>();

const initForm: FData = {
  roleName: "",
  mark: "",
  menus: [],
};
const form: FData = reactive(initForm);

const { title, handleClose, handleConfirm } = addEditDialog(
  initForm,
  form,
  props,
  emits
);

const defaultProps = {
  children: "children",
  label: "label",
};
const data = [
  {
    id: 1,
    label: "Level one 1",
    children: [
      {
        id: 4,
        label: "Level two 1-1",
        children: [
          {
            id: 9,
            label: "Level three 1-1-1",
          },
          {
            id: 10,
            label: "Level three 1-1-2",
          },
        ],
      },
    ],
  },
  {
    id: 2,
    label: "Level one 2",
    children: [
      {
        id: 5,
        label: "Level two 2-1",
      },
      {
        id: 6,
        label: "Level two 2-2",
      },
    ],
  },
  {
    id: 3,
    label: "Level one 3",
    children: [
      {
        id: 7,
        label: "Level two 3-1",
      },
      {
        id: 8,
        label: "Level two 3-2",
      },
    ],
  },
];
</script>
