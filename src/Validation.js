const { ERROR_MESSAGE } = require('./Constants');
const { Console } = require('@woowacourse/mission-utils');

const Validation = {
  isInputNumber(input) {
    if (Number.isNaN(parseInt(input))) {
      Console.print(ERROR_MESSAGE.IS_NOT_NUMBER);
      return false;
    }
    return true;
  },
};

module.exports = Validation;
