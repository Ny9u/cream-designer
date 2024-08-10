<template>
  <el-form-item label="栅格列高">
    <el-input v-model="state.optionModel.colHeight" size="small"/>
  </el-form-item>
</template>

<script setup>
import { reactive ,computed} from 'vue'
defineOptions({
    name:'colHeight-editor'
})

const props = defineProps({
    optionModel:{
        type:Object,
        default:()=>{}
    }
})

const state = reactive({
    optionModel:computed(()=>props.optionModel)
})
</script>

<style>

</style>