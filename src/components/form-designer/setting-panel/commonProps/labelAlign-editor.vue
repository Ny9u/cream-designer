<template>
  <el-form-item label="标签对齐">
    <el-button-group class="ml-4">
      <el-button
        @click="selectStyle(item.value, idx)"
        size="small"
        v-for="(item, idx) in state.styleList"
        :key="item.value"
        :type="idx == state.selectedIdx ? 'primary' : ''"
        >{{ item.label }}</el-button
      >
    </el-button-group>
  </el-form-item>
</template>
<script setup>
import { computed, reactive } from 'vue'
defineOptions({
  name: 'labelAlign-editor'
})
const props = defineProps({
  optionModel: {
    type: Object,
    default: () => {}
  }
})
const state = reactive({
  optionModel: computed(() => props.optionModel),
  styleList: [
    {
      label: '居左',
      value: 'left'
    },
    {
      label: '居中',
      value: 'center'
    },
    {
      label: '居右',
      value: 'right'
    }
  ],
  selectedIdx: 0
})
state.selectedIdx = state.styleList.findIndex((item) => item.value === state.optionModel.labelAlign)
const selectStyle = (pos, idx) => {
  state.optionModel.labelAlign = pos
  state.selectedIdx = idx
}
</script>
