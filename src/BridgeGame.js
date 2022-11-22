const BridgeMaker = require('./BridgeMaker');
const BridgeRandomNumberGenerator = require('./BridgeRandomNumberGenerator');
const { MOVING, MAP, RESULT } = require('./constants');

/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  #bridge = [];
  #history = [];
  #tryCount = 1;
  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move(moving) {
    this.#history.push(moving);
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {
    this.#history = [];
    this.#tryCount += 1;
  }

  setBridge(size) {
    this.#bridge = BridgeMaker.makeBridge(size, BridgeRandomNumberGenerator.generate);
  }

  isSuccess() {
    if (this.#history.length === 0 || this.#bridge.length === 0) return;

    const currentMoving = this.#history[this.#history.length - 1];
    const currentFloor = this.#bridge[this.#history.length - 1];

    return currentMoving === currentFloor;
  }

  isFinal() {
    return this.#history.length === this.#bridge.length;
  }

  getMap() {
    const upFloorsMap = this.#getFloorsMap(MOVING.UP_FLOOR);
    const downFloorsMap = this.#getFloorsMap(MOVING.DOWN_FLOOR);

    return { upFloorsMap, downFloorsMap };
  }

  #getFloorsMap(type) {
    const floors = this.#history.map((floor, i) => {
      if (floor !== type) return ' ';
      if (floor === this.#bridge[i]) return MAP.SUCCESS;
      if (floor !== this.#bridge[i]) return MAP.FAIL;
    });

    return `[ ${floors.join(' | ')} ]`;
  }

  getResult() {
    const isCompleted = this.isFinal() && this.isSuccess() ? RESULT.COMPLETE : RESULT.FAIL;
    const tryCount = String(this.#tryCount);

    return { isCompleted, tryCount };
  }
}

module.exports = BridgeGame;
