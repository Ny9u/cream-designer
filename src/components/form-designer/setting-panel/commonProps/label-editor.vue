<template>
	<el-form-item label="标签" prop="label">
		<el-input
			size="small"
			type="text"
			v-model="state.optionModel.label"
		></el-input>
	</el-form-item>
</template>
<script setup>
	import { computed, reactive } from 'vue'

	defineOptions({
		name: 'label-editor',
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
