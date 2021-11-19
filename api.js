import axios from 'axios';
import Namespaces from './namespaces.js';

class Api{
	constructor(host = 'http://localhost/', port = 8000){
		const _host = new URL(host);
		_host.port = port;
		this.axios = axios.create({
			baseURL: _host.href
		})

		this.namespaces = new Namespaces(this);
	}

	post(url, data){
		return new Promise((resolve, reject) => {
			this.axios.post(url, data)
			.then(res => resolve(res.data))
			.catch(reject)
		})
	}

	get(url, params = {}){
		return new Promise((resolve, reject) => {
			this.axios.get(url, params)
			.then(res => resolve(res.data))
			.catch(reject)
		})
	}

	delete(url, params = {}){
		return new Promise((resolve, reject) => {
			this.axios.delete(url, params)
			.then(res => resolve(res.data))
			.catch(reject)
		})
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