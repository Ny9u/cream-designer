import { createApp } from 'vue'
import App from './App.vue'
import './styles/index.less'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIcons from '@element-plus/icons-vue'
import ContainerWidgets from '@/components/form-designer/form-widget/container-widget/index'
import ContainerRender from '@/components/form-render/container/index'
import { createPinia } from 'pinia'

const pinia = createPinia()
const app = createApp(App)

app.use(ElementPlus)
app.use(ContainerWidgets)
app.use(ContainerRender)
app.use(pinia)
for (const [key, component] of Object.entries(ElementPlusIcons)) {
	app.component(key, component)
}
// 将所有引入的ui注册为全局组件
app.mount('#app')
