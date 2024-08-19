<template>
	<el-form-item label="显示格式">
		<el-select v-model="state.optionModel.timeFormat" size="small">
			<el-option
				v-for="item in state.optionModel.timeOption"
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
		name: 'timeFormat-editor',
	})

	const props = defineProps({
		optionModel: {
			type: Object,
			default: () => {},
		},
	})

	const state = reactive({
		optionModel: computed(() => props.optionModel),
	})
</script>

<style></style>
