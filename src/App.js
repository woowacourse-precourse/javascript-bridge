const BridgeGame = require('./BridgeGame');
const { MESSAGE } = require('./constant');
const InputView = require('./views/InputView');
const OutputView = require('./views/OutputView');
const { Console } = require('@woowacourse/mission-utils');
const GameController = require('./GameController');

class App {
  // #gameCtrl;
  #bridgeGame;

  play() {
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
    const bridge = makeBridge(size);
    this.#bridgeGame = new BridgeGame(bridge);
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
    this.#bridgeGame.handleDirection(direction);
    const successfulMove = this.#bridgeGame.move();
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

const app = new App();
app.play();

module.exports = App;
