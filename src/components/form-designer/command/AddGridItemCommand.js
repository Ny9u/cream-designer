import { deepClone } from "@/utils/tool" 
import { containerFields } from '../widget-panel/widgetConfig'
import { Widget } from "../Widget"
export class AddGridItemCommand{
    constructor(cols,widgetMap){
        this.cols=cols
        this.widgetMap=widgetMap
        const gridcol=containerFields.filter(item=>item.type==='grid-col')[0]
        this.widget=new Widget(deepClone(gridcol))
    }

    execute(){
        this.cols.push(this.widget)
        this.widgetMap.set(this.widget.options.propName,this.widget)
    }

    undo(){
        this.widgetList.pop()
        this.widgetMap.delete(this.widget.options.propName)
    }
}