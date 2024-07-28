<template>
  <el-form-item label="栅格间距(px)">
    <el-input size="small" type="text" v-model.number="state.optionModel.gutter"></el-input>
  </el-form-item>
</template>
<script setup>
import { computed, reactive } from 'vue'
defineOptions({
  name: 'grid-gutter-editor'
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
