const { ERROR_MESSAGE } = require('./Constants');
const { Console } = require('@woowacourse/mission-utils');

const Validation = {
  isInputNumber(input) {
    if (Number.isNaN(parseInt(input))) throw new Error(ERROR_MESSAGE.IS_NOT_NUMBER);
  },
};

module.exports = Validation;
