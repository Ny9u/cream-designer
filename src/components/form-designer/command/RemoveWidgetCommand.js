export class RemoveWidgetCommand {
    constructor(widgetList, selectWidget, selectedWidget, widgetMap) {
      this.widgetList = widgetList
      this.selectWidget = selectWidget
      this.selectedWidget = selectedWidget
      this.widgetMap = widgetMap
    }
    
    execute() {
      //this.targetIdx = this.widgetList.findIndex((item) => item.options.propName == this.widget.options.propName)
      this.widgetList.splice(this.widgetList.indexOf(this.selectedWidget), 1)
      this.selectWidget(null)
      this.widgetMap.delete(this.selectedWidget.options.propName)
    }

    undo() {
      this.widgetList.push(this.selectedWidget)
      this.selectWidget(this.selectedWidget)
      this.widgetMap.set(this.selectedWidget.options.propName, this.selectedWidget)
    }
}