const { ERROR } = require('../utiles/Constant');

class MovingCheck {
  validate(size) {
    if (size.match(/[^UD]/g) !== null) {
      throw new Error(ERROR.UPDOWN_WORD);
    };
  };
};

module.exports = MovingCheck;
