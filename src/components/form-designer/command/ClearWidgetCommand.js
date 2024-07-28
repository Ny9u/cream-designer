export class ClearWidgetCommand{
    constructor(widgetList,selectWidget,selectedWidget,widgetMap){
        this.widgetList = widgetList
        this.selectWidget = selectWidget//函数,用于选择组件
        this.widgetMap = widgetMap
        //备份
        this.originWidgetMap = new Map(Array.from(widgetMap))
        this.originWidgetList = [...widgetList]
        this.originSelectedWidget = selectedWidget//参数
    }
    execute(){
        this.widgetList.splice(0,widgetList.length)
        this.selectWidget(null)
        this.widgetMap.clear()
    }
    undo(){
        this.widgetList.push(...this.originWidgetList)
        this.selectWidget(this.selectedWidget)
        this.widgetMap=new Map(Array.from(this.originWidgetMap))
    }

}