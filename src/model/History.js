const { RESULT } = require('../utils/constants');

class History {
  #tryCount;
  #moveTrace;

  constructor() {
    this.#tryCount = RESULT.INITIAL_TRY;
    this.#moveTrace = [];
  }

  getHistory() {
    return { tryCount: this.#tryCount, moveTrace: this.#moveTrace };
  }

  resetHistory() {
    this.#tryCount += RESULT.TRY_UNIT;
    this.#moveTrace = [];
  }

  updateMoveTrace(moving, moveSuccess) {
    this.#moveTrace.push({ moving, moveSuccess });

    return this.#moveTrace;
  }
}

module.exports = History;
