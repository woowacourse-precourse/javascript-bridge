const { BRIDGE } = require('../utils/constant');

class BridgeRecorder {
  #upBridge;
  #downBridge;

  constructor(uppers, lowers) {
    this.#upBridge = uppers;
    this.#downBridge = lowers;
  }

  /**
   * 게임 재시도 시 다리 기록을 초기화한다.
   */
  init() {
    this.#upBridge = [];
    this.#downBridge = [];
  }

  /**
   * 사용자가 이동한 칸이 위쪽이고, 첫 칸인 경우 실행한다.
   * @param {string} state 사용자가 이동한 칸과 정답을 비교한 결과
   * @returns {string[]}
   */
  addFirstUpBlock(state) {
    this.#upBridge.push(BRIDGE.FIRST_BLOCK(state));
    this.#downBridge.push(BRIDGE.NOT_CHOOSE_FIRST_BLOCK);
    return [this.#upBridge.join(''), this.#downBridge.join('')];
  }

  /**
   * 사용자가 이동한 칸이 아래쪽이고, 첫 칸인 경우 실행한다.
   * @param {string} state 사용자가 이동한 칸과 정답을 비교한 결과
   * @returns {string[]}
   */
  addFirstDownBlock(state) {
    this.#upBridge.push(BRIDGE.NOT_CHOOSE_FIRST_BLOCK);
    this.#downBridge.push(BRIDGE.FIRST_BLOCK(state));
    return [this.#upBridge.join(''), this.#downBridge.join('')];
  }

  /**
   * 사용자가 이동한 칸이 위쪽이고, 첫 칸 이후인 경우 실행한다.
   * @param {string} state 사용자가 이동한 칸과 정답을 비교한 결과
   * @returns {string[]}
   */
  addUpBlock(state) {
    this.#upBridge.push(BRIDGE.AFTER_FIRST_BLOCK(state));
    this.#downBridge.push(BRIDGE.NOT_CHOOSE_AFTER_FIRST_BLOCK);
    return [this.#upBridge.join(''), this.#downBridge.join('')];
  }

  /**
   * 사용자가 이동한 칸이 아래쪽이고, 첫 칸 이후인 경우 실행한다.
   * @param {string} state 사용자가 이동한 칸과 정답을 비교한 결과
   * @returns {string[]}
   */
  addDownBlock(state) {
    this.#upBridge.push(BRIDGE.NOT_CHOOSE_AFTER_FIRST_BLOCK);
    this.#downBridge.push(BRIDGE.AFTER_FIRST_BLOCK(state));
    return [this.#upBridge.join(''), this.#downBridge.join('')];
  }

  /**
   * 사용자가 이동한 칸의 결과를 알려준다.
   * @returns {string[]}
   */
  getResult() {
    return [this.#upBridge.join(''), this.#downBridge.join('')];
  }
}

module.exports = BridgeRecorder;
