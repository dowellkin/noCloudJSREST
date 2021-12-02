import axios from 'axios';
import Namespaces from './modules/namespaces.js';
import Accounts from './modules/accounts.js';
import Health from './modules/health.js';
import ServicesProviders from './modules/servicesProviders.js';
import Services from './modules/services.js';

class Api{
	constructor(host = '/', port = undefined){

		this.axios = axios.create({})
		
		if(host[0] != '/'){
			const _host = new URL(host);
			if(port){
				_host.port = port;
			}
			this.axios.defaults.baseURL = _host.href;
		} else {
			this.axios.defaults.baseURL = host;
		}

		this.namespaces = new Namespaces(this);
		this.accounts = new Accounts(this);
		this.health = new Health(this);
		this.servicesProviders = new ServicesProviders(this);
		this.services = new Services(this);
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

	authorizeCustom(auth){
		return this.post('/token', auth)
	}

	authorizeStandard(username, password){
		return this.authorizeCustom({
			"auth": {
				"type": "standard",
				"data": [username, password]
			}
		})
	}

	auth(username, password){
		return new Promise((resolve, reject) => {
			this.authorizeStandard(username, password)
			.then(res => {
				this.applyToken(res.token)
				resolve(res)
			})
			.catch(reject)
		})
	}

	applyToken(token){
		this.axios = this.axios.create({
			headers: {'Authorization': 'Bearer ' + token}
		})
	}

	health(){
		console.warn('method depricated. use instance.health.probe() function');
		return null
	}
}

export default Api;