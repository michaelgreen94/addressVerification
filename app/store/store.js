// import Address from "../models/address"

let key = config.SECRET_MESSAGE
console.log(key)

// const api = axios.create({
//   baseURL: 'https://maps.googleapis.com/maps/api/place/textsearch/json?'
// })

let baseURL = 'https://maps.googleapis.com/maps/api/place/textsearch/json?'

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
      key: key
    }
    axios.get(baseURL, {
        params
      })
      .then(res => {
        console.log(res)
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






// let key = process.env.SECRET_MESSAGE
// console.log("Made it to Service test")
// console.log(key)
//     let location = '901 Maple st Nampa ID'
//     server.get('https://maps.googleapis.com/maps/api/place/textsearch/json?', {
//         params: {
//           query: location,
//           key: key
//         }
//       })
//       .then(function (res) {
//         console.log(res)
//       })
//       .catch(function (e) {
//         console.log(e)
//       })
//   }