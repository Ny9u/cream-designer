<template>
  <el-form-item label="分隔符名称">
    <el-input size="small" type="text" v-model="state.optionModel.rangeSeparator"></el-input>
  </el-form-item>
</template>
<script setup>
import { computed, reactive } from 'vue'
defineOptions({
  name: 'rangeSeparator-editor'
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
