<template>
  <div class="form-designer" style="width: 100%">
    <el-row justify="space-between">
        <el-col :span="4">
            <widget-panel></widget-panel>
        </el-col>
        <el-col :span="15">
            <tool-bar></tool-bar>
            <form-widget></form-widget>
        </el-col>
        <el-col :span="4">
            <setting-panel></setting-panel>
        </el-col>
    </el-row>
  </div>
</template>

<script setup>
import { provide, reactive, onMounted }  from 'vue'
import { Designer } from './Designer'
import WidgetPanel from './widget-panel/WidgetPanel'
import FormWidget from './form-widget/FormWidget'
import ToolBar from './tool-bar/ToolBar'
import SettingPanel from './setting-panel/SettingPanel'

const state = reactive({
  designer: new Designer({
    widgetList: JSON.parse(localStorage.getItem('widgetList') ?? '[]'),
    formConfig: JSON.parse(localStorage.getItem('formConfig') ?? '{}')
  })
})
provide('designer', state.designer)

window.addEventListener('beforeunload', () => {
   localStorage.setItem('formJSON', JSON.stringify(state.designer))
 })
onMounted(() => {
   if (localStorage.getItem('formJSON')) {
     const formJSON = JSON.parse(localStorage.getItem('formJSON') ?? '{}')
     state.designer.widgetList = formJSON.widgetList
     state.designer.formConfig = formJSON.formConfig
   }
})

</script>
<style scoped>
  .bg-purple-dark {
    background: #99a9bf;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  
</style>