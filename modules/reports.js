class Reports {
  constructor(api) {
    this.api = api;
    this.moduleBase = "billing";
  }

  list({ field, sort, page, limit, from, to, filters }) {
    return this.api.post(`/${this.moduleBase}/reports`, {
      sort,
      field,
      page,
      limit,
      from,
      to,
      filters,
    });
  }

  count({ field, sort, page, limit, from, to, filters }) {
    return this.api.post(`/${this.moduleBase}/count/reports`, {
      sort,
      field,
      page,
      limit,
      from,
      to,
      filters,
    });
  }

  base_list({ field, sort, page, limit, from, to, filters }) {
    return this.api.get(`/${this.moduleBase}/base_reports`, {
      params: {
        sort,
        field,
        page,
        limit,
        from,
        to,
        filters,
      },
    });
  }

  base_count({ field, sort, page, limit, from, to, filters }) {
    return this.api.get(`/${this.moduleBase}/count/base_reports`, {
      params: {
        sort,
        field,
        page,
        limit,
        from,
        to,
        filters,
      },
    });
  }
}

export default Reports;
