const { Console } = require('@woowacourse/mission-utils');
const { MESSAGE } = require('./Constants');

const OutputView = {
  printStartMessage() {
    Console.print(MESSAGE.start);
  },

  printMap({ upperRow, lowerRow }) {
    const upperRowString = this.mapListToString(upperRow);
    const lowerRowString = this.mapListToString(lowerRow);
    Console.print(upperRowString);
    Console.print(lowerRowString);
  },

  mapListToString(mapList) {
    let mapString = mapList.reduce((map, mark) => `${map} ${mark} |`, '[');
    mapString = `${mapString.slice(0, -1)}]`;
    return mapString;
  },

  printResult(bridgeMap, { crossed }, numberOfAttempts) {
    Console.print(MESSAGE.result);
    this.printMap(bridgeMap);
    Console.print('');
    Console.print(MESSAGE.success(crossed));
    Console.print(MESSAGE.attempts(numberOfAttempts));
    Console.close();
  },
};

module.exports = OutputView;
