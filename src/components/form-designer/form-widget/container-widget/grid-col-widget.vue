<template>
  <el-col
    @click.stop="selectWidget(widget, index)"
    :span="widget.options.span"
    :offset="widget.options.offset"
    :push="widget.options.push"
    :pull="widget.options.pull"
    class="grid-col"
    :class="[widget == designer.selectedWidget ? 'active' : 'unactive']"
    :style="{
      minHeight: (widget.options.height ?? parentOption.colHeight) + 'px',
    }"
  >
    <draggable
      class="draggable"
      :sort="true"
      :list="widget.widgetList"
      item-key="id"
      v-bind="{ group: 'dragGroup', ghostClass: 'ghost', animation: 300 }"
      @start="onDragStart(widget)"
      @end="onDragEnd"
      @add="(e) => onDragAdd(e, widget)"
      @update="onDragUpdate"
      handle=".active-drag"
      :move="checkMove"
    >
      <div class="move" v-for="(subWidget, index) in widget.widgetList" :key="index">
        <component
          v-model:options="widget.options"
          :is="getWidgetName(subWidget.type)"
          :widget="subWidget"
          :designer="designer"
          :parent="widget"
          :parent-index="index"
          :key="subWidget.options.propName"
          :isDesign="isDesign"
          @click.stop="selectWidget(subWidget, idx)"
        ></component>
      </div>
    </draggable>
    <!-- 此处被选中时显示工具 -->
    <div class="active" v-if="widget == designer.selectedWidget && isDesign">
      <div class="active-name">
        <span>{{ widget.displayName }}</span>
      </div>
      <div class="active-action">
        <el-icon @click.stop="selectParent"><Back /></el-icon>
        <el-icon @click.stop="selectPreWidget"><Top /></el-icon>
        <el-icon @click.stop="selectNextWidget"><Bottom /></el-icon>
        <el-icon @click.stop="copySelfToParent"><CopyDocument /></el-icon>
        <el-icon @click.stop="removeWidget"><DeleteFilled /></el-icon>
      </div>
    </div>
  </el-col>
</template>

<script setup>
import { inject } from 'vue'
import { getWidgetName } from '@/utils/tool'
import FieldComponents from '@/components/form-designer/form-widget/field-widget/index'

defineOptions({
    name: 'grid-col-widget',
    components: {
      ...FieldComponents
    }
})

const designer = inject('designer')

const props = defineProps({
  widget: {
    type: Object,
    default: () => {},
  },
  parentOption: {
    type: Object,
    default: () => {},
  },
  isDesign: {
    type: Boolean,
    default: true,
  },
  parent: {
    type: Object,
    default: () => {},
  },
  parentIndex: {
    type: Number,
    default: 0,
  },
  index: {
    type: Number,
    default: 0,
  },
})

const selectWidget = (widget, index) => {
  designer.selectWidget(widget, index)
}

const onDragStart = (widget) => {
    designer.parentContainer = widget
}

const onDragEnd = () => {
  designer.parentContainer = designer
}

const onDragAdd = (e, widget) => {
   // 判断是不同组拖拽物料还是从物料栏新增物料
  if (designer.cloneWidget || designer.multipleWidget.size) {
    designer.addNewWidgetToContainer(widget)
  } else {
    // 触发移动物料
    designer.moveWidgetFromAToBContainer(e, widget)
  }
  // 记录位置
  designer.selectedWidget.index = e.newIndex
}

const onDragUpdate = (e) => {
  designer.dragUpdate(e)
}

const checkMove = (e) => {
  designer.checkMove(e)
}

const selectParent = () => {
    designer.selectWidget(props.parent, props.parentIndex)
}

const selectPreWidget = () => {
    designer.selectWidgetByWidgetListIndex(
    props.parent.cols,
    designer.selectedWidget.index - 1,
  )
}

const selectNextWidget = () => {
    designer.selectWidgetByWidgetListIndex(
    props.parent.cols,
    designer.selectedWidget.index + 1,
  )
}

const copySelfToParent = () => {
    designer.copyWidgetToContainer(props.widget, props.parent.cols)
}

const removeWidget = () => {
    designer.removeWidget(props.parent.cols)
}
</script>

<style lang="less" scoped>
.grid-col {
  position: relative;
  &.active {
    border: 2px solid #409eff;
  }
  &.unactive {
    border: 1px dashed black;
  }
}
.draggable {
  height: 100%;
}
.active-name {
  position: absolute;
  z-index: 3;
  color: #fff;
  top: 0;
  left: 0;
  display: inline-flex;
  align-items: center;
  background: #40a0ff;
  padding: 2px 5px;
  font-size: 12px;
}
.active-action {
  position: absolute;
  z-index: 3;
  color: #fff;
  bottom: 0;
  right: 0;
  display: inline-flex;
  background: #40a0ffea;
  padding: 5px 5px 5px 0;
  font-size: 16px;
  align-items: center;
  &:hover {
    cursor: pointer;
  }
  .el-icon {
    margin-left: 5px;
  }
}
</style>
