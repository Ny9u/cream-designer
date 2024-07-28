<template>
  <div class="form-render">
    <el-form>
      <template
        v-for="widget in formJSON.widgetList"
        :key="widget.options.propName"
      >
        <component
          v-model:options="widget.options"
          :is-design="false"
          :is="getRenderName(widget)"
          :widget="widget"
          :designer="state.designer"
        ></component>
      </template>
    </el-form>
  </div>
</template>
<script setup>
import { getRenderName } from '@/utils/tool'
import FieldComponents from '@/components/form-designer/form-widget/FormWidget'
import { onMounted, provide, reactive } from 'vue'
import { Designer } from '@/components/form-designer/Designer'
import useRegisterEvent from '@/utils/useRegisterEvent'
defineOptions({
  components: {
    ...FieldComponents,
  },
})
const props = defineProps({
  formJSON: {
    type: Object,
    default: () => {
      return {
        widgetList: [],
        formConfig: {},
      }
    },
  },
})
const state = reactive({
  designer: new Designer({
    widgetList: props.formJSON.widgetList,
    formConfig: props.formJSON.formConfig,
  }),
})
provide('designer', state.designer) // 必须也生成一个designer实例供render组件单独使用时调用api，
defineExpose({
  designer: state.designer
})

const { onFormMounted } = useRegisterEvent(state.designer, props.formJSON)
onMounted(() => {
  onFormMounted()//表单挂载时执行的事件,实际上无操作
})
</script>
