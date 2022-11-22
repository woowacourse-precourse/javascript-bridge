const { Console } = require('@woowacourse/mission-utils');
const { command } = require('./utils/message');
const { init } = require('./utils/constant');
const { UP, DOWN } = init;

const OutputView = {
  /**
   * @param {string[]} curBridge 현재까지 건넌 다리 배열
   */
  printMap(curBridge) {
    Console.print(`[ ${curBridge[UP].join(' | ')} ]`);
    Console.print(`[ ${curBridge[DOWN].join(' | ')} ]`);
  },

  printResult(successMessage, curBridge, tryNum) {
    Console.print(command.RESULT);
    this.printMap(curBridge);
    Console.print(command.IS_SUCCESS(successMessage));
    Console.print(command.TRY_NUM(tryNum));
  },

  printStart() {
    Console.print(command.START);
  },

  printError(error) {
    Console.print(error);
  },
};

module.exports = OutputView;
