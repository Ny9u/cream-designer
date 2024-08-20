<template>
	<el-menu class="top-nav" :ellipsis="false" mode="horizontal">
		<el-menu-item>
			<img
				src="@/assets/icon.svg"
				alt="icon"
				style="width: auto; height: 50px"
			/>
		</el-menu-item>
		<el-menu-item style="font-size: 19px; font-weight: bold">
			表单设计器 Ver 1.0.1
		</el-menu-item>
		<div class="switch">
			<el-switch
				v-model="dark"
				width="50"
				size="large"
				inline-prompt
				:active-icon="Moon"
				:inactive-icon="Sunny"
				@change="ChangeDark"
			/>
		</div>
		<div class="github">
			<a href="https://github.com/Ny9u/cream-designer">
				<img
					src="@/assets/github.svg"
					alt="icon"
					style="width: auto; height: 40px; margin-bottom: 6px"
				/>
			</a>
		</div>
	</el-menu>
</template>

<script setup>
	import { ref } from 'vue'
	import { Moon, Sunny } from '@element-plus/icons-vue'
	import { eventBus } from '@/utils/eventBus'

	const dark = ref(false)

	const ChangeDark = () => {
		if (dark.value) {
			document.documentElement.classList.add('dark')
			eventBus.emit('changeDark', dark.value)
		} else {
			document.documentElement.classList.remove('dark')
			eventBus.emit('changeDark', dark.value)
		}
	}
</script>

<style scoped>
	.el-menu--horizontal > .el-menu-item:nth-child(2) {
		margin-right: auto;
	}
	.switch {
		height: 50px;
		width: 50px;
		margin: 10px 20px;
	}
	.github {
		height: 50px;
		width: 50px;
		margin: 10px 20px;
	}
</style>
