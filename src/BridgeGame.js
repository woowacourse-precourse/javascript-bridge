const BridgeMaker = require('./BridgeMaker');
const BridgeRandomNumberGenerator = require('./BridgeRandomNumberGenerator');

const OPPOSITE_DIRECTION = { U: 'D', D: 'U' };

class BridgeGame {
  #bridgeAnswer;

  #numberOfAttempts;

  #status;

  setUp(bridgeSize) {
    this.makeBridge(Number(bridgeSize));
    this.initStatus();
    this.#numberOfAttempts = 1;
  }

  makeBridge(bridgeSize) {
    this.#bridgeAnswer = BridgeMaker.makeBridge(
      bridgeSize,
      BridgeRandomNumberGenerator.generate
    );
  }

  initStatus() {
    this.#status = {
      stepCount: 0,
      crossed: false,
      gameOver: false,
      bridgeMap: { U: [], D: [] },
    };
  }

  move(direction) {
    const isCorrect = this.isCorrectStep(direction);
    this.updateBridgeMap(direction, isCorrect);
    this.updateStatus(isCorrect);
  }

  isCorrectStep(direction) {
    if (this.#bridgeAnswer[this.#status.stepCount] === direction) {
      return true;
    }
    return false;
  }

  updateBridgeMap(direction, isCorrect) {
    if (isCorrect) {
      return this.markBridgeMap(direction, 'O');
    }
    return this.markBridgeMap(direction, 'X');
  }

  markBridgeMap(direction, mark) {
    const oppositeDirection = OPPOSITE_DIRECTION[direction];
    this.#status.bridgeMap[direction].push(mark);
    this.#status.bridgeMap[oppositeDirection].push(' ');
  }

  updateStatus(isCorrect) {
    this.#status.stepCount += 1;
    if (isCorrect) {
      this.checkCrossed();
    } else {
      this.#status.gameOver = true;
    }
  }

  checkCrossed() {
    if (this.#status.stepCount === this.#bridgeAnswer.length) {
      this.#status.crossed = true;
      this.#status.gameOver = true;
    }
  }

  getBridgeMap() {
    return {
      upperRow: this.#status.bridgeMap.U,
      lowerRow: this.#status.bridgeMap.D,
    };
  }

  getStatus() {
    return this.#status;
  }

  getNumberOfAttempts() {
    return this.#numberOfAttempts;
  }

  retry() {
    this.initStatus();
    this.#numberOfAttempts += 1;
  }
}

module.exports = BridgeGame;
