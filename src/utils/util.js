const Console = require('@woowacourse/mission-utils');

const consoleCloseAndThrow = (errorMessage) => {
  Console.close();
  throw new Error(errorMessage);
};

const binaryToUAndD = (binary) => {
  if (binary == 1) return (binary = 'U');
  return (binary = 'D');
};

module.exports = {
  consoleCloseAndThrow,
  binaryToUAndD,
};
