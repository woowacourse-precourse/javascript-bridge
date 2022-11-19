const BridgeController = require("./BridgeController");
const UserController = require("./UserController");

class MainController {
  constructor() {
    this.bridgeController = new BridgeController(this);
    this.userController = new UserController(this);
  }

  init() {}
}

module.exports = MainController;
