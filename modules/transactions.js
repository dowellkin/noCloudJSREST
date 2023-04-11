class Transactions {
  constructor(api) {
    this.api = api;
    this.moduleBase = "billing/transactions";
  }

  list(params) {
    return this.api.get(`/${this.moduleBase}`, { params });
  }

  get(uuid, params) {
    return this.api.get(`/${this.moduleBase}/${uuid}`, { params });
  }

  create(data) {
    return this.api.put(`/${this.moduleBase}`, data);
  }

  count(params) {
    return this.api.get("/billing/count/transactions", { params });
  }
}

export default Transactions;
