class Transactions {
  constructor(api) {
    this.api = api;
    this.moduleBase = "billing/transactions";
  }

  get(account = "") {
    return this.api.get(`/${this.moduleBase}`, { params: { account } });
  }

  create(data) {
    return this.api.put(`/${this.moduleBase}`, data);
  }
}

export default Transactions;
