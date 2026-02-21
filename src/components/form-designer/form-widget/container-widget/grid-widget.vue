<template>
	<container-wrapper :widget="widget" :isDesign="isDesign">
		<div>
			<draggable
				class="grid-col-draggable"
				tag="el-row"
				:component-data="{ props: { gutter: widget.options.gutter } }"
				:list="widget.cols"
				:item-key="getColKey"
				:sort="true"
				:move="checkMove"
				@update="onDragUpdate"
				@start="onDragStart"
				handle=".grid-col-drag"
			>
				<template #item="{ element: item, index: idx }">
					<gridColWidget
						:key="getColKey(item)"
						:parent-option="options"
						:index="idx"
						:parent="widget"
						:parent-index="index"
						:widget="item"
						:is-design="isDesign"
					/>
				</template>
			</draggable>
		</div>
	</container-wrapper>
</template>

<script setup>
	import { inject } from 'vue'
	import draggable from 'vuedraggable'
	import containerWrapper from './container-wrapper.vue'
	import gridColWidget from './grid-col-widget.vue'

	defineOptions({
		name: 'grid-widget',
	})

	const designer = inject('designer')

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

	const checkMove = (e) => {
		designer.checkMove(e)
	}

	const onDragUpdate = (e) => {
		designer.dragUpdate(e, props.widget.cols)
	}

	const onDragStart = () => {
		designer.parentContainer = props.widget
	}

	const getColKey = (item) => {
		return item?.id ?? item?.options?.propName
	}
</script>

<style lang="less" scoped>
	.grid-col-draggable {
		width: 100%;
		box-sizing: border-box;
		padding: 6px;
		border-radius: 8px;
		background: #f8fafc;
		border: none;
	}
</style>
