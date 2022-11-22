const MissionUtils = require("@woowacourse/mission-utils");
/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 */
const OutputView = {
  printStart() {
    MissionUtils.Console.print("다리 건너기 게임을 시작합니다.\n");
  },
  /**
   * 현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printMap(bridge, location) {
    this.printUp(bridge, location);
    this.printDown(bridge, location);
  },

  printUp(bridge, location) {
    let upBridge = [];
    for (let index = 0; index <= location; index++) {
      if (bridge[index] == 1) upBridge.push(" O ");
      else if (bridge[index] == 2) upBridge.push(" X ");
      else upBridge.push("   ");
    }
    upBridge = "[" + upBridge.join("|") + "]";
    MissionUtils.Console.print(`${upBridge}\n`);
  },

  printDown(bridge, location) {
    let downBridge = [];
    for (let index = 0; index <= location; index++) {
      if (bridge[index] == 3) downBridge.push(" X ");
      else if (bridge[index] == 4) downBridge.push(" O ");
      else downBridge.push("   ");
    }
    downBridge = "[" + downBridge.join("|") + "]";
    MissionUtils.Console.print(`${downBridge}\n`);
  },
  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printResult(bridge, location, gameCnt) {
    MissionUtils.Console.print("최종 게임 결과\n");
    this.printSuccess(bridge, location);
    MissionUtils.Console.print(
      `게임 성공 여부: ${this.printSuccess(bridge, location)}\n`
    );
    MissionUtils.Console.print(`총 시도한 횟수: ${gameCnt}\n`);
  },
  printSuccess(bridge, location) {
    if (bridge[location] == 2 || bridge[location] == 3) return "실패";
    return "성공";
  },
};

module.exports = OutputView;
