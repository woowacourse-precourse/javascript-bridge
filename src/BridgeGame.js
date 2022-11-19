const BridgeMaker = require('./BridgeMaker');
const BridgeRandomNumberGenerator = require('./BridgeRandomNumberGenerator');

const OPPOSITE_DIRECTION = { U: 'D', D: 'U' };
/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  #bridgeAnswer;

  #bridgeMap;

  #stepCount;

  #status;

  setUp(bridgeLength) {
    this.makeBridge(Number(bridgeLength));
    this.#bridgeMap = { U: [], D: [] };
    this.#stepCount = 0;
    this.#status = {
      numberOfAttempts: 1,
      isSuccess: false,
      isFinished: false,
    };
  }

  makeBridge(bridgeLength) {
    this.#bridgeAnswer = BridgeMaker.makeBridge(
      bridgeLength,
      BridgeRandomNumberGenerator.generate
    );
  }

  move(playerMoving) {
    const isCorrect = this.isCorrectStep(playerMoving);
    this.updateBridgeMap(playerMoving, isCorrect);
    this.updateStatus(isCorrect);
  }

  isCorrectStep(playerMoving) {
    if (this.#bridgeAnswer[this.#stepCount] === playerMoving) {
      return true;
    }
    return false;
  }

  updateBridgeMap(playerMoving, isCorrect) {
    if (isCorrect) {
      return this.markBridgeMap(playerMoving, 'O');
    }
    return this.markBridgeMap(playerMoving, 'X');
  }

  markBridgeMap(playerMoving, mark) {
    const oppositeDirection = OPPOSITE_DIRECTION[playerMoving];
    this.#bridgeMap[playerMoving].push(mark);
    this.#bridgeMap[oppositeDirection].push(' ');
  }

  updateStatus(isCorrect) {
    this.#stepCount += 1;
    if (isCorrect) {
      this.checkSuccess();
    } else {
      this.#status.isFinished = true;
    }
  }

  checkSuccess() {
    if (this.#stepCount === this.#bridgeAnswer.length) {
      this.#status.isSuccess = true;
      this.#status.isFinished = true;
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
    this.#status.isFinished = false;
  }
}

module.exports = BridgeGame;
