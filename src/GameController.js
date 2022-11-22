const { RESTART_COMMAND, QUIT_COMMAND } = require('./constants/condition.js');
const { GAME_MSG_START } = require('./constants/message.js');

const tryCatchHandler = require('./utils/tryCatchHandler.js');
const { makeBridge } = require('./BridgeMaker.js');
const { generate } = require('./utils/BridgeRandomNumberGenerator.js');
const { Console } = require('@woowacourse/mission-utils');
const InputView = require('./views/InputView.js');
const OutputView = require('./views/OutputView.js');
const BridgeGame = require('./BridgeGame.js');
const Validation = require('./Validation.js');
const Bridge = require('./Bridge.js');

class GameController {
  play() {
    OutputView.printMsg(GAME_MSG_START);
    this.#requestBridgeSize();
  }

  #requestBridgeSize() {
    InputView.readBridgeSize((size) => {
      tryCatchHandler(
        () => this.#buildBridgePhase(size),
        () => this.#requestBridgeSize()
      );
    });
  }

  #buildBridgePhase(size) {
    Validation.validateSize(size);

    const directions = makeBridge(Number(size), generate);
    const bridge = new Bridge(directions);

    this.bridgeGame = new BridgeGame(bridge);

    this.#requestDirection();
  }

  #requestDirection() {
    InputView.readMoving((direction) => {
      tryCatchHandler(
        () => this.#movePhase(direction),
        () => this.#requestDirection()
      );
    });
  }

  #movePhase(direction) {
    Validation.validateDirection(direction);
    this.bridgeGame.move(direction);

    const movementLogs = this.bridgeGame.getMovementLogs();
    OutputView.printMap(movementLogs);

    this.#runProcess();
  }

  #runProcess() {
    if (this.bridgeGame.isEnd()) {
      this.#quit();
      return;
    }
    if (this.bridgeGame.isLatestMoveSucceeded()) {
      this.#requestDirection();
      return;
    }

    this.#requestRetryCommand();
  }

  #requestRetryCommand() {
    InputView.readGameCommand((command) => {
      tryCatchHandler(
        () => this.#retryPhase(command),
        () => this.#requestRetryCommand()
      );
    });
  }

  #retryPhase(command) {
    Validation.validateGameCommand(command);

    this.#runCommand(command);
  }

  #runCommand(command) {
    if (command === RESTART_COMMAND) {
      this.bridgeGame.retry();
      this.#requestDirection();
      return;
    }
    if (command === QUIT_COMMAND) {
      this.#quit();
    }
  }

  #quit() {
    const movementLogs = this.bridgeGame.getMovementLogs();
    const isEnd = this.bridgeGame.isEnd();
    const tryCount = this.bridgeGame.getTryCount();

    OutputView.printResult(movementLogs, isEnd, tryCount);

    Console.close();
  }
}

module.exports = GameController;
