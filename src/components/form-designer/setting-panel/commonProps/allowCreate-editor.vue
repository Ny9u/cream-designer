<template>
  <el-form-item label="创建新选项">
    <el-switch v-model="state.optionModel.allowCreate"/>
  </el-form-item>
</template>

<script setup>
import { reactive, computed } from 'vue'
defineOptions({
    name:'allowCreate-editor'
})

const props=defineProps({
    optionModel:{
        type:Object,
        default:()=>{}
    }
})

const state=reactive({
    optionModel:computed(()=>props.optionModel),
})
</script>

<style>

</style>