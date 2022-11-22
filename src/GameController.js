const { DIRECTION_KEY } = require("./constants/rule.js");

const { Console } = require("@woowacourse/mission-utils");
const InputView = require("./InputView.js");
const OutputView = require("./OutputView.js");
const BridgeGame = require("./BridgeGame.js");
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
    } catch (message) {
      this.errorReinput(this.getBridgeInputSize, message);
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
    } catch (message) {
      this.errorReinput(this.getDirection, message);
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
    } catch (message) {
      this.errorReinput(this.getRetryOrQuit, message);
    }
  }
  errorReinput(reAsk, errMessage) {
    OutputView.printError(errMessage);
    reAsk.call(this);
  }
}

module.exports = GameController;
