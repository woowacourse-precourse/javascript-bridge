const { generate } = require('./BridgeRandomNumberGenerator');

const { GAME_CONSTANTS } = require('./utils/constants');

const BridgeMaker = require('./BridgeMaker');
const InputView = require('./InputView');
const OutputView = require('./OutputView');

const BridgeMap = require('./BridgeMap');
const Validator = require('./Validator');

class Bridge {
  #tryCount;
  #bridgeMap;

  constructor () {
    OutputView.printStart();
    this.#bridgeMap = new BridgeMap();
    this.#tryCount = 1;
  }

  askBridgeSizes () {
    InputView.readBridgeSize(this.handleMakePattern.bind(this));
  }

  handleMakePattern (size) {
    try {
      this.createPattern(size);
    } catch (error) {
      OutputView.printError(error);
      this.askBridgeSizes();
    }
  }

  createPattern (size) {
    if (Validator.validatorBridgeLength(size)) {
      this.#bridgeMap
        .setPattern(BridgeMaker.makeBridge(Number(size), generate));
      this.askNextStep();
    }
  }

  askNextStep () {
    InputView.readMoving(this.handleMovingStep.bind(this));
  }

  handleMovingStep (chooseStep) {
    try {
      this.getNextStep(chooseStep);
    } catch (error) {
      OutputView.printError(error);
      this.askNextStep();
    }
  }

  getNextStep (chooseStep) {
    if (Validator.checkStep(chooseStep)) {
      this.#moveMap(chooseStep);
    }
  }

  askRetry () {
    InputView.readGameCommand(this.handleRetryGame.bind(this));
  }

  handleRetryGame (chooseRetry) {
    try {
      this.getRetry(chooseRetry);
    } catch (error) {
      OutputView.printError(error);
      this.askRetry();
    }
  }

  getRetry (chooseRetry) {
    if (Validator.checkRetry(chooseRetry)) {
      this.#runRetry(chooseRetry);
    }
  }

  #moveMap (chooseStep) {
    this.#showMap(chooseStep);
    if (!this.#bridgeMap.checkPath(chooseStep)) {
      return this.askRetry();
    }
    this.#bridgeMap.incrementDistance();
    if (this.#bridgeMap.isEndGame()) {
      return this.#showResult(GAME_CONSTANTS.resultSuccess);
    }
    this.askNextStep();
  }

  #runRetry (chooseRetry) {
    if (chooseRetry === GAME_CONSTANTS.quitGame) {
      return this.#showResult(GAME_CONSTANTS.resultFailure);
    }
    this.#bridgeMap.initHistory();
    this.#tryCount += 1;
    this.askNextStep();
  }

  #showResult (isSuccess) {
    OutputView.printResult(
      isSuccess,
      this.#bridgeMap.getHistory(),
      this.#tryCount,
    );
  }

  #showMap (chooseStep) {
    OutputView.printMap(this.#bridgeMap
      .setHistoryWithChooseStep(chooseStep)
      .getHistory());
  }
}

module.exports = Bridge;
