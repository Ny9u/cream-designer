import axios from 'axios'
window.axios = axios
export default function (designer, formJSON) {
	// 注册表单的所需事件
	function onFormMounted(val) {
		const func = new Function('val', 'axios', formJSON.formConfig.onFormMounted)
		func.call(designer, val, window.axios)
	}
	return {
		onFormMounted,
	}
}
