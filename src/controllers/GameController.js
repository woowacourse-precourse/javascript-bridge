const InputView = require('../views/InputView');
const OutputView = require('../views/OutputView');
const { MESSAGE } = require('../constant');
const BridgeGame = require('../BridgeGame');

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
    const sizeCallback = (size) => {
      try {
        this.tryMakeBridge(size);
      } catch (error) {
        this.catchHandler(error, this.askBridgeSize);
      }
    };
    InputView.readBridgeSize(sizeCallback);
  }

  isDone() {
    const isCompleted = this.#bridgeGame.checkGameComplete();
    isCompleted ? this.#bridgeGame.printGameResult() : this.askDirection();
  }

  askDirection() {
    const directionCallback = (direction) => {
      try {
        this.tryMovePlayer(direction);
      } catch (error) {
        this.catchHandler(error, this.askDirection);
      }
    };
    InputView.readMoving(directionCallback);
  }

  askRetry() {
    const commandCallback = (command) => {
      try {
        this.tryRetry(command);
      } catch (error) {
        this.catchHandler(error, this.askRetry);
      }
    };
    InputView.readGameCommand(commandCallback);
  }

  retry() {
    this.#bridgeGame.initData();
    this.askDirection();
  }

  gameOver() {
    this.#bridgeGame.printGameResult();
  }

  tryMakeBridge(size) {
    this.#bridgeGame.makeBridge(size);
    this.askDirection();
  }

  tryMovePlayer(direction) {
    const isRightChoice = this.#bridgeGame.move(direction);
    this.#bridgeGame.printCurMap();
    isRightChoice ? this.isDone() : this.askRetry();
  }

  tryRetry(command) {
    const shouldRetry = this.#bridgeGame.checkCommend(command);
    shouldRetry ? this.retry() : this.gameOver();
  }

  catchHandler(error, reInput) {
    OutputView.printMessage(error);
    reInput();
  }
}

module.exports = GameController;
