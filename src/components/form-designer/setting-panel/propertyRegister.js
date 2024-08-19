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
	// --------------范围选择器属性------------------
	'rangeSeparator',
	// --------------栅格属性------------------
	'colHeight', // 统一列高
	'gutter', // 栅格间距
	'span', // 栅格长度
	'offset', // 整体偏移
	'pull', // 栅格列左偏移
	'push', // 栅格列右偏移
	// --------------按钮特有属性-----------------------
	'type',
	'plain', //未实现
	'text', //未实现
	'bg', //未实现
	'link', //未实现
	'round', //未实现
	'circle', //未实现
	'color', //未实现
	'dark', //未实现
	// 分割线属性-----------------------
	'borderStyle',
	'contentPosition',
	'direction',
	// 按钮属性
	'name',
	// 上传器属性----------------
	'address',
	// --------------表单特有属性-----------------------
	'formDataName', // 数据对象名称
	'formRefName', // 表单引用名称
	'formRulesName', // 表单规则名称
	'baseURL', // 表单请求地址
	'formLabelWidth',
	'gridOptionItem',
	// --------------时间属性------------------
	'timeFormat',
	// --------------时间范围属性------------------
	'timeRangeFormat',
	// --------------日期属性------------------
	'dateFormat',
	// --------------日期范围属性------------------
	'dateRangeFormat',
	// --------------评分属性------------------
	'rateValue',
	// --------------颜色选择器属性------------------
	'colorPickerValue',
	//--------------开关属性------------------
	'switchValue',
	// --------------级联选择器属性------------------
	'cascaderOption',
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
	'onFormMounted',
]
