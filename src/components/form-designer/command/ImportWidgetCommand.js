import { deepClone } from '@/utils/tool'
import { Widget } from '../Widget'
// 导入JSON命令
export class ImportWidgetCommand {
  constructor(json, data, widgetMap) {
    this.widgetList = data.widgetList
    this.formConfig = data.formConfig
    this.json = json
    this.widgetMap = widgetMap
    this.originData = deepClone(data) // 记录原始数据，用于回退
  }
  // 替换物料列表，并且重新记录map对应的物料
  execute() {
    // 清空map表重新记录
    this.widgetMap.clear()
    // 替换物料列表
    const newList = this.json.widgetList.map((item) => new Widget(item))
    this.widgetList.splice(0, this.widgetList.length, ...newList)
    this.widgetList.forEach((item) => {
      this.widgetMap.set(item.options.propName, item)
    })
    // 替换表单配置
    this.formConfig = this.json.formConfig
  }
  undo() {
    this.widgetMap.clear()
    this.widgetList.splice(0, this.widgetList.length, ...this.originData.widgetList)
    this.widgetList.forEach((item) => {
      this.widgetMap.set(item.options.propName, item)
    })
    this.formConfig = this.originData.formConfig
  }
}
