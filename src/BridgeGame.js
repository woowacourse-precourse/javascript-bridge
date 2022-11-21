const BridgeGameStatus = require('./BridgeGameStatus');

/**
 * @typedef Flag
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
   * @returns {Flag}
   */
  getMovedResult(gameStatus) {
    /** @type {Flag} */
    const defaultFlag = { flag: 'CONTINUE', status: gameStatus };
    const bridge = this.#BridgeGameStatus.getBridge();

    if (bridge[gameStatus.curMoveCount - 1] !== gameStatus.movedRoutes[gameStatus.curMoveCount - 1])
      return { ...defaultFlag, flag: 'GAME_OVER' };

    if (JSON.stringify(bridge) === JSON.stringify(gameStatus.movedRoutes))
      return { ...defaultFlag, flag: 'GAME_END' };

    return defaultFlag;
  }

  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   *
   * @param {string} direction
   * @returns {Flag}
   */
  move(direction) {
    const currentStatus = this.#BridgeGameStatus.getGameStatus();
    const movedStatus = {
      accMoveCount: currentStatus.accMoveCount + 1,
      curMoveCount: currentStatus.curMoveCount + 1,
      movedRoutes: [...currentStatus.movedRoutes, direction],
    };

    return this.getMovedResult(this.#BridgeGameStatus.setGameStatus(movedStatus));
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {}
}

module.exports = BridgeGame;
