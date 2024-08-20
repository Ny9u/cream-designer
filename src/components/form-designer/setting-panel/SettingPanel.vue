<template>
	<el-tabs v-model="state.activeTab" style="overflow: hidden">
		<el-tab-pane label="组件配置" name="组件配置">
			<el-scrollbar :height="state.scrollHeight">
				<el-form
					:model="designer.getSeletedWidgetOptions()"
					label-position="left"
					label-width="96px"
				>
					<el-collapse v-model="state.activeCollapse">
						<!-- 折叠面板 -->
						<!-- 遍历普通属性和事件属性 -->
						<el-collapse-item
							:key="index"
							v-for="(propertyList, index) in state.widgetPropertyLists"
							:title="propertyList.name"
							:name="index"
						>
							<!-- 遍历拥有的属性 -->
							<div
								v-for="propKey in propertyList.propertys"
								:key="Math.random() + propKey"
							>
								<!-- 当前组件存在该属性才展示对应的属性编辑器 -->
								<!-- 外部传入optionModel属性,组件内声明即可使用数据 -->
								<!-- 实际上更新的都是designer的数据,通过designer实现两个组件的联动 -->
								<!-- 将designer.selectedWidget.options传给子组件的props,子组件通过操作state响应式对象传递数据给父组件,因为props是响应式的 -->
								<component
									:key="Math.random() + propKey"
									v-if="hasEditProp(propKey)"
									:is="getEditorName(propKey)"
									:optionModel="designer.selectedWidget.options"
									:designer="designer"
									:widget="designer.selectedWidget"
									@editEventProp="editEventProp"
								></component>
							</div>
						</el-collapse-item>
					</el-collapse>
				</el-form>
			</el-scrollbar>
		</el-tab-pane>
		<el-tab-pane label="表单配置" name="表单配置">
			<el-scrollbar>
				<el-form label-position="left" label-width="96px">
					<el-collapse v-model="state.activeCollapse">
						<!-- 折叠面板 -->
						<!-- 遍历普通属性和事件属性 -->
						<el-collapse-item
							:key="index"
							v-for="(propertyList, index) in state.formPropertyLists"
							:title="propertyList.name"
							:name="index"
						>
							<!--遍历里面的属性,以组件的方式呈现,每个组件都是被form-item包裹的 -->
							<div v-for="propKey in propertyList.propertys" :key="propKey">
								<component
									:is="getEditorName(propKey)"
									:optionModel="designer.formConfig"
									:designer="designer"
									@editEventProp="editEventProp"
								></component>
							</div>
						</el-collapse-item>
					</el-collapse>
				</el-form>
			</el-scrollbar>
		</el-tab-pane>
	</el-tabs>
	<!-- 事件属性编辑器, editEventProp事件时弹出-->
	<!-- 需要用v-if验证showCodeDialog是否存在,否则会因为访问到空内存报错 -->
	<div v-if="state.showCodeDialog">
		<CodeEditorDialog
			v-model:code="state.optionModel[state.codeDialogTitle]"
			v-model:showCodeDialog="state.showCodeDialog"
			:title="state.codeDialogTitle"
			:tip="state.codeDialogTip"
			:designer="designer"
		/>
	</div>
</template>
<script setup>
	import { inject, reactive, computed, onMounted, onBeforeUnmount } from 'vue'
	import CommonProps from './commonProps/index'
	import EventProps from './eventProps/index'
	import { COMMON_PROPERTIES, EVENT_PROPERTIES } from './propertyRegister'
	import CodeEditorDialog from './components/codeEditorDialog.vue'
	const designer = inject('designer')

	defineOptions({
		components: {
			...CommonProps,
			...EventProps,
		},
	})

	const state = reactive({
		optionModel: computed(() => {
			if (state.activeTab === '组件配置') {
				return designer.selectedWidget?.options
			} else {
				//表单配置
				return designer.formConfig
			}
		}),
		activeTab: '组件配置',
		activeCollapse: [0, 1],
		scrollHeight: 0,
		widgetPropertyLists: [
			{
				name: '普通属性',
				propertys: [],
			},
			{
				name: '事件属性',
				propertys: [],
			},
		],
		formPropertyLists: [
			{
				name: '普通属性',
				propertys: [],
			},
			{
				name: '事件属性',
				propertys: [],
			},
		],
		showCodeDialog: false, // 展示事件属性编辑器
		codeDialogTitle: '',
		codeDialogTip: '',
	})

	onMounted(() => {
		addEventsListener()
		initFormPropertys()
		computedHeight()
	})

	onBeforeUnmount(() => {
		window.removeEventListener('select_widget', getPropertys)
		window.removeEventListener('resize', computedHeight)
	})
	const addEventsListener = () => {
		// 监听选中物料事件触发，用于更新当前物料的属性编辑器
		window.addEventListener('select_widget', getPropertys)
		window.addEventListener('resize', computedHeight)
	}

	// 获取当前选中组件的属性编辑组件
	const getPropertys = () => {
		const options = designer.getSeletedWidgetOptions()
		// eslint-disable-next-line no-prototype-builtins
		const commonProp = Object.keys(options).filter((item) =>
			COMMON_PROPERTIES.includes(item)
		)
		// eslint-disable-next-line no-prototype-builtins
		const eventProp = Object.keys(options).filter((item) =>
			EVENT_PROPERTIES.includes(item)
		)
		state.widgetPropertyLists[0].propertys = commonProp
		state.widgetPropertyLists[1].propertys = eventProp
	}

	const computedHeight = () => {
		state.scrollHeight = window.innerHeight - 75 + 'px'
	}

	// 初始化表单配置
	const initFormPropertys = () => {
		const commonProp = Object.keys(designer.formConfig).filter(
			(item) => !!COMMON_PROPERTIES.includes(item)
		)
		const eventProp = Object.keys(designer.formConfig).filter(
			(item) => !!EVENT_PROPERTIES.includes(item)
		)
		state.formPropertyLists[0].propertys = commonProp
		state.formPropertyLists[1].propertys = eventProp
	}
	const hasEditProp = (name) => {
		const editorName = getEditorName(name)
		return !!(CommonProps[editorName] ?? EventProps[editorName])
	}
	const getEditorName = (name) => {
		// 判断是否有以该物料type为前缀的属性组件，有则返回该组件，若没有则使用通用属性组件
		const editorName = `${designer.selectedWidget?.type}-${name}-editor`
		const hasComponent = CommonProps[editorName] ?? EventProps[editorName]
		if (hasComponent) return editorName
		return name + '-editor'
	}
	//响应editEventProp时间
	const editEventProp = ({ title, tip }) => {
		state.showCodeDialog = true
		state.codeDialogTitle = title
		state.codeDialogTip = tip
	}
</script>

<style lang="less" scoped></style>
