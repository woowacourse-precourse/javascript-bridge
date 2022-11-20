/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 */
const MissionUtils = require("@woowacourse/mission-utils");
const OutputViewMessages = require("./Messages");

const OutputView = {
  startSentence() {
    MissionUtils.Console.print(OutputViewMessages.startSentence);
  },
  lengthBridgeSentence() {
    MissionUtils.Console.print(OutputViewMessages.lengthBridgeSentence);
  },
  pickMoveSentence() {
    MissionUtils.Console.print(OutputViewMessages.pickMoveSentence);
  },
  retrySentence() {
    MissionUtils.Console.print(OutputViewMessages.retrySentence);
  },
  /**
   * 현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printMap(bridgeResult) {
    MissionUtils.Console.print(OutputViewMessages.printMapFirst(bridgeResult));
    MissionUtils.Console.print(OutputViewMessages.printMapSecond(bridgeResult));
  },

  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printResult(bridgeResult, count, resultMessage) {
    MissionUtils.Console.print(OutputViewMessages.printResultEndSentence);
    MissionUtils.Console.print(OutputViewMessages.printMapFirst(bridgeResult));
    MissionUtils.Console.print(OutputViewMessages.printMapSecond(bridgeResult));
    MissionUtils.Console.print(
      OutputViewMessages.printResultCheckSuccess(resultMessage)
    );
    MissionUtils.Console.print(OutputViewMessages.printResultCount(count));
  },
};

module.exports = OutputView;
