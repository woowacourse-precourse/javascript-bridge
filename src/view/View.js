const { GAME_CONDITION } = require("../utils/Constants");
const InputView = require("./InputView");
const OutputView = require("./OutputView");
const BridgeGameController = require("../BridgeGameController");
const BridgeSizeValidator = require("../validator/BridgeSizeValidator");
const BridgePositionValidator = require("../validator/BridgePositionValidator");
const BridgeCommandValidator = require("../validator/BridgeCommandValidator");

class View {
  #gameController;

  constructor() {
    this.#gameController = new BridgeGameController();
  }

  startGame() {
    OutputView.startGame();
    this.#inputBridgeSize();
  }

  #inputBridgeSize() {
    try {
      InputView.readBridgeSize(this.#getBridgeSize());
    } catch (error) {
      OutputView.printError(error.message);
      this.#inputBridgeSize();
    }
  }

  #getBridgeSize() {
    return (size) => {
      const bridgeSizeValidator = new BridgeSizeValidator();
      bridgeSizeValidator.validate(size);
      this.#gameController.inputBridgeSize(size);
      this.#inputPositionToMove();
    };
  }

  #inputPositionToMove() {
    InputView.readMoving(this.#getPositionToMove()).catch((error) => {
      OutputView.printError(error.message);
      this.#inputPositionToMove();
    });
  }

  #getPositionToMove() {
    return (position) => {
      const bridgePositionValidator = new BridgePositionValidator();
      bridgePositionValidator.validate(position);
      const isMove = this.#gameController.inputMove(position);
      const bridgeMap = this.#gameController.getMap();
      this.#printBridge(bridgeMap);
      this.#nextStep(isMove);
    };
  }

  #nextStep(isMove) {
    if (isMove && !this.#gameController.checkGameEnd()) {
      return this.#inputPositionToMove();
    }
    if (!isMove) return this.#inputRetryOrQuit();
    this.#quitGame();
  }

  #printBridge(bridge) {
    OutputView.printMap(bridge);
  }

  #inputRetryOrQuit() {
    try {
      InputView.readGameCommand(this.#retryOrQuit());
    } catch (error) {
      OutputView.printError(error.message);
      this.#inputRetryOrQuit();
    }
  }

  #retryOrQuit() {
    return (input) => {
      const bridgeCommandValidator = new BridgeCommandValidator();
      bridgeCommandValidator.validate(input);
      if (input === "R") this.#retryGame();
      if (input === "Q") this.#quitGame();
    };
  }

  #retryGame() {
    this.#gameController.retryGame();
    this.#inputPositionToMove();
  }

  #quitGame() {
    const map = this.#gameController.getMap();
    const result = this.#gameController.getResult();
    OutputView.printResult(map, result);
  }
}

module.exports = View;
