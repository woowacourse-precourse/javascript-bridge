const GameController = require('./controller/GameController');
const InputView = require('./views/InputView');

class App {
  #gameCtrl;

  constructor() {
    this.#gameCtrl = new GameController();
  }

  play() {
    this.process();
  }

  process() {
    this.#gameCtrl.gameStart();
    this.askBridgeSize();
  }

  askBridgeSize() {
    const sizeCallback = (size) => {
      try {
        this.#gameCtrl.handleSize(size);
        this.askDirection();
      } catch (errorMessage) {
        this.sizeErrorHandler(errorMessage);
      }
    };
    InputView.readBridgeSize(sizeCallback);
  }

  askDirection() {
    const directionCallback = (direction) => {
      try {
        this.#gameCtrl.handleDirection(direction);
        const successful = this.#gameCtrl.move(direction);
        this.#gameCtrl.printCurMap();
        if (successful) {
          this.#gameCtrl.isAllCrossed()
            ? this.#gameCtrl.printGameResult()
            : this.askDirection();
        } else {
          this.askRetry();
        }
      } catch (errorMessage) {
        this.directionErrorHandler(errorMessage);
      }
    };
    InputView.readMoving(directionCallback);
  }

  askRetry() {
    const commandCallback = (command) => {
      try {
        const shouldRetry = this.#gameCtrl.handleCommand(command);
        if (shouldRetry) {
          this.#gameCtrl.retry();
          this.askDirection();
        } else {
          this.#gameCtrl.gameOver();
        }
      } catch (errorMessage) {
        this.retryErrorHandler(errorMessage);
      }
    };
    InputView.readGameCommand(commandCallback);
  }

  sizeErrorHandler(errorMessage) {
    this.#gameCtrl.printMessage(errorMessage);
    this.askBridgeSize();
  }

  directionErrorHandler(errorMessage) {
    this.#gameCtrl.printMessage(errorMessage);
    this.askDirection();
  }

  retryErrorHandler(errorMessage) {
    this.#gameCtrl.printMessage(errorMessage);
    this.askRetry();
  }

  // tryMakeBridge(size) {
  //   this.#bridgeGame.makeBridge(size);
  //   this.askDirection();
  // }

  // tryMovePlayer(direction) {
  //   this.#bridgeGame.handleDirection(direction);
  //   const isRightChoice = this.#bridgeGame.move(direction);
  //   this.#bridgeGame.printCurMap();
  //   isRightChoice ? this.isAllCrossed() : this.askRetry();
  // }

  // tryRetry(command) {
  //   const shouldRetry = this.#bridgeGame.retry(command);
  //   shouldRetry ? this.retry() : this.gameOver();
  // }
}

const app = new App();
app.play();

module.exports = App;
