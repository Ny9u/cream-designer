//服务端渲染入口
import { createApplication } from './main'
import { renderToString } from '@vue/server-renderer'

export async function render() {
	const { app } = createApplication()
	const ctx = {}
	// renderToString将此时根实例转换成对应的HTML字符串
	const html = await renderToString(app, ctx)

	return { html }
}
