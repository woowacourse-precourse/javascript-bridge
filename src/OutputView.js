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
  printMap(result) {
    let printUp = "[";
    result.forEach((nth, i) => {
      if (nth[0] === "U") printUp += ` ${nth[1]} `;
      else printUp += "   ";
      if (i === result.length - 1) printUp += "]";
      else printUp += "|";
    });
    MissionUtils.Console.print(printUp);
    this.printMapDown(result);
  },

  printMapDown(result) {
    let printDown = "[";
    result.forEach((nth, i) => {
      if (nth[0] === "D") printDown += ` ${nth[1]} `;
      else printDown += "   ";
      if (i === result.length - 1) printDown += "]";
      else printDown += "|";
    });
    MissionUtils.Console.print(printDown);
  },
  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printResult(result, countGame, successOrNot) {
    MissionUtils.Console.print("\n최종 게임 결과");
    this.printMap(result);
    MissionUtils.Console.print(`\n게임 성공 여부: ${successOrNot}`);
    MissionUtils.Console.print(`총 시도한 횟수: ${countGame}`);
    MissionUtils.Console.close();
  },

  printGameStart() {
    MissionUtils.Console.print("다리 건너기 게임을 시작합니다.\n");
  },
};

module.exports = OutputView;
