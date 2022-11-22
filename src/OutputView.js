/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 */

const MissionUtils = require("@woowacourse/mission-utils");
const BridgeGame = require("./BridgeGame");
const OutputView = {
  /**
   * 현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  UPPER: new Array(),
  LOWER: new Array(),

  printstart() {
    MissionUtils.Console.print("다리 건너기 게임을 시작합니다.\n");
  },
  printMap() {
    console.log("[ " + this.UPPER.join(" | ") + " ]");
    console.log("[ " + this.LOWER.join(" | ") + " ]");
  },

  printFirst() {
    MissionUtils.Console.print("[]");
    MissionUtils.Console.print("[]");
  },
  printRight(input, index) {
    if (input === "U") {
      this.UPPER[index] = "0";
      this.LOWER[index] = " ";
    }
    if (input == "D") {
      this.UPPER[index] = " ";
      this.LOWER[index] = "0";
    }
  },
  printWrong(input, index) {
    if (input === "U") {
      this.UPPER[index] = "X";
      this.LOWER[index] = " ";
    }
    if (input == "D") {
      this.UPPER[index] = " ";
      this.LOWER[index] = "X";
    }
  },

  reset() {
    this.UPPER = new Array();
    this.LOWER = new Array();
  },
  printBetween() {},
  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printResult(number, ifsuccess) {
    MissionUtils.Console.print("최종 게임 결과");
    this.printMap();
    this.checkSucces(ifsuccess);
    MissionUtils.Console.print(`총 시고한 횟수: ${number}`);
  },

  checkSucces(ifsuccess) {
    if (ifsuccess) return MissionUtils.Console.print("\n최종 게임 결과: 성공");
    MissionUtils.Console.print("\n최종 게임 결과: 실패");
  },
};

module.exports = OutputView;
