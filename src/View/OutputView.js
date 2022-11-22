const MissionUtils = require("@woowacourse/mission-utils");
const { PRINT, KEY } = require("../constants/constants");

const OutputView = {
  reverse(direction) {
    return direction === KEY.UP ? KEY.DOWN : KEY.UP;
  },

  printMap(bridgeMap, location, correct) {
    const maps = { U: "[", D: "[" };
    for (let i = 0; i < location; i++) {
      maps[bridgeMap[i]] += " O |";
      maps[OutputView.reverse(bridgeMap[i])] += "   |";
    }
    maps[bridgeMap[location]] += correct ? " O ]" : "   ]";
    maps[OutputView.reverse(bridgeMap[location])] += correct ? "   ]" : " X ]";
    MissionUtils.Console.print(maps[KEY.UP] + "\n" + maps[KEY.DOWN]);
  },

  printResult(game, location, correct) {
    MissionUtils.Console.print(PRINT.FINISH_GAME);
    OutputView.printMap(game.getBridgeMap(), location, correct);
    MissionUtils.Console.print(correct ? PRINT.SUCCESS_GAME : PRINT.FAIL_GAME);
    MissionUtils.Console.print(PRINT.TOTAL_TRY + game.getTryCount());
  },
};

module.exports = OutputView;
