<template>
    <el-dialog title="导入json" v-model="state.showImportJsonDialog">
        <el-alert
            type="info"
            :closable="false"
            title="导入的JSON内容须符合下述格式，以保证顺利导入."
        ></el-alert>
        <CodeEditor
            ref="codeEditorRef"
            :placeholder="state.placeholder"
            mode="javascript"
            v-model="state.json" 
        ></CodeEditor>
        <template #footer>
            <div>
                <el-button type="primary" @click="saveImport">确认</el-button>
                <el-button @click="close">关闭</el-button>
            </div>
        </template>
    </el-dialog>
</template>

<script setup>
import { reactive ,computed, ref} from "vue";
import CodeEditor from "@/components/code-editor/index.vue";
import { ElMessage } from "element-plus";
const props = defineProps({
  showImportJsonDialog:{
    type: Boolean,
    default: false
  },
  code: {
    type: String,
    default: "",
  },
})

const emits = defineEmits(['update:showImportJsonDialog', 'importJSON'])

const state=reactive({
    showImportJsonDialog: computed({
        get() {
            return props.showImportJsonDialog
        },
        set(v) {
            emits('update:showImportJsonDialog', v)
        }
    }),
    json: '',
    placeholder: `样例：[{
        "label": "A",
        "value": "a",
        "children": [{ "label": "A-1", "value": "a-1"}] 
        }]`
})

const codeEditorRef = ref(null)
const saveImport = () =>{
    const codeHints = codeEditorRef.value.getEditorAnnotations()
    if (codeHints && codeHints.length > 0) {
        for (let i of codeHints) {
        console.log(i)
        if (i.type === 'error' || i.type === 'info') {
            ElMessage({
            message: '导入的JSON格式错误，请检查',
            type: 'error'
            })
            return
        }
        }
    }
    state.showImportJsonDialog = false
    emits('importJSON', state.json)
}

const close = () =>{
    state.showImportJsonDialog=false;
}

</script>

<style scoped>
</style>
