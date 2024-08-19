<template>
	<el-form-item label="内容位置">
		<el-select v-model="state.optionModel.contentPosition" size="small">
			<el-option
				v-for="item in state.position"
				:key="item"
				:label="item"
				:value="item"
			></el-option>
		</el-select>
	</el-form-item>
</template>

<script setup>
	import { reactive, computed } from 'vue'
	defineOptions({
		name: 'contentPosition-editor',
	})

	const props = defineProps({
		optionModel: {
			type: Object,
			default: () => {},
		},
	})
	const state = reactive({
		optionModel: computed(() => props.optionModel),
		position: ['left', 'center', 'right'],
	})
</script>

<style></style>
