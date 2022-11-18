const MissionUtils = require("@woowacourse/mission-utils");
/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 */
const START_STR = "다리 건너기 게임을 시작합니다.\n";
const END_STR = "\n최종 게임 결과\n";
const END_IS_SUCCESS = "\n게임 성공 여부: ";
const END_CNT = "총 시도한 횟수: ";
const OutputView = {
  printStart() {
    MissionUtils.Console.print(START_STR);
  },

  closeMap(bridgeMap) {
    bridgeMap.up = bridgeMap.up.substring(0, bridgeMap.up.length - 1) + "]";
    bridgeMap.down =
      bridgeMap.down.substring(0, bridgeMap.down.length - 1) + "]";
    return bridgeMap;
  },

  printMap(bridgeMap) {
    MissionUtils.Console.print(bridgeMap.up);
    MissionUtils.Console.print(bridgeMap.down);
    return;
  },

  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printResult(isComplete, bridgeMap, tryCnt) {
    if (isComplete) {
      OutputView.printGameProgressed("성공", bridgeMap, tryCnt);
      return;
    }
    OutputView.printGameProgressed("실패", bridgeMap, tryCnt);
  },

  printGameProgressed(isCompleteStr, bridgeMap, tryCnt) {
    MissionUtils.Console.print(END_STR);
    OutputView.printMap(OutputView.closeMap(bridgeMap));
    MissionUtils.Console.print(END_IS_SUCCESS + isCompleteStr);
    MissionUtils.Console.print(END_CNT + tryCnt);
    MissionUtils.Console.close();
  },
};

module.exports = OutputView;
