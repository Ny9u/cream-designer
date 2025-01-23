<template>
	<el-form-item :label="$t('url')">
		<el-input v-model="state.optionModel.url" size="small" />
	</el-form-item>
</template>

<script setup>
	import { reactive, computed } from 'vue'
	defineOptions({
		name: 'url-editor',
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
