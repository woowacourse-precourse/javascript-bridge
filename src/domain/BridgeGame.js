const { TRY_COUNT_INITIAL_NUMBER } = require("../utils/constants");
const Bridge = require("./Bridge");
const Player = require("./Player");

/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  #bridge;
  #player;
  #tryCount;

  constructor(bridge) {
    this.#bridge = new Bridge(bridge);
    this.#player = new Player();
    this.#tryCount = TRY_COUNT_INITIAL_NUMBER;
  }
  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move(direction) {
    if (!this.isMovable(direction)) {
      this.#player.fall(direction);
      return;
    }
    this.#player.move(direction);
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {
    this.#player = new Player();
    this.#tryCount++;
  }

  isMovable(direction) {
    return this.#bridge.getNextDirection(this.#player) === direction;
  }

  isFallen() {
    return this.#player.isFallen();
  }

  isClear() {
    return this.#bridge.isLastPosition(this.#player);
  }

  getMap() {
    return this.#player.getMap();
  }

  getResult() {
    return { map: this.getMap(), isClear: this.isClear(), tryCount: this.#tryCount };
  }
}

module.exports = BridgeGame;
