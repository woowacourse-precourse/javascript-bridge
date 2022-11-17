const BridgeMaker = require("../BridgeMaker");
const BridgeRandomNumberGenerator = require("../BridgeRandomNumberGenerator");

class GamePresenter {
  bridgeModel;

  createBridgeModel(size) {
    this.bridgeModel = BridgeMaker.makeBridge(size, this.generateRandomNumber);
    console.log(this.bridgeModel);
  }

  generateRandomNumber() {
    return BridgeRandomNumberGenerator.generate();
  }
}
module.exports = GamePresenter;
