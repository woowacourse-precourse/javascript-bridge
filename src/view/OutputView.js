const MissionUtils = require("@woowacourse/mission-utils");
const { OUTPUT_MESSAGE } = require("../constants/messages");
const { Console } = MissionUtils;

const OutputView = {
  printGameStart() {
    Console.print(OUTPUT_MESSAGE.START);
  },

  printMap(upString, downString) {
    Console.print(upString);
    Console.print(downString);
  },

  printError(error) {
    Console.print(error);
  },

  printResult(gameResult, result, tryCount) {
    Console.print(OUTPUT_MESSAGE.END);
    Console.print(gameResult.upString);
    Console.print(gameResult.downString);
    Console.print(OUTPUT_MESSAGE.RESULT(result));
    Console.print(OUTPUT_MESSAGE.TRYCOUNT(tryCount));
    Console.close();
  },
};

module.exports = OutputView;
