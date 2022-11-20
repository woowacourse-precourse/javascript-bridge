const { GameConfig } = require('./Config');

/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  #bridge;

  #position;

  constructor(bridge) {
    this.#bridge = bridge;
    this.#position = 0;
  }

  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move(direction) {
    const result = this.#bridge.moveSuccess(this.#position, direction);
    if (result) this.#position += 1;
    return this.gameStatus(result);
  }

  gameStatus(lastMoveResult) {
    if (this.#position === this.#bridge.length()) return GameConfig.STATUS_SUCCESS;
    if (!lastMoveResult) return GameConfig.STATUS_FAIL;
    return GameConfig.STATUS_PLAY;
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {
    this.#position = 0;
  }
}

module.exports = BridgeGame;
