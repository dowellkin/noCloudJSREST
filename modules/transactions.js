class Transactions {
  constructor(api) {
    this.api = api;
    this.moduleBase = "billing/transactions";
  }

  get(params) {
    return this.api.get(`/${this.moduleBase}`, { params });
  }

  create(data) {
    return this.api.put(`/${this.moduleBase}`, data);
  }
}

export default Transactions;
