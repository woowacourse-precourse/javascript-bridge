const MissionUtils = require("@woowacourse/mission-utils");
/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 */
const OutputView = {
  gameStart() {
    MissionUtils.Console.print("다리 건너기 게임을 시작합니다.");
  },
  /**
   * 현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printMap(printResult) {
    let [resultU, resultD] = printResult;
    MissionUtils.Console.print(
      `[ ${resultU.join(" | ")} ]\n[ ${resultD.join(" | ")} ]\n`
    );
  },

  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printResult(successCheck, tryCount, printTry) {
    const [resultU, resultD] = printTry;
    MissionUtils.Console.print("최종 게임 결과");
    MissionUtils.Console.print(
      `[ ${resultU.join(" | ")} ]\n[ ${resultD.join(" | ")} ]\n`
    );
    MissionUtils.Console.print(`게임 성공 여부: ${successCheck}`);
    MissionUtils.Console.print(`총 시도한 횟수: ${tryCount}`);
    MissionUtils.Console.close();
  },
};

module.exports = OutputView;
