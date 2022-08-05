import { watch, useAttrs, computed } from "vue";
import { cloneDeep } from "lodash";

interface AnyObject {
  [key: string]: any;
}
interface Props {
  flag: "edit" | "add";
  [key: string]: any;
}

export function addEditDialog(
  formInitData: AnyObject,
  form: AnyObject,
  props: Props,
  emits: any
) {
  const attrs = useAttrs();

  const title = computed(() => (props.flag === "edit" ? "编辑" : "新增"));

  watch(
    () => [props.formData, attrs.modelValue],
    ([formData, visible]) => {
      console.log("watch", formData, visible);
      if (visible && formData && Object.keys(formData).length > 0) {
        form = cloneDeep(formData);
      }
    }
  );

  const handleClose = () => {
    emits("handleClose");
    emits("update:modelValue", false);

    form = cloneDeep(formInitData);
  };
  const handleConfirm = () => {
    emits("handleConfirm", cloneDeep(form));
  };

  return {
    title,
    handleClose,
    handleConfirm,
  };
}
