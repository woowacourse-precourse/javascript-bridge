const { Console } = require('@woowacourse/mission-utils');
const { MESSAGE } = require('./Constants');
/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 */
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
    let mapString = '[';
    mapList.forEach((mark) => {
      mapString += ` ${mark} |`;
    });
    mapString = `${mapString.slice(0, -1)}]`;
    return mapString;
  },

  printResult(bridgeMap, { isSuccess, numberOfAttempts }) {
    Console.print(MESSAGE.result);
    this.printMap(bridgeMap);
    Console.print('');
    Console.print(MESSAGE.success(isSuccess));
    Console.print(MESSAGE.attempts(numberOfAttempts));
    Console.close();
  },
};

module.exports = OutputView;
