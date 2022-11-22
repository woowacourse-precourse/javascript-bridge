const { ERROR } = require('../Constants');

const Validation = {
  checkBridgeSize(size) {
    if (/[^\d]+/g.test(size)) 
      throw new Error(ERROR.NOT_NUMBER);
    if (size < 3 || size > 20) 
      throw new Error(ERROR.NOT_THREE_TO_TWENTY);
  },

  checkMovingValue(direction) {
    if (direction === 'u' || direction === 'd') 
      throw new Error(ERROR.NOT_UPPERCASE)
    if (/[^UD]/g.test(direction) || direction.length !== 1) 
      throw new Error(ERROR.NOT_U_OR_D);
  },

  checkRestartOrDone(command) {
    if (command === 'r' || command === 'q') {
      throw new Error(ERROR.NOT_UPPERCASE);
    }
    if (/[^RQ]/g.test(command) || command.length !== 1) 
      throw new Error(ERROR.NOT_R_OR_Q);
  }
};

module.exports = Validation;
