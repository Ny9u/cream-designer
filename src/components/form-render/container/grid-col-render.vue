<template>
  <el-col
    :span="widget.options.span"
    class="grid-col"
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
    >
      <div class="move" v-for="(subWidget, index) in widget.widgetList" :key="index">
        <component
          v-model:options="subWidget.options"
          :is="getRenderName(subWidget)"
          :widget="subWidget"
          :is-design="false"
          :designer="null"
          :parent="widget"
          :key="subWidget.options.propName"
        ></component>
      </div>
    </draggable>
  </el-col>
</template>

<script setup>
import { getRenderName } from '@/utils/tool'
import FieldComponents from '@/components/form-designer/form-widget/field-widget/index'
defineOptions({
  name: 'grid-col-render',
  components: {
    ...FieldComponents,
  },
})
defineProps({
  widget: {
    type: Object,
    default: () => {},
  },
  parentOption: {
    type: Object,
    default: () => {},
  },
  parent: {
    type: Object,
    default: () => {},
  },
})

</script>

<style lang="less" scoped>
.grid-col {
  position: relative;
  &.active {
    border: 2px solid #409eff;
  }
  &.unactive {
    border: 0.5px dashed black;
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
.active-delete {
  position: absolute;
  z-index: 3;
  color: #fff;
  bottom: 0;
  right: 0;
  display: inline-block;
  background: #40a0ffea;
  padding: 2px 5px;
  font-size: 12px;
  &:hover {
    cursor: pointer;
  }
}
</style>