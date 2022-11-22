const { ERROR, GAME_STATUS } = require('./Message');

class Validate {
  static isNumber(inputData) {
    const data = Number(inputData);
    if (Number.isNaN(data)) throw new Error(ERROR.NOT_NUMBER);

    if (data < GAME_STATUS.MIN_BOUND && data > GAME_STATUS.MAX_BOUND) {
      throw new ERROR(ERROR.NOT_BOUND);
    }

    return true;
  }

  static isMoveInput(inputData) {
    if (!inputData === GAME_STATUS.UP || !inputData === GAME_STATUS.DOWN) {
      throw new ERROR(ERROR.NOT_MOVE_DATA);
    }

    return true;
  }
}

module.exports = Validate;
