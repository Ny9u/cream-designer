<template>
  <el-form-item label="按钮类型">
    <el-select v-model="state.optionModel.type" size="small">
      <el-option
        v-for="item in state.typeOptions"
        :key="item"
        :label="item"
        :value="item"
      />
    </el-select>
  </el-form-item>
</template>

<script setup>
import { reactive, computed } from 'vue'
defineOptions({
    name: 'type-editor'
})

const props=defineProps({
    optionModel: {
        type: Object,
        default: () => {}
    }
})
const state = reactive({
    optionModel: computed(() => props.optionModel),
    typeOptions: ['primary', 'success', 'warning', 'danger', 'info'],
})
</script>

<style>

</style>