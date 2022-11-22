const { DIRECTION_KEY } = require("./constants/rule");
const { ERROR_MSG } = require("./constants/message");
const { Console } = require("@woowacourse/mission-utils");

const InputView = require("./View/InputView");
const OutputView = require("./View/OutputView");
const BridgeGame = require("./Model/BridgeGame");
const Validation = require("./Validation");

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

      const moveRecord = this.bridgeGame.getMoveRecord();
      OutputView.printMap(moveRecord);
      this.#checkSuccess();
    } catch {
      this.errorReinput(this.getDirection, ERROR_MSG.DIRECTION);
    }
  }

  #checkSuccess() {
    if (!this.bridgeGame.isSucceed()) return this.getRetryOrQuit();
    if (this.bridgeGame.isLastGame()) {
      this.printFinalResult();
      Console.close();
      return;
    }
    this.getDirection();
  }

  getRetryOrQuit() {
    InputView.readGameCommand(this.retryProcess.bind(this));
  }

  retryProcess(restartInput) {
    try {
      Validation.checkRestartInput(restartInput);
      this.#checkRestart(restartInput);
    } catch {
      this.errorReinput(this.getRetryOrQuit, ERROR_MSG.RESTART);
    }
  }

  #checkRestart(restartInput) {
    if (restartInput === DIRECTION_KEY.RESTART) {
      this.bridgeGame.retry();
      return this.getDirection();
    }
    if (restartInput === DIRECTION_KEY.QUIT) {
      this.printFinalResult();
      Console.close();
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
