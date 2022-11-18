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
    const successful = this.#bridgeGame.move(direction);
    OutputView.printMap(this.#bridgeGame.curMap());

    successful ? this.doseUserClear() : this.askRetry();
  }

  doseUserClear() {
    this.#bridgeGame.gameComplete()
      ? OutputView.printResult(this.#bridgeGame.gameResult())
      : this.askDirection();
  }

  handleCommand(command) {
    const shouldRetry = this.#bridgeGame.retry(command);
    if (shouldRetry) {
      this.#bridgeGame.increaseNumberOfAttempts();
      this.#bridgeGame.initPlayData();
      this.askDirection();
    } else {
      OutputView.printResult(this.#bridgeGame.gameResult());
    }
  }
}

const app = new App();
app.play();

module.exports = App;
