const { Console } = require('@woowacourse/mission-utils');
const { BRIDGE, MESSAGE } = require('./constants');

const OutputView = {
  map: '',

  printStart() {
    Console.print(MESSAGE.GAME_START);
  },

  printMap(map) {
    const shapedMap = map.map((side) => this.shapeBridge(side)).join('\n');
    this.map = shapedMap;
    Console.print(shapedMap);
  },

  shapeBridge(side) {
    return BRIDGE.START + side.join(BRIDGE.SPLIT) + BRIDGE.END;
  },

  printResult(gameResult, attemptsNum) {
    Console.print(MESSAGE.GAME_RESULT);
    Console.print(this.map);
    Console.print(MESSAGE.SUCCESS_OR_FAIL(gameResult));
    Console.print(MESSAGE.ATTEMPTS_NUM(attemptsNum));
  },
};

module.exports = OutputView;
