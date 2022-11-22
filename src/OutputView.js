const MissionUtils = require("@woowacourse/mission-utils");

/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 */
const OutputView = {
  upBridge: ["[", "]"],
  downBridge: ["[", "]"],
  /**
   * 현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printMap(arg, str) {
    if (arg === "U") {
      if (this.upBridge[1] !== "]") {
        this.upBridge.splice(-1, 0, "|");
        this.upBridge.splice(-1, 0, str);
        this.downBridge.splice(-1, 0, "|");
        this.downBridge.splice(-1, 0, "   ");
      } else {
        this.upBridge.splice(-1, 0, str);
        this.downBridge.splice(-1, 0, "   ");
      }
    } else {
      if (this.downBridge[1] !== "]") {
        this.downBridge.splice(-1, 0, "|");
        this.downBridge.splice(-1, 0, str);
        this.upBridge.splice(-1, 0, "|");
        this.upBridge.splice(-1, 0, "   ");
      } else {
        this.downBridge.splice(-1, 0, str);
        this.upBridge.splice(-1, 0, "   ");
      }
    }
    MissionUtils.Console.print(
      `${this.upBridge.join("")}\n${this.downBridge.join("")}\n`
    );
  },

  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printResult(count, upBridge, downBridge, boolean) {
    const strUpBridge = upBridge.join("");
    const strDownBridge = downBridge.join("");

    MissionUtils.Console.print(
      `최종 게임 결과\n${strUpBridge}\n${strDownBridge}\n\n게임 성공 여부: ${boolean}\n총 시도한 횟수: ${count}`
    );
    MissionUtils.Console.close();
  },
};

module.exports = OutputView;
