const OutputView = require("../View/OutputView");
const InputView = require("../View/InputView");
const BridgeMaker = require("../BridgeMaker");
const BridgeRandomNumberGenerator = require("../BridgeRandomNumberGenerator");
const BridgeGame = require("../Model/BridgeGame");
const Bridge = require("../Model/Bridge");
const { BRIDGE_DIRECTION } = require("./constants/GameCondition.js");
class BridgeGameController {
  #bridge_size;
  #random_bridge;
  start() {
    OutputView.printStartMessage();
    this.#bridge_size = InputView.readBridgeSize();
    this.generateBridge(this.#bridge_size);
  }

  generateBridge(size) {
    const randomBridge = BridgeMaker.makeBridge(
      size,
      BridgeRandomNumberGenerator.generate()
    );
    BridgeGame.setBridge(randomBridge);
    this.#random_bridge = BridgeGame.getBridge();
  }

  inputMoveDirection() {
    return InputView.readMoving();
  }

  /**
   *
   * @param {char} cmd 'U', 'D' 둘 중 하나로 들어옴.
   */
  move(step) {
    const cmd = this.inputMoveDirection();
    const currentBridge = this.#random_bridge[step];
    if (currentBridge === BRIDGE_DIRECTION.DOWN) {
      Bridge.upBridge.push(currentBridge === cmd ? "O" : "X");
      Bridge.downBridge.push(" ");
    }
    if (currentBridge === BRIDGE_DIRECTION.UP) {
      Bridge.downBridge.push(currentBridge === cmd ? "O" : "X");
      Bridge.upBridge.push(" ");
    }
  }
}

module.exports = BridgeGameController;
