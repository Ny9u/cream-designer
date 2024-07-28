<template>
  <el-form-item label="标签宽度">
    <el-input size="small" type="text" v-model="state.optionModel.labelWidth"></el-input>
  </el-form-item>
</template>
<script setup>
import { computed, reactive } from 'vue'
defineOptions({
  name: 'labelWidth-editor'
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
