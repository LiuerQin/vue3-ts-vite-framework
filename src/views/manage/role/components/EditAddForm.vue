<template>
  <el-dialog>
    <el-form>
      <el-form-item label="角色名称">
        <el-input v-model="form.roleName" />
      </el-form-item>
      <el-form-item label="备注">
        <el-input />
      </el-form-item>
      <el-form-item label="菜单权限"></el-form-item>
    </el-form>
  </el-dialog>
</template>
<script lang="ts" setup>
import { reactive, watch, useAttrs } from "vue";
import { cloneDeep } from "lodash";

const attrs = useAttrs();

interface FormData {
  roleName: string;
  mark: string;
  menus: Array<string>;
}
interface Props {
  flag?: "edit" | "add";
  formData?: FormData;
}
const props = withDefaults(defineProps<Props>(), {
  flag: "edit",
});

let form: FormData = reactive({
  roleName: "",
  mark: "",
  menus: [],
  visible: true,
});
watch(
  () => [props.formData, attrs.modelValue],
  ([formData, visible]) => {
    if (formData && Object.keys(formData as FormData).length > 0) {
      form = cloneDeep(formData as FormData);
    }
  }
);
// const emits = defineEmits<{
//   (e: "handleConfirm", formData: FormData): void;
// }>();

// const handleClose = () => {
//   form = {
//     roleName: "",
//     mark: "",
//     menus: [],
//   };
// };
</script>
