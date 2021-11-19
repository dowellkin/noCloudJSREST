import axios from 'axios';
import Namespaces from './namespaces.js';
import Accounts from './accounts.js';

class Api{
	constructor(host = 'http://localhost/', port = 8000){
		const _host = new URL(host);
		_host.port = port;
		this.axios = axios.create({
			baseURL: _host.href
		})

		this.namespaces = new Namespaces(this);
		this.accounts = new Accounts(this);
	}

	request(type, url, data = {}){
		return new Promise((resolve, reject) => {
			this.axios[type](url, data)
			.then(res => resolve(res.data))
			.catch(reject)
		})
	}

	post(url, data){
		return this.request('post', url, data);
	}

	get(url, params = {}){
		return this.request('get', url, params);
	}

	delete(url, params = {}){
		return this.request('delete', url, params);
	}

	getToken(username, password){
		return this.post('/token', {
			"auth": {
				"type": "standard",
				"data": [username, password]
			}
		})
	}

	auth(username, password){
		return new Promise((resolve, reject) => {
			this.getToken(username, password)
			.then(res => {
				this.axios = this.axios.create({
					headers: {'Authorization': 'Bearer ' + res.token}
				})
				resolve(res)
			})
			.catch(reject)
		})
	}

	health(){
		return this.post('/health/probe', {
				"probe_type": "PING"
		})
	}
}

export default Api;