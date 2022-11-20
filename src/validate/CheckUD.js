/* eslint-disable class-methods-use-this */
const { ERROR } = require('../util/Constant');

class CheckUD {
  validate(size) {
    if (size.match(/[^UD]/g) !== null) {
      throw new Error(ERROR.UPDOWN_WRONG);
    }
  }
}

module.exports = CheckUD;
