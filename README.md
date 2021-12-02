# noCloudJSREST

axios-based api for [noCloud](https://github.com/slntopp/nocloud).

## Instalation
```sh
yarn install nocloudjsrest

//or

npm install nocloudjsrest
```

* auth
* applyToken
* health
  * probe
* accounts
  * create
  * get
  * list
  * update
  * creditials
  * delete
* namespaces
  * create
  * list
  * join
  * link
  * delete


## auth

This method will authorize you by username/password pair and will add gotten token at default header 'Authorization'. So all next requests doesn't need addictional auth info.
```js
const api = new Api();
api.auth('username', 'password');
```

## applyToken

You can apply saved token by using following method. So all next requests doesn't need addictional auth info.
```js
const api = new Api();
api.applyToken('token');
```

## health probe

It's a way to check is all systems works correctly. It must return 'PONG' as correct answer.
```js
const api = new Api();
api.health.probe();
```

## accounts module

### create

Used for create account. Returns uuid of created account.
```js
const api = new Api();
api.accounts.create({
    "title": "account title",
    "auth": {
        "type": "standard",
        "data": ["username", "password"]
    },
    "namespace": "namespace uuid",
    "access": 3 // 1-3
});
```

### get

get account info by uuid.
```js
const api = new Api();
api.account.get('account uuid')
```

### list

get list of accounts.
```js
const api = new Api();
api.account.list()
```

### update

update account title.
```js
const api = new Api();
api.account.update('account uuid', {
    "title": "new accout title"
})
```

### creditials

update account creditials.
```js
const api = new Api();
api.account.creditials('account uuid', {
    "auth": {
        "type": "standard",
        "data": [
            "new username",
            "new password"
        ]
    }
})
```

### delete

delete account by uuid.
```js
const api = new Api();
api.account.delete('account uuid')
```

## namespaces

### create

Used for create namespace. Returns uuid of created namespace.
```js
const api = new Api();
api.namespaces.create({
    "title": "namespace title"
});
```

### list

Returns list of namespaces.
```js
const api = new Api();
let depth = 4;
api.namespaces.list(depth); // default: 10
```

### join

joins account and namespace
```js
const api = new Api();
api.namespaces.join(namespace, {
    account: "account uuid",
    access: 1, // 1-3
    role: "default" // enum('default', 'owner')
});
```

### link

links account and namespace
```js
const api = new Api();
api.namespaces.link('namespace uuid', 'account uuid');
```

### delete

delete namespaces by uuid.
```js
const api = new Api();
api.namespaces.delete('namespace uuid')
```


