const MissionUtils = require("@woowacourse/mission-utils");
const Console = MissionUtils.Console;

/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 */

const OutputView = {
  printStart() {
    MissionUtils.Console.print("다리 건너기 게임을 시작합니다.\n");
    this.printDownBridge = [];
    this.printUpBridge = [];
  },

  /**
   * 현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */

  printMap(up, down) {
    this.printUpBridge.push(up);
    this.printDownBridge.push(down);

    this.upString = "";
    this.downString = "";

    this.upString += "[ ";
    for (let index = 0; index < this.printUpBridge.length; index++) {
      this.upString += this.printUpBridge[index];
      if (index < this.printUpBridge.length - 1) this.upString += " | ";
    }
    this.upString += " ]";

    this.downString += "[ ";
    for (let index = 0; index < this.printDownBridge.length; index++) {
      this.downString += this.printDownBridge[index];
      if (index < this.printDownBridge.length - 1) this.downString += " | ";
    }
    this.downString += " ]";

    Console.print(this.upString);
    Console.print(this.downString);
  },

  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printResult(message) {
    Console.print("최종 게임 결과 \n");
    Console.print(this.upString);
    Console.print(this.downString);
    Console.print("게임 성공 여부: " + message);
  },
};

module.exports = OutputView;
