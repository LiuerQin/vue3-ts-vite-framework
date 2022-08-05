<template>
  <div class="role-header">
    <div class="role-header-left">
      <label for="">角色</label>
      <el-input v-model="roleValue"></el-input>
      <el-button @click="handleSearch" type="primary">查询</el-button>
      <el-button @click="handleDownload" type="primary">导出</el-button>
    </div>
    <div class="role-header-right">
      <el-button @click="handleAdd" type="success" class="role-header-add"
        >新增</el-button
      >
    </div>
  </div>

  <edit-add-form
    v-model="visible"
    flag="add"
    @handleConfirm="handleConfirm"
  ></edit-add-form>
</template>
<script lang="ts" setup>
import EditAddForm from "./EditAddForm.vue";
import { computed, ref } from "vue";
interface Props {
  role: string;
}
const props = defineProps<Props>();
interface Emit {
  (e: "update:role", value: string): void;
  (e: "handleSearch"): void;
  (e: "handleDownload"): void;
  (e: "handleAdd", formData: object): void;
}
const emit = defineEmits<Emit>();

const visible = ref<boolean>(true);

const roleValue = computed({
  get: () => props.role,
  set: (val) => {
    emit("update:role", val);
  },
});

const handleSearch = () => {
  emit("handleSearch");
};
const handleDownload = () => {
  emit("handleDownload");
};
const handleAdd = () => {
  visible.value = true;
};
const handleConfirm = (formData: object) => {
  emit("handleAdd", formData);
};
</script>

<style lang="scss" scoped>
@use "styles/mixins.scss" as *;
.role-header {
  @include setFlex();
  font-size: 14px;
  &-left {
    > label {
      display: inline-block;
      width: 80px;
    }
    :deep(.el-input) {
      width: 160px;
      margin-right: 20px;
    }
  }
}
</style>
