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
      const bridgeSizeValidator = new BridgeSizeValidator();
      bridgeSizeValidator.validate(size);
      this.#gameController.makeBridge(size);
    };
  }
}

module.exports = View;
