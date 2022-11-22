const { Console } = require("@woowacourse/mission-utils");
const { OUTPUT_VIEW_CONSTANT } = require("../utils/constants");

const OutputView = {
  printStartMent() {
    Console.print(OUTPUT_VIEW_CONSTANT.START_MENT);
  },

  printMap({ topBridge, bottomBridge }) {
    Console.print(OUTPUT_VIEW_CONSTANT.PRINT_TOPBRIDGE(topBridge));
    Console.print(OUTPUT_VIEW_CONSTANT.PRINT_BOTTOMBRIDGE(bottomBridge));
  },

  printResult({ topBridge, bottomBridge }, retryCount, successOrFailure) {
    Console.print(OUTPUT_VIEW_CONSTANT.GAME_RESULT_MENT);
    this.printMap({ topBridge, bottomBridge });
    Console.print(OUTPUT_VIEW_CONSTANT.SUCCESS_OR_FAIL_MENT(successOrFailure));
    Console.print(OUTPUT_VIEW_CONSTANT.TOTAL_TRY_COUNT_MENT(retryCount));
  },
};

module.exports = OutputView;
