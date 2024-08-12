<template>
  <el-form-item label="标签宽度">
    <el-input v-model="state.optionModel.formLabelWidth" size="small"/>
  </el-form-item>
</template>

<script setup>
import { reactive, computed } from 'vue'
defineOptions({
    name: 'formLabelWidth-editor'
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