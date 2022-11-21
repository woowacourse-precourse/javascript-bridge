const BridgeMaker = require('../BridgeMaker');
const { generateRandomNumber } = require('../utils/bridgeHandler');
const { BRIDGE_VALUE } = require('../utils/constants');

/**
 * 다리 건너기 게임을 관리하는 클래스
 */

class BridgeGame {
  #myBridge;
  #gameProgress = BRIDGE_VALUE.DEFAULT_GAME_PROGRESS;
  #round = BRIDGE_VALUE.DEFAULT_ROUND;
  #alive = BRIDGE_VALUE.DEFAULT_ALIVE_VALUE;
  #playCount = BRIDGE_VALUE.DEFAULT_COUNT;
  #gameResult = BRIDGE_VALUE.RESULT_WIN;

  createBridge(size) {
    this.#playCount += BRIDGE_VALUE.COUNT_UNIT;
    this.#myBridge = BridgeMaker.makeBridge(size, generateRandomNumber);
    console.log(this.#myBridge);
  }

  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */

  move(select) {
    this.#alive = this.checkAlive(select);
    this.#gameProgress.push({ select, alive: this.#alive });
    this.#round += BRIDGE_VALUE.ROUND_UNIT;
  }

  checkGameEnd() {
    return this.#myBridge.length === this.#round;
  }

  checkAlive(select) {
    return select === this.#myBridge[this.#round];
  }

  getAlive() {
    return this.#alive;
  }

  getGameProgress() {
    return this.#gameProgress;
  }

  getPlayCount() {
    return this.#playCount;
  }

  getGameResult() {
    return this.#gameResult;
  }
  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {
    this.#gameProgress = BRIDGE_VALUE.DEFAULT_GAME_PROGRESS;
    this.#round = BRIDGE_VALUE.DEFAULT_ROUND;
    this.#alive = BRIDGE_VALUE.DEFAULT_ALIVE_VALUE;
    this.#playCount += BRIDGE_VALUE.COUNT_UNIT;
  }

  defeat() {
    this.#gameResult = BRIDGE_VALUE.RESULT_WIN;
  }
}

module.exports = BridgeGame;
