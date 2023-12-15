class Instances {
	constructor(api) {
		this.api = api;
		this.moduleBase = "instances";
	}

	action(data) {
		return this.api.post(`/${this.moduleBase}/${data.uuid}/invoke`, {
			method: data.action,
			params: data.params,
		});
	}

	move(uuid, ig) {
		return this.api.post(`/${this.moduleBase}/${uuid}`, { ig });
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

export default Instances;
