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
    InputView.readBridgeSize(this.buildBridgePhase.bind(this));
  }

  buildBridgePhase(size) {
    try {
      this.bridgeGame.build(size);

      this.requestDirection();
    } catch ({ message }) {
      this.reRequest(this.requestBridgeSize, message);
    }
  }

  requestDirection() {
    InputView.readMoving(this.movePhase.bind(this));
  }

  movePhase(direction) {
    try {
      this.bridgeGame.move(direction);

      const movementLogs = this.bridgeGame.getMovementLogs();
      OutputView.printMap(movementLogs);

      if (!this.bridgeGame.isSucceededMove()) return this.requestRetryCommand();
      if (this.bridgeGame.isClearedGame()) {
        this.quit();
        return;
      }
      this.requestDirection();
    } catch ({ message }) {
      this.reRequest(this.requestDirection, message);
    }
  }

  requestRetryCommand() {
    InputView.readGameCommand(this.retryPhase.bind(this));
  }

  retryPhase(command) {
    try {
      Validation.validateGameCommand(command);

      this.runCommand(command);
    } catch ({ message }) {
      this.reRequest(this.requestRetryCommand, message);
    }
  }

  runCommand(command) {
    switch (command) {
      case QUIT_TRIGGER: {
        this.quit();
        break;
      }
      case RESTART_TRIGGER: {
        this.bridgeGame.retry();
        this.requestDirection();
      }
    }
  }

  quit() {
    const movementLogs = this.bridgeGame.getMovementLogs();
    const isSucceeded = this.bridgeGame.isSucceededMove();
    const tryCount = this.bridgeGame.getTryCount();

    OutputView.printResult(movementLogs, isSucceeded, tryCount);
    Console.close();
  }

  reRequest(requestFunc, errMessage) {
    OutputView.printMsg(errMessage);
    requestFunc.call(this);
  }
}

module.exports = GameController;
