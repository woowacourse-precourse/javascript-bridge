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
    const separator = ' | ';
    return `[ ${mapList.join(separator)} ]`;
  },

  printResult(bridgeMap, successful, numberOfAttempts) {
    Console.print(MESSAGE.resultTitle);
    this.printMap(bridgeMap);
    Console.print(MESSAGE.result(successful, numberOfAttempts));
    Console.close();
  },
};

module.exports = OutputView;
