const { readBridgeSize, readMoving } = require('./InputView');
const { printError } = require('./OutputView');
const BridgeGame = require('./BridgeGame');

class BridgeGameController {
  #model;

  constructor(model) {
    this.#model = model;
  }

  controlException(error, callback) {
    printError(error);
    return callback();
  }

  setBridgeGame() {
    const bridgeGame = new BridgeGame(this.#model);
    bridgeGame.start();
  }

  setUserBridgeSize() {
    readBridgeSize((size) => {
      try {
        this.#model.setBridgeSize(size);
        this.setBridgeGame();
      } catch (error) {
        this.controlException(error, () => this.setUserBridgeSize());
      }
    });
  }

  setMoving(resolve) {
    readMoving((step) => {
      try {
        this.#model.setUserMove(step);
        return resolve();
      } catch (error) {
        return this.controlException(error, this.setMoving);
      }
    });
  }
}

module.exports = BridgeGameController;
