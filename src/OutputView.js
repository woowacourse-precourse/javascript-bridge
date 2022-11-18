const MissionUtils = require("@woowacourse/mission-utils");
const messageObject = {
  RESULT_GAME: "최종 게임 결과",
  SUCCESS_FAIL: "게임 성공 여부:",
  SUM_TRY: "총 시도한 횟수",
};
/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 */
const OutputView = {
  /**
   * 현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printMap(bridgeArr) {
    MissionUtils.Console.print(
      `[ ${bridgeArr[0][0]} | ${bridgeArr[0][1]} | ${bridgeArr[0][2]} ]`
    );
    MissionUtils.Console.print(
      `[ ${bridgeArr[1][0]} | ${bridgeArr[1][1]} | ${bridgeArr[1][2]} ]`
    );
    MissionUtils.Console.close();
  },

  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printResult(bridgeArr, tryGame) {
    MissionUtils.Console.print(messageObject.RESULT_GAME);
    this.printMap(bridgeArr);

    if (tryGame) "게임 성공 여부: 성공";
  },
};

module.exports = OutputView;
