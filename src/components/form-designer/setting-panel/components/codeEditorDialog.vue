<template>
  <el-dialog v-model="state.showCodeDialog" :title="title" width="80%">
    <!-- 用来提示使用者，编写代码时只用编写方法体 -->
    <el-alert type="info" :closable="false" :title="state.preInfo"></el-alert>
    <code-editor mode="javascript" v-model="state.code"></code-editor>
    <el-alert type="info" :closable="false" title="}"></el-alert>
    <template #footer>
      <div class="dialog-footer text-center">
        <el-button type="primary" @click="onSureHandle">确定</el-button>
        <el-button @click="onCloseHandle">关闭</el-button>
      </div>
    </template>
  </el-dialog>
</template>
<script setup>
import { computed, reactive } from 'vue'

import CodeEditor from '@/components/code-editor/index.vue'
const props = defineProps({
  showCodeDialog: {//是否打开代码框
    type: Boolean,
    default: false
  },
  designer: {
    type: Object,
    default: () => {}
  },
  title: {
    type: String,
    default: ''
  },
  code: {
    type: String,
    default: ''
  },
  tip: {
    type: String,
    default: ''
  }
})
const emits = defineEmits(['update:showCodeDialog', 'update:code'])

const state = reactive({
  showCodeDialog: computed({//是否打开代码框
    get() {
      return props.showCodeDialog
    },
    set(v) {
      emits('update:showCodeDialog', v)
    }
  }),
  code: computed({
    get() {
      return props.code
    },
    set(v) {
      emits('update:code', v)
    }
  }),
  preInfo: computed(() => {
    return `${props.designer.getSeletedWidgetOptions().propName}${props.tip}` //TODO: 表单事件不应该是当前选中物料的属性名作为前缀，有空再改
  })
})
const onSureHandle = () => {
  state.showCodeDialog = false
  props.designer.eventChange()//借助designer实现代码保存
}
// eslint-disable-next-line vue/no-setup-props-destructure
const oCode = props.code
const onCloseHandle = () => {
  state.code = oCode//恢复默认代码
  state.showCodeDialog = false
}
</script>
