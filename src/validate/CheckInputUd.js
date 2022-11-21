/* eslint-disable class-methods-use-this */
const { ERROR } = require('../util/Constant');
const OutputView = require('../view/OutputView');

class CheckInputUd {
  validate(inputUd) {
    try {
      this.checkUdAndOneCharacter(inputUd);
      return true;
    } catch (error) {
      OutputView.printError(error);
      return false;
    }
  }

  checkUdAndOneCharacter(inputUd) {
    this.checkUd(inputUd);
    this.checkOneCharacter(inputUd);
  }

  checkUd(inputUd) {
    if (!String(inputUd).match(/[UD]/g)) {
      throw new Error(ERROR.UPDOWN_WRONG);
    }
  }

  checkOneCharacter(inputUd) {
    if (inputUd.length > 1) {
      throw new Error(ERROR.UPDOWN_WRONG);
    }
  }
}

module.exports = CheckInputUd;
