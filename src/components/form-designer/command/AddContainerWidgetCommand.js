import { deepClone } from '@/utils/tool'
import { Widget } from '../Widget'
import { containerFields } from '../widget-panel/widgetConfig'
export class AddContainerWidgetCommand {
	constructor(widget, widgetList, widgetMap) {
		this.widget = widget
		// 初始化的时候，生成两个栅格列
		const gridCol = containerFields.filter(
			(item) => item.type === 'grid-col'
		)[0]
		this.widget.cols.push(
			new Widget(deepClone(gridCol)),
			new Widget(deepClone(gridCol))
		)
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
