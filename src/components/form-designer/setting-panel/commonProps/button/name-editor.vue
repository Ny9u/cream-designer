<template>
  <el-form-item label="显示名称">
    <el-input 
    v-model="state.optionModel.name"
    size="small"
    />
  </el-form-item>
</template>

<script setup>
import { reactive, computed } from 'vue'
defineOptions({
    name: 'name-editor'
})

const props=defineProps({
    optionModel: {
        type: Object,
        default: () => {}
    }
})
const state = reactive({
    optionModel: computed(() => props.optionModel)
})
</script>

<style>

</style>