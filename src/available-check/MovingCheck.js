const { ERROR } = require('../utiles/Constant');
const OutputView = require('../view/OutputView');

class MovingCheck {
  validate(move) {
    this.validValue = true;
    this.checkWord(move);
    this.checkRange(move);
    return this.validValue;
  };

  checkWord(move) {
    try {
      if (move.match(/[UD]/g) === null) {
        throw (ERROR.UPDOWN_WORD);
      };
    } catch(error) {
      OutputView.printError(error);
      this.validValue = false;
    };
  };

  checkRange(move) {
    try {
      // 에러 내용을 둘 다 출력할 필요는 없는 것 같아서
      if (move.length > 1 && this.validValue) {
        throw (ERROR.UPDOWN_LENGTH);
      };
    } catch(error) {
      OutputView.printError(error);
      this.validValue = false;
    };
  };
};

module.exports = MovingCheck;
