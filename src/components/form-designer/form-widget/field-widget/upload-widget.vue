<template>
	<form-item-wrapper :widget="widget" :is-design="isDesign" :parent="parent">
		<el-upload
			class="avatar-uploader"
			drag
			:action="options.action"
			multiple
			:on-success="onSuccessHandle"
			:before-upload="onbeforeunloadHandle"
			:disabled="options.disabled"
		>
			<img src="@/assets/upload.svg" alt="上传" />
			<div class="el-upload__text">
				将文件拖到此处，或
				<em>点击上传</em>
			</div>
			<div class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
		</el-upload>
	</form-item-wrapper>
</template>

<script setup>
	import formItemWrapper from './form-item-wrapper.vue'
	import { reactive, computed } from 'vue'
	import registerEvents from '../registerEvents'

	defineOptions({
		name: 'upload-widget',
		mixins: [registerEvents],
	})

	const props = defineProps({
		widget: {
			type: Object,
			default: () => {},
		},
		isDesign: {
			type: Boolean,
			default: true,
		},
		options: {
			type: Object,
			default: () => {},
		},
		parent: {
			type: Object,
			default: () => {},
		},
	})

	const emits = defineEmits(['update:options'])

	const state = reactive({
		optionsModel: computed({
			get() {
				return props.options
			},
			set(v) {
				emits('update:options', v)
			},
		}),
	})
</script>
