import { deepClone, getRandomPropName } from '@/utils/tool'
export class CopyWidgetToContainerCommand {
	constructor(widget, widgetList, widgetMap) {
		this.widget = deepClone(widget)
		this.widgetList = widgetList
		this.widgetMap = widgetMap
	}
	//先复制一个相同的组件,并生成唯一id,再将这个组件加入到映射关系中
	execute() {
		this.copy(this.widget)
		this.widgetList.push(this.widget)
	}

	undo() {
		this.cleanMap(this.widget)
		this.widgetList.pop()
	}

	copy(widget) {
		const target = widget.cols ?? widget.widgetList ?? []
		const randomPropName = getRandomPropName(widget.type)
		widget.options.propName = randomPropName
		widget.originConfig.propName = randomPropName
		this.widgetMap.set(randomPropName, widget)
		for (let i of target) {
			this.copy(i)
		}
	}

	cleanMap(widget) {
		this.widgetMap.delete(widget.options.propName)
		const target = widget.cols ?? widget.widgetList ?? []
		for (let i of target) {
			this.cleanMap(i)
		}
	}
}
