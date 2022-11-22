const { Console } = require('@woowacourse/mission-utils');
const { BRIDGE, MESSAGE } = require('./constants');
const OutputView = {
  printStart() {
    Console.print(MESSAGE.GAME_START);
  },

  printMap(map) {
    const shapedMap = map.map((side) => this.shapeBridge(side)).join('\n');
    Console.print(shapedMap);
  },

  shapeBridge(side) {
    return BRIDGE.START + side.join(BRIDGE.SPLIT) + BRIDGE.END;
  },
};

module.exports = OutputView;
