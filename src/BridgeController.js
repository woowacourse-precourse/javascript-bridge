const BridgeGame = require('./BridgeGame');
const BridgeMaker = require('./BridgeMaker');
const InputView = require('./InputView');
const { printResult } = require('./OutputView');
const OutputView = require('./OutputView');
const Validate = require('./Validate');

class bridgeController {
  #bridge;
  constructor() {
    this.#bridge = new BridgeGame();
  }

  run() {
    OutputView.printInit();
    this.getSizeInput();
  }

  getSizeInput() {
    InputView.readBridgeSize(this.inputSize.bind(this));
  }

  inputSize(input) {
    try {
      Validate.isNumber(input);
      this.#bridge.setBridge();
      this.getMoveInput();
    } catch (error) {
      OutputView.printError(error);
      this.getSizeInput();
    }
  }

  getMoveInput() {
    InputView.readMoving(this.inputMoveSpace.bind(this));
  }

  inputMoveSpace(input) {
    try {
      Validate.isMoveInput(input);
      this.#bridge.setMoveInput(input);
      OutputView.printMap(this.#bridge.getBridgeMap());
      this.checkGame();
    } catch (error) {
      OutputView.printError(error);
      this.getMoveInput();
    }
  }

  checkGame() {
    this.#bridge.move();

    if (this.#bridge.isWin()) {
      return printResult();
    }
    if (this.#bridge.isFail()) {
      return isRetry();
    }
    this.getMoveInput();
  }

  printResult() {}

  isRetry() {}
}

module.exports = bridgeController;
