const { ERROR } = require('../utiles/Constant');
const OutputView = require('../view/OutputView');

class MovingCheck {
  validate(move) {
    try {
      this.checkWordAndRange(move);
    } catch (error) {
      OutputView.printError(error);
      return false;
    };
    
    return true;
  };

  checkWordAndRange(move) {
    this.checkWord(move);
    this.checkLength(move);
  };

  checkWord(move) {
    if (!String(move).match(/[UD]/g)) {
      throw (ERROR.upDownWord);
    };
  };

  checkLength(move) {
    if (move.length > 1) {
      throw (ERROR.upDownLength);
    };
  };
};

module.exports = MovingCheck;
