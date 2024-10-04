// 定义物料属性
export const containerFields = [
	{
		type: 'grid',
		displayName: '栅格',
		category: 'container',
		icon: 'full-screen',
		cols: [], //存储栅格列
		options: {
			propName: '',
			colHeight: '50', // 统一列高度
			gutter: 0, //列间距
			//hidden: false,
			gridOptionItem: [],
			justify: '',
			align: '',
		},
	},
	{
		type: 'grid-col',
		displayName: '栅格列',
		category: 'container',
		hidden: true, // 不显示容器元素的子元素
		widgetList: [], //嵌套元素列表
		options: {
			propName: '',
			span: 12, //宽度
			offset: 0,
			push: 0,
			pull: 0,
		},
	},
]
// 基础物料
export const basicFields = [
	{
		type: 'input',
		displayName: '单行输入',
		icon: 'edit',
		options: {
			propName: '', // 字段名称
			defaultValue: '', // 初始值
			label: 'input',
			labelAlign: 'left',
			labelWidth: '80',
			labelHidden: false,
			isRequired: false,
			requiredMessage: '请输入', // 必填校验提示
			rule: '', // 校验
			errorMessage: '', // 校验失败提示
			value: '', // 绑定值
			displayType: 'text',
			size: 'default',
			placeholder: '请输入',
			readonly: false,
			disabled: false,
			clearable: false,
			hidden: false,
			// 事件属性-------------------------
			onBlur: '',
			onFocus: '',
			onChange: '',
			onInput: '',
			onClear: '',
		},
	},
	{
		type: 'textarea',
		displayName: '多行输入',
		icon: 'document',
		options: {
			propName: '', // 字段名称
			defaultValue: '', // 初始值
			label: 'textarea',
			labelAlign: 'left',
			labelWidth: '80',
			labelHidden: false,
			isRequired: false,
			requiredMessage: '请输入', // 必填校验提示
			rule: '', // 校验
			errorMessage: '', // 校验失败提示
			value: '', // 绑定值
			displayType: 'textarea',
			size: 'default',
			placeholder: '请输入',
			readonly: false,
			disabled: false,
			clearable: false,
			hidden: false,
			// 事件属性-------------------------
			onBlur: '',
			onFocus: '',
			onChange: '',
			onInput: '',
			onClear: '',
		},
	},
	{
		type: 'radio',
		displayName: '单选项',
		icon: 'menu',
		options: {
			// 通用属性-------------------------
			propName: '', // 字段名称
			label: 'radio',
			labelAlign: 'left',
			labelWidth: '80',
			labelHidden: false,
			isRequired: false,
			requiredMessage: '请输入', // 必填校验提示
			rule: '', // 校验
			errorMessage: '', // 校验失败提示
			value: '', // 绑定值
			widgetSize: 'small',
			size: 'default',
			disabled: false,
			hidden: false,
			// 特有属性-------------------------
			optionItem: [
				{
					label: '选项1',
					value: 1,
				},
				{
					label: '选项2',
					value: 2,
				},
				{
					label: '选项3',
					value: 3,
				},
			],
			// 事件属性-------------------------
			onChange: '',
		},
	},
	{
		type: 'checkbox',
		displayName: '多选项',
		icon: 'grid',
		options: {
			// 通用属性-------------------------
			propName: '', // 字段名称
			label: 'checkbox',
			labelAlign: 'left',
			labelWidth: '80',
			labelHidden: false,
			isRequired: false,
			requiredMessage: '请输入', // 必填校验提示
			rule: '', // 校验
			errorMessage: '', // 校验失败提示
			value: [], // 绑定值
			widgetSize: 'small',
			size: 'default',
			disabled: false,
			hidden: false,
			// 特有属性-------------------------
			optionItem: [
				{
					label: '选项1',
					value: 1,
				},
				{
					label: '选项2',
					value: 2,
				},
				{
					label: '选项3',
					value: 3,
				},
				{
					label: '选项4',
					value: 4,
				},
			],
			// 事件属性-------------------------
			onChange: '',
		},
	},
	{
		type: 'select',
		displayName: '下拉选项',
		icon: 'more',
		options: {
			// 通用属性-------------------------
			propName: '', // 字段名称
			label: 'select',
			labelAlign: 'left',
			labelWidth: '80',
			labelHidden: false,
			isRequired: false,
			requiredMessage: '请输入', // 必填校验提示
			rule: '', // 校验
			errorMessage: '', // 校验失败提示
			value: '', // 绑定值
			widgetSize: 'small',
			size: 'default',
			disabled: false,
			placeholder: '请选择',
			// 特有属性-------------------------
			clearable: true,
			multiple: false,
			allowCreate: false, // 可创建新选项
			filterable: false, // 可搜索选项
			hidden: false,
			optionItem: [
				{
					label: '选项1',
					value: 1,
				},
				{
					label: '选项2',
					value: 2,
				},
				{
					label: '选项3',
					value: 3,
				},
			],
			// 事件属性-------------------------
			onBlur: '',
			onFocus: '',
			onChange: '',
			onClear: '',
			onVisibleChange: '',
			onRemoveTag: '',
		},
	},
	{
		type: 'button',
		displayName: '按钮',
		icon: 'help',
		options: {
			// 通用属性-------------------------
			propName: '', // 字段名称
			name: '按钮',
			value: '', // 绑定值
			widgetSize: 'small',
			size: 'default',
			type: 'primary',
			disabled: false,
			readonly: false,
			hidden: false,
			onClick: '',
			url: '',
			// 特有属性
			loading: false,
		},
	},
	{
		type: 'time',
		displayName: '时间',
		icon: 'watch',
		options: {
			// 通用属性-------------------------
			propName: '', // 字段名称
			defaultValue: '', // 初始值
			label: 'time',
			labelAlign: 'left',
			labelWidth: '80',
			labelHidden: false,
			isRequired: false,
			requiredMessage: '请输入', // 必填校验提示
			value: '', // 绑定值
			widgetSize: 'small',
			size: 'default',
			disabled: false,
			placeholder: '请选择',
			// 特有属性-------------------------
			clearable: true,
			hidden: false,
			timeFormat: 'HH:mm:ss',
			timeOption: [
				{
					label: 'HH:mm:ss',
					value: 'HH:mm:ss',
				},
				{
					label: 'hh:mm:ss',
					value: 'hh:mm:ss',
				},
				{
					label: 'HH时mm分ss秒',
					value: 'HH时mm分ss秒',
				},
			],
			// 事件属性-------------------------
			onChange: '',
			onBlur: '',
			onFocus: '',
			onVisibleChange: '',
		},
	},
	{
		type: 'time-range',
		displayName: '时间范围',
		icon: 'alarm-clock',
		options: {
			// 通用属性-------------------------
			propName: '', // 字段名称
			defaultValue: '', // 初始值
			label: 'timeRange',
			labelAlign: 'left',
			labelWidth: '80',
			labelHidden: false,
			isRequired: false,
			requiredMessage: '请输入', // 必填校验提示
			value: '', // 绑定值
			widgetSize: 'small',
			size: 'default',
			disabled: false,
			placeholder: '请选择',
			clearable: true,
			hidden: false,
			// 特有属性-------------------------
			timeRangeFormat: 'HH:mm:ss',
			rangeSeparator: '至',
			timeRangeOption: [
				{
					label: 'HH:mm:ss',
					value: 'HH:mm:ss',
				},
				{
					label: 'hh:mm:ss',
					value: 'hh:mm:ss',
				},
				{
					label: 'HH时mm分ss秒',
					value: 'HH时mm分ss秒',
				},
			],
			// 事件属性-------------------------
			onChange: '',
			onBlur: '',
			onFocus: '',
			onVisibleChange: '',
		},
	},
	{
		type: 'date',
		displayName: '日期',
		icon: 'sunrise',
		options: {
			// 通用属性-------------------------
			propName: '', // 字段名称
			defaultValue: '', // 初始值
			label: 'date',
			labelAlign: 'left',
			labelWidth: '80',
			labelHidden: false,
			isRequired: false,
			requiredMessage: '请输入', // 必填校验提示
			value: '', // 绑定值
			widgetSize: 'small',
			size: 'default',
			disabled: false,
			placeholder: '请选择',
			// 特有属性-------------------------
			clearable: true,
			hidden: false,
			dateFormat: 'YYYY-MM-DD',
			dateOption: [
				{
					label: 'YYYY-MM-DD',
					value: 'YYYY-MM-DD',
				},
				{
					label: 'YYYY/MM/DD',
					value: 'YYYY/MM/DD',
				},
				{
					label: 'YYYY年MM月DD日',
					value: 'YYYY年MM月DD日',
				},
			],
			// 事件属性-------------------------
			onChange: '',
			onBlur: '',
			onFocus: '',
			onVisibleChange: '',
			onCalendarChange: '',
			onPanelChange: '',
		},
	},
	{
		type: 'date-range',
		displayName: '日期范围',
		icon: 'data-board',
		options: {
			// 通用属性-------------------------
			propName: '', // 字段名称
			defaultValue: '', // 初始值
			label: 'date-range',
			labelAlign: 'left',
			labelWidth: '80',
			labelHidden: false,
			isRequired: false,
			requiredMessage: '请输入', // 必填校验提示
			value: '', // 绑定值
			widgetSize: 'small',
			size: 'default',
			disabled: false,
			placeholder: '请选择',
			// 特有属性-------------------------
			clearable: true,
			hidden: false,
			dateRangeFormat: 'YYYY/MM/DD', // TODO: 该组件好像无法动态format，后续看看如何解决
			rangeSeparator: '至',
			dateRangeOption: [
				{
					label: 'YYYY-MM-DD',
					value: 'YYYY-MM-DD',
				},
				{
					label: 'YYYY/MM/DD',
					value: 'YYYY/MM/DD',
				},
				{
					label: 'YYYY年MM月DD日',
					value: 'YYYY年MM月DD日',
				},
			],
			// 事件属性-------------------------
			onChange: '',
		},
	},
	{
		type: 'rate',
		displayName: '评分',
		icon: 'trophy',
		options: {
			// 通用属性-------------------------
			propName: '', // 字段名称
			//defaultValue: 0, // 初始值
			rateValue: 0, //为了属性组件唯一而设置的属性,代替defaultValue
			label: 'rate',
			labelAlign: 'left',
			labelWidth: '80',
			labelHidden: false,
			isRequired: false,
			requiredMessage: '请输入', // 必填校验提示
			value: 0, // 绑定值
			widgetSize: 'small',
			size: 'default',
			disabled: false,
			hidden: false,
			// 特有属性-------------------------
			//allowHalf: true, // 允许半星
		},
	},
	{
		type: 'switch',
		displayName: '开关',
		icon: 'switch-button',
		options: {
			// 通用属性-------------------------
			propName: '', // 字段名称
			//defaultValue: '', // 初始值
			switchValue: '',
			label: 'switch',
			labelAlign: 'left',
			labelWidth: '80',
			labelHidden: false,
			value: '', // 绑定值
			widgetSize: 'small',
			size: 'default',
			disabled: false,
			hidden: false,
			// 特有属性-------------------------
			loading: false,
			activeValue: true, // 状态on时的值
			InactiveValue: false, // 状态off时的值
		},
	},
	{
		type: 'color-picker',
		displayName: '取色器',
		icon: 'brush',
		options: {
			// 通用属性-------------------------
			propName: '', // 字段名称
			//defaultValue: '', // 初始值
			colorPickerValue: '',
			label: 'color-picker',
			labelAlign: 'left',
			labelWidth: '80',
			labelHidden: false,
			value: '', // 绑定值
			widgetSize: 'small',
			size: 'default',
			disabled: false,
			hidden: false,
			// 特有属性-------------------------
			showAlpha: true,
		},
	},
	{
		type: 'divider',
		displayName: '分割线',
		icon: 'guide',
		options: {
			// 通用属性-------------------------
			propName: '', // 字段名称
			defaultValue: 'divider', // 初始值
			widgetSize: 'small',
			hidden: false,
			// 特有属性-------------------------
			direction: 'horizontal',
			borderStyle: 'solid',
			contentPosition: 'center',
		},
	},
	{
		type: 'text',
		displayName: '纯文字',
		icon: 'document-add',
		options: {
			// 通用属性-------------------------
			propName: '', // 字段名称
			defaultValue: 'text', // 初始值
			widgetSize: 'small',
			disabled: false,
			hidden: false,
		},
	},
	{
		type: 'upload',
		displayName: '上传器',
		icon: 'upload',
		options: {
			// 通用属性-------------------------
			propName: '', // 字段名称
			defaultValue: 'upload', // 初始值
			widgetSize: 'small',
			disabled: false,
			hidden: false,
			// 特有属性-------------------------
			address: '',
			showFileList: false,
			onbeforeunload: '',
			onSuccess: '',
		},
	},
]

// 高级物料
export const advanceFields = [
	{
		type: 'cascader',
		displayName: '级联选择',
		icon: 'film',
		options: {
			// 通用属性-------------------------
			propName: '', // 字段名称
			//defaultValue: '', // 初始值
			label: 'cascader',
			labelAlign: 'left',
			labelWidth: '80',
			labelHidden: false,
			isRequired: false,
			requiredMessage: '请输入', // 必填校验提示
			rule: '', // 校验
			errorMessage: '', // 校验失败提示
			value: '', // 绑定值
			widgetSize: 'small',
			size: 'default',
			disabled: false,
			placeholder: '请选择',
			// 特有属性-------------------------
			clearable: true,
			multiple: false,
			filterable: false, // 可搜索选项
			cascaderOption: [
				{
					label: '选项A',
					value: 1,
				},
				{
					label: '选项B',
					value: 2,
					children: [
						{
							label: '选项1',
							value: 4,
						},
					],
				},
				{
					label: '选项C',
					value: 3,
					children: [
						{
							label: '选项1',
							value: 5,
							children: [
								{
									label: '选项一',
									value: 6,
								},
							],
						},
					],
				},
			],
		},
	},
]
