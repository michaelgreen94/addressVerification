import AddressService from "./address-service.js"

let addressService = new AddressService()

export default class addressController {
  constructor() {}
  sendAddress(event) {
    event.preventdefault()
    console.log(event)
  }
}