const MissionUtils = require("@woowacourse/mission-utils");
const { MESSAGE, REQUIREMENT } = require('./constant/Constant');
/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 */
const OutputView = {
  printInit() {
    MissionUtils.Console.print(MESSAGE.INIT);
  },
  /**
   * 현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printMap(bridgeResult) {
    bridgeResult.forEach((ele) => {
      MissionUtils.Console.print(ele);
    });
  },

  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printResult(tryCount, bridgeResult, result) {
    MissionUtils.Console.print(MESSAGE.RESULT);
    this.printMap(bridgeResult);
    MissionUtils.Console.print(`\n${MESSAGE.SUCCESSORNOT}${result}`);
    MissionUtils.Console.print(`${MESSAGE.TOTALATTEMPTS}${tryCount}`);
  },

};

module.exports = OutputView;
