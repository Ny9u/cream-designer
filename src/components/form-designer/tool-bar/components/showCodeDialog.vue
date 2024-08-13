<template>
  <el-dialog v-model="state.showCodeDialog" :title="title" width="80%">
    <code-editor
      :mode="mode"
      :readonly="true"
      v-model="state.code"
      :user-worker="userWorker"
    ></code-editor>
    <template #footer>
      <div>
        <el-button type="primary" @click="copyJSONtoClipboard">复制文本</el-button>
        <el-button type="primary" @click="exportAsFile">保存为文件</el-button>
        <el-button @click="state.showCodeDialog = false">关闭</el-button>
      </div>
    </template>
  </el-dialog>
</template>
<script setup>
import { computed, reactive } from 'vue'
import { dayjs } from 'element-plus'
import { saveJSONAsFile } from '@/utils/tool'
import { ElMessage } from 'element-plus'
import CodeEditor from '@/components/code-editor/index.vue'

const props = defineProps({
  showCodeDialog: {
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
  mode: {
    type: String,
    default: 'json'
  },
  userWorker: {
    type: Boolean,
    default: true
  }
})
const emits = defineEmits(['update:showCodeDialog', 'update:code'])
const state = reactive({
  showCodeDialog: computed({
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
  })
})
const copyJSONtoClipboard = () => {
  navigator.clipboard
    .writeText(state.code)
    .then(() => {
      ElMessage({
        message: '复制成功',
        type: 'success'
      })
    })
    .catch(() => {
      ElMessage({
        message: '复制失败',
        type: 'warning'
      })
    })
}
const exportAsFile = () => {
  const fileName = dayjs().format('YYYY-MM-DD HH：mm：ss')
  saveJSONAsFile(state.code, fileName + `.${props.mode == 'json' ? 'json' : 'vue'}`)
}
</script>
