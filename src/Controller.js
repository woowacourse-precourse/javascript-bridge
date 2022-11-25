const { GAME_CONSTANTS } = require('./utils/constants');

const InputView = require('./views/InputView');
const OutputView = require('./views/OutputView');

const BridgeGame = require('./BridgeGame');
const Validator = require('./Validator');

class Controller {
  #bridgeGame;

  constructor() {
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
    try {
      this.#validatorBridgeSize(size);
    } catch (error) {
      OutputView.printError(error);
      this.#askBridgeSize();
    }
  }

  #validatorBridgeSize(size) {
    if (Validator.validatorBridgeLength(size)) {
      OutputView.printBlankLine();
      this.#createPattern(size);
    }
  }

  #createPattern(size) {
    this.#bridgeGame.setPattern(BridgeGame.makePattern(size));
    this.#askNextStep();
  }

  #askNextStep() {
    InputView.readMoving(this.#handleMovingStep.bind(this));
  }

  #handleMovingStep(chooseStep) {
    try {
      this.#validatorNextStep(chooseStep);
    } catch (error) {
      OutputView.printError(error);
      this.#askNextStep();
    }
  }

  #validatorNextStep(chooseStep) {
    if (Validator.checkStep(chooseStep)) {
      this.#moveMap(chooseStep);
    }
  }

  #moveMap(chooseStep) {
    this.#showMap(chooseStep);
    if (!this.#bridgeGame.checkPath(chooseStep)) {
      return this.#askRetry();
    }
    this.#bridgeGame.incrementDistance();
    if (this.#bridgeGame.isEndGame()) {
      return this.#showResult(GAME_CONSTANTS.resultSuccess);
    }
    this.#askNextStep();
  }

  #showMap(chooseStep) {
    OutputView.printMap(this.#bridgeGame.move(chooseStep).getHistory());
  }

  #askRetry() {
    InputView.readGameCommand(this.#handleRetryGame.bind(this));
  }

  #handleRetryGame(chooseRetry) {
    try {
      this.#validatorRetry(chooseRetry);
    } catch (error) {
      OutputView.printError(error);
      this.#askRetry();
    }
  }

  #validatorRetry(chooseRetry) {
    if (Validator.checkRetry(chooseRetry)) {
      this.#runRetry(chooseRetry);
    }
  }

  static #isQuitGame(chooseRetry) {
    return chooseRetry === GAME_CONSTANTS.quitGame;
  }

  #runRetry(chooseRetry) {
    if (Controller.#isQuitGame(chooseRetry)) {
      return this.#showResult(GAME_CONSTANTS.resultFailure);
    }
    this.#bridgeGame.retry();
    this.#askNextStep();
  }

  #showResult(isSuccess) {
    OutputView.printResult(
      isSuccess,
      this.#bridgeGame.getHistory(),
      this.#bridgeGame.getTryCount(),
    );
  }
}

module.exports = Controller;
