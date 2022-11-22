const { Console } = require("@woowacourse/mission-utils");

const errorHandler = (errorMessage, callback) => {
  Console.print(errorMessage);

  callback();
};

module.exports = errorHandler;
