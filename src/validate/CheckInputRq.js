/* eslint-disable class-methods-use-this */
const { ERROR } = require('../util/Constant');
const OutputView = require('../view/OutputView');

class CheckInputRq {
  validate(inputRq) {
    try {
      this.checkRqAndOneCharacter(inputRq);
      return true;
    } catch (error) {
      OutputView.printError(error);
      return false;
    }
  }

  checkRqAndOneCharacter(inputRq) {
    this.checkRq(inputRq);
    this.checkOneCharactor(inputRq);
  }

  checkRq(inputRq) {
    if (!String(inputRq).match(/[RQ]/g)) {
      throw new Error(ERROR.REPLAY_WRONG);
    }
  }

  checkOneCharactor(inputRq) {
    if (inputRq.length > 1) {
      throw new Error(ERROR.REPLAY_WRONG);
    }
  }
}

module.exports = CheckInputRq;
