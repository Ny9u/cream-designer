<template>
  <el-form-item label="初始值">
    <el-color-picker
      :disabled="optionModel.disabled"
      v-model="state.optionModel.colorPickerValue"
      @change="onChangeHandle"
      :show-alpha="optionModel.showAlpha"
    />
  </el-form-item>
</template>
<script setup>
import { computed, reactive } from 'vue'
defineOptions({
  name: 'colorPickerValue-editor',
})
const props = defineProps({
  optionModel: {
    type: Object,
    default: () => {},
  },
})
const state = reactive({
  optionModel: computed(() => props.optionModel),
})
const onChangeHandle = () =>
  (state.optionModel.value = state.optionModel.colorPickerValue)
</script>