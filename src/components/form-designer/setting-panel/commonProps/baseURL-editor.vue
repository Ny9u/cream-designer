<template>
  <el-form-item label="请求地址">
    <el-input
      size="small"
      type="text"
      v-model="state.optionModel.baseURL"
    ></el-input>
  </el-form-item>
</template>
<script setup>
import { computed, reactive } from 'vue'
defineOptions({
  name: 'baseURL-editor'
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
</script>
