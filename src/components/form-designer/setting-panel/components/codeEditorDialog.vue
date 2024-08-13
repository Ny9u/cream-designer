<template>
  <el-dialog v-model="state.showCodeDialog" wirth="80%" :title="props.title" @close="onCancel">
    <CodeEditor
    mode="javascript"
    v-model="state.code"
    />
    <template #footer>
      <el-button type="primary" @click="onSure">确 定</el-button>
      <el-button @click="onCancel">取 消</el-button>
    </template>
  </el-dialog>
</template>

<script setup>
import {reactive, computed} from 'vue'
import CodeEditor from '@/components/code-editor/index'

const props = defineProps({
  showCodeDialog: {
    type: Boolean,
    default: false
  },
  code: {
    type: String,
    default: ''
  },
  title:{
    type: String,
    default: ''
  },
  tip:{
    type: String,
    default: ''
  },
  designer:{
    type: Object,
    default: () => {}
  }
})
const emits = defineEmits(['update:showCodeDialog', 'update:code'])

const state = reactive({
  showCodeDialog: computed({
    get(){
      return props.showCodeDialog
    },
    set(value){
      emits('update:showCodeDialog', value)
    }
  }),
  code: computed({
    get(){
      return props.code
    },
    set(value){
      emits('update:code', value)
    }
  }),
})
const originCode = state.code

const onCancel= () => {
  state.code = originCode
  state.showCodeDialog = false
}

const onSure = () => {
  //props.designer.eventChange()
  state.showCodeDialog = false
}

</script>

<style>

</style>