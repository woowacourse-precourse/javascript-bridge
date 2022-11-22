const { Console } = require("@woowacourse/mission-utils");
const { MESSAGE, RESULT, RESULT_MAP } = require("../constants/constants");

const OutputView = {
  printMap(map) {
    const { first, separator, last } = RESULT_MAP;
    for (let direction of map.keys()) {
      Console.print(`${first}${map.get(direction).join(separator)}${last}`);
    }
    this.printNewLine();
  },

  printResult(result, success) {
    Console.print(MESSAGE.printResultTitle);
    this.printMap(result.map);
    Console.print(`${MESSAGE.printResult}${success ? RESULT.success : RESULT.fail}`);
    Console.print(`${MESSAGE.printRetry}${result.attempts}`);
    Console.close();
  },

  printIntialMessage() {
    Console.print(MESSAGE.printInitial);
  },

  printErrorMessage(errorMessage) {
    Console.print(errorMessage);
  },

  printNewLine() {
    Console.print('');
  }
};

module.exports = OutputView;
