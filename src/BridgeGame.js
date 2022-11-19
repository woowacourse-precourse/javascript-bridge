const BridgeValidator = require('./Bridge.validator');
const { BRIDGE_LENGTH_MAX, BRIDGE_LENGTH_MIN } = require('./Resource');

/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  #bridge = [];
  #bridgeAnswers = [];
  #currentPosition = 0;
  #maxPosition = 0;
  #isFinish = false;
  #try = 1;

  constructor(bridge) {
    BridgeValidator.checkBridge(bridge, BRIDGE_LENGTH_MIN, BRIDGE_LENGTH_MIN);
    this.#bridge = bridge;
    this.#maxPosition = bridge.length - 1;
  }
  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * @param {string} nextMoveChar 'U', 'D'만 입력을 받습니다.
   */
  move(nextMoveChar) {
    BridgeValidator.checkInputNext(nextMoveChar);
    BridgeValidator.checkPosition(this.#currentPosition, this.#maxPosition);

    if (nextMoveChar == this.#bridge(this.#currentPosition)) {
      return this.moveNextTrue();
    }
    return this.moveNextFalse();
  }

  moveNextTrue() {
    this.#currentPosition += 1;
    this.#bridgeAnswers.push('O');
    if (BridgeValidator.checkFinish(this.#currentPosition, this.#maxPosition)) {
      this.#isFinish = true;
    }
    return true;
  }

  moveNextFalse() {
    this.#bridgeAnswers.push('X');
    this.#isFinish = true;
    return false;
  }

  get bridgeAnswers() {
    return this.#bridgeAnswers;
  }

  get isFinish() {
    return this.#isFinish;
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {}
}

module.exports = BridgeGame;
