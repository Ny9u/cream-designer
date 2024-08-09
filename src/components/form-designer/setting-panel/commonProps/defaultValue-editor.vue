<template>
  <el-form-item label="初始值">
    <el-input 
    v-model="state.optionModel.defaultValue" 
    placeholder="请输入初始值" 
    size="small"
    @change="onChangeHandle"
    />
  </el-form-item>
</template>

<script setup>
import { reactive, computed } from 'vue'
defineOptions({
    name:'defaultValue-editor'
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
    state.optionModel.value = state.optionModel.defaultValue
}
</script>

<style>

</style>