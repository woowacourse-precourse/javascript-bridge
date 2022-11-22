const { Console } = require('@woowacourse/mission-utils');
const BridgeGame = require('./BridgeGame');
const { GAME_MESSAGE, GAME_BOOLEAN, SHORT_CUT } = require('./Constants');
const { readBridgeSize, readGameCommand, readMoving } = require('./InputView');
const { printResult, printMap } = require('./OutputView');
const { showErrorMessage } = require('./Utils');
const {
  sizeValdation,
  moveValidation,
  retryValidation,
} = require('./Validations');

class App {
  #bridgeGame = new BridgeGame();

  #checkSize = this.checkSize.bind(this);

  #checkMoving = this.checkMoving.bind(this);

  #checkCommand = this.checkCommand.bind(this);

  play() {
    App.start();
    readBridgeSize(this.#checkSize);
  }

  checkSize(userInput) {
    try {
      sizeValdation(Number(userInput));
      this.bridgeSize(userInput);
    } catch (error) {
      showErrorMessage(error.message, readBridgeSize, this.#checkSize);
    }
  }

  checkMoving(userInput) {
    try {
      moveValidation(userInput);
      this.moveBridge(userInput);
    } catch (error) {
      showErrorMessage(error.message, readMoving, this.#checkMoving);
    }
  }

  checkCommand(userInput) {
    try {
      retryValidation(userInput);
      this.checkRetry(userInput);
    } catch (error) {
      showErrorMessage(error.message, readGameCommand, this.#checkCommand);
    }
  }

  bridgeSize(userInput) {
    const size = Number(userInput);
    this.#bridgeGame.setBridge(size);
    readMoving(this.#checkMoving);
  }

  checkFinish() {
    const isFinish = this.#bridgeGame.isFinish();
    if (isFinish) {
      this.getGameFinish();
      return;
    }
    this.checkMoveResult();
  }

  getGameResult(success) {
    const bridgeResult = this.#bridgeGame.getMap();
    const numberAttempts = this.#bridgeGame.getAttempts();
    if (success) {
      return printResult(bridgeResult, GAME_BOOLEAN.success, numberAttempts);
    }
    return printResult(bridgeResult, GAME_BOOLEAN.fail, numberAttempts);
  }

  getGameFinish() {
    this.getGameResult(GAME_BOOLEAN.success);
    Console.close();
    return null;
  }

  moveBridge(userInput) {
    this.#bridgeGame.setAnswer(userInput);
    this.#bridgeGame.move();
    this.showMoveResult();
    this.checkFinish();
  }

  showMoveResult() {
    const bridgeResult = this.#bridgeGame.getMap();
    printMap(bridgeResult);
  }

  checkMoveResult() {
    const isAnswer = this.#bridgeGame.isAnswer();
    if (isAnswer) {
      return readMoving(this.#checkMoving);
    }
    return readGameCommand(this.#checkCommand);
  }

  checkRetry(userInput) {
    if (userInput === SHORT_CUT.retry) {
      this.getReStart();
    }
    if (userInput === SHORT_CUT.quit) {
      this.getQuit();
    }
  }

  getReStart() {
    this.#bridgeGame.retry();
    readMoving(this.#checkMoving);
  }

  getQuit() {
    this.getGameResult(GAME_BOOLEAN.fail);
    Console.close();
    return null;
  }

  static start() {
    Console.print(GAME_MESSAGE.start);
  }
}

module.exports = App;
