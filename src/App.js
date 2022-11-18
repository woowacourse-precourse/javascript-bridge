const BridgeGame = require('./BridgeGame');
const { MESSAGE } = require('./constant');
const InputView = require('./views/InputView');
const OutputView = require('./views/OutputView');

class App {
  #bridgeGame;

  constructor() {
    this.#bridgeGame = new BridgeGame();
  }

  play() {
    this.gameStart();
  }

  gameStart() {
    OutputView.printMessage(MESSAGE.START_NOTIFICATION);
    this.askBridgeSize();
  }

  askBridgeSize() {
    InputView.readBridgeSize((size) => {
      try {
        this.handleSize(size);
      } catch (errorMessage) {
        OutputView.printMessage(errorMessage);
        this.askBridgeSize();
      }
    });
  }

  askDirection() {
    InputView.readMoving((direction) => {
      try {
        this.handleDirection(direction);
      } catch (errorMessage) {
        OutputView.printMessage(errorMessage);
        this.askDirection();
      }
    });
  }

  askRetry() {
    InputView.readGameCommand((command) => {
      try {
        this.handleCommand(command);
      } catch (errorMessage) {
        OutputView.printMessage(errorMessage);
        this.askRetry();
      }
    });
  }

  handleSize(size) {
    this.#bridgeGame.makeBridge(size);
    this.askDirection();
  }

  handleDirection(direction) {
    this.#bridgeGame.handleDirection(direction);
    const successful = this.#bridgeGame.move();
    const curMap = this.#bridgeGame.curMap();
    OutputView.printMap(curMap);

    successful ? this.doseUserWin() : this.askRetry();
  }

  doseUserWin() {
    const userWin = this.#bridgeGame.gameComplete();
    const gameResult = this.#bridgeGame.gameResult();

    userWin ? OutputView.printResult(gameResult) : this.askDirection;
  }

  handleCommand(command) {
    const shouldRetry = this.#bridgeGame.retry(command);
    const gameResult = this.#bridgeGame.gameResult();

    shouldRetry ? this.retry() : OutputView.printResult(gameResult);
  }

  retry() {
    this.#bridgeGame.increaseNumberOfAttempts();
    this.#bridgeGame.initPlayData();

    this.askDirection();
  }
}

const app = new App();
app.play();

module.exports = App;
