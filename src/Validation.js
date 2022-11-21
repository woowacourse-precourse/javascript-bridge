const { ERROR } = require('./Constants');

const Validation = {
  checkBridgeSize(size) {
    if (/[^\d]+/g.test(size)) throw new Error(ERROR.NOT_NUMBER);
    if (size < 3 || size > 20) throw new Error(ERROR.NOT_THREE_TO_TWENTY);
  },

  checkMovingValue(direction) {
    if (/[^UD]/g.test(direction) || direction.length !== 1) 
      throw new Error(ERROR.NOT_U_OR_D);
  }
};

module.exports = Validation;
