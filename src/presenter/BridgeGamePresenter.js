const BridgeGame = require('../model/BridgeGame');
const { checkValidBridgeSize, checkValidRetry, checkValidSpace } = require('../InputValidation');
const { readBridgeSize, readGameCommand, readMoving } = require('../view/InputView');
const {
  printNewLine,
  printStart,
  printMap,
  printResult,
  printError,
} = require('../view/OutputView');

class BridgeGamePresenter {
  #bridgeGame;

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
    this.#bridgeGame = new BridgeGame(size);
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
    const spaceExistence = this.#bridgeGame.move(space).isCorrectSpace();
    printMap(this.#bridgeGame.makeBridgeFormat());

    if (this.#bridgeGame.isEnd()) {
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
    return this.#bridgeGame.retry(input) ? this.#checkMoving() : this.#result();
  }

  #result() {
    printResult(this.#bridgeGame.getResult());
  }
}

module.exports = BridgeGamePresenter;
