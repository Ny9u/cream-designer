<template>
    <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="组件配置" name="first">
            <el-scrollbar :height="state.scrollHeight">
                <el-form :model="designer.getSeletedWidgetOptions()">
                    <el-collapse v-model="state.activeCollapse">
                      <!-- 遍历普通属性和事件属性 -->
                      <el-collapse-item
                        :key="index"
                        v-for="(propertyList, index) in state.widgetPropertyLists"
                        :title="propertyList.name"
                        :name="index"
                      >
                        <!-- 遍历拥有的属性 -->
                        <div
                          v-for="propKey in propertyList.propertys"
                          :key="Math.random() + propKey"
                        >
                          <!-- 当前组件存在该属性才展示对应的属性编辑器 -->
                          <component
                            :key="Math.random() + propKey"
                            v-if="hasEditProp(propKey)"
                            :is="getEditorName(propKey)"
                            :optionModel="designer.selectedWidget.options"
                            :designer="designer"
                            :widget="designer.selectedWidget"
                            @editEventProp="editEventProp"
                          ></component>
                        </div>
                      </el-collapse-item>
                    </el-collapse>
                </el-form>
            </el-scrollbar>
        </el-tab-pane>
        <el-tab-pane label="表单配置" name="second">
            <el-scrollbar>
                <el-form>
                     <el-collapse v-model="state.activeCollapse">
                        <el-collapse-item
                          :key="index"
                          v-for="(propertyList, index) in state.formPropertyLists"
                          :title="propertyList.name"
                          :name="index"
                        >
                          <div v-for="propKey in propertyList.propertys" :key="propKey">
                            <component
                              :is="getEditorName(propKey)"
                              :optionModel="designer.formConfig"
                              :designer="designer"
                              @editEventProp="editEventProp"
                            ></component>
                          </div>
                        </el-collapse-item>
                      </el-collapse>
                </el-form>
            </el-scrollbar>
        </el-tab-pane>
    </el-tabs>
</template>
<script setup>
import { inject ,reactive, computed, onMounted} from "vue";
import CommonProps from './commonProps/index'
import EventProps from './eventProps/index'
import {COMMON_PROPERTIES ,EVENT_PROPERTIES} from './propertyRegister'


const designer=inject('designer')

defineOptions({
  components: {
    ...CommonProps,
    ...EventProps,
  },
})

const state = reactive({
  optionModel: computed(() => {
    if (state.activeTab === '组件配置') {
      return designer.selectedWidget?.options
    } else {
      return designer.formConfig
    }
  }),
  activeTab: '组件配置',
  activeCollapse: 0,
  scrollHeight: 0,
  widgetPropertyLists: [
    {
      name: '普通属性',
      propertys: [],
    },
    {
      name: '事件属性',
      propertys: [],
    },
  ],
  formPropertyLists: [
    {
      name: '普通属性',
      propertys: [],
    },
    {
      name: '事件属性',
      propertys: [],
    },
  ],
  showCodeDialog: false, // 事件属性展示编辑器
  codeDialogTitle: '',
  codeDialogTip: '',
})

onMounted(() => {
  addEventsListener()
  initFormPropertys()
  computedHeight()
})

const addEventsListener = () => {
  // 监听选中物料事件触发，用于更新当前物料的属性编辑器
  window.addEventListener('select_widget', getPropertys)
  window.addEventListener('resize', computedHeight)
}

// 获取当前选中组件的属性编辑组件
const getPropertys = () => {
  const options = designer.getSeletedWidgetOptions()
  // eslint-disable-next-line no-prototype-builtins
  const commonProp = Object.keys(options).filter((item) =>
    COMMON_PROPERTIES.includes(item),
  )
  // eslint-disable-next-line no-prototype-builtins
  const eventProp = Object.keys(options).filter((item) =>
    EVENT_PROPERTIES.includes(item),
  )
  state.widgetPropertyLists[0].propertys = commonProp
  state.widgetPropertyLists[1].propertys = eventProp
  
}

const computedHeight = () => {
  state.scrollHeight = window.innerHeight - 75 + 'px'
}

// 初始化表单配置
const initFormPropertys = () => {
  const commonProp = Object.keys(designer.formConfig).filter(
    (item) => !!COMMON_PROPERTIES.includes(item),
  )
  const eventProp = Object.keys(designer.formConfig).filter(
    (item) => !!EVENT_PROPERTIES.includes(item),
  )
  state.formPropertyLists[0].propertys = commonProp
  state.formPropertyLists[1].propertys = eventProp
}
const hasEditProp = (name) => {
  const editorName = getEditorName(name)
  return !!(CommonProps[editorName] ?? EventProps[editorName])
}
const getEditorName = (name) => {
  // 判断是否有以该物料type为前缀的属性组件，有则返回该组件，若没有则使用通用属性组件
  const editorName = `${designer.selectedWidget?.type}-${name}-editor`
  const hasComponent = CommonProps[editorName] ?? EventProps[editorName]
  if (hasComponent) return editorName
  return name + '-editor'
}
</script>

<style lang="less" scoped>

</style>
