const MissionUtils = require("@woowacourse/mission-utils");
const { MESSAGES_RESULT, VALUES } = require("../utils/constants");
/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 */
const OutputView = {
  /**
   * 현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printMap(upperBridge, lowerBridge) {
    const assembleBridge = (bridge) => "[ " + bridge.join(" | ") + " ]";
    MissionUtils.Console.print(assembleBridge(upperBridge));
    MissionUtils.Console.print(assembleBridge(lowerBridge));
    MissionUtils.Console.print("");
  },

  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printResult(totalTrial, gameResult, bridge) {
    const assembleBridge = (bridge) => "[ " + bridge.join(" | ") + " ]";
    MissionUtils.Console.print(MESSAGES_RESULT.TITLE);
    MissionUtils.Console.print(assembleBridge(bridge[VALUES.UPPER_BRIDGE_INDEX]));
    MissionUtils.Console.print(assembleBridge(bridge[VALUES.LOWER_BRIDGE_INDEX]));
    MissionUtils.Console.print("");
    MissionUtils.Console.print(MESSAGES_RESULT.WIN_OR_NOT + gameResult);
    MissionUtils.Console.print(MESSAGES_RESULT.TOTAL_TRIALS + totalTrial);
  },
};

module.exports = OutputView;
