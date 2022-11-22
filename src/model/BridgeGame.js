const { BRIDGE, GAME_STATUS } = require('../utils/constants');
/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  #bridge;
  #position;
  #gameStatus;

  constructor(bridge) {
    this.#bridge = bridge;
    this.#position = BRIDGE.START_POSITION;
    this.#gameStatus = GAME_STATUS.PLAYING;
  }

  getGameStatus() {
    return this.#gameStatus;
  }

  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move(moving) {
    const canMove = this.#canMove(moving);

    if (canMove) {
      this.#position += BRIDGE.POSITION_UNIT;
      this.#gameStatus = this.#bridge.isEndOfBridge(this.#position) ? GAME_STATUS.WIN : GAME_STATUS.PLAYING;
    } else {
      this.#gameStatus = GAME_STATUS.FAIL;
    }

    return { moveSuccess: canMove, gameStatus: this.#gameStatus };
  }

  #canMove(moving) {
    return this.#bridge.isAccessiblePosition(this.#position, moving);
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {
    this.#position = BRIDGE.START_POSITION;
    this.#gameStatus = GAME_STATUS.PLAYING;
  }
}

module.exports = BridgeGame;
