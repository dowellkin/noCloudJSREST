class ServicesProviders{
	constructor(api){
		this.api = api
		this.moduleBase = 'sp'
	}

	list(anonymously = true){
		return this.api.get(`/${this.moduleBase}`, { params: { anonymously } } )
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

  bindPlan(uuid, plan_uuid){
    return this.api.post(`${this.moduleBase}/${uuid}/bind_plan/${plan_uuid}`)
  }

  unbindPlan(uuid, plan_uuid){
    return this.api.post(`${this.moduleBase}/${uuid}/unbind_plan/${plan_uuid}`)
  }
}

export default ServicesProviders