<template>
	<el-form-item :label="$t('hidden')">
		<el-switch v-model="state.optionModel.hidden" />
	</el-form-item>
</template>

<script setup>
	import { computed, reactive } from 'vue'
	defineOptions({
		name: 'hidden-editor',
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
