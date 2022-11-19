const { Console } = require('@woowacourse/mission-utils');

const Exception = {
  isThrow(validatorMethod, inputData) {
    try {
      validatorMethod(inputData);
      return true;
    } catch (error) {
      return false;
    }
  },

  throw(message) {
    Console.print(message);
    throw new Error(message);
  },
};

module.exports = Exception;
