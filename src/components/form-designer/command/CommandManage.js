// 命令管理
export class CommandManage {
    constructor(designer) {
      this.undoList = []
      this.redoList = []
      this.designer = designer
    }
    // immediately存在的目的是：存在自执行的命令，譬如移动物料位置时，draggable已经移动过了，所以不需要再执行一次cmd，否则栈内存在两个移动指令
    // save存在的目的是：写物料事件属性时若不能保存被刷新掉了再次写很麻烦，但是此操作没有存入栈的意义
    execute(command, immediately = true, save = true) {
      save && this.undoList.push(command)
      if (immediately) command.execute()
      this.saveForm()
    }
    undo() {
      const cmd = this.undoList.pop()
      cmd.undo()
      this.redoList.push(cmd)
      this.saveForm()
    }
    redo() {
      const cmd = this.redoList.pop()
      cmd.execute()
      this.undoList.push(cmd)
      this.saveForm()
    }
    canUndo() {
      return this.undoList.length > 0
    }
    canRedo() {
      return this.redoList.length > 0
    }
    saveForm() {
      localStorage.setItem('widgetList', JSON.stringify(this.designer.widgetList))
      localStorage.setItem('formConfig', JSON.stringify(this.designer.formConfig))
    }
  }
  