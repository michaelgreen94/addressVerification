import AddressController from "./components/address/address-controller.js"

export default class App {
  constructor() {
    this.controllers = {
      addressController: new AddressController()
    }
  }
}

window.app = new App()