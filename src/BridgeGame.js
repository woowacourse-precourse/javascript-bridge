const { BRIDGE, MAP } = require('./constant/Bridge');
const BridgeMaker = require('./BridgeMaker');
const BridgeRandomNumberGenerator = require('./BridgeRandomNumberGenerator');
/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  #bridge;
  #tryCount;
  #currentPosition;
  #map;
  constructor(size) {
    this.#bridge = BridgeMaker.makeBridge(size, BridgeRandomNumberGenerator.generate);
    this.#currentPosition = -1;
    this.#tryCount = 1;
    this.#map = [[], []];
  }

  getTryCount() {
    return this.#tryCount;
  }

  getMap() {
    return this.#map;
  }

  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move(space) {
    this.#currentPosition += 1;
    const passResult = space === this.#bridge[this.#currentPosition] ? MAP.PASS : MAP.NONPASS;
    if (space === BRIDGE.UP) {
      this.#map[BRIDGE.UPPER].push(passResult);
      this.#map[BRIDGE.LOWER].push(MAP.BLANK);
    } else {
      this.#map[BRIDGE.UPPER].push(MAP.BLANK);
      this.#map[BRIDGE.LOWER].push(passResult);
    }
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {}

  isPass() {
    return (
      this.#map[BRIDGE.UPPER][this.#currentPosition] === MAP.PASS ||
      this.#map[BRIDGE.LOWER][this.#currentPosition] === MAP.PASS
    );
  }

  isClear() {
    if (this.#currentPosition !== this.#bridge.length - 1) return false;
    return this.isPass();
  }
}

module.exports = BridgeGame;
