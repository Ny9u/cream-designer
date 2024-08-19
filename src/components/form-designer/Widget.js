import { getRandomPropName, deepClone } from '@/utils/tool'
import axios from 'axios'

export class Widget {
	constructor(config, formConfig) {
		const tempId = Math.random()
		Object.assign(this, config)
		// 记录原始配置
		this.originConfig = deepClone(config)
		this.id = tempId
		this.options.propName = getRandomPropName(config.type)
		// 用于取到重复propName时回退
		this.options.originPropName = config.options.propName
		this.formConfig = formConfig
	}
	resetValue() {
		this.options.value = this.originConfig.options.value
	}
	setOptionsByKey(key, value) {
		this.options[key] = value
	}

	// 物料发送请求
	async post(data, config) {
		await axios.post(this.formConfig.baseURL + this.options.url, data, config)
	}
	async get(params, config) {
		await axios.get(this.formConfig.baseURL + this.options.url, params, config)
	}
}
