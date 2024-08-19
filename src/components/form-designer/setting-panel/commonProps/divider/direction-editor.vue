<template>
	<el-form-item label="分割线方向">
		<el-select v-model="state.optionModel.direction" size="small">
			<el-option
				v-for="item in state.direction"
				:key="item"
				:label="item"
				:value="item"
			></el-option>
		</el-select>
	</el-form-item>
</template>

<script setup>
	import { computed, reactive } from 'vue'
	defineOptions({
		name: 'direction-editor',
	})
	const props = defineProps({
		optionModel: {
			type: Object,
			default: () => {},
		},
	})
	const state = reactive({
		optionModel: computed(() => props.optionModel),
		direction: ['horizontal', 'vertical'],
	})
</script>

<style></style>
