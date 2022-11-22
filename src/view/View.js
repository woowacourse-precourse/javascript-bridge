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
    InputView.readBridgeSize(this.#getBridgeSize());
  }

  #getBridgeSize() {
    return (size) => this.#handleSizeError(size);
  }

  #handleSizeError(size) {
    const bridgeSizeValidator = new BridgeSizeValidator();

    try {
      bridgeSizeValidator.validate(size);
      this.#gameController.inputBridgeSize(size);
      this.#inputPositionToMove();
    } catch (error) {
      OutputView.printError(error.message);
      this.#inputBridgeSize();
    }
  }

  #inputPositionToMove() {
    InputView.readMoving(this.#getPositionToMove());
  }

  #getPositionToMove() {
    return (direction) => this.#handlePositionError(direction);
  }

  #handlePositionError(direction) {
    const bridgePositionValidator = new BridgePositionValidator();
    try {
      bridgePositionValidator.validate(direction);
      const isMove = this.#gameController.inputMove(direction);
      this.#printBridge(this.#gameController.getMap());
      this.#nextStep(isMove);
    } catch (error) {
      OutputView.printError(error.message);
      this.#inputPositionToMove();
    }
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
    InputView.readGameCommand(this.#retryOrQuit());
  }

  #retryOrQuit() {
    return (input) => this.#handleCommandError(input);
  }

  #handleCommandError(input) {
    const bridgeCommandValidator = new BridgeCommandValidator();

    try {
      bridgeCommandValidator.validate(input);
      if (input === GAME_CONDITION.RESTART_GAME) this.#retryGame();
      if (input === GAME_CONDITION.QUIT_GAME) this.#quitGame();
    } catch (error) {
      OutputView.printError(error.message);
      this.#inputRetryOrQuit();
    }
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
