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
		return this.api.put(`/${this.moduleBase}`, this.generate({type, title, secrets, vars}))
	}

	testConfig({type, title, secrets, vars}){
		return this.api.post(`/${this.moduleBase}`, this.generate({type, title, secrets, vars}))
	}

	update(uuid, {type, title, secrets, vars}){
		return this.api.patch(`/${this.moduleBase}/${uuid}`, this.generate({type, title, secrets, vars}))
	}

	generate({type, title, secrets, vars}){
		return {
			"type": type,
			"title": title,
			"secrets": secrets,
			"vars": vars
		}
	}

	getExtentionsList(){
		return this.api.get(`${this.moduleBase}-ext`);
	}
}

export default ServicesProviders