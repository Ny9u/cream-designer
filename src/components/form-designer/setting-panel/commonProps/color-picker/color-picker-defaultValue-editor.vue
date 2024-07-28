<template>
  <el-form-item label="初始值">
    <el-color-picker
      :disabled="optionModel.disabled"
      v-model="state.optionModel.defaultValue"
      @change="onChangeHandle"
      :show-alpha="optionModel.showAlpha"
    />
  </el-form-item>
</template>
<script setup>
import { computed, reactive } from 'vue'
defineOptions({
  name: 'color-picker-defaultValue-editor',
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
  (state.optionModel.value = state.optionModel.defaultValue)
</script>
