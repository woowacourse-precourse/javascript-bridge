const { Console } = require('@woowacourse/mission-utils');
const { BRIDGE, MESSAGE, MAP } = require('./constant/Bridge');

const OutputView = {
  printMap(map) {
    const upper = MAP.START + map[BRIDGE.UPPER].join(MAP.DELIMITER) + MAP.END;
    const lower = MAP.START + map[BRIDGE.LOWER].join(MAP.DELIMITER) + MAP.END;
    Console.print(upper);
    Console.print(lower);
  },

  printResult(map, gameResult, tryCount) {
    Console.print(MESSAGE.END);
    this.printMap(map);
    Console.print(MESSAGE.GAME_RESULT + gameResult);
    Console.print(MESSAGE.TRY + tryCount);
  }
};

module.exports = OutputView;
