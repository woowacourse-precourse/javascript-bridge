const { RULES } = require('../constants/index.js');
/**
 * 다리 건너기 게임의 결과를 저장하는 객체
 */

class StepResult {
  #upperBridge;

  #lowerBridge;

  constructor() {
    this.#upperBridge = '';
    this.#lowerBridge = '';
  }

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

  insert(upperBridgeResult, lowerBridgeResult) {
    this.#upperBridge += upperBridgeResult;
    this.#lowerBridge += lowerBridgeResult;
  }

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
