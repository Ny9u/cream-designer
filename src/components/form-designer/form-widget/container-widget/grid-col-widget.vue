<template>
	<el-col
		@click.stop="selectWidget(widget, index)"
		:span="widget.options.span"
		:offset="widget.options.offset"
		:push="widget.options.push"
		:pull="widget.options.pull"
		class="grid-col"
		:class="[widget == designer.selectedWidget ? 'active' : 'unactive']"
		:style="{
			minHeight: (widget.options.height ?? parentOption.colHeight) + 'px',
		}"
	>
		<div class="col-draggable-container" @mousedown.stop @pointerdown.stop>
			<draggable
				class="col-drag-group"
				:list="widget.widgetList"
				item-key="id"
				:group="{
					name: 'dragGroup',
					pull: true,
					put: true,
				}"
				:sort="true"
				@add="(e) => onDragAdd(e, widget)"
				@update="onDragUpdate"
				@start="onDragStart"
				:move="checkMove"
			>
				<template #item="{ element: subWidget, index }">
					<div class="move">
						<component
							v-model:options="subWidget.options"
							:is="getWidgetName(subWidget.type)"
							:widget="subWidget"
							:designer="designer"
							:parent="widget"
							:parent-index="index"
							:key="subWidget.options.propName"
							:isDesign="isDesign"
							@click.stop="selectWidget(subWidget, index)"
						></component>
					</div>
				</template>
			</draggable>
		</div>
		<!-- 此处被选中时显示工具 -->
		<div class="active" v-if="widget == designer.selectedWidget && isDesign">
			<div class="active-name grid-col-drag">
				<el-icon>
					<Rank />
				</el-icon>
				<span>{{ widget.type }}</span>
			</div>
			<div class="active-action">
				<el-icon @click.stop="selectParent">
					<Back />
				</el-icon>
				<el-icon @click.stop="selectPreWidget">
					<Top />
				</el-icon>
				<el-icon @click.stop="selectNextWidget">
					<Bottom />
				</el-icon>
				<el-icon @click.stop="copySelfToParent">
					<CopyDocument />
				</el-icon>
				<el-icon @click.stop="removeWidget">
					<DeleteFilled />
				</el-icon>
			</div>
		</div>
	</el-col>
</template>

<script setup>
	import { inject } from 'vue'
	import draggable from 'vuedraggable'
	import { getWidgetName } from '@/utils/tool'
	import FieldComponents from '@/components/form-designer/form-widget/field-widget/index'

	defineOptions({
		name: 'grid-col-widget',
		components: {
			...FieldComponents,
		},
	})

	const designer = inject('designer')

	const props = defineProps({
		widget: {
			type: Object,
			default: () => {},
		},
		parentOption: {
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
		parentIndex: {
			type: Number,
			default: 0,
		},
		index: {
			type: Number,
			default: 0,
		},
	})

	const selectWidget = (widget, index) => {
		designer.selectWidget(widget, index)
	}

	const onDragAdd = (e, widget) => {
		const isClone = e.pullMode === 'clone'
		if (isClone) {
			designer.addNewWidgetToContainer(widget, e.newIndex)
		} else {
			designer.moveWidgetFromAToBContainer(e, widget)
		}
		const targetWidget = widget.widgetList[e.newIndex]
		if (targetWidget) {
			designer.selectWidget(targetWidget, e.newIndex)
		}
		designer.cloneWidget = null
		designer.multipleWidget?.clear()
	}

	const onDragUpdate = (e) => {
		designer.dragUpdate(e, props.widget.widgetList)
	}

	const onDragStart = () => {
		designer.parentContainer = props.widget
	}

	const checkMove = (e) => {
		console.log('检查移动')
		designer.checkMove(e)
	}

	const selectParent = () => {
		designer.selectWidget(props.parent, props.parentIndex)
	}

	const selectPreWidget = () => {
		designer.selectWidgetByWidgetListIndex(
			props.parent.cols,
			designer.selectedWidget.index - 1
		)
	}

	const selectNextWidget = () => {
		designer.selectWidgetByWidgetListIndex(
			props.parent.cols,
			designer.selectedWidget.index + 1
		)
	}

	const copySelfToParent = () => {
		designer.copyWidgetToContainer(props.widget, props.parent.cols)
	}

	const removeWidget = () => {
		designer.removeWidget(props.parent.cols)
	}
</script>

<style lang="less" scoped>
	.grid-col {
		position: relative;
		box-sizing: border-box;
		background: #fff;
		border: 1px solid #e5e7eb;
		border-radius: 6px;
		padding: 6px;
		transition:
			border-color 0.2s ease,
			box-shadow 0.2s ease,
			background 0.2s ease;

		&.active {
			border-color: #409eff;
			box-shadow: 0 0 0 2px rgba(64, 158, 255, 0.15);
		}

		&.unactive {
			border-style: dashed;
			border-color: #d1d5db;
		}
	}

	.grid-col:hover {
		border-color: #c7d2fe;
		background: #f9fafb;
	}

	.col-draggable-container {
		min-height: 32px;
	}

	.col-drag-group {
		min-height: 32px;
	}

	.draggable {
		height: 100%;
	}

	.active-name {
		position: absolute;
		z-index: 3;
		color: #fff;
		top: 0;
		left: 0;
		display: inline-flex;
		align-items: center;
		background: rgba(64, 158, 255, 0.9);
		padding: 2px 6px;
		font-size: 11px;
		border-radius: 0 0 6px 0;

		&:hover {
			background: rgba(64, 158, 255, 1);
			cursor: move;
		}
	}

	.active-action {
		position: absolute;
		z-index: 3;
		color: #fff;
		bottom: 0;
		right: 0;
		display: inline-flex;
		background: rgba(64, 158, 255, 0.9);
		padding: 4px 6px;
		font-size: 14px;
		align-items: center;
		border-radius: 6px 0 0 0;

		&:hover {
			cursor: pointer;
		}

		.el-icon {
			margin-left: 4px;
		}
	}
</style>
