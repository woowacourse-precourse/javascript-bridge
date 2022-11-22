const InputView = require("../View/InputView");
const OutputView = require("../view/OutputView");
const BridgeMaker = require("../BridgeMaker");
const BridgeRandomNumberGenerator = require("../BridgeRandomNumberGenerator");
const BridgeGame = require("../Model/BridgeGame");
const Bridge = require("../Model/Bridge");
const { BRIDGE_DIRECTION } = require("../util/Constants");

class BridgeGameController {
  #bridge_length;
  #rand_bridge;
  start() {
    OutputView.printStart();
    this.#bridge_length = InputView.measureLength();
    this.makeBridge(this.#bridge_length);
  }

  addBridge(length) {
    const randBridge = BridgeMaker.makeBridge(
      length,
      BridgeRandomNumberGenerator.generate()
    );
    BridgeGame.setBridge(randBridge);
    this.#rand_bridge = BridgeGame.getBridge();
  }

  moveDirection() {
    return InputView.readMoving();
  }

  move(movement) {
    const step = this.moveDirection();
    const current = this.#rand_bridge[movement];
    if (current == BRIDGE_DIRECTION.DOWN) {
      Bridge.upBridge.push(current === step ? "O" : "X");
      Bridge.downBridge.push(" ");
    }
    if (current === BRIDGE_DIRECTION.UP) {
      Bridge.downBridge.push(current === step ? "O" : "X");
      Bridge.upBridge.push(" ");
    }
  }
}

module.exports = BridgeGameController;
