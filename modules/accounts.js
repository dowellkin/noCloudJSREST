class Accounts {
	constructor(api) {
		this.api = api;
		this.moduleBase = 'accounts'
	}

	create(data) {
		return this.api.put(`/${this.moduleBase}`, data)
	}

	get(id) {
		return this.api.get(`/${this.moduleBase}/${id}`)
	}

	list() {
		return this.api.get(`/${this.moduleBase}`)
	}

	update(id, data) {
		return this.api.request('patch', `/${this.moduleBase}/${id}`, data)
	}

	credentials(id, data) {
		return this.api.post(`/${this.moduleBase}/${id}/credentials`, data)
	}

	delete(id) {
		return this.api.delete(`/${this.moduleBase}/${id}`)
	}

	addNote(uuid, data) {
		return this.api.post(`/${this.moduleBase}/${uuid}/note`, data);
	}

	removeNote(uuid, params) {
		return this.api.delete(`/${this.moduleBase}/${uuid}/note`, { params });
	}

	updateNote(uuid, data) {
		return this.api.patch(`/${this.moduleBase}/${uuid}/note`, data);
	}
}

export default Accounts;