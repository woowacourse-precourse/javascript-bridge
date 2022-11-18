const MissionUtils = require("@woowacourse/mission-utils");
const Console = MissionUtils.Console;
/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 */
const OutputView = {
  /**
   * 현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printMap(nowLength, bridge, moveUpDown, tf) {
    let upList = [];
    let downList = [];
    for (let move = 0; move < nowLength+1; ++move) {
      if (bridge[move] == "D") {
        upList.push(" ");
        downList.push("O");
      }
      if (bridge[move] == "U") {
        upList.push("O");
        downList.push(" ");
      }
    }
    if (!tf) {
      if (moveUpDown == "U") downList[nowLength] = "X";
      if (moveUpDown == "D") upList[nowLength] = "X";
    }
    Console.print("[ " + upList.join(" | ") + " ]");
    Console.print("[ " + downList.join(" | ") + " ]");
  },

  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printResult() {},
};

module.exports = OutputView;
