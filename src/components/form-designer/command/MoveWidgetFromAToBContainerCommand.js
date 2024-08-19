export class MoveWidgetFromAToBContainerCommand {
	// oldIndex,
	// newIndex,
	// this.parentContainer,
	// BContainer,
	constructor(oldIndex, newIndex, AContainer, BContainer) {
		this.oldIndex = oldIndex
		this.newIndex = newIndex
		this.AContainer = AContainer
		this.BContainer = BContainer
	}

	execute() {
		const widget = this.AContainer.widgetList.splice(this.oldIndex, 1)[0]
		this.BContainer.widgetList.splice(this.newIndex, 0, widget)
	}

	undo() {
		const widget = this.BContainer.widgetList.splice(this.newIndex, 1)[0]
		this.AContainer.widgetList.splice(this.oldIndex, 0, widget)
	}
}
