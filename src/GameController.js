const { RESTART_TRIGGER, QUIT_TRIGGER } = require('./constants/condition.js');
const { GAME_MSG } = require('./constants/message.js');

const { Console } = require('@woowacourse/mission-utils');
const InputView = require('./views/InputView.js');
const OutputView = require('./views/OutputView.js');
const BridgeGame = require('./BridgeGame.js');
const Validation = require('./Validation.js');

class GameController {
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
      this.reRequest(this.requestBridgeSize, message);
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
      if (this.bridgeGame.isClearedGame()) {
        this.printFinalResult();
        Console.close();
        return;
      }
      this.requestMovingDirection();
    } catch ({ message }) {
      this.reRequest(this.requestMovingDirection, message);
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
        Console.close();
      }
    } catch ({ message }) {
      this.reRequest(this.requestRetryOrQuit, message);
    }
  }

  printFinalResult() {
    const movementLogs = this.bridgeGame.getMovementLogs();
    const isSucceeded = this.bridgeGame.isSucceededMove();
    const tryCount = this.bridgeGame.getTryCount();

    OutputView.printResult(movementLogs, isSucceeded, tryCount);
  }

  reRequest(requestFunc, errMessage) {
    OutputView.printMsg(errMessage);
    requestFunc.call(this);
  }
}

module.exports = GameController;
