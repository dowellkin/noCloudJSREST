class InstanceGroupService {
    constructor(api) {
        this.api = api;
        this.moduleBase = 'igs'
    }

    move(serviceUUID, instancesGroupUUID) {
        return this.api.post(`/${this.moduleBase}/${serviceUUId}`, { uuid: serviceUUID, service: instancesGroupUUID })
    }
}

export default InstanceGroupService;