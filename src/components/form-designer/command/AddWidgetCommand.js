// 新增物料命令
export class AddWidgetCommand {
    constructor(widget, widgetList, widgetMap) {
      this.widget = widget
      this.widgetList = widgetList
      this.widgetMap = widgetMap
    }
    execute() {
      this.widgetList.push(this.widget)
      this.widgetMap.set(this.widget.options.propName, this.widget)
    }
    undo() {
      this.widgetList.pop()
      this.widgetMap.delete(this.widget.options.propName)
    }
  }
  