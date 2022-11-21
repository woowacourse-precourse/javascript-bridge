const { GAME_RULE } = require('../constants');
const { MovingCommand } = require('./command');

/**
 * 다리 배열 타입 정의
 * @typedef {Array.<boolean | null>} BridgeProcess
 */

/**
 * 다리 클래스
 * @class
 */
class BridgeMap {
  /**
   * 다리 지도 상태 타입
   * @type {BridgeProcess}
   */
  static #initialState = [];

  #upside = BridgeMap.#initialState;

  #downside = BridgeMap.#initialState;

  /**
   * 다리 지도 가져올 때 사용하는 메서드
   * @returns {Array.<BridgeProcess>}
   */
  getMap() {
    return [this.#upside, this.#downside];
  }

  /**
   * 다리에 칸 추가할 때 사용하는 메서드
   * @param {MovingCommand} movingCommand
   * @param {'U' | 'D'} currentBridge
   */
  add(movingCommand, currentBridge) {
    const isCrossed = movingCommand.isCrossed(currentBridge);

    this.#addUpside(movingCommand, isCrossed);
    this.#addDownside(movingCommand, isCrossed);
  }

  /**
   * 위쪽 다리에 칸 추가할 때 사용하는 private 메서드
   * @param {MovingCommand} movingCommand
   * @param {boolean} isCrossed
   */
  #addUpside(movingCommand, isCrossed) {
    if (movingCommand.isUpside()) {
      this.#upside = [...this.#upside, isCrossed];
      return;
    }
    this.#upside = [...this.#upside, null];
  }

  /**
   * 위쪽 다리에 칸 추가할 때 사용하는 private 메서드
   * @param {MovingCommand} movingCommand
   * @param {boolean} isCrossed
   */
  #addDownside(movingCommand, isCrossed) {
    if (movingCommand.isDownside()) {
      this.#downside = [...this.#downside, isCrossed];
      return;
    }
    this.#downside = [...this.#downside, null];
  }

  /**
   * 지도 초기화할 때 사용하는 메서드
   */
  reset() {
    this.#upside = BridgeMap.#initialState;
    this.#downside = BridgeMap.#initialState;
  }
}

module.exports = BridgeMap;
