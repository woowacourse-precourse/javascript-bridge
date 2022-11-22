const { Console } = require('@woowacourse/mission-utils');

const Exception = {
  isThrow(validatorMethod, inputData) {
    try {
      validatorMethod(inputData);
      return false;
    } catch (error) {
      Console.print(error);
      return true;
    }
  },

  throw(message) {
    throw new Error(message);
  },
};

module.exports = Exception;
