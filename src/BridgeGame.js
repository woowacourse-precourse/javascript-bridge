const { GameState } = require('./constants/Constant.js');

/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  #bridge;
  #movingLog;
  #tryCount;

  constructor(bridge) {
    this.#bridge = bridge;
    this.#movingLog = [];
    this.#tryCount = 1;
  }

  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move(direction) {
    this.#movingLog.push(direction);
  }

  getGameState() {
    if (this.#movingLog[this.#movingLog.length - 1] !== this.#bridge[this.#movingLog.length - 1]) {
      return GameState.GAME_OVER;
    }
    if (this.#movingLog.length < this.#bridge.length) {
      return GameState.PLAYING;
    }

    return GameState.VICTORY;
  }

  getMovingLog() {
    return this.#movingLog;
  }

  getTryCount() {
    return this.#tryCount;
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {
    this.#tryCount += 1;
    this.#movingLog = [];
  }
}

module.exports = BridgeGame;
