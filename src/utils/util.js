const Console = require('@woowacourse/mission-utils');

const consoleCloseAndThrow = (errorMessage) => {
  Console.close();
  throw new Error(errorMessage);
};

module.exports = {
  consoleCloseAndThrow,
};
