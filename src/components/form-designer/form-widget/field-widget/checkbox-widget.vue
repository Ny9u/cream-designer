<template>
	<form-item-wrapper :widget="widget" :is-design="isDesign" :parent="parent">
		<div>
			<!-- <el-checkbox 
      v-model="state.optionsModel.value" 
      label="选项A" 
      border
      @change="onChangeHandle"
      :readonly="widget.options.readonly"
      :disabled="options.disabled"
      ></el-checkbox>
      <el-checkbox 
      v-model="state.optionsModel.value" 
      label="选项B" 
      border
      @change="onChangeHandle"
      :readonly="widget.options.readonly"
      :disabled="options.disabled"
      ></el-checkbox>
      <el-checkbox 
      v-model="state.optionsModel.value" 
      label="选项C" 
      border
      @change="onChangeHandle"
      :readonly="widget.options.readonly"
      :disabled="options.disabled"
      ></el-checkbox>
      <el-checkbox 
      v-model="state.optionsModel.value" 
      label="选项D" 
      border
      @change="onChangeHandle"
      :readonly="widget.options.readonly"
      :disabled="options.disabled"
      ></el-checkbox> -->
			<el-checkbox-group
				v-model="state.optionsModel.value"
				:disabled="widget.options.disabled"
				:readonly="widget.options.readonly"
				:size="widget.options.widgetSize"
				@change="onChangeHandle"
			>
				<el-checkbox
					v-for="item in state.optionsModel.optionItem"
					:key="item.value"
					:label="item.value"
					border
					size="medium"
					class="checkbox-group"
				>
					{{ item.label }}
				</el-checkbox>
			</el-checkbox-group>
		</div>
	</form-item-wrapper>
</template>

<script setup>
	import formItemWrapper from './form-item-wrapper.vue'
	import { reactive, computed } from 'vue'
	import registerEvents from '../registerEvents.js'
	defineOptions({
		name: 'checkbox-widget',
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
	.checkbox-group {
		margin-right: 50px;
	}
</style>
