const { ERROR, GAME_STATUS } = require('./Message');

class Validate {
  static isNumber(inputData) {
    const data = Number(inputData);
    if (Number.isNaN(data)) throw new Error(ERROR.TYPE_ERROR);

    if (data < GAME_STATUS.MIN_BOUND && data > GAME_STATUS.MAX_BOUND) {
      throw new ERROR(ERROR.RANGE_ERROR);
    }

    return true;
  }
}

module.exports = Validate;
