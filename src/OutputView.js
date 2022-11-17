const MissionUtils = require("@woowacourse/mission-utils");
/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 */
const OutputView = {
  /**
   * 현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printMap(moving, string) {
    let upstairs = moving.map((direction, index) => {
      if (index == moving.length - 1 && direction == "U" && string == true) {
        return " O ";
      } else if (
        index == moving.length - 1 &&
        direction == "U" &&
        string == false
      ) {
        return " X ";
      } else if (direction == "U") return " O ";
      return "   ";
    });
    let downstairs = moving.map((direction, index) => {
      if (index == moving.length - 1 && direction == "D" && string == true) {
        return " O ";
      } else if (
        index == moving.length - 1 &&
        direction == "D" &&
        string == false
      ) {
        return " X ";
      } else if (direction == "D") return " O ";
      return "   ";
    });

    MissionUtils.Console.print("[" + upstairs.join("|") + "]");
    MissionUtils.Console.print("[" + downstairs.join("|") + "]" + "\n");
  },

  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printResult(moving, totalTry, success) {
    MissionUtils.Console.print("최종 게임 결과");
    this.printMap(moving, success);

    MissionUtils.Console.print(
      "게임 성공 여부: " + (success ? "성공" : "실패")
    );
    MissionUtils.Console.print("총 시도한 횟수: " + totalTry);
  },
};

module.exports = OutputView;
