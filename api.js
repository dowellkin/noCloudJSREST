import axios from 'axios';
import Namespaces from './modules/namespaces.js';
import Accounts from './modules/accounts.js';
import Health from './modules/health.js';
import ServicesProviders from './modules/servicesProviders.js';
import Services from './modules/services.js';
import dns from './modules/dns.js';
import Settings from './modules/settings.js';
import Instances from './modules/instances.js';
import Plans from './modules/plans.js';
import Transactions from './modules/transactions.js';
import Events from "./modules/events";
import InstanceGroupService from "./modules/instancesGroupService";
import Logging from "./modules/logging.js";
import Showcases from './modules/showcases.js';
import Reports from './modules/reports.js';

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
		this.dns = new dns(this);
		this.settings = new Settings(this);
		this.instances = new Instances(this);
		this.plans = new Plans(this);
		this.transactions = new Transactions(this);
		this.events = new Events(this);
		this.instanceGroupService = new InstanceGroupService(this);
		this.logging = new Logging(this);
		this.showcases = new Showcases(this);
		this.reports = new Reports(this);
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

	put(url, data){
		return this.request('put', url, data);
	}

	patch(url, data){
		return this.request('patch', url, data);
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

	authorizeStandard(username, password, root_claim){
		return this.authorizeCustom({
			"auth": {
				"type": "standard",
				"data": [username, password]
			},
			root_claim
		})
	}

	authorizeWithType(username, password, type, root_claim){
		return this.authorizeCustom({
			"auth": {
				type,
				"data": [username, password]
			},
			root_claim
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