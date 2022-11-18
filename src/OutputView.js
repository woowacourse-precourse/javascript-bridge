const MissionUtils = require("@woowacourse/mission-utils");
const { MESSAGES } = require('./constants');
const GameUtils = require('./Utils/GameUtils');

const OutputView = {
  printMap(log) {
    const result = GameUtils.logToForm(log);
    result.forEach(row => {
      MissionUtils.Console.print(row);
    });
  },

  printResult(log, count, clear) { 
    MissionUtils.Console.print(MESSAGES.GAME.FINAL_GAME_RESULT);
    OutputView.printMap(log);
    MissionUtils.Console.print(`${MESSAGES.GAME.CLEAR_STATE} ${clear}`);
    MissionUtils.Console.print(`${MESSAGES.GAME.TOTAL_TRY} ${count}`);
  },

  printStart() {
    MissionUtils.Console.print(MESSAGES.GAME.START);
  },
};

module.exports = OutputView;
