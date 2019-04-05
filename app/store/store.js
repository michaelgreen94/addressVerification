// import Address from "../models/address"

// let key = config.SECRET_MESSAGE

const server = axios.create({
  baseURL: '//localhost:3000',
  timeout: 3000
})

// let baseURL = 'https://maps.googleapis.com/maps/api/place/textsearch/json?'

let store

let state = {
  addresses: []
}

function setState(prop, data) {
  state[prop] = data
}

export default class Store {
  search(formData, getAddresses) {
    let params = {
      query: formData[0].value,
      // key: key
    }
    server.get('/api/addresses', params)
      .then(res => {
        let correctAddress = res.data
        console.log('here', correctAddress)
      })
      .catch(function (e) {
        console.log(e)
      })
  }

  constructor() {
    if (store) {
      return store
    }
    store = this
  }
  get state() {
    return {
      ...state
    }
  }
}