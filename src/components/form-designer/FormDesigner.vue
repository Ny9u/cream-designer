<template>
	<div class="form-designer">
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
	import { provide, reactive } from 'vue'
	import { Designer } from './Designer'
	import WidgetPanel from './widget-panel/WidgetPanel'
	import FormWidget from './form-widget/FormWidget'
	import ToolBar from './tool-bar/ToolBar'
	import SettingPanel from './setting-panel/SettingPanel'

	const state = reactive({
		designer: new Designer({
			widgetList: JSON.parse(localStorage.getItem('widgetList') ?? '[]'),
			formConfig: JSON.parse(localStorage.getItem('formConfig') ?? '{}'),
		}),
	})
	provide('designer', state.designer)

	window.addEventListener('beforeunload', () => {
		localStorage.removeItem('widgetList')
		localStorage.removeItem('formConfig')
	})
</script>
<style scoped></style>
