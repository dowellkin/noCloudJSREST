class Accounts{
	constructor(api){
		this.api = api;
		this.moduleBase = 'accounts'
	}

	create(data){
		return this.api.put(`/${this.moduleBase}`, data)
	}

	get(id){
		return this.api.get(`/${this.moduleBase}/${id}`)
	}

	list(){
		return this.api.get(`/${this.moduleBase}`)
	}

	update(id, data){
		return this.api.request('patch', `/${this.moduleBase}/${id}`, data)
	}

	credentials(id, data){
		return this.api.post(`/${this.moduleBase}/${id}/credentials`, data)
	}

	delete(id){
		return this.api.delete(`/${this.moduleBase}/${id}`)
	}
}

export default Accounts;