class Namespaces{
	constructor(api){
		this.api = api;
		this.moduleBase = 'namespaces'
	}

	create(title){
		return this.api.post(`/${this.moduleBase}`, {
			title
		})
	}

	delete(id){
		return this.api.delete(`/${this.moduleBase}/${id}`)
	}

	join(namespace, {account, access, role}){
		return this.api.post(`/${this.moduleBase}/${namespace}/link`, {
			account,
			access: access ?? '1',
			role: role ?? 'default'
		})
	}

	link(namespace, account){
		return this.api.post(`/${this.moduleBase}/${namespace}/link`, {
			account
		})
	}

	list(depth = 10){
		return this.api.get(`/${this.moduleBase}`, {
			params: {
				depth
			}
		})
	}
}

export default Namespaces;