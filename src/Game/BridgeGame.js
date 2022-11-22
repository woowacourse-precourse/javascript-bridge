const BridgeGameStatus = require('./BridgeGameStatus');
const BridgeMaker = require('../BridgeMaker');
const BridgeMap = require('./BridgeMap');
const BridgeRandomNumberGenerator = require('../utils/BridgeRandomNumberGenerator');
const { MARK } = require('../utils/Constants');

class BridgeGame {
  #bridgeAnswer;

  #bridgeMap;

  #status;

  constructor() {
    this.#bridgeMap = new BridgeMap();
    this.#status = new BridgeGameStatus();
  }

  setBridge(bridgeSize) {
    this.#bridgeAnswer = BridgeMaker.makeBridge(
      bridgeSize,
      BridgeRandomNumberGenerator.generate
    );
  }

  move(direction) {
    const correct = this.isCorrect(direction);
    this.updateBridgeMap(direction, correct);
    this.updateStatus(correct);
  }

  isCorrect(direction) {
    if (this.#bridgeAnswer[this.#status.getStepCount()] === direction) {
      return true;
    }

    return false;
  }

  updateBridgeMap(direction, correct) {
    if (correct) {
      return this.#bridgeMap.mark(direction, MARK.correct);
    }

    return this.#bridgeMap.mark(direction, MARK.incorrect);
  }

  updateStatus(correct) {
    this.#status.addStep();

    if (correct) {
      return this.checkSuccess();
    }

    return this.#status.end();
  }

  checkSuccess() {
    if (this.#status.getStepCount() === this.#bridgeAnswer.length) {
      this.#status.succeed();
    }
  }

  retry() {
    this.#status.initialize();
    this.#bridgeMap.initialize();
  }

  isSuccessful() {
    return this.#status.isSuccessful();
  }

  isGameOver() {
    return this.#status.isGameOver();
  }

  getBridgeMap() {
    return this.#bridgeMap.getRows();
  }
}

module.exports = BridgeGame;
