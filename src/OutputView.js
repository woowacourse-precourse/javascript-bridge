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
  printMap(location, bridge) {
    let ubridge = this.uBridge(location, location.length);
    let dbridge = this.dBridge(location, location.length);
    ubridge += this.lastMoveU(location, bridge);
    dbridge += this.lastMoveD(location, bridge);
    ubridge += "]";
    dbridge += "]\n";
    MissionUtils.Console.print(ubridge);
    MissionUtils.Console.print(dbridge);
  },

  /**
   * 위쪽 다리의 출력 문구를 작성하는 메서드
   */
  uBridge(location, length) {
    let ubridge = "[";
    for (let i = 0; i < (length - 1); i++) {
      if (location[i] === "U") ubridge += " O ";
      if (location[i] !== "U") ubridge += "   ";
      ubridge += "|";
    }
    return ubridge;
  },

  /**
   * 아래쪽 다리의 출력 문구를 작성하는 메서드
   */
  dBridge(location, length) {
    let dbridge = "[";
    for (let i = 0; i < (length - 1); i++) {
      if (location[i] === "D") dbridge += " O ";
      if (location[i] !== "D") dbridge += "   ";
      dbridge += "|";
    }
    return dbridge;
  },

  /**
   * 마지막으로 입력받은 값의 결과를 위쪽 다리의 결과에 합산하는 메서드
   */
  lastMoveU(location, bridge) {
    if (location[location.length - 1] === "U") {
      if (bridge === "U") return " O ";
      if (bridge === "D") return " X ";
    }
    return "   ";
  },

  /**
   * 마지막으로 입력받은 값의 결과를 아래쪽 다리의 결과에 합산하는 메서드
   */
  lastMoveD(location, bridge) {
    if (location[location.length - 1] === "D") {
      if (bridge === "D") return " O ";
      if (bridge === "U") return " X ";
    }
    return "   ";
  },
  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printResult(location, bridge, result) {
    MissionUtils.Console.print("최종 게임 결과");
    this.printMap(location, bridge);
    MissionUtils.Console.print(`게임 성공 여부: ${result[0]}`);
    MissionUtils.Console.print(`총 시도한 횟수: ${result[1]}`);
    MissionUtils.Console.close();
  },

  /**
   * 게임 시작 문구를 출력한다.
   */
  printGameStart() {
    MissionUtils.Console.print("다리 건너기 게임을 시작합니다.\n");
  },
};

module.exports = OutputView;
