const BridgeGameStatus = require('./BridgeGameStatus');
const BridgeMap = require('./BridgeMap');
const { MARK } = require('../utils/Constants');

class BridgeGame {
  #bridgeAnswer;

  #bridgeMap;

  #status;

  constructor(bridge) {
    this.#bridgeAnswer = bridge;
    this.#bridgeMap = new BridgeMap();
    this.#status = new BridgeGameStatus();
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
