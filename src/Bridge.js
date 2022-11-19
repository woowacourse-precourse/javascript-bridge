const BridgeMaker = require('./BridgeMaker');
const InputView = require('./InputView');
const OutputView = require('./OutputView');
const { generate } = require('./BridgeRandomNumberGenerator');
const BridgeMap = require('./BridgeMap');
const Validator = require('./Validator');

class Bridge {
  #tryCount;

  constructor () {
    OutputView.printStart();
    this.bridgeMap = new BridgeMap();
    this.#tryCount = 1;
  }

  getBridgeSizes (moveGame) {
    InputView.readBridgeSize(moveGame, this.createPattern.bind(this));
  }

  createPattern (moveGame, size) {
    if (Validator.validatorBridgeLength(size)) {
      this.bridgeMap
        .setPattern(BridgeMaker.makeBridge(Number(size), generate));
      moveGame();
    }
  }

  askNextStep (retryGame) {
    InputView.readMoving(retryGame, this.getNextStep.bind(this));
  }

  getNextStep (retryGame, chooseStep) {
    if (Validator.checkStep(chooseStep)) {
      this.moveMap(retryGame, chooseStep);
    }
  }

  moveMap (retryGame, chooseStep) {
    OutputView.printMap(this.bridgeMap.getPathHistoryWithChooseStep(chooseStep));
    if (!this.bridgeMap.checkPath(chooseStep)) {
      return retryGame();
    }
    this.bridgeMap.increaseDistance();
    if (this.bridgeMap.isEndGame()) {
      return OutputView.printResult(true, this.bridgeMap.getPathHistory(), this.#tryCount);
    }
    this.askNextStep(retryGame);
  }

  askRetry (retryGame) {
    InputView.readGameCommand(retryGame, this.getRetry.bind(this));
  }

  getRetry (retryGame, chooseRetry) {
    if (Validator.checkRetry(chooseRetry)) {
      this.runRetry(retryGame, chooseRetry);
    }
  }

  runRetry (retryGame, chooseRetry) {
    if (chooseRetry === 'Q') {
      return OutputView.printResult(false, this.bridgeMap.getPathHistory(), this.#tryCount);
    }
    this.bridgeMap.resetHistory();
    this.#tryCount += 1;
    this.askNextStep(retryGame);
  }
}

module.exports = Bridge;
