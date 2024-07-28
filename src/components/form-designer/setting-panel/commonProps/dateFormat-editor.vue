<template>
  <el-form-item label="显示格式">
    <el-select size="small" v-model="state.optionModel.dateFormat">
      <el-option label="YYYY-MM-DD" value="YYYY-MM-DD"></el-option>
      <el-option label="YYYY/MM/DD" value="YYYY/MM/DD"></el-option>
      <el-option label="YYYY年MM月DD日" value="YYYY年MM月DD日"></el-option>
    </el-select>
  </el-form-item>
</template>
<script setup>
import { computed, reactive } from 'vue'
defineOptions({
  name: 'dateFormat-editor'
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
