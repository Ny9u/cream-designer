<template>
	<form-item-wrapper :widget="widget" :is-design="isDesign" :parent="parent">
		<el-radio-group
			v-model="state.optionsModel.value"
			:readonly="widget.options.readonly"
			:disabled="options.disabled"
			:size="widget.options.size"
			@change="onChangeHandle"
		>
			<div>
				<el-radio
					v-for="item in state.optionsModel.optionItem"
					:key="item.value"
					:label="item.value"
					border
					class="radio-group"
				>
					{{ item.label }}
				</el-radio>
			</div>
		</el-radio-group>
	</form-item-wrapper>
</template>

<script setup>
	import formItemWrapper from './form-item-wrapper.vue'
	import { reactive, computed } from 'vue'
	import registerEvents from '../registerEvents'
	defineOptions({
		name: 'radio-widget',
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

<style scoped>
	.radio-group {
		margin-right: 50px;
	}
</style>
