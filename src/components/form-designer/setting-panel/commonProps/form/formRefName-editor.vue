<template>
  <el-form-item label="表单引用名称">
    <el-input v-model="state.optionModel.formRefName" size="small"/>
  </el-form-item>
</template>

<script setup>
import { reactive, computed } from 'vue'
defineOptions({
    name: 'formRefName-editor'
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