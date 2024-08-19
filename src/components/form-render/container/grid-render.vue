<template>
	<container-wrapper :widget="widget">
		<div class="grid-render">
			<el-row>
				<gridColWidget
					:key="item.id"
					v-for="item in props.widget.cols"
					:parent-option="options"
					:parent="widget"
					:widget="item"
				/>
			</el-row>
		</div>
	</container-wrapper>
</template>

<script setup>
	import containerWrapper from './container-wrapper-render.vue'
	import gridColWidget from './grid-col-render.vue'

	defineOptions({
		name: 'grid-render',
	})

	const props = defineProps({
		widget: {
			type: Object,
			default: () => {},
		},
		options: {
			type: Object,
			default: () => {},
		},
	})
</script>

<style scoped></style>
