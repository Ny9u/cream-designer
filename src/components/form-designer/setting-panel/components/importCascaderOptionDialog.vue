<template>
  <el-dialog v-model="state.showDialog" title="导入选项" width="80%">
    <code-editor
      ref="codeEditorRef"
      :placeholder="state.placeholder"
      mode="javascript"
      v-model="state.content"
    ></code-editor>
    <template #footer>
      <div class="dialog-footer text-center">
        <el-button type="primary" @click="onSureHandle">确定</el-button>
        <el-button @click="onCloseHandle">关闭</el-button>
      </div>
    </template>
  </el-dialog>
</template>
<script setup>
import { computed, reactive, ref } from 'vue'
import CodeEditor from '@/components/code-editor/index.vue'
import { ElMessage } from 'element-plus'
const props = defineProps({
  showImportItemDialog: {
    type: Boolean,
    default: false
  },
  content: {
    type: String,
    default: ''
  }
})
const emits = defineEmits(['update:showImportItemDialog', 'importItem'])

const state = reactive({
  showDialog: computed({
    get() {
      if (props.showImportItemDialog) {
        // eslint-disable-next-line vue/no-side-effects-in-computed-properties
        state.content = props.content
      }
      return props.showImportItemDialog
    },
    set(v) {
      emits('update:showImportItemDialog', v)
    }
  }),
  content: '',
  placeholder: `
   样例：[{
    "label": "A",
    "value": "a",
    "children": [{
      "label": "A-1",
      "value": "a-1"
    }] 
   }]
  `
})
const codeEditorRef = ref(null)
const onSureHandle = () => {
  const codeHints = codeEditorRef.value.getEditorAnnotations()
  if (codeHints && codeHints.length > 0) {
    for (let i of codeHints) {
      if (i.type === 'error' || i.type === 'info') {
        ElMessage({
          message: '导入的JSON格式错误，请检查',
          type: 'error'
        })
        return
      }
    }
  }
  state.showDialog = false
  emits('importItem', state.content)
}

const onCloseHandle = () => {
  state.showDialog = false
}
</script>
