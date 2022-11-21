const InputView = require("./InputView");
const OutputView = require("./OutputView");
const BridgeGame = require("./BridgeGame");
const { makeBridge } = require("./BridgeMaker");
const { generate } = require("./BridgeRandomNumberGenerator");
const Validation = require("./Validation");

class BridgeGameManager {
  #bridge;

  game() {
    OutputView.printStartMessage();
    InputView.readBridgeSize(this.manageBridge.bind(this));
  }

  manageBridge(size) {
    Validation.checkBridgeSize(size);
    this.#bridge = makeBridge(size, generate);
    console.log(this.#bridge);
    return InputView.readMoving(this.manageMoving.bind(this));
  }

  manageMoving(direction) {
    Validation.checkDirection(direction);
  }
}

module.exports = BridgeGameManager;
