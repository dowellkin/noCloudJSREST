class ServicesProviders{
	constructor(api){
		this.api = api
		this.moduleBase = 'sp'
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

	testConfig(data){
		return this.api.post(`/${this.moduleBase}`, data)
	}

	update(uuid, data){
		return this.api.patch(`/${this.moduleBase}/${uuid}`, data)
	}

	getExtentionsList(){
		return this.api.get(`${this.moduleBase}-ext`)
	}
}

export default ServicesProviders