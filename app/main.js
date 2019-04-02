import AddressController from "./components/address/address-controller.js"

class app {
  constructor() {
    this.controllers = {
      addressController: new AddressController()
    }
  }
}

window.app = new app()