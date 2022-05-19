class Plans {
	constructor(api){
		this.api = api
		this.moduleBase = 'billing/plans'
	}

	list(){
		return this.api.get(`/${this.moduleBase}`)
	}

	get(id){
		if(id === undefined){
			throw 'id is undefined'
		}
		return this.api.get(`/${this.moduleBase}/${id}`)
	}

	create(data){
		return this.api.put(`/${this.moduleBase}`, data)
	}

	update(uuid, data){
		return this.api.patch(`/${this.moduleBase}/${uuid}`, data)
	}

	delete(uuid){
		return this.api.delete(`/${this.moduleBase}/${uuid}`)
	}
}

export default Plans