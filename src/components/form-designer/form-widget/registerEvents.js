// 混入组件，用于注册物料的所需事件
import axios from 'axios'
window.axios = axios
const AsyncFuntion = Object.getPrototypeOf(async function () {}).constructor
export default {
	inject: ['designer'],
	props: {
		widget: {
			type: Object,
			default: () => {},
		},
	},
	methods: {
		onInputHandle(val) {
			const func = new AsyncFuntion('val', 'axios', this.widget.options.onInput)
			func.call(this.designer, val, window.axios)
		},
		onFocusHandle() {
			const func = new AsyncFuntion('axios', this.widget.options.onFocus)
			func.call(this.designer, window.axios)
		},
		onBlurHandle() {
			const func = new AsyncFuntion('axios', this.widget.options.onBlur)
			func.call(this.designer, window.axios)
		},
		onChangeHandle(val) {
			const func = new AsyncFuntion(
				'val',
				'axios',
				this.widget.options.onChange
			)
			func.call(this.designer, val, window.axios)
		},
		onClearHandle() {
			const func = new AsyncFuntion('axios', this.widget.options.onClear)
			func.call(this.designer, window.axios)
		},
		onVisibleChangeHandle() {
			const func = new AsyncFuntion(
				'axios',
				this.widget.options.onVisibleChange
			)
			func.call(this.designer, window.axios)
		},
		onRemoveTagHandle(val) {
			const func = new AsyncFuntion(
				'val',
				'axios',
				this.widget.options.onRemoveTag
			)
			func.call(this.designer, val, window.axios)
		},
		onCalendarChangeHandle(val) {
			const func = new AsyncFuntion(
				'val',
				'axios',
				this.widget.options.onCalendarChange
			)
			func.call(this.designer, val, window.axios)
		},
		onPanelChangeHandle(val) {
			const func = new AsyncFuntion(
				'val',
				'axios',
				this.widget.options.onPanelChange
			)
			func.call(this.designer, val, window.axios)
		},
		onbeforeunloadHandle(val) {
			const func = new AsyncFuntion(
				'val',
				'axios',
				this.widget.options.onbeforeunload
			)
			func.call(this.designer, val, window.axios)
		},
		onSuccessHandle(val) {
			const func = new AsyncFuntion(
				'val',
				'axios',
				this.widget.options.onbeforeunload
			)
			func.call(this.designer, val, window.axios)
		},
		onClickHandle(val) {
			const func = new AsyncFuntion('val', 'axios', this.widget.options.onClick)
			func.call(this.designer, val, window.axios)
		},
	},
}
