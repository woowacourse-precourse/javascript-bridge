const BridgeGame = require('./BridgeGame');
const { MESSAGE } = require('./constant');
const { Console } = require('@woowacourse/mission-utils');
const OutputView = require('./views/OutputView');
const InputView = require('./views/InputView');

class GameController {
  #bridgeGame;

  constructor() {
    this.#bridgeGame = new BridgeGame();
  }

  gameStart() {
    OutputView.printMessage(MESSAGE.START_NOTIFICATION);
    this.askBridgeSize();
  }

  askBridgeSize() {
    InputView.readBridgeSize((size) => {
      try {
        this.handleSize(size);
      } catch (exceptionMessage) {
        OutputView.printMessage(exceptionMessage);
        this.askBridgeSize();
      }
    });
  }

  handleSize(size) {
    this.#bridgeGame.makeBridge(size);
    this.askDirection();
  }

  askDirection() {
    InputView.readMoving((direction) => {
      try {
        this.handleDirection(direction);
      } catch (exceptionMessage) {
        OutputView.printMessage(exceptionMessage);
        this.askDirection();
      }
    });
  }

  handleDirection(direction) {
    const successfulMove = this.#bridgeGame.move(direction);
    this.#bridgeGame.drawMap(direction, successfulMove);
    const curMapState = this.#bridgeGame.curMap();
    OutputView.printMap(curMapState);

    successfulMove ? this.doseUserWin() : this.askRetry();
  }

  doseUserWin() {
    const userWin = this.#bridgeGame.gameComplete();
    const gameResult = this.#bridgeGame.gameResult();

    userWin ? this.gameOver(gameResult) : this.askDirection();
  }

  askRetry() {
    InputView.readGameCommand((command) => {
      try {
        this.handleCommand(command);
      } catch (exceptionMessage) {
        OutputView.printMessage(exceptionMessage);
        this.askRetry();
      }
    });
  }

  handleCommand(command) {
    const shouldRetry = this.#bridgeGame.retry(command);
    const gameResult = this.#bridgeGame.gameResult();

    shouldRetry ? this.retry() : this.gameOver(gameResult);
  }

  retry() {
    this.#bridgeGame.increaseNumberOfAttempts();
    this.#bridgeGame.initPlayData();

    this.askDirection();
  }

  gameOver(gameResult) {
    OutputView.printResult(gameResult);
    Console.close();
  }
}

module.exports = GameController;
