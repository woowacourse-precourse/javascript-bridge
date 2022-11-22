const { Console } = require("@woowacourse/mission-utils");

const { RESULT } = require("../utils/constants");
const { MANAGER, TEXT } = require("../utils/gameMessage");

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
    Console.print(`${TEXT.FINAL_RESULT}`);
    this.printMap(nowMap);
    Console.print(`${TEXT.IS_SUCCESS}: ${RESULT[isSuccess]}`);
    Console.print(`${TEXT.TOTAL_ATTEMPT_CNT}: ${attemptCnt}`);

    Console.close();
  },

  printErrorMessage(errorText) {
    Console.print(errorText);
  },
};

module.exports = OutputView;
