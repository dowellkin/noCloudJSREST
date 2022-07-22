class Instances {
	constructor(api) {
		this.api = api;
		this.moduleBase = 'instances'
	}

	action(data) {
		return this.api.post(`/${this.moduleBase}/${data.uuid}/invoke`, { method: data.action, params: data.params })
	}
}

export default Instances;