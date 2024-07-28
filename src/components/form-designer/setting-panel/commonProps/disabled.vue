<template>
  <el-form-item label="禁用">
    <el-switch v-model="state.optionModel.disabled" />
  </el-form-item>
</template>
<script setup>
import { computed, reactive } from 'vue'
defineOptions({
  name: 'disabled-editor'
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
