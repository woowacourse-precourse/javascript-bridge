const { ERROR } = require('../utiles/Constant');

class MovingCheck {
  validate(move) {
    if (move.match(/[^UD]/g) !== null) {
      throw new Error(ERROR.UPDOWN_WORD);
    };
  };

  validate(move) {
    this.checkWord(move);
    this.checkRange(move);
  };

  checkWord(move) {
    if (move.match(/[^UD]/g) !== null) {
      throw new Error(ERROR.UPDOWN_WORD);
    };
  };

  checkRange(move) {
    if (move.length > 1) {
      throw new Error(ERROR.UPDOWN_LENGTH);
    };
  };
};

module.exports = MovingCheck;
