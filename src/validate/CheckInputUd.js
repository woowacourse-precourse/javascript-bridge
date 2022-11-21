/* eslint-disable class-methods-use-this */
const { ERROR } = require('../util/Constant');

class CheckInputUd {
  validate(ud) {
    this.checkUd(ud);
    this.checkOneCharacter(ud);
  }

  checkUd(ud) {
    if (ud.match(/[^UD]/g) !== null) {
      throw new Error(ERROR.UPDOWN_WRONG);
    }
  }

  checkOneCharacter(ud) {
    if (ud.length > 1) {
      throw new Error(ERROR.UPDOWN_WRONG);
    }
  }
}

module.exports = CheckInputUd;
