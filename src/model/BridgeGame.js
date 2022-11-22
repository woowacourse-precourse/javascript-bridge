const { RULES } = require('../constants/index.js');

/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  #retryCount;

  #turn;

  constructor() {
    this.#retryCount = 1;
    this.#turn = 0;
  }

  move(thisTurnAnswer, move, stepResult) {
    if (this.#turn > 0) stepResult.insert(RULES.SEPERATION, RULES.SEPERATION);
    this.#turn += 1;

    if (this.isThisTurnCorrect(thisTurnAnswer, move)) return stepResult.correctStepRecord(move);

    return stepResult.wrongStepRecord(move);
  }

  isThisTurnCorrect(thisTurnAnswer, move) {
    return thisTurnAnswer === move;
  }

  retry() {
    this.#turn = 0;
    this.#retryCount += 1;
  }

  get retryCount() {
    return this.#retryCount;
  }

  get turn() {
    return this.#turn;
  }
}

module.exports = BridgeGame;
