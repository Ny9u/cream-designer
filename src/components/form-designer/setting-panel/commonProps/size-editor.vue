<template>
  <el-form-item label="组件大小">
    <el-select v-model="state.optionModel.size" size="small">
      <el-option
        v-for="item in state.options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      />
    </el-select>
  </el-form-item>
</template>
<script setup>
import { computed, reactive } from 'vue'
defineOptions({
  name: 'size-editor'
})
const props = defineProps({
  optionModel: {
    type: Object,
    default: () => {}
  }
})
const state = reactive({
  optionModel: computed(() => props.optionModel),
  options: [
    {
      label: 'small',
      value: 'small'
    },
    {
      label: 'large',
      value: 'large'
    },
    {
      label: 'default',
      value: 'default'
    }
  ]
})
</script>
