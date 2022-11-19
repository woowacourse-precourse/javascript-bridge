const { TYPE } = require('../constants')

class Validation {
  
  static isRightSize(size) {
    const sizeToNumber = Number(size);
    if (sizeToNumber < 3 || sizeToNumber > 20)  throw TYPE.SIZE;
    if (isNaN(sizeToNumber)) throw TYPE.SIZE;
    return true;
  }

  static isRightStep(input) {
    if ( input !== 'D' && input !== 'U')  throw TYPE.STEP;
    return true;
  }
}

module.exports = Validation;