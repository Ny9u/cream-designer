/**
 * 用此文件注册属性编辑器，便于分类和查找。
 * 含义：当属性名存在于此数组中时，认定为已注册属性，允许显示该属性编辑器组件
 */
export const COMMON_PROPERTIES = [
    'propName', // 字段名
    'label',
    'labelAlign',
    'labelWidth',
    'labelHidden',
    'isRequired',
    'displayType',
    'size',
    'requiredMessage',
    'rule',
    'errorMessage',
    'defaultValue',
    'placeholder',
    'readonly',
    'disabled',
    'clearable',
    'hidden',
    'multiple',
    'allowCreate',
    'filterable',
    'format',
    'optionItem',
    'url',
    // --------------时间选择器属性------------------
    'rangeSeparator',
    // --------------栅格属性------------------
    'colHeight', // 统一列高
    'gutter', // 栅格间距
    'span', // 栅格占比
    'offset', // 栅格左侧间隔格数
    'pull', // 栅格列左偏移
    'push', // 栅格列右偏移
    // --------------按钮特有属性-----------------------
    'type',
    'plain',
    'text',
    'bg',
    'link',
    'round',
    'circle',
    'color',
    'dark',
    // 分割线属性-----------------------
    'borderStyle',
    'contentPosition',
    'direction',
    // 按钮属性
    'name',
    // 上传器属性----------------
    'action',
    // --------------表单特有属性-----------------------
    'formDataName', // 数据对象名称
    'formRefName', // 表单引用名称
    'formRulesName', // 表单规则名称
    'baseURL', // 表单请求地址
    'formLabelWidth'
  ]
  
  export const EVENT_PROPERTIES = [
    'onBlur',
    'onFocus',
    'onChange',
    'onInput',
    'onClear',
    'onVisibleChange',
    'onRemoveTag',
    'onClick',
    'onFormMounted'
  ]
  