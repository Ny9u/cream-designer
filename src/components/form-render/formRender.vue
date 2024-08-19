<template>
  <div class="form-render">
    <!-- 表单预览就是将form-designer设计好的组件引入并重新渲染一次 -->
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
import FieldComponents from '@/components/form-designer/form-widget/field-widget/index'
import ContainerComponents from './container/index'
import { onMounted, provide, reactive } from 'vue'
import { Designer } from '@/components/form-designer/Designer'
import useRegisterEvent from '@/utils/useRegisterEvent'
defineOptions({
  components: {
    ...FieldComponents,
    ...ContainerComponents
  },
})
const props = defineProps({
  //这里传入的formJSON实际上是form-designer的designer
  //这里分为两个designer,即每一个表单都有一个designer
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
provide('designer', state.designer) // 生成一个designer实例供render组件单独使用时调用api

defineExpose({
  designer: state.designer//专门用于渲染栏格列内的组件
})

const { onFormMounted } = useRegisterEvent(state.designer, props.formJSON)
onMounted(() => {
  onFormMounted()//表单挂载时执行的事件,实际上操作为空
})
</script>
