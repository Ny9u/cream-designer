<template>
  <el-form-item label="初始值">
    <el-rate
      v-model="state.optionModel.defaultValue"
      :disabled="optionModel.disabled"
      clearable
      :allow-half="optionModel.allowHalf"
      @change="onChangeHandle"
    />
  </el-form-item>
</template>
<script setup>
import { computed, reactive } from 'vue'
defineOptions({
  name: 'rate-defaultValue-editor',
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
