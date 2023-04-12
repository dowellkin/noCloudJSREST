class Logging {
    constructor(api) {
      this.api = api;
      this.moduleBase = "logging";
    }
  
    list(params) {
      return this.api.get("/" + this.moduleBase, params);
    }
  
    count(params) {
      return this.api.get("/" + this.moduleBase + "/count", params);
    }
  }
  
  export default Logging;
  