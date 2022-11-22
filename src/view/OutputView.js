const { Console } = require("@woowacourse/mission-utils");
const { Message, Map, Result } = require("./ViewMakers");

const OutputView = {

  printStart() {
    Console.print(Message.GAME_START);
  },

  printMap(bridge, moved){
    const upLine = Map.makeLine(bridge, moved, 'U');
    const downLine = Map.makeLine(bridge, moved, 'D');
    Console.print(Map.makeMap(upLine, downLine));
  },

  printResult(bridge, moved, attempts) {
    Console.print(Result.GAMERESULT);
    this.printMap(bridge, moved);
    Console.print(Result.IS_SUCCESS + `${Result.makeStringResult(bridge, moved)}`);
    Console.print(Result.GAME_ATTEMPTS + `${attempts}`);
    
    Console.close();
  },

};

module.exports = OutputView;
