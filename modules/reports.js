class Reports {
  constructor(api) {
    this.api = api;
    this.moduleBase = "billing";
  }

  list({ instanceUuid, field, sort, page, limit, from, to }) {
    return this.api.get(
      `/${this.moduleBase}/reports${instanceUuid ? `/${instanceUuid}` : ""}`,
      {
        params: { sort, field, page, limit, from, to },
      }
    );
  }

  count({ instanceUuid, field, sort, page, limit, from, to }) {
    return this.api.get(
      `/${this.moduleBase}/count/reports${
        instanceUuid ? `/${instanceUuid}` : ""
      }`,
      {
        params: { sort, field, page, limit, from, to },
      }
    );
  }
}

export default Reports;
