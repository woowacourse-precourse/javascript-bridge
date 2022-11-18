const { Console } = require('@woowacourse/mission-utils');
const { MESSAGE } = require('../constant');

const OutputView = {
  printMessage(message) {
    Console.print(message);
  },

  printMap(bridgeState) {
    bridgeState.forEach((row, idx) => {
      Console.print(MESSAGE.state(row, idx));
    });
  },

  printResult([bridgeState, isSuccess, numberOfAttempts]) {
    Console.print(MESSAGE.RESULT_NOTIFICATION);
    OutputView.printMap(bridgeState);
    Console.print(MESSAGE.clear(isSuccess));
    Console.print(MESSAGE.numberOfAttempts(numberOfAttempts));
  },
};

module.exports = OutputView;
