const BridgeGame = require('./BridgeGame');
const BridgeMaker = require('./BridgeMaker');
const InputView = require('./InputView');
const { MESSAGE, GAME_STATUS } = require('./Message');
const { printResult } = require('./OutputView');
const OutputView = require('./OutputView');
const Validate = require('./Validate');
const { Console } = require('@woowacourse/mission-utils');

class bridgeController {
  constructor() {
    this.bridge = new BridgeGame();
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
      this.bridge.setBridge(input);
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
      this.bridge.setMoveInput(input);
      const [first, second] = this.bridge.getBridgeMap();
      OutputView.printMap(first, second);
      this.checkGame();
    } catch (error) {
      OutputView.printError(error);
      this.getMoveInput();
    }
  }

  checkGame() {
    if (this.bridge.move()) {
      return printResult();
    }
    if (this.bridge.isFail()) {
      return this.isRetry();
    }
    this.getMoveInput();
  }

  printResult() {
    this.bridge.win();
    return this.quit();
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
    const { RETRY, QUIT } = GAME_STATUS;

    if (input === RETRY) {
      this.bridge.retry();
      this.getMoveInput();
    }

    if (input === QUIT) this.bridge.lose();
  }

  quit() {
    OutputView.exit();
  }
}

module.exports = bridgeController;
