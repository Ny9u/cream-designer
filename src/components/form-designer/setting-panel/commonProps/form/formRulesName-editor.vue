<template>
  <el-form-item label="校验规则名称">
    <el-input v-model="state.optionModel.formRulesName" size="small"/>
  </el-form-item>
</template>

<script setup>
import { reactive, computed } from 'vue'
defineOptions({
    name: 'formRulesName-editor'
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