<template>
	<el-form-item :label="$t('labelHidden')" prop="labelHidden">
		<el-switch v-model="state.optionModel.labelHidden" />
	</el-form-item>
</template>

<script setup>
	import { reactive, computed } from 'vue'
	defineOptions({
		name: 'labelHidden-editor',
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
