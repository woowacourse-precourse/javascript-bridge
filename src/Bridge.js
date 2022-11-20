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

  getBridgeSizes (moveGame) {
    InputView.readBridgeSize(moveGame, this.createPattern.bind(this));
  }

  createPattern (moveGame, size) {
    if (Validator.validatorBridgeLength(size)) {
      this.#bridgeMap
        .setPattern(BridgeMaker.makeBridge(Number(size), generate));
      moveGame();
    }
  }

  askNextStep (retryGame) {
    InputView.readMoving(retryGame, this.getNextStep.bind(this));
  }

  getNextStep (retryGame, chooseStep) {
    if (Validator.checkStep(chooseStep)) {
      this.#moveMap(retryGame, chooseStep);
    }
  }

  askRetry (retryGame) {
    InputView.readGameCommand(retryGame, this.getRetry.bind(this));
  }

  getRetry (retryGame, chooseRetry) {
    if (Validator.checkRetry(chooseRetry)) {
      this.#runRetry(retryGame, chooseRetry);
    }
  }

  #runRetry (retryGame, chooseRetry) {
    if (chooseRetry === GAME_CONSTANTS.quitGame) {
      return this.#showResult(GAME_CONSTANTS.resultFailure);
    }
    this.#bridgeMap.initHistory();
    this.#tryCount += 1;
    this.askNextStep(retryGame);
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

  #moveMap (retryGame, chooseStep) {
    this.#showMap(chooseStep);
    if (!this.#bridgeMap.checkPath(chooseStep)) {
      return retryGame();
    }
    this.#bridgeMap.incrementDistance();
    if (this.#bridgeMap.isEndGame()) {
      return this.#showResult(GAME_CONSTANTS.resultSuccess);
    }
    this.askNextStep(retryGame);
  }
}

module.exports = Bridge;
