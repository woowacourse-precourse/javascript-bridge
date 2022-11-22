const MissionUtils = require("@woowacourse/mission-utils");
/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 */
let UP = [];
let DOWN = [];

const OutputView = {
  /**
   * 현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printMap(input, flag) {
    this.mergeArray(input, flag);
    this.printByString();
  },

  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printResult(result, COUNT) {
    MissionUtils.Console.print("최종 게임 결과\n");
    this.printByString();

    MissionUtils.Console.print(`게임 성공 여부: ${result}`);
    MissionUtils.Console.print(`총 시도한 횟수: ${COUNT}`)
    this.initArray();
  },

  printByString() {
    let upperCase = String(UP.join(' | '));
    let downCase = String(DOWN.join(' | '));
    MissionUtils.Console.print(`[ ${upperCase} ]\n[ ${downCase} ]\n`);
  },

  mergeArray(input, flag) {
    let ITEM = this.judgeCase(flag);

    if (input == "U") {
      UP = [...UP, ITEM];
      DOWN = [...DOWN, " "];
    }
    else if (input == "D") {
      UP = [...UP, " "];
      DOWN = [...DOWN, ITEM];
    }
  },

  judgeCase(flag) {
    let ITEM = "";
    switch (flag) {
      case true:
        ITEM = "O";
        break;
      case false:
        ITEM = "X";
        break;
    }
    return ITEM;
  },

  initArray() {
    UP = [];
    DOWN = [];
  }
};

module.exports = OutputView;
