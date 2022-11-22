const { ERROR, GAME_STATUS } = require('./Message');

class Validate {
  static isNumber(inputData) {
    const data = Number(inputData);
    const { NOT_NUMBER, NOT_BOUND } = ERROR;
    const { MIN_BOUND, MAX_BOUND } = GAME_STATUS;

    if (Number.isNaN(data)) throw new Error(NOT_NUMBER);
    if (data < MIN_BOUND && data > MAX_BOUND) {
      throw new ERROR(NOT_BOUND);
    }
    return true;
  }

  static isMoveInput(inputData) {
    const { UP, DOWN } = GAME_STATUS;
    const { NOT_MOVE_DATA } = ERROR;

    if (!inputData === UP || !inputData === DOWN) {
      throw new ERROR(NOT_MOVE_DATA);
    }

    return true;
  }

  static isRetryInput(inputData) {
    const { RETRY, QUIT } = GAME_STATUS;
    const { NOT_RETRY_DATA } = ERROR;

    if (!inputData === RETRY || !inputData === QUIT) {
      throw new ERROR(NOT_RETRY_DATA);
    }
  }
}

module.exports = Validate;
