<template>
  <el-form-item label="筛选选项">
    <el-switch v-model="state.optionModel.filterable" />
  </el-form-item>
</template>
<script setup>
import { computed, reactive } from 'vue'
defineOptions({
  name: 'filterable-editor'
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
