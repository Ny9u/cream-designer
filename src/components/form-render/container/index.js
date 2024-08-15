// 容器物料的子物料会使用容器物料，在子物料内引入components会造成循环引用，所以需要注册为全局组件
const modules = import.meta.glob('./*.vue',{ eager: true })

export default {
  install(app) {
    for (const path in modules) {
      let cname = modules[path].default.name
      app.component(cname, modules[path].default)
    }
  }
}
