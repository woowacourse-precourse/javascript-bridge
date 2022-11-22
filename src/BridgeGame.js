const BridgeGameStatus = require('./BridgeGameStatus');
const Flag = require('./constants/Flag');

/**
 * @typedef Result
 * @property {'GAME_END' | 'GAME_OVER' | 'CONTINUE'} flag
 * @property {import('./BridgeGameStatus').GameStatus} status
 */

/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  /** @type {BridgeGameStatus} */
  #BridgeGameStatus;

  /**
   * 게임 시작 초기 설정 메서드
   *
   * @param {number} size
   */
  init(size) {
    this.#BridgeGameStatus = new BridgeGameStatus(size);
  }

  /**
   * 게임 진행 상황을 반환하는 함수
   *
   * @param {import('./BridgeGameStatus').GameStatus} gameStatus
   * @returns {Result}
   */
  #getMovedResult(gameStatus) {
    const defaultResult = { flag: Flag.CONTINUE, status: gameStatus };
    const bridge = this.#BridgeGameStatus.getBridge();

    if (bridge[gameStatus.moveCount - 1] !== gameStatus.movedRoutes[gameStatus.moveCount - 1])
      return { ...defaultResult, flag: Flag.OVER };

    if (JSON.stringify(bridge) === JSON.stringify(gameStatus.movedRoutes))
      return { ...defaultResult, flag: Flag.END };

    return defaultResult;
  }

  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   *
   * @param {string} direction
   * @returns {Result}
   */
  move(direction) {
    const currentStatus = this.#BridgeGameStatus.getGameStatus();
    const movedStatus = {
      ...currentStatus,
      moveCount: currentStatus.moveCount + 1,
      movedRoutes: [...currentStatus.movedRoutes, direction],
    };

    return this.#getMovedResult(this.#BridgeGameStatus.setGameStatus(movedStatus));
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   */
  retry() {
    const currentStatus = this.#BridgeGameStatus.getGameStatus();
    const resetedStatus = {
      playCount: currentStatus.playCount + 1,
      moveCount: 0,
      movedRoutes: [],
    };

    this.#BridgeGameStatus.setGameStatus(resetedStatus);
  }

  quit() {
    return this.#getMovedResult(this.#BridgeGameStatus.getGameStatus());
  }
}

module.exports = BridgeGame;
