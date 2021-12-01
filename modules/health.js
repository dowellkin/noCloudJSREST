class Health{
	constructor(api){
		this.api = api;
		this.moduleBase = 'health'
	}

	probe(){
		return this.api.post(`/${this.moduleBase}/probe`, {
    "probe_type": "PING"
		})
	}
}

export default Health;