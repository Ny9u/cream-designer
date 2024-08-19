<template>
	<form-item-wrapper :widget="widget" :is-design="isDesign" :parent="parent">
		<el-rate
			v-model="state.optionsModel.value"
			show-text
			:texts="array"
			:disabled="options.disabled"
			@change="onChangeHandle"
		></el-rate>
	</form-item-wrapper>
</template>

<script setup>
	import { computed, reactive } from 'vue'
	import registerEvents from '../registerEvents'
	import formItemWrapper from './form-item-wrapper.vue'

	const array = ['一星', '二星', '三星', '四星', '五星']

	defineOptions({
		name: 'rate-widget',
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
