const BridgeGame = require('./BridgeGame');
const { Console } = require('@woowacourse/mission-utils');
const OutputView = require('./views/OutputView');
const InputView = require('./views/InputView');

class GameController {
  #bridgeGame;

  constructor() {
    this.#bridgeGame = new BridgeGame();
  }

  gameStart(bridge) {
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
    const gameResult = this.#bridgeGame.gameResult();

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
