class DNS{
	constructor(api){
		this.api = api;
		this.moduleBase = 'dns'
	}

	get(id){
		return this.api.get(`/${this.moduleBase}/${id}`)
	}

	list(){
		return this.api.get(`/${this.moduleBase}`)
	}

	setZone(data){
		return this.api.put(`/${this.moduleBase}/`, data)
	}

	delete(id){
		return this.api.delete(`/${this.moduleBase}/${id}`)
	}
}

export default DNS;