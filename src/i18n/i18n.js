import { createI18n } from 'vue-i18n'
import zh_CN from './langs/zh_CN'
import en_US from './langs/en_US'
export function getI18n() {
	const i18n = new createI18n({
		legacy: false,
		locale: 'zh_CN',
		messages: {
			zh_CN: zh_CN,
			en_US: en_US,
		},
	})
	return i18n
}

export default getI18n()
