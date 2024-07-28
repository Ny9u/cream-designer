<template>
  <el-form-item label="显示内容">
    <el-input
      size="small"
      type="text"
      v-model="state.optionModel.name"
    ></el-input>
  </el-form-item>
</template>
<script setup>
import { computed, reactive } from 'vue'
defineOptions({
  name: 'name-editor'
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
