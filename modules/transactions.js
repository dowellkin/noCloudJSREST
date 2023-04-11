class Transactions {
  constructor(api) {
    this.api = api;
    this.moduleBase = "billing/transactions";
  }

  list(params) {
    return this.api.get(`/${this.moduleBase}`, { params });
  }

  get(uuid) {
    return this.api.get(`/${this.moduleBase}`, { params: { uuid } });
  }

  create(data) {
    return this.api.put(`/${this.moduleBase}`, data);
  }

  count(params) {
    return this.api.get("/billing/count/transactions", { params });
  }

  records(uuid, params) {
    return this.api.get(`/${this.moduleBase}/${uuid}`, { params });
  }
}

export default Transactions;
