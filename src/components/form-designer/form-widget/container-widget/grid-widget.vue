<template>
	<container-wrapper :widget="widget" :isDesign="isDesign">
		<div>
			<el-row :gutter="widget.options.gutter">
				<gridColWidget
					:key="item.id"
					v-for="(item, idx) in widget.cols"
					:parent-option="options"
					:index="idx"
					:parent="widget"
					:parent-index="index"
					:widget="item"
					:is-design="isDesign"
				/>
			</el-row>
		</div>
	</container-wrapper>
</template>

<script setup>
	import containerWrapper from './container-wrapper.vue'
	import gridColWidget from './grid-col-widget.vue'

	defineOptions({
		name: 'grid-widget',
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
		index: {
			type: Number,
			default: 0,
		},
	})
</script>

<style lang="less" scoped></style>
