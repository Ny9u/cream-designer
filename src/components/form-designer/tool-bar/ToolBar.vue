<template>
  <div class="container">
    <div>
      <el-button type="primary" plain :disabled="!state.canUndo" @click="Undo">
        撤销
      </el-button>
      <el-button type="primary" plain :disabled="!state.canRedo" @click="Redo">
        重做
      </el-button>
    </div>
    <div>
      <el-button type="primary" plain @click="clearForm">清空表单</el-button>
      <el-button type="primary" plain @click="showPreviewDialog">预览效果</el-button>
      <el-button type="primary" plain @click="showImportJsonDialog">导入JSON</el-button>
      <el-button type="primary" plain @click="showExportJsonDialog">导出JSON</el-button>
      <el-button type="primary" plain @click="showExportSFCCode">导出代码</el-button>
      <el-button type="primary" plain @click="showCreateSFC">生成SFC</el-button>
    </div>
  </div>
     <!-- 预览效果 -->
    <div v-if="state.showPreviewDialog">
      <PreviewDialog
        :designer="designer"
        v-model:showPreviewDialog="state.showPreviewDialog" 
      ></PreviewDialog>
      <!--原型:showPreviewDialog="parentShowPreviewDialog" @update:showPreviewDialog="(newValue) => parentShowPreviewDialog = newValue" /> -->
    </div>
    <div v-if="state.showImportJsonDialog">
      <ImportJsonDialog
        :designer="designer"
        v-model:showImportJsonDialog="state.showImportJsonDialog" 
        @importJSON="importJSONHandle"
      ></ImportJsonDialog>
    </div>
    <div v-if="state.showCodeDialog">
      <ExportJsonDialog
        :title="state.title"
        :mode="state.mode"
        :userWorker="state.userWorker"
        :code="state.code"
        v-model:showCodeDialog="state.showCodeDialog" 
      ></ExportJsonDialog>
    </div>
</template>
<script setup>
import { computed, inject ,reactive } from "vue";
import PreviewDialog from './components/previewDialog.vue'
import ImportJsonDialog from './components/importJsonDialog.vue'
import ExportJsonDialog from './components/showCodeDialog.vue'
import {generateCode} from "@/utils/codeGenerator.js";
import {sfcGenerator} from '@/utils/sfcGenerator.js'

const designer = inject("designer");

const state=reactive({
  canUndo:computed(()=> designer.command.canUndo()),
  canRedo:computed(()=> designer.command.canRedo()),
  showPreviewDialog: false,
  showImportJsonDialog: false,
  showCodeDialog: false,
  title: '',
  mode: '',
  userWorker: true,
  code: ''
})

const Undo=()=>{
  designer.command.undo()
}

const Redo=()=>{
  designer.command.redo();
}

const clearForm=()=>{
  designer.clearWidget();
}

const showPreviewDialog=()=>{
  state.showPreviewDialog=true;
}

const showImportJsonDialog=()=>{
  state.showImportJsonDialog=true
  state.code = JSON.stringify(//转为json字符串
    {
      widgetList: designer.widgetList,
      formConfig: designer.formConfig,
    },
    null,
    '  ',
  )
}

const importJSONHandle = (v) => {
  const data = JSON.parse(v)//字符串解析为json字符串
  designer.addWidgetListByJSON(data)
}

const showExportJsonDialog=()=>{
  // 处理掉render时不需要的属性
  const { widgetList } = handleWidgetList(designer)
  // 需要格式化JSON字符串，否则编辑插件显示不换行
  state.code = JSON.stringify(//转为json字符串
    {
      widgetList,
      formConfig: designer.formConfig,
    },
    null,
    '  ',
  )
  state.title = '导出JSON'
  state.mode = 'json'
  state.showCodeDialog=true
}

const handleWidgetList = (widget) => {
  const { type, options, category } = widget
  const data = {
    type,
    options,
    category,
  }
  const children = widget.cols ?? widget.widgetList ?? []
  if (widget.cols) data.cols = []
  if (widget.widgetList) data.widgetList = []
  for (let i of children) {
    data.cols
      ? data.cols.push(handleWidgetList(i))
      : data.widgetList.push(handleWidgetList(i))
  }
  return data
}

const showExportSFCCode=()=>{
  state.showCodeDialog=true
  state.title= '导出代码'
  state.mode= 'html'
  state.userWorker= false
  state.code = generateCode({
    widgetList: designer.widgetList,
    formConfig: designer.formConfig,
  })
}

const showCreateSFC=()=> {
  state.showCodeDialog=true
  state.title= '生成SFC'
  state.mode= 'html'
  state.userWorker= false
  state.code = sfcGenerator({
    widgetList: designer.widgetList,
    formConfig: designer.formConfig,
  })
}

</script>

<style>
.container {
  display: flex;
  justify-content: space-between;
  padding: 10px;
}

</style>
