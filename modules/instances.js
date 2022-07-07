class Instances {
	constructor(api) {
		this.api = api;
		this.moduleBase = 'instances'
	}

	action(data, params = {}) {
		return this.api.post(`/${this.moduleBase}/${data.uuid}/invoke`, { method:data.action, params })
	}
}

export default Instances;