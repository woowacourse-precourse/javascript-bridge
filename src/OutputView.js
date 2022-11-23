const MissionUtils = require("@woowacourse/mission-utils");
const { BRIDGE_START, GAME_RESULT, TOTAL_ATTEMPT, RESULT_MESSAGE } = require('./constant/outputMessage');

/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 */
const OutputView = {
  /**
   * 현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printMap(bridgeArray) {
    MissionUtils.Console.print(`[ ${bridgeArray[0].join(' | ')} ]`);
    MissionUtils.Console.print(`[ ${bridgeArray[1].join(' | ')} ]`);
  },

  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printResult(message, count, bridgeArray) {
    MissionUtils.Console.print(RESULT_MESSAGE);
    this.printMap(bridgeArray);
    MissionUtils.Console.print(GAME_RESULT(message));
    MissionUtils.Console.print(TOTAL_ATTEMPT(count));
    MissionUtils.Console.close();
  },

  /**
   * 게임 시작을 위한 메세지를 출력한다.
   */
  printStartMessage() {
    MissionUtils.Console.print(BRIDGE_START);
  }
};

module.exports = OutputView;
