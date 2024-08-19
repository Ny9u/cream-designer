<template>
	<el-form-item label="占位提示">
		<el-input
			v-model="state.optionModel.placeholder"
			type="text"
			size="small"
		/>
	</el-form-item>
</template>

<script setup>
	import { reactive, computed } from 'vue'
	defineOptions({
		name: 'placeholder-editor',
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
