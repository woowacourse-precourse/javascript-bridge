const { ERROR } = require('../util/Constant');
const OutputView = require('../view/OutputView');

class CheckInputUd {
  validate(inputUpDown) {
    try {
      this.checkError(inputUpDown);
      return true;
    } catch (error) {
      OutputView.printError(error);
      return false;
    }
  }

  checkError(inputUpDown) {
    this.checkUpDown(inputUpDown);
    this.checkOneCharacter(inputUpDown);
  }

  checkUpDown(inputUpDown) {
    if (!String(inputUpDown).match(/[UD]/g)) {
      throw new Error(ERROR.UPDOWN_WRONG);
    }
  }

  checkOneCharacter(inputUpDown) {
    if (inputUpDown.length > 1) {
      throw new Error(ERROR.UPDOWN_WRONG);
    }
  }
}

module.exports = CheckInputUd;
