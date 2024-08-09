<template>
   <el-form-item label="显示类型">
    <el-select v-model="state.optionModel.displayType" size="small">
      <el-option
        v-for="item in state.options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      />
    </el-select>
  </el-form-item>
</template>

<script setup>
import { reactive, computed } from 'vue'
defineOptions({
    name:'displayType-editor'
})

const props=defineProps({
    optionModel:{
        type:Object,
        default:()=>{}
    }
})

const state=reactive({
    optionModel:computed(()=>props.optionModel),
    options: [
    {
      label: 'text',
      value: 'text'
    },
    {
      label: 'password',
      value: 'password'
    }
  ]
})

</script>

<style>

</style>