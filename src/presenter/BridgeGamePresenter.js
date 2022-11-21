const BridgeGame = require('../model/BridgeGame');
const { readBridgeSize, readGameCommand, readMoving } = require('../view/InputView');
const { checkValidBridgeSize, checkValidRetry, checkValidRound } = require('../InputValidation');
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
    readBridgeSize((input, isValid) => {
      if (!isValid) {
        printError(input);
        return this.run();
      }
      return this.#create(input);
    });
  }

  #create(size) {
    this.#BridgeGame = new BridgeGame(size);
    printNewLine();
    this.checkRound();
  }

  checkRound() {
    readMoving((input, isValid) => {
      if (!isValid) {
        printError(input);
        return this.checkRound();
      }
      return this.#startRound(input);
    });
  }

  #startRound(space) {
    const spaceExistence = this.#BridgeGame.move(space).isRightSpace();
    printMap(this.#BridgeGame.makeBridgeFormat());
    if (this.#BridgeGame.isEnd()) {
      return this.#result();
    }
    return spaceExistence ? this.checkRound() : this.checkRetry();
  }

  checkRetry() {
    readGameCommand((input, isValid) => {
      if (!isValid) {
        printError(input);
        return this.checkRetry();
      }
      return this.#retry(input);
    });
  }

  #retry(input) {
    checkValidRetry(input);
    return this.#BridgeGame.retry(input) ? this.checkRound() : this.#result();
  }

  #result() {
    printResult(this.#BridgeGame.getResult());
  }
}

module.exports = BridgeGamePresenter;
