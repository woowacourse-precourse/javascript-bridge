/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  #bridge;
  #order;
  #map;

  constructor() {
    this.#order = 0;
    this.#map = [[], []];
  }

  setBridge(bridge) {
    this.#bridge = bridge;
  }

  isSuccess(move) {
    if (this.#bridge[this.#order].includes(move)) {
      return true;
    }
    return false;
  }

  isEnd(move) {
    if (this.#bridge.length === this.#order) return true;
  }

  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move(move) {
    this.isSuccess(move) ? this.success(move) : this.fail(move);
    return this.#map;
  }

  success(move) {
    this.#order += 1;
    move === 'U' ? this.up('O') : this.down('O');
  }

  fail(move) {
    move === 'U' ? this.up('X') : this.down('X');
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

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {
    this.#map = [[], []];
    this.#order = 0;
  }
}

module.exports = BridgeGame;
