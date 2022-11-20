const { ERR_NOT_NUM } = require('./constant/Error');

const InputValidation = {
  validateBridgeSize(input) {
    const input_int = parseInt(input);
    if (input_int % 1 !== 0 || isNaN(input)) {
      throw Error(ERR_NOT_NUM);
    }
    if (3 > input_int || input_int > 20) {
      throw Error(ERR_NOT_NUM);
    }
    return input_int;
  },
};

module.exports = InputValidation;
