<template>
  <el-form-item label="创建新选项">
    <el-switch @change="onChangeHandle" v-model="state.optionModel.allowCreate" />
  </el-form-item>
</template>
<script setup>
import { computed, reactive } from 'vue'
defineOptions({
  name: 'allowCreate-editor'
})
const props = defineProps({
  optionModel: {
    type: Object,
    default: () => {}
  }
})
const state = reactive({
  optionModel: computed(() => props.optionModel)
})
const onChangeHandle = () => {
  // 根据element的规定，可创建新选项时，可筛选属性必须为true
  state.optionModel.filterable = true
}
</script>
