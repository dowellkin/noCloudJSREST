class Transactions {
  constructor(api) {
    this.api = api;
    this.moduleBase = "billing/transactions";
  }

  get(params) {
    return this.api.get(`/${this.moduleBase}`, { params });
  }

  count(params) {
    return this.api.get("/billing/count/transactions", { params });
  }

  create(data) {
    return this.api.put(`/${this.moduleBase}`, data);
  }
}

export default Transactions;
