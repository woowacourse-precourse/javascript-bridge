const { RESTART_TRIGGER, QUIT_TRIGGER } = require('./constants/condition.js');
const { GAME_MSG } = require('./constants/message.js');

const InputView = require('./views/InputView.js');
const OutputView = require('./views/OutputView.js');
const BridgeGame = require('./BridgeGame.js');
const Validation = require('./Validation.js');

class App {
  constructor() {
    this.bridgeGame = new BridgeGame();
  }

  play() {
    OutputView.printMsg(GAME_MSG.start);
    this.requestBridgeSize();
  }

  requestBridgeSize() {
    InputView.readBridgeSize(this.tryBuildBridge.bind(this));
  }

  tryBuildBridge(size) {
    try {
      this.bridgeGame.build(size);

      this.requestMovingDirection();
    } catch ({ message }) {
      this.reRequestBridgeSize(message);
    }
  }

  requestMovingDirection() {
    InputView.readMoving(this.tryMove.bind(this));
  }

  tryMove(movingDirection) {
    try {
      this.bridgeGame.move(movingDirection);

      const movementLogs = this.bridgeGame.getMovementLogs();
      OutputView.printMap(movementLogs);

      if (!this.bridgeGame.isSucceededMove()) return this.requestRetryOrQuit();
    } catch ({ message }) {
      this.reRequestMovingDirection(message);
    }
  }

  requestRetryOrQuit() {
    InputView.readGameCommand(this.retryProcess.bind(this));
  }

  retryProcess(gameCommand) {
    try {
      Validation.validateGameCommand(gameCommand);

      if (gameCommand === RESTART_TRIGGER) {
        this.bridgeGame.retry();
        return this.requestMovingDirection();
      }
      if (gameCommand === QUIT_TRIGGER) {
        this.printFinalResult();
      }
    } catch ({ message }) {
      this.reRequestGameCommand(message);
    }
  }

  printFinalResult() {
    const movementLogs = this.bridgeGame.getMovementLogs();
    const isSucceeded = this.bridgeGame.isSucceededMove();
    const tryCount = this.bridgeGame.getTryCount();

    OutputView.printResult(movementLogs, isSucceeded, tryCount);
  }

  reRequestBridgeSize(message) {
    OutputView.printMsg(message);
    this.requestBridgeSize();
  }

  reRequestMovingDirection(message) {
    OutputView.printMsg(message);
    this.requestMovingDirection();
  }

  reRequestGameCommand(message) {
    OutputView.printMsg(message);
    this.requestRetryOrQuit();
  }
}

const app = new App();
app.play();

module.exports = App;
