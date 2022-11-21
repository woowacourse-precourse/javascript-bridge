const { Console } = require('@woowacourse/mission-utils');
const Exception = {
  ERROR_PREFIX: '[ERROR]',
  throwError(message) {
    throw new Error(message);
  },
  printError(message) {
    Console.print(`${this.ERROR_PREFIX} ${message}`);
  },
};

module.exports = Exception;
