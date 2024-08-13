<template>
  <div 
    class="container-wrapper" 
    :class="[
      widget == designer.selectedWidget && isDesign ? 'active' : 'unactive',
    ]"
  >
    <slot></slot>
    <div class="active" v-if="widget == designer.selectedWidget && isDesign">
        <div class="active-title">
            <el-icon><Rank /></el-icon>
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
  </div>
</template>

<script setup>
import { inject } from 'vue'
import { ElMessage } from 'element-plus'

defineOptions({
  name: 'container-wrapper'
})

const designer = inject('designer')
const props = defineProps({
    widget: {
        type: Object,
        default: () => {}
    },
    isDesign: {
        type: Boolean,
        default: true
    },
    parent: {
        type: Object,
        default: () => {}
    },
    parentIndex: {
        type: Number,
        default: 0,
    },
})

const selectParent = () => {
    if (props.parent === designer) {
        ElMessage('当前已是最顶层')
        return
    }
    designer.selectWidget(props.parent, props.parentIndex)
}

const selectPreWidget = () => {
    designer.selectWidgetByWidgetListIndex(
    props.parent.widgetList,
    designer.selectedWidget.index - 1,
  )
}

const selectNextWidget = () => {
    designer.selectWidgetByWidgetListIndex(
    props.parent.widgetList,
    designer.selectedWidget.index + 1,
  )
}

const copySelfToParent = () => {
    designer.copyWidgetToContainer(props.widget, props.parent.widgetList)
}

const removeWidget = () => {
    designer.removeWidget(props.parent.widgetList)
}
</script>

<style lang="less" scoped>
.container-wrapper {
  padding: 4px;
  position: relative;
  margin-bottom: 10px;
  &.active {
    border: 2px solid #409eff;
  }
  &.unactive {
    border: 1px dashed black;
  }
  :deep(.el-form-item) {
    position: relative;
    margin: 0;
    z-index: 2;
  }    
}

.active-title{
    position: absolute;
    z-index: 3;
    color: #fff;
    top: 0;
    left: 0;
    display: inline-flex;
    align-items: center;
    background: #40a0ff79;
    padding: 2px 5px;
    font-size: 12px;
    &:hover {
      background: #40a0ff;
      cursor: move;
    }
}

.active-action{
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