<template>
  <el-form-item label="字段校验">
    <el-select placeholder="请选择" v-model="state.optionModel.rule" size="small">
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
  name: 'rule-editor'
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
    { label: '数字', value: 'number' },
    { label: '手机号', value: 'phone' }
  ]
})
</script>
