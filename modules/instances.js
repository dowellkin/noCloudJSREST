class Instances {
	constructor(api) {
		this.api = api;
		this.moduleBase = 'instances'
	}

	action(instance, method, params = {}) {
		return this.api.post(`/${this.moduleBase}/${instance}/invoke`, {method, params})
	}
}

export default Instances;