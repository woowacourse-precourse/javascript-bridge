const BridgeModel = require("../model/BridgeModel");

class BridgeController {
  constructor(mainController) {
    this.mainController = mainController;
    this.bridgeModel = new BridgeModel();
  }
}

module.exports = BridgeController;
