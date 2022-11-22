const Bridge = require('./Bridge');
const BridgeMaker = require('../BridgeMaker');
const BridgeRandomNumberGenerator = require('../utils/BridgeRandomNumberGenerator');
const { DIRECTION, MOVABLE } = require('../data/constants');
/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  #bridge;

  #bridgesProcess;

  #tryCount;

  #success;

  constructor() {
    this.#bridgesProcess = [[], []];
    this.#success = false;
    this.#tryCount = 1;
  }

  initBridge(length) {
    this.#bridge = new Bridge(
      BridgeMaker.makeBridge(length, BridgeRandomNumberGenerator.generate),
    );
  }

  static getIndexFromDirection(direction) {
    if (direction === DIRECTION.UP) return 0;
    return 1;
  }

  moveProcess(index, direction) {
    const movable = this.#bridge.checkCorrectDirection(direction, index);
    const movablePosition = BridgeGame.getIndexFromDirection(direction);

    this.#bridgesProcess.map((arr, arrayIndex) => (
      arrayIndex === movablePosition ? arr.push(movable) : arr.push(' ')));
    return this.#bridgesProcess;
  }

  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move(direction, index) {
    const movable = this.#bridge.checkCorrectDirection(direction, index);
    if (index === this.#bridge.getBridgeLength() - 1
      && movable === MOVABLE.MOVABLE) this.#success = true;

    return {
      movable,
      isSuccess: this.#success,
    };
  }

  quit() {
    return {
      process: this.#bridgesProcess,
      isSuccess: this.#success,
      tryCount: this.#tryCount,
    };
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {
    this.#tryCount += 1;
    this.#bridgesProcess = [[], []];
  }
}

module.exports = BridgeGame;
