const { DIRECTION_KEY } = require("./constants/rule.js");
const { ERROR_MSG } = require("./constants/message.js");
const { Console } = require("@woowacourse/mission-utils");

const InputView = require("./View/InputView.js");
const OutputView = require("./View/OutputView.js");
const BridgeGame = require("./Model/BridgeGame.js");
const Validation = require("./Validation.js");

class GameController {
  constructor() {
    this.bridgeGame = new BridgeGame();
  }

  startGame() {
    OutputView.printStart();
    this.getBridgeInputSize();
  }

  getBridgeInputSize() {
    InputView.readBridgeSize(this.createBridge.bind(this));
  }

  createBridge(size) {
    try {
      this.bridgeGame.build(size);
      this.getDirection();
    } catch {
      this.errorReinput(this.getBridgeInputSize, ERROR_MSG.RANGE);
    }
  }

  getDirection() {
    InputView.readMoving(this.moveDirection.bind(this));
  }

  moveDirection(direction) {
    try {
      this.bridgeGame.move(direction);

      const movementLogs = this.bridgeGame.getMoveRecord();
      OutputView.printMap(movementLogs);

      if (!this.bridgeGame.isSucceed()) return this.getRetryOrQuit();
      if (this.bridgeGame.isLastGame()) {
        this.printFinalResult();
        Console.close();
        return;
      }
      this.getDirection();
    } catch {
      this.errorReinput(this.getDirection, ERROR_MSG.DIRECTION);
    }
  }

  getRetryOrQuit() {
    InputView.readGameCommand(this.retryProcess.bind(this));
  }

  retryProcess(gameCommand) {
    try {
      Validation.checkRestartInput(gameCommand);

      if (gameCommand === DIRECTION_KEY.RESTART) {
        this.bridgeGame.retry();
        return this.getDirection();
      }
      if (gameCommand === DIRECTION_KEY.QUIT) {
        this.printFinalResult();
        Console.close();
      }
    } catch {
      this.errorReinput(this.getRetryOrQuit, ERROR_MSG.RESTART);
    }
  }

  printFinalResult() {
    const moveRecord = this.bridgeGame.getMoveRecord();
    const isSucceeded = this.bridgeGame.isSucceed();
    const tryCount = this.bridgeGame.getTryCount();

    OutputView.printResult(moveRecord, isSucceeded, tryCount);
  }

  errorReinput(reAsk, errMessage) {
    OutputView.printError(errMessage);
    reAsk.call(this);
  }
}

module.exports = GameController;
