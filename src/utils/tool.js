export const setMapValueByJSON =(map,json)=>{
    map.clear()
    const func = (widgetList) => {
      for (let i of widgetList) {
        if (!i.category) {
          map.set(i.options.propName, i)
        } else {
          func(i.cols ?? i.widgetList ?? [])
        }
      }
    }
    func(json)
    return map
}
export const deepClone = (obj, map = new WeakMap()) => {
    if (obj && typeof obj === 'object') {
      const isArray = Array.isArray(obj)
      const copyObj = isArray ? [] : {}
      if (map.has(obj)) return map.get(obj)
      map.set(obj, copyObj)
      for (let key in obj) {
        copyObj[key] = deepClone(obj[key], map)
      }
      return copyObj
    } else {
      return obj
    }
}

export const getRandomPropName = (widgetType) => {
  let res = widgetType
  for (let i = 0; i < 8; i++) {
    res += Math.floor(Math.random() * 10) + 1
  }
  return res
}

export const getWidgetName = (name) => {
  return name + '-widget'
}

export const saveJSONAsFile = (data, filename) => {
  if (!filename) filename = '1.json'
  if (typeof data === 'object') {
    data = JSON.stringify(data, undefined, 4)
  }
  var blob = new Blob([data], {//打包文件数据
      type: 'text/json'
    }),
  e = document.createEvent('MouseEvents'),//鼠标事件对象
  a = document.createElement('a')//创建a标签
  a.download = filename//下载时显示的文件名
  a.href = window.URL.createObjectURL(blob)//将要下载的文件转换成URL
  a.dataset.downloadurl = ['text/json', a.download, a.href].join('_')//告诉浏览器如何处理下载
  e.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null)
  a.dispatchEvent(e)//触发链接元素a上的点击事件，实现文件的下载
}

export const getRenderName = (widget) => {
  if (widget.category) {
    return widget.type + '-render'
  }
  return widget.type + '-widget'
}