<template>
  <el-form-item label="整体偏移">
    <el-input-number v-model="state.optionModel.offset" size="small" :min="0" :max="12"/>
  </el-form-item>
</template>

<script setup>
import { reactive, computed } from 'vue'
defineOptions({
    name: 'offset-editor'
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