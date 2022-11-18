const InputView = require('../views/InputView');
const { MESSAGE } = require('../constant');
const BridgeGame = require('../BridgeGame');

class GameController {
  #bridgeGame;

  constructor() {
    this.#bridgeGame = new BridgeGame();
  }

  gameStart() {
    this.#bridgeGame.printMessage(MESSAGE.START_NOTIFICATION);
    this.askBridgeSize();
  }

  askBridgeSize() {
    const sizeCallback = (size) => {
      try {
        this.tryMakeBridge(size);
      } catch (errorMessage) {
        this.catchHandler(errorMessage, this.askBridgeSize);
      }
    };
    InputView.readBridgeSize(sizeCallback);
  }

  askDirection() {
    const directionCallback = (direction) => {
      try {
        this.tryMovePlayer(direction);
      } catch (errorMessage) {
        this.catchHandler(errorMessage, this.askDirection);
      }
    };
    InputView.readMoving(directionCallback);
  }

  askRetry() {
    const commandCallback = (command) => {
      try {
        this.tryRetry(command);
      } catch (errorMessage) {
        this.catchHandler(errorMessage, this.askRetry);
      }
    };
    InputView.readGameCommand(commandCallback);
  }

  tryMakeBridge(size) {
    this.#bridgeGame.makeBridge(size);
    this.askDirection();
  }

  tryMovePlayer(direction) {
    this.#bridgeGame.handleDirection(direction);
    const isRightChoice = this.#bridgeGame.move(direction);
    this.#bridgeGame.printCurMap();
    isRightChoice ? this.isAllCrossed() : this.askRetry();
  }

  tryRetry(command) {
    const shouldRetry = this.#bridgeGame.retry(command);
    shouldRetry ? this.retry() : this.gameOver();
  }

  catchHandler(error, reInput) {
    this.#bridgeGame.printMessage(error);
    reInput();
  }

  isAllCrossed() {
    const isComplete = this.#bridgeGame.checkGameComplete();
    isComplete ? this.#bridgeGame.printGameResult() : this.askDirection();
  }

  retry() {
    this.#bridgeGame.increaseNumberOfAttempts();
    this.#bridgeGame.initPlayData();
    this.askDirection();
  }

  gameOver() {
    this.#bridgeGame.printGameResult();
  }
}

module.exports = GameController;
