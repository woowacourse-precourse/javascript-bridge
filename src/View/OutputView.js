const MissionUtils = require("@woowacourse/mission-utils");
const { OUTPUT, RESULT, MAP } = require("../Utils/constants/MessageConstants");

const OutputView = {
  printSpace() {
    MissionUtils.Console.print(OUTPUT.SPACE);
  },

  printStart() {
    MissionUtils.Console.print(OUTPUT.START);
  },
    
  printMap(map) {
    map.forEach((map) => {
      MissionUtils.Console.print(MAP.PRINT_MAP(map));
    })
    this.printSpace();
  },

  printResult(gameResult, map) {
    [gameOver, tryCount] = gameResult;
    gameOver === false ? checkForSuccess = OUTPUT.SUCCESS : checkForSuccess = OUTPUT.FAIL;

    MissionUtils.Console.print(OUTPUT.RESULT_TEXT);
    this.printMap(map);
    MissionUtils.Console.print(RESULT.SUCCESS_OR_FAIL(checkForSuccess));
    MissionUtils.Console.print(RESULT.TRY_COUNT(tryCount));    
    MissionUtils.Console.close();
  },
};

module.exports = OutputView;
