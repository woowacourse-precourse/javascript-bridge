const { ERROR_MESSAGE } = require('../util/Constant');
class MovingValidator {
  constructor(moving) {
    this.validate(moving);
  }

  validate(moving) {
    if (this.isNull(moving)) throw new Error(ERROR_MESSAGE.IS_EMPTY);
    if (this.isNotRightRange(moving)) throw new Error(ERROR_MESSAGE.MOVE_NOT_RIGHT_LETTER);
    return moving;
  }

  isNull(moving) {
    return moving == '';
  }

  isNotRightRange(moving) {
    const range = /[^DU]{1,}/;
    return range.test(moving);
  }
}
module.exports = MovingValidator;
