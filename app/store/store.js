import Address from "../models/address"

let key = process.env.SECRET_MESSAGE
console.log("Made it to Service test")
console.log(key)
export default class AddressService {
  constructor() {

  }
  search(formData) {
    let location = '901 Maple st Nampa ID'
    axios.get('https://maps.googleapis.com/maps/api/place/textsearch/json?', {
        params: {
          query: location,
          key: key
        }
      })
      .then(function (res) {
        console.log(res)
      })
      .catch(function (e) {
        console.log(e)
      })
  }
}