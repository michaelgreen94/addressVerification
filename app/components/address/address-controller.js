import Store from "../../store/store.js"

let store = new Store()

console.log("Made it to the Controller")

export default class AddressController {
  constructor() {

  }
  sendAddress(data) {
    data.preventDefault()
    let formData = data.target
    store.search(formData[0])
  }
}