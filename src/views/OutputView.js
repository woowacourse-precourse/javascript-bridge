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

  printResult([bridgeState, numberOfAttempts, doesUserWin]) {
    Console.print(MESSAGE.RESULT_NOTIFICATION);
    OutputView.printMap(bridgeState);
    Console.print(MESSAGE.winOrFail(doesUserWin));
    Console.print(MESSAGE.numberOfAttempts(numberOfAttempts));
  },
};

module.exports = OutputView;
