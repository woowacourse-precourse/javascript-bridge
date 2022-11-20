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
    nowMap.forEach((bridge) => {
      Console.print(`[ ${bridge.join(" | ")} ]`);
    });
    Console.print(`\n${TEXT.IS_SUCCESS}: ${RESULT[isSuccess]}`);
    Console.print(`${TEXT.TOTAL_ATTEMPT_CNT}: ${attemptCnt}`);
    Console.close();
  },
};

module.exports = OutputView;
