<template>
  <el-form-item label="初始值">
    <el-input
      size="small"
      type="text"
      v-model="state.optionModel.defaultValue"
      @change="onChangeHandle"
    ></el-input>
  </el-form-item>
</template>
<script setup>
import { computed, reactive } from 'vue'
defineOptions({
  name: 'defaultValue-editor'
})
const props = defineProps({
  optionModel: {
    type: Object,
    default: () => {}
  }
})
const state = reactive({
  optionModel: computed(() => props.optionModel)
})
const onChangeHandle = () => (state.optionModel.value = state.optionModel.defaultValue)
</script>
