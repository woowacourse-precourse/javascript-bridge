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
      this.getDirection();
    } catch (message) {
      this.errorReinput(this.getDirection, message);
    }
  }

  errorReinput(reAsk, errMessage) {
    OutputView.printError(errMessage);
    reAsk.call(this);
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
        Console.close();
      }
    } catch (message) {
      this.errorReinput(this.getRetryOrQuit, message);
    }
  }
}

module.exports = GameController;
