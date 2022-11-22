const MissionUtils = require("@woowacourse/mission-utils");
/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 */
const OutputView = {
  gameIntro() {
    MissionUtils.Console.print("다리 건너기 게임을 시작합니다.");
  },
  /**
   * 현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printMap(choices, bridge) {
    let resultUp = ["[ ", " ]"];
    let resultDown = ["[ ", " ]"];

    if (choices[0] === "U" && bridge[0] === choices[0]) {
      resultUp.splice(1, 0, "O");
      resultDown.splice(1, 0, " ");
    } else if (choices[0] === "D" && bridge[0] === choices[0]) {
      resultUp.splice(1, 0, " ");
      resultDown.splice(1, 0, "O");
    } else if (choices[0] === "U" && bridge[0] !== choices[0]) {
      resultUp.splice(1, 0, "X");
      resultDown.splice(1, 0, " ");
    } else if (choices[0] === "D" && bridge[0] !== choices[0]) {
      resultUp.splice(1, 0, " ");
      resultDown.splice(1, 0, "X");
    }

    for (let i = 1; i < choices.length; i++) {
      if (choices[i] === "U" && bridge[i] === choices[i]) {
        resultUp.splice(1 + i, 0, " | O");
        resultDown.splice(1 + i, 0, " |  ");
      } else if (choices[i] === "D" && bridge[i] === choices[i]) {
        resultUp.splice(1 + i, 0, " |  ");
        resultDown.splice(1 + i, 0, " | O");
      } else if (choices[i] === "U" && bridge[i] !== choices[i]) {
        resultUp.splice(1 + i, 0, " | X");
        resultDown.splice(1 + i, 0, " |  ");
      } else if (choices[i] === "D" && bridge[i] !== choices[i]) {
        resultUp.splice(1 + i, 0, " |  ");
        resultDown.splice(1 + i, 0, " | X");
      }
    }
    MissionUtils.Console.print(resultUp.join(""));
    MissionUtils.Console.print(resultDown.join(""));
  },

  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printResult(choices, bridge, retry) {
    MissionUtils.Console.print("최종게임결과\n");
    this.printMap(choices, bridge);
    MissionUtils.Console.print(
      `\n게임 성공 여부: ${choices.length === bridge.length ? 성공 : 실패}`
    );
    MissionUtils.Console.print(`\n총 시도한 횟수: ${retry}`);
  },
};

module.exports = OutputView;
