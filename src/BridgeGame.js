const { buildMap, formatMap } = require("./lib/bridge");
const { FLAG } = require("./lib/constants");

/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  #bridge = [];
  #map = [[], []];
  #step = 0;
  #tried = 1;

  setBridge(bridge) {
    this.#bridge = bridge;
  }

  isArrived() {
    return this.#bridge.length === this.#step;
  }
  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move(direction) {
    const correct = this.#bridge[this.#step];
    const moved = direction === correct;

    this.updateMap(moved, direction);

    if (moved) this.stepForward();

    return moved;
  }

  updateMap(moved, direction) {
    const mark = moved ? FLAG.CORRECT : FLAG.WRONG;

    if (direction === FLAG.UPPER) {
      this.#map = buildMap.upper(this.#map, mark);
    }

    if (direction === FLAG.LOWER) {
      this.#map = buildMap.lower(this.#map, mark);
    }
  }

  undoMap() {
    this.#map = this.#map.map((section) =>
      section.slice(0, section.length - 1)
    );
  }

  stepForward() {
    this.#step += 1;
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry(previousWork) {
    this.setUpRetry();
    previousWork();
  }

  setUpRetry() {
    this.countTry();
    this.undoMap();
  }

  countTry() {
    this.#tried += 1;
  }

  getFormattedMap() {
    return formatMap(this.#map);
  }

  getTryCount() {
    return this.#tried;
  }
}

module.exports = BridgeGame;
