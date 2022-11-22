const { TYPE } = require('../constants');
const InputError = require('../error')

const Validation = Object.freeze({
  SIZE(size) {
    const sizeToNumber = Number(size);
    if (sizeToNumber < 3 || sizeToNumber > 20) throw new InputError(TYPE.SIZE);
    if (Number.isNaN(sizeToNumber)) throw new InputError(TYPE.SIZE);
    return true;
  },

  STEP(input) {
    if (input !== 'D' && input !== 'U') {
      throw new InputError(TYPE.STEP);
    }
    return true;
  },

  RETRY(command) {
    if (command !== 'Q' && command !== 'R') {
      throw new InputError(TYPE.RETRY);
    }
    return true;
  },
});

module.exports = Validation;
