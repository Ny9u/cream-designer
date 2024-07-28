<template>
  <el-form-item label="栅格向左格数">
    <el-input-number v-model="state.optionModel.pull" :min="0" :max="24" />
  </el-form-item>
</template>
<script setup>
import { computed, reactive } from 'vue'
defineOptions({
  name: 'pull-editor'
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
