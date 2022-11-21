const MissionUtils = require("@woowacourse/mission-utils");
const Console = MissionUtils.Console;
const {GAME_MESSAGE, RESULT,DIRECTION,BRIDGE, JOINER} = require("./util/Constant");

const OutputView = {

  // upper: [],

  // downer: [],

  // addValue(upperValue, downerValue) {
  //   this.upper.push(upperValue);
  //   this.downer.push(downerValue);
  // },


  // pushResult(dir, success) {
  //   if (success) {
  //     if (dir === DIRECTION.UP) this.addValue(BRIDGE.CAN_MOVE, BRIDGE.BLANK);
  //     if (dir === DIRECTION.DOWN) this.addValue(BRIDGE.BLANK, BRIDGE.CAN_MOVE);
  //   }
  //   else {
  //     if (dir === DIRECTION.UP) this.addValue(BRIDGE.CANNOT_MOVE, BRIDGE.BLANK);
  //     else this.addValue(BRIDGE.BLANK, BRIDGE.CANNOT_MOVE);
  //   }
  // },


  printMap(bridgeGame) {
    const {upperString, downerString} = bridgeGame.gameResult();
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
