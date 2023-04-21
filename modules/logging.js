class Logging {
  constructor(api) {
    this.api = api;
    this.moduleBase = "logging";
  }

  list({ requestor, uuid, page, limit, ...data }) {
    return this.api.post("/" + this.moduleBase, {
      ...data,
      requestor,
      uuid,
      page,
      limit,
    });
  }

  count({ requestor, uuid, ...data }) {
    return this.api.post("/" + this.moduleBase + "/count", {
      ...data,
      requestor,
      uuid,
    });
  }
}

export default Logging;

