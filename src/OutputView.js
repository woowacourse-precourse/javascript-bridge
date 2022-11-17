const MissionUtils = require("@woowacourse/mission-utils");
const { MESSAGES } = require('./constants');
const GameUtils = require('./Utils/GameUtils');

const OutputView = {
  printMap(course) {
    const result = GameUtils.courseToForm(course);
    result.forEach(row => {
      MissionUtils.Console.print(row);
      }
    )
  },

  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printResult(result, count, clear) { 
    MissionUtils.Console.print(MESSAGES.GAME.FINAL_GAME_RESULT);
    OutputView.printMap(result);
    MissionUtils.Console.print(`${MESSAGES.GAME.CLEAR_STATE} ${clear}`);
    MissionUtils.Console.print(`${MESSAGES.GAME.TOTAL_TRY} ${count}`);
  },

  printStart() {
    MissionUtils.Console.print(MESSAGES.GAME.START);
  },  
};

module.exports = OutputView;
