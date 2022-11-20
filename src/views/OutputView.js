const MissionUtils = require("@woowacourse/mission-utils");
const { GAME_START_STRING } = require("../utils/constant")
/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 */
const OutputView = {

  printGameStart(){
    MissionUtils.Console.print(GAME_START_STRING);
  },

  /**
   * 현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printMap(gameResult) {
    MissionUtils.Console.print(gameResult);
  },

  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printResult(gameResult) {
    MissionUtils.Console.print("최종 게임 결과\n"+gameResult+"\n게임 성공 여부:성공")
    MissionUtils.Console.close()
  },
};

module.exports = OutputView;
