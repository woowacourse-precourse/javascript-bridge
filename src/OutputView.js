/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 */
const MissionUtils = require("@woowacourse/mission-utils");
const OutputView = {
  /**
   * 현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */

  printstart() {
    MissionUtils.Console.print("다리 건너기 게임을 시작합니다.\n");
  },
  printMap(input, index) {
    this.printFirst();
    this.printLast();
  },
  First() {
    string = "[\n[";
    return string;
  },
  Last() {
    string = "]\n]";
    return string;
  },
  correctU() {
    string = "0\n";
    return string;
  },
  wrongU() {
    string = "0\n";
    return string;
  },
  corretD() {
    string = "\n0";
    return string;
  },
  printBetween() {},
  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printResult() {
    MissionUtils.Console.print("게임 끝");
  },
};

module.exports = OutputView;
