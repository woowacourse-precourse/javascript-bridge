const InputView = require("../View/InputView");
const OutputView = require("../view/OutputView");
const BridgeMaker = require("../BridgeMaker");
const BridgeRandomNumberGenerator = require("../BridgeRandomNumberGenerator");
const BridgeGame = require("../Model/BridgeGame");

class BridgeGameController {
  #bridge_length;
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
    this.move(this.moveDirection());
  }

  moveDirection() {
    return InputView.readMoving();
  }

  move(movement) {}
}

module.exports = BridgeGameController;
