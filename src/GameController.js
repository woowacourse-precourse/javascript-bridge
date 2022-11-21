const { RESTART_COMMAND, QUIT_COMMAND } = require('./constants/condition.js');
const { GAME_MSG } = require('./constants/message.js');

const { Console } = require('@woowacourse/mission-utils');
const InputView = require('./views/InputView.js');
const OutputView = require('./views/OutputView.js');
const BridgeGame = require('./BridgeGame.js');
const Validation = require('./Validation.js');
const tryCatchHandler = require('./utils/tryCatchHandler.js');

class GameController {
  constructor() {
    this.bridgeGame = new BridgeGame();
  }

  play() {
    OutputView.printMsg(GAME_MSG.start);
    this.requestBridgeSize();
  }

  requestBridgeSize() {
    InputView.readBridgeSize((size) => {
      tryCatchHandler(this.buildBridgePhase.bind(this, size), this.requestBridgeSize.bind(this));
    });
  }

  buildBridgePhase(size) {
    Validation.validateSize(size);
    this.bridgeGame.build(size);

    this.requestDirection();
  }

  requestDirection() {
    InputView.readMoving((direction) => {
      tryCatchHandler(this.movePhase.bind(this, direction), this.requestDirection.bind(this));
    });
  }

  movePhase(direction) {
    Validation.validateDirection(direction);
    this.bridgeGame.move(direction);

    const movementLogs = this.bridgeGame.getMovementLogs();
    OutputView.printMap(movementLogs);

    this.runProcess();
  }

  runProcess() {
    if (this.bridgeGame.isEnd()) {
      this.quit();
      return;
    }
    if (this.bridgeGame.isSucceededMove()) {
      this.requestDirection();
      return;
    }

    this.requestRetryCommand();
  }

  requestRetryCommand() {
    InputView.readGameCommand((command) => {
      tryCatchHandler(this.retryPhase.bind(this, command), this.requestRetryCommand.bind(this));
    });
  }

  retryPhase(command) {
    Validation.validateGameCommand(command);

    this.runCommand(command);
  }

  runCommand(command) {
    if (command === RESTART_COMMAND) {
      this.bridgeGame.retry();
      this.requestDirection();
      return;
    }
    if (command === QUIT_COMMAND) {
      this.quit();
    }
  }

  quit() {
    const movementLogs = this.bridgeGame.getMovementLogs();
    const isSucceeded = this.bridgeGame.isSucceededMove();
    const tryCount = this.bridgeGame.getTryCount();

    OutputView.printResult(movementLogs, isSucceeded, tryCount);

    Console.close();
  }
}

module.exports = GameController;
