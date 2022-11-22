const BridgeGame = require('./BridgeGame');
const BridgeMaker = require('./BridgeMaker');
const InputView = require('./InputView');
const { MESSAGE, GAME_STATUS } = require('./Message');
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
    if (this.#bridge.move()) {
      const { WIN } = GAME_STATUS;
      return printResult(WIN);
    }
    if (this.#bridge.isFail()) {
      return isRetry();
    }
    this.getMoveInput();
  }

  printResult(status) {
    OutputView.printResult(
      this.#bridge.getBridgeMap(),
      this.#bridge.getCount,
      status
    );
  }

  getRetry() {
    InputView.readGameCommand(this.isRetry.bind(this));
  }

  isRetry(input) {
    try {
      Validate.isRetryInput(input);
      this.checkRetry(input);
    } catch (error) {
      OutputView.printError(error);
      this.getRetry();
    }
  }

  checkRetry(input) {
    const { RETRY, QUIT, LOSE } = GAME_STATUS;

    if (input === RETRY) {
      this.#bridge.retry();
      this.getMoveInput();
    }

    if (input === QUIT) this.printResult(LOSE);
  }
}

module.exports = bridgeController;
