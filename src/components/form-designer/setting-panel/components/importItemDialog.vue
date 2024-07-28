<template>
  <el-dialog v-model="state.showDialog" title="导入选项" width="80%">
    <el-input
      :rows="10"
      placeholder="格式：每行输入一条label,value"
      type="textarea"
      v-model="state.content"
    ></el-input>
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
  content: ''
})

const onSureHandle = () => {
  state.showDialog = false
  emits('importItem', state.content)
}

const onCloseHandle = () => {
  state.showDialog = false
}
</script>
