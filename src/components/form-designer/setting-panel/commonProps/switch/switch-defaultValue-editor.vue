<template>
  <el-form-item label="初始值">
    <el-switch
      v-model="state.optionModel.defaultValue"
      :active-value="optionModel.activeValue"
      :inactive-value="optionModel.inactiveValue"
      @change="onChangeHandle"
    />
  </el-form-item>
</template>
<script setup>
import { computed, reactive } from 'vue'
defineOptions({
  name: 'switch-defaultValue-editor',
})
const props = defineProps({
  optionModel: {
    type: Object,
    default: () => {},
  },
})
const state = reactive({
  optionModel: computed(() => props.optionModel),
})
const onChangeHandle = () =>
  (state.optionModel.value = state.optionModel.defaultValue)
</script>
