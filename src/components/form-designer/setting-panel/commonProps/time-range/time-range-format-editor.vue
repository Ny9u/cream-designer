<template>
  <el-form-item label="显示格式">
    <el-select placeholder="请选择" size="small" v-model="state.optionModel.format">
      <el-option label="HH:mm:ss" value="HH:mm:ss"></el-option>
      <el-option label="HH时mm分ss秒" value="HH时mm分ss秒"></el-option>
      <el-option label="hh:mm:ss" value="hh:mm:ss"></el-option>
    </el-select>
  </el-form-item>
</template>
<script setup>
import { computed, reactive } from 'vue'
defineOptions({
  name: 'time-range-format-editor'
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
