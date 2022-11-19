const { TYPE } = require('../constants')

const Validation = Object.freeze({
  SIZE(size) {
    const sizeToNumber = Number(size);
    if (sizeToNumber < 3 || sizeToNumber > 20)  throw TYPE.SIZE;
    if (isNaN(sizeToNumber)) throw TYPE.SIZE;
    return true;
  },

  STEP(input) {
    if ( input !== 'D' && input !== 'U') {
      throw TYPE.STEP;
    }
    return true;
  },

  RETRY(command) {
    if ( command !== 'Q' && command !== 'R') {
      throw TYPE.RETRY;
     }
    return true;
  }
})

module.exports = Validation;