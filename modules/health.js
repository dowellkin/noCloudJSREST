class Health{
	constructor(api){
		this.api = api;
		this.moduleBase = 'health'
	}

	ping(){
		return this.api.post(`/${this.moduleBase}/probe`, {
    "probe_type": "PING"
		})
	}

	services(){
		return this.api.post(`/${this.moduleBase}/probe`, {
    "probe_type": "services"
		})
	}

	routines(){
		return this.api.post(`/${this.moduleBase}/probe`, {
    "probe_type": "routines"
		})
	}
}

export default Health;