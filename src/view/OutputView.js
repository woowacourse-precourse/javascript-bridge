const bridgeGame = require("../model/BridgeGame");
const MissionUtils = require('@woowacourse/mission-utils');
const { RESULTLINE, CONSOLELINE } = require("../utils/Constants");
/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 */
const OutputView = {
  /**
   * 현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printMap(answer, upOrdown) {
    const gameProgress = bridgeGame.move(answer, upOrdown);
    MissionUtils.Console.print(RESULTLINE.LOG(gameProgress[0]));
    MissionUtils.Console.print(RESULTLINE.LOG(gameProgress[1]));
    return gameProgress;
  },
  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */

  printResult(gameLog, failorSuccess, quitcheck){
    MissionUtils.Console.print(CONSOLELINE.FIN_RESULT_LOG);
    MissionUtils.Console.print(RESULTLINE.LOG(gameLog[0]));
    MissionUtils.Console.print(RESULTLINE.LOG(gameLog[1]));
    MissionUtils.Console.print(failorSuccess);
    quitcheck ? MissionUtils.Console.print(RESULTLINE.COUNT(bridgeGame.restartcnt-1)) : MissionUtils.Console.print(RESULTLINE.COUNT(bridgeGame.restartcnt))
    MissionUtils.Console.close();
  },
};

module.exports = OutputView;