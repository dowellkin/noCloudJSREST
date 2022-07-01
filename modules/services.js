class Services {
	constructor(api) {
		this.api = api;
		this.moduleBase = 'services'
	}

	list() {
		return this.api.get(`/${this.moduleBase}`)
	}

	get(id) {
		if (id === undefined) {
			throw 'id is undefined'
		}
		return this.api.get(`/${this.moduleBase}/${id}`)
	}

	up(id, instance_group_uuid, services_provider_uuid) {
		if (id === undefined) {
			throw 'id is undefined'
		}
		return this.api.post(`/${this.moduleBase}/${id}/up`, {
			"deploy_policies": {
				[instance_group_uuid]: services_provider_uuid
			}
		})
	}

	down(uuid, body = {}) {
		return this.api.post(`/${this.moduleBase}/${uuid}/down`, body)
	}

	_create(body) {
		return this.api.put(`/${this.moduleBase}`, body)
	}
<<<<<<< HEAD
=======
	
	_update(data) {
		return this.api.patch(`/${this.moduleBase}/${data.uuid}`, data.service)
	}
>>>>>>> master

	_testConfig(body) {
		return this.api.post(`/${this.moduleBase}`, body)
	}

	create({ namespace, service }) {
		return this._create({
			"namespace": namespace,
			"service": service
		})
	}

	testConfig({ namespace, service }) {
		return this._testConfig({
			"namespace": namespace,
			"service": service
		})
	}

	delete(id) {
		return this.api.delete(`/${this.moduleBase}/${id}`)
	}

	action({ service, group, instance }, action, body = {}) {
		return this.api.post(`/${this.moduleBase}/${service}/${group}/${instance}/action/${action}`, body)
	}

	getStates(uuid) {
		return this.api.get(`/${this.moduleBase}/${uuid}/states`)
	}
}

export default Services;