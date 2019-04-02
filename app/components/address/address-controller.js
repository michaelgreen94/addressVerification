import AddressService from "./address-service.js"

let addressService = new AddressService()

export default class AddressController {
  constructor() {}
  sendAddress(e) {
    e.preventDefault()
    console.log(1)
  }
}