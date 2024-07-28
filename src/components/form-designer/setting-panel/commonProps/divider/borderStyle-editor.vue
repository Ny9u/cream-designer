<template>
  <el-form-item label="分隔符样式">
    <el-select size="small" v-model="state.optionModel.borderStyle">
      <el-option
        v-for="item in state.config"
        :key="item"
        :label="item"
        :value="item"
      ></el-option>
    </el-select>
  </el-form-item>
</template>
<script setup>
import { computed, reactive } from 'vue'
defineOptions({
  name: 'borderStyle-editor',
})
const props = defineProps({
  optionModel: {
    type: Object,
    default: () => {},
  },
})
const state = reactive({
  optionModel: computed(() => props.optionModel),
  config: [
    'none',
    'hidden',
    'dotted',
    'dashed',
    'solid',
    'double',
    'groove',
    'ridge',
    'inset',
    'outset',
  ],
})
</script>
