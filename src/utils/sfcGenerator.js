import { html_beautify } from 'js-beautify/js/lib/beautify-html'
import { beautifierOpts } from '@/utils/beautifier.js'
import { Designer } from '@/components/form-designer/Designer'
const generateTemplate = (widgetList, formConfig) => {
	return `
  <el-form ref="${formConfig.formRefName}" label-width="${formConfig.formLabelWidth}">
      ${getTemplateStr({ widgetList, category: 'container' })}
  </el-form>`
}

const generateJavascript = (widgetList, formConfig) => {
	return `
    import { reactive, ref } from 'vue'
    const ${formConfig.formRefName} = ref()
    cosnt state = reactive({
      formData: ${Designer.GETJSON(widgetList, {})},
      rules: ${formConfig.rules}
    })
  `
}
// TODO: js的格式美化
export const sfcGenerator = ({ widgetList, formConfig }) => {
	const template = `<template>${generateTemplate(widgetList, formConfig)}
  </template>`
	const js = `<script setup> ${generateJavascript(
		{ widgetList },
		formConfig
	)}</script>`
	return html_beautify(template, beautifierOpts.html) + js
}
const getTemplateStr = (widget) => {
	let str = ''
	if (widget.category !== 'container') {
		return `<el-form-item label="${widget.options.label}" prop="${widget.options.propName}">
    <el-${widget.type} v-model="state.formData.${widget.options.propName}"></el-${widget.type}>
</el-form-item>\n`
	}

	const children = widget.cols ?? widget.widgetList
	if (widget.type === 'grid') {
		str += '<el-row>\n'
	}
	if (widget.type === 'grid-col') {
		str += `<el-col span=${widget.options.span}>\n`
	}
	for (let i of children) {
		str += getTemplateStr(i, str)
	}
	if (widget.type === 'grid') {
		str += '</el-row>\n'
	}
	if (widget.type === 'grid-col') {
		str += '</el-col>\n'
	}
	return str
}
