const { MESSAGE, COMMAND } = require('../Constants.js');
const { printMessage } = require('../Utils.js');

const OutputView = {
  printMap(bridgeMap) {
    const upperBridge = `[ ${bridgeMap[COMMAND.UP].join(' | ')} ]`;
    const lowerBridge = `[ ${bridgeMap[COMMAND.DOWN].join(' | ')} ]`;
    printMessage(`${upperBridge}\n${lowerBridge}`);
  },

  printResult(bridgeMap, str, count) {
    printMessage('최종 게임 결과');
    this.printMap(bridgeMap);
    printMessage(`게임 성공 여부: ${str} `);
    printMessage(`총 시도한 횟수: ${count} `);
  },

  printStartMessage() {
    printMessage(MESSAGE.GAME_START);
  },
};

module.exports = OutputView;
