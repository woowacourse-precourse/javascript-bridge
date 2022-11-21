const { Console } = require("@woowacourse/mission-utils");
const {
  SEPARATOR,
  PRINT_FINISH_MSG,
  SUCCESS_OR_NOT,
  SUCCESS,
  FAIL,
  COUNT_TRY,
} = require("../Messages/constants");

const OutputView = {
  printMap(upsideBridge, downsideBridge) {
    Console.print(
      `\[ ${upsideBridge.join(SEPARATOR)} \]\n\[ ${downsideBridge.join(
        SEPARATOR
      )} \]\n`
    );
  },

  printResult(isClear, gameCount, bridge) {
    Console.print(
      `${PRINT_FINISH_MSG}\n\[ ${bridge[0].join(
        SEPARATOR
      )} \]\n\[ ${bridge[1].join(SEPARATOR)} \]\n`
    );
    this.printFinishMsg(isClear, gameCount);
  },

  printFinishMsg(isClear, gameCount) {
    Console.print(
      SUCCESS_OR_NOT + `${isClear ? SUCCESS : FAIL}` + COUNT_TRY + gameCount
    );
  },
};

module.exports = OutputView;
