<template>
	<el-menu class="top-nav" :ellipsis="false" mode="horizontal">
		<el-menu-item>
			<img
				src="@/assets/icon.svg"
				alt="icon"
				style="height: 50px; cursor: default;"
			/>
		</el-menu-item>
		<el-menu-item style="font-size: 19px; font-weight: bold; cursor: default;">
			{{ $t('title') }}
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
		<div class="langs">
			<el-dropdown>
				<img
					src="@/assets/language.svg"
					alt="icon"
					style="width: 24px; height: 24px; border: 0px"
				/>
				<template #dropdown>
					<el-dropdown-menu>
						<el-dropdown-item @click="handleClick('zh_CN')">中文</el-dropdown-item>
						<el-dropdown-item @click="handleClick('en_US')">English</el-dropdown-item>
					</el-dropdown-menu>
				</template>
    	</el-dropdown>
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
	import { useI18n } from 'vue-i18n'

	const { locale } = useI18n()
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
	const handleClick = (value) => {
		locale.value = value
	}
</script>

<style lang="less"scoped>
	.el-menu--horizontal > .el-menu-item:nth-child(2) {
		margin-right: auto;
	}
	.top-nav {
		--el-menu-hover-bg-color: transparent;
	}
	.switch {
		margin: 10px 24px;
	}
	.langs {
		margin-top: 18px;
	}
	.github {
		width: 40px;
		margin: 10px 24px;
		cursor: pointer;
	}
</style>
