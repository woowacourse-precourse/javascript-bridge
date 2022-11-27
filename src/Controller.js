const { GAME_CONSTANTS } = require('./utils/constants');
const MESSAGE = require('./utils/Message');
const { generate } = require('./BridgeRandomNumberGenerator');
const InputView = require('./views/InputView');
const OutputView = require('./views/OutputView');
const BridgeMaker = require('./BridgeMaker');

const BridgeGame = require('./BridgeGame');
const Validator = require('./Validator');
const BridgeMap = require('./BridgeMap');

class Controller {
  #bridgeGame;
  #bridgeMap;

  constructor() {
    this.#bridgeMap = new BridgeMap();
    this.#bridgeGame = new BridgeGame();
  }

  start() {
    OutputView.printStart();
    this.#askBridgeSize();
  }

  #askBridgeSize() {
    InputView.readBridgeSize(this.#handleMakePattern.bind(this));
  }

  #handleMakePattern(size) {
    this.#validateBridgeSize(size);
  }

  #validateBridgeSize(size) {
    if (Validator.validatorBridgeLength(size)) {
      OutputView.printBlankLine();
      return this.#createPattern(size);
    }
    return this.#askBridgeSize();
  }

  static #makePattern(size) {
    return BridgeMaker.makeBridge(Number(size), generate);
  }

  #createPattern(size) {
    this.#bridgeMap.setPattern(Controller.#makePattern(size));
    this.#askNextBridgeStep();
  }

  #askNextBridgeStep() {
    InputView.readMoving(this.#handleMovingStep.bind(this));
  }

  #handleMovingStep(chooseStep) {
    this.#validatorNextStep(chooseStep);
  }

  #validatorNextStep(chooseStep) {
    if (Validator.checkStep(chooseStep)) {
      return this.#updateMovement(chooseStep);
    }
    return this.#askNextBridgeStep();
  }

  #updateMovement(chooseStep) {
    this.#updateHistory(chooseStep).#showMap();
    if (!this.#bridgeMap.isCorrectPath(chooseStep)) {
      return this.#askRetry();
    }
    this.#bridgeMap.incrementDistance();
    if (this.#bridgeMap.isEndGame()) {
      return this.#showResult(GAME_CONSTANTS.resultSuccess);
    }
    this.#askNextBridgeStep();
  }

  #updateHistory(chooseStep) {
    this.#bridgeGame.move(
      this.#bridgeMap.getPathMarker(chooseStep),
      chooseStep,
    );
    return this;
  }

  #showMap() {
    OutputView.printMap(this.#bridgeGame.getHistory());
  }

  #askRetry() {
    InputView.readGameCommand(this.#handleRetryGame.bind(this));
  }

  #handleRetryGame(chooseRetry) {
    this.#validatorRetry(chooseRetry);
  }

  #validatorRetry(chooseRetry) {
    if (Validator.checkRetry(chooseRetry)) {
      return this.#runRetry(chooseRetry);
    }
    return this.#askRetry();
  }

  static #isQuitGame(chooseRetry) {
    return chooseRetry === GAME_CONSTANTS.quitGame;
  }

  #runRetry(chooseRetry) {
    if (Controller.#isQuitGame(chooseRetry)) {
      return this.#showResult(GAME_CONSTANTS.resultFailure);
    }
    this.#bridgeMap.retryMap();
    this.#bridgeGame.retry();
    this.#askNextBridgeStep();
  }

  #showResult(isSuccess) {
    OutputView.printResult(
      (isSuccess ? MESSAGE.successMessage : MESSAGE.failMessage),
      this.#bridgeGame.getHistory(),
      this.#bridgeGame.getTryCount(),
    );
  }
}

module.exports = Controller;
