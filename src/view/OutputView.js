const { Console } = require("@woowacourse/mission-utils");
const { INFO_MESSAGE } = require("../utils/constants");

const OutputView = {
  printStart() {
    Console.print(INFO_MESSAGE.START);
  },

  printError(error) {
    Console.print(error);
  },

  printMap(bridge) {
    Console.print(`[${bridge.up.join(", ").replaceAll(", ", "|")}]`);
    Console.print(`[${bridge.down.join(", ").replaceAll(", ", "|")}]\n`);
  },

  printResult(tried, success) {
    success
      ? Console.print(INFO_MESSAGE.SUCCESS)
      : Console.print(INFO_MESSAGE.FAIL);
    Console.print(INFO_MESSAGE.TRY(tried));
    Console.close();
  },

  resultMessage() {
    Console.print(INFO_MESSAGE.RESULT);
  },
};

module.exports = OutputView;
