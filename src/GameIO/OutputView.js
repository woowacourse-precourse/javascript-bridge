const MissionUtils = require("@woowacourse/mission-utils");
/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 * 제공된 OutputView 객체를 활용해 구현해야 한다.
 * OutputView의 파일 경로는 변경할 수 있다.
 * OutputView의 메서드의 이름은 변경할 수 없고, 인자는 필요에 따라 추가하거나 변경할 수 있다.
 * 값 출력을 위해 필요한 메서드를 추가할 수 있다.
 */
const OutputView = {
  /**
   * 현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printMap(bridgeStatus, jumpHistory) {
    this.printMapLine("U", bridgeStatus, jumpHistory);
    this.printMapLine("D", bridgeStatus, jumpHistory);
  },

  printMapLine(direction, bridgeStatus, jumpHistory) {
    MissionUtils.Console.print("[ ");
    for (let index = 0; index < bridgeLength; index++) {
      if (direction === bridgeLength[index]) {
        const PRINT_PART = this.printMapPart(index, bridgeStatus, jumpHistory);
        MissionUtils.Console.print(PRINT_PART, " ");
      }
      if (index < bridgeStatus.length - 1) {
        MissionUtils.Console.print("| ");
      }
    }
    MissionUtils.Console.print("]\n");
  },

  printMapPart(index, bridgeStatus, jumpHistory) {
    if (index < jumpHistory.bridgeLength) {
      if (bridgeStatus[index] === jumpHistory[index]) {
        return "O";
      }
      if (bridgeStatus[index] !== jumpHistory[index]) {
        return "X";
      }
    }
    return " ";
  },

  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printResult() {},

  printBeginAnnouncement() {
    MissionUtils.Console.print("다리 건너기 게임을 시작합니다.\n");
  },
};

module.exports = OutputView;
