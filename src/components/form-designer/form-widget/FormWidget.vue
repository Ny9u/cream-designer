<template>
	<div class="form-widget">
		<el-scrollbar :height="state.scrollHeight" id="form_container">
			<el-form
				class="form-body"
				:model="state.formData"
				:label-width="designer.formConfig.formLabelWidth"
			>
				<draggable
					class="draggable"
					:list="designer.widgetList"
					:move="checkMove"
					:sort="true"
					item-key="id"
					v-bind="{ group: 'dragGroup', ghostClass: 'ghost', animation: 300 }"
					@add="(e) => onDragAdd(e)"
					@update="(e) => onDragUpdate(e)"
					handle=".active-drag"
				>
					<template #item="{ element: widget, index }">
						<component
							v-model:options="widget.options"
							:is="getWidgetName(widget.type)"
							:widget="widget"
							:designer="designer"
							:key="widget.options.propName"
							:parent="designer"
							:index="index"
							@click="selectWidget(widget, index)"
						></component>
					</template>
				</draggable>
			</el-form>
		</el-scrollbar>
	</div>
</template>
<script setup>
	import {
		inject,
		computed,
		reactive,
		onMounted,
		onBeforeUnmount,
		nextTick,
		getCurrentInstance,
	} from 'vue'
	import draggable from 'vuedraggable'
	import { getWidgetName } from '@/utils/tool'
	import FieldComponents from './field-widget/index'
	import { eventBus } from '@/utils/eventBus'
	defineOptions({
		components: {
			...FieldComponents,
		},
	})
	const instance = getCurrentInstance()
	const designer = inject('designer')
	const state = reactive({
		formData: computed(() => JSON.parse(designer.getJSON())),
		scrollHeight: 0,
	})

	const checkMove = (e) => {
		designer.checkMove(e)
	}

	const onDragAdd = (e) => {
		const { newIndex } = e
		designer.addNewWidgetToContainer(undefined, newIndex)
		designer.selectedWidget.index = newIndex
	}

	const onDragUpdate = (e) => {
		designer.dragUpdate(e)
	}

	const selectWidget = (widget, index) => {
		if (designer.selectedWidget && widget === designer.selectedWidget) {
			designer.selectWidget(null, -1)
		} else {
			designer.selectWidget(widget, index)
		}
	}
	// 计算滚动条高度,表单内置滚动条
	const computedHeight = () => {
		state.scrollHeight = window.innerHeight - 75 + 'px'
	}

	const changeDark = (dark) => {
		const widget = document.querySelector('.form-widget')
		const body = document.querySelector('.form-body')
		if (dark) {
			widget.style.background = '#18222c'
			body.style.background = '#121212'
		} else {
			widget.style.background = '#f5f1f1'
			body.style.background = '#fff'
		}
	}

	const exportPdf = (arr) => {
		nextTick(() => {
			instance.proxy.$htmlToPdf(arr[0], arr[1])
		})
	}

	onMounted(() => {
		window.addEventListener('resize', computedHeight)
		eventBus.on('changeDark', changeDark)
		eventBus.on('exportPdf', exportPdf)
	})

	onBeforeUnmount(() => {
		window.removeEventListener('resize', computedHeight) *
			eventBus.off('changeDark', changeDark)
		eventBus.off('exportPdf', exportPdf)
	})
</script>

<style lang="less" scoped>
	.form-widget {
		position: relative;
		background: #f5f1f1;
		box-sizing: border-box;
		padding: 10px;
	}
	.form-body {
		background: #fff;
		padding: 10px;
		.draggable {
			min-height: calc(100vh - 95px);
		}
	}
</style>
