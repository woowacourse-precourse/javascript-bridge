const BridgeGameStatus = require('./BridgeGameStatus');
const BridgeMaker = require('./BridgeMaker');
const BridgeMap = require('./BridgeMap');
const BridgeRandomNumberGenerator = require('./BridgeRandomNumberGenerator');

class BridgeGame {
  #bridgeAnswer;

  #bridgeMap;

  #status;

  #numberOfAttempts;

  constructor() {
    this.#bridgeMap = new BridgeMap();
    this.#status = new BridgeGameStatus();
    this.#numberOfAttempts = 1;
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
      return this.#bridgeMap.mark(direction, 'O');
    }
    return this.#bridgeMap.mark(direction, 'X');
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
    this.#numberOfAttempts += 1;
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

  getNumberOfAttempts() {
    return this.#numberOfAttempts;
  }
}

module.exports = BridgeGame;
