const { Console } = require("@woowacourse/mission-utils");

const Error = {
  isThrow(checkMethod, inputData) {
    try {
      checkMethod(inputData);
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

module.exports = Error;
