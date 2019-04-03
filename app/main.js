import AddressController from "./components/address/address-controller.js"

console.log("Made it to Main")

export default class App {
  constructor() {
    this.controllers = {
      addressController: new AddressController()
    }
  }
}

// @ts-ignore
window.app = new App()