const { Console } = require('@woowacourse/mission-utils');
const Exception = {
  ERROR_PREFIX: '[ERROR]',
  throwError(message) {
    throw new Error(message);
  },
  printError(message) {
    Console.print(`${this.ERROR_PREFIX} ${message}`);
  },
  handleError(execute, stack = 1) {
    try {
      return execute();
    } catch (e) {
      this.printError(e.message);
      if (stack < 10) {
        return this.handleError(execute, stack + 1);
      }
    }
  },
};

module.exports = Exception;
