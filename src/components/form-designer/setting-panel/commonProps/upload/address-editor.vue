<template>
  <el-form-item label="上传地址">
    <el-input v-model="state.optionModel.address" size="small"/>
  </el-form-item>
</template>

<script setup>
import { reactive, computed } from 'vue'
defineOptions({
    name: 'address-editor'
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