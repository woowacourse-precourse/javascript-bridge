const { GAME_RULE } = require('../constants');
const { MovingCommand } = require('./command');

/**
 * 다리 배열 타입 정의
 * @typedef {Array.<boolean | null>} BridgeArray
 */

/**
 * 다리 지도 상태 타입 정의
 * @typedef {Object} BridgeMapState
 * @property {BridgeArray} U
 * @property {BridgeArray} D
 */

/**
 * 다리 클래스
 * @class
 */
class BridgeMap {
  static init = [];

  /**
   * 게임 상태 타입
   * @type {BridgeMapState}
   */
  #state = {
    [GAME_RULE.UPSIDE]: BridgeMap.init,
    [GAME_RULE.DOWNSIDE]: BridgeMap.init,
  };

  /**
   * 다리 지도 가져올 때 사용하는 메서드
   * @returns {BridgeMapState}
   */
  getMap() {
    return this.#state;
  }

  /**
   * 다리에 칸 추가할 때 사용하는 메서드
   * @param {MovingCommand} movingCommand
   * @param {'U' | 'D'} current
   */
  add(movingCommand, current) {
    const isCrossed = movingCommand.isCrossed(current);

    if (movingCommand.isUpside()) {
      this.#addUpside(isCrossed);
      return;
    }

    if (movingCommand.isDownside()) {
      this.#addDownside(isCrossed);
    }
  }

  /**
   * 위쪽 다리에 칸 추가할 때 사용하는 private 메서드
   * @param {boolean} isCrossed
   */
  #addUpside(isCrossed) {
    this.#state[GAME_RULE.UPSIDE] = [...this.#state[GAME_RULE.UPSIDE], isCrossed];
    this.#state[GAME_RULE.DOWNSIDE] = [...this.#state[GAME_RULE.DOWNSIDE], null];
  }

  /**
   * 위쪽 다리에 칸 추가할 때 사용하는 private 메서드
   * @param {boolean} isCrossed
   */
  #addDownside(isCrossed) {
    this.#state[GAME_RULE.UPSIDE] = [...this.#state[GAME_RULE.UPSIDE], null];
    this.#state[GAME_RULE.DOWNSIDE] = [...this.#state[GAME_RULE.DOWNSIDE], isCrossed];
  }

  /**
   * 지도 초기화할 때 사용하는 메서드
   */
  reset() {
    this.#state[GAME_RULE.UPSIDE] = BridgeMap.init;
    this.#state[GAME_RULE.DOWNSIDE] = BridgeMap.init;
  }
}

module.exports = BridgeMap;
