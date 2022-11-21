const { ERROR_MSG } = require('../common/Constant');
const { prefix, isNotANumber, isOutOfRange, isNotUpOrDown, isNotRetryOrQuit } =
  ERROR_MSG;

const Validator = {
  validateNumber(number) {
    if (/\D+/g.test(number)) throw new Error(prefix + isNotANumber);
  },

  validateNumberRange(number) {
    if (number < 3 || 20 < number) throw new Error(prefix + isOutOfRange);
  },

  validateMove(dir) {
    if (dir.length !== 1 || /[^UD]/.test(dir))
      throw new Error(prefix + isNotUpOrDown);
  },

  validateRetry(msg) {
    if (msg.length !== 1 || /[^RQ]/.test(msg))
      throw new Error(prefix + isNotRetryOrQuit);
  },
};

module.exports = Validator;
