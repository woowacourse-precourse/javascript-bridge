const bridgeGame = require("../model/BridgeGame");
const MissionUtils = require('@woowacourse/mission-utils');
const { RESULTLINE, CONSOLELINE } = require("../utils/Constants");
const inputView = require('./InputView')
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
    const returns = (bridgeGame.move(answer, upOrdown));
    const up_list = returns[0];
    const down_list = returns[1];
    const cnt = returns[2];
    MissionUtils.Console.print(RESULTLINE.LOG(up_list));
    MissionUtils.Console.print(RESULTLINE.LOG(down_list));
    if (cnt === answer.length){
      this.printResult(up_list, down_list);
    }
    return returns;
  },

  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printResult(up_list, down_list) {
    MissionUtils.Console.print(CONSOLELINE.FIN_RESULT_LOG);
    MissionUtils.Console.print(RESULTLINE.LOG(up_list));
    MissionUtils.Console.print(RESULTLINE.LOG(down_list));
  },
};

module.exports = OutputView;