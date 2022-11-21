const { readBridgeSize, readMoving, readGameCommand } = require('./InputView');
const { printError, printMap, printResult } = require('./OutputView');
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

  controlException(error, callback) {
    printError(error);
    return callback();
  }

  readUserBridgeSize(resolve) {
    readBridgeSize((size) => {
      try {
        const sizeInput = Number(size);
        checkSizeInRange(sizeInput);
        this.#model.setBridgeSize(sizeInput);
        resolve();
      } catch (error) {
        this.controlException(error, () => this.readUserBridgeSize(resolve));
      }
    });
  }

  setUserMoving(step) {
    BridgeMap.generate(this.#model.getBridge(), this.#model.getUserMove());
    printMap();
    this.checkResult();
  }

  readUserMoving(resolve) {
    readMoving((step) => {
      try {
        checkUserMove(step);
        this.#model.setUserMove(step);
        resolve();
      } catch (error) {
        this.controlException(error, () => this.readUserMoving(resolve));
      }
    });
  }

  readUserCommand(resolve) {
    readGameCommand((command) => {
      try {
        checkUserCommand(command);
        this.#model.setCommand(command);
        resolve();
      } catch (error) {
        this.controlException(error, () => this.readUserCommand(resolve));
      }
    });
  }

  renderMap() {
    BridgeMap.generate(this.#model.getBridge(), this.#model.getUserMove());
    printMap();
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
    printResult(isSuccess, playCount);
  }
}

module.exports = BridgeGameController;
