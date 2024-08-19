<template>
	<form-item-wrapper :widget="widget" :is-design="isDesign" :parent="parent">
		<el-time-picker
			v-model="state.optionsModel.value"
			:picker-options="{
				selectableRange: '00:00:00 - 23:59:59',
			}"
			:placeholder="widget.options.placeholder"
			:readonly="widget.options.readonly"
			:disabled="options.disabled"
			:format="widget.options.format"
			@focus="onFocusHandle"
			@blur="onBlurHandle"
			@change="onChangeHandle"
			@visible-change="onVisibleChangeHandle"
		></el-time-picker>
	</form-item-wrapper>
</template>

<script setup>
	import formItemWrapper from './form-item-wrapper.vue'
	import registerEvents from '../registerEvents'
	import { reactive, computed } from 'vue'

	defineOptions({
		name: 'time-widget',
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
		parent: {
			type: Object,
			default: () => {},
		},
		options: {
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
