const { readBridgeSize, readMoving, readGameCommand } = require('./InputView');
const {
  printError,
  printMap,
  printResult,
  printStart,
  printEmptyLine,
} = require('./OutputView');
const BridgeMap = require('./BridgeMap');
const {
  checkSizeInRange,
  isCurrentLastIndexValueSame,
  isLengthSame,
  checkUserMove,
  checkUserCommand,
} = require('./Validation');

class BridgeGameController {
  #model;

  constructor(model) {
    this.#model = model;
  }

  initialize() {
    printStart();
  }

  controlException(error, callback) {
    printError(error);
    return callback();
  }

  setUserBridgeSize(size, resolve) {
    try {
      const sizeInput = Number(size);
      checkSizeInRange(sizeInput);
      this.#model.setBridgeSize(sizeInput);
      resolve();
    } catch (error) {
      this.controlException(error, () => this.readUserBridgeSize(resolve));
    }
  }

  readUserBridgeSize(resolve) {
    readBridgeSize((size) => {
      this.setUserBridgeSize(size, resolve);
    });
  }

  setUserMoving(step, resolve) {
    try {
      checkUserMove(step);
      this.#model.setStep(step);
      resolve();
    } catch (error) {
      this.controlException(error, () => this.readUserMoving(resolve));
    }
  }

  readUserMoving(resolve) {
    readMoving((step) => {
      this.setUserMoving(step, resolve);
    });
  }

  setUserCommand(command, resolve) {
    try {
      checkUserCommand(command);
      this.#model.setCommand(command);
      resolve();
    } catch (error) {
      this.controlException(error, () => this.readUserCommand(resolve));
    }
  }

  readUserCommand(resolve) {
    readGameCommand((command) => {
      this.setUserCommand(command, resolve);
    });
  }

  renderMap() {
    const map = BridgeMap.generate(
      this.#model.getBridge(),
      this.#model.getUserMove(),
    );
    printMap(map);
    printEmptyLine();
  }

  setCurrentResult() {
    const bridge = this.#model.getBridge();
    const userMove = this.#model.getUserMove();
    if (isCurrentLastIndexValueSame(bridge, userMove)) {
      if (isLengthSame(bridge, userMove)) {
        this.#model.setIsSuccess(true);
      }
    }
  }

  renderResult() {
    const isSuccess = this.#model.getIsSuccess();
    const playCount = this.#model.getPlayCount();
    const map = BridgeMap.generate(
      this.#model.getBridge(),
      this.#model.getUserMove(),
    );
    printResult(isSuccess, playCount, map);
  }
}

module.exports = BridgeGameController;
