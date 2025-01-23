<template>
	<el-form-item label-width="126" label="onRemoveTag">
		<el-button
			type="primary"
			size="default"
			@click="onClickHandle"
			class="button"
		>
			<img src="@/assets/edit.svg" />
			&nbsp;&nbsp;{{$t('coding')}}
		</el-button>
	</el-form-item>
</template>

<script setup>
	defineOptions({
		name: 'onRemoveTag-editor',
	})

	const emits = defineEmits(['editEventProp'])
	const onClickHandle = () => {
		emits('editEventProp', {
			title: 'onRemoveTag',
			tip: '.onRemoveTag(val){',
		})
	}
</script>

<style scoped>
	.button {
		font-size: 14px;
	}
</style>
