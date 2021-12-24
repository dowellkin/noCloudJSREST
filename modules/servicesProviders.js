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

	create({type, title, secrets, vars}){
		return this.api.put(`/${this.moduleBase}`, {
				"type": type,
				"title": title,
				"secrets": secrets,
				"vars": vars
		})
	}

	testConfig({type, title, secrets, vars}){
		return this.api.post(`/${this.moduleBase}`, {
				"type": type,
				"title": title,
				"secrets": secrets,
				"vars": vars
		})
	}
}

export default ServicesProviders