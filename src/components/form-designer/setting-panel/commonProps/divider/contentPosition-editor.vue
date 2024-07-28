<template>
  <el-form-item label="内容位置">
    <el-select size="small" v-model="state.optionModel.contentPosition">
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
  name: 'contentPosition-editor',
})
const props = defineProps({
  optionModel: {
    type: Object,
    default: () => {},
  },
})
const state = reactive({
  optionModel: computed(() => props.optionModel),
  config: ['left', 'center', 'right'],
})
</script>
