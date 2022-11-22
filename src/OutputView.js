const MissionUtils = require('@woowacourse/mission-utils');
const BridgeGame = require('./BridgeGame');
const { RESULT_MESSAGE } = require('./utils/constants');

/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 */
const OutputView = {
  bridgeGame: new BridgeGame(),
  /**
   * 현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printMap(bridgeValue, moveDirection) {
    const bridgeGameProgress = this.bridgeGame.move(bridgeValue, moveDirection);

    bridgeGameProgress.forEach((progress) => {
      MissionUtils.Console.print(RESULT_MESSAGE.bridgeLog(progress));
    });

    return bridgeGameProgress;
  },

  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printResult(bridgeGameLog, resultMessage) {
    MissionUtils.Console.print(RESULT_MESSAGE.finalResult);
    bridgeGameLog.forEach((progress) => {
      MissionUtils.Console.print(RESULT_MESSAGE.bridgeLog(progress));
    });
    MissionUtils.Console.print(resultMessage);
    MissionUtils.Console.print(RESULT_MESSAGE.gameCount(this.bridgeGame.gameCount));
    MissionUtils.Console.close();
  },
};

module.exports = OutputView;
