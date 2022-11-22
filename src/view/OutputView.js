const MissionUtils = require("@woowacourse/mission-utils");

const OutputView = {
  print(message) {
    MissionUtils.Console.print(message);
  },

  printMap(nowBridge) {
    const [upBridge, downBridge] = nowBridge;
    MissionUtils.Console.print(
      `
 [ ${upBridge.join(" | ")} ]
 [ ${downBridge.join(" | ")} ]`
    );
  },

  printResult(nowBridge, isSuccess, playCount) {
    this.print("\n최종 게임 결과");
    this.printMap(nowBridge);
    this.print("\n게임 성공 여부: " + isSuccess);
    this.print("\n총 시도한 횟수: " + playCount);
  },
};

module.exports = OutputView;
