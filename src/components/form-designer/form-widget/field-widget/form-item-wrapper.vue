<template>
	<div v-if="!(widget.options.hidden && !isDesign)" class="form-item-wrapper">
		<!-- 所有关于options的配置都在widgetConfig这个文件提前设置好了 -->
		<el-form-item
			:class="[widget.options.labelAlign]"
			:label-width="widget.options.labelWidth + 'px'"
			:rules="state.rules"
			:prop="widget.options.propName"
			:size="widget.options.size"
		>
			<!-- 物料名称 -->
			<template #label>
				<div class="form-item-label" v-if="!widget.options.labelHidden">
					{{ widget.options.label }}
				</div>
			</template>
			<slot></slot>
		</el-form-item>
		<!-- 被选中时显示工具栏 -->
		<div class="active" v-if="widget == designer.selectedWidget && isDesign">
			<div class="active-border"></div>
			<div class="active-drag">
				<el-icon><Rank /></el-icon>
				<span>{{ widget.displayName }}</span>
				<!-- 隐藏icon -->
				<el-icon v-if="widget.options.hidden"><Hide /></el-icon>
			</div>
			<div class="active-action">
				<el-icon @click.stop="selectParent"><Back /></el-icon>
				<!-- <i class="el-icon-arrow-left" @click.stop="selectParent"></i> -->
				<el-icon @click.stop="selectPreWidget"><Top /></el-icon>
				<el-icon @click.stop="selectNextWidget"><Bottom /></el-icon>
				<el-icon @click.stop="copySelfToParent"><CopyDocument /></el-icon>
				<el-icon @click.stop="removeWidget"><DeleteFilled /></el-icon>
			</div>
		</div>
	</div>
</template>

<script setup>
	import { ElMessage } from 'element-plus'
	import { computed, inject, reactive } from 'vue'

	defineOptions({
		name: 'form-item-wrapper',
	})
	const designer = inject('designer')
	const props = defineProps({
		widget: {
			type: Object,
			default: () => {},
		},
		isDesign: {
			type: Boolean,
			default: false,
		},
		parent: {
			type: Object,
			default: () => {},
		},
		parentIndex: {
			type: Number,
			default: 0,
		},
	})
	const state = reactive({
		rules: computed(() => {
			const rules = [
				{
					required: props.widget.options.isRequired,
					message: props.widget.options.requiredMessage,
					trigger: 'blur',
				},
			]
			if (props.widget.options.rule) {
				rules.push({
					type: props.widget.options.rule,
					message: props.widget.options.errorMessage,
					trigger: 'blur',
				})
			}
			return rules
		}),
	})

	const selectParent = () => {
		if (props.parent === designer) {
			ElMessage('当前已是最顶层')
			return
		}
		designer.selectWidget(props.parent, props.parentIndex)
	}

	const selectPreWidget = () => {
		designer.selectWidgetByWidgetListIndex(
			props.parent.widgetList,
			designer.selectedWidget.index - 1
		)
	}

	const selectNextWidget = () => {
		designer.selectWidgetByWidgetListIndex(
			props.parent.widgetList,
			designer.selectedWidget.index + 1
		)
	}

	const copySelfToParent = () => {
		designer.copyWidgetToContainer(props.widget, props.parent.widgetList)
	}

	const removeWidget = () => {
		designer.removeWidget(props.parent.widgetList)
	}
</script>
<style lang="less" scoped>
	.form-item-wrapper {
		padding: 4px;
		position: relative;
		margin-bottom: 10px;
		:deep(.el-form-item) {
			position: relative;
			margin: 0;
			z-index: 2;
		}
		.active-border {
			position: absolute;
			width: 100%;
			height: 100%;
			top: 0;
			right: 0;
			bottom: 0;
			left: 0;
			border: 2px solid #409eff;
			z-index: 1;
		}
		.active-drag {
			position: absolute;
			z-index: 3;
			color: #fff;
			top: 0;
			left: 0;
			display: inline-flex;
			align-items: center;
			background: #40a0ff79;
			padding: 2px 5px;
			font-size: 12px;
			&:hover {
				background: #40a0ff;
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
			background: #40a0ffea;
			padding: 5px 5px 5px 0;
			font-size: 16px;
			align-items: center;
			&:hover {
				cursor: pointer;
			}
			.el-icon {
				margin-left: 5px;
			}
		}
	}
	:deep(.el-form-item__label) {
		padding: 0;
		white-space: nowrap;
	}
	.left {
		:deep(.el-form-item__label) {
			justify-content: flex-start;
		}
	}
	.center {
		:deep(.el-form-item__label) {
			justify-content: center;
		}
	}
	.right {
		:deep(.el-form-item__label) {
			justify-content: flex-end;
		}
	}
</style>
