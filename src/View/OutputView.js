const { MESSAGE, COMMAND } = require('../Utils/Constants.js');
const { printMessage } = require('../Utils/Utils.js');

const OutputView = {
  printMap(bridgeMap) {
    const upperBridge = `[ ${bridgeMap[COMMAND.UP].join(' | ')} ]`;
    const lowerBridge = `[ ${bridgeMap[COMMAND.DOWN].join(' | ')} ]`;
    printMessage(`${upperBridge}\n${lowerBridge}`);
  },

  printResult(bridgeMap, result, count) {
    printMessage('최종 게임 결과');
    this.printMap(bridgeMap);
    printMessage(`\n게임 성공 여부: ${result} `);
    printMessage(`총 시도한 횟수: ${count} `);
  },

  printStartMessage() {
    printMessage(MESSAGE.GAME_START);
  },
};

module.exports = OutputView;
