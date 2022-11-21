/* eslint-disable class-methods-use-this */
const { ERROR } = require('../util/Constant');

class CheckInputRq {
  validate(inputRq) {
    this.checkRq(inputRq);
    this.checkOneCharactor(inputRq);
  }

  checkRq(inputRq) {
    if (inputRq.match(/[^RQ]/g) !== null) {
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
