<template>
	<el-dialog title="导入选项" width="80%" v-model="state.dialogVisible">
		<CodeEditor
			ref="codeEditorRef"
			mode="javascript"
			v-model="state.content"
			:placeholder="state.placeholder"
		/>
		<template #footer>
			<div>
				<el-button type="primary" @click="onSure">导 入</el-button>
				<el-button @click="onCancel">取 消</el-button>
			</div>
		</template>
	</el-dialog>
</template>

<script setup>
	import { reactive, computed, ref } from 'vue'
	import CodeEditor from '@/components/code-editor/index'
	import { ElMessage } from 'element-plus'
	const props = defineProps({
		showImportDialog: {
			type: Boolean,
			default: false,
		},
		content: {
			type: String,
			default: '',
		},
	})

	const codeEditorRef = ref(null)

	const emits = defineEmits(['update:showImportDialog', 'importItem'])

	const state = reactive({
		dialogVisible: computed({
			get() {
				if (props.showImportDialog) {
					state.content = props.content
				}
				return props.showImportDialog
			},
			set(v) {
				emits('update:showImportDialog', v)
			},
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
  `,
	})

	const onCancel = () => {
		state.dialogVisible = false
	}

	const onSure = () => {
		//格式检查
		const codeHints = codeEditorRef.value.getEditorAnnotations()
		if (codeHints && codeHints.length > 0) {
			for (let i of codeHints) {
				if (i.type === 'error' || i.type === 'info') {
					ElMessage({
						message: '导入的JSON格式错误，请检查',
						type: 'error',
					})
					return
				}
			}
		}
		emits('importItem', state.content)
		state.dialogVisible = false
	}
</script>

<style></style>
