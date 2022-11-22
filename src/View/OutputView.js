const { Console } = require("@woowacourse/mission-utils");
const { BRIDGE_GAME, BRIDGE_GAME_RESULT, BRIDGE_FORM} = require('../Constant/Constant');

const OutputView = {

  start() {
    Console.print(BRIDGE_GAME.START) ;
  },
  
  printMap(select) {
    Console.print(`${BRIDGE_FORM.COMPLETE(select, BRIDGE_FORM.UP_POSITION)}`);
    Console.print(`${BRIDGE_FORM.COMPLETE(select, BRIDGE_FORM.DOWN_POSITION)}`);
  },

   printResult(user, option) {
    Console.print(option[BRIDGE_GAME_RESULT.ANSWER_INDEX]);
    Console.print(`${BRIDGE_FORM.COMPLETE(user, BRIDGE_FORM.UP_POSITION)}`);
    Console.print(`${BRIDGE_FORM.COMPLETE(user, BRIDGE_FORM.DOWN_POSITION)}\n`);
    Console.print(option[BRIDGE_GAME_RESULT.ANSWER_KIT_INDEX]);
    Console.print(option[BRIDGE_GAME_RESULT.TOTAL_COUNT_INDEX]);
    return Console.close()
   },
};

module.exports = OutputView;