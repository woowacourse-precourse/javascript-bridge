const { BRIDGE } = require('./constant');

/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  #bridge;
  #order;
  #map;
  #tryCount;
  #isPass;

  constructor() {
    this.#order = 0;
    this.#map = [[], []];
    this.#tryCount = 1;
    this.#isPass = true;
  }

  setBridge(bridge) {
    this.#bridge = bridge;
  }

  isEnd() {
    if (this.#bridge.length === this.#order) return true;
  }

  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move(move) {
    if (this.#bridge[this.#order].includes(move)) {
      return true;
    }
    return false;
  }

  success(move) {
    this.#order += 1;
    move === BRIDGE.UP
      ? this.up(BRIDGE.CROSS_SUCCESS)
      : this.down(BRIDGE.CROSS_SUCCESS);
  }

  fail(move) {
    this.#isPass = false;
    move === BRIDGE.UP
      ? this.up(BRIDGE.CROSS_FAIL)
      : this.down(BRIDGE.CROSS_FAIL);
  }

  up(result) {
    this.#map[0].push(result);
    this.#map[1].push(' ');
  }

  down(result) {
    this.#map[0].push(' ');
    this.#map[1].push(result);
  }

  getMap() {
    return this.#map;
  }

  getResult() {
    return { try: this.#tryCount, isPass: this.#isPass };
  }
  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {
    this.#map = [[], []];
    this.#order = 0;
    this.#isPass = true;
    this.#tryCount += 1;
  }
}

module.exports = BridgeGame;
