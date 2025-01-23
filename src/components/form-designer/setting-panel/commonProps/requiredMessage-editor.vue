<template>
	<el-form-item :label="$t('requiredMessage')">
		<el-input v-model="state.optionModel.requiredMessage" size="small" />
	</el-form-item>
</template>

<script setup>
	import { computed, reactive } from 'vue'
	defineOptions({
		name: 'requiredMessage-editor',
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
