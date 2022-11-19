const { Console } = require("@woowacourse/mission-utils");
const { RESULT, MANAGER } = require("../utils/constants");

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
    Console.print(`\n최종 게임 결과`);
    Console.print(`[ ${nowMap[0].join(" | ")} ]`);
    Console.print(`[ ${nowMap[1].join(" | ")} ]`);
    Console.print(`\n게임 성공 여부: ${RESULT[isSuccess]}`);
    Console.print(`총 시도한 횟수: ${attemptCnt}`);
    Console.close();
  },
};

module.exports = OutputView;
