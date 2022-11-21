const BridgeGame = require('../model/BridgeGame');
const { readBridgeSize, readGameCommand, readMoving } = require('../view/InputView');
const { checkValidBridgeSize, checkValidRetry, checkValidSpace } = require('../InputValidation');
const {
  printNewLine,
  printStart,
  printMap,
  printResult,
  printError,
} = require('../view/OutputView');

class BridgeGamePresenter {
  #BridgeGame;

  constructor() {
    printStart();
    printNewLine();
  }

  run() {
    readBridgeSize((input) => {
      try {
        this.#createBridge(input);
      } catch (error) {
        printError(error.message);
        this.run();
      }
    });
  }

  #createBridge(size) {
    checkValidBridgeSize(size);
    this.#BridgeGame = new BridgeGame(size);
    printNewLine();
    this.#checkMoving();
  }

  #checkMoving() {
    readMoving((input) => {
      try {
        this.#startMoving(input);
      } catch (error) {
        printError(error.message);
        this.#checkMoving();
      }
    });
  }

  #startMoving(space) {
    checkValidSpace(space);
    const spaceExistence = this.#BridgeGame.move(space).isCorrectSpace();
    printMap(this.#BridgeGame.makeBridgeFormat());

    if (this.#BridgeGame.isEnd()) {
      return this.#result();
    }
    return spaceExistence ? this.#checkMoving() : this.#checkRetry();
  }

  #checkRetry() {
    readGameCommand((input) => {
      try {
        this.#retry(input);
      } catch (error) {
        printError(error.message);
        this.#checkRetry(input);
      }
    });
  }

  #retry(input) {
    checkValidRetry(input);
    return this.#BridgeGame.retry(input) ? this.#checkMoving() : this.#result();
  }

  #result() {
    printResult(this.#BridgeGame.getResult());
  }
}

module.exports = BridgeGamePresenter;
