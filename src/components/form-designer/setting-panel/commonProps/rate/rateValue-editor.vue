<template>
  <el-form-item label="初始值">
    <el-rate
      v-model="state.optionModel.rateValue"
      :disabled="optionModel.disabled"
      clearable
      @change="onChangeHandle"
    />
  </el-form-item>
</template>

<script setup>
import { reactive, computed } from 'vue'
defineOptions({
    name:'rateValue-editor'
})

const props=defineProps({
    optionModel:{
        type:Object,
        default:()=>{}
    }
})

const state=reactive({
    optionModel:computed(()=>props.optionModel)
})

const onChangeHandle=()=>{
    state.optionModel.value=state.optionModel.rateValue
}
</script>

<style>

</style>