<template>
  <div class="form-widget">
    <el-scrollbar :height="state.scrollHeight">
        <el-form class="form-body" :model="state.formData" :label-width="designer.formConfig.formLabelWidth"> 
        <draggable
          class="draggable"
          :list="designer.widgetList"
          :move="checkMove"
          @add="(e) => onDragAdd(e)"
          @update="(e) => onDragUpdate(e)"
        >
        <template #item="{ element: widget, index }">
            <component
              v-model:options="widget.options"
              :is="getWidgetName(widget.type)"
              :widget="widget"
              :designer="designer"
              :key="widget.options.propName"
              :parent="designer"
              :index="index"
              @click="selectWidget(widget, index)"
            ></component>
        </template>
        </draggable>
        </el-form>
    </el-scrollbar>
  </div>
</template>
<script setup>
import { inject, computed, reactive ,onMounted } from 'vue'
import draggable from 'vuedraggable'
import { getWidgetName } from '@/utils/tool'
import FieldComponents from './field-widget/index'
defineOptions({
  components: {
    ...FieldComponents,
  },
})
const designer = inject('designer')
const state = reactive({
  formData: computed(() => JSON.parse(designer.getJSON())),
  scrollHeight: 0,
})

const checkMove = (e) => {
  designer.checkMove(e)
}

const onDragAdd = (e) => {
  const { newIndex } = e
  designer.addNewWidgetToContainer()//参数是要加入的容器
  designer.selectedWidget.index = newIndex
}

const onDragUpdate = (e) => {
  designer.dragUpdate(e)
}

const selectWidget = (widget, index) => {
  designer.selectWidget(widget, index)
}
// 计算滚动条高度,表单内置滚动条
const computedHeight = () => {
  state.scrollHeight = window.innerHeight - 75 + 'px'
}
onMounted(() => {
  window.addEventListener('resize', computedHeight)
})

</script>

<style lang="less" scoped>
.form-widget {
  position: relative;
  background: #f5f1f1;;
  box-sizing: border-box;
  padding: 10px;
}
.form-body {
  background: #fff;
  padding: 10px;
  .draggable {
    min-height: calc(100vh - 95px);
  }
}
</style>
