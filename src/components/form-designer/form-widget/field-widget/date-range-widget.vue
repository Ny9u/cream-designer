<template>
	<form-item-wrapper :widget="widget" :is-design="isDesign" :parent="parent">
		<el-date-picker
			v-model="state.optionsModel.value"
			type="daterange"
			range-separator="至"
			start-placeholder="开始日期"
			end-placeholder="结束日期"
			:placeholder="widget.options.placeholder"
			:readonly="widget.options.readonly"
			:disabled="options.disabled"
			:format="widget.options.format"
			@change="onChangeHandle"
		></el-date-picker>
	</form-item-wrapper>
</template>

<script setup>
	import { computed, reactive } from 'vue'
	import registerEvents from '../registerEvents'
	import formItemWrapper from './form-item-wrapper.vue'

	defineOptions({
		name: 'date-range-widget',
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
