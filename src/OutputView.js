const { Console } = require("@woowacourse/mission-utils");

/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 */
const OutputView = {
  /**
   * 현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printMap(userBridge) {
    const [userBridgeTop, userBridgeBottom] = userBridge;

    Console.print("[ " + userBridgeTop.join(" | ") + " ]");
    Console.print("[ " + userBridgeBottom.join(" | ") + " ]");
  },

  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printResult(bridgeGame) {
    if (!bridgeGame.hasNext && bridgeGame.finish) {
      OutputView.printMessege("최종 게임 결과");
      OutputView.printMap(bridgeGame.userBridge);
      OutputView.printMessege(`게임 성공 여부: 성공`);
      OutputView.printMessege(`총 시도한 횟수: ${bridgeGame.retrycount}`);
      Console.close();
    }
  },

  printResultFalse(bridgeGame) {
    OutputView.printMessege("최종 게임 결과");
    OutputView.printMap(bridgeGame.userBridge);
    OutputView.printMessege("게임 성공 여부: 실패");
    OutputView.printMessege(`총 시도한 횟수: ${bridgeGame.retrycount - 1}`);
    Console.close();
  },

  printMessege(messege) {
    Console.print(messege);
  },

  Close() {
    Console.close();
  }
};

module.exports = OutputView;
