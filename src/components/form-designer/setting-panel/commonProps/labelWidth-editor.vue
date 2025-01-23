<template>
	<el-form-item :label="$t('labelWidth')" prop="labelWidth">
		<el-input
			size="small"
			type="text"
			v-model="state.optionModel.labelWidth"
		></el-input>
	</el-form-item>
</template>

<script setup>
	import { computed, reactive } from 'vue'
	defineOptions({
		name: 'labelWidth-editor',
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
