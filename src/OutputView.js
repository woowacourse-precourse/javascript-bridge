const { Console } = require("@woowacourse/mission-utils");

/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 */
const OutputView = {
  printMap(bridgeMap) {
    const [upBridge, downBridge] = bridgeMap;

    Console.print(`[ ${upBridge.join(" | ")} ]`);
    Console.print(`[ ${downBridge.join(" | ")} ]`);
  },

  printResult(isBridgeCrossed, attemptCount, bridgeMap) {
    Console.print("최종 게임 결과");
    this.printMap(bridgeMap);
    Console.print(`게임 성공 여부: ${isBridgeCrossed ? "성공" : "실패"}`);
    Console.print(`총 시도한 횟수: ${attemptCount}`);
  },
};

module.exports = OutputView;
