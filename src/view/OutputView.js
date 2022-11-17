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
  
  finalSuccessFailure(gameLog, failorSuccess){
    this.printResult(gameLog[0], gameLog[1], failorSuccess);
    MissionUtils.Console.close();
  },
  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */

  printResult(up_list, down_list, failorSuccess){
    MissionUtils.Console.print(CONSOLELINE.FIN_RESULT_LOG);
    MissionUtils.Console.print(RESULTLINE.LOG(up_list));
    MissionUtils.Console.print(RESULTLINE.LOG(down_list));
    MissionUtils.Console.print(failorSuccess);
    MissionUtils.Console.print(RESULTLINE.COUNT(bridgeGame.restartcnt))
  },
};

module.exports = OutputView;