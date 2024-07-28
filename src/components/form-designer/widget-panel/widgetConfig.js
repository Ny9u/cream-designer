// 定义物料属性
export const containerFields = [
    {
      type: 'grid',
      displayName: '栅格',
      category: 'container',
      icon: 'Setting',
      cols: [],
      options: {
        propName: '',
        hidden: false,
        colHeight: '50', // 统一列高度
        optionItem: [],
        gutter: 0, //列间距
        justify: '',
        align: '',
      },
    },
    {
      type: 'grid-col',
      displayName: '栅格列',
      category: 'container',
      hidden: true, // 不显示容器元素的子元素
      widgetList: [],
      options: {
        propName: '',
        span: 12,
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
      icon: 'House',
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
        onBlur: '',
        onFocus: '',
        onChange: '',
        onInput: '',
        onClear: '',
      },
    },
    {
      type: 'input',
      displayName: '多行输入',
      icon: 'FullScreen',
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
      icon: 'Loading',
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
        // 特有属性-------------------------
        optionItem: [
          {
            label: 'a',
            value: 1,
          },
          {
            label: 'b',
            value: 2,
          },
          {
            label: 'c',
            value: 3,
          },
        ],
        hidden: false,
        onChange: '',
      },
    },
    {
      type: 'checkbox',
      displayName: '多选项',
      icon: 'Link',
  
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
        // 特有属性-------------------------
        optionItem: [
          {
            label: 'a',
            value: 1,
          },
          {
            label: 'b',
            value: 2,
          },
          {
            label: 'c',
            value: 3,
          },
        ],
        hidden: false,
        onChange: '',
      },
    },
    {
      type: 'select',
      displayName: '下拉选项',
      icon: 'Service',
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
            label: 'a',
            value: 1,
          },
          {
            label: 'b',
            value: 2,
          },
          {
            label: 'c',
            value: 3,
          },
        ],
        onBlur: '',
        onFocus: '',
        onChange: '',
        onClear: '',
        onVisibleChange: '',
        onRemoveTag: '',
      },
    },
    {
      type: 'time',
      displayName: '时间',
      icon: 'Pointer',
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
        format: 'HH:mm:ss',
        onChange: '',
        onBlur: '',
        onFocus: '',
        onVisibleChange: '',
      },
    },
    {
      type: 'time-range',
      displayName: '时间范围',
      icon: 'Star',
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
        // 特有属性-------------------------
        clearable: true,
        hidden: false,
        format: 'HH:mm:ss',
        rangeSeparator: '至',
        onChange: '',
        onBlur: '',
        onFocus: '',
        onVisibleChange: '',
      },
    },
    {
      type: 'date',
      displayName: '日期',
      icon: 'Notification',
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
        format: 'YYYY-MM-DD',
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
      icon: 'Connection',
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
        format: 'YYYY/MM/DD', // TODO: 该组件好像无法动态format，后续看看如何解决
        rangeSeparator: '至',
        onChange: '',
      },
    },
    {
      type: 'button',
      displayName: '按钮',
      icon: 'ChatDotRound',
      options: {
        // 通用属性-------------------------
        propName: '', // 字段名称
        name: 'button',
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
      type: 'rate',
      displayName: '评分',
      icon: 'Setting',
      options: {
        // 通用属性-------------------------
        propName: '', // 字段名称
        defaultValue: 0, // 初始值
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
        allowHalf: true, // 允许半星
      },
    },
    {
      type: 'switch',
      displayName: '开关',
      icon: 'Clock',
      options: {
        // 通用属性-------------------------
        propName: '', // 字段名称
        defaultValue: '', // 初始值
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
      icon: 'Position',
      options: {
        // 通用属性-------------------------
        propName: '', // 字段名称
        defaultValue: '', // 初始值
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
      icon: 'Discount',
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
      icon: 'Odometer',
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
      icon: 'ChatSquare',
      options: {
        // 通用属性-------------------------
        propName: '', // 字段名称
        defaultValue: 'upload', // 初始值
        widgetSize: 'small',
        disabled: false,
        hidden: false,
        // 特有属性-------------------------
        action: '',
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
      icon: 'ChatDotRound',
      options: {
        // 通用属性-------------------------
        propName: '', // 字段名称
        defaultValue: '', // 初始值
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
        optionItem: [
          {
            label: 'a',
            value: 1,
            children: [
              {
                label: 'a-1',
                value: 4,
              },
            ],
          },
          {
            label: 'b',
            value: 2,
          },
          {
            label: 'c',
            value: 3,
            children: [
              {
                label: 'c-1',
                value: 5,
                children: [
                  {
                    label: 'c-1-1',
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