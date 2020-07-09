// Dependency inversion principle
// Инверсия зависимостей

class Fetch {
    request(url){
        // return fetch(url).then(r => r.json())
        return Promise.resolve('Data from fetch')
    }
}

class LocalStorage {
    get(){
        const dataFromLocalStorage = 'Data from local storage'
        return dataFromLocalStorage //localStorage.getItem('key')
    }
}

class FetchClient {
    constructor() {
        this.fetch = new Fetch()
    }

    clientGet(){
        return this.fetch.request('google.com')
    }
}

class LocalStorageClient {
    constructor() {
        this.fetch = new LocalStorage()
    }

    clientGet() {
        return this.fetch.get()
    }
}

class Database {
    constructor(client){
        // this.fetch = new Fetch()
        this.client = client
    }

    getData(key) {
        // return this.fetch.request('google.com.ua')
        // return this.localStorage.get()
        return this.client.clientGet(key)
    }
}

// const db = new Database()
// console.log(db.getData())

const db = new Database(new FetchClient())
console.log(db.getData('google.com.ua'))

const dbLs = new Database(new LocalStorageClient())
console.log(dbLs.getData('key db'))
