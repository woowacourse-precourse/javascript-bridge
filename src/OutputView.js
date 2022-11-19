const MissionUtils = require("@woowacourse/mission-utils");
const { BRIDGE_START, FAIL_GAME, GAME_COUNT } = require('./constant/outputMessage');
const { MOVE_SPACE } = require('./constant/inputMessage');

/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 */
const OutputView = {
  /**
   * 현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printMap() {
    MissionUtils.Console.print();
  },

  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printResult() {
    MissionUtils.Console.print();
    MissionUtils.Console.close();
  },

  printStart() {
    MissionUtils.Console.print(BRIDGE_START);
  },

  printFailResult(count) {
    MissionUtils.Console.print(FAIL_GAME);
    MissionUtils.Console.print(GAME_COUNT(count));
    MissionUtils.Console.close();
  },
};

module.exports = OutputView;
