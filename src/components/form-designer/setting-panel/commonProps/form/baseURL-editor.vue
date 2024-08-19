<template>
	<el-form-item label="请求地址">
		<el-input v-model="state.optionModel.baseURL" size="small" />
	</el-form-item>
</template>

<script setup>
	import { reactive, computed } from 'vue'
	defineOptions({
		name: 'baseURL-editor',
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
