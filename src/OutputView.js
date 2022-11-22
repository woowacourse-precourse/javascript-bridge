const { Console } = require("@woowacourse/mission-utils");
const { MESSAGE } = require("./lib/constants");

const OutputView = {
  printStart() {
    Console.print(MESSAGE.PRINT_MISSION_START);
  },

  printMap(upDownArray) {
    Console.print(upDownArray[0]);
    Console.print(upDownArray[1]);
    Console.print("\n");
  },

  printResult(array) {
    Console.print(MESSAGE.OUTPUT_TEXT);
    this.printMap([array[0], array[1]]);
    Console.print(MESSAGE.OUTPUT_RESULT(array[2], array[3]));
    Console.close();
  },
};

module.exports = OutputView;
