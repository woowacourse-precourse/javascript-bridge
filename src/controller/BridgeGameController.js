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
    this.moveDirection();
  }

  moveDirection() {
    const direction = InputView.readMoving();
    this.move(direction);
  }

  move(step, movement) {
    BridgeGame.move(step, movement);
    OutputView.printMap();
    this.moveDirection();
  }
}

module.exports = BridgeGameController;
