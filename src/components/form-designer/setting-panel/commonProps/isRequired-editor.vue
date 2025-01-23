<template>
	<el-form-item :label="$t('isRequired')" prop="isRequired">
		<el-switch v-model="state.optionModel.isRequired"></el-switch>
	</el-form-item>
</template>

<script setup>
	import { computed, reactive } from 'vue'
	defineOptions({
		name: 'isRequired-editor',
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
