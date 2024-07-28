<template>
  <el-form-item label="按钮类型">
    <el-select size="small" v-model="state.optionModel.type">
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
  name: 'type-editor',
})
const props = defineProps({
  optionModel: {
    type: Object,
    default: () => {},
  },
})
const state = reactive({
  optionModel: computed(() => props.optionModel),
  config: ['primary', 'success', 'warning', 'danger', 'info'],
})
</script>
