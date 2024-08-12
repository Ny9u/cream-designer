<template>
  <el-form-item label="数据对象名称">
    <el-input v-model="state.optionModel.formDataName" size="small"/>
  </el-form-item>
</template>

<script setup>
import { reactive, computed } from 'vue'
defineOptions({
    name: 'formDataName-editor'
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