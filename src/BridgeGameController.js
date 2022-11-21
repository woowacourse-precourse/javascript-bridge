const { readBridgeSize, readMoving } = require('./InputView');
const { printError, printMap } = require('./OutputView');
const BridgeMap = require('./BridgeMap');
const BridgeGame = require('./BridgeGame');
const { checkSizeInRange, checkUserMove } = require('./Validation');

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

  renderMap() {
    BridgeMap.generate(this.#model.getBridge(), this.#model.getUserMove());
    printMap();
  }
}

module.exports = BridgeGameController;
