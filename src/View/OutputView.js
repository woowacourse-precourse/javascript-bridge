const MissionUtils = require("@woowacourse/mission-utils");

const { RESULT } = require("../utils/constants");
const { MANAGER, TEXT } = require("../utils/gameMessage");

const OutputView = {
  printStart() {
    MissionUtils.Console.print(`${MANAGER.NOTICE_START}`);
  },

  printBlank() {
    MissionUtils.Console.print("");
  },

  printMap(nowMap) {
    nowMap.forEach((bridge) => {
      MissionUtils.Console.print(`[ ${bridge.join(" | ")} ]`);
    });
    this.printBlank();
  },

  printResult(nowMap, attemptCnt, isSuccess) {
    MissionUtils.Console.print(`${TEXT.FINAL_RESULT}`);
    this.printMap(nowMap);
    MissionUtils.Console.print(`${TEXT.IS_SUCCESS}: ${RESULT[isSuccess]}`);
    MissionUtils.Console.print(`${TEXT.TOTAL_ATTEMPT_CNT}: ${attemptCnt}`);

    MissionUtils.Console.close();
  },

  printErrorMessage(errorText) {
    MissionUtils.Console.print(errorText);
  },
};

module.exports = OutputView;
