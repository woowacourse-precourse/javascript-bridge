const { Console } = require("@woowacourse/mission-utils");

const { RESULT, MANAGER, TEXT } = require("../utils/constants");

const OutputView = {
  printStart() {
    Console.print(`${MANAGER.NOTICE_START}`);
  },

  printMap(nowMap) {
    nowMap.forEach((bridge) => {
      Console.print(`[ ${bridge.join(" | ")} ]`);
    });
  },

  printResult(nowMap, attemptCnt, isSuccess) {
    Console.print(`\n${TEXT.FINAL_RESULT}`);
    this.printMap(nowMap);
    Console.print(`\n${TEXT.IS_SUCCESS}: ${RESULT[isSuccess]}`);
    Console.print(`${TEXT.TOTAL_ATTEMPT_CNT}: ${attemptCnt}`);
    Console.close();
  },

  printErrorMessage(errorText) {
    Console.print(errorText);
  },
};

module.exports = OutputView;
