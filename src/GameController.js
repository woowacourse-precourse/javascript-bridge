const { Console } = require('@woowacourse/mission-utils');
const { makeBridge } = require('./BridgeMaker');
const { generate } = require('./BridgeRandomNumberGenerator');
const BridgeGame = require('./BridgeGame');
const OutputView = require('./views/OutputView');
const InputView = require('./views/InputView');
const { MESSAGE } = require('./constant');
const Validator = require('./Validator');

class GameController {
  #bridgeGame;

  gameStart() {
    OutputView.printMessage(MESSAGE.START_NOTIFICATION);
    this.askBridgeSize();
  }

  askBridgeSize() {
    InputView.readBridgeSize((size) => {
      try {
        this.handleSize(size);
      } catch ({ message }) {
        OutputView.printMessage(message);
        this.askBridgeSize();
      }
    });
  }

  handleSize(size) {
    Validator.sizeValidityCheck(size);
    const bridge = makeBridge(size, generate);
    this.#bridgeGame = new BridgeGame(bridge);
    this.askDirection();
  }

  askDirection() {
    InputView.readMoving((direction) => {
      try {
        this.handleDirection(direction);
      } catch ({ message }) {
        OutputView.printMessage(message);
        this.askDirection();
      }
    });
  }

  handleDirection(direction) {
    const successfulMove = this.#bridgeGame.move(direction);
    const curMapState = this.#bridgeGame.drawMap(successfulMove, direction);
    OutputView.printMap(curMapState);

    successfulMove ? this.doseUserWin() : this.askRetry();
  }

  doseUserWin() {
    const userWin = this.#bridgeGame.gameComplete();
    const gameResult = this.#bridgeGame.gameResult(userWin);

    userWin ? this.gameOver(gameResult) : this.askDirection();
  }

  askRetry() {
    InputView.readGameCommand((command) => {
      try {
        this.handleCommand(command);
      } catch ({ message }) {
        OutputView.printMessage(message);
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
