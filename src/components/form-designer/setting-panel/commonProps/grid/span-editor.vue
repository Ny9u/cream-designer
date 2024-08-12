<template>
  <el-form-item label="栅格长度">
     <el-input-number size="small" v-model="state.optionModel.span" :min="0" :max="24"
      />
  </el-form-item>
</template>

<script setup>
import { reactive, computed } from 'vue'
defineOptions({
    name: 'span-editor'
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