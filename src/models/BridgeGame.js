const { BRIDGE_GAME } = require('../constants/values');

class BridgeGame {
  #bridge;

  #gameStatus;

  constructor(bridge) {
    this.#bridge = bridge;
    this.#resetGameStatus();
  }

  #resetGameStatus() {
    this.#gameStatus = { length: 0, upBridge: [], downBridge: [] };
  }

  move(direction) {
    const selectedDirection = this.#makeSelectedDirection(direction);
    this.#gameStatus[selectedDirection].push(this.#updateBridge(direction));
    const unselectedDirection = this.#makeUnselectedDirection(direction);
    this.#gameStatus[unselectedDirection].push(BRIDGE_GAME.EMPTY);
    this.#gameStatus.length += BRIDGE_GAME.STEP;

    return {
      upBridge: this.#gameStatus.upBridge,
      downBridge: this.#gameStatus.downBridge,
    };
  }

  #makeSelectedDirection(direction) {
    return direction === BRIDGE_GAME.INPUT_U ? BRIDGE_GAME.UP_BRIDGE : BRIDGE_GAME.DOWN_BRIDGE;
  }

  #updateBridge(direction) {
    return direction === this.#bridge[this.#gameStatus.length]
      ? BRIDGE_GAME.CORRECT
      : BRIDGE_GAME.INCORRECT;
  }

  #makeUnselectedDirection(direction) {
    return direction === BRIDGE_GAME.INPUT_U ? BRIDGE_GAME.DOWN_BRIDGE : BRIDGE_GAME.UP_BRIDGE;
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {}
}

module.exports = BridgeGame;
