import AddressService from "./address-service.js"

let addressService = new AddressService()

console.log("Made it to the Controller")

export default class AddressController {
  constructor() {}
  sendAddress(data) {
    data.preventDefault()
    let formData = data.target
    addressService.search(formData[0])
  }
}