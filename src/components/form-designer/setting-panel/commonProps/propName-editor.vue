<template>
  <el-form-item required :rules="state.rules" label="唯一名称" prop="propName">
    <el-input
      size="small"
      type="text"
      v-model="state.optionModel.propName"
      :disabled="true"
      @change="checkPropName"
    ></el-input>
  </el-form-item>
</template>
<script setup>
import { computed, inject, reactive } from 'vue'
import { ElMessage } from 'element-plus'
defineOptions({
  name: 'propName-editor',
})

const designer = inject('designer')

const props = defineProps({
  optionModel: {
    type: Object,
    default: () => {},
  },
})

const state = reactive({
  optionModel: computed(() => props.optionModel),
  rules: [{ required: true, message: '唯一名称必填', trigger: 'blur' }],
})
const checkPropName = (v) => {
  if (v === '') {
    ElMessage('唯一名称必填')
    state.optionModel.propName = state.optionModel.originPropName
    return
  }
  if (designer.checkPropName(state.optionModel.propName)) {
    ElMessage('存在重复唯一名称')
    state.optionModel.propName = state.optionModel.originPropName
  } else {
    // 更新此widget在widgetMap中对应的propName
    const targetWidget = designer.widgetMap.get(
      state.optionModel.originPropName,
    )
    designer.widgetMap.delete(state.optionModel.originPropName)
    designer.widgetMap.set(state.optionModel.propName, targetWidget)
    state.optionModel.originPropName = state.optionModel.propName
  }
}
</script>
