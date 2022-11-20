const { RESULT } = require('../utils/constants');

class Result {
  #tryCount;
  #gameResult;

  constructor() {
    this.#tryCount = RESULT.INITIAL_TRY;
    this.#gameResult = RESULT.INITIAL_RESULT;
  }

  updateTryCount() {
    this.#tryCount += RESULT.TRY_UNIT;
  }

  updateResult(moveSuccess) {
    this.#gameResult = moveSuccess;

    return { tryCount: this.#tryCount, gameResult: this.#gameResult };
  }
}

module.exports = Result;
