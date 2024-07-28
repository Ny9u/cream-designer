<template>
  <el-form-item label="可清除">
    <el-switch v-model="state.optionModel.clearable" />
  </el-form-item>
</template>
<script setup>
import { computed, reactive } from 'vue'
defineOptions({
  name: 'clearable-editor'
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
