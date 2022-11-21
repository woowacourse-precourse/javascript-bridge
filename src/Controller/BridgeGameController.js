const OutputView = require("../View/OutputView");
const InputView = require("../View/InputView");
const BridgeMaker = require("../BridgeMaker");
const BridgeRandomNumberGenerator = require("../BridgeRandomNumberGenerator");
const BridgeGame = require("../Model/BridgeGame");
class BridgeGameController {
  #bridge_size;

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
    this.move(this.inputMoveDirection());
  }

  inputMoveDirection() {
    return InputView.readMoving();
  }

  /**
   * 
   * @param {char} moving 'U', 'D' 둘 중 하나로 들어옴. 
   */
  move(moving) {}
}

module.exports = BridgeGameController;
