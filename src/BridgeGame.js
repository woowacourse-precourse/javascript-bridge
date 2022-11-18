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
    // TODO: validation of bridge length
    this.#bridgeAnswer = BridgeMaker.makeBridge(
      Number(bridgeLength),
      BridgeRandomNumberGenerator.generate
    );
    this.#bridgeMap = { U: [], D: [] };
    this.#stepCount = 0;
    this.#status = {
      numberOfAttempts: 1,
      isSuccess: false,
      isFinished: false,
    };
  }

  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move(playerMoving) {
    // TODO: validation of player moving
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
    const oppositeDirection = OPPOSITE_DIRECTION[playerMoving];
    if (isCorrect) {
      this.#bridgeMap[playerMoving].push('O');
      this.#bridgeMap[oppositeDirection].push(' ');
    } else {
      this.#bridgeMap[playerMoving].push('X');
      this.#bridgeMap[oppositeDirection].push(' ');
    }
  }

  updateStatus(isCorrect) {
    this.#stepCount += 1;
    if (isCorrect) {
      if (this.#stepCount === this.#bridgeAnswer.length) {
        this.#status.isSuccess = true;
        this.#status.isFinished = true;
      }
    } else {
      this.#status.isFinished = true;
    }
  }

  getBridgeMap() {
    return { upperRow: this.#bridgeMap.U, lowerRow: this.#bridgeMap.D };
  }

  getStatus() {
    return this.#status;
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {
    this.#bridgeMap.U.pop();
    this.#bridgeMap.D.pop();
    this.#stepCount -= 1;
    this.#status.numberOfAttempts += 1;
    this.#status.isFinished = false;
  }
}

module.exports = BridgeGame;
