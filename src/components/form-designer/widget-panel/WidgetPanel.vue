<template>
  <div class="widget-panel padding-8">
    <el-collapse v-model="state.activeNames" >
        <!-- 容器 -->
        <el-collapse-item title="容器" name="1"> 
            <draggable
                class="draggable"
                v-model="containerFields"
                chosenClass="chosen"
                forceFallback="true"
                :group="{ name: 'dragGroup', pull: 'clone', put: false }"
                animation="1000"
                itemKey="type"
                :move="checkFieldMove"
                :clone="handleWidgetClone"
                ghost-class="ghost"
                :sort="false"
            >
            <template #item="{ element }"> 
                <div
                    v-if="!element.hidden"
                    class="item move"
                    @dblclick="addFieldByDbClick(element)"
                >
                <el-icon>
                    <component :is="element.icon" />
                </el-icon>
                {{ element.displayName }}
                </div>
            </template> <!--每一个小方格 -->     
           </draggable>
        </el-collapse-item><!--收纳盒-->

        <!-- 基础物料 -->
        <el-collapse-item title="基础物料" name="2">
            <draggable
                class="draggable"
                v-model="basicFields"
                chosenClass="chosen"
                forceFallback="true"
                :group="{ name: 'dragGroup', pull: 'clone', put: false }"
                animation="1000"
                itemKey="type"
                :move="checkFieldMove"
                :clone="handleWidgetClone"
                ghost-class="ghost"
                :sort="false"      
            >
            
            <template #item="{ element }"> 
            <div
              class="item move"
              @mouseup="choiceOver"
              @mousedown="multipleChoice($event, element)"
              @dblclick="addFieldByDbClick(element)"
            >
              <el-icon>
                <component :is="element.icon" />
              </el-icon>
              {{ element.displayName }}
            </div>
           </template>
           </draggable>
        </el-collapse-item>

        <!-- 高级物料 -->
        <el-collapse-item title="高级物料" name="3">
            <draggable
                class="draggable"
                v-model="advanceFields"
                chosenClass="chosen"
                forceFallback="true"
                :group="{ name: 'dragGroup', pull: 'clone', put: false }"
                animation="1000"
                itemKey="type"
                :move="checkFieldMove"
                :clone="handleWidgetClone"
                ghost-class="ghost"
                :sort="false"
            >
            <template #item="{ element }"> 
            <div
              class="item move"
              @mouseup="choiceOver"
              @mousedown="multipleChoice($event, element)"
              @dblclick="addFieldByDbClick(element)"
            >
              <el-icon>
                <component :is="element.icon" />
              </el-icon>
              {{ element.displayName }}
            </div>
           </template>
           </draggable>
        </el-collapse-item>
    </el-collapse> 
  </div>
</template>

<script setup>

import { reactive , inject, onMounted} from 'vue'
import draggable from 'vuedraggable'
import { containerFields, basicFields, advanceFields} from './widgetConfig'

const designer = inject('designer')

const state = reactive({
  activeNames: ['1', '2', '3'],// 默认展开的面板
  drag: false,
  cloneSel: [], // 克隆选中的物料节点，用来多选拖拽时跟随移动
  originX: '',
  originY: '',
})

//组件移动时的回调
const checkFieldMove = (e) => {
  console.log(e, '物料发生拖拽')
}
//组件移动时(展示区->工作区)需要克隆,交由designer处理
const handleWidgetClone = (e) => {
  designer.handleWidgetClone(e)//接受参数为组件
}
//双击添加到工作区,交由designer处理
const addFieldByDbClick = (widget) => {
  designer.addFieldByDbClick(widget)
}

const multipleChoice = (e, widget) => {
  const element = e.target
  const allEle = document.querySelectorAll('.move')
  // 按住ctrl或者command多选
  if (e.ctrlKey || e.metaKey) {
    if (designer.multipleWidget.has(widget)) {
      element.classList.remove('selected')
      designer.multipleWidget.delete(widget)
    } else {
      element.classList.add('selected')
      designer.multipleWidget.add(widget)
    }
  } else {
    // 若当前元素被选中，进入拖拽模式
    state.originX = e.clientX
    state.originY = e.clientY
    if (designer.multipleWidget.has(widget)) {
      // 拖拽时模拟多选元素效果（因为vuedraggable只支持拖拽当前选中元素）
      // 获取所有非当前点击的元素(多选时除点击外的其他元素)
      const allSel = [...document.querySelectorAll('.move.selected')].filter(
        (item) => item !== e.target,
      )
      if (!allSel.length) return
      const father = document.querySelector('.widget-panel')
      // 复制选中的节点
      state.cloneSel = allSel.map((item) => {
        const newNode = item.cloneNode(true)
        const { offsetLeft, offsetTop, offsetWidth, offsetHeight } = item
        newNode.style.position = 'fixed'
        newNode.style.zIndex = '10'
        newNode.style.left = offsetLeft + 'px'
        newNode.style.top = offsetTop + 'px'
        newNode.style.width = offsetWidth + 'px'
        newNode.style.height = offsetHeight + 'px'
        newNode.style.opacity = '0.5'
        newNode.originX = offsetLeft
        newNode.originY = offsetTop
        father.appendChild(newNode)
        return newNode
      })
      // 监听鼠标移动事件，更新元素位置
      window.addEventListener('mousemove', updateClonePos)
    } else {
      // 单选模式，清除所有选中项，选中当前项
      allEle.forEach((item) => {
        item.classList.remove('selected')
        designer.multipleWidget.clear()
      })
      element.classList.add('selected')
      designer.multipleWidget.add(widget)
    }
  }
}
const updateClonePos = () => {
  // 拖动时更新元素位置
  const { clientX, clientY } = e//鼠标对于视口的坐标
  state.cloneSel.forEach((item) => {
    const { originX, originY } = item//物料原始位置
    item.style.left = originX + clientX - state.originX + 'px'// state.originX 记录开始拖动时的坐标
    item.style.top = originY + clientY - state.originY + 'px'
  })
  //单选时origin和state的值相同,故鼠标在哪元素就在哪
}
const addEventsListener = () => {
  // 生成物料后触发，清除多选效果和数据
  window.addEventListener('select_widget', clearWidgetChoice)
  // 监听鼠标抬起事件，移除元素
  window.addEventListener('click', choiceOver)
}
const clearWidgetChoice = () => {
  const allEle = document.querySelectorAll('.move')
  allEle.forEach((item) => {
    item.classList.remove('selected')
    designer.multipleWidget.clear()
  })
  choiceOver()
}
// 移除浮动元素,鼠标抬起时调用
const choiceOver = () => {
  state.cloneSel.forEach((item) => item.remove())
  state.cloneSel = []
  window.removeEventListener('mousemove', updateClonePos)//选完就把监听器给关了
}
onMounted(() => {
  addEventsListener()
})


</script>

<style scoped>
.draggable {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
}
.item.move {
  width: 49%;
  box-sizing: border-box;
  height: 25px;
  cursor: move;
  padding: 0 10px;
  height: 32px;
  margin-bottom: 10px;
  border: 1px solid #e8e9eb;
  border-radius: 4px;
  font-size: 13px;
  display: flex;
  align-items: center;
  /*.el-icon {
    margin-right: 5px;
  }
  &.selected {
    border: 2px dashed #409eff;
  }*/
}
</style>