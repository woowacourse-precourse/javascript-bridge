const BridgeController = require("./BridgeController");
const BridgeGameController = require("./BridgeGameController");
const UserController = require("./UserController");

class MainBridgeController {
  constructor() {
    this.bridgeController = new BridgeController(this);
    this.bridgeGameController = new BridgeGameController(this);
    this.userController = new UserController(this);
  }

  init() {}
}

module.exports = MainBridgeController;
