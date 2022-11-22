const { Console } = require("@woowacourse/mission-utils");
const { Map, Result } = require("./ViewMakers");
const { GameSetting, Message, ResultElement } = require("../constants/Constants");

const OutputView = {

  printStart() {
    Console.print(Message.GAME_START);
  },

  printMap(bridge, moved){
    const upLine = Map.makeLine(bridge, moved, GameSetting.UP);
    const downLine = Map.makeLine(bridge, moved, GameSetting.DOWN);
    Console.print(Map.makeMap(upLine, downLine));
  },

  printResult(bridge, moved, attempts) {
    Console.print(ResultElement.GAMERESULT);
    this.printMap(bridge, moved);
    Console.print(ResultElement.IS_SUCCESS + `${Result.makeStringResult(bridge, moved)}`);
    Console.print(ResultElement.GAME_ATTEMPTS + `${attempts}`);

    Console.close();
  },

};

module.exports = OutputView;
