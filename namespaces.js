class Namespaces{
	constructor(api){
		this.api = api;
	}

	create(title){
		return this.api.post('/namespaces', {
			title
		})
	}

	delete(id){
		return this.api.delete(`/namespaces/${id}`)
	}

	join(namespace, {account, access, role}){
		return this.api.post(`/namespaces/${namespace}/link`, {
			account,
			access: access ?? '0',
			role: role ?? 'default'
		})
	}

	link(namespace, account){
		return this.api.post(`/namespaces/${namespace}/link`, {
			account
		})
	}

	list(depth = 10){
		return this.api.get('/namespaces', {
			params: {
				depth
			}
		})
	}
}

export default Namespaces;