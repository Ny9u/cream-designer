<template>
  <el-form-item label="标签对齐" prop="labelAlign" >
     <el-button-group v-model="state.optionModel.labelAlign">
      <el-button
        v-for="(item, idx) in state.styleList"
        size="small"
        :key="item.value"
        :type="idx == state.selectedIdx ? 'primary' : ''"
        @click="selectStyle(item.value, idx)"
        >
        {{ item.label }}
        </el-button>
    </el-button-group>
  </el-form-item>
  
</template>
<script setup>
import { computed, reactive } from 'vue'

defineOptions({
  name: 'labelAlign-editor',
})

const props = defineProps({
  optionModel: {
    type: Object,
    default: () => {},
  },
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

const selectStyle = (value, idx) => {
    state.optionModel.labelAlign = value
    state.selectedIdx = idx
}
</script>

<style scoped>

</style>