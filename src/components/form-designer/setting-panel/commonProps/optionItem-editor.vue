<template>
	<el-form-item label-width="0">
		<el-divider content-position="center">选项设置</el-divider>
		<el-radio-group v-model="state.optionModel.value">
			<div
				class="option-item"
				v-for="(item, idx) in state.optionModel.optionItem"
				:key="item.value"
			>
				<el-radio :label="item.value">&nbsp;</el-radio>
				<el-input v-model="item.label"></el-input>
				<el-input v-model="item.value"></el-input>
				<div class="circle" @click="removeItem(idx)">✕</div>
			</div>
		</el-radio-group>
		<div class="action">
			<span @click="insetItem">增加选项</span>
			<span @click="importItem">导入选项</span>
		</div>
		<ImportItemDialog
			@importItem="importItemHandle"
			:content="state.content"
			v-model:showImportItemDialog="state.showImportItemDialog"
		/>
	</el-form-item>
</template>

<script setup>
	import { reactive, computed } from 'vue'
	import ImportItemDialog from '../components/importItemDialog.vue'
	import { ElMessage } from 'element-plus'
	defineOptions({
		name: 'optionItem-editor',
	})

	const props = defineProps({
		optionModel: {
			type: Object,
			default: () => {},
		},
	})

	const state = reactive({
		optionModel: computed(() => props.optionModel),
		showImportItemDialog: false,
		content: computed({
			get() {
				let str = ''
				props.optionModel.optionItem.forEach((item) => {
					str = `${str}${item.label},${item.value}\n`
				})
				return str
			},
			set(v) {
				console.log(v)
			},
		}),
	})

	const removeItem = (idx) => {
		const item = state.optionModel.optionItem.splice(idx, 1)
		// state.optionModel.value即选中项
		if (item.value == state.optionModel.value) {
			state.optionModel.value = ''
		}
	}

	const insetItem = () => {
		state.optionModel.optionItem.push({
			label: '',
			value: '',
		})
	}

	const importItem = () => {
		state.showImportItemDialog = true
	}

	const importItemHandle = (content) => {
		const items = content.split('\n')
		const optionItem = []
		let flag = true
		items.forEach((item) => {
			if (item) {
				const idx = item.indexOf(',')
				if (idx < 0) {
					ElMessage({
						message: '导入格式不正确',
						type: 'error',
					})
					flag = false
				}
				const label = item.slice(0, idx)
				const value = item.slice(idx + 1)
				optionItem.push({
					label,
					value,
				})
			}
		})
		if (flag) {
			state.optionModel.optionItem = optionItem
		}
	}
</script>

<style lang="less" scoped>
	.option-item {
		display: flex;
		align-items: center;
		margin-bottom: 10px;
		.el-radio {
			margin-right: 0;
		}
		.el-input {
			width: 90px;
		}
		.circle {
			width: 22px;
			height: 22px;
			border-radius: 60%;
			background: rgba(223, 150, 150, 0.226);
			border: 1px solid rgba(223, 150, 150, 0.562);
			color: rgb(215, 68, 68);
			font-size: 16px;
			display: flex;
			justify-content: center;
			align-items: center;
			cursor: pointer;
			margin-left: 5px;
		}
	}

	.action {
		font-size: 12px;
		display: flex;
		justify-content: space-around;
		width: 100%;
		span {
			cursor: pointer;
			color: #409eff;
		}
	}
</style>
