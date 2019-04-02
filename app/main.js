import addressController from "./components/address/address-controller.js"

class app {
  constructor() {
    this.controllers = {
      addressController: new addressController()
    }
  }
}

window.app = new app()