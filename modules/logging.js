class Logging {
  constructor(api) {
    this.api = api;
    this.moduleBase = "logging";
  }

  list({ requestor, uuid, page, limit, ...params }) {
    return this.api.get("/" + this.moduleBase, {
      params: { ...params, requestor, uuid, page, limit },
    });
  }

  count({ requestor, uuid, ...params }) {
    return this.api.get("/" + this.moduleBase + "/count", {
      params: { ...params, requestor, uuid },
    });
  }
}

export default Logging;
