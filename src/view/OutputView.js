const { Console } = require("@woowacourse/mission-utils");
const { Map, Result } = require("./ViewMakers");
const { SETTING, MESSAGE, RESULT_ELEMENT } = require("../constants/Constants");

const OutputView = {

  printStart() {
    Console.print(MESSAGE.GAME_START);
  },

  printMap(bridge, moved){
    const upLine = Map.makeLine(bridge, moved, SETTING.UP);
    const downLine = Map.makeLine(bridge, moved, SETTING.DOWN);
    Console.print(Map.makeMap(upLine, downLine));
  },

  printResult(bridge, moved, attempts) {
    Console.print(RESULT_ELEMENT.GAMERESULT);
    this.printMap(bridge, moved);
    Console.print(RESULT_ELEMENT.IS_SUCCESS + `${Result.makeStringResult(bridge, moved)}`);
    Console.print(RESULT_ELEMENT.GAME_ATTEMPTS + `${attempts}`);

    Console.close();
  },

};

module.exports = OutputView;
