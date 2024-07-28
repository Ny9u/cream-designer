<template>
  <el-form-item label="数据对象名称">
    <el-input size="small" type="text" v-model="state.optionModel.formDataName"></el-input>
  </el-form-item>
</template>
<script setup>
import { computed, reactive } from 'vue'
defineOptions({
  name: 'formDataName-editor'
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
