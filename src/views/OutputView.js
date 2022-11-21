const { Console } = require('@woowacourse/mission-utils');
const { OUTPUT_MESSAGE, BRIDGE } = require('../utils/constants');

const OutputView = {
  printStart() {
    Console.print(OUTPUT_MESSAGE.gameStart);
  },

  printMap(bridgeMap) {
    const upBridgeMap = `[ ${[...bridgeMap[BRIDGE.up]].join(' | ')} ]`;
    const downBridgeMap = `[ ${[...bridgeMap[BRIDGE.down]].join(' | ')} ]`;
    Console.print(upBridgeMap);
    Console.print(downBridgeMap);
  },

  printResult({ bridgeMap, isSuccess, tryCount }) {
    Console.print(OUTPUT_MESSAGE.gameQuit);
    this.printMap(bridgeMap);
    if (isSuccess) Console.print(OUTPUT_MESSAGE.gameSuccess);
    if (!isSuccess) Console.print(OUTPUT_MESSAGE.gameFail);
    Console.print(OUTPUT_MESSAGE.gameTryCount(tryCount));
    Console.close();
  },

  printError(errorMessage) {
    Console.print(errorMessage);
  },
};

module.exports = OutputView;
