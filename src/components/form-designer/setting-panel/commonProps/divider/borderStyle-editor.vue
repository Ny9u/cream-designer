<template>
	<el-form-item label="分割线样式">
		<el-select v-model="state.optionModel.borderStyle" size="small">
			<el-option
				v-for="item in state.typeOptions"
				:key="item"
				:label="item"
				:value="item"
			/>
		</el-select>
	</el-form-item>
</template>

<script setup>
	import { reactive, computed } from 'vue'
	defineOptions({
		name: 'borderStyle-editor',
	})

	const props = defineProps({
		optionModel: {
			type: Object,
			default: () => {},
		},
	})
	const state = reactive({
		optionModel: computed(() => props.optionModel),
		typeOptions: [
			'none',
			'hidden',
			'dotted',
			'dashed',
			'solid',
			'double',
			'groove',
			'ridge',
			'inset',
			'outset',
		],
	})
</script>

<style></style>
