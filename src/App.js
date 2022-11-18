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
        this.catchHandler(errorMessage, this.askBridgeSize);
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
        this.catchHandler(errorMessage, this.askDirection);
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
        this.catchHandler(errorMessage, this.askRetry);
      }
    };
    InputView.readGameCommand(commandCallback);
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

  catchHandler(error, reInput) {
    this.#gameCtrl.printMessage(error);
    reInput();
  }
}

const app = new App();
app.play();

module.exports = App;
