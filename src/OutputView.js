const MissionUtils = require("@woowacourse/mission-utils");
const { MESSAGES } = require('./constants');
const GameUtils = require('./Utils/GameUtils');

const OutputView = {
  printMap(course) {
    const result = GameUtils.courseToForm(course);
    result.forEach(row => {
      MissionUtils.Console.print(row);
    });
  },

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
