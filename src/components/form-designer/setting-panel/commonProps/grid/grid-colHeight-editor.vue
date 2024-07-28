<template>
  <el-form-item label="统一列高(px)">
    <el-input size="small" type="text" v-model.number="state.optionModel.colHeight"></el-input>
  </el-form-item>
</template>
<script setup>
import { computed, reactive } from 'vue'
defineOptions({
  name: 'grid-colHeight-editor'
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
