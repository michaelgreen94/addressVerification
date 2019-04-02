import AddressService from "./address-service.js"

let addressService = new AddressService()
console.log("made it?")
export default class AddressController {
  constructor() {
    console.log("something")
  }
  sendAddress(e) {
    e.preventDefault()
    console.log(e)
  }
}