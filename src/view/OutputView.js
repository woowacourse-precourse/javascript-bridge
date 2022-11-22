const MissionUtils = require("@woowacourse/mission-utils");
const Console = MissionUtils.Console;
const { GAME_MESSAGE, RESULT } = require("../util/Constant");

const OutputView = {

  printMap(bridgeGame) {
    const { upperString, downerString } = bridgeGame.gameResult();
    Console.print(upperString);
    Console.print(downerString);
  },


  printResult(gameCount, success, bridgeGame) {
    Console.print(GAME_MESSAGE.RESULT);
    this.printMap(bridgeGame);
    const result = success ? RESULT.SUCCESS : RESULT.FAIL;
    Console.print(`${GAME_MESSAGE.ISSUCCESS} ${result}`);
    Console.print(`${GAME_MESSAGE.TOTALCOUNT} ${gameCount}`);
    Console.close();
  },
};

module.exports = OutputView;
