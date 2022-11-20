const BridgeGame = require('../model/BridgeGame');
const { readBridgeSize, readGameCommand, readMoving } = require('../view/InputView');
const {
  checkValidBridgeSize,
  checkValidRetry,
  checkValidRound,
} = require('../Error/InputValidation');
const {
  printNewLine,
  printStart,
  printMap,
  printResult,
  printError,
} = require('../view/OutputView');

class BridgeGameController {
  #BridgeGame;

  constructor() {
    printStart();
    printNewLine();
  }

  run() {
    readBridgeSize((input) => {
      try {
        this.#create(input);
      } catch (error) {
        printError(error.message);
        this.run();
      }
    });
  }

  #create(size) {
    checkValidBridgeSize(size);
    this.#BridgeGame = new BridgeGame(size);
    printNewLine();
    this.checkRound();
  }

  checkRound() {
    readMoving((input) => {
      try {
        this.#startRound(input);
      } catch (error) {
        printError(error.message);
        this.checkRound();
      }
    });
  }

  #startRound(space) {
    checkValidRound(space);
    const spaceExistence = this.#BridgeGame.move(space).isRightSpace();
    printMap(this.#BridgeGame.makeBridgeFormat());
    if (this.#BridgeGame.isEnd()) {
      return this.#result();
    }
    return spaceExistence ? this.checkRound() : this.checkRetry();
  }

  checkRetry() {
    readGameCommand((input) => {
      try {
        this.#retry(input);
      } catch (error) {
        printError(error.message);
        this.checkRetry();
      }
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

module.exports = BridgeGameController;
