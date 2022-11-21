const MissionUtils = require("@woowacourse/mission-utils");
/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 */
const OutputView = {
  print(message) {
    MissionUtils.Console.print(message);
  },

  printMap(nowBridge) {
    const [upBridge, downBridge] = nowBridge;
    MissionUtils.Console.print(
      "[ " +
        upBridge.join(" | ") +
        " ]" +
        "\n" +
        "[ " +
        downBridge.join(" | ") +
        " ]"
    );
  },

  printResult(nowBridge, isSuccess, playCount) {
    MissionUtils.Console.print(
      "최종 게임 결과\n" +
        this.printMap(nowBridge) +
        "\n게임 성공 여부: " +
        isSuccess +
        "\n총 시도된 횟수: " +
        playCount
    );
  },
};

module.exports = OutputView;
