const { MOVING, BRIDGE } = require('./constant/input');

/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  #movingLists;
  #countOfGameAttempts;
  #bridgeSize;

  constructor(bridge, lists, attempts) {
    this.#bridgeSize = bridge;
    this.#movingLists = lists;
    this.#countOfGameAttempts = attempts;
  }
  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move(direction) {
    const index = this.#movingLists[0].length;
    direction === MOVING.up && this.upMove(direction, this.#bridgeSize[index]);
    direction === MOVING.down &&
      this.downMove(direction, this.#bridgeSize[index]);
    return this.#movingLists;
  }

  upMove(direction, bridge) {
    if (direction === bridge) {
      this.#movingLists[0].push(BRIDGE.right_direction);
      this.#movingLists[1].push(BRIDGE.blank);
      return;
    }
    this.#movingLists[0].push(BRIDGE.wrong_direction);
    this.#movingLists[1].push(BRIDGE.blank);
  }

  downMove(direction, bridge) {
    if (direction === bridge) {
      this.#movingLists[1].push(BRIDGE.right_direction);
      this.#movingLists[0].push(BRIDGE.blank);
      return;
    }
    this.#movingLists[1].push(BRIDGE.wrong_direction);
    this.#movingLists[0].push(BRIDGE.blank);
  }

  getTotal() {
    return [this.#movingLists, this.#countOfGameAttempts];
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {
    this.#countOfGameAttempts += MOVING.attempts;
    this.#movingLists = MOVING.initialLists;
  }
}

module.exports = BridgeGame;
