const { ERROR_MSG } = require('./Constant');
const { prefix, isNotANumber, isOutOfRange, isNotUpOrDown, isNotRetryOrQuit } =
  ERROR_MSG;

const Validator = {
  validateNumber(number) {
    if (/\D+/g.test(number)) throw new Error(prefix + isNotANumber);
  },
  validateNumberRange() {},
  validateMove() {},
  validateRetry() {},
};

module.exports = Validator;
