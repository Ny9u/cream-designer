// 移动物料命令
export class MoveWidgetCommand {
	constructor(widgetList, oldIndex, newIndex) {
		this.widgetList = widgetList
		this.oldIndex = oldIndex
		this.newIndex = newIndex
	}
	execute() {
		const targetWidget = this.widgetList[this.oldIndex]
		// 先移除原先位置上的物料，将其插入移动后的位置
		this.widgetList.splice(this.oldIndex, 1)
		this.widgetList.splice(this.newIndex, 0, targetWidget)
	}
	undo() {
		// 移动的物料
		const targetWidget = this.widgetList[this.newIndex]
		// 先移除移动后的物料，再将其插入原来的位置
		this.widgetList.splice(this.newIndex, 1)
		this.widgetList.splice(this.oldIndex, 0, targetWidget)
	}
}
