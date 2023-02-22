class Events{
    constructor(api){
        this.api = api;
        this.moduleBase = 'bus'
    }

    list(type,uuid){
        return this.api.get(`/${this.moduleBase}/list/${type}/${uuid}`)
    }

    publish(event){
        return this.api.post('/'+this.moduleBase+'/pub',event)
    }

    cancel(type,id,uuid){
        return this.api.post('/'+this.moduleBase+'/cancel',{type,uuid,id})
    }
}

export default Events;