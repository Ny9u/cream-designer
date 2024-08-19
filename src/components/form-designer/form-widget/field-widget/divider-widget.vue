<template>
	<form-item-wrapper :widget="widget" :is-design="isDesign" :parent="parent">
		<el-divider
			:content-position="options.contentPosition"
			:direction="options.direction"
			:border-style="options.borderStyle"
		>
			{{ options.defaultValue }}
		</el-divider>
	</form-item-wrapper>
</template>

<script setup>
	import formItemWrapper from './form-item-wrapper.vue'
	import registerEvents from '../registerEvents'

	defineOptions({
		name: 'divider-widget',
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
</script>
