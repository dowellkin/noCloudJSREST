class Settings{
	constructor(api){
		this.api = api
		this.moduleBase = 'settings'
	}

	list(){
		return this.api.get(`/${this.moduleBase}`)
	}

	getKeys(keys = []){
		return this.api.post(`/${this.moduleBase}`, {keys})
	}

	get(keys = []){
		if(keys.length == 0){
			return new Promise((resolve, reject) => {
				this.list()
				.then(keys => {
					this.getKeys(keys.pool)
					.then(resolve)
				})
				.catch(reject)
			})
		} else 
			return this.getKeys(keys)
	}

	addKey(key, data){
		return this.api.put(`/${this.moduleBase}/${key}`, data)
	}

	delete(key){
		return this.api.delete(`/${this.moduleBase}/${key}`)
	}
}

export default Settings