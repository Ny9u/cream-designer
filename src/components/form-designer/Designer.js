import { setMapValueByJSON,deepClone} from '@/utils/tool'
import { CommandManage } from './command/CommandManage'
import { FormConfig } from './FormConfig'
import { AddContainerWidgetCommand } from './command/AddContainerWidgetCommand'
import { AddWidgetCommand } from './command/AddWidgetCommand'
import { Widget } from './Widget'
import { ClearWidgetCommand } from './command/ClearWidgetCommand'
import {ImportWidgetCommand } from './command/ImportWidgetCommand'
import { ElMessage } from 'element-plus'
import { MoveWidgetCommand } from './command/MoveWidgetCommand'
import { CopyWidgetToContainerCommand } from './command/CopyWidgetToContainerCommand'
import { RemoveWidgetCommand } from './command/RemoveWidgetCommand'
import { MoveWidgetFromAToBContainerCommand } from './command/MoveWidgetFromAToBContainerCommand'
import { AddGridItemCommand } from './command/AddGridItemCommand'
import { EventPropChangeCommand } from './command/EventPropChangeCommand'
export class Designer {
  constructor(option) {
    this.initDesigner(option)
  }
  initDesigner(option) {
      this.widgetMap = setMapValueByJSON(new Map(), option.widgetList) // key:propName val: widget 用于快速查询物料
      this.command = new CommandManage(this) // 命令管理实例
      this.widgetList = option.widgetList // 物料集合
      this.cloneWidget = null // 拖拽时生成的临时物料(克隆的组件)
      this.multipleWidget = new Set() // 多选拖拽时生成的临时物料集合
      this.selectedWidget = null // 选中的物料
      this.parentContainer = this // 当前选中物料的父级容器，用于不同组物料移动时记录位置以便于回退
      this.formConfig = new FormConfig() // 表单配置
      this.selectedWidgetOption = null // 选中物料的属性配置
  }
  //使用deepclone克隆组件属性,创建新的组件类对象
  handleWidgetClone(widget) {
      this.cloneWidget = new Widget(deepClone(widget), this.formConfig)
  }
  //先克隆一份,判断是往哪个容器中加入
  addFieldByDbClick(widget) {
    this.handleWidgetClone(widget)
    if (this.selectedWidget?.widgetList) {//工作区内的容器
      this.addNewWidgetToContainer(this.selectedWidget)
    } else {//工作区
      this.addNewWidgetToContainer()
    }
  }
  //默认就是往工作区中添加
  addNewWidgetToContainer(container = this) {
    // 如果添加的是容器物料
    if (this.cloneWidget.category === 'container') {
      this.command.execute(//借助command这个命令管理实例,执行execute实际上是调用传入参数的execute
        new AddContainerWidgetCommand(//对象类内定义了execute方法,往工作区中添加物料
          this.cloneWidget,
          container.widgetList,
          this.widgetMap,
        ),
      )
    }
    else if (this.multipleWidget.size <= 1) {//单选
        this.command.execute(
          new AddWidgetCommand(
            this.cloneWidget,
            container.widgetList,
            this.widgetMap,
          ),
        )
    } 
  }
  //清空所有物料
  clearWidget(){
    this.command.execute(
      new ClearWidgetCommand(
        this.widgetList,//物料集合
        this.selectWidget.bind(this),
        this.selectedWidget,//选中的物料
        this.widgetMap,//物料映射关系
      )
    )
  }
  // 当且仅当通过鼠标点击选择物料时，会得到draggable传来的index，表明它在父容器中的位置，用这个属性来控制选择兄弟物料
  selectWidget(widget, index) {
    this.selectedWidget = widget
    index !== null && index !== undefined && (this.selectedWidget.index = index)
    window.dispatchEvent(new CustomEvent('select_widget'))//发送select_widget事件,会触发clearwidgetchoice
  }
  // 获取表单数据
  getJSON() {
    const data = {}
    for (let [propName, widget] of this.widgetMap.entries()) {
      data[propName] = widget.options.value
    }
    return JSON.stringify(data, null, '  ')
  }
  // 返回选中物料属性
  getSeletedWidgetOptions() {
    return this.selectedWidget?.options ?? {}
  }
  //清空物料列表
  resetForm()
  {
    this.widgetList.forEach((item) => item.resetValue())//item就是widget类实例对象
  }
  // 导入JSON
  addWidgetListByJSON(json) {
    this.command.execute(
      new ImportWidgetCommand(
        json,
        { widgetList: this.widgetList, formConfig: this.formConfig },
        this.widgetMap,
      ),
    )
    this.selectWidgetByContainerIndex(this, 0)
  }
  // 选择物料
  selectWidgetByWidgetListIndex(widgetList, index) {
    const target = widgetList[index]
    if (!target) {
      ElMessage(`已经移动到最${index < 0 ? '上面' : '下面'}`)
      return
    }
    this.selectedWidget = target
    this.selectedWidget.index = index
    window.dispatchEvent(new CustomEvent('select_widget'))
  }
  //检测工作区的物料移动
  checkMove() {}
  //工作区物料更新回调
  dragUpdate = (e) => {
    const {oldIndex, newIndex} = e
    this.command.execute(
      new MoveWidgetCommand(this.widgetList, oldIndex, newIndex),
      false,
    )
  }
  //复制一个相同的组件到容器
  copyWidgetToContainer(widget, widgetList) {
    this.command.execute(
      new CopyWidgetToContainerCommand(widget, widgetList, this.widgetMap),
    )
  }
  //从容器中删除组件
  removeWidget(widgetList=this.widgetList)
  {
    this.command.execute(
      new RemoveWidgetCommand(
        widgetList,//物料集合
        this.selectWidget.bind(this),
        this.selectedWidget,//选中的物料
        this.widgetMap,//物料映射关系
      )
    )
  }
  // 从一个容器中移动物料去另一个容器
  moveWidgetFromAToBContainer(e, BContainer) {
    const { oldIndex, newIndex } = e
    // 当前选中物料的父容器就是AContainer
    this.command.execute(
      new MoveWidgetFromAToBContainerCommand(
        oldIndex,
        newIndex,
        this.parentContainer,
        BContainer,
      ),
      false,
    )
  }

  // 检测是否存在重复的组件名称
  checkPropName(propName) {
    return this.widgetMap.has(propName)
  }

  //往栅格中添加列
  addItem(grid) {
    this.command.execute(
      new AddGridItemCommand(grid.cols,this.widgetMap),
    )
  }
  //编辑事件代码
  eventChange(){
    this.command.execute(new EventPropChangeCommand(), false, false)
  }
  
}  

