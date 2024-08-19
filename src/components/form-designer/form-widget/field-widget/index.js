const comps = {}

const modules = import.meta.glob('./*.vue', { eager: true })
for (const path in modules) {
	const cname = modules[path].default.name
	comps[cname] = modules[path].default
}

export default comps
