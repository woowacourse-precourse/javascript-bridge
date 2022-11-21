const MissionUtils = require('@woowacourse/mission-utils');
const OutputView = {
  gameStart() {
    MissionUtils.Console.print('게임 시작');
  },
  printMap(movingList) {
    const [upList, downList] = movingList
    MissionUtils.Console.print(`[ ${upList.join(' | ')} ]`)
    MissionUtils.Console.print(`[ ${downList.join(' | ')} ]`)
    MissionUtils.Console.print('')
  },

  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printResult(result, bridgeGame) {
    const [bridgeList, trial] = bridgeGame.viewResult()
    if(result === '성공') MissionUtils.Console.print('')
    MissionUtils.Console.print('최종 게임 결과')
    this.printMap(bridgeList)
    MissionUtils.Console.print(`게임 성공 여부: ${result}`)
    MissionUtils.Console.print(`총 시도한 횟수: ${trial}`)
    MissionUtils.Console.close()
  },
};

module.exports = OutputView;
