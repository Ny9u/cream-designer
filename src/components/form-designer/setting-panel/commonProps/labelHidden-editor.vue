<template>
  <el-form-item label="标签隐藏" prop="labelHidden">
    <el-switch
    v-model="state.optionModel.labelHidden"
    active-color="#13ce66"
    inactive-color="#ff4949">
    </el-switch>
  </el-form-item>
</template>

<script setup>
import { reactive, computed } from 'vue'
defineOptions({
    name: 'labelHidden-editor'
})

const props=defineProps({
    optionModel: {
        type: Object,
        default: () => {}
    }
})

const state= reactive({
    optionModel: computed(() => props.optionModel)
})

</script>

<style>

</style>