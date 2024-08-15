// 新增物料命令
export class AddWidgetCommand {
    constructor(widget, widgetList, widgetMap,index = widgetList.length) {
      this.widget = widget
      this.widgetList = widgetList
      this.widgetMap = widgetMap
      this.index = index
    }
    execute() {
      this.widgetList.splice(this.index, 0, this.widget)
      this.widgetMap.set(this.widget.options.propName, this.widget)
    }
    undo() {
      this.widgetList.splice(this.index,1)
      this.widgetMap.delete(this.widget.options.propName)
    }
  }
  