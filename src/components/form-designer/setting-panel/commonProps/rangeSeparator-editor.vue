<template>
	<el-form-item :label="$t('rangeSeparator')">
		<el-input v-model="state.optionModel.rangeSeparator" size="small" />
	</el-form-item>
</template>

<script setup>
	import { reactive, computed } from 'vue'
	defineOptions({
		name: 'rangeSeparator-editor',
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
