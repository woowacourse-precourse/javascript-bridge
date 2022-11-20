const BridgeMaker = require('./BridgeMaker');
const BridgeRandomNumberGenerator = require('./BridgeRandomNumberGenerator');

const OPPOSITE_DIRECTION = { U: 'D', D: 'U' };

class BridgeGame {
  #bridgeAnswer;

  #bridgeMap;

  #stepCount;

  #status;

  setUp(bridgeSize) {
    this.makeBridge(Number(bridgeSize));
    this.#bridgeMap = { U: [], D: [] };
    this.#stepCount = 0;
    this.#status = {
      numberOfAttempts: 1,
      crossed: false,
      gameOver: false,
    };
  }

  makeBridge(bridgeSize) {
    this.#bridgeAnswer = BridgeMaker.makeBridge(
      bridgeSize,
      BridgeRandomNumberGenerator.generate
    );
  }

  move(direction) {
    const isCorrect = this.isCorrectStep(direction);
    this.updateBridgeMap(direction, isCorrect);
    this.updateStatus(isCorrect);
  }

  isCorrectStep(direction) {
    if (this.#bridgeAnswer[this.#stepCount] === direction) {
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
    this.#bridgeMap[direction].push(mark);
    this.#bridgeMap[oppositeDirection].push(' ');
  }

  updateStatus(isCorrect) {
    this.#stepCount += 1;
    if (isCorrect) {
      this.checkCrossed();
    } else {
      this.#status.gameOver = true;
    }
  }

  checkCrossed() {
    if (this.#stepCount === this.#bridgeAnswer.length) {
      this.#status.crossed = true;
      this.#status.gameOver = true;
    }
  }

  getBridgeMap() {
    return { upperRow: this.#bridgeMap.U, lowerRow: this.#bridgeMap.D };
  }

  getStatus() {
    return this.#status;
  }

  retry() {
    this.#bridgeMap.U.pop();
    this.#bridgeMap.D.pop();
    this.#stepCount -= 1;
    this.#status.numberOfAttempts += 1;
    this.#status.gameOver = false;
  }
}

module.exports = BridgeGame;
