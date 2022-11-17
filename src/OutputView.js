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
  reverse(direction) {
    return direction === "U" ? "D" : "U";
  },

  printMap(bridgeMap, location, correct) {
    const map = { U: "[", D: "[" };
    for (let i = 0; i < location; i++) {
      map[bridgeMap[i]] += " O |";
      map[this.reverse(bridgeMap[i])] += "   |";
    }
    map[bridgeMap[location]] += correct ? " O ]" : "   ]";
    map[this.reverse(bridgeMap[location])] += correct ? "   ]" : " X ]";
    MissionUtils.Console.print(map["U"] + "\n" + map["D"]);
  },

  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printResult(bridgeMap, location, correct, tryCount) {
    MissionUtils.Console.print("최종 게임 결과");
    this.printMap(bridgeMap, location, correct);
    MissionUtils.Console.print(
      "게임 성공 여부: " + (correct ? "성공" : "실패")
    );
    MissionUtils.Console.print("총 시도한 횟수: " + tryCount);
  },
};

module.exports = OutputView;
