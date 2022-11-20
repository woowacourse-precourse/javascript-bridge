const InputView = require("./InputView");
const OutputView = require("./OutputView");
const BridgeGameController = require("../BridgeGameController");
const BridgeSizeValidator = require("../validator/BridgeSizeValidator");
const BridgeSpaceValidator = require("../validator/BridgeSpaceValidator");

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
      this.#gameController.inputBridgeSize(size);
      this.#inputSpaceToMove();
    };
  }

  #inputSpaceToMove() {
    InputView.readMoving(this.#getSpaceToMove());
  }

  #getSpaceToMove() {
    return (space) => {
      const bridgeSpaceValidator = new BridgeSpaceValidator();
      bridgeSpaceValidator.validate(space);
      this.#gameController.inputSpaceToMove(space);
    };
  }
}

module.exports = View;
