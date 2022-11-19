const MissionUtils = require("@woowacourse/mission-utils");
const InputView = require('./InputView');
const { FAIL_GAME, TOTAL_ATTEMPT } = require('./constant/outputMessage');
const App = require("./App");

/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move(userInput, bridge, count) {
    if (userInput !== bridge[count]) {
      this.retry(count, bridge);
    }
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry(count, bridge) {
    const userDecision = InputView.readGameCommand();
    if (userDecision === 'Q') {
      MissionUtils.Console.print(FAIL_GAME);
      MissionUtils.Console.print(TOTAL_ATTEMPT(count));
    }

    if (userDecision === 'R') {
      const app = new App();
      app.compareInputRandom(bridge.length, bridge);
    }
  }
}

module.exports = BridgeGame;
