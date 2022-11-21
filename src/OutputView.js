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
};

module.exports = OutputView;
