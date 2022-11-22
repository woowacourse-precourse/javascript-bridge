const { Console } = require("@woowacourse/mission-utils");
const { PRINT_MESSAGE } = require("./utils/Constants");

const OutputView = {

  printStartMessage() {
    Console.print(PRINT_MESSAGE.start);
  },

  printMap(upRow, downRow) {
    Console.print(upRow.join(' '));
    Console.print(downRow.join(' '));
    Console.print(PRINT_MESSAGE.enter);
  },

  printResult(upRow, downRow) {
    Console.print(PRINT_MESSAGE.finish);
    this.printMap(upRow, downRow);
  },

  printInfo(count, result) {
    Console.print(PRINT_MESSAGE.result(result));
    Console.print(PRINT_MESSAGE.count(count));
    Console.close();
  },
};

module.exports = OutputView;
