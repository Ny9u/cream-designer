<template>
  <el-form-item label="组件大小">
    <el-select v-model="state.optionModel.size" size="small">
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
    name:'size-editor'
})

const props=defineProps({
    optionModel:{
        type:Object,
        default:()=>{}
    }
})

const state = reactive({
    options:[
        {label:'小',value:'small'}, 
        {label:'默认',value:'default'},
        {label:'大',value:'large'}
    ],
    optionModel:computed(()=>props.optionModel)
})
</script>

<style>

</style>