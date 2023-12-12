class Showcases {
  constructor(api) {
    this.api = api;
    this.moduleBase = 'showcases'
  }

  create(showcase) {
    return this.api.post(`/${this.moduleBase}`, showcase)
  }

  delete(id) {
    return this.api.delete(`/${this.moduleBase}/${id}`)
  }

  update(showcase) {
    return this.api.patch(`/${this.moduleBase}/${showcase.uuid}`, showcase)
  }

  get(uuid) {
    return this.api.get(`/${this.moduleBase}/${uuid}`)
  }

  list(params) {
    return this.api.get(`/${this.moduleBase}`, { params })
  }
}

export default Showcases;