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

    consume(type,uuid){
        return new WebSocket(
            this.api.axios.defaults.baseURL.replace('https','ws')+`bus/sub/${type}/${uuid}/`,
            ['Bearer',this.api.axios.defaults.headers.common['Authorization'].split(' ')[1]]
        )
    }
}

export default Events;