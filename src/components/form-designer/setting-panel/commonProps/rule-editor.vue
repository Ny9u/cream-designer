<template>
	<el-form-item label="校验规则">
		<el-select
			v-model="state.optionModel.rule"
			size="small"
			placeholder="请选择"
		>
			<el-option
				v-for="item in state.options"
				:key="item.value"
				:label="item.label"
				:value="item.value"
			/>
		</el-select>
	</el-form-item>
</template>

<script setup>
	import { reactive, computed } from 'vue'
	defineOptions({
		name: 'rule-editor',
	})

	const props = defineProps({
		optionModel: {
			type: Object,
			default: () => {},
		},
	})

	const state = reactive({
		optionModel: computed(() => props.optionModel),
		options: [
			{
				value: 'number',
				label: '数字',
			},
			{
				value: 'phone',
				label: '手机号',
			},
		],
	})
</script>

<style></style>
