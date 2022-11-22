const { RULES } = require('../constants/index.js');
/**
 * 다리 건너기 게임의 결과를 저장하는 객체
 */

class StepResult {
  /** @type {string} #upperBridge  위쪽 다리의 게임 결과를 저장하는 문자열 변수 */
  /** @type {string} #lowerBridge  아래쪽 다리의 게임 결과를 저장하는 문자열 변수 */
  #upperBridge;

  #lowerBridge;

  constructor() {
    this.#upperBridge = '';
    this.#lowerBridge = '';
  }

  /**
   * 정답이 아닌 다리를 밟았을 경우 호출되는 메소드
   * @param {string} move 사용자가 선택한 위치 (U 또는 D)
   */
  wrongStepRecord(move) {
    switch (move) {
      case RULES.UP:
        this.insert(RULES.NO_PASS, RULES.SPACE);
        break;
      case RULES.DOWN:
        this.insert(RULES.SPACE, RULES.NO_PASS);
        break;
    }
  }

  /**
   * 정답인 다리를 밟았을 경우 호출되는 메소드
   * @param {string} move 사용자가 선택한 위치 (U 또는 D)
   */
  correctStepRecord(move) {
    switch (move) {
      case RULES.UP:
        this.insert(RULES.PASS, RULES.SPACE);
        break;
      case RULES.DOWN:
        this.insert(RULES.SPACE, RULES.PASS);
        break;
    }
  }

  /**
   * 한턴의 결과를 저장하는 메소드
   * @param {string} upperBridgeResult
   * @param {string} lowerBridgeResult
   */
  insert(upperBridgeResult, lowerBridgeResult) {
    this.#upperBridge += upperBridgeResult;
    this.#lowerBridge += lowerBridgeResult;
  }

  /**
   * 사용자가 재시도를 원할 경우 저장된 결과를 리셋하는 메소드
   */
  retry() {
    this.#upperBridge = '';
    this.#lowerBridge = '';
  }

  get upperBridge() {
    return this.#upperBridge;
  }

  get lowerBridge() {
    return this.#lowerBridge;
  }
}

module.exports = StepResult;
