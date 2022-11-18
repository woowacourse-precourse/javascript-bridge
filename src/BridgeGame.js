const BridgeMaker = require('./BridgeMaker');
const BridgeRandomNumberGenerator = require('./BridgeRandomNumberGenerator');
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
      bridgeLength,
      BridgeRandomNumberGenerator.generate
    );
    this.#bridgeMap = {
      U: Array(bridgeLength).fill(' '),
      D: Array(bridgeLength).fill(' '),
    };
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
    if (isCorrect) {
      this.#bridgeMap[playerMoving][this.#stepCount] = 'O';
    } else {
      this.#bridgeMap[playerMoving][this.#stepCount] = 'X';
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

  getStatus() {
    return this.#status;
  }
}

module.exports = BridgeGame;
