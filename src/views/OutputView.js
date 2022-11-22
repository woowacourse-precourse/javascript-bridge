const { Console } = require("@woowacourse/mission-utils");

/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 */
const OutputView = {
  SEPERATOR: " | ",
  SUCCESS: "성공",
  FAILURE: "실패",

  MESSAGE: {
    RESULT: "최종 게임 결과",
    SUCCESS_OR_FAIL: "게임 성공 여부",
    TOTAL_ATTEMPT: "총 시도한 횟수",
  },

  printMap(bridgeMaps) {
    bridgeMaps.forEach((bridgeMap) => {
      Console.print(`[ ${bridgeMap.join(this.SEPERATOR)} ]`);
    });
  },

  printResult(isBridgeCrossed, attemptCount, bridgeMaps) {
    Console.print(this.MESSAGE.RESULT);
    this.printMap(bridgeMaps);
    Console.print(`${this.MESSAGE.SUCCESS_OR_FAIL}: ${isBridgeCrossed ? this.SUCCESS : this.FAILURE}`);
    Console.print(`${this.MESSAGE.TOTAL_ATTEMPT}: ${attemptCount}`);
  },
};

module.exports = OutputView;
