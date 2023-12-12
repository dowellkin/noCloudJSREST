class ServicesProviders {
  constructor(api) {
    this.api = api;
    this.moduleBase = "sp";
  }

  list(params) {
    return this.api.get(`/${this.moduleBase}`, { params });
  }

  get(id) {
    if (id === undefined) {
      throw "id is undefined";
    }
    return this.api.get(`/${this.moduleBase}/${id}`);
  }

  create(data) {
    return this.api.put(`/${this.moduleBase}`, data);
  }

  testConfig(data) {
    return this.api.post(`/${this.moduleBase}`, data);
  }

  update(uuid, data) {
    return this.api.patch(`/${this.moduleBase}/${uuid}`, data);
  }

  getExtentionsList() {
    return this.api.get(`${this.moduleBase}-ext`);
  }

  bindPlan(uuid, plans) {
    return this.api.post(`${this.moduleBase}/${uuid}/bind_plan`, { plans });
  }

  unbindPlan(uuid, plans) {
    return this.api.post(`${this.moduleBase}/${uuid}/unbind_plan`, { plans });
  }

  action(data) {
    return this.api.post(`/${this.moduleBase}/${data.uuid}/invoke`, {
      method: data.action,
      params: data.params,
    });
  }
}

export default ServicesProviders;
