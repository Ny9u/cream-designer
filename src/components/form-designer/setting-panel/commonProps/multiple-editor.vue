<template>
  <el-form-item label="是否多选">
    <el-switch :before-change="onChangeHandle" v-model="state.optionModel.multiple"/>
  </el-form-item>
</template>

<script setup>
import { reactive, computed } from 'vue'
defineOptions({
    name:'multiple-editor'
})

const props= defineProps({
    optionModel:{
        type:Object,
        default:()=>{}
    }
})

const state = reactive({
    optionModel: computed(()=>props.optionModel)
})

const onChangeHandle = ()=>{
  const resVal = !state.optionModel.multiple
  if (resVal) {
    state.optionModel.value = []
  } else {
    state.optionModel.value = ''
  }
  return true
}
</script>

<style>

</style>