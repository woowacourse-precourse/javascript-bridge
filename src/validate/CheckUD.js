/* eslint-disable class-methods-use-this */
const { ERROR } = require('../util/Constant');

class CheckUD {
  validate(ud) {
    this.checkUorD(ud);
    this.checkOneCharacter(ud);
  }

  checkUorD(ud) {
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

module.exports = CheckUD;
