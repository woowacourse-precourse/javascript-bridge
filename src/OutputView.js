/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 */
const MissionUtils = require("@woowacourse/mission-utils");
const { BridgeInfo } = require("./BridgeInfo");
const OPENMAP = "[";
const CLOSEMAP = "]";
const CORRECT = " O ";
const WRONG = "   ";
const A = "[ O ]";
const B = "[   ]";
const C = "[ X ]";

const OutputView = {
  printGameStart() {
    MissionUtils.Console.print("다리 건너기 게임을 시작합니다.");
  },
  /**
   * 현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printMap(moveLocation) {
    let map = [];
    map = this.makeMap(moveLocation);
    MissionUtils.Console.print(map[0]);
    MissionUtils.Console.print(map[1]);
    BridgeInfo.count++;
  },

  makeMap(moveLocation) {
    const output = new Array(2).fill(0);
    if (moveLocation === BridgeInfo.bridge[0]) {
      BridgeInfo.state = true;
      moveLocation === "U"
        ? ((output[0] = A), (output[1] = B))
        : ((output[1] = A), (output[0] = B));

      return output;
    } else {
      BridgeInfo.state = false;
      moveLocation === "U"
        ? ((output[0] = C), (output[1] = B))
        : ((output[1] = C), (output[0] = B));

      return output;
    }
  },

  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printResult() {
    MissionUtils.Console.print("최종 게임 결과\n");
    BridgeInfo.state
      ? MissionUtils.Console.print("게임 성공 여부: 성공")
      : MissionUtils.Console.print("게임 성공 여부: 실패");
    MissionUtils.Console.print(`총 시도한 횟수: ${BridgeInfo.try}`);
  },
};

module.exports = OutputView;
