const BridgeGame = require('./BridgeGame');
const { MESSAGE } = require('./constant');
const GameController = require('./controller/GameController');
const InputView = require('./views/InputView');

class App {
  #bridgeGame;

  constructor() {
    this.#gameCtrl = new GameController();
    this.#bridgeGame = new BridgeGame();
  }

  play() {
    this.gameStart();
  }

  gameStart() {
    this.#bridgeGame.printMessage(MESSAGE.START_NOTIFICATION);
    this.askBridgeSize();
  }

  askBridgeSize() {
    InputView.readBridgeSize((size) => {
      try {
        this.handleSize(size);
      } catch (errorMessage) {
        this.#bridgeGame.printMessage(errorMessage);
        this.askBridgeSize();
      }
    });
  }

  askDirection() {
    InputView.readMoving((direction) => {
      try {
        this.handleDirection(direction);
      } catch (errorMessage) {
        this.#bridgeGame.printMessage(errorMessage);
        this.askDirection();
      }
    });
  }

  askRetry() {
    InputView.readGameCommand((command) => {
      try {
        this.handleCommand(command);
      } catch (errorMessage) {
        this.#bridgeGame.printMessage(errorMessage);
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
    this.#bridgeGame.printCurMap();

    successful ? this.doseUserClear() : this.askRetry();
  }

  doseUserClear() {
    this.#bridgeGame.checkGameComplete()
      ? this.#bridgeGame.printGameResult()
      : this.askDirection();
  }

  handleCommand(command) {
    const shouldRetry = this.#bridgeGame.retry(command);
    if (shouldRetry) {
      this.#bridgeGame.increaseNumberOfAttempts();
      this.#bridgeGame.initPlayData();
      this.askDirection();
    } else {
      this.#bridgeGame.printGameResult();
    }
  }
}

const app = new App();
app.play();

module.exports = App;
