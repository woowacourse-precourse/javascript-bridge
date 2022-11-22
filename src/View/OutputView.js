const { MESSAGE, DIRECTION } = require('../Utils/Constants.js');
const { printMessage, close } = require('../Utils/ConsoleUtils.js');

const OutputView = {
  printMap(bridgeMap) {
    const upperBridge = `[ ${bridgeMap[DIRECTION.UP].join(' | ')} ]`;
    const lowerBridge = `[ ${bridgeMap[DIRECTION.DOWN].join(' | ')} ]`;
    printMessage(`${upperBridge}\n${lowerBridge}`);
  },

  printResult(bridgeMap, result, count) {
    printMessage(MESSAGE.GAME_RESULT_NOTICE);
    this.printMap(bridgeMap);
    printMessage(MESSAGE.GAME_RESULT(result));
    printMessage(MESSAGE.ATTEMPT_NUMBER(count));
    close();
  },

  printStartMessage() {
    printMessage(MESSAGE.GAME_START);
  },
};

module.exports = OutputView;
