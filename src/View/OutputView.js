const MissionUtils = require("@woowacourse/mission-utils");
const { MESSAGE, UNIT } = require("../Constants");

/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 */
const OutputView = {
  printMsg(msg) {
    MissionUtils.Console.print(msg);
  },
  /**
   * 현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printMap(upperBridge, lowerBridge) {
    this.printMsg(UNIT.START + upperBridge.join(UNIT.DIVISION) + UNIT.END);
    this.printMsg(UNIT.START + lowerBridge.join(UNIT.DIVISION) + UNIT.END);
  },

  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printResult(isSuccess, attemptsCount) {
    this.printMsg(`${MESSAGE.SUCCESS_OR_FAIL}${isSuccess}`);
    this.printMsg(`${MESSAGE.TOTAL_ATTEMPTS_COUNT}${attemptsCount}`);

    MissionUtils.Console.close();
  },
};

module.exports = OutputView;
