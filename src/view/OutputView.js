const { Console } = require('@woowacourse/mission-utils');
const { OUTPUT_MESSAGE } = require('../constants/Messages');

const OutputView = {
  printStart() {
    Console.print(OUTPUT_MESSAGE.start);
  },
  printNewLine() {
    Console.print(OUTPUT_MESSAGE.new_line);
  },
  printError(message) {
    OutputView.printNewLine();
    Console.print(message);
  },
  printMap({ upBridge, downBridge }) {
    Console.print(upBridge);
    Console.print(downBridge);
    OutputView.printNewLine();
  },
  printResult({ bridge, result, count }) {
    Console.print(OUTPUT_MESSAGE.result);
    OutputView.printMap(bridge);
    Console.print(OUTPUT_MESSAGE.success_faliure(result));
    Console.print(OUTPUT_MESSAGE.attempts_count(count));
    Console.close();
  },
};

module.exports = OutputView;
