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
    this.#tryCount = 1;
  }

  isSuccess() {
    return this.#bridge.isLastPosition(this.#player);
  }

  isMovable(direction) {
    return this.#bridge.getNextIndex(this.#player) === direction;
  }

  out(direction) {
    this.#player.out(direction);
  }
  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move(direction) {
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

  getMap() {
    return this.#player.getMap();
  }

  getResult() {
    return [this.getMap(), this.isSuccess(), this.#tryCount];
  }
}

module.exports = BridgeGame;
