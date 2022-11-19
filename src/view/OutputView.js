const MissionUtils = require('@woowacourse/mission-utils')
const { MESSAGE } = require('../Messages');
/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 */
const OutputView = {
  /**
  * 게임 시작 문구를 출력한다.
  */
  printStart() {
    MissionUtils.Console.print(MESSAGE.START);
  },

  /**
   * 현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력한다.
   * @param {BridgeGame} bridgeGame 현재 실행 중인 다리 게임
   */
  printMap(bridgeGame) {
    let [upHistory, downHistory] = bridgeGame.getUpDownHistory();
    MissionUtils.Console.print(`[ ${upHistory.join(" | ")} ]`);
    MissionUtils.Console.print(`[ ${downHistory.join(" | ")} ]\n`);
  },

  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * @param {BridgeGame} bridgeGame 현재 실행 중인 다리 게임
   */
  printResult(bridgeGame) {
    MissionUtils.Console.print(MESSAGE.GAME_RESULT);
    this.printMap(bridgeGame);

    MissionUtils.Console.print(`${MESSAGE.GAME_SUCCESS_STATE}${bridgeGame.getIsSuccess()}`);
    MissionUtils.Console.print(`${MESSAGE.GAME_TRY_COUNT}${bridgeGame.getTryCount()}`);

    bridgeGame.exit();
  },

  /**
   * 에러 메세지를 출력한다.
   * @param {string} message 에러 메세지
   */
  printError(message) {
    MissionUtils.Console.print(message);
  }
};

module.exports = OutputView;
