const InputView = require("./InputView");
const OutputView = require("./OutputView");
const BridgeGameController = require("../BridgeGameController");
const BridgeSizeValidator = require("../validator/BridgeSizeValidator");

class View {
  #gameController;

  constructor() {
    this.#gameController = new BridgeGameController();
  }

  startGame() {
    OutputView.startGame();
    this.#inputBridgeSize();
  }

  #inputBridgeSize() {
    InputView.readBridgeSize(this.#getBridgeSize());
  }

  #getBridgeSize() {
    return (size) => {
      BridgeSizeValidator.validate(size);
      this.#gameController.inputBridge(size);
    };
  }
}

module.exports = View;
