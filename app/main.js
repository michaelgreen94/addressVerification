import AddressController from "./components/address/address-controller.js"

class App {
  constructor() {
    this.controllers = {
      addressController: new AddressController()
    }
  }
}

// @ts-ignore
window.app = new App()